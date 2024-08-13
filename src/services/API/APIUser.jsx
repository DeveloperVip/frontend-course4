import axiosInstance from "../axios";

export const APIUser = {
  APILogin: async (userName, password) => {
    const response = await axiosInstance.post("/user/login", {
      userName,
      password,
    });
    console.log(response.data);
  },
  APIRegistor: async (state) => {
    const data = await axiosInstance.post("/user/create-user", {
      ...state,
    });
    console.log("🚀 ~ handleSubmit ~ data:", data);
  },
};
