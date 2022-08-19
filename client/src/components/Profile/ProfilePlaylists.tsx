import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../../types/query.model";
import { fetchPlaylists } from "../../api/spotify.api";
import {
  SectionWrapper,
  LoaderList,
  ErrorMessage,
  PlaylistsGrid,
} from '../../components';

const ProfilePlaylists = () => {
  const {
    isLoading,
    error,
    data,
  } = useQuery([QueryType.PLAYLISTS], () => fetchPlaylists({
    limit: 10
  }));

  return (
    <SectionWrapper title="Playlists" seeAllLink="/playlists">
      {
        isLoading ? <LoaderList /> :
        error ? <ErrorMessage message={"No playlists available"} /> :
        data && data.items && <PlaylistsGrid playlists={data.items} />
      }
    </SectionWrapper>
  );
};

export default ProfilePlaylists;
