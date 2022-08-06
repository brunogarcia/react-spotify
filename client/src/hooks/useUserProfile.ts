import { useState, useEffect } from "react";
import { SpotifyUser } from "../types/spotify.model";
import { getCurrentUserProfile } from "../api/spotify.api";

const useUserProfile = () => {
  const [profile, setProfile] = useState<SpotifyUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userProfile = await getCurrentUserProfile();
        setProfile(userProfile);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return { profile };
}

export default useUserProfile;
