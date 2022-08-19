import { useState } from "react";
import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../../types/query.model";
import { fetchTopTracks } from "../../api/spotify.api";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  TracksGrid,
  TimeRangeButtons,
} from '..';

const TopTracks = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({
    limit: 10,
    time_range: SpotifyTimeRange.SHORT_TERM,
  });

  const {
    isLoading,
    error,
    data,
  } = useQuery([QueryType.TOP_TRACKS], () => fetchTopTracks(payload));

  return (
    <main>
      <SectionWrapper title="Top Tracks" breadcrumb={true}>
        {
          payload?.time_range ?
          <TimeRangeButtons
            activeRange={payload.time_range}
            setActiveRange={(time_range: SpotifyTimeRange) => setPayload({
            ...payload,
            time_range
          })}
          />  : null
        }
        {
          isLoading ? <LoaderList /> :
          error ? <ErrorMessage message={"No tracks available"} /> :
          data && <TracksGrid tracks={data.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default TopTracks;
