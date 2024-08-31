import React, { useContext, useEffect, useState } from "react";
import { LessonContext } from "../../contexts/lesson/lessonContext.jsx";
import { VisibleSettingContext } from "../../contexts/visiableSettingContext.jsx";

const SelectBox = ({ label, options, icon: Icon, item }) => {
  console.log("🚀 ~ SelectBox ~ label:", options);
  const { handleSaveLesson, formLesson } = useContext(LessonContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const { isVisible, hide } = useContext(VisibleSettingContext);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    if (item) {
      const updateLesson = {
        [item]: selectedOption,
      };
      handleSaveLesson(updateLesson);
    }
  }, [selectedOption]);

  useEffect(() => {
    setSelectedOption(formLesson?.[item]);
  }, [isVisible]);

  return (
    <div aria-required="true" className="relative">
      <div className="select-box">
        <div className="label font-semibold text-xs mb-1 ml-1 text-slate-500">
          {label}
        </div>
        <div className="select w-full inline-flex relative">
          <button
            type="button"
            className="listbox-button flex items-center cursor-pointer box-border text-left rounded font-semibold text-sm p-4 border border-dark-6 text-slate-700 pl-2 pr-1 py-2 h-10 w-full"
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            onClick={toggleDropdown}
          >
            <div
              className="flex items-center justify-center mr-2 w-6 h-6"
              aria-hidden="true"
            >
              <Icon className="far fa-eye" style={{ fontSize: "12px" }}></Icon>
            </div>
            <div
              className="title w-full truncate text-sm"
              aria-live="assertive"
            >
              {selectedOption
                ? selectedOption.name
                : `Select ${name.toLowerCase()}`}
            </div>
            <div
              className="ml-auto flex items-center justify-center w-6 h-6"
              aria-hidden="true"
            >
              <i className="fas fa-caret-down text-dark-3"></i>
            </div>
          </button>
          {isOpen && (
            <ul className="max-h-96 min-h-5  listbox overflow-y-auto z-30 list bg-light-3 shadow-soft-high w-full absolute left-0 top-full mt-1 transform rounded max-h-50">
              {options?.map((option, index) => (
                <li
                  key={index}
                  className={`option cursor-pointer p-2 flex border-2 ${
                    option.selected
                      ? "bg-lilac-faded text-lilac border-lilac"
                      : "border-transparent"
                  }`}
                  role="option"
                  onClick={() => handleOptionClick(option)}
                  aria-selected={option.selected}
                >
                  <div
                    className={`text-${
                      option.selected ? "lilac" : "slate-700"
                    }`}
                  >
                    <div className="item-title font-semibold text-sm">
                      {option.name}
                    </div>
                    {option.description && (
                      <div className="item-subtitle text-xxs text-dark-50%">
                        {option.description}
                      </div>
                    )}
                  </div>
                  {option.icon && (
                    <div className="icon text-dark-1 flex items-center mx-2">
                      <span className="inline-flex align-center justify-center rounded relative border border-solid border-super-light w-6 h-6 bg-super-faded text-super">
                        <i
                          className="fas fa-bolt-lightning absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                          style={{ fontSize: "12px" }}
                        ></i>
                      </span>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectBox;
