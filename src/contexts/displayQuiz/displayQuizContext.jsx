import { createContext, useContext, useEffect, useRef, useState } from "react";
// import { isEmpty } from "../../utils/is-empty.jsx";
// import { questions } from "../../utils/Initial.jsx";
import { useStartTimer } from "../../components/Interface/StartGame/startTimer.jsx";
import { TimerQuizContext } from "./timerQuizContext.jsx";
import { useFetchAPILessonById } from "../../hook/useFetchAPILesson.jsx";
import { toast } from "react-toastify";
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
    time: 0,
    lessonId: "",
  };
  const [displayQuiz, setDisplayQuiz] = useState(quizzs);
  const [paramQuizz, setParamQuizz] = useState();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const selectedAnswer = useRef([]);
  let amountAnswer = useRef(0);
  const nexted = useRef(false);
  const [startTimer, setStartTimer] = useState(false);
  const { activateTimerQuiz } = useContext(TimerQuizContext);
  const { lesson } = useFetchAPILessonById(paramQuizz?.id);

  const displayQuestions = (paramQuizz, lesson, id) => {
    if (paramQuizz && lesson) {
      // console.log(lesson);
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
        lessonId: id,
      }));
      // }
    }
  };

  const correctQuiz = (point) => {
    const { score, correctAnswer, numberOfAnswerQuestion } = displayQuiz;
    // console.log("🚀 ~ wrongQuiz ~ arrayAnswers:", selectedAnswer.current);
    // console.log("🚀 ~ wrongQuiz ~ arrayAnswers:", currentQuestionIndex)
    if (currentQuestion <= lesson?.question?.length - 1) {
      const number = currentQuestion + 1;
      // console.log("🚀 ~ handleNext ~ newCurrentQuestion:", number,lesson?.question?.length)
      const currentQuestions = lesson?.question[number];
      // console.log("🚀 ~ displayQuestions ~ currentQuestion:", currentQuestion)
      const nextQuestion = lesson?.question[number + 1];
      const previousQuestion = lesson?.question[number - 1];
      const answersCorrect = currentQuestions?.answersCorrect || [];
      toast.info("Câu trả lời đúng !");
      setDisplayQuiz({
        ...displayQuiz,
        score: score + point,
        numberOfAnswerQuestion: numberOfAnswerQuestion + 1,
        correctAnswer: correctAnswer + 1,
        currentQuestionIndex: number,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        currentQuestion: currentQuestions,
        answersCorrect: answersCorrect,
        allAnswersSelected: selectedAnswer.current,
      });
      setSelectedOptions([]);
      if (number < lesson?.question?.length) {
        setCurrentQuestion(number);
      }
    }
  };

  const wrongQuiz = (point) => {
    const { wrongAnswer, numberOfAnswerQuestion } = displayQuiz;
    // console.log("🚀 ~ wrongQuiz ~ arrayAnswers:", selectedAnswer.current);
    if (currentQuestion <= lesson?.question?.length - 1) {
      const number = currentQuestion + 1;
      const currentQuestions = lesson?.question[number];
      // console.log(
      //   "🚀 ~ handleNext ~ newCurrentQuestion:",
      //   number,
      //   lesson?.question?.length
      // );
      // console.log("🚀 ~ displayQuestions ~ currentQuestion:", currentQuestion)
      const nextQuestion = lesson?.question[number + 1];
      const previousQuestion = lesson?.question[number - 1];
      const answersCorrect = currentQuestions?.answersCorrect || [];
      toast.error("Câu trả lời sai !");
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
      setSelectedOptions([]);
      if (number < lesson?.question?.length) {
        setCurrentQuestion(number);
      }
    }
  };

  const handleCompare = () => {
    const {
      currentQuestion,
      answersCorrect,
      allAnswersSelected,
      currentQuestionIndex,
    } = displayQuiz;
    let correctQuestion = true;
    // console.log(
    //   "🚀 ~ handleOptionClick ~ answersCorrect:",
    //   currentQuestionIndex,
    //   lesson?.question?.length - 1,
    //   selectedOptions?.length,
    //   answersCorrect?.length
    // );
    let arrayAnswers = [...allAnswersSelected];
    // console.log(
    //   "🚀 ~ handleCompare ~ selectedOptions?.length:",
    //   selectedOptions,
    //   answersCorrect?.length
    // );
    // console.log("🚀 ~ handleCompare ~ arrayAnswers:", arrayAnswers);

    if (selectedOptions?.length === answersCorrect?.length) {
      selectedOptions.map((item) => {
        if (arrayAnswers?.includes(currentQuestion?.answers[item]?._id)) {
          arrayAnswers?.filter(
            (item) => item === currentQuestion?.answers[item]?._id
          );
        } else {
          arrayAnswers?.push(currentQuestion?.answers[item]?._id);
        }
        selectedAnswer.current = arrayAnswers;
        // Use forEach instead of map since you aren't returning anything
        if (currentQuestion?.answers[item]?.isTrue === false) {
          correctQuestion = false;
        }
      });
      // console.log(
      //   "🚀 ~ handleCompare ~ currentQuestion?.point:",
      //   currentQuestion?.point
      // );
      if (correctQuestion) {
        correctQuiz(currentQuestion?.point);
        // if(currentQuestionIndex === lesson?.question?.length - 1 && selectedOptions?.length === answersCorrect?.length && allAnswersSelected?.includes(selectedOptions)) {
        //   console.log("handle vafo dday");
        //   setStartTimer(false)
        // }
      } else {
        wrongQuiz(currentQuestion?.point);
        // if(currentQuestionIndex === lesson?.question?.length - 1 && selectedOptions?.length === answersCorrect?.length && allAnswersSelected?.includes(selectedOptions)) {
        //   console.log("handle vafo dday");
        //   setStartTimer(false)
        // }
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
    // console.log("🚀 ~ displayQuestions ~ questions:", questions);
    // console.log("🚀 ~ handleNext ~  questions:", lesson?.question);
    if (currentQuestion <= lesson?.question?.length) {
      const newCurrentQuestion = currentQuestion + 1;
      // console.log("🚀 ~ handleNext ~ newCurrentQuestion:", newCurrentQuestion);

      const currentQuestions = lesson?.question[newCurrentQuestion];
      // console.log("🚀 ~ displayQuestions ~ currentQuestion:", currentQuestion)
      const nextQuestion = lesson?.question[newCurrentQuestion + 1];
      const previousQuestion = lesson?.question[newCurrentQuestion - 1];
      const answersCorrect = currentQuestions.answersCorrect;

      setDisplayQuiz({
        ...displayQuiz,
        questions: lesson?.question,
        currentQuestionIndex: newCurrentQuestion,
        nextQuestion: nextQuestion,
        previousQuestion: previousQuestion,
        currentQuestion: currentQuestions,
        answersCorrect: answersCorrect,
      });
      setCurrentQuestion(newCurrentQuestion);

      if (newCurrentQuestion < lesson?.question?.length - 1)
        setSelectedOptions([]); // Reset nhiều đáp án đã chọn khi chuyển câu
    }
  };

  const handleBefore = () => {
    const { questions} = displayQuiz;
    // console.log("🚀 ~ handleBefore ~ currentQuestion:", currentQuestion);
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
  // console.log(
  //   "🚀 ~ wrongQuiz ~ setDisplayQuiz:",
  //   displayQuiz?.allAnswersSelected
  // );
  useStartTimer(
    startTimer,
    handleNext,
    nexted,
    currentQuestion,
    displayQuiz,
    displayQuiz?.currentQuestionIndex,
    displayQuiz?.lessonId,
    selectedAnswer,
    lesson,
    paramQuizz
  );

  // console.log(displayQuiz);
  useEffect(() => {
    // const fetchAPILesson =async()=>{
    //   const response =
    // }
    // console.log(lesson);

    lesson?.question?.map((item) => {
      amountAnswer.current += item?.answersCorrect?.length;
    });

    displayQuestions(paramQuizz, lesson?.question, lesson?._id);
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
