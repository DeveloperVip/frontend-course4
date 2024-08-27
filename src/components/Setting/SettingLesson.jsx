import React, { useContext } from "react";
import { FaBook, FaEye, FaGraduationCap, FaTimes } from "react-icons/fa";
import SelectBox from "./SelectBox";
import { grades, subjects, visibility } from "../../utils/Initial";
import { IoSparkles } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { VisibleSettingContext } from "../../contexts/visiableSettingContext";

const SettingLesson = () => {
  const {isVisible,hide} = useContext(VisibleSettingContext)
  return (
    <div className={`${isVisible?"flex":""} absolute top-0  w-screen h-screen items-center justify-center z-50`} style={{    backgroundColor: "#090909cc"}}>
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
                  htmlFor
                >
                  Tên bài học
                </label>
                <div className="relative">
                  <input
                    aria-describedby="input-error-message"
                    aria-invalid="false"
                    aria-required="false"
                    type="text"
                    name="Name"
                    className="focus:outline-none h-10 w-full py-2 text-sm placeholder-sm remove-number-selector pl-3 border border-solid border-dark-6 rounded focus:ring-2 focus:ring-lilac focus:ring-offset-0 bg-light-3 text-dark-2  border-dark-4 placeholder-dark-5 pr-3 !pr-12"
                    placeholder="Untitled Quiz "
                    autoComplete="off"
                    maxLength={64}
                    tabIndex={0}
                  />
                </div>
                <div
                  className="flex pt-1 text-xs font-semibold text-red"
                  aria-live="assertive"
                  style={{ display: "none" }}
                >
                  <span className="w-4 h-4 flex items-center justify-center mr-0.5">
                    <i
                      className="flex items-center far fa-exclamation-circle"
                      style={{ fontSize: 11 }}
                    />
                  </span>
                  <span
                    id="input-error-message"
                    data-testid="input-error-message"
                  />
                </div>
              </div>
              <SelectBox icon={FaBook} label="Subject" options={subjects} />
              <SelectBox
                icon={FaGraduationCap}
                label="Grade"
                options={grades}
              />
              <SelectBox icon={FaEye} label="Visibility" options={visibility} />
            </section>

            <section className="h-full flex items-center justify-center">
              <div className="aspect-square flex flex-auto">
                <div className="flex w-full justify-center h-full" tabIndex={0}>
                  <div className="flex relative w-full justify-center h-full">
                    <img
                      src="https://quizizz.com/media/resource/gs/quizizz-media/quizzes/d2b2dee1-df7b-429c-8fc1-4e4d08bb56f6"
                      alt="Quiz cover image"
                      className="flex min-h-0 min-w-0 max-h-full max-w-full object-scale-down"
                    />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </body>
        <footer className="flex w-full">
          <div className="flex flex-grow gap-2 justify-end">
            <button
              className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 base bg-lilac text-light-3 hover:bg-lilac-light active:bg-lilac-dark rounded primary relative min-w-max"
              type="button"
            >
              <span className="title" title="Save">
                Save
              </span>
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SettingLesson;
