import React, { useContext, useEffect, useState } from "react";
import {
  FaBook,
  FaCamera,
  FaEye,
  FaGraduationCap,
  FaTimes,
} from "react-icons/fa";
import SelectBox from "./SelectBox.jsx";
import { grades, visibility } from "../../utils/Initial.jsx";
import { IoSparkles } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { VisibleSettingContext } from "../../contexts/visiableSettingContext.jsx";
import AddTopic from "./AddTopic.jsx";
import { APITopic } from "../../services/API/APITopic.jsx";
import { APIUpload } from "../../services/API/APIUpload.jsx";
import { LessonContext } from "../../contexts/lesson/lessonContext.jsx";

const SettingLesson = ({ slides }) => {
  console.log(slides);
  const navigate = useNavigate();
  const [UITopic, setUITopic] = useState(false);
  const [topic, setTopic] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [lessonName, setLessonName] = useState("");
  const { formLesson, handleSaveLesson, handleNewLesson } =
    useContext(LessonContext);
  const { isVisible, hide } = useContext(VisibleSettingContext);

  const handleUITopic = () => {
    setUITopic(!UITopic);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileData = new FormData();
      fileData.append("file", file);
      const imageQuestion = await APIUpload.uploadImageQuestion(fileData);
      setSelectedFile(imageQuestion?.data);
    }
  };

  const handleLessonNameChange = (e) => {
    setLessonName(e.target.value); // Update state with the input value
  };

  const handleSaveAndHide = () => {
    handleNewLesson(); // Call the handleNewLesson function first
    hide(); // Then call the hide function to close the modal
  };

  useEffect(() => {
    const fetchApiTopic = async () => {
      try {
        const response = await APITopic.APIGetAllTopic();
        console.log(response);
        setTopic(response);
      } catch (error) {
        console.error("Failed to fetch topics:", error);
      }
    };

    fetchApiTopic();
  }, [UITopic]);

  useEffect(() => {
    const updateLesson = {
      name: lessonName,
      image: selectedFile,
    };
    console.log("🚀 ~ useEffect ~ updateLesson:", updateLesson);
    handleSaveLesson(updateLesson);
  }, [selectedFile, lessonName]);

  useEffect(() => {
    setLessonName(formLesson.name);
    setSelectedFile(formLesson.image);
  }, [isVisible]);

  return (
    <div
      className={`${
        isVisible ? "flex" : ""
      } absolute top-0  w-screen h-screen items-center justify-center z-50`}
      style={{ backgroundColor: "#090909cc" }}
    >
      {UITopic ? (
        <AddTopic UITopic={UITopic} handleUITopic={handleUITopic} />
      ) : (
        <div className="flex bg-light-3 flex-col gap-6 relative py-6 px-4 md:px-6 h-fit w-full min-h-full md:min-h-0 md:mx-auto md:my-30 md:w-1/2 md:rounded-lg">
          <header data-testid="modal-header" className="flex w-full">
            <div className="flex items-center justify-center mr-3 rounded-full min-w-10 min-h-10 max-h-10 max-w-10 bg-lilac-faded text-ds-lilac-500">
              <IoSparkles
                className="flex items-center fas fa-sparkles"
                style={{ fontSize: 16 }}
              />
            </div>
            <div className="flex justify-center flex-col">
              <div className="font-sans font-semibold text-base text-dark-2 flex">
                Cài đặt
              </div>
              <div className="font-sans font-normal text-sm text-dark-4 flex items-center">
                Xem lại cài đặt bài kiểm tra và bạn đã sẵn sàng để bắt đầu
              </div>
            </div>
          </header>
          <div className="absolute top-0 right-0 m-2">
            <button
              className="transition-colors duration-200 ease-in-out flex items-center justify-center w-8 h-8 bg-transparent text-dark-4 hover:bg-dark-10% active:bg-dark-5% rounded transparent-floating-dark relative min-w-max  font-normal"
              type="button"
              onClick={hide}
            >
              <FaTimes
                className="flex items-center fa fa-times"
                style={{ fontSize: 12 }}
              />

              <span className="title" title />
            </button>
          </div>
          <body className="flex w-full h-auto min-h-0 bg-light-3">
            <div className="flex flex-col-reverse w-full gap-4 md:grid md:grid-cols-2">
              <section className="flex flex-col gap-4">
                <div className="relative w-full">
                  <label
                    className="font-semibold text-xs mb-1 ml-1 text-dark-4"
                    htmlFor="lesson-name"
                  >
                    Tên bài học
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="Name"
                      className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm remove-number-selector pl-3 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac focus:ring-offset-0 bg-light-3 text-dark-2 placeholder-dark-5 pr-3 !pr-12"
                      placeholder="Tên bài học"
                      maxLength={64}
                      tabIndex={0}
                      value={lessonName} // Bind state to the input
                      onChange={handleLessonNameChange} // Handle input change
                    />
                  </div>
                </div>
                <SelectBox
                  icon={FaBook}
                  label="Chủ đề hoặc môn học"
                  options={topic}
                  item="topic"
                />
                <SelectBox
                  icon={FaGraduationCap}
                  label="Lớp"
                  options={grades}
                  item="grade"
                />
                <SelectBox
                  icon={FaEye}
                  label="Có thể xem"
                  options={visibility}
                  item="visiable"
                />
                <div>
                  <button type="button" onClick={handleUITopic}>
                    Tạo thêm chủ đề
                  </button>
                </div>
              </section>

              <section className="h-full flex items-center justify-center">
                <div className="aspect-square flex flex-auto">
                  <div
                    className="flex w-full justify-center h-full"
                    tabIndex={0}
                  >
                    <div className="flex relative items-center w-full justify-center h-full">
                      {selectedFile ? (
                        <img
                          src={selectedFile?.secure_url}
                          alt="Quiz cover image"
                          className="flex  min-h-0 min-w-0 max-h-full max-w-full object-scale-down"
                        />
                      ) : (
                        <div className="absolute flex flex-col justify-center items-center w-full h-full overflow-hidden bg-dark-50% z-30">
                          <FaCamera
                            className="fas fa-camera text-light"
                            style={{ fontSize: "36px" }}
                          />
                          <input
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            type="file"
                            onChange={handleFileChange}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </body>
          <footer className="flex w-full">
            <div className="flex flex-grow gap-2 justify-end">
              <button
                className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 base bg-purple-700 text-light-3 hover:bg-purple-600 active:bg-lilac-dark rounded primary relative min-w-max"
                type="button"
                onClick={handleSaveAndHide}
              >
                <span className="title" title="Save">
                  Save
                </span>
              </button>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default SettingLesson;
