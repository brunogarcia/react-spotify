import { useUserTracks } from "../../hooks";
import { SectionWrapper, TracksGrid } from '../../components';
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";

const payload: SpotifyPayload = {
  limit: 10,
  time_range: SpotifyTimeRange.SHORT_TERM,
};

const ProfileTopTracks = () => {
  const { topTracks } = useUserTracks(payload);
  return (
    <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
      { topTracks && <TracksGrid tracks={topTracks.items} /> }
    </SectionWrapper>
  );
};

export default ProfileTopTracks;
