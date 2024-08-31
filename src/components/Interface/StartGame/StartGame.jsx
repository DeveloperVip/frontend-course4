import React, { useContext, useEffect, useState } from "react";
import "./StartGame.css";
import StartGameHeader from "./StartGameHeader.jsx";
import SlideGame from "./SlideGame.jsx";
import { DisplayQuizContext } from "../../../contexts/displayQuiz/displayQuizContext.jsx";
import { useParams } from "react-router-dom";
import { useFetchAPILessonById } from "../../../hook/useFetchAPILesson.jsx";

const StartGame = () => {
  const param = useParams();
  console.log("🚀 ~ StartGame ~ param:", param?.id);
  const {
    displayQuestions,
    currentQuestion,
    nexted,
    displayQuiz,
    handleBefore,
    setStartTimer,
    setDisplayQuiz,
    setParamQuizz,
  } = useContext(DisplayQuizContext);
  useEffect(() => {
    setParamQuizz(param);
  }, [param]);
  useEffect(() => {
    setStartTimer(true);
  }, [param ]);

  console.log("🚀 ~ StartGame ~ currentQuestion:", currentQuestion);
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = () => {
    setShowPopup(true); // Hiển thị popup xác nhận khi nhấn vào "Nộp bài"
  };

  const confirmSubmit = () => {
    setShowPopup(false); // Ẩn popup sau khi xác nhận
    alert("Nộp bài thành công!"); // Thêm logic nộp bài ở đây
  };

  const cancelSubmit = () => {
    setShowPopup(false); // Ẩn popup khi người dùng nhấn "Hủy bỏ"
  };

  const handleClick = () => {
    nexted.current = true;
  };

  return (
    <div className="w-screen h-screen overflow-hidden quiz-container-inner flex flex-col gap-2">
      <StartGameHeader
        currentQuestion={currentQuestion}
        totalQuestions={displayQuiz?.questions?.length}
      />
      <SlideGame />

      <div className="flex justify-between items-center p-4">
        <button
          onClick={handleBefore}
          disabled="true"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Quay lại
        </button>

        {currentQuestion === displayQuiz?.questions?.length - 1 ? (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Nộp bài
          </button>
        ) : (
          <button
            onClick={handleClick}
            disabled={currentQuestion === displayQuiz?.questions?.length - 1}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            Câu tiếp theo
          </button>
        )}
      </div>

      {showPopup && (
        <div className="popup fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Xác nhận nộp bài</h2>
            <p>Bạn có chắc chắn muốn nộp bài không?</p>
            <div className="flex justify-between mt-4">
              <button
                onClick={confirmSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded-lg"
              >
                Xác nhận
              </button>
              <button
                onClick={cancelSubmit}
                className="bg-red-500 text-white px-4 py-2 rounded-lg"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartGame;
