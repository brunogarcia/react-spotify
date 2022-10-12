import React from "react";

import ProfileHeader from "../ProfileHeader";
import { renderWithClient } from '../../../pages/__test__/utils';

describe("ProfileHeader", () => {
  test("render the profile", async () =>  {
    const { screen, waitFor } = renderWithClient(<ProfileHeader />)

    await waitFor(() => {
      const userName = screen.getByText(/Test Name/i);
      expect(userName).toBeInTheDocument();
    });

    await waitFor(() => {
      const userTotalFollowers = screen.getByText(/100 Followers/i);
      expect(userTotalFollowers).toBeInTheDocument();
    });

    await waitFor(() => {;
      const userTotalPlaylists = screen.getByText(/10 Playlist/i);
      expect(userTotalPlaylists).toBeInTheDocument();
    });
  });
});
