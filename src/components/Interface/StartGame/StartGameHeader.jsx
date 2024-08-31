import React, { useContext } from "react";
import { TimerQuizContext } from "../../../contexts/displayQuiz/timerQuizContext";

const StartGameHeader = ({currentQuestion, totalQuestions}) => {
  const {timerQuiz} = useContext(TimerQuizContext)
  console.log("🚀 ~ StartGameHeader ~ timerQuiz:", timerQuiz)
  return (
    <div className="app-header-container fixed z-101 top-0 left-0 right-0 p-2 sm:p-4 text-white text-base bg-[#141414]">
      <div className="powerup-effects-wrapper absolute top-full w-full pointer-events-none">
        <div className="powerup-effects-center-container">
          <p className="effects-container" />
          <p className="applied-effects-container" />
        </div>
      </div>

      <div className="actions-wrapper flex flex-1 justify-between items-center w-full h-full gap-1 sm:gap-3">
        <div className="actions-container flex gap-1 sm:gap-3">
          <div className="flex items-center bg-slate-200 bg-opacity-10 h-[34px] sm:h-[42px] rounded-lg px-2 sm:px-3.5 py-2 sm:py-2.5 text-lg font-medium">
            <span className="text-sm sm:text-base">{currentQuestion + 1}</span>
            <span className="total-questions">/{totalQuestions}</span>
          </div>
        </div>

        <div className="box-border select-none font-bold text-slate-200  hover:bg-slate-500 active:bg-slate-200-10 h-9 w-20 sm:h-10 sm:w-20 rounded-lg">
          <span>{timerQuiz.seconds} s</span>

        </div>

        {/* <button
          className="box-border select-none font-bold text-slate-200 bg-slate-200 hover:bg-slate-500 active:bg-slate-200-10 h-9 w-9 sm:h-10 sm:w-10 rounded-lg"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <svg
            className="w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 3.25C6.09766 3.25 6.625 3.77734 6.625 4.375C6.625 5.00781 6.09766 5.5 5.5 5.5H3.25V7.75C3.25 8.38281 2.72266 8.875 2.125 8.875C1.49219 8.875 1 8.38281 1 7.75V4.375C1 3.77734 1.49219 3.25 2.125 3.25H5.5ZM17.875 3.25C18.4727 3.25 19 3.77734 19 4.375V7.75C19 8.38281 18.4727 8.875 17.875 8.875C17.2422 8.875 16.75 8.38281 16.75 7.75V5.5H14.5C13.8672 5.5 13.375 5.00781 13.375 4.375C13.375 3.77734 13.8672 3.25 14.5 3.25H17.875ZM5.5 14.5C6.09766 14.5 6.625 15.0273 6.625 15.625C6.625 16.2578 6.09766 16.75 5.5 16.75H2.125C1.49219 16.75 1 16.2578 1 15.625V12.25C1 11.6523 1.49219 11.125 2.125 11.125C2.72266 11.125 3.25 11.6523 3.25 12.25V14.5H5.5ZM17.875 11.125C18.4727 11.125 19 11.6523 19 12.25V15.625C19 16.2578 18.4727 16.75 17.875 16.75H14.5C13.8672 16.75 13.375 16.2578 13.375 15.625C13.375 15.0273 13.8672 14.5 14.5 14.5H16.75V12.25C16.75 11.6523 17.2422 11.125 17.875 11.125Z"
              fill="currentColor"
            />
          </svg>
        </button> */}
      </div>
    </div>
  );
};

export default StartGameHeader;
