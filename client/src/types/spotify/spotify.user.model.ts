import {SpotifyTrack} from './spotify.track.model';
import {SpotifyArtist} from './spotify.artist.model';
import {
  SpotifyExplicitContent,
  SpotifyExternalUrls,
  SpotifyFollowers,
  SpotifyImage
} from './spotify.common.model';

export interface SpotifyUser {
  country: string;
  display_name: string;
  email: string;
  explicit_content: SpotifyExplicitContent;
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  product: string;
  type: string;
  uri: string;
}

export interface SpotifyUserTopItems {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}

export interface SpotifyUserTopArtists extends SpotifyUserTopItems {
  items: SpotifyArtist[];
}

export interface SpotifyUserTopTracks extends SpotifyUserTopItems {
  items: SpotifyTrack[];
}

export interface SpotifyUserTopItemsParams  {
  limit: number;
  time_range: "short_term" | "medium_term" | "long_term";
}
