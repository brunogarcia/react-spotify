import { z } from 'zod';
import {
  SpotifyUserTopArtistsSchema,
  SpotifyUserTopTracksSchema,
} from '../schema/spotify.user.schema';

export type SpotifyUserTopTracks = z.infer<typeof SpotifyUserTopTracksSchema>;
export type SpotifyUserTopArtists = z.infer<typeof SpotifyUserTopArtistsSchema>;
