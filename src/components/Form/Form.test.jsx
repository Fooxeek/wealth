import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Form from "./Form";
import { addEmployee } from "../../slices/employeesSlice";

// Create a mock store
const mockStore = configureStore([]);
let store;

beforeEach(() => {
  store = mockStore({
    employees: [],
  });

  // Mock the dispatch function
  store.dispatch = jest.fn();
});

test("renders the form and submits the data", () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  // Fill out the form
  fireEvent.change(screen.getByPlaceholderText(/First Name/i), {
    target: { value: "John" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Last Name/i), {
    target: { value: "Doe" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Street/i), {
    target: { value: "123 Main St" },
  });
  fireEvent.change(screen.getByPlaceholderText(/City/i), {
    target: { value: "Anytown" },
  });
  fireEvent.change(screen.getByPlaceholderText(/Zip Code/i), {
    target: { value: "12345" },
  });
  fireEvent.change(screen.getByLabelText(/Date of Birth/i), {
    target: { value: "2000-01-01" },
  });
  fireEvent.change(screen.getByLabelText(/Start Date/i), {
    target: { value: "2022-01-01" },
  });
  fireEvent.change(screen.getByLabelText(/State/i), {
    target: { value: "CA" },
  });
  fireEvent.change(screen.getByLabelText(/Department/i), {
    target: { value: "Engineering" },
  });

  // Submit the form
  fireEvent.click(screen.getByText(/Submit/i));

  // Check if the dispatch function was called
  expect(store.dispatch).toHaveBeenCalledTimes(1);
  expect(store.dispatch).toHaveBeenCalledWith(
    addEmployee({
      firstName: "John",
      lastName: "Doe",
      dateOfBirth: "2000-01-01",
      startDate: "2022-01-01",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      department: "Engineering",
    })
  );

  // Check if the modal is visible
  expect(screen.getByText(/Employee Created/i)).toBeVisible();
});

test("closes the modal when the close button is clicked", () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );

  // Submit the form to show the modal
  fireEvent.click(screen.getByText(/Submit/i));

  // Check if the modal is visible
  expect(screen.getByText(/Employee Created/i)).toBeVisible();

  // Close the modal
  fireEvent.click(screen.getByText(/Close/i));

  // Check if the modal is no longer visible
  expect(screen.queryByText(/Employee Created/i)).not.toBeInTheDocument();
});
