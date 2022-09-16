import { z } from 'zod';

import {
  SpotifyImageSchema,
  SpotifyFollowersSchema,
} from './spotify.common.model';

const SpotifyProfileSchema = z.object({
  display_name: z.string(),
  images: z.array(SpotifyImageSchema),
  followers: SpotifyFollowersSchema,
});

export type SpotifyProfile = z.infer<typeof SpotifyProfileSchema>;
