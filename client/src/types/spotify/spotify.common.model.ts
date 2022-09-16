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

export const SpotifyOwnerSchema = z.object({
  href: z.string(),
  id: z.string(),
  type: z.string(),
  uri: z.string(),
  display_name: z.string(),
  followers: SpotifyFollowersSchema,
  external_urls: SpotifyExternalUrlsSchema,
});

export type SpotifyImage  = z.infer<typeof SpotifyImageSchema>;

export type SpotifyFollowers = z.infer<typeof SpotifyFollowersSchema>;

export type SpotifyExternalUrls = z.infer<typeof SpotifyExternalUrlsSchema>;

export type SpotifyOwner  = z.infer<typeof SpotifyOwnerSchema>;
