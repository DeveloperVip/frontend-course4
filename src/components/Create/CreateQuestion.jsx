import  { useState, useRef } from "react";
import "./CreateQuestion.css";
import { FaFileImage, FaVideo } from "react-icons/fa6";
import { PiMicrophoneLight } from "react-icons/pi";
import TypeOfQuestionx from "./TypeOfQuestionx";
import HeaderCreateQuestion from "./HeaderCreateQuestion";
import CreateAnswer from "./CreateAnswer";
import HeaderEditor from "./HeaderEditor";
import { BiTrash } from "react-icons/bi";

const CreateQuestion = ({ lesson }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedTypeQuestion, setSelectedTypeQuestion] = useState("single");
  const [equation, setEquation] = useState(""); // State for equation
  const [activeTextarea, setActiveTextarea] = useState(null); // Track active textarea

  const textareasRefs = useRef([]); // Array to store refs of all textareas

  // Hàm xử lý khi người dùng click vào textarea
  const handleTextareaClick = (index) => {
    console.log("🚀 ~ handleTextareaClick ~ index:", index);
    console.log(textareasRefs);

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
        console.log("🚀 ~ insertEquation ~ textarea:", textarea);
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const newText =
          textarea.value.substring(0, start) +
          equation +
          textarea.value.substring(end);
        textarea.value = newText;

        if (textarea.name === "question") setEquation(newText); // Cập nhật phương trình trong state
      }
    }
  };

  return (
    <div id="base-0" className={`z-0 h-screen ${lesson ? "" : "w-screen"}`}>
      <div
        id="question-editor-container"
        className="overflow-hidden h-screen bg-dark-3"
      >
        <HeaderCreateQuestion lesson={lesson} />

        <main id="question-editor-main">
          <HeaderEditor
            lesson={lesson}
            setEquation={(eq) => insertEquation(eq)} // Chèn phương trình vào thẻ textarea đang hoạt động
          />

          <section
            id="question-editor-content"
            className="bg-black-6 py-4 col-span-full px-8 overflow-auto flex items-center justify-center"
          >
            <div id="question-editor-content-inner" className="self-center">
              <div className="flex justify-center items-center flex-col gap-2 col-start-2 col-span-10 !aspect-video">
                <div className="w-full h-full md:rounded-2xl flex-0 overflow-hidden question-editor-desktop bg-purple">
                  <section className="h-full p-4">
                    <div className="h-full flex flex-col md:grid md:grid-rows-2">
                      <div className="query-editor relative text-center flex flex-col gap-4 justify-center items-center md:flex-grow md:flex-row md:h-auto mb-4">
                        <div
                          id="query-editor--wrapper"
                          className={`rounded-lg h-52 md:h-full text-light-3 relative flex ${
                            selectedImage ? "flex-row" : "flex-col"
                          }  border-light-20% w-full border-1`}
                        >
                          {selectedImage ? (
                            <div className="relative">
                              <img
                                alt="not found"
                                width={"250px"}
                                src={URL.createObjectURL(selectedImage)}
                              />
                              <br /> <br />
                              <button
                                className="absolute top-0 bg-inherit p-0 right-0"
                                onClick={() => setSelectedImage(null)}
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
                                      setSelectedImage(event.target.files[0]);
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
                              <div
                                contentEditable="true"
                                translate="no"
                                className="ProseMirror h-full"
                                tabIndex={0}
                              >
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
                                  onChange={(event) =>
                                    handleTextChange(event, 0)
                                  } // Cập nhật phương trình
                                  ref={(el) => (textareasRefs.current[0] = el)} // Lưu tham chiếu của textarea
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <CreateAnswer
                        typeAnswer={selectedTypeQuestion}
                        onTextareaClick={handleTextareaClick}
                        textareasRefs={textareasRefs}
                        equation={equation}
                        setEquation={setEquation}
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
      </div>
    </div>
  );
};

export default CreateQuestion;
