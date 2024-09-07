import axiosInstance from "../axios.js";

export const APIHistory = {
  APIGetAllHistory: async () => {
    // console.log("get history");

    const response = await axiosInstance.get("/history/getAllHistory");
    // console.log(response.data);
    return response.data;
  },
  APIGetHistoryById: async (historyId) => {
    // console.log(historyId);
    const response = await axiosInstance.get(`/history/get/${historyId}`);
    // console.log(response.data);
    return response.data;
  },
  APICreateHistory: async (data) => {
    // console.log(data);
    const response = await axiosInstance.post("/history/create", data);
    // console.log(response);
    return response.data;
  },
  APIUpdateHistory: async (id, data) => {
    // console.log("🚀 ~ APIUpdateHistory:async ~ id:", id)
    const response = await axiosInstance.put(`/history/update/${id}`, data);
    // console.log(response);
    return response.data;
  },
};
