import React, { useContext } from "react";
import {
  FaCheckCircle,
  FaCheckSquare,
  FaClock,
  FaExclamationTriangle,
} from "react-icons/fa";
import { SlideVisibilityContext } from "../../../contexts/hideSlideContext.jsx";

// Reusable Lozenge Component
const Lozenge = ({ iconClass: Icon, text }) => (
  <div className="lozenge items-center inline-flex text-xs font-semibold py-0.5 rounded px-1.5 ml-2 border bg-light-3 border-dark-6 min-w-max">
    <Icon className={`flex items-center mr-1`} style={{ fontSize: 11 }} />
    <span>{text}</span>
  </div>
);

// Reusable Answer Choice Component
const AnswerChoice = ({ color, text ,picture}) => (
  <div className="flex items-start mb-2 w-1/2">
    <span
      className={`w-4 h-4 rounded-full my-1 mr-2 shrink-0 relative bg-${color}-600`}
      style={{ backgroundColor: color }}
    />
    <span className="text-sm text-dark-2">
    {picture ? (
        <>
          <img src={picture} />
        </>
      ) : (
        <p>{text}</p>
      )}
      
    </span>
  </div>
);

const Slider = ({ question, position ,visiable}) => {
  const { isSlidesVisible } = useContext(SlideVisibilityContext)
  return (
    <div className="question-details-card flex flex-col border border-solid border-dark-6 rounded-lg mb-4  cursor-pointer bg-light-3 hover:bg-light-2">
      <div className="p-4 rounded-t-lg shadow-sm">
        <div className="question-details-card-question-text">
          <div className="flex justify-between h-6 mb-4">
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-0 justify-between grow">
              <span className="inline-flex items-center min-w-max">
                <div className="lozenge items-center inline-flex text-xs font-semibold py-0.5 rounded px-1.5">
                  <span className="mr-2">
                    <FaCheckSquare
                      className="flex items-center far fa-check-square"
                      style={{ fontSize: 11 }}
                    />
                  </span>
                  <span>
                    {position + 1}.{" "}
                    {question?.isMultiple
                      ? "Chọn nhiều phương án "
                      : "Chọn một phương án"}
                  </span>
                </div>
              </span>
            </div>
            <div className="ml-auto h-full self-start flex">
              <button
                className="transition-colors duration-200 ease-in-out flex items-center justify-center w-6 h-6 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded white relative min-w-max"
                aria-label="Report an issue"
                type="button"
              >
                <FaExclamationTriangle
                  className="far fa-exclamation-triangle"
                  style={{ fontSize: 11 }}
                />
              </button>
              <Lozenge iconClass={FaClock} text={`${question?.time} giây`} />
              <Lozenge iconClass={FaCheckCircle} text={`${question?.point} điểm`} />
            </div>
          </div>
          <div className="flex gap-2 items-center mb-4">
            <div className="question-wrapper text-sm flex overflow-hidden w-full text-dark-2 items-center">
            {question?.pictureQuestion?.secure_url ? (
              <div className='w-full h-60'>
                <img  className="object-cover overflow-hidden" src={question?.pictureQuestion?.secure_url} alt="" />
              </div>
            ) : (
              <>{question?.question}</>
            )}
            </div>
          </div>
        </div>
        <div className="h-px mb-4 bg-light-1 relative">
          <span className="absolute px-2 text-tn left-4 -translate-y-1/2 transform text-dark-4 bg-light">
            Chọn câu trả lời
          </span>
        </div>
        <div className="flex flex-wrap">
          {question?.answers?.map((item, index) => (
            <AnswerChoice key={index} color={!isSlidesVisible || visiable ? (item?.isTrue ? "green" : "red") : "#e6e6e6" } text={item?.content}  picture={item?.relatedPictures?.secure_url} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
