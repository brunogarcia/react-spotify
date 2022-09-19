import { useTracks } from "../../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  Tracks,
} from '../../components';

const payload: SpotifyPayload = {
  limit: 10,
  time_range: SpotifyTimeRange.SHORT_TERM,
};

const ProfileTopTracks = () => {
  const {
    error,
    tracks,
    isLoading,
  } = useTracks(payload);

  return (
    <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
      {
      isLoading ? <LoaderList /> :
      error ? <ErrorMessage message={"No tracks available"} /> :
      tracks && <Tracks tracks={tracks.items} />
      }
    </SectionWrapper>
  );
};

export default ProfileTopTracks;
