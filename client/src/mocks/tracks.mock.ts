import { SpotifyTrack } from "../types/spotify.model";
import { SpotifyAlbum } from "../types/spotify/spotify.album.model";
import { mockAlbum } from "./albums.mock";
import { mockArtists } from "./artists.mock";

export function mockTracks(): SpotifyTrack[] {
  return [
    {
      album: mockAlbum({ id: "001" }) as SpotifyAlbum,
      artists: mockArtists(),
      available_markets: ["test"],
      disc_number: 1,
      duration_ms: 1000,
      explicit: true,
      external_urls: {
        spotify: "test"
      },
      href: "test",
      id: "test",
      is_local: true,
      name: "test",
      popularity: 10,
      preview_url: "test",
      track_number: 10,
      type: "test",
      uri: "test"
    }
  ]
}
