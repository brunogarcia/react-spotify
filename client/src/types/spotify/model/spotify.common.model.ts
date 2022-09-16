import { z } from 'zod';
import {
  SpotifyOwnerSchema,
  SpotifyImageSchema,
  SpotifyFollowersSchema,
  SpotifyExternalUrlsSchema,
} from '../schema/spotify.common.schema';

export type SpotifyOwner  = z.infer<typeof SpotifyOwnerSchema>;
export type SpotifyImage  = z.infer<typeof SpotifyImageSchema>;
export type SpotifyFollowers = z.infer<typeof SpotifyFollowersSchema>;
export type SpotifyExternalUrls = z.infer<typeof SpotifyExternalUrlsSchema>;
