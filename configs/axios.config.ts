import axios from "axios";

const publicAxios = axios.create({
  baseURL: "/api/auth",
});

publicAxios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default publicAxios;
