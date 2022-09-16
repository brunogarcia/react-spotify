import { z } from 'zod';
import { SpotifyTrackSchema } from './spotify.track.model';
import { SpotifyArtistSchema } from './spotify.artist.model';

const SpotifyUserTopItemsSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string(),
  offset: z.number(),
  previous: z.string(),
  total: z.number(),
});

const SpotifyUserTopArtistsSchema = SpotifyUserTopItemsSchema.extend({
  items: z.array(SpotifyArtistSchema),
});

const SpotifyUserTopTracksSchema = SpotifyUserTopItemsSchema.extend({
  items: z.array(SpotifyTrackSchema),
});

export type SpotifyUserTopArtists = z.infer<typeof SpotifyUserTopArtistsSchema>;

export type SpotifyUserTopTracks = z.infer<typeof SpotifyUserTopTracksSchema>;
