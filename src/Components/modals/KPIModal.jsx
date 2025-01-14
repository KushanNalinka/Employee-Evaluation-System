import React from "react";

const KPIModal = ({ closePopup }) => {
  // Goal Titles for each Criteria
  const goals = {
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

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-6xl overflow-y-auto max-h-[90vh]">
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
                  Full Score
                </th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(goals).map(([criteria, goalTitles]) => {
                return (
                  <React.Fragment key={criteria}>
                    {goalTitles.map((goal, index) => (
                      <tr
                        key={`${criteria}-${index}`}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        {index === 0 && (
                          <td
                            rowSpan={goalTitles.length}
                            className="border border-gray-300 px-4 py-2 align-top font-semibold"
                          >
                            {criteria}
                          </td>
                        )}
                        <td className="border border-gray-300 px-4 py-2">
                          {goal}
                        </td>
                        <td className="border border-gray-300 px-4 py-2">50</td>
                      </tr>
                    ))}
                  </React.Fragment>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Bottom Buttons */}
        <div className="flex mt-6">
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button> */}
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={closePopup}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default KPIModal;
