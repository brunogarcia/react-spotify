import { useState } from "react";
import { useArtists } from "../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  Artists,
  TimeRangeButtons,
} from '../components';

const TopArtists = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({
    limit: 10,
    time_range: SpotifyTimeRange.SHORT_TERM,
  });

  const { isLoading, error, artists } = useArtists(payload);

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
          artists && <Artists artists={artists.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default TopArtists;
