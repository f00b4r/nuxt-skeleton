export function newResizeObserver(callback: () => void) {
  // Skip this feature for browsers which
  // do not support ResizeObserver.
  // https://caniuse.com/#search=resizeobserver
  if (typeof ResizeObserver === "undefined") return;
  return new ResizeObserver((e) => e.map(callback));
}
