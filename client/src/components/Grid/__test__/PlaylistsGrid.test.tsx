import React from "react";
import { render, screen } from "@testing-library/react";

import PlaylistsGrid from "../PlaylistsGrid";
import { mockPlaylists } from "../../../mocks";
import { SpotifyPlaylist } from '../../../types/spotify.model';

const playlists: SpotifyPlaylist[] = mockPlaylists();

test("renders the empty state", () =>  {
  render(<PlaylistsGrid playlists={[]} />);
  const message = screen.getByText(/No playlists available/i);
  expect(message).toBeInTheDocument();
});

test("renders the playlists", () =>  {
  render(<PlaylistsGrid playlists={playlists} />);
  const items = screen.getAllByTestId("grid__item__playlist");
  expect(items.length).toBe(1);
});
