import { useState } from "react";
import { useTopArtists } from "../../hooks";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import { ArtistsGrid, SectionWrapper, TimeRangeButtons } from '../../components';

const TopArtists = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({
    limit: 10,
    time_range: SpotifyTimeRange.SHORT_TERM,
  });

  const { topArtists } = useTopArtists(payload);

  return (
    <main>
      <SectionWrapper title="Top Artists" breadcrumb={true}>
        <TimeRangeButtons
          activeRange={payload.time_range}
          setActiveRange={(time_range: SpotifyTimeRange) => setPayload({ ...payload, time_range })}
        />

        {topArtists && topArtists.items && (
          <ArtistsGrid artists={topArtists.items} />
        )}
      </SectionWrapper>
    </main>
  );
};

export default TopArtists;
