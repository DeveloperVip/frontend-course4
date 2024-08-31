import { createContext, useContext, useEffect, useRef, useState } from "react";
import { isEmpty } from "../../utils/is-empty.jsx";
import { questions } from "../../utils/Initial.jsx";
import { useStartTimer } from "../../components/Interface/StartGame/startTimer.jsx";
import { TimerQuizContext } from "./timerQuizContext.jsx";
import { useFetchAPILessonById } from "../../hook/useFetchAPILesson.jsx";
export const DisplayQuizContext = createContext();

export const DisplayQuizProvider = ({ children }) => {
  const quizzs = {
    questions: [], // Bắt đầu với một mảng rỗng
    currentQuestion: {},
    nextQuestion: {},
    previousQuestion: {},
    answersCorrect: [],
    numberOfQuestion: 0,
    numberOfAnswerQuestion: 0,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswer: 0,
    wrongAnswer: 0,
    allAnswersSelected: [],
    time: [],
  };
  const [displayQuiz, setDisplayQuiz] = useState(quizzs);
  const [paramQuizz, setParamQuizz] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const selectedAnswer = useRef([]);
  const nexted = useRef(false);
  const [startTimer, setStartTimer] = useState(false);
  const { activateTimerQuiz } = useContext(TimerQuizContext);
  const { lesson } = useFetchAPILessonById(paramQuizz?.id);

  const displayQuestions = (paramQuizz, lesson) => {
    if (paramQuizz && lesson) {
      console.log(lesson);
      // if (!isEmpty(questions)) {
      const currentQuestions = lesson[currentQuestion];
      const nextQuestion = lesson[currentQuestion + 1];
      const previousQuestion = lesson[currentQuestion - 1];
      const answersCorrect = currentQuestions?.answersCorrect;
      setDisplayQuiz((prevState) => ({
        ...prevState,
        questions: lesson,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        currentQuestion: currentQuestions,
        currentQuestionIndex: currentQuestion,
        answersCorrect: answersCorrect,
      }));
      // }
    }
  };

  const correctQuiz = () => {
    const {
      score,
      currentQuestionIndex,
      correctAnswer,
      numberOfAnswerQuestion,
    } = quizzs;
    console.log("🚀 ~ wrongQuiz ~ arrayAnswers:", selectedAnswer.current);
    // console.log("🚀 ~ wrongQuiz ~ arrayAnswers:", currentQuestionIndex)
    if (currentQuestion < lesson?.question?.length - 1) {
      const number = currentQuestion + 1;
      // console.log("🚀 ~ handleNext ~ newCurrentQuestion:", number,lesson?.question?.length)
      const currentQuestions = lesson?.question[number];
      // console.log("🚀 ~ displayQuestions ~ currentQuestion:", currentQuestion)
      const nextQuestion = lesson?.question[number + 1];
      const previousQuestion = lesson?.question[number - 1];
      const answersCorrect = currentQuestions?.answersCorrect;

      setDisplayQuiz({
        ...displayQuiz,
        score: score + 1,
        numberOfAnswerQuestion: numberOfAnswerQuestion + 1,
        correctAnswer: correctAnswer + 1,
        currentQuestionIndex: number,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        currentQuestion: currentQuestions,
        answersCorrect: answersCorrect,
        allAnswersSelected: selectedAnswer.current,
      });
      if (number < lesson?.question?.length) setSelectedOptions([]);
      setCurrentQuestion(number);
    }
  };

  const wrongQuiz = () => {
    const {
      questions,
      currentQuestionIndex,
      wrongAnswer,
      numberOfAnswerQuestion,
    } = quizzs;
    console.log("🚀 ~ wrongQuiz ~ arrayAnswers:", selectedAnswer.current);
    if (currentQuestion < lesson?.question?.length - 1) {
      const number = currentQuestion + 1;
      const currentQuestions = lesson?.question[number];
      console.log(
        "🚀 ~ handleNext ~ newCurrentQuestion:",
        number,
        lesson?.question?.length
      );
      // console.log("🚀 ~ displayQuestions ~ currentQuestion:", currentQuestion)
      const nextQuestion = lesson?.question[number + 1];
      const previousQuestion = lesson?.question[number - 1];
      const answersCorrect = currentQuestions?.answersCorrect;

      setDisplayQuiz({
        ...displayQuiz,
        numberOfAnswerQuestion: numberOfAnswerQuestion + 1,
        wrongAnswer: wrongAnswer + 1,
        currentQuestionIndex: number,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        currentQuestion: currentQuestions,
        answersCorrect: answersCorrect,
        allAnswersSelected: selectedAnswer.current,
      });
      if (number < lesson?.question?.length) setSelectedOptions([]);
      setCurrentQuestion(number);
    }
  };

  const handleCompare = () => {
    const { currentQuestion, answersCorrect, allAnswersSelected } = displayQuiz;
    let correctQuestion = true;
    console.log("vào đây á", selectedAnswer.current);
    let arrayAnswers = [...allAnswersSelected];
    // console.log(
    //   "🚀 ~ handleCompare ~ selectedOptions?.length:",
    //   selectedOptions,
    //   answersCorrect?.length
    // );
    // console.log("🚀 ~ handleCompare ~ arrayAnswers:", arrayAnswers);
    if (selectedOptions?.length === answersCorrect?.length) {
      console.log("có vào không đây");
      selectedOptions.map((item) => {
        if (arrayAnswers?.includes(currentQuestion?.answers[item]?._id)) {
          arrayAnswers?.filter(
            (item) => item === currentQuestion?.answers[item]?._id
          );
        } else {
          arrayAnswers?.push(currentQuestion?.answers[item]?._id);
        }
        console.log("🚀 ~ selectedOptions.map ~ arrayAnswers:", arrayAnswers);
        selectedAnswer.current = arrayAnswers;
        // Use forEach instead of map since you aren't returning anything
        if (currentQuestion?.answers[item]?.isTrue === false) {
          correctQuestion = false;
        }
      });

      if (correctQuestion) {
        correctQuiz();
      } else {
        wrongQuiz();
      }
    }
  };

  const handleOptionClick = (index, answersCorrect) => {
    // console.log(answersCorrect);

    if (selectedOptions.includes(index)) {
      // Nếu đáp án đã chọn, xóa nó khỏi mảng

      setSelectedOptions(selectedOptions.filter((option) => option !== index));
    } else {
      // Nếu đáp án chưa được chọn, thêm nó vào mảng
      setSelectedOptions([...selectedOptions, index]);
    }
  };

  const handleNext = () => {
    nexted.current = false;
    const { questions } = displayQuiz;
    console.log("🚀 ~ displayQuestions ~ questions:", questions)
    console.log("🚀 ~ handleNext ~  questions:", lesson?.question);
    if (currentQuestion < lesson?.question?.length) {
      const newCurrentQuestion = currentQuestion + 1;

      const currentQuestions = lesson?.question[newCurrentQuestion];
      // console.log("🚀 ~ displayQuestions ~ currentQuestion:", currentQuestion)
      const nextQuestion = lesson?.question[newCurrentQuestion + 1];
      const previousQuestion = lesson?.question[newCurrentQuestion - 1];
      const answersCorrect = currentQuestions.answersCorrect;

      setDisplayQuiz({
        ...displayQuiz,
        questions:lesson?.question,
        currentQuestionIndex: newCurrentQuestion,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        currentQuestion: currentQuestions,
        answersCorrect: answersCorrect,
      });
      setCurrentQuestion(newCurrentQuestion);

      if (newCurrentQuestion < lesson?.question?.length - 1) setSelectedOptions([]); // Reset nhiều đáp án đã chọn khi chuyển câu
    }
  };

  const handleBefore = () => {
    const { questions, currentQuestionIndex } = displayQuiz;
    console.log("🚀 ~ handleBefore ~ currentQuestion:", currentQuestion);
    if (currentQuestion > 0) {
      const newCurrentQuestion = currentQuestion - 1;

      const currentQuestion = questions[newCurrentQuestion];
      // console.log("🚀 ~ displayQuestions ~ currentQuestion:", currentQuestion)
      const nextQuestion = questions[newCurrentQuestion + 1];
      const previousQuestion = questions[newCurrentQuestion - 1];
      const answersCorrect = currentQuestion.answersCorrect;

      setDisplayQuiz({
        ...displayQuiz,
        currentQuestionIndex: newCurrentQuestion,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        currentQuestion: currentQuestion,
        answersCorrect: answersCorrect,
      });
      setCurrentQuestion(newCurrentQuestion);
      setSelectedOptions([]);
    }
  };

  useStartTimer(
    startTimer,
    handleNext,
    nexted,
    currentQuestion,
    lesson?.questions,
    displayQuiz,
    selectedAnswer,
    lesson,
    paramQuizz
  );

  useEffect(() => {
    // const fetchAPILesson =async()=>{
    //   const response =
    // }

    displayQuestions(paramQuizz, lesson?.question);
  }, [paramQuizz, lesson]);

  useEffect(() => {
    const { answersCorrect } = displayQuiz;
    if (
      selectedOptions?.length === answersCorrect?.length &&
      answersCorrect?.length
    ) {
      setTimeout(() => {
        handleCompare();
      }, 1000);
    }
  }, [selectedOptions]);

  // useEffect(() => {
  //   setDisplayQuiz({
  //     ...displayQuiz,
  //     currentQuestionIndex: currentQuestion,

  //   });
  // }, [currentQuestion]);
  console.log(displayQuiz);

  const value = {
    wrongQuiz,
    correctQuiz,
    displayQuiz,
    setDisplayQuiz,
    displayQuestions,
    selectedOptions,
    setSelectedOptions,
    handleOptionClick,
    currentQuestion,
    setCurrentQuestion,
    handleNext,
    handleBefore,
    nexted,
    setStartTimer,
    paramQuizz,
    setParamQuizz,
    // activateDisplayQuiz,
  };

  return (
    <DisplayQuizContext.Provider value={value}>
      {children}
    </DisplayQuizContext.Provider>
  );
};
