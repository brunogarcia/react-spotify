import { StyledHeader } from "../../styles";
import { LoaderProfile, LoaderImage, Image } from '../../components';
import { SpotifyUser } from "../../types/spotify.model";
import { useUserProfile, useUserPlaylists } from "../../hooks";

const hasImage = (profile: SpotifyUser) =>
  profile?.images.length && profile.images[0].url;

const ProfileHeader = () => {
  const {
    playlists,
  } = useUserPlaylists();
  const {
    profile,
    error: profileError,
    loading: profileLoading,
  } = useUserProfile();

  return (
    <StyledHeader type="user">
      <div className="header__inner">
        {
          profileLoading ? <LoaderImage width={160} heigth={160} /> :
          !profileError && profile && hasImage(profile) && (
          <Image
            alt="Avatar"
            className="header__img"
            isLoading={profileLoading}
            src={profile.images[0].url}
          />
        )}
        {
          profileLoading ? <LoaderProfile /> :
          !profileError && profile && (
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
          )
        }
      </div>
    </StyledHeader>
  );
};

export default ProfileHeader;
