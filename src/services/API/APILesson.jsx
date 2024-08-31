import axiosInstance from "../axios.js";

export const APILesson = {
  APIGetAllLesson: async () => {
    const response = await axiosInstance.get("/quiz/get");
    console.log(response.data);
    return response.data;
  },
  APIGetLesson: async (lessonId) => {
    console.log(lessonId);
    const response = await axiosInstance.get(`/quiz/get/${lessonId}`);
    console.log(response.data);
    return response.data;
  },
  APICreateLesson: async (data) => {
    console.log(data);
    const response = await axiosInstance.post("/quiz/create", data);
    console.log(response);
    return response.data;
  },
  APIUpdateLesson: async (id, data) => {
    // console.log("🚀 ~ APIUpdateLesson:async ~ id:", id)
    const response = await axiosInstance.put(`/quiz/update/${id}`, data);
    // console.log(response);
    return response.data;
  },
};
