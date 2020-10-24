const JWT = "user_jwt";

// Временный токен, пока не исправил ошибку при запросе на авторизацию
const TEMPORARY_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjAzNjE0MzU0LCJqdGkiOiI0YzdiNGExMGYzMTc0YzBhYTVhNTk4YTBmOGIzMWIxOSIsInVzZXJfaWQiOiJiZGY2ZjVjNS0wMmM1LTQ2ZTgtOGNlMy1kYmE4YjFlNjJhMGUifQ.12wuhGGybW9hwEC7a1C_JOnxkuQFYRH2d9TZVzotTYw";
const authHelper = {
  getToken() {
    return TEMPORARY_TOKEN;
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