import React from "react";
import { render, screen } from "@testing-library/react";

import Playlist from "../Playlist";
import { mockPlaylists } from "../../../mocks";
import { SpotifyPlaylist } from '../../../types/spotify.model';

const playlist: SpotifyPlaylist = mockPlaylists()[0];

test("renders the playlist artwork", () =>  {
  render(<Playlist loading={false} playlist={playlist} />);
  const image = screen.getByAltText("Playlist Artwork");
  expect(image).toBeInTheDocument();
});

test("renders the playlist name", () =>  {
  render(<Playlist loading={false} playlist={playlist} />);
  const name = screen.getByText("Playlist 001");
  expect(name).toBeInTheDocument();
});

test("renders the playlist followers", () =>  {
  render(<Playlist loading={false} playlist={playlist} />);
  const followers = screen.getByText("100 followers");
  expect(followers).toBeInTheDocument();
});

test("renders the playlist songs", () =>  {
  render(<Playlist loading={false} playlist={playlist} />);
  const songs = screen.getByText("100 songs");
  expect(songs).toBeInTheDocument();
});
