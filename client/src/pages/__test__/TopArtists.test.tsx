import React from "react";
import { render, screen } from "@testing-library/react";

import TopArtists from "../TopArtists";

describe('TopArtists', () => {
  test("render the artists list", () =>  {
    render(<TopArtists />);
    const items = screen.getAllByTestId("grid__item__artist");
    expect(items.length).toBe(2);
  });
});
