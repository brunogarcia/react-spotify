import React from "react";
import { render, screen } from "@testing-library/react";

import Artists from "../Artists";
import { mockArtists } from "../../../mocks/data";
import { SpotifyArtist } from '../../../types/spotify.model';

const artists: SpotifyArtist[] = mockArtists();

test("renders the artists list", () =>  {
  render(<Artists artists={artists} />);
  const items = screen.getAllByTestId("grid__item__artist");
  expect(items.length).toBe(6);
});
