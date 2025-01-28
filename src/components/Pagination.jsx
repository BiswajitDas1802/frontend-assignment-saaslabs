import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => (
  <div className="pagination">
    <button
      className="page-btn"
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      Previous
    </button>
    {Array.from({ length: totalPages }, (_, index) => (
      <button
        key={index}
        className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
        onClick={() => onPageChange(index + 1)}
      >
        {index + 1}
      </button>
    ))}
    <button
      className="page-btn"
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      Next
    </button>
  </div>
);

export default Pagination;
