import { useState } from "react";
import { useTracks } from "../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../types/spotify.model";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  Tracks,
  TimeRangeButtons,
} from '../components';

const TopTracks = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({
    limit: 10,
    time_range: SpotifyTimeRange.SHORT_TERM,
  });

  const {
    error,
    tracks,
    isLoading,
  } = useTracks(payload);

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
          tracks && <Tracks tracks={tracks.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default TopTracks;
