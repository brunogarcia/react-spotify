import {SpotifyTrack} from './spotify.track.model';
import {SpotifyArtist} from './spotify.artist.model';

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
