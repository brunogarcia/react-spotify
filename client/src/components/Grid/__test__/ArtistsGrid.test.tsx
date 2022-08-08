import React from "react";
import { render, screen } from "@testing-library/react";

import ArtistsGrid from "../ArtistsGrid";
import { getMockArtists } from "../../../mocks";
import { SpotifyArtist } from '../../../types/spotify.model';

const artists: SpotifyArtist[] = getMockArtists();

test("renders the empty state", () =>  {
  render(<ArtistsGrid artists={[]} />);
  const message = screen.getByText(/No artists available/i);
  expect(message).toBeInTheDocument();
});

test("renders the artists list", () =>  {
  render(<ArtistsGrid artists={artists} />);
  const items = screen.getAllByTestId("grid__item__artist");
  expect(items.length).toBe(2);
});