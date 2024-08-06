import React from "react";

function QuizItem({ title, category, image }) {
  return (
    <div className="quiz-item">
      <img src={image} alt={title} className="quiz-image" />
      <h2>{title}</h2>
      <p>{category}</p>
    </div>
  );
}

export default QuizItem;
