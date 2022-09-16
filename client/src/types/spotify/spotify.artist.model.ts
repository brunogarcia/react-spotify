import { z } from 'zod';
import {
  SpotifyImageSchema,
  SpotifyFollowersSchema,
  SpotifyExternalUrlsSchema,
} from './spotify.common.model';

export const SpotifyArtistSchema = z.object({
  external_urls: SpotifyExternalUrlsSchema,
  followers: SpotifyFollowersSchema,
  genres: z.array(z.string()),
  href: z.string(),
  id: z.string(),
  images: z.array(SpotifyImageSchema),
  name: z.string(),
  popularity: z.number(),
  type: z.literal('artist'),
  uri: z.string()
});

export type SpotifyArtist = z.infer<typeof SpotifyArtistSchema>;
