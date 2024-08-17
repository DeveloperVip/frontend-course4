import React from "react";
import quizzes from ".././quizzes";
import "./QuizList.css"; // Đảm bảo bạn có file CSS này


const QuizList = ({ quizzes }) => {
  console.log(quizzes); // Thêm dòng này để kiểm tra dữ liệu nhận được
  return (
    <div className="quiz-container">
      {quizzes.slice(0, 5).map((quiz, index) => (
        <div key={index} className="quiz-item">
          <img src={quiz.Image} alt={quiz.title} className="quiz-image" />
          <h2>{quiz.title}</h2>
          
        </div>
      ))}
    </div>
  );
};


export default QuizList;
