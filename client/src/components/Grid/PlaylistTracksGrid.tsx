import { SpotifyTrack } from "../../types/spotify.model";
import {
  SectionWrapper,
  TracksGrid,
  LoaderList,
} from '..';

type PlaylistTracksGridProps = {
  loading: boolean;
  tracks: SpotifyTrack[] | null;
}

const PlaylistTracksGrid = ({ loading, tracks }: PlaylistTracksGridProps) => {
  return (
    <main>
      <SectionWrapper title="Playlist" breadcrumb={true}>
      {
        loading ? <LoaderList /> :
        tracks && <TracksGrid tracks={tracks} />
      }
      </SectionWrapper>
    </main>
  );
}

export default PlaylistTracksGrid;
