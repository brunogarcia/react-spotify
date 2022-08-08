import "@testing-library/jest-dom";
import {
  mockUserTracks,
  mockUserArtists,
  mockUserPlaylists,
 } from "./mocks";

 // React Router
jest.mock("react-router-dom")

// Hooks
jest.mock("./hooks", () => ({
  useAuth: () => ({
    logout: () => jest.fn(),
    accessToken: "mock-token"
  }),
  useUserTracks: () => ({
    topTracks: mockUserTracks(),
  }),
  useUserArtists: () => ({
    topArtists: mockUserArtists()
  }),
  useUserPlaylists: () => ({
    playlists: mockUserPlaylists()
  }),
}))
