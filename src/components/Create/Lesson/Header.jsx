import React, { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import {VisibleSettingContext} from "../../../contexts/visiableSettingContext.jsx"
import { LessonContext } from "../../../contexts/lesson/lessonContext.jsx";

const Header = () => {
  const navigate = useNavigate()
  const {show, hide} = useContext(VisibleSettingContext)
  const {handleUpdateLesson} = useContext(LessonContext)
  return (
    <nav
          className="presentation-editor-header flex items-center h-12 p-2 bg-purple z-100"
          //   contenttype="presentation"
        >
          <div className="w-20">
            <a className="hover:cursor-pointer">
              <img
                src="https://cf.quizizz.com/img/quizizz_logos/white-brandmark-600x164.png"
                alt="Quizizz"
              />
            </a>
          </div>
          <div className="flex float-right ml-auto">
            <div
              className="show-tt-container text tt-theme-dark mr-2"
              tabIndex={-1}
              
            >
              <button
                className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded transparent relative min-w-max"
                
                type="button"
                onClick={()=>navigate("/preview")}
                // tooltip="[object Object]"
              >
                <FaPlay
                  className="flex items-center fas fa-play mr-2"
                  style={{ fontSize: "20px" }}
                />

                <span className="title" title="Preview">
                  Xem trước
                </span>
              </button>
            </div>
            <button
              className="transition-colors duration-200 ease-in-out flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded transparent relative min-w-max mr-2 mr-2"
              
              type="button"
              
              onClick={show}
            >
              <IoSettings
                className="flex items-center fas fa-cog mr-2"
                style={{ fontSize: "20px" }}
              />

              <span className="title" title="Settings">
                Cài đặt
              </span>
            </button>
            <button
              className="transition-colors duration-200 ease-in-out  flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded white relative min-w-max"
              type="button"
              onClick={handleUpdateLesson}
            >
              <AiOutlineCloudUpload
                className="flex items-center fas fa-cloud-upload mr-2"
                style={{ fontSize: "20px" }}
              />

              <span className="title" title="Publish">
                Publish
              </span>
            </button>
          </div>
        </nav>
  );
};

export default Header;
