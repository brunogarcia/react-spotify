import { SpotifyAlbum } from "../types/spotify/spotify.album.model";
import { mockArtists } from "./artists.mock";

export function mockAlbums(): SpotifyAlbum[] {
  return [
    {
      album_type: "test",
      artists: mockArtists(),
      available_markets: ["test"],
      external_urls: {
        spotify: "test"
      },
      href: "test",
      id: "001",
      images: [{
        height: 100,
        url: "test",
        width: 100,
      }],
      name: "test",
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
