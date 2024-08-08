import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ShowEmployees from "./ShowEmployees";

const mockStore = configureStore([]);

describe("ShowEmployees", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      employees: [
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
      ],
    });
  });

  test("handles search functionality", () => {
    render(
      <Provider store={store}>
        <ShowEmployees entriesToShow={10} searchQuery="Jane" />
      </Provider>
    );

    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
    expect(screen.queryByText(/Doe/i)).not.toBeInTheDocument();
  });

  test("handles sorting functionality", () => {
    render(
      <Provider store={store}>
        <ShowEmployees entriesToShow={10} searchQuery="" />
      </Provider>
    );

    fireEvent.click(screen.getByText(/First Name/i));
    expect(screen.getByText(/Jane/i)).toBeInTheDocument();
    expect(screen.getByText(/John/i)).toBeInTheDocument();
  });
});
