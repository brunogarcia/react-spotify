import { z } from 'zod';

export enum SpotifyTimeRange {
  LONG_TERM = 'long_term',
  MEDIUM_TERM = 'medium_term',
  SHORT_TERM = 'short_term',
}

const SpotifyTimeRangeSchema = z.nativeEnum(SpotifyTimeRange);

const SpotifyPayloadSchema = z.object({
  limit: z.number().optional(),
  time_range: SpotifyTimeRangeSchema.optional(),
});

export type SpotifyPayload = z.infer<typeof SpotifyPayloadSchema>;
