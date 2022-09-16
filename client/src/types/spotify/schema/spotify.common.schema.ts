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
