import { z } from 'zod';

import { SpotifyAlbumSchema } from './spotify.album.model';
import { SpotifyArtistSchema } from './spotify.artist.model';
import { SpotifyExternalUrlsSchema } from './spotify.common.model';

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

const SpotifyTracksSchema = z.object({
  href: z.string(),
  items: z.array(SpotifyTrackSchema),
  limit: z.number(),
  next: z.string(),
  offset: z.number(),
  previous: z.string(),
  total: z.number(),
});

export type SpotifyTrack = z.infer<typeof SpotifyTrackSchema>;

export type SpotifyTracks = z.infer<typeof SpotifyTracksSchema>;
