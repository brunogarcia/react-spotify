import React from "react";

import TopArtists from "../TopArtists";
import { renderWithClient } from './utils';

describe('TopArtists', () => {
  test("render the artists page", async () =>  {
    const { screen, waitFor } = renderWithClient(<TopArtists />)

    await waitFor(() => {
      const items = screen.getAllByTestId("grid__item__artist")
      expect(items.length).toBe(6)
    })
  });
});
