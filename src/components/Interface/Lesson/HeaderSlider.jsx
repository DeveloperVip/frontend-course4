// HeaderSlider.jsx
import React, { useContext } from "react";
import { FaEyeSlash, FaPlay, FaTasks } from "react-icons/fa";
import { SlideVisibilityContext } from "../../../contexts/hideSlideContext.jsx";
import { Navigate, useNavigate } from "react-router-dom";

const HeaderSlider = ({ amountQuestion,idLesson }) => {
  const { isSlidesVisible, toggleSlidesVisibility } = useContext(SlideVisibilityContext)
const navigate = useNavigate()
  return (
    <div translate="no" className="hidden md:flex justify-between mb-4 mt-7">
      <div className="flex items-center text-base">
        <FaTasks
          className="flex items-center fas fa-tasks text-dark-3"
          style={{ fontSize: 12 }}
        />
        <p translate="no" className="mx-2 text-dark-2">
          {amountQuestion} slides
        </p>
      </div>
      <div className="flex">
        <button
          className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded white relative min-w-max mx-1 mx-1"
          aria-label={isSlidesVisible ? "Hide slides" : "Show slides"}
          type="button"
          translate="no"
          onClick={toggleSlidesVisibility}
        >
          <FaEyeSlash
            className="flex items-center far fa-eye-slash mr-2"
            style={{ fontSize: 11 }}
          />

          <span className="title" title={isSlidesVisible ? "Hide slides" : "Show slides"}>
            {isSlidesVisible ? "Hiển thị slide":"Ẩn slide"}
          </span>
        </button>
        <button
          className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-3 py-1 text-xs font-semibold h-6 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded white relative min-w-max mx-1 mx-1"
          aria-label="Preview quiz"
          type="button"
          translate="no"
          onClick={()=>navigate( `/preview_lesson/${idLesson}`)}
        >
          <FaPlay
            className="flex items-center fas fa-play mr-2"
            style={{ fontSize: 11 }}
          />

          <span className="title" title="Preview">
            Xem trước
          </span>
        </button>
      </div>
    </div>
  );
};

export default HeaderSlider;
