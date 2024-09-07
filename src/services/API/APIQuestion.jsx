import axiosInstance from "../axios.js";

export const APIQuestion = {
  APICreate: async (info) => {
    // console.log(info);
    const response = await axiosInstance.post("/question/create", {
      ...info,
    });
    // console.log(response.data);
    return response.data;
  },
  APIUpdate: async (id, info) => {
    // console.log(id, info);
    const response = await axiosInstance.put(`/question/update/${id}`, {
      ...info,
    });
    // console.log(response.data);
    return response.data;
  },
  APIGetAllQuestion: async () => {
    const response = await axiosInstance.get("/question/");
    // console.log(response.data);
    return response.data;
  },
  APIGetQuestionById: async (id) => {
    const response = await axiosInstance.get(`/question/get/${id}`);
    // console.log(response.data);
    return response.data;
  },
};
