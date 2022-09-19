import { Link } from 'react-router-dom';
import { Image } from '..';
import { StyledGrid } from '../../styles';
import { SpotifyPlaylist } from '../../types/spotify.model';

type PlaylistsProps = {
  playlists: SpotifyPlaylist[];
}

const Playlists = ({ playlists }: PlaylistsProps) => (
  <StyledGrid type="none">
    {playlists.map((playlist, i) => (
      <li className="grid__item" key={playlist.id} data-testid="grid__item__playlist">
        <Link className="grid__item__inner" to={`/playlists/${playlist.id}`}>
          <div className="grid__item__img">
            <Image images={playlist.images} alt={playlist.name} />
          </div>
          <h3 className="grid__item__name overflow-ellipsis">
            {playlist.name}
          </h3>
          <p className="grid__item__label">Playlist</p>
        </Link>
      </li>
    ))}
  </StyledGrid>
);

export default Playlists;
