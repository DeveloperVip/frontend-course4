// import React from "react";
import "./LibraryPage.css";
import SidebarLib from "../../components/Library/Sidebar/SidebarLib";
import CreateByMe from "../../components/Library/Section/CreateByMe";
import AllMyContent from "../../components/Library/Section/AllMyContent";
import HeaderSection from "../../components/Library/Section/HeaderSection";
import { useParams } from "react-router-dom";

const LibraryPage = () => {
  const href = useParams();
  console.log(href.id);
  return (
    <div className="p-10 h-full flex flex-row  bg-light-1 overflow-auto">
      <SidebarLib />
      <div className="flex flex-1 flex-col w-full relative overflow-auto will-change-transform wrapper md:mt-6">
        <HeaderSection />
        {href.id === "createdByMe" ? <CreateByMe /> : <AllMyContent />}
      </div>
    </div>
  );
};

export default LibraryPage;
