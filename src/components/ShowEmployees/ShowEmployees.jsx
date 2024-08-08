import React, { useState } from "react";
import { useSelector } from "react-redux";
import TableHeader from "../TableHeader/TableHeader";
import TableBody from "../TableBody/TableBody";
import Pagination from "../Pagination/Pagination";

export default function ShowEmployees({ entriesToShow, searchQuery }) {
  const employees = useSelector((state) => state.employees);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

  const filteredEmployees = employees.filter((employee) => {
    const query = searchQuery.toLowerCase();
    return (
      employee.firstName.toLowerCase().includes(query) ||
      employee.lastName.toLowerCase().includes(query) ||
      employee.dateOfBirth.toLowerCase().includes(query) ||
      employee.startDate.toLowerCase().includes(query) ||
      employee.department.toLowerCase().includes(query) ||
      employee.street.toLowerCase().includes(query) ||
      employee.city.toLowerCase().includes(query) ||
      employee.state.toLowerCase().includes(query) ||
      employee.zipCode.toLowerCase().includes(query)
    );
  });

  const sortedEmployees = [...filteredEmployees];

  if (sortConfig.key) {
    sortedEmployees.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  const totalPages = Math.ceil(sortedEmployees.length / entriesToShow);

  const displayedEmployees = sortedEmployees.slice(
    (currentPage - 1) * entriesToShow,
    currentPage * entriesToShow
  );

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePageSelect = (e) => {
    setCurrentPage(Number(e.target.value));
  };

  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const getSortDirection = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "ascending" ? "▲" : "▼";
    }
    return "↕";
  };

  return (
    <>
      {sortedEmployees.length > 0 ? (
        <>
          <table className="min-w-full bg-white">
            <TableHeader
              requestSort={requestSort}
              getSortDirection={getSortDirection}
            />
            <TableBody displayedEmployees={displayedEmployees} />
          </table>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
            handlePageSelect={handlePageSelect}
            entriesToShow={entriesToShow}
            sortedEmployees={sortedEmployees}
          />
        </>
      ) : (
        <p>No employees found.</p>
      )}
    </>
  );
}
