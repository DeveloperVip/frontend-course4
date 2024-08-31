import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";

export const Dropdown = ({ title, icon, options, onOptionSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <div className="relative">
        <div className="field relative rounded text-sm text-dark-4 bg-light-3 h-6 border border-dark-6">
          <div className="dropdown flex relative rounded">
            <button
              type="button"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
              className="w-full flex rounded font-semibold items-center whitespace-nowrap py-1 pl-2 pr-1 text-xs h-6 cursor-pointer"
              onClick={toggleDropdown}
            >
              {icon}
              <span className="truncate ml-2">{title}</span>
              <div className="w-4 h-4 items-center justify-center flex relative ml-auto">
                <FaCaretDown aria-hidden="true" style={{ fontSize: 11 }} />
              </div>
            </button>
          </div>
          {isOpen && (
            <ul className="absolute bg-light-3 border border-dark-6 rounded mt-1 w-full z-10">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="py-1 px-2 cursor-pointer hover:bg-light-2"
                  onClick={() => {
                    onOptionSelect(option);
                    toggleDropdown();
                  }}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  };