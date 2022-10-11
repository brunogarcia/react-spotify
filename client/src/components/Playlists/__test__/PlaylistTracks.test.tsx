import React from "react";
import { render, screen } from "@testing-library/react";

import PlaylistTracks from "../PlaylistTracks";
import { mockTracks } from "../../../mocks/data";
import { SpotifyTrack } from '../../../types/spotify.model';

const tracks: SpotifyTrack[] = mockTracks();

test("renders the playlist tracks", () =>  {
  render(<PlaylistTracks loading={false} tracks={tracks} />);
  const items = screen.getAllByTestId("grid__item__tracks");
  expect(items.length).toBe(2);
});
