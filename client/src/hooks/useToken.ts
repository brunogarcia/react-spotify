import { useState, useEffect } from "react";
import { useAuth } from "../hooks";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(useAuth.accessToken);
  }, []);

  return { token };
}

export default useToken;
