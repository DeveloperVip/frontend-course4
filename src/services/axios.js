import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://backend-course-4.onrender.com",
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