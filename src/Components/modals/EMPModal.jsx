import React from "react";

const EMPModal = ({ isModalOpen, toggleModal }) => {
  if (!isModalOpen) return null; // Only render when the modal is open
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={toggleModal}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-7xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex justify-between items-center pb-4 border-b">
          <h2 className="text-2xl font-bold text-green-700">
            Executive Employee Data
          </h2>
          <button
            className="text-red-500 text-2xl font-bold"
            onClick={toggleModal}
          >
            &times;
          </button>
        </div>

        {/* Search Filters */}
        <div className="p-4 grid grid-cols-2 gap-6">
          {/* First Row */}
          <div>
            <label className="font-medium text-gray-700 block mb-1">
              Division
            </label>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>Division 1</option>
              <option>Division 2</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-1">
              Location
            </label>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>Location 1</option>
              <option>Location 2</option>
            </select>
          </div>

          {/* Second Row */}
          <div>
            <label className="font-medium text-gray-700 block mb-1">
              Status
            </label>
            <select className="w-full p-2 border rounded shadow-sm">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
          <div>
            <label className="font-medium text-gray-700 block mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter Name"
              className="w-full p-2 border rounded shadow-sm"
            />
          </div>
        </div>

        {/* Color Labels */}
        <div className="mt-4 flex justify-start items-center space-x-6">
          {/* Align Load Data and Clear buttons to the right */}
          <div className="mt-1 flex justify-end gap-2 w-full">
            <button
              className="bg-green-500 text-white px-3 py-3 rounded"
              onClick={() => alert("Load Data")}
            >
              Load Data
            </button>
            <button
              className="bg-red-500 text-white px-6 py-3 rounded"
              onClick={() => alert("Clear Data")}
            >
              Clear
            </button>
          </div>
        </div>
        <div className="mt-4 flex justify-start items-center space-x-6">
          <span className="px-3 py-1 text-xs rounded bg-red-500 text-white">
            Pending
          </span>
          <span className="px-3 py-1 text-xs rounded bg-yellow-500 text-white">
            Incomplete/Preparation complete
          </span>
          <span
            className="px-3 py-1 text-xs rounded text-white"
            style={{ backgroundColor: "#17a2b8" }}
          >
            Checking complete
          </span>
          <span
            className="px-3 py-1 text-xs rounded text-white"
            style={{ backgroundColor: "rgb(158 243 158)" }}
          >
            Authorized
          </span>
          <span className="px-3 py-1 text-xs rounded bg-green-500 text-white">
            Accept By HRD
          </span>
        </div>

        {/* Table */}
        <div className="mt-6 overflow-y-auto max-h-80">
          {" "}
          {/* Set max-height and enable scrolling */}
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-[#1e90ff] text-white text-left text-sm font-semibold">
                <th className="border border-gray-300 px-6 py-3">SERVICE NO</th>
                <th className="border border-gray-300 px-6 py-3">NAME</th>
                <th className="border border-gray-300 px-6 py-3">
                  EVALUATION STATUS
                </th>
                <th className="border border-gray-300 px-6 py-3">MARKS</th>
                <th className="border border-gray-300 px-6 py-3">PROMOTION</th>
                <th className="border border-gray-300 px-6 py-3">INCRE.</th>
                <th className="border border-gray-300 px-6 py-3">SP. INCRE</th>
                <th className="border border-gray-300 px-6 py-3">EX. HRS</th>
                <th className="border border-gray-300 px-6 py-3">ANNUAL</th>
                <th className="border border-gray-300 px-6 py-3">CASUAL</th>
                <th className="border border-gray-300 px-6 py-3">SICK</th>
                <th className="border border-gray-300 px-6 py-3">
                  SHORT LEAVE
                </th>
                <th className="border border-gray-300 px-6 py-3">LATE</th>
                <th className="border border-gray-300 px-6 py-3">ACTION</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-[#add8e6]">
                <td className="border border-gray-300 px-6 py-4">0002014</td>
                <td className="border border-gray-300 px-6 py-4">John Doe</td>
                <td className="border border-gray-300 px-6 py-4">Pending</td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4">15.0</td>
                <td className="border border-gray-300 px-6 py-4">14.0</td>
                <td className="border border-gray-300 px-6 py-4">6.0</td>
                <td className="border border-gray-300 px-6 py-4">4.0</td>
                <td className="border border-gray-300 px-6 py-4">22.0</td>
                <td className="border border-gray-300 px-6 py-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Select
                  </button>
                </td>
              </tr>
              <tr className="bg-[#add8e6]">
                <td className="border border-gray-300 px-6 py-4">0002014</td>
                <td className="border border-gray-300 px-6 py-4">John Doe</td>
                <td className="border border-gray-300 px-6 py-4">Pending</td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4">15.0</td>
                <td className="border border-gray-300 px-6 py-4">14.0</td>
                <td className="border border-gray-300 px-6 py-4">6.0</td>
                <td className="border border-gray-300 px-6 py-4">4.0</td>
                <td className="border border-gray-300 px-6 py-4">22.0</td>
                <td className="border border-gray-300 px-6 py-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Select
                  </button>
                </td>
              </tr>
              <tr className="bg-[#add8e6]">
                <td className="border border-gray-300 px-6 py-4">0002014</td>
                <td className="border border-gray-300 px-6 py-4">John Doe</td>
                <td className="border border-gray-300 px-6 py-4">Pending</td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4"></td>
                <td className="border border-gray-300 px-6 py-4">15.0</td>
                <td className="border border-gray-300 px-6 py-4">14.0</td>
                <td className="border border-gray-300 px-6 py-4">6.0</td>
                <td className="border border-gray-300 px-6 py-4">4.0</td>
                <td className="border border-gray-300 px-6 py-4">22.0</td>
                <td className="border border-gray-300 px-6 py-4">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded">
                    Select
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EMPModal;
