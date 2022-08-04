import {
  SpotifyExternalUrls,
  SpotifyFollowers,
  SpotifyImage
} from './spotify.common.model';

export interface SpotifyArtist {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  genres: string[];
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}
