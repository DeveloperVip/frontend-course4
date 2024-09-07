import { useContext, useEffect, useRef } from "react";
import { TimerQuizContext } from "../../../contexts/displayQuiz/timerQuizContext.jsx";
// import { redirect } from "react-router-dom";
// import { CheckpointContext } from "../../../contexts/displayQuiz/CheckpointQuizContext";
// import { DisplayQuizContext } from "../../../contexts/displayQuiz/displayQuizContext";
import { APIHistory } from "../../../services/API/APIHistory.jsx";
import { toast } from "react-toastify";
// import { DisplayQuizContext } from "../../../contexts/displayQuiz/displayQuizContext.jsx";

export const useStartTimer = (
  startTimer,
  handleNext,
  nexted,
  currentQuestion,
  displayQuiz,
  currentQuestionIndex,
  lessonId,
  selectedAnswer,
  lesson,
  paramQuizz,
) => {
  const intervalId = useRef();
  const countDownTime = useRef();
  let counter = useRef(0)
  const { activateTimerQuiz } = useContext(TimerQuizContext);

  useEffect(() => {
    // console.log("🚀 ~ useEffect ~ startTimer:", startTimer,lesson)
    
    if (startTimer && lesson?.question) {
      const distanceQuiz = lesson?.question[currentQuestion]?.time * 1000;
      if (distanceQuiz) {
        // console.log("🚀 ~ selectedAnswer:", lessonId);
        countDownTime.current = Date.now() + distanceQuiz + 1000;
        intervalId.current = setInterval(() => {
          counter.current += 1000
          if (nexted.current) {
            //   setNexted(false);
            // activateTimerQuiz({ minute: 0, seconds: 0 });
            handleNext();
            clearInterval(intervalId.current);
            countDownTime.current = Date.now() + distanceQuiz + 1000;
          } else {
            const now = Date.now();
            const distance = Math.round(countDownTime.current - now);
            
            const minutes = Math.round(
              (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.round((distance % (1000 * 60)) / 1000);
            if (
              seconds < 0 ||
              (currentQuestion === lesson?.question?.length - 1 &&
                currentQuestionIndex === lesson?.question?.length)
            ) {
              // console.log("🚀 ~ intervalId.current=setInterval ~ currentQuestion :", currentQuestion ,lesson?.question?.length,selectedOptions?.length ,answersCorrect?.length)
              if (currentQuestion === lesson?.question?.length - 1) {
                // displayQuiz.allAnswersSelected = selectedAnswer.current;
                const submitQuiz = {...displayQuiz,time:counter.current}
                // console.log(submitQuiz);
                const submitQuizData = async () => {
                  // const storeLesson = await api
                  const response  = await APIHistory.APICreateHistory(submitQuiz);
                  if(response.data) {
                    
                    toast.success("Nộp bài thành công !", {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                    window.location.href = `/checkPoint/${response.data._id}`;
                  }
                };
                submitQuizData();
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
  }, [
    startTimer,
    currentQuestion,
    lesson,
    paramQuizz,
    selectedAnswer,
    currentQuestionIndex,
  ]);
};
