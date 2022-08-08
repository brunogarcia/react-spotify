import { SpotifyAlbum } from "../types/spotify/spotify.album.model";
import getMockArtists from "./artists";

export function getMockAlbums(): SpotifyAlbum[] {
  return [
    {
      album_type: "test",
      artists: getMockArtists(),
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
      type: "test",
      uri: "test",
    }
  ]
}

export function getMockAlbum({ id }: Record<string, string>): SpotifyAlbum | undefined {
  return getMockAlbums().find((item: SpotifyAlbum) => item.id === id);
}
