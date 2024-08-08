import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./Nav";

test("renders navigation links correctly", () => {
  render(
    <Router>
      <Nav />
    </Router>
  );

  // Check if the "New Employees" link is rendered correctly
  const newEmployeesLink = screen.getByText(/New Employees/i);
  expect(newEmployeesLink).toBeInTheDocument();
  expect(newEmployeesLink.closest("a")).toHaveAttribute("href", "/");

  // Check if the "Current Employees" link is rendered correctly
  const currentEmployeesLink = screen.getByText(/Current Employees/i);
  expect(currentEmployeesLink).toBeInTheDocument();
  expect(currentEmployeesLink.closest("a")).toHaveAttribute("href", "/list");
});

test("renders icons correctly", () => {
  render(
    <Router>
      <Nav />
    </Router>
  );

  // Check if the icons are rendered correctly
  expect(
    screen.getByRole("link", { name: /New Employees/i }).querySelector("svg")
  ).toBeInTheDocument();
  expect(
    screen
      .getByRole("link", { name: /Current Employees/i })
      .querySelector("svg")
  ).toBeInTheDocument();
});
