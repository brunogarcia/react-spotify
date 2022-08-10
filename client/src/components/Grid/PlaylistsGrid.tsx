import { Link } from 'react-router-dom';
import { StyledGrid } from '../../styles';
import { SpotifyPlaylist } from '../../types/spotify.model';

interface PlaylistsGridProps {
  playlists: SpotifyPlaylist[];
}

const PlaylistsGrid = ({ playlists }: PlaylistsGridProps) => (
  <StyledGrid type="none">
    {playlists.map((playlist, i) => (
      <li className="grid__item" key={playlist.id} data-testid="grid__item__playlist">
        <Link className="grid__item__inner" to={`/playlists/${playlist.id}`}>
          {playlist.images.length && playlist.images[0] && (
            <div className="grid__item__img">
              <img src={playlist.images[0].url} alt={playlist.name} />
            </div>
          )}
          <h3 className="grid__item__name overflow-ellipsis">
            {playlist.name}
          </h3>
          <p className="grid__item__label">Playlist</p>
        </Link>
      </li>
    ))}
  </StyledGrid>
);

export default PlaylistsGrid;
