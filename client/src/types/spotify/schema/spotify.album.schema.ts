import { z } from 'zod';

import { SpotifyArtistSchema } from './spotify.artist.schema';
import {
  SpotifyImageSchema,
  SpotifyExternalUrlsSchema,
} from './spotify.common.schema';

export const SpotifyAlbumSchema = z.object({
  album_type: z.string(),
  artists: z.array(SpotifyArtistSchema),
  available_markets: z.array(z.string()),
  external_urls: SpotifyExternalUrlsSchema,
  href: z.string(),
  id: z.string(),
  images: z.array(SpotifyImageSchema),
  name: z.string(),
  release_date: z.string(),
  release_date_precision: z.string(),
  total_tracks: z.number(),
  type: z.literal('album'),
  uri: z.string()
});
