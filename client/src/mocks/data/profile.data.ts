import { SpotifyProfile } from "../../types/spotify.model";

export function mockProfile(): SpotifyProfile {
  return {
    display_name: "Test Name",
    followers: {
      href: "test",
      total: 100
    },
    images: [{
      height: 100,
      url: "https://via.placeholder.com/150",
      width: 100,
    }],
  }
}
