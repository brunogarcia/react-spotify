import { SpotifyArtist } from '../types/spotify.model';

export function mockArtists(): SpotifyArtist[] {
  return [
    {
      external_urls: {
        spotify: ""
      },
      followers: {
        href: "test",
        total: 10
      },
      genres: ["test"],
      href: "test",
      id: "001",
      images: [{
        height: 100,
        url: "test",
        width: 100,
      }],
      name: "test 001",
      popularity: 10,
      type: "artist",
      uri: "test"
    },
    {
      external_urls: {
        spotify: ""
      },
      followers: {
        href: "test",
        total: 10
      },
      genres: ["test"],
      href: "test",
      id: "002",
      images: [{
        height: 100,
        url: "test",
        width: 100,
      }],
      name: "test 002",
      popularity: 10,
      type: "artist",
      uri: "test"
    }
  ]
}

export function mockTopArtists() {
  return {
    topArtists: {
      href: "test",
      limit: 10,
      next: "test",
      offset: 0,
      previous: "test",
      total: 10,
      items: mockArtists()
    }
  }
}
