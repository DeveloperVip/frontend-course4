import React from "react";
import QuizList from "../../components/QuizList";
import quizzes from "../../quizzes";
import "./MainPage.css";
import { FaComputer } from "react-icons/fa6";
import { MdLanguage } from "react-icons/md";
import { FaBell } from "react-icons/fa6";

import Footer from "../../components/footer/Footer";
import { FaFolderOpen, FaSearch } from "react-icons/fa";
import { BiMath } from "react-icons/bi";
import { SiStudyverse } from "react-icons/si";
import Dashboard from "../../components/Dashboard/Dashboard";

// Component tái sử dụng cho danh sách quiz
const QuizSection = ({ icon: Icon, title, category }) => {
  const filteredQuizzes = quizzes.filter((quiz) => quiz.category === category);

  return (
    <div>
      <h2 className="pb-3 font-semibold text-dark-2 text-xl flex items-center gap-4">
        <Icon className="flex justify-center" />
        {title}
      </h2>
      <QuizList quizzes={filteredQuizzes} />
    </div>
  );
};

function MainPage() {
  return (
    <div className="flex font-bold ">
      <Dashboard />
      <div className="h-screen overflow-auto text-black bg-gray-50 flex-1 ">
        <div className="bg-purple-200 p-3 px-10">
          <div className="flex justify-between relative ">
            <div className="absolute h-full flex justify-center items-center ml-3">
              <FaSearch />
            </div>
            <input
              type="text"
              placeholder="Tìm trong thư viện Quizizz .."
              className="bg-white text-black w-8/12 h-14 rounded-full pl-9 shadow-2xl"
              style={{ paddingLeft: "30px" }}
            />

            <div className="flex justify-center gap-3 ">
              <select className="stt h-full rounded-lg text-center bg-purple-600 text-white shadow-2xl">
                <option value="1" className="bg-white text-black">Thư viện</option>
                <option value="2" className="bg-white text-black">Thư viện của tôi </option>
                <option value="3" className="bg-white text-black">Báo cáo</option>
              </select>
              <button className="bell bg-gray-400 h-full rounded-full">
                <FaBell />
              </button>
            </div>
          </div>
          <h1 className="text-dark-80% font-semibold flex flex-col items-center text-center mt-24">
            <span className="text-xl">Hi adasd 👋</span>
            <span className="text-2xl">Chúng ta học gì hôm nay ?</span>
          </h1>
          <div className="flex justify-center items-center ">
            <div className="w-3/5 mt-4 z-30 relative ">
              <div className="absolute h-full flex items-center ml-5 ">
                <FaSearch />
              </div>
              <input
                type="text"
                placeholder="Tìm kiếm quiz về bất kỳ chủ đề nào"
                className="w-full h-16 bg-white text-black pl-14 rounded-full shadow-2xl "
              ></input>
            </div>
          </div>
        </div>

        <div className="w-full p-4 md:px-32 md:py-6 h-fit md:mx-auto">
          <QuizSection
            icon={FaFolderOpen}
            title="Khởi động vui vẻ"
            category="Khởi động vui vẻ"
          />
          <QuizSection icon={BiMath} title="Toán" category="Toán" />
          <QuizSection
            icon={MdLanguage}
            title="Tiếng Anh và Ngôn ngữ"
            category="Tiếng Anh và Ngôn ngữ"
          />
          <QuizSection
            icon={SiStudyverse}
            title="Khoa học"
            category="Khoa học"
          />
          <QuizSection
            icon={FaComputer}
            title="Khoa học máy tính và kỹ năng"
            category="Khoa học máy tính và kỹ năng"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
