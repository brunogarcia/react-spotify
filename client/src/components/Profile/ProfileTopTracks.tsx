import { useUserTracks } from "../../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  TracksGrid,
} from '../../components';

const payload: SpotifyPayload = {
  limit: 10,
  time_range: SpotifyTimeRange.SHORT_TERM,
};

const ProfileTopTracks = () => {
  const { error, loading, topTracks } = useUserTracks(payload);
  return (
    <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
      {
      loading ? <LoaderList /> :
      error ? <ErrorMessage message={"No tracks available"} /> :
      topTracks && <TracksGrid tracks={topTracks.items} />
      }
    </SectionWrapper>
  );
};

export default ProfileTopTracks;
