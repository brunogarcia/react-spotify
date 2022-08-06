import { useState, useEffect } from "react";
import auth from "../hooks/useAuth";

const useToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    setToken(auth.accessToken);
  }, []);

  return { token, shouldRedirect: !token };
}

export default useToken;
