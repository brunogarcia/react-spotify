import React from "react";
import { render, screen } from "@testing-library/react";

import ProfilePlaylists from "../ProfilePlaylists";

describe("ProfilePlaylists", () => {
  test("render the playlists", () =>  {
    render(<ProfilePlaylists />);
    const items = screen.getAllByTestId("grid__item__playlist");
    expect(items.length).toBe(1);
  });
});
