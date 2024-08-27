import React from "react";
import quizzes from "../../../quizzes";
import "./QuizList.css"; // Đảm bảo bạn có file CSS này
import { useNavigate } from "react-router-dom";

const QuizList = ({ quizzes }) => {
  const navigate = useNavigate()
  console.log(quizzes); // Thêm dòng này để kiểm tra dữ liệu nhận được
  return (
    <div className="quiz-container grid grid-cols-4 grid-flow-row gap-4 mb-10">
      {quizzes.slice(0, 5).map((quiz, index) => (
        <div
          key={index}
          onClick={()=>navigate("/presentation/99876622")}
          className="quiz-item hover:shadow-lg ring-1 rounded-lg cursor-pointer"
        >
          <img
            src={quiz.Image}
            alt={quiz.title}
            className="quiz-image rounded-t-lg"
          />
          <div className="my-4 px-2.5 pt-2.5 pb-3.5 flex flex-col ">
          <div className="flex items-center gap-2">
            <div
              translate="no"
              className="lozenge items-center inline-flex text-tn font-semibold rounded px-1 bg-purple-200 text-lilac border border-lilac-20% rounded-64"
            >
              <span className="text-tn max-h-3.5 flex items-center uppercase">
                Quiz
              </span>
            </div>
          </div>

          <h2 className="mt-2 mb-3 text-sm md:text-base font-semibold min-h-12 line-clamp-2 overflow-hidden">{quiz.title}</h2>
          <div className="flex text-tn md:text-xs text-slate-400 font-semibold">
            <div className="mr-1.5">10 Questions</div>
            <span>•</span>
            <div className="mr-1.5 ml-1.5">72.7K plays</div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
