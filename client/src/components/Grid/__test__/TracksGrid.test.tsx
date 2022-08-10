import React from "react";
import { render, screen } from "@testing-library/react";

import TracksGrid from "../TracksGrid";
import { mockTracks } from "../../../mocks";
import { SpotifyTrack } from '../../../types/spotify.model';

const tracks: SpotifyTrack[] = mockTracks();

test("renders the tracks", () =>  {
  render(<TracksGrid tracks={tracks} />);
  const items = screen.getAllByTestId("grid__item__tracks");
  expect(items.length).toBe(1);
});
