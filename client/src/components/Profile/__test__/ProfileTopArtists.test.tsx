import React from "react";
import { render, screen } from "@testing-library/react";

import ProfileTopArtists from "../ProfileTopArtists";

describe("ProfileTopArtists", () => {
  test("render the top artists", () =>  {
    render(<ProfileTopArtists />);
    const items = screen.getAllByTestId("grid__item__artist");
    expect(items.length).toBe(6);
  });
});
