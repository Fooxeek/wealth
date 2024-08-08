import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  handlePreviousPage,
  handleNextPage,
  handlePageSelect,
  entriesToShow,
  sortedEmployees,
}) {
  return (
    <div className="mt-4 flex justify-between items-center mx-10">
      <p>
        Showing {(currentPage - 1) * entriesToShow + 1} to{" "}
        {Math.min(currentPage * entriesToShow, sortedEmployees.length)} of{" "}
        {sortedEmployees.length} entries
      </p>
      <div className="flex items-center">
        <button
          onClick={handlePreviousPage}
          className="px-4 py-2 mr-2 border rounded bg-gray-200"
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {totalPages > 2 && (
          <select
            value={currentPage}
            onChange={handlePageSelect}
            className="px-2 py-1 border rounded mx-2"
          >
            {Array.from({ length: totalPages }, (_, index) => (
              <option key={index + 1} value={index + 1}>
                Page {index + 1}
              </option>
            ))}
          </select>
        )}
        <button
          onClick={handleNextPage}
          className="px-4 py-2 border rounded bg-gray-200"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}
