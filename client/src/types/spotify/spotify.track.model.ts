import { SpotifyAlbum } from './spotify.album.model';
import { SpotifyArtist } from './spotify.artist.model';
import { SpotifyExternalUrls } from './spotify.common.model';

export interface SpotifyTrack {
  album: SpotifyAlbum;
  artists: SpotifyArtist[];
  available_markets: string[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  is_local: boolean;
  name: string;
  popularity: number;
  preview_url: string;
  track_number: number;
  type: string;
  uri: string;
}

export interface SpotifyTracks {
  href: string,
  items: SpotifyTrack[],
  limit: number,
  next: string,
  offset: number,
  previous: string,
  total: number
}
