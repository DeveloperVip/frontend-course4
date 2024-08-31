import axios from "axios";
// const config = {
//   headers: {
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
//   },
//   credentials: 'include',
//   https://backend-course-4.onrender.com
//https://backend-course-4.vercel.app/
// };
const axiosInstance = axios.create({
  baseURL: "http://localhost:8000"
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