export function waitUtil(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}
