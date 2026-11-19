// Fills the "How this works" page from the recorded model run.
import { decode, isSpecial, loadTrace } from "./trace.js";

const trace = await loadTrace();
const { model, steps } = trace;
const userTokens = trace.context.filter((token) => token.part === "user");
const number = new Intl.NumberFormat("en-US");
const $ = (id) => document.getElementById(id);

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

// Token text in a monospace span, with spaces and line breaks made visible.
function tokenText(text) {
  const node = el("span", isSpecial(text) ? "token token--special" : "token");
  for (const part of text.split(/( |\n)/)) {
    if (part === " " || part === "\n") node.append(el("span", "ws", part === " " ? "␣" : "↵"));
    else if (part) node.append(part);
  }
  return node;
}

const plain = (text) => `“${text.replaceAll(" ", "␣").replaceAll("\n", "↵")}”`;

function percent(p) {
  if (p >= 0.9995) return ">99.9%";
  if (p < 0.0005) return "<0.1%";
  return `${(p * 100).toFixed(1)}%`;
}

const tint = (share) => `color-mix(in srgb, var(--maroon) ${Math.round(share * 100)}%, var(--paper))`;

// Numbers in the copy come from the recording.
const facts = {
  hidden: number.format(model.hidden),
  layers: model.layers,
  heads: model.heads,
  context: trace.context.length,
  parameters: `${(model.parameters / 1e9).toFixed(1)} billion`,
};
for (const node of document.querySelectorAll("[data-fill]")) node.textContent = facts[node.dataset.fill];

// Hover and focus tooltips for anything with data-tip.
const tooltip = $("tooltip");
function showTip(target) {
  tooltip.textContent = target.dataset.tip;
  tooltip.hidden = false;
  const box = target.getBoundingClientRect();
  const tip = tooltip.getBoundingClientRect();
  const left = Math.min(Math.max(8, box.left + box.width / 2 - tip.width / 2), window.innerWidth - tip.width - 8);
  const above = box.top - tip.height - 6;
  tooltip.style.left = `${left}px`;
  tooltip.style.top = `${above < 8 ? box.bottom + 6 : above}px`;
}
function updateTip(event) {
  const target = event.target.closest?.("[data-tip]");
  if (target) showTip(target);
  else tooltip.hidden = true;
}
document.addEventListener("pointerover", updateTip);
document.addEventListener("focusin", updateTip);
window.addEventListener("scroll", () => { tooltip.hidden = true; }, { passive: true });

// 1. Tokens
$("user-tokens").append(...userTokens.map((token) => {
  const card = el("div", "token-card");
  card.append(tokenText(token.text), el("span", "token-card__id", `ID ${token.id}`));
  return card;
}));
$("context").append(...trace.context.map((token) => {
  const node = tokenText(token.text);
  node.classList.add(`token--${token.part}`);
  node.dataset.tip = `ID ${token.id}`;
  return node;
}));

// 2. Embeddings: each vector drawn as a 64 x 32 grid, maroon above zero and blue below.
const root = getComputedStyle(document.documentElement);
const rgb = (name) => root.getPropertyValue(name).trim().match(/[0-9a-f]{2}/gi).map((hex) => parseInt(hex, 16));
const [positive, negative, zero] = ["--maroon", "--cool", "--neutral"].map(rgb);
const columns = 64;

$("embedding-grid").append(...trace.embeddings.tokens.slice(0, userTokens.length).map((vector, index) => {
  const values = decode(vector.cells);
  const canvas = el("canvas");
  canvas.width = columns;
  canvas.height = values.length / columns;
  const context = canvas.getContext("2d");
  const image = context.createImageData(canvas.width, canvas.height);
  values.forEach((byte, i) => {
    const value = (byte - 128) / 127;
    const pole = value > 0 ? positive : negative;
    for (let c = 0; c < 3; c++) image.data[i * 4 + c] = zero[c] + (pole[c] - zero[c]) * Math.abs(value);
    image.data[i * 4 + 3] = 255;
  });
  context.putImageData(image, 0, 0);
  canvas.setAttribute("role", "img");
  canvas.setAttribute("aria-label", `The ${values.length} numbers of the vector for ${plain(userTokens[index].text)}`);

  const figure = el("figure", "embedding");
  const caption = el("figcaption");
  caption.append(tokenText(userTokens[index].text), el("span", "token-card__id", `row ${userTokens[index].id}`));
  const head = vector.head.map((v) => v.toFixed(4).replace("-", "−")).join(", ");
  figure.append(caption, canvas, el("p", "embedding__values", `[${head}, … ${number.format(values.length - vector.head.length)} more]`));
  return figure;
}));

// 3. Attention, averaged over heads, from the visitor's first token to the end of the reply.
const attention = trace.attention.layers.map(decode);
const size = trace.attention.size;
const labels = [...trace.context.slice(trace.attention.first), ...steps.slice(0, -1)].map((token) => token.text);
const earlier = "the instruction and template";
const heatmap = $("heatmap");
const headRow = el("tr");
const earlierHead = el("th");
earlierHead.scope = "col";
earlierHead.append(el("span", "", "earlier"));
headRow.append(el("td"), earlierHead, ...labels.map((label) => {
  const th = el("th");
  th.scope = "col";
  th.append(tokenText(label));
  return th;
}));
heatmap.createTHead().append(headRow);

const cells = [];
const body = el("tbody");
labels.forEach((label, row) => {
  const tr = el("tr");
  const th = el("th");
  th.scope = "row";
  th.append(tokenText(label));
  tr.append(th);
  for (let column = 0; column <= size; column++) {
    const td = el("td");
    if (column > row + 1) td.className = "is-masked";
    else cells.push({ td, value: td.appendChild(el("span", "visually-hidden")), row, column });
    tr.append(td);
  }
  body.append(tr);
});
heatmap.append(body);

const layerInput = $("layer");
layerInput.max = model.layers;
function showLayer(layer) {
  const grid = attention[layer - 1];
  for (const { td, value, row, column } of cells) {
    const share = grid[row * (size + 1) + column] / 255;
    const target = column === 0 ? earlier : plain(labels[column - 1]);
    td.style.background = tint(Math.sqrt(share));
    td.dataset.tip = `${plain(labels[row])} → ${target}: ${percent(share)}`;
    value.textContent = percent(share);
  }
  layerInput.value = layer;
  $("layer-value").textContent = `${layer} of ${model.layers}`;
}

let playing = null;
const playButton = $("layer-play");
function stopLayers() {
  clearInterval(playing);
  playing = null;
  playButton.textContent = "Play";
}
playButton.addEventListener("click", () => {
  if (playing) return stopLayers();
  if (Number(layerInput.value) === model.layers) showLayer(1);
  playButton.textContent = "Pause";
  playing = setInterval(() => {
    const next = Number(layerInput.value) + 1;
    showLayer(next);
    if (next === model.layers) stopLayers();
  }, 260);
});
layerInput.addEventListener("input", () => {
  stopLayers();
  showLayer(Number(layerInput.value));
});

// 4. Next-token prediction for the selected step.
const stepButtons = steps.map((step, index) => {
  const button = el("button", "step");
  button.type = "button";
  button.append(tokenText(step.text));
  button.setAttribute("aria-label", `Step ${index + 1}: ${plain(step.text)}`);
  button.addEventListener("click", () => selectStep(index));
  return button;
});
$("steps").append(...stepButtons);

const margin = (step) => step.top[0].p - step.top[1].p;
const closest = steps.reduce((best, step, index) => (margin(step) < margin(steps[best]) ? index : best), 0);
const [winner, runnerUp] = steps[closest].top;
$("closest").textContent = `Most picks are near certain. The closest is step ${closest + 1}: “${winner.text.trim()}” beat “${runnerUp.text.trim()}” ${percent(winner.p)} to ${percent(runnerUp.p)}.`;

const lensCells = Array.from({ length: model.layers }, () => el("div", "lens__cell"));
$("lens").append(...lensCells);

function selectStep(index) {
  const step = steps[index];
  stepButtons.forEach((button, i) => button.setAttribute("aria-pressed", String(i === index)));
  $("candidates-title").textContent = `Top candidates at step ${index + 1} of ${steps.length}`;

  $("bars").replaceChildren(...step.top.flatMap((candidate) => {
    const bar = el("div", candidate.id === step.id ? "bar bar--chosen" : "bar");
    bar.style.width = `${candidate.p * 100}%`;
    const track = el("div", "bar__track");
    track.append(bar);
    const label = tokenText(candidate.text);
    label.classList.add("bar__label");
    return [label, track, el("span", "bar__value", percent(candidate.p))];
  }));

  const rest = 1 - step.top.reduce((sum, candidate) => sum + candidate.p, 0);
  $("bars-note").textContent = `The other ${number.format(model.vocab - step.top.length)} tokens share ${percent(Math.max(rest, 0))}.`;

  lensCells.forEach((cell, layer) => {
    const chosen = step.lens.chosen[layer];
    cell.replaceChildren(el("span", "lens__layer", layer + 1), tokenText(step.lens.text[layer]));
    cell.style.background = tint(chosen);
    cell.classList.toggle("is-dark", chosen > 0.5);
    cell.dataset.tip = `Layer ${layer + 1}: top guess ${plain(step.lens.text[layer])} ${percent(step.lens.p[layer])}, ${plain(step.text)} ${percent(chosen)}`;
  });
}

showLayer(1);
selectStep(0);
