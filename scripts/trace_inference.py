# /// script
# requires-python = ">=3.12"
# dependencies = ["torch==2.15.0", "transformers==5.23.0"]
# ///
"""Record one real run of a chat model for the Inference page.

Runs greedy decoding on the prompt below and writes _data/inference.json with
the token IDs, input embeddings, attention, layer-by-layer predictions, and
next-token probabilities from that run. Run with: uv run scripts/trace_inference.py
"""

import base64
import json
from pathlib import Path

import torch
import transformers
from transformers import AutoModelForCausalLM, AutoTokenizer

MODEL = "Qwen/Qwen2.5-3B-Instruct"
REVISION = "aa8e72537993ba99e69dfaafa59ed015b17504d1"
SYSTEM = (
    "You are the assistant on Hunter Scheppat's website. When a visitor types just his name, "
    "reply with one short, direct question: ask what they want to know about Hunter Scheppat."
)
PROMPT = "hunter scheppat"
TOP_K = 8
MAX_NEW_TOKENS = 32
OUTPUT = Path(__file__).resolve().parent.parent / "_data" / "inference.json"


def encode_bytes(values):
    """Pack integers in 0..255 as base64 so large arrays stay small in the page."""
    return base64.b64encode(bytes(values)).decode()


def quantize_signed(vector, scale):
    """Map values in [-scale, scale] to 1..255 with 128 as zero, clipping outliers."""
    return [128 + round(max(-1.0, min(1.0, v / scale)) * 127) for v in vector.tolist()]


def main():
    tokenizer = AutoTokenizer.from_pretrained(MODEL, revision=REVISION)
    model = AutoModelForCausalLM.from_pretrained(
        MODEL, revision=REVISION, dtype=torch.float32, attn_implementation="eager"
    ).eval()
    config = model.config

    messages = [{"role": "system", "content": SYSTEM}, {"role": "user", "content": PROMPT}]
    text = tokenizer.apply_chat_template(messages, add_generation_prompt=True, tokenize=False)
    encoded = tokenizer(text, return_offsets_mapping=True, add_special_tokens=False)
    prompt_ids = encoded["input_ids"]
    system_start = text.index(SYSTEM)
    user_start = text.index(PROMPT, system_start + len(SYSTEM))

    def part(offset):
        if system_start <= offset < system_start + len(SYSTEM):
            return "system"
        if user_start <= offset < user_start + len(PROMPT):
            return "user"
        return "template"

    context = [
        {"text": tokenizer.decode([token_id]), "id": token_id, "part": part(start)}
        for token_id, (start, _) in zip(prompt_ids, encoded["offset_mapping"])
    ]

    with torch.no_grad():
        generated = model.generate(
            torch.tensor([prompt_ids]), max_new_tokens=MAX_NEW_TOKENS, do_sample=False
        )[0, len(prompt_ids):].tolist()
        stop_ids = model.generation_config.eos_token_id
        if generated[-1] not in (stop_ids if isinstance(stop_ids, list) else [stop_ids]):
            raise SystemExit(f"Generation did not finish within {MAX_NEW_TOKENS} tokens")

        # One forward pass over the prompt and every generated token except the
        # final end-of-turn token, which is never read back in.
        sequence = torch.tensor([prompt_ids + generated[:-1]])
        out = model(sequence, output_attentions=True, output_hidden_states=True)

    logits = out.logits[0]
    hidden = out.hidden_states
    layers = config.num_hidden_layers

    steps = []
    for step, token_id in enumerate(generated):
        position = len(prompt_ids) - 1 + step
        probs = logits[position].softmax(-1)
        if probs.argmax().item() != token_id:
            raise SystemExit(f"Step {step} does not match greedy generation")
        top = probs.topk(TOP_K)

        # Logit lens: decode the residual stream after each layer with the
        # model's own final norm and output projection. The last entry in
        # hidden_states already has the final norm applied.
        lens_tokens, lens_top, lens_chosen = [], [], []
        for layer in range(1, layers + 1):
            state = hidden[layer][0, position]
            if layer < layers:
                state = model.model.norm(state)
            layer_probs = model.lm_head(state).softmax(-1)
            best = layer_probs.argmax().item()
            lens_tokens.append(tokenizer.decode([best]))
            lens_top.append(round(layer_probs[best].item(), 4))
            lens_chosen.append(round(layer_probs[token_id].item(), 4))
        if lens_tokens[-1] != tokenizer.decode([token_id]):
            raise SystemExit(f"Logit lens disagrees with model output at step {step}")

        steps.append({
            "text": tokenizer.decode([token_id]),
            "id": token_id,
            "p": round(probs[token_id].item(), 4),
            "top": [
                {"text": tokenizer.decode([i]), "id": i, "p": round(p, 4)}
                for p, i in zip(top.values.tolist(), top.indices.tolist())
            ],
            "lens": {"text": lens_tokens, "p": lens_top, "chosen": lens_chosen},
        })

    # Input embeddings of the visitor's tokens and the reply (without the
    # end-of-turn token), in that order, on one shared color scale.
    user_positions = [i for i, token in enumerate(context) if token["part"] == "user"]
    table = model.get_input_embeddings().weight
    vectors = [table[context[i]["id"]] for i in user_positions] + [table[i] for i in generated[:-1]]
    scale = torch.cat(vectors).abs().quantile(0.99).item()
    embeddings = {
        "scale": round(scale, 4),
        "tokens": [
            {
                "head": [round(v, 4) for v in vector[:6].tolist()],
                "cells": encode_bytes(quantize_signed(vector, scale)),
            }
            for vector in vectors
        ],
    }

    # Attention averaged over heads. Rows and columns run from the visitor's
    # first token to the end of the reply; everything before that (system
    # prompt and its template) is summed into one leading "earlier" column.
    first = user_positions[0]
    size = sequence.shape[1] - first
    attention = []
    for layer_attention in out.attentions:
        weights = layer_attention[0].mean(0)[first:, :]
        earlier = weights[:, :first].sum(-1, keepdim=True)
        grid = torch.cat([earlier, weights[:, first:]], dim=-1)
        attention.append(encode_bytes(round(v * 255) for v in grid.flatten().tolist()))

    trace = {
        "model": {
            "name": MODEL,
            "revision": REVISION,
            "parameters": sum(p.numel() for p in model.parameters()),
            "layers": layers,
            "heads": config.num_attention_heads,
            "kv_heads": config.num_key_value_heads,
            "hidden": config.hidden_size,
            "vocab": len(tokenizer),
            "transformers": transformers.__version__,
            "torch": torch.__version__,
        },
        "system": SYSTEM,
        "prompt": PROMPT,
        "context": context,
        "embeddings": embeddings,
        "attention": {"first": first, "size": size, "layers": attention},
        "steps": steps,
        "reply": tokenizer.decode(generated, skip_special_tokens=True),
    }
    OUTPUT.write_text(json.dumps(trace, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"{trace['reply']!r}: {len(steps)} steps, {OUTPUT.stat().st_size / 1024:.0f} KB")
    print(" ".join(f"{s['text']!r}:{s['p']:.2f}" for s in steps))


if __name__ == "__main__":
    main()
