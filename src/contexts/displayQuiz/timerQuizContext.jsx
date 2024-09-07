import { createContext, useState } from "react";

export const TimerQuizContext = createContext();

export const TimerQuizProvider = ({ children }) => {
  const [timerQuiz, setTimerQuiz] = useState({minute:0,seconds:0});

  const activateTimerQuiz = (selected) => {
    setTimerQuiz({...timerQuiz, ...selected});
  };

  const value = {
    timerQuiz,
    setTimerQuiz,
    activateTimerQuiz,
  };

  return (
    <TimerQuizContext.Provider value={value}>
      {children}
    </TimerQuizContext.Provider>
  );
};