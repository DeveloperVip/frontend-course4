import { useState } from "react";
import { BiTrash } from "react-icons/bi";
import { FaCheckCircle, FaRegCheckSquare, FaTrashAlt } from "react-icons/fa";
import { FaImage, FaPlus } from "react-icons/fa6";

const CreateAnswer = ({
  typeAnswer,
  onTextareaClick,
  textareasRefs,
  equation,
  setEquation,
}) => {
  const initialAnswers = [
    { id: 1, brand: "brand-a", content: "", image: null },
    { id: 2, brand: "brand-b", content: "", image: null },
    { id: 3, brand: "brand-c", content: "", image: null },
    { id: 4, brand: "brand-d", content: "", image: null },
  ];

  const [answers, setAnswers] = useState(initialAnswers);

  const handleClick = () => {
    const newId =
      answers.length > 0 ? Math.max(...answers.map((a) => a.id)) + 1 : 1; // Generate a new ID
    setAnswers([...answers, { id: newId, brand: "brand-e", content: "", image: null }]);
  };

  const handleDelete = (id) => {
    setAnswers(answers.filter((answer) => answer.id !== id));
  };

  const handleContentChange = (id, newContent) => {
    setAnswers(
      answers.map((answer) =>
        answer.id === id ? { ...answer, content: newContent } : answer
      )
    );
  };

  const handleImageChange = (id, newImage) => {
    setAnswers(
      answers.map((answer) =>
        answer.id === id ? { ...answer, image: newImage } : answer
      )
    );
  };

  const removeImage = (id) => {
    setAnswers(
      answers.map((answer) =>
        answer.id === id ? { ...answer, image: null } : answer
      )
    );
  };

  return (
    <>
      <div className="options-container flex flex-col md:flex-row w-full h-full gap-2">
        <div className="grid md:grid-flow-col md:auto-cols-fr w-full h-full gap-2">
          {answers.map((answer) => (
            <div
              key={answer.id}
              className={`question-option relative rounded-lg h-full max-h-full overflow-y-auto overflow-x-hidden flex flex-row-reverse md:flex-col bg-${answer.brand} p-1 gap-2 group`}
            >
              {answer.image ? (
                <div className="relative">
                  <img
                    alt="not found"
                    width={"250px"}
                    src={URL.createObjectURL(answer.image)}
                  />
                  <br /> <br />
                  <button
                    className="absolute top-0 bg-inherit p-0 right-0"
                    onClick={() => removeImage(answer.id)}
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
                      onClick={() => handleDelete(answer.id)} // Delete by id
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
                          handleImageChange(answer.id, event.target.files[0])
                        }
                      />
                      <FaImage
                        className="flex items-center fas fa-image"
                        style={{ fontSize: 12 }}
                      />
                    </button>
                    <button
                      className={`transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 bg-black-50% text-black hover:bg-black-60% active:bg-black-50% rounded black relative min-w-max border-2 text-light-50% ${
                        typeAnswer === "single" ? "rounded-full" : ""
                      } border-light`}
                      aria-label="Mark answer"
                      type="button"
                      tabIndex={-1}
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
                        placeholder="Nhập văn bản của bạn tại đây..."
                        value={answer.content} // Show the answer content
                        onClick={() => onTextareaClick(answer.id)} // Click to select textarea
                        onChange={(event) =>
                          handleContentChange(answer.id, event.target.value)
                        } // Update content
                        ref={(el) => (textareasRefs.current[answer.id] = el)} // Store textarea ref
                      />
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
        <div
          className="flex items-center"
          style={{ display: answers?.length >= 5 ? "none" : "flex" }}
        >
          <button
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
