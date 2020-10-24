import axios from "axios";
import { API_URL } from "constants/api";

const ACCESS = "user_access";
const REFRESH = "user_refresh";
const ERROR_VERIFIED_CODE = "token_not_valid";

const authHelper = {
  getAccessToken() {
    return localStorage.getItem("user_access");
  },
  getRefreshToken() {
    return localStorage.getItem("user_refresh");
  },
  authenticate(access: string, refresh: string, cb?: () => void) {
    localStorage.setItem(ACCESS, access);
    localStorage.setItem(REFRESH, refresh);

    if (cb) {
      setTimeout(cb, 100);
    }
  },
  async verifyToken() {
    const token = this.getAccessToken();
    const { data } = await axios.post(`${API_URL}token/verify`, { token });

    return data.code !== ERROR_VERIFIED_CODE;
  },
  async refreshToken() {
    const token = this.getRefreshToken();
    const { data } = await axios.post(`${API_URL}token/refresh`, { token });

    if(data.code === ERROR_VERIFIED_CODE) {
      return false;
    }

    localStorage.setItem(ACCESS, data.access);
    localStorage.setItem(REFRESH, data.refrash);
    return true;
  },
  signout(cb?: () => void) {
    localStorage.removeItem(ACCESS);
    localStorage.removeItem(REFRESH);

    if (cb) {
      setTimeout(cb, 100);
    }
  },
  async checkauth() {
    const token = this.getAccessToken();
    if (!token) {
      return false;
    }

    const isVerified = this.verifyToken();
    if (isVerified) {
      return true;
    }

    const isRefreshed = this.refreshToken();
    if (isRefreshed) {
      return true;
    }

    return false;
  },
};

export default authHelper;
