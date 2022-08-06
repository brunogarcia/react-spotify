import { useState} from "react";
import useTopArtists from "../../hooks/useTopArtists";
import { SpotifyPayload, SpotifyTimeRange } from "../../types/spotify.model";
import { ArtistsGrid, SectionWrapper, TimeRangeButtons } from '../../components';

const TopArtists = () => {
  const [payload, setPayload] = useState<SpotifyPayload>({ time_range: "short_term", limit: 10 });
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
