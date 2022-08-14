import { Image } from '../../components';
import { formatDuration } from '../../utils';
import { StyledTrackList } from '../../styles';
import { SpotifyTrack } from "../../types/spotify.model";

type TracksGridProps = {
  tracks: SpotifyTrack[];
}

const TracksGrid = ({ tracks }: TracksGridProps) => (
  <StyledTrackList>
    {tracks.map((track, i) => (
      <li className="track__item" key={track.id} data-testid="grid__item__tracks">
        <div className="track__item__num">{i + 1}</div>
        <div className="track__item__title-group">
          <div className="track__item__img">
            <Image images={track.album.images} alt={track.name} />
          </div>
          <div className="track__item__name-artist">
            <div className="track__item__name overflow-ellipsis">
              {track.name}
            </div>
            <div className="track__item__artist overflow-ellipsis">
              {track.artists.map((artist, i) => (
                <span key={artist.id}>
                  {artist.name}{i !== track.artists.length - 1 && ', '}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="track__item__album overflow-ellipsis">
          {track.album.name}
        </div>
        <div className="track__item__duration">
          {formatDuration(track.duration_ms)}
        </div>
      </li>
    ))}
  </StyledTrackList>
);

export default TracksGrid;
