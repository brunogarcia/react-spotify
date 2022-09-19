import { useArtists } from "../../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  Artists,
} from '../../components';

const payload: SpotifyPayload = {
  limit: 10,
  time_range: SpotifyTimeRange.SHORT_TERM,
};

const ProfileTopArtists = () => {
  const { isLoading, error, artists } = useArtists(payload);

  return (
    <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
      {
        isLoading ? <LoaderList /> :
        error ? <ErrorMessage message={"No artists available"} /> :
        artists && <Artists artists={artists.items} />
      }
    </SectionWrapper>
  );
};

export default ProfileTopArtists;
