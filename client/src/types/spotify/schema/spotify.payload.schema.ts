import { z } from 'zod';
import { SpotifyTimeRange } from '../enum/spotify.payload.enum';

const SpotifyTimeRangeSchema = z.nativeEnum(SpotifyTimeRange);

export const SpotifyPayloadSchema = z.object({
  limit: z.number().optional(),
  time_range: SpotifyTimeRangeSchema.optional(),
});
