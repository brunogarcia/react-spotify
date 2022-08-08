import React from "react";
import { render, screen } from "@testing-library/react";

import ProfileTopTracks from "../ProfileTopTracks";

describe("ProfileTopTracks", () => {
  test("render the top tracks", () =>  {
    render(<ProfileTopTracks />);
    const items = screen.getAllByTestId("grid__item__tracks");
    expect(items.length).toBe(1);
  });
});
