import React from "react";
import { render, screen } from "@testing-library/react";

import ProfileHeader from "../ProfileHeader";

describe("ProfileHeader", () => {
  test("render the profile", () =>  {
    render(<ProfileHeader />);
    const userName = screen.getByText(/Test Name/i);
    const userTotalFollowers = screen.getByText(/100 Followers/i);
    const userTotalPlaylists = screen.getByText(/10 Playlist/i);

    expect(userName).toBeInTheDocument();
    expect(userTotalFollowers).toBeInTheDocument();
    expect(userTotalPlaylists).toBeInTheDocument();
  });
});
