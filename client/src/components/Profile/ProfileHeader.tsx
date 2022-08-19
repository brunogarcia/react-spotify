import { useQuery } from "@tanstack/react-query"
import { StyledHeader } from "../../styles";
import { QueryType } from "../../types/query.model";
import { LoaderProfile, Image } from '../../components';
import { fetchUserProfile, fetchPlaylists } from "../../api/spotify.api";

const ProfileHeader = () => {
  const {
    data: profile,
    error: errorProfile,
    isLoading: isLoadingProfile,
  } = useQuery([QueryType.USER_PROFILE], fetchUserProfile);

  const {
    data: playlists,
    error: errorPlaylists,
    isLoading: isLoadingPlaylists,
  } = useQuery([QueryType.PLAYLISTS], () => fetchPlaylists({ limit: 10 }));

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
                      {playlists.total} Playlist {playlists.total !== 1 ? "s" : ""}
                    </span>
                  )
                }
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
