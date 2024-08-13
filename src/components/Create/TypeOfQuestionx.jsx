import { useState } from "react";
import "./TypeOfQuestion.css"

const TypeOfQuestionx = () => {
  const [click, setClick] = useState("single");

  const handleClick = (value) => {
    setClick(value);
  };

  return (
    <span
      className="bg-dark-50% p-0.5 text-light-66% flex md:w-fit rounded gap-0.5 w-full my-2"
      data-testid="mcq-editor-question-type-toggle"
    >
      <button
        data-v-1c8df6a0
        className={`transition-colors duration-200 ease-in-out flex flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 transparent bg-light-20% text-light-3 hover:bg-slate-500 rounded transparent relative min-w-max transform flex-1 ${click === "single" ? "bg-light-20% text-white" : "bg-transparent"}`}
        aria-label="Single correct answer"
        type="button"
        translate="no"
        data-testid="toggle-button-group-btn-1-button"
        onClick={() => handleClick("single")}
      >
        <span data-v-1c8df6a0 className="title" title="Single correct answer">
          Một câu trả lời đúng
        </span>
      </button>
      <button
        data-v-1c8df6a0
        className={`transition-colors duration-200 ease-in-out flex flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 bg-transparent text-light text-light-3 hover:bg-light-20% hover:bg-slate-500 rounded transparent-floating-light relative min-w-max transform flex-1 ${click === "multiple" ? "bg-light-20% text-white" : "bg-transparent"}`}
        aria-label="Multiple correct answers"
        type="button"
        translate="no"
        data-testid="toggle-button-group-btn-2-button"
        onClick={() => handleClick("multiple")}
      >
        <span
          data-v-1c8df6a0
          className="title"
          title="Multiple correct answers"
        >
          Nhiều lựa chọn đúng
        </span>
      </button>
    </span>
  );
};

export default TypeOfQuestionx;
