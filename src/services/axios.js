import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://localhost:8000",
});
axiosInstance.interceptors.request.use(
  function (config) {
    const token =localStorage.getItem("token")
    if(token) config.headers.Authorization= `bearer ${token}`
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default axiosInstance