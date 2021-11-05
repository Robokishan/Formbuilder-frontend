const storage = {
  getToken: () => {
    return localStorage.getItem("token");
  },
  setToken: (value) => {
    localStorage.setItem("token", value);
  },
  saveUserId: (value) => {
    localStorage.setItem("userId", value);
  },
  getUserId: () => {
    return localStorage.getItem("userId");
  },
  removeToken: () => {
    localStorage.removeItem("token");
  },

  saveUser: (value) => {
    localStorage.setItem("user", JSON.stringify(value));
  },

  getUser: () => {
    return JSON.parse(localStorage.getItem("user") || "{}");
  },

  eraseAllvalues: () => {
    localStorage.clear();
  },

  saveUserDetails: (value) => {
    localStorage.setItem("details", JSON.stringify(value));
  },
  getUserDetails: () => {
    return JSON.parse(localStorage.getItem("details")|| '{}');
  },
};
export default storage;
