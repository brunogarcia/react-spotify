import { logout } from "./logout";
import { getAccessToken } from "./get-access-token";
import { LOCALSTORAGE_KEYS } from "./local-storage";

const useAuth = {
  logout,
  accessToken: getAccessToken(),
  localStorageKeys: LOCALSTORAGE_KEYS
};

export default useAuth;
