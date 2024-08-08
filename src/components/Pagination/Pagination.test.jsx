import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  const handlePreviousPage = jest.fn();
  const handleNextPage = jest.fn();
  const handlePageSelect = jest.fn();
  const entriesToShow = 10;
  const sortedEmployees = new Array(50).fill().map((_, index) => ({
    id: index + 1,
  }));

  const currentPage = 1;
  const totalPages = Math.ceil(sortedEmployees.length / entriesToShow);

  test("calls handlePageSelect on page select change", () => {
    render(
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePreviousPage={handlePreviousPage}
        handleNextPage={handleNextPage}
        handlePageSelect={handlePageSelect}
        entriesToShow={entriesToShow}
        sortedEmployees={sortedEmployees}
      />
    );

    fireEvent.change(screen.getByRole("combobox"), { target: { value: "3" } });
    expect(handlePageSelect).toHaveBeenCalled();
    expect(handlePageSelect).toHaveBeenCalledWith(
      expect.objectContaining({ target: { value: "3" } })
    );
  });
});
