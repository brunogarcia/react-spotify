import { z } from 'zod';

export const SpotifyImageSchema = z.object({
  height: z.number(),
  url: z.string(),
  width: z.number(),
});

export const SpotifyFollowersSchema = z.object({
  href: z.string(),
  total: z.number(),
});

export const SpotifyExternalUrlsSchema = z.object({
  spotify: z.string(),
});

export type SpotifyImage  = z.infer<typeof SpotifyImageSchema>;

export type SpotifyFollowers = z.infer<typeof SpotifyFollowersSchema>;

export type SpotifyExternalUrls = z.infer<typeof SpotifyExternalUrlsSchema>;

export interface SpotifyExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface SpotifyOwner {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}
