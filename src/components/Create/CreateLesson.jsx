import "./CreateLesson.css";
import { FaPlay, FaPlus, FaRegCopy } from "react-icons/fa6";
import {
  FaExclamationTriangle,
  FaRegCheckSquare,
  FaRegTrashAlt,
  FaStream,
} from "react-icons/fa";

import CreateQuestion from "./CreateQuestion.jsx";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoSettings } from "react-icons/io5";
import { useState } from "react";
import SettingLesson from "../Setting/SettingLesson.jsx";

const CreateLesson = () => {
  const [visiable, setVisiable] = useState(false);
  // console.log("🚀 ~ CreateLesson ~ visiable:", visiable);
  const handleSetting = () => {
    setVisiable(true);
  };
  return (
    <div className="z-0 w-screen h-screen">
      <div className="presentation-editor flex-col flex w-screen h-screen overflow-hidden">
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
                className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded transparent relative min-w-max"
                aria-label="Preview"
                type="button"

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
              className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 transparent bg-light-20% text-light-3 hover:bg-light-33% active:bg-light-10% rounded transparent relative min-w-max mr-2 mr-2"
              aria-label="Settings"
              type="button"
              onClick={handleSetting}
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
              className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 bg-light-3 border border-solid border-dark-6 text-dark-2 hover:bg-light-2 active:bg-light-1 rounded white relative min-w-max"
              aria-label="Publish"
              type="button"
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
        <div className="presentation-editor-inner flex flex-grow relative">
          <div className="h-full">
            <aside
              data-testid="lesson-sidebar"
              className="slide-editor-sidebar h-full text-light-3 bg-dark-3 flex relative"
            >
              <ul
                data-testid="sidebar-menu-tabs"
                className="sidebar-menu-tabs bg-black text-light-50% pt-7"
              >
                <li className="slide-sidebar-menu-tab flex justify-end items-center my-2 ml-2.5">
                  <button
                    data-testid="slide-view-option"
                    className="flex flex-col items-center justify-center pr-2 text-xs rounded-l transition-colors w-15 h-12 bg-light-10% text-light-3"
                    disabled
                  >
                    <FaStream className="text-lg fas fa-stream" />
                    <p>Slides</p>
                  </button>
                </li>
                <li className="flex justify-center">
                  <div className="h-px w-3/5 bg-light-33%" />
                </li>
              </ul>
              <div className="sidebar-content w-64 bg-dark-2" tabIndex={0}>
                <div
                  id="slideSidebarListContainer"
                  className="slide-sidebar-content-list-container h-full max-h-full overflow-x-hidden overflow-y-auto"
                >
                  <div className="slide-sidebar-content-list">
                    <ul
                      data-testid="slide-context-menu"
                      className="context-menu rounded-lg select-none w-56 bg-dark-2 text-light-3 text-xs absolute z-100"
                      style={{
                        transformOrigin: "left top",
                        left: 0,
                        top: 0,
                        display: "none",
                      }}
                    >
                      <li className="menu-item flex items-center h-9 relative rounded-t-lg">
                        <button
                          type="button"
                          className="flex justify-between items-center w-full h-full px-4 pt-1"
                          data-testid="menu-item-move-up"
                          style={{ outline: "none" }}
                        >
                          <div className="flex items-center">
                            <i
                              className="flex items-center fas fa-angle-up"
                              style={{ fontSize: 12 }}
                            />

                            <span className="pl-3">Move up</span>
                          </div>
                          <span className="text-light-50%">Ctrl + ↑</span>
                        </button>
                      </li>
                      <li className="menu-item flex items-center h-9 relative">
                        <button
                          type="button"
                          className="flex justify-between items-center w-full h-full px-4"
                          data-testid="menu-item-move-down"
                          style={{ outline: "none" }}
                        >
                          <div className="flex items-center">
                            <i
                              className="flex items-center fas fa-angle-down"
                              style={{ fontSize: 12 }}
                            />

                            <span className="pl-3">Move down</span>
                          </div>
                          <span className="text-light-50%">Ctrl + ↓</span>
                        </button>
                      </li>
                      <li className="menu-item flex items-center h-9 relative">
                        <button
                          type="button"
                          className="flex justify-between items-center w-full h-full px-4"
                          data-testid="menu-item-move-to-top"
                          style={{ outline: "none" }}
                        >
                          <div className="flex items-center">
                            <i
                              className="flex items-center fas fa-arrow-to-top"
                              style={{ fontSize: 12 }}
                            />

                            <span className="pl-3">Send to top</span>
                          </div>
                          <span className="text-light-50%">
                            Ctrl + Shift + ↑
                          </span>
                        </button>
                      </li>
                      <li className="menu-item flex items-center h-9 relative">
                        <button
                          type="button"
                          className="flex justify-between items-center w-full h-full px-4"
                          data-testid="menu-item-move-to-bottom"
                          style={{ outline: "none" }}
                        >
                          <div className="flex items-center">
                            <i
                              className="flex items-center fas fa-arrow-to-bottom"
                              style={{ fontSize: 12 }}
                            />

                            <span className="pl-3">Send to bottom</span>
                          </div>
                          <span className="text-light-50%">
                            Ctrl + Shift + ↓
                          </span>
                        </button>
                      </li>
                      <li className="menu-item flex items-center justify-end relative">
                        <div className="separator relative left-1 h-px w-11/12 bg-light-10% px-4" />
                      </li>
                      <li className="menu-item flex items-center h-9 relative">
                        <button
                          type="button"
                          className="flex justify-between items-center w-full h-full px-4"
                          data-testid="menu-item-duplicate"
                          style={{ outline: "none" }}
                        >
                          <div className="flex items-center">
                            <i
                              className="flex items-center fas fa-copy"
                              style={{ fontSize: 12 }}
                            />

                            <span className="pl-3">Duplicate Slide</span>
                          </div>
                          <span className="text-light-50%">Ctrl + D</span>
                        </button>
                      </li>
                      <li className="menu-item flex items-center h-9 relative rounded-b-lg">
                        <button
                          type="button"
                          className="flex justify-between items-center w-full h-full px-4 pb-1"
                          data-testid="menu-item-delete"
                          style={{ outline: "none" }}
                        >
                          <div className="flex items-center">
                            <i
                              className="flex items-center fas fa-trash-alt"
                              style={{ fontSize: 12 }}
                            />

                            <span className="pl-3">Delete Slide</span>
                          </div>
                          <span className="text-light-50%">Delete</span>
                        </button>
                      </li>
                    </ul>
                    <div className="h-full">
                      <div className="pb-14" data-cy="slides-list">
                        <div
                          data-testid="question-list"
                          className="question-list"
                        >
                          <div
                            id="slide-preview-0"
                            className="slide-preview flex pr-2 cursor-pointer"
                            data-draggable="true"
                          >
                            <div className="p-1 pl-1 rounded-r-lg flex bg-light-20% text-lilac-faded">
                              <div className="flex flex-col justify-evenly items-center w-6">
                                <div className="text-sm font-bold">1</div>
                                <button
                                  type="button"
                                  onClick={() => onDuplicate(slide.id)}
                                  data-testid="duplicate-slide-1"
                                  className="w-6 h-6 inline-flex justify-center items-center hover:bg-lilac-10% rounded-sm v-popper--has-tooltip p-0"
                                >
                                  <FaRegCopy
                                    className="flex items-center far fa-copy"
                                    style={{ fontSize: 12 }}
                                  />
                                </button>
                                <button
                                  type="button"
                                  onClick={() => onDelete(slide.id)}
                                  className="w-6 h-6 inline-flex justify-center items-center hover:bg-lilac-10% rounded-sm v-popper--has-tooltip p-0"
                                  data-testid="delete-slide-1"
                                >
                                  <FaRegTrashAlt
                                    className="flex items-center far fa-trash-alt"
                                    style={{ fontSize: 12 }}
                                  />
                                </button>
                              </div>
                              <div className="">
                                <div
                                  data-testid="slide-preview-1"
                                  className="ml-1"
                                >
                                  <button
                                    type="button"
                                    data-testid="slide-preview-container"
                                    className="focus:ring-2 ring-lilac-light relative transition-transform duration-500 rounded overflow-hidden border-2 p-0"
                                  >
                                    <button
                                      type="button"
                                      data-testid="error-tooltip-0"
                                      className="absolute right-2 top-2 z-1 flex items-center justify-center w-6 h-6 rounded-md bg-red-faded text-red-dark v-popper--has-tooltip p-0"
                                    >
                                      <FaExclamationTriangle
                                        className="flex items-center far fa-exclamation-triangle"
                                        style={{ fontSize: 12, color: "red" }}
                                      />
                                    </button>

                                    <div className="slide-preview-container grid place-items-center relative">
                                      <div
                                        className="slide-background absolute "
                                        style={{
                                          transform: "scale(0.15625, 0.155556)",
                                          width: "80rem",
                                          height: "45rem",
                                        }}
                                      >
                                        <div
                                          className="absolute w-full h-full overflow-hidden slide-preview text-light-3 pointer-events-none"
                                          style={{
                                            backgroundImage:
                                              "radial-gradient(65.05% 148.42% at 2.08% 6.17%, rgb(45, 157, 166) 0%, rgba(45, 157, 166, 0.4) 26.32%, rgba(45, 157, 166, 0) 72.13%)",
                                            backgroundColor:
                                              "rgb(45, 157, 166)",
                                          }}
                                        >
                                          <div />

                                          <div className="relative z-10 flex flex-col items-start justify-between w-full h-full p-20 question-preview">
                                            <span
                                              data-testid="question-type-icon-container"
                                              className="question-type-icon relative flex items-center justify-center rounded h-6 mr-2"
                                              style={{ width: "auto" }}
                                            >
                                              <FaRegCheckSquare
                                                className="flex items-center far fa-check-square"
                                                data-testid="question-type-icon"
                                                style={{ fontSize: "120px" }}
                                              />
                                            </span>
                                            <div className="question-query-container" />
                                          </div>
                                        </div>
                                      </div>
                                      <div className="read-only h-full w-full absolute top-0 left-0" />
                                    </div>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-toolbar sticky bottom-0 w-full z-1">
                  <div className="flex p-2 px-1 bg-light-2">
                    <button
                      className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-4 py-1 text-purple-900 font-semibold h-8 base bg-purple-100 text-lilac hover:text-purple-400 active:text-purple-900 rounded secondary relative"
                      type="button"
                    >
                      <AiOutlineCloudUpload
                        className="flex items-center far fa-cloud-upload-alt mr-2"
                        style={{ fontSize: "20px" }}
                      />

                      <span className="title" title="Import">
                        File
                      </span>
                    </button>
                    <button
                      className="transition-colors duration-200 ease-in-out flex flex items-center justify-center px-4 py-1 text-sm font-semibold h-8 base bg-purple-900 text-light-3 hover:bg-purple-400 active:bg-purple-900 rounded primary relative ml-2 w-36 whitespace-nowrap ml-2 w-36 whitespace-nowrap"
                      type="button"
                      onClick={onAddSlide}
                    >
                      <FaPlus
                        className="flex items-center far fa-plus mr-2 !mr-1"
                        style={{ fontSize: "20px" }}
                      />

                      <span className="title max-w-24 overflow-hidden whitespace-nowrap overflow-ellipsis v-popper--has-tooltip">
                        Thêm slide mới
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
          <main className="w-full">
            <CreateQuestion lesson={true} />
          </main>
        </div>
      </div>
      {visiable ? (
        <SettingLesson visiable={visiable} setVisiable={setVisiable} />
      ) : null}
    </div>
  );
};

export default CreateLesson;
