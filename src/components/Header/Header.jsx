// import React from "react";
import { FaBell, FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <div className="main-header p-5 sticky top-0 z-50">
      <div className="flex justify-between relative ">
        <div className="absolute h-full flex justify-center items-center ml-3">
          <FaSearch />
        </div>
        <input
          type="text"
          placeholder="Tìm trong thư viện Quizizz .."
          className="bg-white text-black w-8/12 h-10 rounded-full pl-9 shadow-2xl"
          style={{ paddingLeft: "30px" }}
        />

        <div className="flex justify-center gap-3 ">
          <select className="stt h-full rounded-lg text-center bg-purple-600 text-white shadow-2xl">
            <option value="1" className="bg-white text-black">
              Thư viện
            </option>
            <option value="2" className="bg-white text-black">
              Thư viện của tôi{" "}
            </option>
            <option value="3" className="bg-white text-black">
              Báo cáo
            </option>
          </select>
          <button
        className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-4 py-1 text-sm font-semibold h-full base bg-lilac-faded text-lilac hover:text-lilac-light active:text-lilac-dark rounded secondary relative min-w-max bg-purple-600 text-white shadow-2xl"
        aria-label="Enter code"
        type="button"
        translate="no"
      >
        <span className="title" title="Enter code">
          Enter code
        </span>
      </button>
          <button className="bell bg-gray-400 h-full rounded-full">
            <FaBell />
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Header;
