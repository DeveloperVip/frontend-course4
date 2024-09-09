import { useEffect, useState } from "react";
import APIprofile from "../services/API/APIProfile.jsx"

export const useFetchAPIProfileByUserId = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileByUserId = async () => {
     
      try {
        const response = await APIprofile.getProfile();
        setProfile(response?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileByUserId();
  }, []);

  return { profile, loading, error };
};

export const useUpdateAPIProfile = (id, updateData) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [updatedProfile, setUpdatedProfile] = useState(null);
  
    useEffect(() => {
      const updateProfile = async () => {
        if (!id) {
          setError(new Error("No User ID provided"));
          setLoading(false);
          return;
        }
  
        setLoading(true);
  
        try {
          const response = await APIprofile.APIUpdateProfile(id, updateData);
          setUpdatedProfile(response?.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      if (id && updateData) {
        updateProfile();
      }
    }, [id, updateData]); // Re-run the effect when userId or updateData changes
  
    return { updatedProfile, loading, error };
  };