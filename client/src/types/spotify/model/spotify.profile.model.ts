import { z } from 'zod';
import { SpotifyProfileSchema } from '../schema/spotify.profile.schema';

export type SpotifyProfile = z.infer<typeof SpotifyProfileSchema>;
