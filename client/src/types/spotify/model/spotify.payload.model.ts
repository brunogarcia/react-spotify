import { z } from 'zod';
import { SpotifyPayloadSchema } from '../schema/spotify.payload.schema';

export type SpotifyPayload = z.infer<typeof SpotifyPayloadSchema>;
