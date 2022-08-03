interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

interface SpotifyFollowers {
  href: string;
  total: number;
}

interface SpotifyExternalUrls {
  spotify: string;
}

interface SpotifyExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

interface SpotifyOwner {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}

interface SpotifyAlbum {
  album_type: string;
  artists: SpotifyArtist[];
  available_markets: string[];
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

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

interface SpotifyTrackDetails {
  album: SpotifyAlbum;
  artists: SpotifyArtist;
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

interface SpotifyAddedBy {
  external_urls: SpotifyExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
}

interface SpotifyTrack {
  added_at: string;
  added_by: SpotifyAddedBy;
  is_local: boolean;
  track: SpotifyTrackDetails;
}

interface SpotifyTracks {
  href: string;
  total: number;
  limit: number;
  next: string;
  offset: number;
  previous: string;
  items: SpotifyTrack[];
}

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
  tracks: SpotifyTracks;
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

export interface ParamsUserTopItems  {
  limit: number;
  time_range: "short_term" | "medium_term" | "long_term";
}
