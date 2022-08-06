import useTopArtists from "../../hooks/useTopArtists";
import { SectionWrapper, ArtistsGrid } from '../../components';

const ProfileTopArtists = () => {
  const { topArtists } = useTopArtists();

  return (
    <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
      { topArtists && <ArtistsGrid artists={topArtists.items} />}
    </SectionWrapper>
  );
};

export default ProfileTopArtists;
