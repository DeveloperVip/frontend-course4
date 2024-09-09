import axiosInstance from "../axios.js";

const APIprofile = {
  getProfile: async() => {
    const response = await axiosInstance
    .get(`/profile/get`)
    return response?.data
    
  },
  APIUpdateProfile: (id, updateData) => {
    return axiosInstance
      .put(`/profile/update-profile/${id}`, updateData)
      .then((res) => {
        // console.log(res);
        return res.data;
      })
      .catch((error) => {
        console.log(error);
        // handle error
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
