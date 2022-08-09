import { useState } from "react";
import { useUserTracks } from "../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../types/spotify.model";
import { TracksGrid, SectionWrapper, TimeRangeButtons } from '../components';

const TopTracks = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({
    limit: 10,
    time_range: SpotifyTimeRange.SHORT_TERM,
  });

  const { topTracks } = useUserTracks(payload);

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

        {topTracks && topTracks.items && (
          <TracksGrid tracks={topTracks.items} />
        )}
      </SectionWrapper>
    </main>
  );
};

export default TopTracks;
