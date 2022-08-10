import React from "react";
import { render, screen } from "@testing-library/react";

import ArtistsGrid from "../ArtistsGrid";
import { mockArtists } from "../../../mocks";
import { SpotifyArtist } from '../../../types/spotify.model';

const artists: SpotifyArtist[] = mockArtists();

test("renders the artists list", () =>  {
  render(<ArtistsGrid artists={artists} />);
  const items = screen.getAllByTestId("grid__item__artist");
  expect(items.length).toBe(2);
});
