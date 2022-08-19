import { StyledHeader } from "../../styles";
import { useProfile, usePlaylists } from "../../hooks";
import { LoaderProfile, Image } from '../../components';

const ProfileHeader = () => {
  const {
    profile,
    error: errorProfile,
    isLoading: isLoadingProfile,
  } = useProfile();

  const {
    playlists,
    error: errorPlaylists,
    isLoading: isLoadingPlaylists,
  } = usePlaylists({ limit: 10 });

  return (
    <StyledHeader type="user">
      <div className="header__inner">
        {
          errorProfile ? "" :
          profile &&
          <Image
            alt="Avatar"
            className="header__img"
            images={profile.images}
            isLoading={isLoadingProfile}
          />
        }
        {
          isLoadingProfile ? <LoaderProfile /> :
          errorProfile ? "No profile available" :
          profile && (
            <div>
              <div className="header__overline">
                Profile
              </div>
              <h1 className="header__name">
                {profile.display_name}
              </h1>
              <p className="header__meta">
                {
                  isLoadingPlaylists || errorPlaylists ? "" :
                  playlists && (
                    <span>
                      {playlists.total} Playlist{playlists.total !== 1 ? "s" : ""}
                    </span>
                  )
                }
                <span>
                  {profile.followers.total} Follower{profile.followers.total !== 1 ? "s" : ""}
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
