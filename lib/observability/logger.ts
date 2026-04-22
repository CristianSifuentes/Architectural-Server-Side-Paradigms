// Minimal logger abstraction to keep observability calls consistent.
// In production you can replace this with pino/datadog/open-telemetry exporters.
export const appLogger = {
  info(message: string, context?: Record<string, unknown>) {
    console.info(`[info] ${message}`, context ?? {});
  },
  warn(message: string, context?: Record<string, unknown>) {
    console.warn(`[warn] ${message}`, context ?? {});
  },
};
