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
function MainPage() {
  return (
    <div className="flex">
      <div className="h-screen bg-white text-black w-96">
        <img src="/1a.png" alt="logo Visual" className="a" />
        <button>
          <HiOutlinePlusCircle /> Tạo mới
        </button>
        <h2>
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
      <div className="h-screen overflow-auto text-black bg-gray-500 ">
        <input type="text" placeholder="Tìm trong thư viện Quizizz .." />
        <select className="stt">
          <option value="1">Thư viện</option>
          <option value="2">Thư viện </option>
          <option value="3">Thư viện của tôi </option>
          <option value="4">Báo cáo</option>
        </select>
        <button className="thuvien"> Thư viện</button>
        <button className="bell">
          <FaBell />
        </button>

        <h1>Bạn sẽ dạy gì hôm nay ?</h1>
        <input
          type="text"
          placeholder="Tìm kiếm qui về bất kỳ chủ đề nào"
          className=""
        ></input>

        <QuizList quizzes={quizzes} />
        <QuizList quizzes={quizzes} />
      </div>
    </div>
  );
}

export default MainPage;
