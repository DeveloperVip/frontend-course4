// import React from 'react'

import { useNavigate } from "react-router-dom";

const LibraryProfile = () => {
  const navigate = useNavigate()
  return (
    <div className="px-5 flex flex-col items-center w-full col-span-full">
      <div className="w-32 h-32 md:w-60 md:h-60 my-2">
        <img 
          src="https://cf.quizizz.com/image/emptystate-letscreate-v5.png" 
          alt="Empty State" 
          className="rounded-inherit w-full h-full" 
          loading="lazy" 
        />
      </div>
      <div className="mt-2 text-sm md:text-md text-dark-2 font-semibold">
      Tạo bài kiểm tra hoặc bài học đầu tiên của bạn
      </div>
      <div className="my-2 text-xs md:text-sm text-center px-4">
      Lấy câu hỏi từ thư viện Quizizz hoặc tự tạo câu hỏi. Thật nhanh chóng và dễ dàng!
      </div>
      <div className="flex my-4 md:my-6">
        <button 
          className="transition-colors duration-200 ease-in-out flex items-center justify-center px-6 py-2 text-lg font-semibold h-9 bg-lilac hover:bg-lilac-light active:bg-lilac-dark rounded-lg mx-2"
          aria-label="Create a Quiz"
          onClick={()=>navigate("/create")}
        >
          Tạo một câu đố
        </button>
        <button 
          className="transition-colors duration-200 ease-in-out flex items-center justify-center px-6 py-2 text-lg font-semibold h-9 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded-lg mx-2"
          aria-label="Create a Lesson"
          onClick={()=>navigate("/createLesson")}
        >
          Tạo một bài học
        </button>
      </div>
      <div className="w-full flex justify-center"></div>
    </div>
  );
  
}

export default LibraryProfile