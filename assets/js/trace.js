// Loading and decoding for the recorded model run in _data/inference.json.
export const isSpecial = (text) => /^<\|.+\|>$/.test(text);

export const decode = (base64) => Uint8Array.from(atob(base64), (char) => char.charCodeAt(0));

export async function loadTrace() {
  const response = await fetch(new URL("../data/inference.json", import.meta.url));
  if (!response.ok) throw new Error(`Could not load the recorded run (${response.status})`);
  return response.json();
}
