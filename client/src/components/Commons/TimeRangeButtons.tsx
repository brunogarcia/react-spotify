import { StyledRangeButtons } from '../../styles';
import { StyleButton } from "../../types/global.model";
import { SpotifyTimeRange } from "../../types/spotify.model";

type TimeRangeButtonsProps = {
  activeRange: SpotifyTimeRange;
  setActiveRange: (time_range: SpotifyTimeRange) => void;
}

const TimeRangeButtons = ({ activeRange, setActiveRange }: TimeRangeButtonsProps) => {
  const isActiveShortTerm = activeRange === SpotifyTimeRange.SHORT_TERM;
  const isActiveMediumTerm = activeRange === SpotifyTimeRange.MEDIUM_TERM;
  const isActiveLongTerm = activeRange === SpotifyTimeRange.LONG_TERM;

  return (
    <StyledRangeButtons data-testid="time-range-buttons">
      <li>
        <button
          type='button'
          className={isActiveShortTerm ? StyleButton.ACTIVE : StyleButton.INACTIVE}
          onClick={() => setActiveRange(SpotifyTimeRange.SHORT_TERM)}>
          This Month
        </button>
      </li>
      <li>
        <button
          type='button'
          className={isActiveMediumTerm ? StyleButton.ACTIVE : StyleButton.INACTIVE}
          onClick={() => setActiveRange(SpotifyTimeRange.MEDIUM_TERM)}>
          Last 6 Months
        </button>
      </li>
      <li>
        <button
          type='button'
          className={isActiveLongTerm ? StyleButton.ACTIVE : StyleButton.INACTIVE}
          onClick={() => setActiveRange(SpotifyTimeRange.LONG_TERM)}>
          All Time
        </button>
      </li>
    </StyledRangeButtons>
  );
};

export default TimeRangeButtons;
