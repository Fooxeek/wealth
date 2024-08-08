// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import Modal from "./Modal";

// test("renders the modal when isVisible is true", () => {
//   render(<Modal isVisible={true} onClose={jest.fn()} />);

//   // Check if the modal content is visible
//   expect(screen.getByText(/Employee Created/i)).toBeVisible();
//   expect(
//     screen.getByText(/The employee has been successfully created./i)
//   ).toBeVisible();
//   expect(screen.getByText(/Close/i)).toBeVisible();
// });

// test("does not render the modal when isVisible is false", () => {
//   render(<Modal isVisible={false} onClose={jest.fn()} />);

//   // Check if the modal content is not in the document
//   expect(screen.queryByText(/Employee Created/i)).not.toBeInTheDocument();
// });

// test("calls onClose when the close button is clicked", () => {
//   const onCloseMock = jest.fn();
//   render(<Modal isVisible={true} onClose={onCloseMock} />);

//   // Click the close button
//   fireEvent.click(screen.getByTestId("button-close"));

//   // Check if the onClose function was called
//   expect(onCloseMock).toHaveBeenCalledTimes(1);
// });
