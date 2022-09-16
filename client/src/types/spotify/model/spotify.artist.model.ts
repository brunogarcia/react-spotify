import { z } from 'zod';
import { SpotifyArtistSchema } from '../schema/spotify.artist.schema';

export type SpotifyArtist = z.infer<typeof SpotifyArtistSchema>;
