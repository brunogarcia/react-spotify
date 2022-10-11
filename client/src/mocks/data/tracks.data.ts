import { mockAlbum } from "./albums.data";
import { mockArtists } from "./artists.data";
import { SpotifyAlbum } from "../../types/spotify/model/spotify.album.model";
import { SpotifyTrack, SpotifyUserTopTracks } from "../../types/spotify.model";

export function mockTracks(): SpotifyTrack[] {
  return [
    {
      album: mockAlbum({ id: "001" }) as SpotifyAlbum,
      artists: [mockArtists()[0]],
      available_markets: ["test"],
      disc_number: 1,
      duration_ms: 100000,
      explicit: true,
      external_urls: {
        spotify: "test"
      },
      href: "test",
      id: "001",
      is_local: true,
      name: "Track name 001",
      popularity: 10,
      preview_url: "test",
      track_number: 10,
      type: "track",
      uri: "test"
    },
    {
      album: mockAlbum({ id: "002" }) as SpotifyAlbum,
      artists: [mockArtists()[1]],
      available_markets: ["test"],
      disc_number: 1,
      duration_ms: 150000,
      explicit: true,
      external_urls: {
        spotify: "test"
      },
      href: "test",
      id: "002",
      is_local: true,
      name: "Track name 002",
      popularity: 10,
      preview_url: "test",
      track_number: 10,
      type: "track",
      uri: "test"
    }
  ]
}

export function mockUserTracks(): SpotifyUserTopTracks {
  return {
    href: "test",
    limit: 10,
    next: "test",
    offset: 0,
    previous: "test",
    total: 10,
    items: mockTracks()
  }
}
