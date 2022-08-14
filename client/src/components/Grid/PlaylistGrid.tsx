import { StyledHeader } from '../../styles';
import { SpotifyPlaylist, SpotifyTrack } from "../../types/spotify.model";
import {
  Image,
  SectionWrapper,
  TracksGrid,
  LoaderList,
  LoaderProfile,
} from '../../components';

type PlaylistGridProps = {
  loading: boolean;
  playlist: SpotifyPlaylist;
  tracks: SpotifyTrack[] | null;
}

const PlaylistGrid = ({ loading, playlist, tracks }: PlaylistGridProps) => {
  return (
    <>
      <StyledHeader type="none">
        <div className="header__inner">
          <Image
            alt="Playlist Artwork"
            className="header__img"
            isLoading={loading}
            width={160}
            height={160}
            images={playlist.images}
          />

          {
            loading ? <LoaderProfile /> :
            <div>
              <div className="header__overline">
                Playlist
              </div>
              <h1 className="header__name">
                {playlist.name}
              </h1>
              <p className="header__meta">
                {playlist.followers.total ? (
                  <span>
                    {playlist.followers.total} {`follower${playlist.followers.total !== 1 ? 's' : ''}`}
                  </span>
                ) : null}
                <span>
                  {playlist.tracks.total} {`song${playlist.tracks.total !== 1 ? 's' : ''}`}
                </span>
              </p>
            </div>
          }
        </div>
      </StyledHeader>

      <main>
        <SectionWrapper title="Playlist" breadcrumb={true}>
        {
          loading ? <LoaderList /> :
          tracks && <TracksGrid tracks={tracks} />
        }
        </SectionWrapper>
      </main>
    </>
  );
}

export default PlaylistGrid;
