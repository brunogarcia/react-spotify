import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../../types/query.model";
import { fetchTopArtists } from "../../api/spotify.api";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  ArtistsGrid,
  TimeRangeButtons,
} from '..';

const TopArtists = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({
    limit: 10,
    time_range: SpotifyTimeRange.SHORT_TERM,
  });

  const {
    isLoading,
    error,
    data,
  } = useQuery([QueryType.TOP_ARTISTS], () => fetchTopArtists(payload));

  return (
    <main>
      <SectionWrapper title="Top Artists" breadcrumb={true}>
        {
          payload?.time_range ?
          <TimeRangeButtons
            activeRange={payload.time_range}
            setActiveRange={(time_range: SpotifyTimeRange) => setPayload({
              ...payload,
              time_range
            })}
          /> : null
        }
        {
          isLoading ? <LoaderList /> :
          error ? <ErrorMessage message={"No artists available"} /> :
          data && <ArtistsGrid artists={data.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default TopArtists;
