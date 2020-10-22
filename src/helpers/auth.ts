const JWT = "user_jwt";

const authHelper = {
  getToken() {
    return localStorage.getItem("user_jwt");
  },
  authenticate(jwt: string, cb?: () => void) {
    localStorage.setItem(JWT, jwt);

    if (cb) {
      setTimeout(cb, 100);
    }
  },
  signout(cb?: () => void) {
    localStorage.removeItem(JWT);

    if (cb) {
      setTimeout(cb, 100);
    }
  },
  get isAuthenticated() {
    return this.getToken() && true;
  }
};

export default authHelper;