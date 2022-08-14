import { useUserPlaylists } from "../../hooks";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  PlaylistsGrid,
} from '..';

const Playlists = () => {
  const { error, loading, playlists } = useUserPlaylists();

  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {
          loading ? <LoaderList /> :
          error ? <ErrorMessage message={"No playlists available"} /> :
          playlists && <PlaylistsGrid playlists={playlists.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default Playlists;
