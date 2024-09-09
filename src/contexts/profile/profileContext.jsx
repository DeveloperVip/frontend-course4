import { createContext, useState, useEffect } from "react";
import APIprofile from "../../services/API/APIProfile.jsx";
import { APIUser } from "../../services/API/APIUser.jsx";

// Create a context for the profile
export const ProfileContext = createContext();

// ProfileProvider component
export const ProfileProvider = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfileByUserId = async () => {
      try {
        const response = await APIprofile.getProfile(); // Adjust the API call as necessary
        setProfile(response?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchProfileByUserId();
  }, []);
  const updateProfile = async (profileId, updateData,userId) => {
    // console.log(updateData, profileId,userId);

    try {
      const res = await APIUser.APIUpdateInfor(userId,updateData)
      const response = await APIprofile.APIUpdateProfile(profileId, updateData);
      if(res || response) setProfile(response?.data);
    } catch (err) {
      setError(err); 
    } finally {
      setLoading(false); 
    }
  };
  const value = { profile, loading, error, updateProfile };
  return (
    <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>
  );
};
