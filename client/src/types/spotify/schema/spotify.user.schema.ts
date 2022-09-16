import { z } from 'zod';
import { SpotifyTrackSchema } from './spotify.track.schema';
import { SpotifyArtistSchema } from './spotify.artist.schema';

const SpotifyUserTopItemsSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string(),
  offset: z.number(),
  previous: z.string(),
  total: z.number(),
});

export const SpotifyUserTopArtistsSchema = SpotifyUserTopItemsSchema.extend({
  items: z.array(SpotifyArtistSchema),
});

export const SpotifyUserTopTracksSchema = SpotifyUserTopItemsSchema.extend({
  items: z.array(SpotifyTrackSchema),
});
