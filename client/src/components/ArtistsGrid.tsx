import { StyledGrid } from '../styles';
import { SpotifyArtist } from '../types/spotify.model';

interface ArtistsGridProps {
  artists: SpotifyArtist[];
}

const ArtistsGrid = ({ artists }: ArtistsGridProps) => (
  <>
    {artists && artists.length ? (
      <StyledGrid type="artist">
        {artists.map((artist) => (
          <li className="grid__item" key={artist.id}>
            <div className="grid__item__inner">
              {artist.images[0] && (
                <div className="grid__item__img">
                  <img src={artist.images[0].url} alt={artist.name} />
                </div>
              )}
              <h3 className="grid__item__name overflow-ellipsis">{artist.name}</h3>
              <p className="grid__item__label">
                {artist.genres[0]}
              </p>
            </div>
          </li>
        ))}
      </StyledGrid>
    ) : (
      <p className="empty-notice">No artists available</p>
    )}
  </>
);

export default ArtistsGrid;