import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../../types/query.model";
import { fetchTopTracks } from "../../api/spotify.api";
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
  const {
    isLoading,
    error,
    data,
  } = useQuery([QueryType.TOP_TRACKS], () => fetchTopTracks(payload));

  return (
    <SectionWrapper title="Top tracks this month" seeAllLink="/top-tracks">
      {
      isLoading ? <LoaderList /> :
      error ? <ErrorMessage message={"No tracks available"} /> :
      data && <TracksGrid tracks={data.items} />
      }
    </SectionWrapper>
  );
};

export default ProfileTopTracks;
