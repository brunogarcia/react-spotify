import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the login message", () => {
  render(<App />);
  const linkElement = screen.getByText(/Log in to Spotify/i);
  expect(linkElement).toBeInTheDocument();
});
