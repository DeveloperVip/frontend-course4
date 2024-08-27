import axiosInstance from "../axios.js";

export const APIUser = {
  APILogin: async (info) => {
    const response = await axiosInstance.post("/user/login", {
      ...info
    });
    console.log(response.data);
    return response.data
  },
  APIRegistor: async (state) => {
    console.log(state);
    
    const response = await axiosInstance.post("/user/create-user", {
      ...state,
    });
    console.log("🚀 ~ handleSubmit ~ data:", response.data);
    return response.data;
  },
};
