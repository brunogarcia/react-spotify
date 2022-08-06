import { StyledRangeButtons } from '../../styles';
import { SpotifyTimeRange } from "../../types/spotify.model";


interface TimeRangeButtonsProps {
  activeRange: SpotifyTimeRange;
  setActiveRange: (time_range: SpotifyTimeRange) => void;
}

const TimeRangeButtons = ({ activeRange, setActiveRange }: TimeRangeButtonsProps) => {
  return (
    <StyledRangeButtons>
      <li>
        <button
          type='button'
          className={activeRange === 'short_term' ? 'active' : ''}
          onClick={() => setActiveRange('short_term')}>
          This Month
        </button>
      </li>
      <li>
        <button
          type='button'
          className={activeRange === 'medium_term' ? 'active' : ''}
          onClick={() => setActiveRange('medium_term')}>
          Last 6 Months
        </button>
      </li>
      <li>
        <button
          type='button'
          className={activeRange === 'long_term' ? 'active' : ''}
          onClick={() => setActiveRange('long_term')}>
          All Time
        </button>
      </li>
    </StyledRangeButtons>
  );
};

export default TimeRangeButtons;
