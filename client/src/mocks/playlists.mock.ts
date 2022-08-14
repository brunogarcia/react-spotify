import { mockTracks } from "./tracks.mock";
import {
  SpotifyPlaylist,
  SpotifyPlaylists,
  SpotifyPlaylistTrack,
  SpotifyPlaylistTracks
} from "../types/spotify.model";

function mockPlaylistTrack(): SpotifyPlaylistTrack[] {
  return[ {
    added_at: "2020-06-01T00:00:00.000Z",
    added_by: {
      external_urls: {
        spotify: "https://open.spotify.com/user/123456789"
      }
    },
    is_local: false,
    primary_color: null,
    track: mockTracks()[0],
    video_thumbnail: {
      url: null
    }
  }];
}

function mockPlaylistTracks(): SpotifyPlaylistTracks {
  return {
    href: "https://api.spotify.com/v1/users/1234/playlists/5678/tracks",
    limit: 100,
    next: "",
    offset: 0,
    previous: "",
    total: 100,
    items: mockPlaylistTrack()
  };
}

export function mockPlaylists(): SpotifyPlaylist[] {
  return [
    {
      collaborative: true,
      description: "test",
      external_urls: {
        spotify: "test"
      },
      followers: {
        href: "test",
        total: 100
      },
      href: "test",
      id: "001",
      images: [{
        height: 100,
        url: "test",
        width: 100,
      }],
      name: "test 001",
      owner: {
        external_urls: {
          spotify: "test"
        },
        followers: {
          href: "test",
          total: 100
        },
        href: "test",
        id: "011",
        type: "test",
        uri: "test",
        display_name: "test 011",
      },
      public: true,
      snapshot_id: "test",
      tracks: mockPlaylistTracks(),
      type: "test",
      uri: "test",
    }
  ];
}

export function mockUserPlaylists(): SpotifyPlaylists {
  return {
    href: "test",
    limit: 10,
    next: "test",
    offset: 0,
    previous: "test",
    total: 10,
    items: mockPlaylists(),
  }
}
