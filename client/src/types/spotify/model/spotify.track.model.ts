import { z } from 'zod';
import { SpotifyTrackSchema,  SpotifyTracksSchema } from '../schema/spotify.track.schema';

export type SpotifyTrack = z.infer<typeof SpotifyTrackSchema>;
export type SpotifyTracks = z.infer<typeof SpotifyTracksSchema>;
