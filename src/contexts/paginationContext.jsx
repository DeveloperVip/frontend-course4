import React, { createContext, useState, useContext } from "react";
import { useFetchAPIHistoryAll } from "../hook/useFetchAPIHistory.jsx";
import { toast } from "react-toastify";

// Tạo context
export const PaginationContext = createContext();

// Tạo Provider cho context
export const PaginationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const { allHistory } = useFetchAPIHistoryAll();
  const totalPages = Math.ceil(allHistory?.length / itemsPerPage);

  // Hàm xử lý khi click vào trang
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
        toast("Chuyển sang trang tiếp theo !", {
            position: toast.POSITION.TOP_LEFT,
          });
      setCurrentPage(page);

      // setPage(page -1)
    }
  };

  // Tạo mảng các số trang
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  //   // Chuyển đến trang kế tiếp
  //   const nextPage = () => {
  //     setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  //   };

  //   // Chuyển đến trang trước đó
  //   const previousPage = () => {
  //     setCurrentPage((prev) => Math.max(prev - 1, 1));
  //   };

  //   // Chuyển đến một trang cụ thể
  //   const goToPage = (page) => {
  //     setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  //   };

  return (
    <PaginationContext.Provider
      value={{
        currentPage,
        itemsPerPage,
        totalItems,
        setItemsPerPage,
        setTotalItems,
        handleClick,
        totalPages,
        pages,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
};
