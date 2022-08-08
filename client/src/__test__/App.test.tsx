import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the login page", () => {
  render(<App />);
  const link = screen.getByText(/Log in to Spotify/i);
  expect(link).toBeInTheDocument();
});
