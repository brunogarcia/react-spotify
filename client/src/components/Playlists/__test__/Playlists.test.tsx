import React from "react";
import { render, screen } from "@testing-library/react";

import Playlists from "../Playlists";
import { mockPlaylists } from "../../../mocks/data";
import { SpotifyPlaylist } from '../../../types/spotify.model';

const playlists: SpotifyPlaylist[] = mockPlaylists();

test("renders the playlists", () =>  {
  render(<Playlists playlists={playlists} />);
  const items = screen.getAllByTestId("grid__item__playlist");
  expect(items.length).toBe(5);
});
