import React, { useContext } from "react";
import { QuizContext } from "../../contexts/quiz/quizContext.jsx";
import Slider from "../Interface/Lesson/Slider.jsx";
import { useNavigate } from "react-router-dom";

const AllQuiz = () => {
  const { questions } = useContext(QuizContext);
  const navigate = useNavigate();
  // console.log("🚀 ~ AllQuiz ~ questions:", questions);
  return (
    <div className="w-full">
      Lựa chọn để xem chi tiết và chỉnh sửa
      {questions?.map((item, index) => {
        return (
          <div key={index}>
            <button
              className="w-full"
              type="button"
              onClick={() => navigate(`/edit_question/${item._id}`)}
            >
              <Slider question={item} position={index} visiable={true} />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllQuiz;
