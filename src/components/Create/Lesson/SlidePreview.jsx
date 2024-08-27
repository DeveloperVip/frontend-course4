import React from "react";
import { FaExclamationTriangle, FaRegCheckSquare } from "react-icons/fa";
// import { FaExclamationTriangle, FaRegCheckSquare } from "react-icons/fa6";

const SlidePreview = ({ slide }) => {
  return (
    <>
      <button
        type="button"
        data-testid="error-tooltip-0"
        className="absolute right-2 top-2 z-1 flex items-center justify-center w-6 h-6 rounded-md bg-red-faded text-red-dark v-popper--has-tooltip p-0"
      >
        <FaExclamationTriangle
          className="flex items-center far fa-exclamation-triangle"
          style={{ fontSize: 12, color: "red" }}
        />
      </button>

      <div className="slide-preview-container grid place-items-center relative">
        <div
          className="slide-background absolute "
          style={{
            transform: "scale(0.15625, 0.155556)",
            width: "80rem",
            height: "45rem",
          }}
        >
          <div
            className="absolute w-full h-full overflow-hidden slide-preview text-light-3 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(65.05% 148.42% at 2.08% 6.17%, rgb(45, 157, 166) 0%, rgba(45, 157, 166, 0.4) 26.32%, rgba(45, 157, 166, 0) 72.13%)",
              backgroundColor: "rgb(45, 157, 166)",
            }}
          >
            <div />

            <div className="relative z-10 flex flex-col items-start justify-between w-full h-full p-20 question-preview">
              <span
                data-testid="question-type-icon-container"
                className="question-type-icon relative flex items-center justify-center rounded h-6 mr-2"
                style={{ width: "auto" }}
              >
                <FaRegCheckSquare
                  className="flex items-center far fa-check-square"
                  data-testid="question-type-icon"
                  style={{ fontSize: "120px" }}
                />
              </span>
              <div className="question-query-container" />
            </div>
          </div>
        </div>
        <div className="read-only h-full w-full absolute top-0 left-0" />
      </div>
    </>
  );
};

export default SlidePreview;
