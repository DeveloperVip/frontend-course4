import React, { useState } from "react";
import {
  FaCalendarDay,
  FaCaretDown,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { actions, dateOptions, days, weekDays } from "../../utils/Initial.jsx";

const ReportHeader = () => {
  // State to manage the visibility of dropdown menus
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [selectedOption, setSelectedOption] = useState({
    gameState: "All Games",
    report: "All Reports",
    class: "All Classes",
    date: "Select Date",
  });

  const handleButtonClick = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleOptionSelect = (dropdown, option) => {
    setSelectedOption((prev) => ({
      ...prev,
      [dropdown]: option,
    }));
    setActiveDropdown(null); // Close the dropdown after selecting an option
  };

  return (
    <div className="gap-2 items-center justify-start pagination col-span-full flex flex-row z-20">
      <div className="text-sm font-semibold text-dark-4 mr-3">
        <span>Filter by :</span>
      </div>
      {/* Game State Dropdown */}

      <div className="bg-light rounded w-45 relative">
        <button
          type="button"
          data-testid="game-state-filter-select-box"
          className="flex items-center cursor-pointer rounded font-semibold text-sm text-dark-3 p-4 border border-dark-6 w-full h-8"
          onClick={() => handleButtonClick("gameState")}
        >
          <div className="truncate w-full text-sm">{selectedOption.gameState}</div>
          <div className="ml-auto flex items-center w-4 h-4">
            <FaCaretDown className="text-dark-3" />
          </div>
        </button>
        {activeDropdown === "gameState" && (
          <ul
            className="listbox overflow-y-auto bg-light-3 shadow-soft-high w-full mt-8 max-h-50 absolute top-2 rounded transition-transform text-xs font-semibold text-dark-4"
            role="listbox"
          >
            {["All Games", "Scheduled", "Completed"].map((option) => (
              <li
                key={option}
                className={`option cursor-pointer py-2 px-5 hover:bg-dark-5% ${
                  selectedOption.gameState === option ? "bg-dark-5% text-lilac" : ""
                }`}
                onClick={() => handleOptionSelect("gameState", option)}
                role="option"
              >
                <div className={`font-semibold text-xs ${
                  selectedOption.gameState === option ? "text-lilac" : "text-dark-2"
                }`}>
                  {option}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Report Dropdown */}
      <div className="bg-light rounded w-45 relative">
        <button
          type="button"
          className="listbox-button flex items-center cursor-pointer box-border text-left rounded font-semibold text-sm text-dark-3 p-4 border border-dark-6 text-dark-2 pl-2 pr-1 py-2 h-8 w-full"
          onClick={() => handleButtonClick("report")}
        >
          <div
            className="title w-full truncate text-sm"
            aria-live="assertive"
          >
            {selectedOption.report}
          </div>
          <div
            className="ml-auto flex items-center justify-center w-4 h-4"
            aria-hidden="true"
          >
            <FaCaretDown className="text-dark-3" />
          </div>
        </button>
        {activeDropdown === "report" && (
          <ul className="listbox overflow-y-auto bg-light-3 shadow-soft-high w-full mt-8 max-h-50 absolute top-2 rounded transition-transform text-xs font-semibold text-dark-4">
            {["All Reports", "Report A", "Report B"].map((option) => (
              <li
                key={option}
                className={`option cursor-pointer py-2 px-5 hover:bg-dark-5% ${
                  selectedOption.report === option ? "bg-dark-5% text-lilac" : ""
                }`}
                onClick={() => handleOptionSelect("report", option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Class Dropdown */}
      <div className="bg-light rounded w-45 relative">
        <button
          type="button"
          className="flex items-center cursor-pointer text-left rounded font-semibold text-sm text-dark-3 p-4 border border-dark-6 w-full h-8"
          onClick={() => handleButtonClick("class")}
        >
          <div className="truncate w-full text-sm">{selectedOption.class}</div>
          <div className="ml-auto flex items-center justify-center w-4 h-4">
            <FaCaretDown className="text-dark-3" />
          </div>
        </button>
        {activeDropdown === "class" && (
          <ul className="listbox overflow-y-auto bg-light-3 shadow-soft-high w-full mt-8 max-h-50 absolute top-2 rounded transition-transform text-xs font-semibold text-dark-4">
            {["All Classes", "Class 1", "Class 2"].map((option) => (
              <li
                key={option}
                className={`option cursor-pointer py-2 px-5 hover:bg-dark-5% ${
                  selectedOption.class === option ? "bg-dark-5% text-lilac" : ""
                }`}
                onClick={() => handleOptionSelect("class", option)}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Date Selector */}
      <div className="relative">
        <button
          type="button"
          className="flex py-2 px-2 justify-between items-center text-dark-3 text-xs font-semibold bg-light border border-dark-6 rounded w-45"
          onClick={() => handleButtonClick("date")}
        >
          <div className="flex items-center whitespace-nowrap overflow-hidden">
            <FaCalendarDay className="mr-2 text-sm" />
            <span>Filter by Date</span>
          </div>
          <FaCaretDown />
        </button>

        {activeDropdown === "date" && (
          <div className="absolute right-0 bg-light text-sm font-semibold rounded flex">
            {/* Date Options */}
            <ul className="text-right">
              {dateOptions.map((option) => (
                <li
                  key={option}
                  className="cursor-pointer py-2 px-5 hover:bg-dark-5% whitespace-nowrap"
                  onClick={() => handleOptionSelect("date", option)}
                >
                  {option}
                </li>
              ))}
            </ul>

            <div>
              {/* Calendar */}
              <div className="p-3 text-center">
                <FaChevronLeft className="float-left cursor-pointer" />
                <span>August 2024</span>
                <FaChevronRight className="float-right cursor-pointer" />
              </div>

              {/* Week Days */}
              <div className="px-5 py-1">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {weekDays.map((day) => (
                        <th key={day} className="text-center">
                          {day}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {days.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((day, colIndex) => (
                          <td
                            key={colIndex}
                            className={`text-center p-2 cursor-pointer ${
                              rowIndex === 3 && colIndex === 1
                                ? "text-current"
                                : "text-dark-5"
                            }`}
                          >
                            {day}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Actions */}
              <div className="flex justify-end px-2 py-1">
                {actions.map((action) => (
                  <button
                    key={action}
                    className={`transition-colors duration-200 ease-in-out px-4 py-1 text-sm font-semibold h-8 rounded min-w-max ${
                      action === "Save"
                        ? "bg-lilac text-lilac hover:text-lilac-light"
                        : "text-dark-3"
                    }`}
                    aria-label={action}
                    type="button"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReportHeader;
