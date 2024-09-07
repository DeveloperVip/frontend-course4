import React, { useContext, useState } from "react";
import "../CreateLesson.css";
// import { FaPlay, FaPlus, FaRegCopy, FaRegTrashAlt, FaStream,  FaRegCheckSquare } from "react-icons/fa6";
// import { AiOutlineCloudUpload } from "react-icons/ai";
// import { IoSettings } from "react-icons/io5";
// import SlidePreview from "./SlidePreview";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
// import BottomToolbar from "./BottomToolbar.jsx";
import MainContent from "./MainContent.jsx";
// import { VisibleSettingContext } from "../../../contexts/isVisibleSettingContext.jsx";
import SettingLesson from "../../Setting/SettingLesson.jsx";
import { VisibleSettingContext } from "../../../contexts/visiableSettingContext.jsx";
import { initialFormQuestion } from "../../../utils/Initial.jsx";
import { SelectedSlideContext } from "../../../contexts/lesson/selectedSlide.jsx";
import { LessonContext } from "../../../contexts/lesson/lessonContext.jsx";

const CreateLesson = () => {
  const { slides, setSlides, handleAddSlide } = useContext(LessonContext);
  const { isVisible } = useContext(VisibleSettingContext);
  const { selectedSlide } = useContext(SelectedSlideContext);
  // console.log("🚀 ~ CreateLesson ~ isVisible:", slides);

  const handleDuplicateSlide = (id) => {
    const slideToDuplicate = slides.find((slide) => slide.id === id);
    if (slideToDuplicate) {
      setSlides([...slides, { ...slideToDuplicate, id: slides.length + 1 }]);
    }
  };

  const handleDeleteSlide = (id) => {
    setSlides(slides.filter((slide) => slide.id !== id));
  };

  const handleMoveSlide = (id, direction) => {
    const index = slides.findIndex((slide) => slide.id === id);
    if (index === -1) return;
    const newSlides = [...slides];
    const [movedSlide] = newSlides.splice(index, 1);
    const newIndex = direction === "up" ? index - 1 : index + 1;
    newSlides.splice(newIndex, 0, movedSlide);
    setSlides(newSlides);
  };

  return (
    <div className="z-0 w-screen h-screen relative">
      <Header />
      <div className="presentation-editor flex-col flex w-screen h-screen overflow-hidden">
        <div className="presentation-editor-inner flex flex-grow relative">
          <Sidebar
            slides={slides}
            onDuplicate={handleDuplicateSlide}
            onDelete={handleDeleteSlide}
            onMove={handleMoveSlide}
            handleAddSlide={handleAddSlide}
          />

          <main className="w-full">
            <MainContent slides={slides[selectedSlide - 1]} />
          </main>
        </div>
      </div>
      {isVisible ? <SettingLesson slides={slides} /> : ""}
    </div>
  );
};

export default CreateLesson;
