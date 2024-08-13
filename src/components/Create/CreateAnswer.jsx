import { useState } from "react";
import { FaCheckCircle, FaTrashAlt } from "react-icons/fa";
import { FaImage, FaPlus } from "react-icons/fa6";

const CreateAnswer = () => {
  const initialAnswers = ["brand-a", "brand-b", "brand-c", "brand-d"];
  const [answers, setAnswers] = useState(initialAnswers);

  const handleClick = () => {
    console.log(answers);
    setAnswers([...answers, "brand-e"]);
  };

  const handleDelete = (brand) => {
    // Xóa brand khỏi danh sách
    setAnswers(answers.filter(item => item !== brand));
  };

  return (
    <>
      <div className="options-container flex flex-col md:flex-row w-full h-full gap-2">
        <div className="grid md:grid-flow-col md:auto-cols-fr w-full h-full gap-2">
          {answers.map((brand, index) => (
            <div
              key={index}
              className={`question-option relative rounded-lg h-full max-h-full overflow-y-auto overflow-x-hidden flex flex-row-reverse md:flex-col bg-${brand} p-1 gap-2 group`}
            >
              <div
                className="action-center flex flex-col md:flex-row gap-2"
                style={{ flex: "0 0 auto" }}
              >
                <button
                  className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded relative min-w-max flex-shrink-0"
                  aria-label="Delete option"
                  type="button"
                  tabIndex={-1}
                  onClick={() => handleDelete(brand)} // Gọi handleDelete với brand để xóa
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
                  <FaImage
                    className="flex items-center fas fa-image"
                    style={{ fontSize: 12 }}
                  />
                </button>
                <button
                  className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-6 h-6 bg-black-50% text-black hover:bg-black-60% active:bg-black-50% rounded black relative min-w-max border-2 text-light-50% rounded-full border-light"
                  aria-label="Mark answer"
                  type="button"
                  tabIndex={-1}
                >
                  <FaCheckCircle
                    className="flex items-center fas fa-check"
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
                  <div
                    contentEditable="true"
                    translate="no"
                    className=" ProseMirror h-full"
                    tabIndex={0}
                  >
                    <textarea
                      style={{
                        width: "100%",
                        wordWrap: "break-word",
                        backgroundColor: "inherit",
                      }}
                      className="h-full"
                      placeholder="Nhập văn bản của bạn tại đây..."
                    />
                  </div>
                </div>
              </div>
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
