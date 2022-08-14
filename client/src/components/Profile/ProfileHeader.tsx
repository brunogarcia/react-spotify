import { StyledHeader } from "../../styles";
import { LoaderProfile, Image } from '../../components';
import { useUserProfile, useUserPlaylists } from "../../hooks";

const ProfileHeader = () => {
  const {
    playlists,
  } = useUserPlaylists();
  const {
    profile,
    loading: profileLoading,
  } = useUserProfile();

  return (
    <StyledHeader type="user">
      <div className="header__inner">
        {
          profile &&
          <Image
            alt="Avatar"
            className="header__img"
            images={profile.images}
            isLoading={profileLoading}
          />
        }
        {
          profileLoading ? <LoaderProfile /> :
          profile && (
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
                    {playlists.total} Playlist {playlists.total !== 1 ? "s" : ""}
                  </span>
                )}
                <span>
                  {profile.followers.total} Follower {profile.followers.total !== 1 ? "s" : ""}
                </span>
              </p>
            </div>
          )
        }
      </div>
    </StyledHeader>
  );
};

export default ProfileHeader;
