import { useEffect, useState } from "react";
import { APILesson } from "../services/API/APILesson.jsx";

export const useFetchAPILesson = (keyword, selectedFilter) => {
  // console.log("🚀 ~ useFetchAPILesson ~ keyword:", keyword, selectedFilter);
  const [allLesson, setAllLesson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        if (token) {
          const response = await APILesson.APIGetAllLesson(
            keyword,
            selectedFilter === "Tất cả" ? " " : selectedFilter
          );
          // console.log("🚀 ~ useEffect ~ response:", response);
          setAllLesson(response);
        }
      } catch (err) {
        // console.error("Failed to fetch lessons:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessons();
  }, [keyword, selectedFilter]);

  return { allLesson, loading, error };
};

export const useFetchAPILessonByUser = () => {
  const [allLessonByUser, setAllLessonByUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const fetchLessons = async () => {
        try {
          const response = await APILesson.APIGetAllLessonByUser();
          // console.log("🚀 ~ useEffect ~ response:", response);
          setAllLessonByUser(response);
        } catch (err) {
          // console.error("Failed to fetch lessons:", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchLessons();
    }
  }, []);

  return { allLessonByUser, loading, error };
};

export const useFetchAPILessonById = (id) => {
  // console.log("🚀 ~ useFetchAPILessonById ~ id:", id);
  const [lesson, setLesson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchLessonById = async () => {
      if (!id) {
        setError(new Error("No ID provided"));
        setLoading(false);
        return;
      }

      try {
        const response = await APILesson.APIGetLesson(id);
        //   const response = await APILesson.;
        // console.log("🚀 ~ useFetchAPILessonById ~ response:", response);
        setLesson(response?.data);
      } catch (err) {
        // console.error("Failed to fetch lesson:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchLessonById();
  }, [id]);

  return { lesson, loading, error };
};
