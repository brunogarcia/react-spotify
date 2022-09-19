import { usePlaylists } from "../hooks";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  Playlists,
} from '../components';

const PlaylistsPage = () => {
  const { isLoading, error, playlists } = usePlaylists({ limit: 10 });

  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {
          isLoading ? <LoaderList /> :
          error ? <ErrorMessage message={"No playlists available"} /> :
          playlists && <Playlists playlists={playlists.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default PlaylistsPage;
