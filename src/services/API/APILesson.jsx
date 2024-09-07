import axiosInstance from "../axios.js";

export const APILesson = {
  APIGetAllLesson: async (keyword, selectedFilter) => {
    // console.log(
    //   "🚀 ~ APIGetAllLesson: ~ keyword,selectedFilter:",
    //   keyword,
    //   selectedFilter
    // );
    const response = await axiosInstance.get(`/quiz/get`, {
      params: { keyword, selectedFilter },
    });
    // console.log(response.data);
    return response.data;
  },
  APIGetAllLessonByUser: async () => {
    const response = await axiosInstance.get("/quiz/getByUser");
    // console.log(response.data);
    return response.data;
  },
  APIGetLesson: async (lessonId) => {
    // console.log(lessonId);
    const response = await axiosInstance.get(`/quiz/get/${lessonId}`);
    // console.log(response.data);
    return response.data;
  },
  APICreateLesson: async (data) => {
    // console.log(data);
    const response = await axiosInstance.post("/quiz/create", data);
    // console.log(response);
    return response.data;
  },
  APIUpdateLesson: async (id, data) => {
    // console.log("🚀 ~ APIUpdateLesson:async ~ id:", id)
    const response = await axiosInstance.put(`/quiz/update/${id}`, data);
    // console.log(response);
    return response.data;
  },
};
