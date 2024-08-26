import React from "react";

export default function TableHeader({ requestSort, getSortDirection }) {
  const headers = [
    { key: "firstName", label: "First Name" },
    { key: "lastName", label: "Last Name" },
    { key: "dateOfBirth", label: "Date of Birth" },
    { key: "startDate", label: "Start Date" },
    { key: "department", label: "Department" },
    { key: "street", label: "Street" },
    { key: "city", label: "City" },
    { key: "state", label: "State" },
    { key: "zipCode", label: "Zip Code" },
  ];

  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th
            key={header.key}
            className="py-2 cursor-pointer"
            onClick={() => requestSort(header.key)}
          >
            {header.label} {getSortDirection(header.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
}
