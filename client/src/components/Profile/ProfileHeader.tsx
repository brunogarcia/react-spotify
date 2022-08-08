import { StyledHeader } from "../../styles";
import { useUserProfile, useUserPlaylists } from "../../hooks";

const ProfileHeader = () => {
  const { profile } = useUserProfile();
  const { playlists } = useUserPlaylists();
  const profileImage = profile?.images.length && profile.images[0].url;

  return (
    <>
    {profile && (
      <StyledHeader type="user">
        <div className="header__inner">
          {profileImage && (
            <img
              className="header__img"
              src={profile.images[0].url}
              alt="Avatar"
            />
          )}
          <div>
            <div className="header__overline">
              Profile
            </div>
            <h1 className="header__name">
              {profile.display_name}
            </h1>
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
    )}
    </>
  );
};

export default ProfileHeader;
