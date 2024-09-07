import React, { createContext, useContext, useState } from "react";
import useFetchQuiz from "../../hook/useFetchQuiz.jsx";
// Tạo context
export const QuizContext = createContext();

// Tạo Provider component
export const QuizProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);

  // Sử dụng hook useFetchQuiz để lấy dữ liệu
  const { loading, error } = useFetchQuiz(setQuestions);

  const addQuestion = (newQuestion) => {
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);
  };

  const getQuestionById = (id) => {
    return questions.find((question) => question.id === id);
  };
  const value = { questions, loading, error, addQuestion, getQuestionById };
  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
