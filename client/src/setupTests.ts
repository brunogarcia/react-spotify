import "@testing-library/jest-dom";
import {
  // mockProfile,
  // mockUserTracks,
  // mockUserArtists,
  // mockUserPlaylists,
 } from "./mocks";

 // React Router
jest.mock("react-router-dom")

// Hooks
jest.mock("./hooks", () => ({
  useAuth: () => ({
    logout: () => jest.fn(),
    accessToken: "mock-token"
  }),
  useScroll: () => jest.fn(),
  useToken: () => ({
    token: null,
  }),
  // useProfile: () => ({
  //   profile: mockProfile(),
  // }),
  // useTracks: () => ({
  //   tracks: mockUserTracks(),
  // }),
  // useArtists: () => ({
  //   artists: mockUserArtists()
  // }),
  // usePlaylists: () => ({
  //   playlists: mockUserPlaylists()
  // }),
}))
