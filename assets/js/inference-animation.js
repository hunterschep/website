// Front-page animation of the recorded model run: the prompt, the model's work,
// and the reply. Token IDs, vectors, attention, guesses, and probabilities all
// come from the recording; only the timing is chosen for display.
import { decode, isSpecial, loadTrace } from "./trace.js";

const hero = document.getElementById("hero");
const canvas = hero.querySelector("canvas");
const toggle = hero.querySelector(".hero__toggle");
const ctx = canvas.getContext("2d");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const css = getComputedStyle(document.documentElement);
const color = (name) => css.getPropertyValue(name).trim();
const rgb = (name) => color(name).match(/[0-9a-f]{2}/gi).map((hex) => parseInt(hex, 16));
const ink = { maroon: color("--maroon"), text: color("--ink"), muted: color("--muted"), rule: color("--rule"), paper: color("--paper"), bar: color("--bar") };
const mono = color("--mono");
const sans = getComputedStyle(document.body).fontFamily;

const clamp = (x) => Math.min(Math.max(x, 0), 1);
const ease = (x) => (x < 0.5 ? 2 * x * x : 1 - (-2 * x + 2) ** 2 / 2);
const lerp = (a, b, k) => a + (b - a) * k;

// An embedding as a 16 x 128 image, maroon above zero and blue below.
function texture(values) {
  const [positive, negative, zero] = ["--maroon", "--cool", "--neutral"].map(rgb);
  const image = new ImageData(16, values.length / 16);
  values.forEach((byte, i) => {
    const value = (byte - 128) / 127;
    const pole = value > 0 ? positive : negative;
    for (let c = 0; c < 3; c++) image.data[i * 4 + c] = zero[c] + (pole[c] - zero[c]) * Math.abs(value);
    image.data[i * 4 + 3] = 255;
  });
  const node = document.createElement("canvas");
  node.width = image.width;
  node.height = image.height;
  node.getContext("2d").putImageData(image, 0, 0);
  return node;
}

function animate(trace) {
  const { steps } = trace;
  const layers = trace.model.layers;
  const user = trace.context.filter((token) => token.part === "user");
  const tokens = [...user, ...steps.filter((step) => !isSpecial(step.text))].map((token, index) => ({
    text: token.text,
    label: token.text.trim(),
    id: token.id,
    user: index < user.length,
    texture: texture(decode(trace.embeddings.tokens[index].cells)),
  }));
  const attention = trace.attention.layers.map(decode);
  const size = trace.attention.size;
  // Row of the first reply token in the attention grid; the row before it is
  // the chat template's last token, which predicts the first reply token.
  const firstReplyRow = trace.context.length - trace.attention.first;

  // Timeline in seconds. The first pass is slow; near ties get extra time.
  const timeline = [];
  let total = 0;
  const add = (kind, duration, step) => {
    timeline.push({ kind, step, start: total, end: total + duration });
    total += duration;
  };
  add("type", 1);
  add("split", 0.9);
  add("embed", 0.8);
  steps.forEach((step, s) => {
    const close = step.top[0].p - step.top[1].p < 0.05;
    add("scan", s === 0 ? 1.8 : close ? 0.5 : 0.2, s);
    add("bars", s === 0 ? 0.6 : close ? 1.2 : 0.16, s);
    if (!isSpecial(step.text)) add("fly", s === 0 ? 0.45 : 0.22, s);
  });
  add("hold", 0.3);

  function stateAt(time) {
    const state = { typed: 0, split: 0, embed: 0, appended: 0, pass: null, bars: null, fly: null };
    for (const phase of timeline) {
      if (time < phase.start) break;
      const k = clamp((time - phase.start) / (phase.end - phase.start));
      if (phase.kind === "type") state.typed = k;
      else if (phase.kind === "split") state.split = ease(k);
      else if (phase.kind === "embed") state.embed = ease(k);
      else if (phase.kind === "scan") {
        state.pass = { step: phase.step, k, active: k < 1 };
        state.bars = null;
      } else if (phase.kind === "bars") state.bars = { step: phase.step, k: ease(k) };
      else if (phase.kind === "fly") {
        if (k < 1) state.fly = { step: phase.step, k: ease(k) };
        else state.appended++;
      }
    }
    return state;
  }

  // Layout in CSS pixels, recomputed when the canvas changes size.
  let view;
  function layout() {
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    // Size the type so the finished sequence fills the width, within limits.
    const gap = 4;
    const nextWidth = 16;
    ctx.font = `10px ${mono}`;
    const textWidth = tokens.reduce((sum, token) => sum + ctx.measureText(token.label).width, 0);
    const room = width - 32 - tokens.length * (10 + gap) - nextWidth;
    const font = Math.max(11, Math.min(16, Math.floor((10 * room) / textWidth)));
    ctx.font = `${font}px ${mono}`;
    let x = 0;
    const slots = tokens.map((token) => {
      const slot = { x, w: ctx.measureText(token.label).width + 10 };
      x += slot.w + gap;
      return slot;
    });
    const total = x + nextWidth;
    const start = total <= width - 32 ? (width - total) / 2 : 16;
    for (const slot of slots) slot.x += start;
    // Where each prompt token's text starts while the prompt is still one string.
    let typed = "";
    const prompt = user.map((token) => {
      const x = start + 5 + ctx.measureText(typed + token.text.match(/^\s*/)[0]).width;
      typed += token.text;
      return x;
    });
    const chip = { top: 10, height: font + 10 };
    const rowY = chip.top + chip.height / 2;
    const idY = chip.top + chip.height + 8;
    const stackTop = idY + 12;
    const barsY = height - 44;
    view = { width, height, ratio, font, slots, prompt, start, nextWidth, gap, chip, rowY, idY, stackTop, stackBottom: barsY - 18, barsY };
  }

  const nextX = (count) => view.slots[count - 1].x + view.slots[count - 1].w + view.gap;
  // Keep the sequence so far centered, or pinned to the right edge once it overflows.
  const camera = (count) => {
    const width = nextX(count) + view.nextWidth - view.start;
    return view.start - Math.min((view.width - width) / 2, view.width - 16 - width);
  };

  // The top three candidates side by side, or the top two if three don't fit.
  function barCells(step) {
    ctx.font = `${view.font}px ${mono}`;
    const gap = 28;
    for (const count of [3, 2]) {
      // Show a leading space only when two candidates would otherwise look the same.
      const trimmed = step.top.slice(0, count).map((candidate) => candidate.text.trim());
      const cells = step.top.slice(0, count).map((candidate, i) => {
        const label = trimmed.indexOf(trimmed[i]) !== trimmed.lastIndexOf(trimmed[i]) ? candidate.text.replace(/^ /, "␣") : trimmed[i] || "␣";
        return { candidate: { ...candidate, label }, labelWidth: ctx.measureText(label).width };
      });
      const fixed = cells.reduce((sum, cell) => sum + cell.labelWidth + 56, 0) + gap * (count - 1);
      const barMax = Math.min(90, (view.width - 24 - fixed) / count);
      if (barMax < 24 && count > 2) continue;
      let x = Math.max(12, (view.width - fixed - barMax * count) / 2);
      for (const cell of cells) {
        Object.assign(cell, { x, barMax: Math.max(barMax, 16) });
        x += cell.labelWidth + cell.barMax + 56 + gap;
      }
      return cells;
    }
  }

  const stages = ["prompt", "tokens", "vectors", "layers", "next token", "reply"];

  function draw(time) {
    const state = stateAt(time);
    const { width, height, ratio, font, slots, chip, rowY, idY, stackTop, stackBottom, barsY } = view;
    const stackHeight = stackBottom - stackTop;
    const present = user.length + state.appended;
    const shift = state.fly ? lerp(camera(present), camera(present + 1), state.fly.k) : camera(present);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    ctx.textBaseline = "middle";
    ctx.save();
    ctx.translate(-shift, 0);

    const next = nextX(present);
    const right = next + view.nextWidth;
    const layerY = (layer) => stackTop + ((layer + 0.5) / layers) * stackHeight;

    // Layer lines behind the columns.
    if (state.embed > 0) {
      ctx.globalAlpha = state.embed;
      ctx.strokeStyle = ink.rule;
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let layer = 0; layer < layers; layer++) {
        ctx.moveTo(view.start, layerY(layer));
        ctx.lineTo(right, layerY(layer));
      }
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // Each token's vector as a column through the layers. A column lights up
    // as the layers process it; earlier tokens stay lit (their work is cached).
    const pass = state.pass;
    const lit = (index) => {
      if (!pass) return 0;
      if (pass.step === 0) return index < user.length ? pass.k : 0;
      const query = user.length + pass.step - 1;
      return index < query ? 1 : index === query ? pass.k : 0;
    };
    ctx.imageSmoothingEnabled = false;
    tokens.slice(0, present).forEach((token, index) => {
      const slot = slots[index];
      const grown = token.user ? state.embed : 1;
      if (grown <= 0) return;
      const x = slot.x + 2;
      const w = slot.w - 4;
      ctx.globalAlpha = 0.25;
      ctx.drawImage(token.texture, x, stackTop, w, stackHeight * grown);
      const done = lit(index) * stackHeight;
      if (done > 0) {
        ctx.globalAlpha = 0.95;
        ctx.drawImage(token.texture, 0, 0, 16, token.texture.height * (done / stackHeight), x, stackTop, w, done);
      }
    });
    ctx.globalAlpha = 1;

    // Layer lines over the columns, so each column reads as a stack.
    if (state.embed > 0) {
      ctx.strokeStyle = ink.paper;
      ctx.globalAlpha = 0.45;
      ctx.beginPath();
      for (let layer = 0; layer < layers; layer++) {
        ctx.moveTo(view.start, layerY(layer));
        ctx.lineTo(right, layerY(layer));
      }
      ctx.stroke();
      ctx.globalAlpha = 1;
    }

    // The slot for the next token.
    if (state.split >= 1) {
      ctx.setLineDash([3, 3]);
      ctx.strokeStyle = ink.muted;
      ctx.globalAlpha = 0.6;
      ctx.strokeRect(next + 0.5, chip.top + 0.5, view.nextWidth - 1, chip.height - 1);
      if (state.embed > 0) ctx.strokeRect(next + 2.5, stackTop + 0.5, view.nextWidth - 5, stackHeight - 1);
      ctx.setLineDash([]);
      ctx.globalAlpha = 1;
    }

    // Attention arcs and the model's running guess, layer by layer.
    if (pass && pass.active) {
      const step = steps[pass.step];
      const layer = Math.min(layers - 1, Math.floor(pass.k * layers));
      const y = stackTop + pass.k * stackHeight;
      const queryIndex = pass.step === 0 ? null : user.length + pass.step - 1;
      const qx = queryIndex === null ? next + view.nextWidth / 2 : slots[queryIndex].x + slots[queryIndex].w / 2;
      const row = firstReplyRow - 1 + pass.step;
      const keys = Array.from({ length: queryIndex ?? user.length }, (_, k) => k);
      const weights = keys.map((k) => attention[layer][row * (size + 1) + (k < user.length ? k : firstReplyRow + k - user.length) + 1]);
      const strongest = Math.max(...weights, 1);
      keys.forEach((k, i) => {
        const w = weights[i] / strongest;
        const tx = slots[k].x + slots[k].w / 2;
        ctx.strokeStyle = ink.maroon;
        ctx.globalAlpha = 0.12 + 0.75 * w;
        ctx.lineWidth = 0.6 + 2.4 * w;
        ctx.beginPath();
        ctx.moveTo(qx, y);
        ctx.quadraticCurveTo((qx + tx) / 2, Math.max(4, y - 16 - Math.abs(qx - tx) * 0.22), tx, y);
        ctx.stroke();
      });
      ctx.globalAlpha = 1;
      if (slots[0].x - shift > 30) {
        ctx.font = `10px ${sans}`;
        ctx.textAlign = "right";
        ctx.fillStyle = ink.muted;
        ctx.fillText(`layer ${layer + 1}`, slots[0].x - 6, y);
        ctx.textAlign = "left";
      }
      ctx.shadowColor = ink.maroon;
      ctx.shadowBlur = 8;
      ctx.fillStyle = ink.maroon;
      ctx.fillRect(view.start, y - 0.75, right - view.start, 1.5);
      ctx.shadowBlur = 0;

      const guess = step.lens.text[layer].trim() || "␣";
      ctx.font = `${font}px ${mono}`;
      const guessX = Math.min(next + view.nextWidth + 6, shift + width - 8 - ctx.measureText(guess).width);
      ctx.globalAlpha = 0.35 + 0.65 * step.lens.p[layer];
      ctx.lineWidth = 3;
      ctx.strokeStyle = ink.paper;
      ctx.strokeText(guess, guessX, y - 8);
      ctx.fillStyle = step.lens.text[layer] === step.text ? ink.maroon : ink.text;
      ctx.fillText(guess, guessX, y - 8);
      ctx.globalAlpha = 1;
    }

    // Prompt, then its tokens, then the reply as it grows.
    ctx.font = `${font}px ${mono}`;
    if (state.split === 0) {
      const typed = trace.prompt.slice(0, Math.round(state.typed * trace.prompt.length));
      ctx.fillStyle = ink.maroon;
      ctx.fillText(typed, view.start + 5, rowY);
      if (Math.floor(time * 2.5) % 2 === 0) ctx.fillRect(view.start + 6 + ctx.measureText(typed).width, rowY - font / 2, 1.5, font);
    } else {
      tokens.slice(0, present).forEach((token, index) => {
        const slot = slots[index];
        const fade = token.user ? state.split : 1;
        const x = token.user ? lerp(view.prompt[index], slot.x + 5, state.split) : slot.x + 5;
        ctx.globalAlpha = fade * (token.user ? 0.07 : 0.05);
        ctx.fillStyle = token.user ? ink.maroon : ink.text;
        ctx.beginPath();
        ctx.roundRect(x - 5, chip.top, slot.w, chip.height, 3);
        ctx.fill();
        ctx.globalAlpha = 1;
        ctx.fillStyle = token.user ? ink.maroon : ink.text;
        ctx.font = `${font}px ${mono}`;
        ctx.fillText(token.label, x, rowY);
        ctx.globalAlpha = fade;
        ctx.fillStyle = ink.muted;
        ctx.font = `9px ${mono}`;
        ctx.fillText(String(token.id), x, idY);
        ctx.globalAlpha = 1;
      });
    }
    ctx.restore();

    // Next-token probabilities for the current step: the top three, side by side.
    const barStep = state.bars ?? (state.fly ? { step: state.fly.step, k: 1 } : null);
    const cells = barStep ? barCells(steps[barStep.step]) : [];
    if (barStep) {
      ctx.globalAlpha = state.fly ? 1 - state.fly.k : 1;
      cells.forEach(({ candidate, x, labelWidth, barMax }, i) => {
        const chosen = i === 0;
        const share = candidate.p * barStep.k;
        ctx.font = `${font}px ${mono}`;
        ctx.fillStyle = chosen ? ink.maroon : ink.muted;
        ctx.fillText(candidate.label, x, barsY);
        ctx.fillStyle = chosen ? ink.maroon : ink.bar;
        ctx.fillRect(x + labelWidth + 6, barsY - 4.5, Math.max(1.5, barMax * share), 9);
        ctx.font = `11px ${sans}`;
        ctx.fillStyle = ink.text;
        ctx.fillText(share >= 0.9995 ? ">99.9%" : share < 0.0005 ? "<0.1%" : `${(share * 100).toFixed(1)}%`, x + labelWidth + barMax + 12, barsY);
      });
      ctx.globalAlpha = 1;
    }

    // The winning token flies up into the next slot.
    if (state.fly) {
      const label = steps[state.fly.step].text.trim();
      const k = state.fly.k;
      ctx.font = `${font}px ${mono}`;
      const x = lerp(cells[0].x, slots[present].x + 5 - shift, k);
      const y = lerp(barsY, rowY, k) - Math.sin(k * Math.PI) * 24;
      ctx.lineWidth = 3;
      ctx.strokeStyle = ink.paper;
      ctx.strokeText(label, x, y);
      ctx.fillStyle = ink.maroon;
      ctx.fillText(label, x, y);
    }

    // Where the run is: one stage lit at a time.
    let stage = 0;
    if (time >= total) stage = 5;
    else if (pass?.active) stage = 3;
    else if (pass) stage = 4;
    else if (state.embed > 0) stage = 2;
    else if (state.split > 0) stage = 1;
    ctx.font = `11px ${sans}`;
    let x = 12;
    stages.forEach((name, i) => {
      if (i > 0) {
        ctx.fillStyle = ink.rule;
        ctx.fillText("›", x, height - 14);
        x += ctx.measureText("› ").width;
      }
      ctx.fillStyle = i === stage ? ink.maroon : ink.muted;
      ctx.globalAlpha = i === stage ? 1 : 0.6;
      ctx.fillText(name, x, height - 14);
      x += ctx.measureText(`${name} `).width;
    });
    ctx.globalAlpha = 1;
    if (pass && stage < 5 && x + 90 < width) {
      ctx.fillStyle = ink.muted;
      ctx.fillText(`token ${pass.step + 1} of ${steps.length}`, width - 12 - ctx.measureText(`token ${pass.step + 1} of ${steps.length}`).width, height - 14);
    }
  }

  let time = 0;
  let last = null;
  let frame = 0;
  function tick(now) {
    if (last !== null) time += Math.min((now - last) / 1000, 0.05);
    last = now;
    if (time >= total) return finish();
    draw(time);
    frame = requestAnimationFrame(tick);
  }
  function play() {
    cancelAnimationFrame(frame);
    time = 0;
    last = null;
    hero.classList.remove("is-resolved");
    hero.classList.add("is-playing");
    toggle.textContent = "Skip";
    frame = requestAnimationFrame(tick);
  }
  function finish() {
    cancelAnimationFrame(frame);
    time = total;
    draw(total);
    hero.classList.remove("is-playing");
    hero.classList.add("is-resolved");
    toggle.textContent = "Replay";
  }

  layout();
  new ResizeObserver(() => {
    layout();
    draw(Math.min(time, total));
  }).observe(canvas);
  toggle.addEventListener("click", () => (hero.classList.contains("is-resolved") ? play() : finish()));
  toggle.hidden = false;
  hero.classList.add("is-ready");
  if (reduceMotion) finish();
  else play();
}

// If the recording can't load, the static reply in the markup stays in place.
loadTrace().then(animate, (error) => console.error(error));
