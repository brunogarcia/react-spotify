import React from "react";

import Playlists from "../Playlists";
import { renderWithClient } from './utils';

describe('Playlists', () => {
  test("render the playlists page", async () =>  {
    const { screen, waitFor } = renderWithClient(<Playlists />)

    await waitFor(() => {
      const items = screen.getAllByTestId("grid__item__playlist")
      expect(items.length).toBe(5)
    })
  });
});
