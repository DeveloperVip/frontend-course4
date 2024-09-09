import { createContext, useState } from "react";
import { APILesson } from "../../services/API/APILesson.jsx";
import { APIAnswer } from "../../services/API/APIAnswer.jsx";
import { initialFormQuestion } from "../../utils/Initial.jsx";
import { APIQuestion } from "../../services/API/APIQuestion.jsx";
import { toast } from "react-toastify";

export const LessonContext = createContext();

export const LessonProvider = ({ children }) => {
  const [formLesson, setFormLesson] = useState({
    _id: "",
    name: "",
    image: "",
    topic: "",
    grade: "",
    question: [],
    point: "",
    time: "",
    visiable: "",
  });
  const [slides, setSlides] = useState([
    {
      id: 1,
      question: "",
      pictureQuestion: {
        public_id: "",
        secure_url: "",
      },
      answers: [],
      answersCorrect: [],
      isMultiple: "",
      point: "",
      time: "",
    },
  ]);
  const handleSaveLesson = (updateLesson) => {
    setFormLesson({ ...formLesson, ...updateLesson });
    // console.log(formLesson);
  };
  const handleAddSlide = () => {
    setSlides([
      ...slides,
      {
        id: slides.length + 1,
        question: "",
        pictureQuestion: {
          public_id: "",
          secure_url: "",
        },
        answers: [],
        answersCorrect: [],
        isMultiple: "",
        point: "",
        time: "",
      },
    ]);
  };

  const handleSaveSlide = (id, updatedSlide) => {
    setSlides(
      slides.map(
        (slide) =>
          slide.id === id
            ? { ...slide, ...updatedSlide } // Update the slide if the id matches
            : slide // Otherwise, return the original slide
      )
    );
  };

  const handleNewLesson = async () => {
    const response = await APILesson.APICreateLesson(formLesson);
    // console.log(response);
    setFormLesson({ ...formLesson, ...response })
  };

  const handleUpdateLesson = async () => {
    // console.log(slides);
    const arrayQuestion = [];
    let pointLesson = 0;
    let timeLesson = 0;
    await Promise.all(
      slides.map(async (slide) => {
        const arrayAnswer = [];
        const arrayCorrect = [];
        await Promise.all(
          slide?.answers.map(async (item) => {
            let response;
            if (item?.content) {
              response = await APIAnswer.APICreate({
                content: item.content,
                isTrue: slide?.answersCorrect.includes(item.id),
              });
              // console.log("Content Response ID:", response.data._id);
            } else if (item?.secure_url) {
              response = await APIAnswer.APICreate({
                relatedPictures: {
                  public_id: item?.public_id,
                  secure_url: item?.secure_url,
                },
                isTrue: slide?.answersCorrect.includes(item.id),
              });
              // console.log("Content Response ID:", response.data._id);
            }

            if (response?.data?._id) {
              arrayAnswer.push(response.data._id);
              if (slide?.answersCorrect.includes(item.id)) {
                arrayCorrect.push(response.data._id);
              }
            }
          })
        );
        initialFormQuestion.question = slide?.question;
        (initialFormQuestion.pictureQuestion = {
          public_id: slide?.pictureQuestion?.public_id,
          secure_url: slide?.pictureQuestion?.secure_url,
        }),
          (initialFormQuestion.isMultiple =
            slide?.isMultiple === "single" ? false : true);
        initialFormQuestion.point = slide?.point;
        initialFormQuestion.time = slide?.time;
        initialFormQuestion.answers = arrayAnswer;
        initialFormQuestion.answersCorrect = arrayCorrect;
        // console.log(initialFormQuestion);

        const response = await APIQuestion.APICreate(initialFormQuestion);
        // console.log("🚀 ~ handleSubmit ~ response:", response?.data?._id);
        arrayQuestion.push(response?.data?._id)
        pointLesson += response?.data?.point;
        
        timeLesson +=   response?.data?.time;    
      })
    );
    // console.log("🚀 ~ slides.map ~ pointLesson :", pointLesson,timeLesson )
    formLesson.point = pointLesson
    // console.log("🚀 ~ handleUpdateLesson ~ formLesson:", formLesson)
    formLesson.time = timeLesson
    formLesson.question = arrayQuestion;
    const response =await APILesson.APIUpdateLesson(formLesson._id,formLesson);
    // console.log("🚀 ~ handleUpdateLesson ~ response:", response)
    if (response) {
      toast.success("Cập nhập thành công!");
      window.location.href= "/"
  }
    return response
  };

  const value = {
    formLesson,
    setFormLesson,
    handleSaveLesson,
    slides,
    setSlides,
    handleAddSlide,
    handleSaveSlide,
    handleNewLesson,
    handleUpdateLesson,
  };
  return (
    <LessonContext.Provider value={value}>{children}</LessonContext.Provider>
  );
};
