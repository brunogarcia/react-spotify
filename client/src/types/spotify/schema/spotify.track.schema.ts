import { z } from 'zod';

import { SpotifyAlbumSchema } from './spotify.album.schema';
import { SpotifyArtistSchema } from './spotify.artist.schema';
import { SpotifyExternalUrlsSchema } from './spotify.common.schema';

export const SpotifyTrackSchema = z.object({
  album: SpotifyAlbumSchema,
  artists: z.array(SpotifyArtistSchema),
  available_markets: z.array(z.string()),
  disc_number: z.number(),
  duration_ms: z.number(),
  explicit: z.boolean(),
  external_urls: SpotifyExternalUrlsSchema,
  href: z.string(),
  id: z.string(),
  is_local: z.boolean(),
  name: z.string(),
  popularity: z.number(),
  preview_url: z.string(),
  track_number: z.number(),
  type: z.literal('track'),
  uri: z.string(),
});

export const SpotifyTracksSchema = z.object({
  href: z.string(),
  items: z.array(SpotifyTrackSchema),
  limit: z.number(),
  next: z.string(),
  offset: z.number(),
  previous: z.string(),
  total: z.number(),
});
