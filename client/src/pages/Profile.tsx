import { useState, useEffect } from 'react';
import { StyledHeader } from '../styles';
import { SpotifyUser, SpotifyPlaylist } from "../types/spotify.model"
import { getCurrentUserProfile, getCurrentUserPlaylists } from '../api/spotify'

const Profile = () => {
  const [profile, setProfile] = useState<SpotifyUser | null>(null);
  const [playlists, setPlaylists] = useState<SpotifyPlaylist | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile);

        const userPlaylists = await getCurrentUserPlaylists();
        setPlaylists(userPlaylists);
      } catch(error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {profile && (
        <>
          <StyledHeader type="user">
            <div className="header__inner">
              {profile.images.length && profile.images[0].url && (
                <img className="header__img" src={profile.images[0].url} alt="Avatar"/>
              )}
              <div>
                <div className="header__overline">Profile</div>
                <h1 className="header__name">{profile.display_name}</h1>
                <p className="header__meta">
                  {playlists && (
                    <span>{playlists.total} Playlist{playlists.total !== 1 ? 's' : ''}</span>
                  )}
                  <span>
                    {profile.followers.total} Follower{profile.followers.total !== 1 ? 's' : ''}
                  </span>
                  </p>
              </div>
            </div>
          </StyledHeader>
        </>
      )}
    </>
  )
};

export default Profile;
