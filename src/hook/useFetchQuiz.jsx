import { useEffect, useState } from 'react';
import axios from 'axios';
import { APIQuestion } from '../services/API/APIQuestion.jsx';

const useFetchQuiz = ( setQuestions) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
const token = localStorage.getItem("token")
  useEffect(() => {
    if(token){
        const fetchQuiz = async () => {
            try {
              const response = await APIQuestion.APIGetAllQuestion();
              setQuestions(response.data);
            } catch (err) {
              setError(err);
            } finally {
              setLoading(false);
            }
          };
      
          fetchQuiz();
    }
  }, [ setQuestions]);

  return { loading, error };
};

export default useFetchQuiz;
