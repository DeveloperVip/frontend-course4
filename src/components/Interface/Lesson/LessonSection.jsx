import React from "react";
import StartOrAssign from "./StartOrAssign.jsx";
import HeaderSlider from "./HeaderSlider.jsx";
import Slider from "./Slider.jsx";

const LessonSection = () => {
  return (
    <div className="w-full">
      <StartOrAssign />
      <HeaderSlider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
      <Slider />
    </div>
  );
};

export default LessonSection;
