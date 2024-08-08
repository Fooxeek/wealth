import React from "react";
import { render, screen } from "@testing-library/react";
import TableBody from "./TableBody";

describe("TableBody", () => {
  const employees = [
    {
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "2000-01-01",
      startDate: "2020-01-01",
      department: "Sales",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      dateOfBirth: "1990-05-15",
      startDate: "2019-07-20",
      department: "Engineering",
      street: "456 Elm St",
      city: "Othertown",
      state: "NY",
      zipCode: "54321",
    },
  ];

  test("renders TableBody component", () => {
    render(
      <table>
        <TableBody displayedEmployees={employees} />
      </table>
    );

    expect(screen.getByText(/John/i)).toBeInTheDocument();
    expect(screen.getByText(/Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/2000-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/2020-01-01/i)).toBeInTheDocument();
    expect(screen.getByText(/Sales/i)).toBeInTheDocument();
    expect(screen.getByText(/123 Main St/i)).toBeInTheDocument();
    expect(screen.getByText(/Anytown/i)).toBeInTheDocument();
    expect(screen.getByText(/CA/i)).toBeInTheDocument();
    expect(screen.getByText(/12345/i)).toBeInTheDocument();

    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
    expect(screen.getByText(/Smith/i)).toBeInTheDocument();
    expect(screen.getByText(/1990-05-15/i)).toBeInTheDocument();
    expect(screen.getByText(/2019-07-20/i)).toBeInTheDocument();
    expect(screen.getByText(/Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/456 Elm St/i)).toBeInTheDocument();
    expect(screen.getByText(/Othertown/i)).toBeInTheDocument();
    expect(
      screen.getByText((content, element) => {
        return element.tagName.toLowerCase() === "td" && content === "NY";
      })
    ).toBeInTheDocument();
    expect(screen.getByText(/54321/i)).toBeInTheDocument();
  });
});
