// import React from "react";
import { FaUser, FaHeart, FaArchive } from "react-icons/fa";
// import Collection from "../../Collection/Collection.jsx";
import { useNavigate } from "react-router-dom";
import { useFetchAPILessonByUser } from "../../../hook/useFetchAPILesson.jsx";

const SidebarLib = () => {
  const { allLessonByUser } = useFetchAPILessonByUser();
  const navigate = useNavigate()
  const menuItems = [
    { text: "Được tạo bởi tôi", href: "/library/createdByMe", icon: <FaUser /> ,total:allLessonByUser.length},
    
    // { text: "Đã thích", href: "/library/createdByMe", icon: <FaHeart /> ,total:allLessonByUser.length},
    
    { text: "Tất cả nội dung ", href: "/library/allMyContent", icon: <FaArchive /> ,total:0},
  ];

  return (
    <div className="z-1 w-60 md:mr-6 sticky top-0 left-0">
      <div className="flex flex-col overflow-y-auto navigation-drawer">
        <ul>
          <li>
            <section>
              <header>
                <div className="flex px-3 pb-1 justify-left items-center font-bold text-dark-3 text-base md:text-xl md:p-0 md:h-8 mb-4">
                  <span>Thư viện của tôi </span>
                </div>
              </header>
              <ul className="flex flex-row flex-wrap text-xs p-3 gap-2 md:text-sm md:flex-col md:p-0 md:pb-4 md:gap-y-1">
                {menuItems.map((item, index) => (
                  <li  key={index} className="md:w-full bg-light-66% rounded-t rounded-b-lg">
                    <div href={item.href} className="flex flex-col border border-dark-6 rounded text-dark-4 hover:bg-light hover:shadow-sm hover:text-dark-2 cursor-pointer md:border-0 md:mb-0 md:w-full md:h-8 p-0 bg-light-3 md:bg-light-1 h-6">
                      <button onClick={()=>navigate(item.href)} type="button" className="flex flex-row flex-grow items-center justify-between h-full">
                        <div className="flex flex-row items-center border-r-1 border-dark-10% md:border-0 w-8 h-full justify-center">
                          {item.icon}
                        </div>
                        <div className="flex flex-grow px-2 items-center">
                          <span className="font-semibold truncate">{item.text}</span>
                        </div>
                        <div className="flex">
                          <div className="flex pr-2 items-center text-xs md:font-semibold">
                            <span>{item?.total}</span>
                          </div>
                        </div>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        </ul>
        {/* <Collection/> */}
      </div>
    </div>
  );
};

export default SidebarLib;
