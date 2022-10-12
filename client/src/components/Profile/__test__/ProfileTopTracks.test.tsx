import React from "react";

import ProfileTopTracks from "../ProfileTopTracks";
import { renderWithClient } from '../../../pages/__test__/utils';

describe("ProfileTopTracks", () => {
  test("render the top tracks", async () =>  {
    const { screen, waitFor } = renderWithClient(<ProfileTopTracks />)

    await waitFor(() => {
      const items = screen.getAllByTestId("grid__item__tracks");
      expect(items.length).toBe(2);
    });
  });
});
