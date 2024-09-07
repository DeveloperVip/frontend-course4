import axiosInstance from "../axios.js";

const APIprofile = {
  getProfile: () => {
    return axiosInstance
      .get(`/profile`)
      .then((response) => response.data)
      .catch((error) => {
        // Xử lý lỗi khi gọi API
        console.error("Error :", error);
      });
  },
  updateUser: (_id, userData) => {
    return axiosInstance
      .put(`/user/update-user/${_id}`, userData)
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },

  changePassword: (_id, passwordData) => {
    return axiosInstance
      .put(`/user/password-user/${_id}`, passwordData)
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
      });
  },
};

export default APIprofile;
