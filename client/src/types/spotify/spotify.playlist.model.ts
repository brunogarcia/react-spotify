import { SpotifyTrack } from "./spotify.track.model";
import {
  SpotifyExternalUrls,
  SpotifyFollowers,
  SpotifyImage,
  SpotifyOwner
} from './spotify.common.model';

export interface SpotifyPlaylist {
  collaborative: boolean;
  description: string;
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyOwner;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyTrack[];
  type: string;
  uri: string;
}

export interface SpotifyPlaylists {
  href: string;
  items: SpotifyPlaylist[];
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
}
