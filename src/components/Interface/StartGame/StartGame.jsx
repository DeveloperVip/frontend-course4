import React, { useState } from "react";
import "./StartGame.css";
import StartGameHeader from "./StartGameHeader";

const StartGame = () => {
  const options = ["mẹ", "con", "cha", "muốn"];
  const [currentQuestion, setCurrentQuestion] = useState(4);
  const totalQuestions = 19;
  const [selectedOption, setSelectedOption] = useState(null); // Quản lý đáp án đã chọn
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null); // Reset đáp án đã chọn khi chuyển câu
    }
  };

  const handleBefore = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null); // Reset đáp án đã chọn khi chuyển câu
    }
  };

  const handleOptionClick = (index) => {
    setSelectedOption(index); // Cập nhật trạng thái đáp án đã chọn
  };

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

  return (
    <div className="w-screen h-screen overflow-hidden quiz-container-inner flex flex-col gap-2">
      <StartGameHeader
        currentQuestion={currentQuestion}
        totalQuestions={totalQuestions}
      />
      <div className="h-1/2 w-full flex flex-col">
        <div
          className="themed question-container flex justify-center relative overflow-y-auto overflow-x-hidden rounded-lg transition-all duration-300 ease-in overflow-y-auto flex-1"
          currentquestionnumber={currentQuestion}
          totalquestions={totalQuestions}
        >
          <div className="question-container-inner box-border text-center rounded-lg w-full h-auto overflow-y-visible flex flex-row">
            <div
              aria-describedby="questionText"
              className="question-text relative p-2 w-auto flex flex-1 text-ds-light-300 align-middle transition-all duration-300 ease-in leading-8 overflow-y-auto"
            >
              <div className="w-full h-full" data-cy="read-aloud-container">
                <div
                  id="questionText"
                  className="resizeable-text"
                  shouldscroll="true"
                  style={{ fontSize: 32 }}
                >
                  <div className="text-container w-full">
                    <div className="resizeable gap-x-2 question-text-color text-ds-light-500">
                      <p style={{ display: "inline" }}>
                        Nghĩa ... như nước trong nguồn chảy ra
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="options-container w-full text-center rounded-t-lg mt-2 h-1/2">
        <div className="flex flex-col gap-y-2 h-full">
          <div
            className="options-grid flex flex-col sm:flex-row w-full h-full gap-2"
            style={{ "--totalOptions": options.length }}
          >
            {options.map((option, index) => {
              return (
                <div
                  key={index}
                  className={`option pb-1 sm:p-1 sm:pb-2 rounded-lg relative hover:cursor-pointer option-${
                    index + 1
                  } sm:w-[calc((100%-32px)/var(--totalOptions))] flex-1 ${
                    selectedOption !== null && selectedOption !== index
                      ? "blurred"
                      : ""
                  } ${selectedOption === index ? "is-selected" : ""}`}
                  onClick={() => handleOptionClick(index)} // Sự kiện chọn đáp án
                >
                  <div className="themed h-full option-inner w-full h-full">
                    <span className="bpl-content-container flex justify-center items-center h-full">
                      <p style={{ fontSize: 32 }}>{option}</p>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-4">
        <button
          onClick={handleBefore}
          disabled={currentQuestion === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg disabled:opacity-50"
        >
          Quay lại
        </button>

        {currentQuestion === totalQuestions ? (
          <button
            onClick={handleSubmit}
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
          >
            Nộp bài
          </button>
        ) : (
          <button
            onClick={handleNext}
            disabled={currentQuestion === totalQuestions}
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
