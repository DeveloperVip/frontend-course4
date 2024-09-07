import React from "react";
import quizzes from "../../../quizzes";
import "./QuizList.css"; // Đảm bảo bạn có file CSS này
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const QuizList = ({ quizzes }) => {
  const navigate = useNavigate()
  return (
    <div className="quiz-container grid grid-cols-4 grid-flow-row gap-4 mb-10">
      {quizzes.slice(0,10).map((quiz, index) => (
        <div
          key={index}
          onClick={()=>{
            toast.info("Đang chuyển tới slide !");
            navigate(`/presentation/${quiz?._id}`)}}
          className="quiz-item hover:shadow-lg ring-1 rounded-lg cursor-pointer"
        >
          <img
            src={quiz?.image ||" https://quizizz.com/media/resource/gs/quizizz-media/quizzes/fdf19b1b-7d86-485d-859d-a13390a9197f?w=400&h=400"}
            alt={quiz.name}
            className="quiz-image rounded-t-lg"
          />
          <div className="my-4 px-2.5 pt-2.5 pb-3.5 flex flex-col ">
          <div className="flex items-center gap-2">
            <div
              translate="no"
              className="lozenge items-center inline-flex text-tn font-semibold px-1 bg-purple-200 text-lilac border border-lilac-20% rounded-64"
            >
              <span className="text-tn max-h-3.5 flex items-center uppercase">
                Quiz
              </span>
            </div>
          </div>

          <h2 className="mt-2 mb-3 text-sm md:text-base font-semibold min-h-12 line-clamp-2 overflow-hidden">{quiz.name}</h2>
          <div className="flex text-tn md:text-xs text-slate-400 font-semibold">
            <div className="mr-1.5">{quiz?.question?.length} câu hỏi</div>
            <span>•</span>
            <div className="mr-1.5 ml-1.5">27.7K người chơi</div>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizList;
