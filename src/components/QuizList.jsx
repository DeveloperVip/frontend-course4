import React from "react";
import quizzes from ".././quizzes";
import "./QuizList.css"; // Đảm bảo bạn có file CSS này

const QuizList = () => (
  <div className="quiz-container">
    {quizzes.map((quiz, index) => (
      <div key={index} className="quiz-item">
        <img src={quiz.Image} alt={quiz.title} className="quiz-image" />
        <h2>{quiz.title}</h2>
        <p>{quiz.category}</p>
      </div>
    ))}
  </div>
);

export default QuizList;
