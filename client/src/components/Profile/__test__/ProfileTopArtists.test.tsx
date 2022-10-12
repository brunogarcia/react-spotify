import React from "react";

import ProfileTopArtists from "../ProfileTopArtists";
import { renderWithClient } from '../../../pages/__test__/utils';

describe("ProfileTopArtists", () => {
  test("render the top artists", async () =>  {
    const { screen, waitFor } = renderWithClient(<ProfileTopArtists />)

    await waitFor(() => {
      const items = screen.getAllByTestId("grid__item__artist");
      expect(items.length).toBe(6);
    });
  });
});
