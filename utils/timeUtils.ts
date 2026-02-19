export function getTimestamp() {
  return new Date().toISOString();
}

export function getDuration(start: number) {
  return `${((Date.now() - start) / 1000).toFixed(2)}s`;
}
