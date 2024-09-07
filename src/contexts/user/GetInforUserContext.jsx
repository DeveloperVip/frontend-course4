import { createContext, useEffect, useState } from "react";
import { APIUser } from "../../services/API/APIUser.jsx";

export const GetInforUserContext = createContext();

export const GetInforUserProvider = ({ children }) => {
  const [identify, setIdentify] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const token = localStorage.getItem("token")
  useEffect(() => {
    if(token) {
      const fetchUserInfo = async () => {
        try {
          const response = await APIUser.APIGetInfor();
          // console.log(response);
          // Assume response contains email and username
          setIdentify(response.data._id);
          setEmail(response.data.email);
          setUsername(response.data.userName);
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      };
  
      fetchUserInfo();
    }
  }, []);
  const value = {
    identify,
    setIdentify,
    email,
    setEmail,
    username,
    setUsername,
  };

  return (
    <GetInforUserContext.Provider value={value}>
      {children}
    </GetInforUserContext.Provider>
  );
};
