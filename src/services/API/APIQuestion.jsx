import axiosInstance from "../axios.js";

export const APIQuestion = {
  APICreate: async (info) => {
    console.log(info);
    const response = await axiosInstance.post("/question/create", {
      ...info
    });
    console.log(response.data);
    return response.data
  },
};