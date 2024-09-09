import React from "react";
import StartOrAssign from "./StartOrAssign.jsx";
import HeaderSlider from "./HeaderSlider.jsx";
import Slider from "./Slider.jsx";

const LessonSection = ({ lesson = {} }) => {
  // const { grade = 'N/A', topic = {}, imageUrl = '', name = 'N/A', userId = {} } = lesson ;
  // console.log("🚀 ~ LessonSection ~ lesson:", lesson?.question);
  const questions = lesson?.question;
  return (
    <div className="w-full">
      <StartOrAssign />
      <HeaderSlider amountQuestion={questions?.length} idLesson={lesson?._id} />

      {questions?.map((item, index) => {
        return (
          <>
            <Slider question={item} key={index} position={index} visiable={false} />
          </>
        );
      })}
    </div>
  );
};

export default LessonSection;
