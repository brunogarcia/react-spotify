import { SpotifyUser } from "../types/spotify.model";

export function mockProfile(): SpotifyUser {
  return {
    country: "test",
    display_name: "Test Name",
    email: "test",
    explicit_content: {
      filter_enabled: false,
      filter_locked: false,
    },
    external_urls: {
      spotify: "test"
    },
    followers: {
      href: "test",
      total: 100
    },
    href: "test",
    id: "test",
    images: [{
      height: 100,
      url: "test",
      width: 100,
    }],
    product: "test",
    type: "test",
    uri: "test",
  }
}
