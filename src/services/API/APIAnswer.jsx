import axiosInstance from "../axios.js";

export const APIAnswer = {
  APICreate: async (info) => {
    console.log(info);
    const response = await axiosInstance.post("/answer/create-answer", {
      ...info
    });
    console.log(response.data);
    return response.data
  },
};