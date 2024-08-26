import React from "react";

export default function TableBody({ displayedEmployees }) {
  return (
    <tbody>
      {displayedEmployees.map((employee, index) => (
        <tr key={index}>
          <td className="border px-4 py-2">{employee.firstName}</td>
          <td className="border px-4 py-2">{employee.lastName}</td>
          <td className="border px-4 py-2">{employee.dateOfBirth}</td>
          <td className="border px-4 py-2">{employee.startDate}</td>
          <td className="border px-4 py-2">{employee.department}</td>
          <td className="border px-4 py-2">{employee.street}</td>
          <td className="border px-4 py-2">{employee.city}</td>
          <td className="border px-4 py-2">{employee.state}</td>
          <td className="border px-4 py-2">{employee.zipCode}</td>
        </tr>
      ))}
    </tbody>
  );
}
