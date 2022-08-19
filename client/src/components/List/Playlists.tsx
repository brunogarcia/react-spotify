import { usePlaylists } from "../../hooks";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  PlaylistsGrid,
} from '../../components';

const Playlists = () => {
  const { isLoading, error, playlists } = usePlaylists({ limit: 10 });

  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {
          isLoading ? <LoaderList /> :
          error ? <ErrorMessage message={"No playlists available"} /> :
          playlists && <PlaylistsGrid playlists={playlists.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default Playlists;
