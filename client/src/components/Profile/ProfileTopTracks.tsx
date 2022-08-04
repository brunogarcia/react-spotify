import { formatDuration } from '../utils';
import { StyledTrackList } from '../styles';
import { SpotifyUserTopTracks } from "../../types/spotify.model";

interface ProfileTopArtistsProps {
  tracks: SpotifyUserTopTracks;
}

const ProfileTopArtists = ({ tracks }: ProfileTopArtistsProps) => (
  <>
    {tracks && tracks.items.length ? (
      <StyledTrackList>
        {tracks.items.map((track, i) => (
          <li className="track__item" key={track.id}>
            <div className="track__item__num">{i + 1}</div>
            <div className="track__item__title-group">
              {track.album.images.length && track.album.images[2] && (
                <div className="track__item__img">
                  <img src={track.album.images[2].url} alt={track.name} />
                </div>
              )}
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
    ) : (
      <p className="empty-notice">No tracks available</p>
    )}
  </>
);

export default ProfileTopArtists;