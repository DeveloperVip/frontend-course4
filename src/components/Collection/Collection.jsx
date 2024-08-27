import React from 'react'
import { FaFolder } from 'react-icons/fa';


const Collection = () => {
    const collections = [
        { text: "Lưu lại sau", href: "/admin/my-library/collections/66c06907c878ae8026d8d10b?order=desc&sortBy=createdAt&contentType=all&term=", count: 0 },
        { text: "Các câu hỏi", href: "/admin/my-library/collections/66bb66f61a6c52e4064a72af?order=desc&sortBy=createdAt&contentType=all&term=", count: 1 },
      ];
  return (
    <div className="z-1 w-60 md:mr-6 sticky top-0 left-0 h-auto ml-10">
      <div className="flex flex-col overflow-y-auto navigation-drawer">
    <div>
          <ul className="flex flex-col text-xs p-3 gap-2 md:text-sm md:p-0 md:py-4 md:gap-y-1">
            <li className="flex justify-start md:block mb-2">
              <section className="mb-2 flex">
                <span className="text-dark-3 text-sm font-bold flex-1">
                  Bộ sưu tập của tôi 
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
  )
}

export default Collection