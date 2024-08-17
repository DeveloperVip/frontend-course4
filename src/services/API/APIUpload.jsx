import axiosInstance from "../axios";

export const APIUpload = {
  uploadAvatar: (data) => {
    axiosInstance
      .post("/api/v1/upload", data)
      .then((response) => {
        console.log(response.data);
        // handle success
      })
      .catch((error) => {
        console.log(error.response.data);
        // handle error
      });
  },
};
