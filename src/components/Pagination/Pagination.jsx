import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Pagination.css";
// import { useFetchAPIHistoryAll } from "../../hook/useFetchAPIHistory.jsx";
import { PaginationContext } from "../../contexts/paginationContext.jsx";

const Pagination = () => {
   // Tổng số trang
   const {currentPage,handleClick,pages,totalPages} = useContext(PaginationContext)
  

  return (
    <>
      <nav className="pagination" aria-label="Page navigation example" style={{width:"100%"}}>
        <ul className="pagination flex gap-1 justify-center" style={{width:"auto"}}>
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              aria-label="Previous"
              onClick={() => handleClick(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <span aria-hidden="true">«</span>
            </Link>
          </li>
          {pages.map((page) => (
            <li
              key={page}
              className={`page-item ${currentPage === page ? "active" : ""}`}
            >
              <Link
                className="page-link"
                to="#"
                onClick={() => handleClick(page)}
              >
                {page}
              </Link>
            </li>
          ))}
          <li className="page-item">
            <Link
              className="page-link"
              to="#"
              aria-label="Next"
              onClick={() => handleClick(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <span aria-hidden="true">»</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
