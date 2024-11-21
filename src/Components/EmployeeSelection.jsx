import React from 'react';

import image1 from '../assets/images/executive.914c1c1e735aaecabb8f.png'

const EmployeeSelection = () => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-4 flex items-center justify-between">
      {/* Left Section */}
      <div>
        <h2 className="text-xl font-semibold text-blue-700 mb-2">
          Evaluating Employee: <span className="font-bold">0002014 - Daminda P.H.S.</span>
        </h2>
        <h3 className="text-green-600 font-semibold mb-4">Current Evaluation Status - Pending</h3>
        <div className="grid grid-cols-2 gap-4">
          {/* Select an Employee */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Select an Employee:</label>
            <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600">
              Click here
            </button>
          </div>

          {/* Evaluation Status */}
          <br/>
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Evaluation Status:</label>
            <select className="border p-2 rounded w-40">
              <option>Incomplete</option>
              <option>Complete</option>
            </select>
          </div>
          <br/>

          {/* Category */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Category:</label>
            <select className="border p-2 rounded w-40">
              <option>Executive</option>
              <option>Non-Executive</option>
            </select>
          </div>

          <br/>
          {/* Period and Year */}
          <div className="flex items-center gap-2">
            <label className="font-medium text-gray-700">Period:</label>
            <select className="border p-2 rounded w-32">
              <option>Year end</option>
              <option>Mid year</option>
            </select>

            <label className="font-medium text-gray-700">Year:</label>
            <select className="border p-2 rounded w-24">
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center">
        <img
          src={image1}
          alt="Employee"
          className="rounded-full border border-gray-300 shadow"
        />
      </div>
    </div>
  );
};

export default EmployeeSelection;
