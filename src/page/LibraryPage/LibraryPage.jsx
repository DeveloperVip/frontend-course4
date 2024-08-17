// import React from "react";
import "./LibraryPage.css"
import SidebarLib from "../../components/Library/Sidebar/SidebarLib";
import CreateByMe from "../../components/Library/Section/CreateByMe";

const LibraryPage = () => {
  return (
    <div className="h-full flex flex-col w-full flex bg-light-1 overflow-auto">
      <div className="flex flex-1 flex-col w-full md:flex-row md:justify-center relative overflow-auto will-change-transform wrapper md:mt-6">
      {/* <SidebarLib /> */}
      <CreateByMe />
      </div>
    </div>
  );
};

export default LibraryPage;
