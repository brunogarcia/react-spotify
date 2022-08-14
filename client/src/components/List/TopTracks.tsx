import { useState } from "react";
import { useUserTracks } from "../../hooks";
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

  const { error, loading, topTracks } = useUserTracks(payload);

  return (
    <main>
      <SectionWrapper title="Top Tracks" breadcrumb={true}>
      <TimeRangeButtons
          activeRange={payload.time_range}
          setActiveRange={(time_range: SpotifyTimeRange) => setPayload({
            ...payload,
            time_range
          })}
        />

        {
          loading ? <LoaderList /> :
          error ? <ErrorMessage message={"No tracks available"} /> :
          topTracks && <TracksGrid tracks={topTracks.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default TopTracks;
