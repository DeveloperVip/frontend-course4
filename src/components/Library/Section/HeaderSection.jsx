import React, { useState } from "react";
import { FaFilter, FaSort, FaCaretDown } from "react-icons/fa";
import { Dropdown } from "../../ToolBar/Dropdown.jsx";


const HeaderSection = () => {
  const [activeTab, setActiveTab] = useState('Đã published');
  const [selectedFilter, setSelectedFilter] = useState('Tất cả');
  const [sortOrder, setSortOrder] = useState('Gần đây nhất');

  const filterOptions = ['Tất cả', 'Đã published'];
  const sortOptions = ['Gần đây nhất', 'Cũ'];

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
              <span>Đã Published (1)</span>
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
