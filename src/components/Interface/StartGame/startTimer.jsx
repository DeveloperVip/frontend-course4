import { useContext, useEffect, useRef } from "react";
import { TimerQuizContext } from "../../../contexts/displayQuiz/timerQuizContext";
import { redirect } from "react-router-dom";
import { CheckpointContext } from "../../../contexts/displayQuiz/CheckpointQuizContext";
// import { DisplayQuizContext } from "../../../contexts/displayQuiz/displayQuizContext.jsx";

export const useStartTimer = (
  startTimer,
  handleNext,
  nexted,
  currentQuestion,
  questions,
  displayQuiz,
  selectedAnswer,
  lesson,paramQuizz
) => {
  const intervalId = useRef();
  const countDownTime = useRef();
  const { activateTimerQuiz, timerQuiz } = useContext(TimerQuizContext);
  useEffect(() => {
    console.log("🚀 ~ selectedAnswer:",questions,lesson,nexted.current);
    if (startTimer && lesson?.question) {
      const distanceQuiz = lesson?.question[currentQuestion]?.time * 1000;
      console.log("🚀 ~ useEffect ~ distanceQuiz:", distanceQuiz)
      if (distanceQuiz) {
        console.log("🚀 ~ useEffect ~ distanceQuiz:", distanceQuiz);
        countDownTime.current = Date.now() + distanceQuiz + 1000;
        intervalId.current = setInterval(() => {
          if (nexted.current) {
            //   setNexted(false);
            // activateTimerQuiz({ minute: 0, seconds: 0 });
            handleNext();
            clearInterval(intervalId.current);
            countDownTime.current = Date.now() + distanceQuiz + 1000;
          } else {
            const now = Date.now();
            const distance = Math.round(countDownTime.current - now);
            console.log(
              "🚀 ~ intervalId.current=setInterval ~ distance:",
              distance
            );
            const minutes = Math.round(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.round((distance % (1000 * 60)) / 1000);
            console.log(
              "🚀 ~ intervalId.current=setInterval ~ seconds:",
              seconds
            );

            if (seconds < 0 || currentQuestion === lesson?.question?.length ) {
              
              console.log("🚀 ~ intervalId.current=setInterval ~ currentQuestion :", currentQuestion ,lesson?.question?.length)
              if (currentQuestion === lesson?.question?.length - 1) {
                displayQuiz.allAnswersSelected = selectedAnswer.current;
                console.log(displayQuiz);
                alert("Nộp bài thành công");
                window.location.href = "/checkPoint";
              } else {
                handleNext();
              }
              clearInterval(intervalId.current);
            } else {
              activateTimerQuiz({ minute: minutes, seconds: seconds });
            }
          }
        }, 1000);
        return () => {
          clearInterval(intervalId.current); // Ensure cleanup
        };
      }
    }
  }, [startTimer, currentQuestion, lesson,paramQuizz]);
};
