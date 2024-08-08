import React, { useState } from "react";
import ShowEmployees from "../components/ShowEmployees/ShowEmployees";

export default function CurrentEmployees() {
  const [entriesToShow, setEntriesToShow] = useState(25);
  const [searchQuery, setSearchQuery] = useState("");

  const handleEntriesChange = (e) => {
    setEntriesToShow(Number(e.target.value));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Current Employees</h1>
      <div className="flex justify-between items-center mx-10 mb-4">
        <div className="flex items-center">
          <label
            htmlFor="entries"
            className="text-sm font-medium text-gray-700 mr-2"
          >
            Show entries:
          </label>
          <select
            id="entries"
            value={entriesToShow}
            onChange={handleEntriesChange}
            className="p-2 border rounded"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
        </div>
        <div className="flex items-center">
          <label
            htmlFor="search"
            className="text-sm font-medium text-gray-700 mr-2"
          >
            Search:
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search employees..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="p-2 border rounded"
          />
        </div>
      </div>

      <ShowEmployees entriesToShow={entriesToShow} searchQuery={searchQuery} />
    </div>
  );
}
