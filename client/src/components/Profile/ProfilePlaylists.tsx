import { useUserPlaylists } from "../../hooks";
import { SectionWrapper, PlaylistsGrid } from '../../components';

const ProfilePlaylists = () => {
  const { playlists } = useUserPlaylists();

  return (
    <SectionWrapper title="Playlists" seeAllLink="/playlists">
      { playlists && <PlaylistsGrid playlists={playlists.items} /> }
    </SectionWrapper>
  );
};

export default ProfilePlaylists;
