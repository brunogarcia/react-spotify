export interface SpotifyImage {
  height: number;
  url: string;
  width: number;
}

export interface SpotifyFollowers {
  href: string;
  total: number;
}

export interface SpotifyExternalUrls {
  spotify: string;
}

export interface SpotifyExplicitContent {
  filter_enabled: boolean;
  filter_locked: boolean;
}

export interface SpotifyOwner {
  external_urls: SpotifyExternalUrls;
  followers: SpotifyFollowers;
  href: string;
  id: string;
  type: string;
  uri: string;
  display_name: string;
}
