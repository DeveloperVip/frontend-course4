import { useContext, useEffect, useState } from "react";
import { BiTrash } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { FaCheckCircle, FaRegCheckSquare, FaTrashAlt } from "react-icons/fa";
import { FaImage, FaPlus } from "react-icons/fa6";
import { APIUpload } from "../../services/API/APIUpload.jsx";
import { InnerClickContext } from "../../contexts/lesson/innerClick.jsx";
import { toast } from "react-toastify";

const CreateAnswer = ({
  typeAnswer,
  onTextareaClick,
  textareasRefs,
  answers,
  setAnswers,
  selectedAnswers,
  setSelectedAnswers,
}) => {
  // console.log("🚀 ~ selectedAnswers,:", selectedAnswers);
  const { innerClick, setInnerClick, activateInnerClick } =
    useContext(InnerClickContext);
  useEffect(() => {
    if (typeAnswer && innerClick) {
      setSelectedAnswers([]);
      activateInnerClick(false);
    }
  }, [typeAnswer, innerClick]);

  const handleClick = () => {
    const newId = uuidv4();
    // console.log("🚀 ~ handleClick ~ newId:", newId);
    setAnswers([
      ...answers,
      {
        id: newId,
        content: "",
        secure_url: null,
        isTrue: false,
        public_id: null,
      },
    ]);
  };

  const handleDelete = (id) => {
    setAnswers(answers.filter((answer) => (answer.id || answer?._id) !== id));
  };

  const handleContentChange = (id, newContent) => {
    // console.log(newContent);
    setAnswers(
      answers.map((answer) =>
        (answer.id || answer?._id) === id
          ? { ...answer, content: newContent }
          : answer
      )
    );
  };

  const uploadImageAnswer = async (id, newImage) => {
    if (newImage) {
      const fileData = new FormData();
      fileData.append("file", newImage);
      // fileData.append("isTrue", item.isTrue);
      const response = await APIUpload.uploadImageAnswer(fileData);
      // console.log("Image Response ID:", response.data._id);
      toast.success("Upload hình ảnh thành công !");
      setAnswers(
        answers.map((answer) =>
          (answer.id || answer?._id) === id
            ? {
                ...answer,
                secure_url: response.data.secure_url,
                public_id: response.data.public_id,
              }
            : answer
        )
      );
    }
  };

  const removeImage = (id) => {
    toast.info("Xóa hình ảnh !");
    setAnswers(
      answers.map((answer) =>
        (answer.id || answer?._id) === id ? { ...answer, image: null } : answer
      )
    );
  };

  const handleSelectAnswer = (id) => {
    if (typeAnswer === "single") {
      toast.info("Một lựa chọn !");
      setSelectedAnswers([id]); // Only allow one selection
    } else {
      toast.info("Đã thêm lựa chọn !");
      setSelectedAnswers((prevSelected) => {
        if (!Array.isArray(prevSelected)) {
          return [id];
        }
        return prevSelected.includes(id)
          ? prevSelected.filter((answerId) => answerId !== id) // Deselect
          : [...prevSelected, id]; // Select multiple
      });
    }
  };

  return (
    <>
      <div className="options-container flex flex-col md:flex-row w-full h-full gap-2">
        <div className="grid md:grid-flow-col md:auto-cols-fr w-full h-full gap-2">
          {answers.map((answer, index) => (
            <div
              key={answer.id || answer?._id}
              className={`question-option relative rounded-lg h-full max-h-full overflow-y-hidden overflow-x-hidden flex flex-row-reverse md:flex-col bg-brand-${index} p-1 gap-2 group`}
            >
              {answer.secure_url ? (
                <div className="relative">
                  <img
                    alt="not found"
                    width={"250px"}
                    style={{ overflow: "hidden" }}
                    src={answer?.secure_url}
                  />
                  <br /> <br />
                  <button
                    className="absolute top-0 bg-inherit p-0 right-0"
                    onClick={() => removeImage(answer.id || answer?._id)}
                  >
                    <BiTrash />
                  </button>
                </div>
              ) : (
                <>
                  <div
                    className="action-center flex flex-col md:flex-row gap-2"
                    style={{ flex: "0 0 auto" }}
                  >
                    <button
                      className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max flex-shrink-0"
                      aria-label="Delete option"
                      type="button"
                      tabIndex={-1}
                      onClick={() => handleDelete(answer.id || answer?._id)}
                    >
                      <FaTrashAlt
                        className="flex items-center fas fa-trash-alt"
                        style={{ fontSize: 12 }}
                      />
                    </button>
                    <button
                      className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max flex-shrink-0"
                      aria-label="Upload image"
                      type="button"
                      tabIndex={-1}
                    >
                      <input
                        type="file"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        onChange={(event) =>
                          uploadImageAnswer(
                            answer.id || answer?._id,
                            event.target.files[0]
                          )
                        }
                      />
                      <FaImage
                        className="flex items-center fas fa-image"
                        style={{ fontSize: 12 }}
                      />
                    </button>
                  </div>
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
                        id={answer.id || answer?._id}
                        className="h-full"
                        placeholder="Nhập văn bản của bạn tại đây..."
                        value={answer.content}
                        onClick={() =>
                          onTextareaClick(answer.id || answer?._id)
                        }
                        onChange={(event) =>
                          handleContentChange(
                            answer.id || answer?._id,
                            event.target.value
                          )
                        }
                        ref={(el) =>
                          (textareasRefs.current[answer.id || answer?._id] = el)
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              <button
                type="button"
                className={`transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 bg-light-20% ${
                  typeAnswer === "single"
                    ? selectedAnswers.includes(answer.id || answer?._id)
                      ? "text-green-500"
                      : "text-white"
                    : selectedAnswers.includes(answer.id || answer?._id)
                    ? "text-green-500"
                    : "text-white"
                } hover:bg-black-60% active:bg-black-50% rounded black min-w-max border-2 text-light-50% ${
                  typeAnswer === "single" ? "rounded-full" : ""
                } border-light absolute top-1 p-0 right-8`}
                aria-label="Mark answer"
                tabIndex={-1}
                onClick={() => handleSelectAnswer(answer.id || answer?._id)}
              >
                {typeAnswer === "single" ? (
                  <FaCheckCircle
                    className="flex items-center fas fa-check"
                    style={{ fontSize: 12 }}
                  />
                ) : (
                  <FaRegCheckSquare
                    className="flex items-center fas fa-check"
                    style={{ fontSize: 12 }}
                  />
                )}
              </button>
            </div>
          ))}
        </div>
        <div
          className="flex items-center"
          style={{ display: answers.length >= 5 ? "none" : "flex" }}
        >
          <button
            type="button"
            className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 bg-black-50% text-black hover:bg-black-60% active:bg-black-50% rounded black relative min-w-max border-2 text-light-50% rounded-lg border-light p-0"
            onClick={handleClick}
          >
            <FaPlus
              className="flex items-center fas fa-plus"
              style={{ fontSize: 12 }}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateAnswer;
