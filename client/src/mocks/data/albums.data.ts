import { mockArtists } from "./artists.data";
import { SpotifyAlbum } from "../../types/spotify/model/spotify.album.model";

export function mockAlbums(): SpotifyAlbum[] {
  return [
    {
      album_type: "test",
      artists: [mockArtists()[0]],
      available_markets: ["test"],
      external_urls: {
        spotify: "test"
      },
      href: "test",
      id: "001",
      images: [{
        height: 100,
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Album name 001",
      release_date: "test",
      release_date_precision: "test",
      total_tracks: 10,
      type: "album",
      uri: "test",
    },
    {
      album_type: "test",
      artists: [mockArtists()[0]],
      available_markets: ["test"],
      external_urls: {
        spotify: "test"
      },
      href: "test",
      id: "002",
      images: [{
        height: 100,
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Album name 002",
      release_date: "test",
      release_date_precision: "test",
      total_tracks: 10,
      type: "album",
      uri: "test",
    }
  ]
}

export function mockAlbum({ id }: Record<string, string>): SpotifyAlbum | undefined {
  return mockAlbums().find((item: SpotifyAlbum) => item.id === id);
}
