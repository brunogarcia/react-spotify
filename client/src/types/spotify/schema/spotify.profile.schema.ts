import { z } from 'zod';

import {
  SpotifyImageSchema,
  SpotifyFollowersSchema,
} from './spotify.common.schema';

export const SpotifyProfileSchema = z.object({
  display_name: z.string(),
  images: z.array(SpotifyImageSchema),
  followers: SpotifyFollowersSchema,
});
