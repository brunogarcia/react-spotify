import useTopArtists from "../../hooks/useTopArtists";
import { SpotifyPayload } from "../../types/spotify.model";
import { SectionWrapper, ArtistsGrid } from '../../components';

const payload: SpotifyPayload = { time_range: "short_term", limit: 10 };

const ProfileTopArtists = () => {
  const { topArtists } = useTopArtists(payload);

  return (
    <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
      { topArtists && topArtists.items && <ArtistsGrid artists={topArtists.items} />}
    </SectionWrapper>
  );
};

export default ProfileTopArtists;
