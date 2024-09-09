import axiosInstance from "../axios.js";

export const APIUser = {
  APILogin: async (info) => {
    const response = await axiosInstance.post("/user/login", {
      ...info,
    });
    // console.log(response.data);
    return response.data;
  },
  APIRegistor: async (state) => {
    // console.log(state);

    const response = await axiosInstance.post("/user/create-user", {
      ...state,
    });
    // console.log("🚀 ~ handleSubmit ~ data:", response.data);
    return response.data;
  },
  APIGetInfor: async () => {
    const response = await axiosInstance.get("/user/get-infor");
    // console.log(response.data);
    return response.data;
  },
  APIUpdatePassword: async (id, infor) => {
    // console.log("🚀 ~ APIUpdateInfor:async ~ infor:", infor);
    const response = await axiosInstance.put(
      `/user/update-password/${id}`,
      infor
    );
    // console.log(response.data);
    return response.data;
  },
  APIUpdateInfor: async (userId,updateData) => {
    // console.log("🚀 ~ APIUpdateInfor:async ~ infor:", infor);
    const response = await axiosInstance.put(`/user/update-user/${userId}`, updateData);
    // console.log(response.data);
    return response.data;
  },
};
