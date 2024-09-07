import { useEffect, useState } from "react";
import { APIHistory } from "../services/API/APIHistory.jsx";

export const useFetchAPIHistoryById = (id) => {
  // console.log("🚀 ~ useFetchAPILessonById ~ id:", id);
  const [history, setHistory] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchHitoryById = async () => {
      if (!id) {
        setError(new Error("No ID provided"));
        setLoading(false);
        return;
      }

      try {
        const response = await APIHistory.APIGetHistoryById(id);
        //   const response = await APILesson.;
        setHistory(response?.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHitoryById();
  }, [id]);

  return { history, loading, error };
};

export const useFetchAPIHistoryAll = ()=>{
    const [allHistory, setAllHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const token = localStorage.getItem("token")
  useEffect(() => {
    if(token){
      const fetchAllHitory = async () => {

        try {
          const response = await APIHistory.APIGetAllHistory();
          //   const response = await APILesson.;
          // console.log("🚀 ~ useFetchAPILessonById ~ response:", response);
          setAllHistory(response?.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchAllHitory();
    }
  }, []);

  return { allHistory, loading, error };
}
