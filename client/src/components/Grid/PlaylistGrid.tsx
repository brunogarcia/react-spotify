import { StyledHeader } from '../../styles';
import { Image, SectionWrapper, TracksGrid } from '../../components';
import { SpotifyPlaylist, SpotifyTrack } from "../../types/spotify.model";

type PlaylistGridProps = {
  playlist: SpotifyPlaylist;
  tracks: SpotifyTrack[] | null;
}

const PlaylistGrid = ({ playlist, tracks }: PlaylistGridProps) => {
return (
  <>
    <StyledHeader type="none">
      <div className="header__inner">
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
      </div>
    </StyledHeader>

    <main>
      <SectionWrapper title="Playlist" breadcrumb={true}>
        {tracks && <TracksGrid tracks={tracks} />}
      </SectionWrapper>
    </main>
  </>
);
}

export default PlaylistGrid;
