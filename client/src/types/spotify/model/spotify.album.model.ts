import { z } from 'zod';
import { SpotifyAlbumSchema } from '../schema/spotify.album.schema';

export type SpotifyAlbum = z.infer<typeof SpotifyAlbumSchema>;
