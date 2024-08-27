import React from "react";
import StartOrAssign from "./StartOrAssign";
import HeaderSlider from "./HeaderSlider";
import Slider from "./Slider";

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
