import { useState, useEffect } from "react";
import { SpotifyUser } from "../types/spotify.model";
import { getUserProfile } from "../api/spotify.api";

const useUserProfile = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<SpotifyUser | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getUserProfile();
        setProfile(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
      }
    };

    fetchData();
  }, []);

  return { error, loading, profile };
}

export default useUserProfile;
