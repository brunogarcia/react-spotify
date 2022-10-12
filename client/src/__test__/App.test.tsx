import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders the login page", () => {
  render(<App />);
  const link = screen.getByText(/Log out/i);
  expect(link).toBeInTheDocument();
});
