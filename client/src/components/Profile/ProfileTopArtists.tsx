import { SectionWrapper, ArtistsGrid } from '../../components';
import { SpotifyUserTopArtists } from "../../types/spotify.model";

interface ProfileTopArtistsProps {
  artists: SpotifyUserTopArtists;
}

const ProfileTopArtists = ({ artists }: ProfileTopArtistsProps) => {
  return (
    <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
      <ArtistsGrid artists={artists.items} />
    </SectionWrapper>
  );
};

export default ProfileTopArtists;
