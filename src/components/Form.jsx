import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addEmployee } from "../slices/employeesSlice";
import { states, departments } from "../assets/data/state";
import { Modal } from "modal-react-loganb";

export default function Form() {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    street: "",
    city: "",
    state: states[0].abbreviation,
    zipCode: "",
    department: departments[0],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));
    setIsModalVisible(true);

    // Optionally, reset the form
    // setFormData({
    //   firstName: "",
    //   lastName: "",
    //   dateOfBirth: "",
    //   startDate: "",
    //   street: "",
    //   city: "",
    //   state: states[0].abbreviation,
    //   zipCode: "",
    //   department: departments[0],
    // });
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                placeholder="First Name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label
                htmlFor="dateOfBirth"
                className="block text-sm font-medium text-gray-700"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div>
              <label
                htmlFor="startDate"
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id="startDate"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="street"
                className="block text-sm font-medium text-gray-700"
              >
                Street
              </label>
              <input
                type="text"
                id="street"
                name="street"
                value={formData.street}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                placeholder="Street"
              />
            </div>
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                placeholder="City"
              />
            </div>
            <div>
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
              >
                {states.map((state) => (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="zipCode"
                className="block text-sm font-medium text-gray-700"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded"
                placeholder="Zip Code"
              />
            </div>
          </div>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Department</h2>
          <div>
            <label
              htmlFor="department"
              className="block text-sm font-medium text-gray-700"
            >
              Department
            </label>
            <select
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded"
            >
              {departments.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-right">
          <button
            type="submit"
            className="bg-lime-600 text-white px-4 py-2 rounded hover:bg-lime-800"
          >
            Submit
          </button>
        </div>
      </form>
      <Modal isVisible={isModalVisible} onClose={handleCloseModal} />
    </div>
  );
}
