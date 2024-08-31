import { useContext } from "react";
import "./TypeOfQuestion.css"
import { InnerClickContext } from "../../contexts/lesson/innerClick";

const ToggleButton = ({ isActive, onClick, ariaLabel, title, children }) => (
  <button
    className={`transition-colors duration-200 ease-in-out flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 rounded relative min-w-max transform flex-1 ${
      isActive ? "bg-light-20% text-white" : "bg-transparent text-light-3 hover:bg-slate-500"
    }`}
    aria-label={ariaLabel}
    type="button"
    onClick={onClick}
    translate="no"
  >
    <span className="title" title={title}>
      {children}
    </span>
  </button>
);

const TypeOfQuestionx = ({ selectType, currentType }) => {
  const {activateInnerClick} = useContext(InnerClickContext)
  const handleClick = (name)=>{
    selectType(name) 
    activateInnerClick(true)
  }
  return (
    <span
      className="bg-dark-50% p-0.5 text-light-66% flex md:w-fit rounded gap-0.5 w-full my-2"
      data-testid="mcq-editor-question-type-toggle"
    >
      <ToggleButton
        isActive={currentType === "single"}
        onClick={() => {handleClick("single")}}
        ariaLabel="Single correct answer"
        title="Single correct answer"
      >
        Một câu trả lời đúng
      </ToggleButton>
      <ToggleButton
        isActive={currentType === "multiple"}
        onClick={() => handleClick("multiple")}
        ariaLabel="Multiple correct answers"
        title="Multiple correct answers"
      >
        Nhiều lựa chọn đúng
      </ToggleButton>
    </span>
  );
};

export default TypeOfQuestionx;
