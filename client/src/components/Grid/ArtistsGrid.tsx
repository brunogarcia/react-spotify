import { Image } from '../../components';
import { StyledGrid } from '../../styles';
import { SpotifyArtist } from '../../types/spotify.model';

type ArtistsGridProps = {
  artists: SpotifyArtist[];
}

const ArtistsGrid = ({ artists }: ArtistsGridProps) => (
  <>
    <StyledGrid type="artist">
      {artists.map((artist) => (
        <li className="grid__item" key={artist.id} data-testid="grid__item__artist">
          <div className="grid__item__inner">
            {
              <div className="grid__item__img">
                <Image images={artist.images} alt={artist.name} />
              </div>
            }
            <h3 className="grid__item__name overflow-ellipsis">
              {artist.name}
            </h3>
            <p className="grid__item__label">
              {artist.genres[0]}
            </p>
          </div>
        </li>
      ))}
    </StyledGrid>
  </>
);

export default ArtistsGrid;
