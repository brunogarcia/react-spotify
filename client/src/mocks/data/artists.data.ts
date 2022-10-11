import { SpotifyArtist, SpotifyUserTopArtists } from '../../types/spotify.model';

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
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Artist 001",
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
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Artist 002",
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
      id: "003",
      images: [{
        height: 100,
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Artist 003",
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
      id: "004",
      images: [{
        height: 100,
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Artist 004",
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
      id: "005",
      images: [{
        height: 100,
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Artist 005",
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
      id: "006",
      images: [{
        height: 100,
        url: "https://via.placeholder.com/150",
        width: 100,
      }],
      name: "Artist 006",
      popularity: 10,
      type: "artist",
      uri: "test"
    }
  ]
}

export function mockUserArtists(): SpotifyUserTopArtists {
  return {
    href: "test",
    limit: 10,
    next: "test",
    offset: 0,
    previous: "test",
    total: 10,
    items: mockArtists()
  }
}
