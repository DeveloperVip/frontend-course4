import React, { useContext } from "react";
import { DisplayQuizContext } from "../../../contexts/displayQuiz/displayQuizContext.jsx";

const SlideGame = () => {
  //   const answers = [2];
  const { displayQuiz, selectedOptions, handleOptionClick } =
    useContext(DisplayQuizContext);
  // console.log("🚀 ~ SlideGame ~ currentQuestion:", displayQuiz);
  const currentQuestion = displayQuiz?.currentQuestion;
  console.log(
    "🚀 ~ SlideGame ~ displayQuiz?.currentQuestion:",
    displayQuiz?.currentQuestion
  );
  const answersCorrect = displayQuiz?.answersCorrect;
  //   console.log("🚀 ~ SlideGame ~ answers:", answers,selectedOptions)
  //   const answersCorrect = displayQuiz?.currentQuestion?.answersCorrect
  return (
    <>
      <div className="h-1/2 w-full flex flex-col">
        <div
          className="themed question-container flex justify-center relative overflow-y-auto overflow-x-hidden rounded-lg transition-all duration-300 ease-in flex-1"
          // currentquestionnumber={currentQuestion}
          // totalquestions={totalQuestions}
        >
          <div className="question-container-inner box-border text-center rounded-lg w-full h-auto overflow-y-visible flex flex-row">
            <div
              aria-describedby="questionText"
              className="question-text relative p-2 w-auto flex flex-1 text-ds-light-300 align-middle transition-all duration-300 ease-in leading-8 overflow-y-auto"
            >
              <div className="w-full h-full">
                <div
                  id="questionText"
                  className="resizeable-text"
                  // shouldscroll="true"
                  style={{ fontSize: 32 }}
                >
                  <div className="text-container w-full">
                    <div className="resizeable gap-x-2 question-text-color text-white">
                      {currentQuestion?.pictureQuestion?.secure_url && (
                        <div className="w-full h-full">
                          <img
                            className="object-cover overflow-hidden"
                            src={currentQuestion?.pictureQuestion?.secure_url}
                            alt=""
                          />
                        </div>
                      )}
                      <p style={{ display: "inline" }}>
                        {currentQuestion?.question}
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
            style={{ "--totalOptions": currentQuestion?.answers?.length }}
          >
            {currentQuestion?.answers?.map((option, index) => {
              return (
                <div
                  key={index}
                  className={`option pb-1 sm:p-1 sm:pb-2 rounded-lg relative hover:cursor-pointer option-${
                    index + 1
                  } sm:w-[calc((100%-32px)/var(--totalOptions))] flex-1 ${
                    answersCorrect?.length === selectedOptions.length &&
                    !selectedOptions?.includes(index) &&
                    !option.isTrue
                      ? "blurred"
                      : option.isTrue &&
                        answersCorrect?.length === selectedOptions.length
                      ? "is-selected bg-green-500"
                      : ""
                  } ${
                    selectedOptions?.includes(index)
                      ? answersCorrect?.length === selectedOptions.length
                        ? option.isTrue
                          ? "is-selected bg-green-500"
                          : "is-selected bg-red-500"
                        : "is-selected"
                      : ""
                  }`}
                  onClick={() => handleOptionClick(index, answersCorrect)} // Sự kiện chọn đáp án
                >
                  <div
                    className={`themed ${
                      selectedOptions.includes(index) || option.isTrue
                        ? answersCorrect?.length === selectedOptions.length
                          ? option.isTrue
                            ? "correct-answer"
                            : "wrong-answer"
                          : ""
                        : ""
                    } option-inner w-full h-full `}
                  >
                    <span className="bpl-content-container flex justify-center items-center h-full">
                      {option?.relatedPictures?.secure_url ? (
                        <>
                          <img src={option?.relatedPictures?.secure_url} />
                        </>
                      ) : (
                        <p style={{ fontSize: 32 }}>{option.content}</p>
                      )}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SlideGame;
