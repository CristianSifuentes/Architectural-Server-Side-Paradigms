import { z } from 'zod';

const sseTickSchema = z.object({
  id: z.string(),
  ts: z.number(),
  level: z.enum(['ok', 'warn']),
  message: z.string(),
});

export function formatSseEvent(event: string, data: unknown) {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
}

export function parseSsePayload(rawData: string) {
  const parsedJson: unknown = JSON.parse(rawData);
  const result = sseTickSchema.safeParse(parsedJson);
  return result;
}
