import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../../types/query.model";
import { fetchTopArtists } from "../../api/spotify.api";
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
  const {
    isLoading,
    error,
    data,
  } = useQuery([QueryType.TOP_ARTISTS], () => fetchTopArtists(payload));

  return (
    <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
      {
        isLoading ? <LoaderList /> :
        error ? <ErrorMessage message={"No artists available"} /> :
        data && <ArtistsGrid artists={data.items} />
      }
    </SectionWrapper>
  );
};

export default ProfileTopArtists;
