import React from "react";

import ProfilePlaylists from "../ProfilePlaylists";
import { renderWithClient } from '../../../pages/__test__/utils'

describe("ProfilePlaylists", () => {
  test("render the playlists", async () =>  {
    const { screen, waitFor } = renderWithClient(<ProfilePlaylists />)

    await waitFor(() => {
      const items = screen.getAllByTestId("grid__item__playlist");
      expect(items.length).toBe(5);
    });
  });
});
