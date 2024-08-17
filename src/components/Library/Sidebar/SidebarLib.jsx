// import React from "react";
import { FaUser, FaFileImport, FaHistory, FaHeart, FaUsers, FaTags, FaArchive, FaFolder } from "react-icons/fa";

const SidebarLib = () => {
  const menuItems = [
    { text: "Created by me", href: "/admin/my-library/createdByMe?order=desc&sortBy=createdAt&contentType=all&term=", icon: <FaUser /> },
    { text: "Imported", href: "/admin/my-library/imported?order=desc&sortBy=createdAt&contentType=all&term=", icon: <FaFileImport /> },
    { text: "Previously used", href: "/admin/my-library/hostedQuizzes?order=desc&sortBy=createdAt&contentType=all&term=", icon: <FaHistory /> },
    { text: "Liked by me", href: "/admin/my-library/likedQuizzes?order=desc&sortBy=createdAt&contentType=all&term=", icon: <FaHeart /> },
    { text: "Shared with me", href: "/admin/my-library/sharedWithMe?order=desc&sortBy=createdAt&contentType=all&term=", icon: <FaUsers /> },
    { text: "Standards Tagged", href: "/admin/my-library/standardTagging?order=desc&sortBy=createdAt&contentType=all&term=", icon: <FaTags /> },
    { text: "All my content", href: "/admin/my-library/allQuizzes?order=desc&sortBy=createdAt&contentType=all&term=", icon: <FaArchive /> },
  ];

  const collections = [
    { text: "Saved for later", href: "/admin/my-library/collections/66c06907c878ae8026d8d10b?order=desc&sortBy=createdAt&contentType=all&term=", count: 0 },
    { text: "quizz", href: "/admin/my-library/collections/66bb66f61a6c52e4064a72af?order=desc&sortBy=createdAt&contentType=all&term=", count: 1 },
  ];

  return (
    <div className="z-1 w-60 md:mr-6 sticky top-0 left-0">
      <div className="flex flex-col overflow-y-auto navigation-drawer">
        <ul>
          <li>
            <section>
              <header>
                <div className="flex px-3 pb-1 justify-left items-center font-bold text-dark-3 text-base md:text-xl md:p-0 md:h-8 mb-4">
                  <span>My library</span>
                </div>
              </header>
              <ul className="flex flex-row flex-wrap text-xs p-3 gap-2 md:text-sm md:flex-col md:p-0 md:pb-4 md:gap-y-1">
                {menuItems.map((item, index) => (
                  <li key={index} className="md:w-full bg-light-66% rounded-t rounded-b-lg">
                    <a href={item.href} className="flex flex-col border border-dark-6 rounded text-dark-4 hover:bg-light hover:shadow-sm hover:text-dark-2 cursor-pointer md:border-0 md:mb-0 md:w-full md:h-8 p-0 bg-light-3 md:bg-light-1 h-6">
                      <button type="button" className="flex flex-row flex-grow items-center justify-between h-full">
                        <div className="flex flex-row items-center border-r-1 border-dark-10% md:border-0 w-8 h-full justify-center">
                          {item.icon}
                        </div>
                        <div className="flex flex-grow px-2 items-center">
                          <span className="font-semibold truncate">{item.text}</span>
                        </div>
                        <div className="flex">
                          <div className="flex pr-2 items-center text-xs md:font-semibold">
                            <span>0</span>
                          </div>
                        </div>
                      </button>
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </li>
        </ul>
        <div>
          <ul className="flex flex-col text-xs p-3 gap-2 md:text-sm md:p-0 md:py-4 md:gap-y-1">
            <li className="flex justify-start md:block mb-2">
              <section className="mb-2 flex">
                <span className="text-dark-3 text-sm font-bold flex-1">
                  My collections
                </span>
                <div className="text-dark-4 bg-transparent border border-dark-6 px-2 rounded cursor-pointer">
                  {/* <FaCirclePlus className="text-xl" /> */}
                  <span className="ml-1 text-xs font-semibold">New</span>
                </div>
              </section>
            </li>
            {collections.map((collection, index) => (
              <div key={index} className="md:w-full">
                <a href={collection.href} className="flex border border-dark-6 rounded text-dark-4 hover:bg-light hover:shadow-sm hover:text-dark-2 cursor-pointer h-6 items-center md:border-0 md:mb-2 md:w-full md:h-8 p-0 collection-filter-btn text-dark-4 bg-light md:bg-light-1">
                  <button className="flex flex-row flex-grow items-center justify-between h-full relative min-w-0" type="button">
                    <div className="flex flex-row items-center h-full border-r-1 border-dark-10% md:border-0">
                      <FaFolder className="text-xl" />
                    </div>
                    <div className="flex flex-grow px-2 items-center min-w-0">
                      <span className="font-semibold truncate">{collection.text}</span>
                    </div>
                    <div className="flex px-2 justify-center text-xs collection-total-items">
                      {collection.count}
                    </div>
                  </button>
                </a>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SidebarLib;
