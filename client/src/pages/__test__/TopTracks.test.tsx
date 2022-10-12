import React from "react";

import TopTracks from "../TopTracks";
import { renderWithClient } from './utils';

describe('TopTracks', () => {
  test("render the tracks page", async () =>  {
    const { screen, waitFor } = renderWithClient(<TopTracks />)

    await waitFor(() => {
      const items = screen.getAllByTestId("grid__item__tracks")
      expect(items.length).toBe(2)
    })
  });
});
