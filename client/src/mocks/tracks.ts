import { SpotifyTrack } from "../types/spotify.model";
import { SpotifyAlbum } from "../types/spotify/spotify.album.model";
import { getMockAlbum } from "./albums";
import getMockArtists from "./artists";

export default function getMockTracks(): SpotifyTrack[] {
  return [
    {
      album: getMockAlbum({ id: "001" }) as SpotifyAlbum,
      artists: getMockArtists(),
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
