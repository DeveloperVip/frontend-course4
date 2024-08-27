import axiosInstance from "../axios";

export const APIUpload = {
  uploadAvatar: async (data) => {
    try {
      const response = await axiosInstance.post("/user/api/v1/upload", data);
      console.log(response.data);
      // handle success
    } catch (error) {
      console.log(error.response?.data || error.message);
      // handle error
    }
  },
  
  uploadImageAnswer: async (data) => {
    try {
      console.log("🚀 ~ data:", data);
      const response = await axiosInstance.post("/answer/api/image/upload", data);
      console.log(response.data);
      // handle success
      return response.data;
    } catch (error) {
      console.log(error.response?.data || error.message);
      // handle error
    }
  },
  uploadImageQuestion: async (data) => {
    try {
      console.log("🚀 ~ data:", data);
      const response = await axiosInstance.post("/question/api/image/upload", data);
      console.log(response.data);
      // handle success
      return response.data;
    } catch (error) {
      console.log(error.response?.data || error.message);
      // handle error
    }
  },
};
