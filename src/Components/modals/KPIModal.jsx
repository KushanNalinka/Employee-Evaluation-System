import React, { useState } from "react";

const KPIModal = ({ closePopup, toggleModal }) => {
  // Define goal options for each criteria
  const goalOptions = {
    "Divisional Criteria": [
      "Adherence to the cumulative Overnight Budget",
      "Adherence to the expected Normal Hours: OT Hours Ratio",
      "Achievement of the targeted Value Addition",
    ],
    "Departmental Criteria": [
      "ISO functional objectives achievement",
      "Variance of the project estimated budget (SR, NC, HE)",
      "Adherence to the expected Normal Hours: OT Hours Ratio",
      "Achievement of the SR Performance factor",
      "Contractual delivery of NC vessel on time",
      "Average customer feedback score",
      "Adherence to the tomorrow planning process",
      "Accident occurrence rate (No of Accidents/No of Employees)",
      "No of near misses reported",
      "No of cases reported tarnishing industrial harmony",
      "Number of new clients or markets entered",
    ],
    "Self Target Criteria": [
      "Execution of a project to reduce wastage and unnecessary expenditure",
      "Process improvements or innovations",
      "Engage in employee training or development activity",
      "Learning of a new skill or engage with job enriching activity",
    ],
  };

  // State for rows
  const [rows, setRows] = useState(
    Array.from({ length: 18 }, (_, index) => ({
      criteria:
        index % 3 === 0
          ? "Divisional Criteria"
          : index % 3 === 1
          ? "Departmental Criteria"
          : "Self Target Criteria",
      goal: "",
      date: "31/12/2024",
      importance: 0,
      mandatory: "Yes",
      weightage: "20.00",
      score: "50",
    }))
  );

  // Handle changes to the "criteria" dropdown
  const handleCriteriaChange = (index, newCriteria) => {
    const updatedRows = [...rows];
    updatedRows[index].criteria = newCriteria;
    updatedRows[index].goal = ""; // Reset the goal when criteria changes
    setRows(updatedRows);
  };

  // Handle changes to the "goal" dropdown
  const handleGoalChange = (index, newGoal) => {
    const updatedRows = [...rows];
    updatedRows[index].goal = newGoal;
    setRows(updatedRows);
  };

  return (
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
                  Criteria
                </th>
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
                <th className="border border-gray-300 px-4 py-2 text-left">
                  Full Score
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      value={row.criteria}
                      onChange={(e) =>
                        handleCriteriaChange(index, e.target.value)
                      }
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none"
                    >
                      <option value="Divisional Criteria">
                        Divisional Criteria
                      </option>
                      <option value="Departmental Criteria">
                        Departmental Criteria
                      </option>
                      <option value="Self Target Criteria">
                        Self Target Criteria
                      </option>
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <select
                      value={row.goal}
                      onChange={(e) => handleGoalChange(index, e.target.value)}
                      className="w-full px-2 py-1 border border-gray-300 rounded focus:outline-none"
                    >
                      <option value="">Select Goal</option>
                      {goalOptions[row.criteria].map((goal, i) => (
                        <option key={i} value={goal}>
                          {goal}
                        </option>
                      ))}
                    </select>
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.date}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.importance}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.mandatory}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.weightage}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {row.score}
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
};

export default KPIModal;
