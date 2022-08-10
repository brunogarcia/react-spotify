import { useUserArtists } from "../../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  ArtistsGrid,
} from '../../components';

const payload: SpotifyPayload = {
  limit: 10,
  time_range: SpotifyTimeRange.SHORT_TERM,
};

const ProfileTopArtists = () => {
  const { error, loading, topArtists } = useUserArtists(payload);

  return (
    <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
      {
        loading ? <LoaderList /> :
        error ? <ErrorMessage message={"No artists available"} /> :
        topArtists && <ArtistsGrid artists={topArtists.items} />
      }
    </SectionWrapper>
  );
};

export default ProfileTopArtists;
