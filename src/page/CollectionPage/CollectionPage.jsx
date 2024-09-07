import React from "react";
import CollectionSideBar from "../../components/Collection/Collection.jsx";
import { useParams } from "react-router-dom";
import AllQuiz from "../../components/Collection/AllQuiz.jsx";
import Saved from "../../components/Collection/Saved.jsx";

const CollectionPage = ({visiable}) => {
  // console.log("🚀 ~ CollectionPage ~ visiable:", visiable)
  const param = useParams();
  console.log(param);

  return (
    <div className="relative flex justify-center w-full col-span-full p-2 slug">
      <CollectionSideBar />
      <div className="flex flex-1 flex-col w-full relative overflow-auto will-change-transform wrapper md:mt-6">
        {visiable && <AllQuiz/>}
        {param?.id === "all_quiz" && !visiable ? <AllQuiz/>:<Saved/>}
      </div>
      
    </div>
  );
};

export default CollectionPage;
