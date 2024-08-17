import React, { useState } from "react";
import { FaFilter, FaSort, FaCaretDown } from "react-icons/fa";

const Dropdown = ({ title, icon, options, onOptionSelect }) => {
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

const HeaderSection = () => {
  const [activeTab, setActiveTab] = useState('published');
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [sortOrder, setSortOrder] = useState('Most Recent');

  const filterOptions = ['All', 'Published', 'Draft'];
  const sortOptions = ['Most Recent', 'Oldest'];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Handle tab change logic here
  };

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter);
    // Handle filter change logic here
  };

  const handleSortSelect = (sort) => {
    setSortOrder(sort);
    // Handle sort order change logic here
  };

  return (
    <div className="LibraryView2-LibraryView bg-light md:bg-transparent ">
      <div className="flex flex-col m-0 p-0 gap-y-4">
        <div className="MyLibraryV2-Filters-index flex flex-row py-4 px-3 justify-between bg-light-3 z-1 md:p-0 md:bg-light-1 md:min-h-8 md:items-center sticky top-0">
          <div className="flex flex-row gap-2">
            <div
              className={`px-2 pt-2 pb-1.5 border-b-2 font-semibold text-dark-4 text-xs text-center cursor-pointer ${
                activeTab === 'published' ? 'border-b-lilac text-lilac' : 'border-b-transparent'
              }`}
              onClick={() => handleTabClick('published')}
            >
              <span>Published (1)</span>
            </div>
            <div
              className={`px-2 pt-2 pb-1.5 border-b-2 font-semibold text-dark-4 text-xs text-center cursor-pointer ${
                activeTab === 'draft' ? 'border-b-lilac text-lilac' : 'border-b-transparent'
              }`}
              onClick={() => handleTabClick('draft')}
            >
              <span>Drafts (13)</span>
            </div>
          </div>
          <div className="flex">
            <Dropdown
              title={selectedFilter}
              icon={<FaFilter style={{ fontSize: 12 }} />}
              options={filterOptions}
              onOptionSelect={handleFilterSelect}
            />
            <Dropdown
              title={sortOrder}
              icon={<FaSort style={{ fontSize: 12 }} />}
              options={sortOptions}
              onOptionSelect={handleSortSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
