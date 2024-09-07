import { useEffect, useState } from "react";
import { APIQuestion } from "../services/API/APIQuestion.jsx";

const useFetchQuizById = (id) => {
  const [quiz, setQuiz] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (token) {
      const fetchQuiz = async () => {
        try {
          const response = await APIQuestion.APIGetQuestionById(id);
          setQuiz(response.data);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchQuiz();
    }
  }, [token,id]);

  return { loading, error, quiz };
};

export default useFetchQuizById;
