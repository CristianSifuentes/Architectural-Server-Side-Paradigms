// Utility function to measure server-side operation timing.
// For real deployments, propagate these durations through Server-Timing headers.
export async function withServerTiming<T>(name: string, fn: () => Promise<T>): Promise<T> {
  const started = performance.now();
  const result = await fn();
  const elapsed = performance.now() - started;
  console.info(`[timing] ${name}=${elapsed.toFixed(2)}ms`);
  return result;
}
