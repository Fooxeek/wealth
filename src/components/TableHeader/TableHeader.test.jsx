import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader", () => {
  const requestSort = jest.fn();
  const getSortDirection = jest.fn((key) => {
    return key === "firstName" ? "▲" : "↕";
  });

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

  test("renders TableHeader component with correct headers", () => {
    render(
      <table>
        <TableHeader
          requestSort={requestSort}
          getSortDirection={getSortDirection}
        />
      </table>
    );

    headers.forEach((header) => {
      expect(
        screen.getByText(new RegExp(header.label, "i"))
      ).toBeInTheDocument();
    });
  });

  test("calls requestSort with correct key when header is clicked", () => {
    render(
      <table>
        <TableHeader
          requestSort={requestSort}
          getSortDirection={getSortDirection}
        />
      </table>
    );

    headers.forEach((header) => {
      const headerElement = screen.getByText(new RegExp(header.label, "i"));
      fireEvent.click(headerElement);
      expect(requestSort).toHaveBeenCalledWith(header.key);
    });
  });

  test("displays correct sort direction", () => {
    render(
      <table>
        <TableHeader
          requestSort={requestSort}
          getSortDirection={getSortDirection}
        />
      </table>
    );

    headers.forEach((header) => {
      const headerElement = screen.getByText(new RegExp(header.label, "i"));
      const sortDirection = getSortDirection(header.key);
      if (sortDirection) {
        expect(headerElement).toHaveTextContent(sortDirection);
      }
    });
  });
});
