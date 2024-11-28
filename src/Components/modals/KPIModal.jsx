import React from "react";

const KPIModal = ({ closePopup, toggleModal }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div
      className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]"
      onClick={toggleModal}
    >
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
        onClick={closePopup}
      >
        &times;
      </button>

      {/* Modal Title */}
      <h2 className="text-xl font-bold mb-6">KPI</h2>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Goal Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Target Date
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Importance
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Mandatory
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Weightage (%)
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                goal: "Streamline and improve Learning and Development Process",
                date: "31/12/2024",
                importance: 0,
                mandatory: "Yes",
                weightage: "20.00",
              },
              {
                goal: "Smooth functioning of Performance Management System",
                date: "31/12/2024",
                importance: 0,
                mandatory: "Yes",
                weightage: "20.00",
              },
              {
                goal: "Ensure effectiveness of recruitment and onboarding process",
                date: "31/12/2024",
                importance: 0,
                mandatory: "Yes",
                weightage: "20.00",
              },
              {
                goal: "Streamline onboarding process",
                date: "31/12/2024",
                importance: 0,
                mandatory: "Yes",
                weightage: "20.00",
              },
              {
                goal: "Employee engagement, recognition and employee satisfaction survey",
                date: "31/12/2024",
                importance: 0,
                mandatory: "Yes",
                weightage: "20.00",
              },
            ].map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.goal}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.date}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.importance}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.mandatory}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.weightage}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Bottom Close Button */}
      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded"
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
);

export default KPIModal;
