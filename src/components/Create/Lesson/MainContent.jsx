import React from "react";
import SlidePreview from "./SlidePreview.jsx";
import CreateQuestion from "../CreateQuestion.jsx";

const MainContent = ({ slides, onAddQuestion }) => {
  // console.log("🚀 ~ MainContent ~ slides:", slides)
  return (
    <div className="main-content">
      {/* <div className="slides-container">
        {slides.map(slide => (
          <div key={slide.id} className="slide-container">
            <SlidePreview slide={slide} />
          </div>
        ))}
      </div> */}
      <CreateQuestion lesson={true} slides={slides} onAddQuestion={onAddQuestion} />
    </div>
  );
};

export default MainContent;
