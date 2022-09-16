import { z } from 'zod';
import {
  SpotifyPlaylistSchema,
  SpotifyPlaylistsSchema,
  SpotifyPlaylistTrackSchema,
  SpotifyPlaylistTracksSchema,
} from '../schema/spotify.playlist.schema';

export type SpotifyPlaylist = z.infer<typeof SpotifyPlaylistSchema>;
export type SpotifyPlaylists  = z.infer<typeof SpotifyPlaylistsSchema>;
export type SpotifyPlaylistTrack = z.infer<typeof SpotifyPlaylistTrackSchema>;
export type SpotifyPlaylistTracks = z.infer<typeof SpotifyPlaylistTracksSchema>;
