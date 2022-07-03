import axios from "axios";

const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "acb9ba12-9bfc-4148-ab64-370f771434bc",
    // FREE API-KEYS
    // d9fcf87e-ec65-4e9f-87cb-1d339322cd4b
    // 759176a6-1b49-41ba-8cde-68d229d3b989
  },
});

export const userAPI = {
  getUsers: (currentPage = 1, pageSize = 5, term, friend = "") => {
    return instance
      .get(
        `users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`
      )
      .then((response) => response.data);
  },
  followStatus: (id = 1) => {
    return instance.get(`follow/${id}`).then((response) => response.data);
  },
  follow: (id = 1) => {
    return instance.post(`follow/${id}`);
  },
  unFollow: (id = 1) => {
    return instance.delete(`follow/${id}`);
  },
};

export const profileAPI = {
  getProfile: (userId) => {
    return instance.get(`profile/${userId}`);
  },
  getStatus: (userId) => {
    return instance.get(`profile/status/${userId}`);
  },
  changeStatus: (status) => {
    return instance.put(`profile/status`, { status });
  },
  changePhoto: (photoFile) => {
    const formData = new FormData();
    formData.append("image", photoFile);
    return instance.put(`profile/photo`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
  changeContacts: (contacts) => {
    return instance.put("profile", contacts);
  },
};

export const authAPI = {
  getAuthDate: () => {
    return instance.get(`auth/me`);
  },
  login: (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, { email, password, rememberMe });
  },
  logout: () => {
    return instance.delete("auth/login");
  },
};
