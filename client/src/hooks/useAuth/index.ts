import { logout } from "./logout";
import { getAccessToken } from "./get-access-token";
import { LOCAL_STORAGE_KEYS } from "./local-storage";

const useAuth = {
  logout,
  accessToken: getAccessToken(),
  localStorageKeys: LOCAL_STORAGE_KEYS
};

export default useAuth;
