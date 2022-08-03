import { SectionWrapper, ArtistsGrid } from '../components';
import { SpotifyUserTopArtists } from "../types/spotify.model";

interface ProfileTopArtistsProps {
  topArtists: SpotifyUserTopArtists;
}

const ProfileTopArtists = (props: ProfileTopArtistsProps) => {
  const { topArtists } = props;

  return (
    <main>
      <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
        <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
      </SectionWrapper>
    </main>
  );
};

export default ProfileTopArtists;
