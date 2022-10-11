import { useQuery } from "@tanstack/react-query"
import { QueryType } from "../types/query.model";
import { fetchUserProfile } from "../services/spotify.service";

function useProfile () {
  const {
    data,
    error,
    isLoading,
  } = useQuery([QueryType.USER_PROFILE], fetchUserProfile);

  return {
    error,
    isLoading,
    profile: data,
  }
}

export default useProfile
