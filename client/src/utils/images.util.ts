import { SpotifyImage } from "../types/spotify.model";

export const hasImage = (images: SpotifyImage[]): boolean =>
  images.length > 0 && images[0].url !== undefined;

export const getImage = (images: SpotifyImage[]): string => images[0].url;
