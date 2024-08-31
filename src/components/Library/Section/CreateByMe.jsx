import React, { useState } from "react";
import { FaEllipsisV, FaShare, FaCaretUp } from "react-icons/fa";
import HeaderSection from "./HeaderSection";
import { useNavigate } from "react-router-dom";
import { useFetchAPILesson } from "../../../hook/useFetchAPILesson";

const ButtonPlay = ({ buttonItems }) => {
  const navigate = useNavigate();
  return (
    <div>
      {buttonItems.map((item, index) => (
        <button
          key={index}
          type="button"
          onClick={() => navigate(item.direction)}
          className="w-full text-sm font-semibold text-left hover:bg-light-1 p-2 hover:cursor-pointer"
          aria-label={item.label}
        >
          <i
            className={`flex items-center ${item.iconClass} mr-1`}
            style={{ fontSize: 12 }}
          />
          {item.label}
        </button>
      ))}
    </div>
  );
};

// DropdownButton that uses ButtonPlay to render dropdown items
const DropdownButton = ({idLesson}) => {
  console.log("🚀 ~ DropdownButton ~ idLesson:", idLesson)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Button data for dropdown items
  const buttonItems = [
    { label: "Bắt đầu", iconClass: "far fa-clock", direction: `/startGame/${idLesson}` },
    { label: "Xem trước", iconClass: "far fa-play", direction: `/preview` },
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={toggleDropdown}
        className="w-full flex items-center justify-between text-sm font-semibold py-1 px-2 h-6 cursor-pointer rounded"
      >
        <span className="text-xs">Play</span>
        <FaCaretUp className="ml-1 text-xs" />
      </button>

      {isDropdownOpen && (
        <div className="absolute left-0 mt-2 bg-light-3 shadow-soft-high rounded w-45">
          <ButtonPlay buttonItems={buttonItems} />
        </div>
      )}
    </div>
  );
};

const CreateByMe = () => {
  const { allLesson } = useFetchAPILesson();
  console.log(allLesson);
  return (
    <div className="flex flex-col p-4">
      {allLesson?.map((item,index)=>{
        return<div className="flex flex-col gap-y-1 pb-12" key={index}>
        <div className="flex items-center">
          <div className="w-full relative">
            {/* <a href="/admin/presentation/66c06e3b7db98c8cf29773a4?searchLocale=" className="cursor-pointer flex-1"> */}
            <button type="button" className="w-full">
              <div className="quiz-card flex flex-col items-start min-w-82 bg-light-3 p-2 rounded hover:bg-light-2">
                <div className="flex flex-row w-full">
                  <div className="h-full w-18 bg-lilac rounded-sm overflow-hidden">
                    <img
                      src="/Quizizz.jpeg"
                      className="w-full h-full object-contain"
                      alt="Quiz image"
                    />
                  </div>
                  <div className="flex flex-col w-full ml-3 justify-around">
                    <div className="flex items-center font-semibold text-dark-4 gap-2 text-xxs">
                      <div className="px-2 flex items-center uppercase rounded-full border border-solid border-ds-dark-500-20">
                        <span className="ml-1 text-xxs text-ds-dark-200 font-semibold">
                          lesson
                        </span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <button
                          type="button"
                          className="w-full flex items-center justify-center rounded w-6 h-6 hover:bg-dark-5%"
                        >
                          <FaEllipsisV className="text-xs" />
                        </button>
                      </div>
                    </div>

                    <div className="name font-bold text-base flex">
                      {item?.name}
                    </div>
                    <div className="text-dark-3 flex flex-row items-center text-xs mt-2">
                      <div className="mr-3.5">
                        <i
                          className="far fa-list mr-0.5"
                          style={{ fontSize: 12 }}
                        ></i>
                       {item?.question?.length} slide
                      </div>
                      <div className="mr-3.5">
                        <i
                          className="far fa-graduation-cap mr-0.5"
                          style={{ fontSize: 12 }}
                        ></i>
                        {item?.grade?.name}
                      </div>
                      <div>
                        <i
                          className="far fa-books mr-0.5"
                          style={{ fontSize: 12 }}
                        ></i>
                        {item?.topic?.name}
                      </div>
                    </div>

                    <div className="flex justify-between mt-2">
                      <div className="flex items-center">
                        <img
                          src="https://cf.quizizz.com/avatars/images/eyes4-nose7-mouth6-9A4292.png?w=90&amp;h=90"
                          className="w-6 h-6 mr-2 rounded-full"
                          alt="User"
                        />
                        <div className="font-normal text-dark-4">
                          <a
                            href="/profile/669faed55135824a6a3cab69"
                            className="hover:underline"
                          >
                            adasd wfwfa
                          </a>
                          <span className="mx-2">•</span>
                          <span>{item?.time}</span>
                        </div>
                      </div>
                      <div className="flex flex-row gap-3">
                        <button
                          className="flex items-center px-3 py-1 text-xs font-semibold h-6 bg-dark-5% active:bg-dark-10% text-dark-2 hover:text-dark-3 rounded"
                          aria-label="Share"
                          type="button"
                        >
                          Chia sẻ
                          <FaShare className="ml-2 text-xs" />
                        </button>
                        <DropdownButton idLesson = {item?._id}/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </button>
            {/* </a> */}
          </div>
        </div>
      </div>
      })}
    </div>
  );
};

export default CreateByMe;
// allAnswersSelected
// : 
// []
// grade
// : 
// {name: 'Lớp 4', description: 'Năm học thứ tư của cấp tiểu học'}
// image
// : 
// ""
// name
// : 
// "Test request"
// point
// : 
// 6
// question
// : 
// (3) [{…}, {…}, {…}]
// time
// : 
// 85
// topic
// : 
// {_id: '66cff9f352ea424a773a5842', name: 'Khám phá thiên nhiên ', description: 'Bộ môn giúp chúng ta hiểu biết thêm về thiên nhiên kỳ thú', __v: 0}
// userId
// : 
// "66c62d272db5e2cb3ff16b6c"
// __v
// : 
// 0
// _id
// : 
// "66d16f02fe1ac3205acd25b6"