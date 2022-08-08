export default function getMockArtists() {
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
