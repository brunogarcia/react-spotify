import { SpotifyTrack } from "./spotify.track.model";
import {
  SpotifyExternalUrls,
  SpotifyFollowers,
  SpotifyImage,
  SpotifyOwner
} from './spotify.common.model';

export interface SpotifyPlaylistTrack {
  added_at: string
  added_by: {
    external_urls: SpotifyExternalUrls
  };
  is_local: boolean
  primary_color: string | null
  track: SpotifyTrack
  video_thumbnail: {
    url: string | null
  }
}

export interface SpotifyPlaylistTracks {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: SpotifyPlaylistTrack[];
}

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
  tracks: SpotifyPlaylistTracks;
  type: string;
  uri: string;
}

export interface SpotifyPlaylists {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  total: number;
  items: SpotifyPlaylist[];
}
