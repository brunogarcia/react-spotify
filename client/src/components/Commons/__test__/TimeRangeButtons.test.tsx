import React from "react";
import { render, screen } from "@testing-library/react";
import TimeRangeButtons from "../TimeRangeButtons";
import { SpotifyTimeRange } from "../../../types/spotify.model";

describe('TimeRangeButtons', () => {
  test("should active only the short term button", () =>  {
    render(<TimeRangeButtons
      activeRange={SpotifyTimeRange.SHORT_TERM}
      setActiveRange={() => jest.fn()}
    />);

    const buttonShortTerm = screen.getByText(/This Month/i);
    const buttonMediumTerm = screen.getByText(/Last 6 Months/i);
    const buttonLongTerm = screen.getByText(/All Time/i);

    expect(buttonShortTerm.className).toBe('active');
    expect(buttonMediumTerm.className).toBe('inactive');
    expect(buttonLongTerm.className).toBe('inactive');
  });

  test("should active only the medium term button", () =>  {
    render(<TimeRangeButtons
      activeRange={SpotifyTimeRange.MEDIUM_TERM}
      setActiveRange={() => jest.fn()}
    />);

    const buttonShortTerm = screen.getByText(/This Month/i);
    const buttonMediumTerm = screen.getByText(/Last 6 Months/i);
    const buttonLongTerm = screen.getByText(/All Time/i);

    expect(buttonShortTerm.className).toBe('inactive');
    expect(buttonMediumTerm.className).toBe('active');
    expect(buttonLongTerm.className).toBe('inactive');
  });

  test("should active only the long term button", () =>  {
    render(<TimeRangeButtons
      activeRange={SpotifyTimeRange.LONG_TERM}
      setActiveRange={() => jest.fn()}
    />);

    const buttonShortTerm = screen.getByText(/This Month/i);
    const buttonMediumTerm = screen.getByText(/Last 6 Months/i);
    const buttonLongTerm = screen.getByText(/All Time/i);

    expect(buttonShortTerm.className).toBe('inactive');
    expect(buttonMediumTerm.className).toBe('inactive');
    expect(buttonLongTerm.className).toBe('active');
  });
});
