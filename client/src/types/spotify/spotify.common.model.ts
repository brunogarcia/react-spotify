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

export type SpotifyImage  = z.infer<typeof SpotifyImageSchema>;

export type SpotifyFollowers = z.infer<typeof SpotifyFollowersSchema>;

export interface SpotifyExternalUrls {
  spotify: string;
}

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
