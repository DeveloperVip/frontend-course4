import axiosInstance from "../axios.js";

export const APITopic = {
  APIGetAllTopic: async () => {
    const response = await axiosInstance.get("/topic");
    // console.log(response.data);
    return response.data;
  },
  APIGetTopic: async (topicId) => {
    // console.log(topicId);
    const response = await axiosInstance.get("/topic/get/:id");
    // console.log(response);
    return response.data;
  },
  APICreateTopic: async (data) => {
    // console.log(data);
    const response = await axiosInstance.post("/topic/create", data);
    // console.log(response);
    return response.data;
  },
};
