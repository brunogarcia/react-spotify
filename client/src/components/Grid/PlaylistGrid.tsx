import { StyledHeader } from '../../styles';
import { SpotifyPlaylist } from "../../types/spotify.model";
import { Image, LoaderProfile } from '../../components';

type PlaylistGridProps = {
  loading: boolean;
  playlist: SpotifyPlaylist | null;
}

const PlaylistGrid = ({ loading, playlist }: PlaylistGridProps) => {
  return (
    <StyledHeader type="none">
      <div className="header__inner">
      {
        loading ? <LoaderProfile /> :
        playlist && <>
          <Image
            alt="Playlist Artwork"
            className="header__img"
            images={playlist.images}
          />
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
        </>
      }
      </div>
    </StyledHeader>
  );
}

export default PlaylistGrid;
