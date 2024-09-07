import React from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

const BottomToolbar = ({ onAddSlide }) => {
  return (
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
  );
};

export default BottomToolbar;
