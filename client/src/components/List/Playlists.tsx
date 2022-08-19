import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../../types/query.model";
import { fetchPlaylists } from "../../api/spotify.api";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  PlaylistsGrid,
} from '..';

const Playlists = () => {
  const {
    isLoading,
    error,
    data,
  } = useQuery([QueryType.PLAYLISTS], () => fetchPlaylists({
    limit: 10
  }));

  return (
    <main>
      <SectionWrapper title="Public Playlists" breadcrumb={true}>
        {
          isLoading ? <LoaderList /> :
          error ? <ErrorMessage message={"No playlists available"} /> :
          data && data.items && <PlaylistsGrid playlists={data.items} />
        }
      </SectionWrapper>
    </main>
  );
};

export default Playlists;
