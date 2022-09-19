import { usePlaylists } from "../../hooks";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  Playlists,
} from '../../components';

const ProfilePlaylists = () => {
  const { isLoading, error, playlists } = usePlaylists({ limit: 10 });

  return (
    <SectionWrapper title="Playlists" seeAllLink="/playlists">
      {
        isLoading ? <LoaderList /> :
        error ? <ErrorMessage message={"No playlists available"} /> :
        playlists && <Playlists playlists={playlists.items} />
      }
    </SectionWrapper>
  );
};

export default ProfilePlaylists;
