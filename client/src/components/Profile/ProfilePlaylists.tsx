import { useUserPlaylists } from "../../hooks";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  PlaylistsGrid,
} from '../../components';

const ProfilePlaylists = () => {
  const { error, loading, playlists } = useUserPlaylists();

  return (
    <SectionWrapper title="Playlists" seeAllLink="/playlists">
      {
        loading ? <LoaderList /> :
        error ? <ErrorMessage message={"No playlists available"} /> :
        playlists && <PlaylistsGrid playlists={playlists.items} />
      }
    </SectionWrapper>
  );
};

export default ProfilePlaylists;
