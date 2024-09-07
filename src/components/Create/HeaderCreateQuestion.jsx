import { TbSquareRoundedCheckFilled } from "react-icons/tb";
import { IoCheckmark, IoChevronBack } from "react-icons/io5";
import { FaCaretDown, FaFloppyDisk } from "react-icons/fa6";
import { BsClock } from "react-icons/bs";
import { useState } from "react";
import usePreviousRoute from "../../hook/usePreviousRoute.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const HeaderCreateQuestion = ({
  lesson,
  selectedPoint,
  setSelectedPoint,
  selectedTime,
  setSelectedTime,
  handleSubmit,
  edit,
}) => {
  const { goBack } = usePreviousRoute();
  const navigate = useNavigate();
  const [click, setClick] = useState("none");

  const handleClick = (e) => {
    if (e === click) setClick("");
    else setClick(e);
  };

  const handlePoint = (point) => {
    setSelectedPoint(point);
    setClick("");
  };

  const handleTime = (time) => {
    toast.info("Đã chọn thời gian !");
    setSelectedTime(time);
    setClick("");
  };

  const pointArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  const timeArray = [
    "10 giây",
    "20 giây",
    "30 giây",
    "45 giây",
    "5 giây",
    "1 phút",
    "1.5 phút",
    "2 phút",
    "3 phút",
    "5 phút",
    "10 phút",
    "15 phút",
  ];

  return (
    <header
      className={`w-full font-open-sans ${
        lesson ? "bg-purple-600" : "bg-white"
      } flex items-center gap-2 py-2 px-4 h-14`}
    >
      <div
        className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center w-8 h-8 bg-dark-5% active:bg-dark-10% text-dark-2 hover:text-dark-3 rounded relative min-w-max"
        aria-label="Back"
        onClick={() => navigate(-1)}
      >
        <IoChevronBack
          className="flex items-center fas fa-chevron-left"
          style={{ fontSize: 12 }}
        />
      </div>
      <div className="relative flex-grow flex-shrink-0 max-w-55">
        <div className="dropdown flex relative rounded">
          <button
            type="button"
            className="w-full flex rounded font-semibold items-center whitespace-nowrap py-2 pl-2 pr-1 text-xs h-8 cursor-pointer bg-dark-5% text-dark-2 hover:text-dark-3"
          >
            <span className="question-type-icon relative flex items-center justify-center p-1 bg-brand-b text-white rounded-sm mr-2">
              <TbSquareRoundedCheckFilled
                className="flex items-center far fa-check-square"
                style={{ fontSize: 18 }}
              />
            </span>
            <span>Tạo câu hỏi</span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className={`relative`} onClick={() => handleClick("point")}>
          <div className="dropdown flex relative rounded">
            <div className="w-full flex rounded font-semibold items-center whitespace-nowrap py-2 pl-2 pr-1 text-xs h-8 cursor-pointer bg-dark-5% text-dark-2 hover:text-dark-3">
              <IoCheckmark
                className="flex items-center far fa-check mr-2"
                style={{ fontSize: 12 }}
              />
              <span>{selectedPoint} điểm</span>
              <div className="w-4 h-4 flex items-center justify-center relative">
                <FaCaretDown
                  className="flex items-center fas fa-caret-down"
                  aria-hidden="true"
                  style={{ fontSize: 12 }}
                />
              </div>
            </div>
            <div style={{ display: click === "point" ? "block" : "none" }}>
              <div
                tabIndex={-1}
                role="listbox"
                className="list bg-light-3 h-min shadow-soft-high rounded z-on-overlay mt-2 left-0 w-full top-full origin-top z-on-overlay"
                style={{ position: "absolute" }}
              >
                <ul className="rounded overflow-y-auto dropdown-limit">
                  {pointArray.map((item, index) => {
                    return (
                      <li
                        className="text-sm text-dark-2 font-semibold"
                        key={index}
                      >
                        <button
                          type="button"
                          className={`px-2 py-1 w-full  ${
                            selectedPoint === item ? "bg-purple-300" : ""
                          } hover:bg-purple-100 hover:text-purple-400 bg-purple-100-faded text-lilac font-semibold`}
                          onClick={() => handlePoint(item)}
                        >
                          {item}&nbsp;<span>điểm</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="relative" onClick={() => handleClick("time")}>
          <div className="dropdown flex relative rounded">
            <div className="w-full flex rounded font-semibold items-center whitespace-nowrap py-2 pl-2 pr-1 text-xs h-8 cursor-pointer bg-dark-5% text-dark-2 hover:text-dark-3">
              <BsClock
                className="flex items-center far fa-clock mr-2"
                style={{ fontSize: 12 }}
              />
              <span>{selectedTime}</span>
              <div className="w-4 h-4 flex items-center justify-center relative">
                <FaCaretDown
                  className="flex items-center fas fa-caret-down"
                  aria-hidden="true"
                  style={{ fontSize: 12 }}
                />
              </div>
            </div>
            <div style={{ display: click === "time" ? "block" : "none" }}>
              <div
                tabIndex={-1}
                role="listbox"
                className="list bg-light-3 h-min shadow-soft-high rounded z-on-overlay mt-2 left-0 w-full top-full origin-top z-on-overlay"
                style={{ position: "absolute" }}
              >
                <ul>
                  {timeArray.map((item, index) => {
                    return (
                      <li className="text-sm text-dark-2" key={index}>
                        <button
                          type="button"
                          className={`px-2 py-1 w-full ${
                            selectedTime === item ? "bg-purple-300" : ""
                          } hover:bg-purple-100 hover:text-purple-400 font-semibold`}
                          onClick={() => handleTime(item)}
                        >
                          {item}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="transition-colors duration-200 p-0 ease-in-out flex items-center justify-center px-4 py-1.5 text-xs font-semibold h-8 bg-purple-500 text-white hover:bg-purple-400 active:bg-purple rounded"
        >
          <FaFloppyDisk
            className="flex items-center fas fa-floppy-disk mr-2"
            style={{ fontSize: 12 }}
          />
          <span>{edit ? "Lưu thay đổi" : "Lưu câu hỏi"}</span>
        </button>
      </div>
    </header>
  );
};

export default HeaderCreateQuestion;
