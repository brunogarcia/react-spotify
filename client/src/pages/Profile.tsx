import { useState, useEffect } from "react";
import { StyledHeader } from "../styles";
import { SectionWrapper, ArtistsGrid } from '../components';
import { SpotifyUser, SpotifyPlaylists, SpotifyUserTopArtists } from "../types/spotify.model";
import {
  getTopArtists,
  getCurrentUserProfile,
  getCurrentUserPlaylists,
} from "../api/spotify.api";

const Profile = () => {
  const [profile, setProfile] = useState<SpotifyUser | null>(null);
  const [playlists, setPlaylists] = useState<SpotifyPlaylists | null>(null);
  const [topArtists, setTopArtists] = useState<SpotifyUserTopArtists | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile);

        const userPlaylists = await getCurrentUserPlaylists();
        setPlaylists(userPlaylists);

        const userTopArtist = await getTopArtists({ time_range: "short_term"});
        setTopArtists(userTopArtist);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const existsUserImage =
    profile && profile.images.length && profile.images[0].url;

  return (
    <>
      {profile && (
        <>
          <StyledHeader type="user">
            <div className="header__inner">
              {existsUserImage && (
                <img
                  className="header__img"
                  src={profile.images[0].url}
                  alt="Avatar"
                />
              )}
              <div>
                <div className="header__overline">Profile</div>
                <h1 className="header__name">{profile.display_name}</h1>
                <p className="header__meta">
                  {playlists && (
                    <span>
                      {playlists.total} Playlist
                      {playlists.total !== 1 ? "s" : ""}
                    </span>
                  )}
                  <span>
                    {profile.followers.total} Follower
                    {profile.followers.total !== 1 ? "s" : ""}
                  </span>
                </p>
              </div>
            </div>
          </StyledHeader>

          {topArtists && (
            <main>
              <SectionWrapper title="Top artists this month" seeAllLink="/top-artists">
                <ArtistsGrid artists={topArtists.items.slice(0, 10)} />
              </SectionWrapper>
            </main>
          )}
        </>
      )}
    </>
  );
};

export default Profile;
