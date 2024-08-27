import React, { useState } from "react";
import { FaTimes, FaEye } from "react-icons/fa";
import "./Preview.css";
import { initialAnswers } from "../../utils/Initial.jsx";
import { useNavigate } from "react-router-dom";

const Preview = () => {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(true);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);

  // const initialAnswers = [
  //   { id: 1, brand: "brand-a", content: "Answer 1", image: null, correct: true },
  //   { id: 2, brand: "brand-b", content: "Answer 2", image: null, correct: false },
  //   { id: 3, brand: "brand-c", content: "Answer 3", image: null, correct: false },
  //   { id: 4, brand: "brand-d", content: "Answer 4", image: null, correct: false },
  // ];

  const closePreview = () => {
    setIsOpen(false);
    navigate(-1)
  };

  const toggleCorrectAnswer = () => {
    setShowCorrectAnswer(!showCorrectAnswer);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="w-full h-full overflow-auto select-none bg-dark-50% p-6 fixed w-screen top-0 left-0 z-9999">
      <div className="quiz-question-preview-wrapper w-full h-full min-h-120 overflow-auto bg-dark flex flex-col justify-between rounded-lg">
        <div className="relative flex items-center justify-between bg-black text-white p-2 font-bold rounded-lg">
          <div className="flex">
            <div className="fraction-text min-w-16 px-3 py-2 bg-light-10% rounded-lg text-xs flex justify-center items-end shrink">
              <span className="text-lg">1</span> /1
            </div>
            <div className="px-3 py-2 min-w-40 transition-all duration-1000 ml-2 text-light-3 rounded-lg flex items-center justify-center bg-brand-b">
              <i
                className="flex items-center far fa-check-square"
                style={{ fontSize: 18 }}
              />
              <span className="ml-2 text-sm">Nhiều đáp án</span>
            </div>
          </div>
          <span className="px-4 py-2 bg-light-10% rounded-lg absolute left-1/2 -ml-20">
          Chế độ xem người tham gia
          </span>
          <button
            className="transition-colors duration-200 ease-in-out flex items-center justify-center w-9 h-9 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded-lg relative min-w-max is-nudge-on v-popper--has-tooltip"
            aria-label="close Keyboard Shortcut(Escape)"
            type="button"
            translate="no"
            data-testid="question-preview-close-button"
            onClick={closePreview}
          >
            <FaTimes
              className="flex items-center fas fa-times"
              style={{ fontSize: 14 }}
            />
          </button>
        </div>
        <div className="transitioner transitioner-component w-full preview-section">
          <div className="relative w-full h-full flex flex-1 justify-center items-center overflow-hidden">
            <div className="transitioner w-full h-full transitioner-component px-2">
              <div className="flex flex-col w-full h-full">
                <div className="flex h-full w-full text-light rounded-lg px-2 py-2 flex-col newgameplay-bg">
                  <section className="h-3/6 transition-all flex items-center MCQ showing-answer-false query-container w-full">
                    <div className="border-none question-query-section flex items-center h-full relative min-h-15 h-full p-4 justify-center bg-ds-dark-500-50 border-ds-light-500-20 border-[0.5px] blur-20 !h-[calc(100%-16px)] mt-2 question-section w-full rounded-lg mt-2 ">
                      <div className="pill absolute top-0 translate-x-1/2 -translate-y-1/2 text-white bg-ds-dark-500-50 px-3 py-0.5 rounded-full blur-20 border text-sm flex flex-row left-[calc(50%-24px)]">
                        <p>
                          <span data-cy="current-question-number">1</span>
                          /
                          <span data-cy="total-question-number">1</span>
                        </p>
                      </div>

                      <div className="px-2 pt-3 pb-2 h-full flex-1">
                        <div className="text-light-20% h-full w-full flex justify-center items-center text-2xl">
                          <span>Câu hỏi</span>
                        </div>
                      </div>
                    </div>
                  </section>
                  <div className="options-container flex flex-col md:flex-row w-full h-3/6 gap-2">
                    <div className="grid md:grid-flow-col md:auto-cols-fr w-full h-full gap-2">
                      {initialAnswers.map((answer,index) => (
                        <div
                          key={answer.id}
                          className={`question-option relative rounded-lg h-full max-h-full overflow-y-auto overflow-x-hidden flex flex-row-reverse md:flex-col bg-brand-${index} p-1 gap-2 group ${
                            showCorrectAnswer
                              ? answer.isTrue
                                ? "bg-green-500 opacity-100"
                                : "opacity-50"
                              : "opacity-100"
                          }`}
                        >
                          {answer.secure_url ? (
                            <div className="relative">
                              <img
                                alt="not found"
                                width={"250px"}
                                src={answer.secure_url}
                              />
                            </div>
                          ) : (
                            <>
                              <div
                                className="action-center flex flex-col md:flex-row gap-2"
                                style={{ flex: "0 0 auto" }}
                              ></div>
                              <div
                                className="flex flex-col justify-center relative p-2 text-light-3 text-center rounded text-lg overflow-y-auto h-full w-full max-h-full break-words"
                                style={{
                                  placeholderColor: "rgba(255,255,255,0.66)",
                                  fontSize: 20,
                                }}
                              >
                                <div className="h-full">
                                  <textarea
                                    style={{
                                      width: "100%",
                                      wordWrap: "break-word",
                                      backgroundColor: "inherit",
                                    }}
                                    id={answer.id}
                                    className="h-full"
                                    placeholder="Câu trả lời ..."
                                    value={answer.content}
                                    readOnly
                                  />
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-between p-4 rounded-lg bg-black">
          <div className="flex items-center gap-4">
            <button
              className="transition-colors duration-200 ease-in-out flex items-center px-4 py-2.5 text-lg font-semibold q-shadow mb-1 h-10 base bg-purple-600 text-light-3 hover:bg-purple-400 active:bg-lilac-dark rounded-lg special relative min-w-max ml-3 answer-button button-shadow v-popper--has-tooltip"
              aria-label="Show answers Keyboard Shortcut(Space)"
              type="button"
              translate="no"
              data-testid="question-preview-show-answers-button"
              onClick={toggleCorrectAnswer}
            >
              <FaEye
                className="flex items-center far fa-eye mr-2"
                style={{ fontSize: 16 }}
              />

              <span className="title" title="Show answers">
                Xem đáp án đúng
              </span>
            </button>
          </div>
          <div className="flex items-center h-full">
            <div className="flex flex-col items-center ml-3">
              <button
                className="transition-colors duration-200 ease-in-out flex items-center justify-center w-10 h-10 opacity-25 bg-light-20% text-light-3 rounded-lg transparent relative min-w-max w-14 v-popper--has-tooltip"
                aria-label="Previous Keyboard Shortcut(Left Arrow)"
                disabled
                type="button"
                translate="no"
              >
                <i
                  className="flex items-center far fa-arrow-alt-circle-left"
                  style={{ fontSize: 16 }}
                />

                <span className="title" title />
              </button>
              <button
                className="transition-colors duration-200 ease-in-out flex items-center justify-center w-10 h-10 opacity-25 bg-light-20% text-light-3 rounded-lg transparent relative min-w-max w-14 v-popper--has-tooltip"
                aria-label="Next Keyboard Shortcut(Right Arrow)"
                disabled
                type="button"
                translate="no"
              >
                <i
                  className="flex items-center fas fa-arrow-alt-circle-right"
                  style={{ fontSize: 16 }}
                />

                <span className="title" title />
              </button>
              <div className="text-light-50% text-xxs opacity-25">
                <span>Tiếp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
