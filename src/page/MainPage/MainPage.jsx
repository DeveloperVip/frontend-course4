import React from "react";
import QuizList from "../../components/QuizList";
import quizzes from "../../quizzes";
import "./MainPage.css";
import { VscArchive } from "react-icons/vsc";
import { HiOutlinePlusCircle } from "react-icons/hi";
import { FaAddressBook } from "react-icons/fa6";
import { IoIosSettings } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { FaBell } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
function MainPage() {
  const filterByCategory = (category) =>
    quizzes.filter((quiz) => quiz.category === category);

  return (
    <div className="flex font-bold ">
      <div className="h-screen bg-white text-black w-64 text-center">
        <img src="/1a.png" alt="logo Visual" className="a" />
        <button className="bg-purple-600 text-white w-52 ">
          <HiOutlinePlusCircle /> Tạo mới
        </button>
        <h2 className="ah">
          <VscArchive />
          Khám phá
        </h2>
        <h2>
          <FaAddressBook />
          Báo cáo
        </h2>
        <h2>
          <IoIosSettings />
          Cài đặt
        </h2>

        <input
          type="checkbox"
          id="toggle-content"
          className="toggle-checkbox"
        />
        <label htmlFor="toggle-content" className="toggle-button"></label>

        <div className="additional-content">
          <h2>
            <FaAddressBook />
            Meme
          </h2>
          <h2>
            <FaAddressBook />
            Bộ sưu tập
          </h2>
          <h2>
            <FaAddressBook />
            Hồ sơ{" "}
          </h2>
          <h2>
            <MdLogout />
            Đăng xuất
          </h2>
        </div>
      </div>
      <div className="h-screen overflow-auto text-black bg-gray-50 flex-1">
        <input
          type="text"
          placeholder="Tìm trong thư viện Quizizz .."
          className="bg-white text-black w-8/12 h-14 ml-3  />"
        />

        <select className="stt h-14">
          <option value="1">Thư viện</option>
          <option value="2">Thư viện của tôi </option>
          <option value="3">Báo cáo</option>
        </select>
        <button className="thuvien h-14 bg-purple-300 text-purple-900">
          Thư viện
        </button>
        <button className="bell bg-gray-400 ">
          <FaBell />
        </button>

        <h1 className="text-center mt-24">Bạn sẽ dạy gì hôm nay?</h1>
        <input
          type="text"
          placeholder="Tìm kiếm qui về bất kỳ chủ đề nào"
          className="w-9/12 h-16 bg-white text-black pl-14 ml-48 mt-12  "
        ></input>

        <h2 className=" flex">
          <FaStar className="bg-yellow-300 " />
          Khởi động vui vẻ
        </h2>
        <QuizList quizzes={filterByCategory("Khởi động vui vẻ")} />

        <h2 className=" flex">
          <FaStar className="bg-yellow-300" />
          Toán
        </h2>
        <QuizList quizzes={filterByCategory("Toán")} />

        <h2 className=" flex">
          <FaStar className="bg-yellow-300" />
          Tiếng Anh và Ngôn ngữ
        </h2>
        <QuizList quizzes={filterByCategory("Tiếng Anh và Ngôn ngữ")} />

        <h2 className=" flex">
          <FaStar className="bg-yellow-300" />
          Khoa học
        </h2>
        <QuizList quizzes={filterByCategory("Khoa học")} />
        <h2 className=" flex">
          <FaStar className="bg-yellow-300" />
          Khoa học máy tính và kỹ năng
        </h2>
        <QuizList quizzes={filterByCategory("Khoa học máy tính và kỹ năng")} />
      </div>
    </div>
  );
}

export default MainPage;
