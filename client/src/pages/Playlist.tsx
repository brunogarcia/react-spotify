import { useParams } from 'react-router-dom';

import { usePlaylist } from '../hooks';
import {
  ErrorMessage,
  Playlist,
  PlaylistTracks,
} from '../components';

const PlaylistPage = () => {
  const { id } = useParams();

  console.log("id", id);

  const {
    error,
    isLoading,
    playlist,
    tracks,
  } = usePlaylist(id);

  return (
      error ? <ErrorMessage message={"No playlist available"} /> :
      <>
        <Playlist playlist={playlist} loading={isLoading} />
        <PlaylistTracks tracks={tracks} loading={isLoading} />
      </>
  );
}

export default PlaylistPage;
