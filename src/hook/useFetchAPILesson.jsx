import { useEffect, useState } from "react";
import { APILesson } from "../services/API/APILesson";

export const useFetchAPILesson = () => {
  const [allLesson, setAllLesson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        const response = await APILesson.APIGetAllLesson();
        console.log("🚀 ~ useEffect ~ response:", response);
        setAllLesson(response);
      } catch (err) {
        console.error("Failed to fetch lessons:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, []);

  return { allLesson, loading, error };
};

export const useFetchAPILessonById = (id) => {
    console.log("🚀 ~ useFetchAPILessonById ~ id:", id)
    const [lesson, setLesson] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      console.log("đã vào đây");
      
      const fetchLessonById = async () => {
        if (!id) {
          setError(new Error("No ID provided"));
          setLoading(false);
          return;
        }
        
        try {
          const response = await APILesson.APIGetLesson(id);
        //   const response = await APILesson.;
          console.log("🚀 ~ useFetchAPILessonById ~ response:", response);
          setLesson(response);
        } catch (err) {
          console.error("Failed to fetch lesson:", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchLessonById();
    }, [id]);
  
    return { lesson, loading, error };
  };
