import { useState, useRef, useEffect, useContext } from "react";
import "./CreateQuestion.css";
import { FaFileImage, FaVideo } from "react-icons/fa6";
import { PiMicrophoneLight } from "react-icons/pi";
import TypeOfQuestionx from "./TypeOfQuestionx";
import HeaderCreateQuestion from "./HeaderCreateQuestion";
import CreateAnswer from "./CreateAnswer";
import HeaderEditor from "./HeaderEditor";
import { BiTrash } from "react-icons/bi";
import { APIAnswer } from "../../services/API/APIAnswer.jsx";
import { APIUpload } from "../../services/API/APIUpload.jsx";
import { initialAnswers, initialFormQuestion } from "../../utils/Initial.jsx";
import { APIQuestion } from "../../services/API/APIQuestion.jsx";
import { LessonContext } from "../../contexts/lesson/lessonContext.jsx";
import { SelectedSlideContext } from "../../contexts/lesson/selectedSlide.jsx";

const CreateQuestion = ({ slides, lesson }) => {
  console.log("🚀 ~ CreateQuestion ~ slides:", slides)
  const { selectedSlide } = useContext(SelectedSlideContext);
  const { handleSaveSlide } = useContext(LessonContext);
  const [selectedTypeQuestion, setSelectedTypeQuestion] = useState(slides?.isMultiple === "multiple" ? "multiple" : "single");
  const [equation, setEquation] = useState(slides?.question || "");
  const [activeTextarea, setActiveTextarea] = useState(null);
  const [selectedPoint, setSelectedPoint] = useState(slides?.point || 1);
  const [selectedTime, setSelectedTime] = useState(slides?.time || "30 giây");
  const [pictureQuestion, setPictureQuestion] = useState( slides?.pictureQuestion?.secure_url ? slides?.pictureQuestion : null);
  const [answers, setAnswers] = useState(slides?.answers?.length ? slides?.answers : initialAnswers);
  const [selectedAnswers, setSelectedAnswers] = useState(slides?.answersCorrect?.length ? slides?.answersCorrect : []);
  const textareasRefs = useRef( slides?.answersCorrect?.length ? slides?.answersCorrect : []);

  // Sử dụng useEffect để cập nhật state khi slides thay đổi
  useEffect(() => {
    if (slides) {
      // Tạo slide object để lưu
      const slide = {
        isMultiple: selectedTypeQuestion,
        question: equation,
        point:selectedPoint,
        time: selectedTime,
        pictureQuestion:pictureQuestion,
        answers: answers,
        answersCorrect:selectedAnswers,
      };
      console.log("🚀 ~ useEffect ~ slide.selectedAnswers:", slide)
      // Gọi handleSaveSlide để lưu slide
      handleSaveSlide(slides?.id, slide);

      // else return;
    }
  }, [selectedTypeQuestion,equation,selectedPoint,selectedTime,pictureQuestion,answers,selectedAnswers]);
  useEffect(()=>{
    console.log("🚀 ~ CreateQuestion ~ slides:", slides);
    setSelectedTypeQuestion(slides?.isMultiple === "multiple"? "multiple" : "single");
    setEquation(slides?.question || "");
    setSelectedPoint(slides?.point || 1);
    setSelectedTime(slides?.time || "30 giây");
    setPictureQuestion(
      slides?.pictureQuestion?.secure_url ? slides?.pictureQuestion : null
    );
    setAnswers(slides?.answers?.length ? slides?.answers : initialAnswers);
    setSelectedAnswers(
      slides?.answersCorrect?.length ? slides?.answersCorrect : []
    );
  },[selectedSlide])
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🚀 ~ handleSubmit ~ equation:", equation);
    const arrayAnswer = [];
    const arrayCorrect = [];
    // selectedAnswers.map((item,index)=>{
    //   initialAnswers[index].isTrue = item === index
    // })
    await Promise.all(
      answers.map(async (item) => {
        console.log("🚀 ~ answers.map ~ item:", item);
        console.log(selectedAnswers.includes(item.id));

        let response;
        if (item?.content) {
          response = await APIAnswer.APICreate({
            content: item.content,
            isTrue: selectedAnswers.includes(item.id),
          });
          console.log("Content Response ID:", response.data._id);
        } else if (item?.secure_url) {
          response = await APIAnswer.APICreate({
            relatedPictures: {
              public_id: item?.public_id,
              secure_url: item?.secure_url,
            },
            isTrue: selectedAnswers.includes(item.id),
          });
          console.log("Content Response ID:", response.data._id);
        }

        if (response?.data?._id) {
          arrayAnswer.push(response.data._id);
          if (selectedAnswers.includes(item.id)) {
            arrayCorrect.push(response.data._id);
          }
        }
      })
    );
    initialFormQuestion.question = equation;
    (initialFormQuestion.pictureQuestion = {
      public_id: pictureQuestion?.public_id,
      secure_url: pictureQuestion?.secure_url,
    }),
      (initialFormQuestion.isMultiple =
        selectedTypeQuestion === "single" ? false : true);
    initialFormQuestion.point = selectedPoint;
    initialFormQuestion.time = selectedTime;
    initialFormQuestion.answers = arrayAnswer;
    initialFormQuestion.answersCorrect = arrayCorrect;
    console.log(initialFormQuestion);

    const response = await APIQuestion.APICreate(initialFormQuestion);
    console.log("🚀 ~ handleSubmit ~ response:", response);
  };
  // Hàm xử lý khi người dùng click vào textarea
  const handleTextareaClick = (index) => {
    // console.log("🚀 ~ handleTextareaClick ~ index:", index);
    // console.log(textareasRefs);
    setActiveTextarea(index); // Store the index of the active textarea
  };

  // Hàm xử lý việc nhập văn bản từ bàn phím
  const handleTextChange = (event) => {
    // Update equation for the active textarea
    setEquation(event.target.value);
  };

  // Hàm để chèn phương trình vào thẻ textarea đã được chọn
  const insertEquation = (equation) => {
    if (activeTextarea !== null) {
      const textarea = textareasRefs.current[activeTextarea];

      if (textarea) {
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newText =
          textarea.value.substring(0, start) +
          equation +
          textarea.value.substring(end);
        textarea.value = newText;
        if (textarea.name === "question")
          setEquation(newText); // Cập nhật phương trình trong state
        else
          setAnswers(
            answers.map((answer) => {
              return answer.id === Number(textarea.id)
                ? { ...answer, content: newText }
                : answer;
            })
          );
      }
    }
  };

  const uploadPictureQuestion = async (file) => {
    if (file) {
      const fileData = new FormData();
      fileData.append("file", file);
      const imageQuestion = await APIUpload.uploadImageQuestion(fileData);
      // console.log("🚀 ~ handleSubmit ~ imageQuestion:", imageQuestion);
      setPictureQuestion(imageQuestion?.data);
    }
  };

  return (
    <div id="base-0" className={`z-0 h-screen ${lesson ? "" : "w-screen"}`}>
      <form
        // onSubmit={handleSubmit}
        id="question-editor-container"
        className="overflow-hidden h-screen bg-dark-3"
      >
        <HeaderCreateQuestion
          lesson={lesson}
          slides={slides}
          selectedPoint={selectedPoint}
          setSelectedPoint={setSelectedPoint}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
          handleSubmit={handleSubmit}
        />

        <main id="question-editor-main">
          <HeaderEditor
            // slides={slides}
            setEquation={(eq) => insertEquation(eq)} // Chèn phương trình vào thẻ textarea đang hoạt động
          />

          <section
            id="question-editor-content"
            className="bg-black-6 py-4 col-span-full px-8 overflow-auto flex items-center justify-center"
          >
            <div id="question-editor-content-inner" className="self-center">
              <div className="flex justify-center items-center flex-col gap-2 col-start-2 col-span-10 !aspect-video">
                <div className="rounded-lg w-full h-full md:rounded-2xl flex-0 overflow-hidden question-editor-desktop bg-purple">
                  <section className="h-full p-4">
                    <div className="h-full flex flex-col md:grid md:grid-rows-2">
                      <div className="query-editor relative text-center flex flex-col gap-4 justify-center items-center md:flex-grow md:flex-row md:h-auto mb-4">
                        <div
                          id="query-editor--wrapper"
                          className={`rounded-lg h-52 md:h-full text-light-3 relative flex ${
                            pictureQuestion ? "flex-row" : "flex-col"
                          }  border-light-20% w-full border-1`}
                        >
                          {pictureQuestion ? (
                            <div className="relative">
                              <img
                                alt="not found"
                                width={"250px"}
                                src={pictureQuestion?.secure_url}
                              />
                              <br /> <br />
                              <button
                                className="absolute top-0 bg-inherit p-0 right-0"
                                onClick={() => setPictureQuestion(null)}
                              >
                                <BiTrash />
                              </button>
                            </div>
                          ) : (
                            <div
                              id="query-editor--controls"
                              className="flex justify-between p-2"
                            >
                              <div className="query-action-center flex gap-2">
                                <button
                                  className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-8 h-8 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max"
                                  aria-label="Media Image"
                                  type="button"
                                >
                                  <input
                                    type="file"
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                    onChange={(event) => {
                                      uploadPictureQuestion(
                                        event.target.files[0]
                                      );
                                    }}
                                  />
                                  <FaFileImage
                                    className="flex items-center fas fa-image"
                                    style={{ fontSize: 12 }}
                                  />
                                </button>
                                <div className="flex relative">
                                  <button
                                    className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-8 h-8 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max"
                                    aria-label="Media Audio"
                                    type="button"
                                  >
                                    <PiMicrophoneLight
                                      className="flex items-center far fa-microphone-lines"
                                      style={{ fontSize: 12 }}
                                    />
                                  </button>
                                </div>
                                <div className="flex relative">
                                  <button
                                    className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-8 h-8 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max"
                                    aria-label="Media Video"
                                    type="button"
                                  >
                                    <FaVideo
                                      className="flex items-center far fa-video"
                                      style={{ fontSize: 12 }}
                                    />
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}

                          <div
                            className="flex flex-col justify-center relative h-full max-h-full  w-full text-wrap break-words px-2"
                            style={{
                              placeholderColor: "rgba(255, 255, 255, 0.66)",
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
                                name="question"
                                className="h-full"
                                placeholder="Nhập văn bản của bạn tại đây..."
                                value={equation} // Hiển thị giá trị phương trình
                                onClick={() => handleTextareaClick(0)} // Khi click vào textarea đầu tiên
                                onChange={handleTextChange} // Cập nhật phương trình
                                ref={(el) => (textareasRefs.current[0] = el)} // Lưu tham chiếu của textarea
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <CreateAnswer
                        typeAnswer={selectedTypeQuestion}
                        onTextareaClick={handleTextareaClick}
                        textareasRefs={textareasRefs}
                        answers={answers}
                        setAnswers={setAnswers}
                        selectedAnswers={selectedAnswers}
                        setSelectedAnswers={setSelectedAnswers}
                      />
                      <TypeOfQuestionx
                        currentType={selectedTypeQuestion}
                        selectType={setSelectedTypeQuestion}
                      />
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </section>
        </main>
      </form>
    </div>
  );
};

export default CreateQuestion;
