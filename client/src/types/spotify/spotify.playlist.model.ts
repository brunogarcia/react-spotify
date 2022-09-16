import { z } from 'zod';

import { SpotifyTrackSchema } from "./spotify.track.model";
import {
  SpotifyExternalUrlsSchema,
  SpotifyFollowersSchema,
  SpotifyImageSchema,
  SpotifyOwnerSchema,
} from './spotify.common.model';

const SpotifyPlaylistTrackSchema = z.object({
  added_at: z.string(),
  added_by: z.object({
    external_urls: SpotifyExternalUrlsSchema,
  }),
  is_local: z.boolean(),
  primary_color: z.string().or(z.null()),
  track: SpotifyTrackSchema,
  video_thumbnail: z.object({
    url: z.string().or(z.null()),
  }),
});

const SpotifyPlaylistTracksSchema = z.object({
  href: z.string(),
  limit: z.number(),
  next: z.string(),
  offset: z.number(),
  previous: z.string().or(z.null()),
  total: z.number(),
  items: z.array(SpotifyPlaylistTrackSchema),
});

const SpotifyPlaylistSchema = z.object({
  collaborative: z.boolean(),
  description: z.string().or(z.null()),
  external_urls: SpotifyExternalUrlsSchema,
  followers: SpotifyFollowersSchema,
  href: z.string(),
  id: z.string(),
  images: z.array(SpotifyImageSchema),
  name: z.string(),
  owner: SpotifyOwnerSchema,
  public: z.boolean(),
  snapshot_id: z.string(),
  tracks: SpotifyPlaylistTracksSchema,
  type: z.string(),
  uri: z.string(),
});

const SpotifyPlaylistsSchema = z.object({
  href: z.string(),
  items: z.array(SpotifyPlaylistSchema),
  limit: z.number(),
  next: z.string(),
  offset: z.number(),
  previous: z.string().or(z.null()),
  total: z.number(),
});

export type SpotifyPlaylistTrack = z.infer<typeof SpotifyPlaylistTrackSchema>;

export type SpotifyPlaylistTracks = z.infer<typeof SpotifyPlaylistTracksSchema>;

export type SpotifyPlaylist = z.infer<typeof SpotifyPlaylistSchema>;

export type SpotifyPlaylists  = z.infer<typeof SpotifyPlaylistsSchema>;
