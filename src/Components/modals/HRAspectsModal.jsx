import React, { useState } from "react";

const trainingData = [
  {
    id: 14,
    year: 2005,
    month: "January",
    course: "105042 - STRATEGIC MANAGEMENT & BUDGETARY CONTROL",
    status: "Completed",
    skill: "-",
  },
  {
    id: 15,
    year: 2005,
    month: "January",
    course: "105010 - LEADERSHIP SKILLS",
    status: "Completed",
    skill: "-",
  },
  {
    id: 16,
    year: 2004,
    month: "April",
    course: "107003 - FIRE FIGHTING & FIRE PREVENTION",
    status: "Not Completed",
    skill: "-",
  },
  {
    id: 17,
    year: 2004,
    month: "April",
    course: "105012 - MANAGEMENT DEVELOPMENT FOR ENGINEERS/MANAGERS",
    status: "Completed",
    skill: "-",
  },
  {
    id: 18,
    year: 2004,
    month: "August",
    course: "103001 - ADVANCED ENGLISH",
    status: "Completed",
    skill: "-",
  },
  {
    id: 19,
    year: 2004,
    month: "January",
    course: "105032 - INDUSTRIAL RELATIONS",
    status: "Completed",
    skill: "-",
  },
  {
    id: 20,
    year: 2002,
    month: "August",
    course: "202063 - BEATING STRESS, TENSION, AND THE BLUES",
    status: "Completed",
    skill: "-",
  },
  {
    id: 21,
    year: 2002,
    month: "March",
    course: "202004 - CHANGE OF ATTITUDES",
    status: "Completed",
    skill: "-",
  },
  {
    id: 22,
    year: 2002,
    month: "January",
    course: "202003 - ISO AWARENESS PROGRAMME",
    status: "Completed",
    skill: "-",
  },
];

const HRAspectsModal = ({ closePopup,toggleModal }) => {
  // Define state inside the component
  const [marks, setMarks] = useState({
    achievements: 0,
    people: 0,
    managerial: 0,
    adaptive: 0,
  });

  const calculateTotal = () => {
    return (
      marks.achievements + marks.people + marks.managerial + marks.adaptive
    );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMarks((prev) => ({
      ...prev,
      [name]: parseInt(value) || 0,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]" onClick={toggleModal}>
      <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold mb-6">HR Aspects</h2>
        <button
          className="text-red-500 text-2xl font-semibold"
          onClick={closePopup}
        >
          &times;
        </button>
      </div>


        {/* Attendance Summary Section */}
        <div className="p-4 space-y-6">
          {/* Attendance Summary Section */}

          {/* Attendance Summary Section */}

          {/* Attendance Summary */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md space-y-4">
            <h2 className="text-lg font-semibold">
              (B). ATTENDANCE SUMMARY (FROM: 2021-01-01 TO 2024-11-25)
            </h2>
            <div className="flex space-x-6">
              {/* Left Table */}
              <table className="table-auto border-collapse border border-gray-300 w-2/3">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-300 px-4 py-2 text-left">
                      Description
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Total
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Taken
                    </th>
                    <th className="border border-gray-300 px-4 py-2 text-center">
                      Balance
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Annual Leave
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      14
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      13.5
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      0.5
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Casual Leave
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      7
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      6.5
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      0.5
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">
                      Sick Leave
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      21
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      20.5
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      0.5
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Right Summary */}
              <div className="w-1/3 space-y-4">
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border border-gray-300 px-4 py-2 text-left">
                        Leave Type
                      </th>
                      <th className="border border-gray-300 px-4 py-2 text-center">
                        Days
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Nopay
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">
                        Not Entered
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center"></td>
                    </tr>
                  </tbody>
                </table>
                <div className="space-y-1">
                  <p>
                    <strong>Short leave Taken:</strong> 6
                  </p>
                  <p>
                    <strong>Late Occasions:</strong> 0
                  </p>
                  <p>
                    <strong>Extra Hours:</strong> 1181.00
                  </p>
                  <p>
                    <strong>Years in present grade:</strong>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Disciplinary Actions Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              (C). DISCIPLINARY ACTIONS / COMMENDATIONS (FROM: 2021-01-01 TO
              2024-11-22)
            </h2>
            <div className="space-y-6">
              {/* Commendations */}
              <div>
                <h3 className="font-semibold mb-2">Commendations</h3>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Incident
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        No data found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Offences */}
              <div>
                <h3 className="font-semibold mb-2">Offences</h3>
                <table className="table-auto border-collapse border border-gray-300 w-full">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2">#</th>
                      <th className="border border-gray-300 px-4 py-2">Date</th>
                      <th className="border border-gray-300 px-4 py-2">
                        Incident
                      </th>
                      <th className="border border-gray-300 px-4 py-2">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center border border-gray-300 px-4 py-2"
                      >
                        No data found.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Critical Incidents Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              (D). CRITICAL INCIDENTS (FROM: 2021-01-01 TO 2024-11-22)
            </h2>
            <div>
              {/* Critical Incidents Table */}
              <h3 className="font-semibold mb-2">Commendations</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Evaluation
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      colSpan="4"
                      className="text-center border border-gray-300 px-4 py-2"
                    >
                      No data found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* New Sections */}
        <div className="space-y-6">
          {/* Evaluation - Performance Criteria Section */}
          {/* Evaluation - Performance Criteria Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">
                (E). EVALUATION - PERFORMANCE CRITERIA <br />
                (To be evaluated by the Section)
              </h2>
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Increment Allocation
              </button>
            </div>
            <div className="space-y-4 mt-4">
              {/* List of criteria */}
              <ul className="list-disc pl-6 space-y-2">
                <li className="bg-gray-200 p-2 rounded">
                  A. ACHIEVEMENT ORIENTATION
                </li>
                <li className="bg-gray-200 p-2 rounded">
                  B. PEOPLE ORIENTATION
                </li>
                <li className="bg-gray-200 p-2 rounded">
                  C. MANAGERIAL ORIENTATION
                </li>
                <li className="bg-gray-200 p-2 rounded">
                  D. ADAPTIVE ORIENTATION
                </li>
              </ul>

              {/* Input fields for marks */}
              {/* Input fields for marks */}
              <div className="grid grid-cols-2 gap-4 items-center">
                <div>
                  <label className="block font-semibold mb-1">
                    Achievements Orientation
                  </label>
                  <input
                    type="number"
                    name="achievements"
                    value={marks.achievements}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    People Orientation
                  </label>
                  <input
                    type="number"
                    name="people"
                    value={marks.people}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Managerial Orientation
                  </label>
                  <input
                    type="number"
                    name="managerial"
                    value={marks.managerial}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block font-semibold mb-1">
                    Adaptive Orientation
                  </label>
                  <input
                    type="number"
                    name="adaptive"
                    value={marks.adaptive}
                    onChange={handleInputChange}
                    className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="text-right font-semibold text-blue-600 mt-4">
                Total Marks (Out of 100): {calculateTotal()}
              </div>
            </div>
          </div>
          {/* Evaluation discussed with the Employee Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">
                Evaluation discussed with the Employee:
              </h2>
              <div className="flex items-center space-x-4">
                <label>
                  <input
                    type="radio"
                    name="evaluation"
                    value="yes"
                    className="mr-2"
                  />
                  Yes
                </label>
                <label>
                  <input
                    type="radio"
                    name="evaluation"
                    value="no"
                    className="mr-2"
                  />
                  No
                </label>
              </div>
            </div>
            <div className="mt-4">
              <label className="block font-semibold mb-1">
                Recommended Increments:
              </label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>
          {/* Commendation and Recommendation Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              Commendation and Recommendation
            </h2>
            <div className="space-y-6">
              {/* Special Comments by Department Head */}
              <div>
                <label className="block font-semibold mb-1">
                  Special Comments by Department Head
                </label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
                <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Departmental Head
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Promotion Recommended
                  </label>
                </div>
              </div>
              {/* Recommendation by Division Head */}
              <div>
                <label className="block font-semibold mb-1">
                  Recommendation by Division Head
                </label>
                <textarea
                  rows="3"
                  className="w-full border border-gray-300 rounded p-2"
                ></textarea>
                <div className="flex items-center space-x-4 mt-2">
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Division Head
                  </label>
                  <label>
                    <input type="checkbox" className="mr-2" />
                    Promotion recommended and approved
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Special Evaluation Section */}
        <div className="bg-gray-100  rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white bg-blue-600 p-2 uppercase">
            Special Evaluation
          </h2>
          {/* Recommendation */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              * Do you recommend the above employee to be granted with "Special
              Additional" salary increments with regard to any exceptional
              performance/characteristics demonstrated by him/her?
            </label>
            <div className="flex items-center space-x-4">
              <label>
                <input
                  type="radio"
                  name="special_increment"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  name="special_increment"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          {/* Number of increments */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">
              If yes, Number of special additional increments recommended:
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="increment_number"
                  value="1"
                  className="mr-2"
                />
                1
              </label>
              <label>
                <input
                  type="radio"
                  name="increment_number"
                  value="2"
                  className="mr-2"
                />
                2
              </label>
            </div>
          </div>
          {/* Justification */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Justification</label>
            <textarea
              rows="3"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Please justify your recommendation"
            ></textarea>
          </div>
          {/* Justification categories */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Your justification mainly falls under:
            </label>
            <div className="grid grid-cols-2 gap-4">
              <label>
                <input type="checkbox" className="mr-2" />
                Great Commitment Work
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Outstanding Contribution
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Cost Saving
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Unique Feat
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Important Suggestion
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Customer Satisfaction
              </label>
              <label>
                <input type="checkbox" className="mr-2" />
                Innovation
              </label>
              <label className="col-span-2">
                <input type="checkbox" className="mr-2" />
                Other (Please specify):
                <textarea
                  rows="2"
                  className="w-full border border-gray-300 rounded mt-2 p-2"
                  placeholder="Specify other reasons..."
                ></textarea>
              </label>
            </div>
          </div>
          {/* Recommended by */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Recommended By:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter recommender's name"
            />
          </div>
          {/* Total increments */}
          <div className="mb-4">
            <label className="block font-semibold mb-1">Total Increments:</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded p-2"
              placeholder="Enter total increments"
            />
          </div>
          {/* Department Head Recommendation */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Recommendation of Departmental Head
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="dept_head_recommendation"
                  value="recommended"
                  className="mr-2"
                />
                Special Increments Recommended
              </label>
              <label>
                <input
                  type="radio"
                  name="dept_head_recommendation"
                  value="not_recommended"
                  className="mr-2"
                />
                Special Increments Not Recommended
              </label>
            </div>
            <textarea
              rows="2"
              className="w-full border border-gray-300 rounded mt-2 p-2"
              placeholder="Add comments (if any)..."
            ></textarea>
          </div>
          {/* Division Head Approval */}
          <div className="mb-4">
            <label className="block font-semibold mb-2">
              Approval of Division Head
            </label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="division_head_approval"
                  value="approved"
                  className="mr-2"
                />
                Special Increments Approved
              </label>
              <label>
                <input
                  type="radio"
                  name="division_head_approval"
                  value="not_approved"
                  className="mr-2"
                />
                Special Increments Not Approved
              </label>
            </div>
            <textarea
              rows="2"
              className="w-full border border-gray-300 rounded mt-2 p-2"
              placeholder="Add comments (if any)..."
            ></textarea>
          </div>
        </div>
        <div className="p-8 bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Training Attended</h2>
            <div className="overflow-x-auto">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Year</th>
                    <th className="border border-gray-300 px-4 py-2">Month</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Course Name
                    </th>
                    <th className="border border-gray-300 px-4 py-2">Status</th>
                    <th className="border border-gray-300 px-4 py-2">Skill</th>
                  </tr>
                </thead>
                <tbody>
                  {trainingData.map((row) => (
                    <tr
                      key={row.id}
                      className={`${
                        row.status === "Not Completed" ? "bg-red-100" : ""
                      }`}
                    >
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.id}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.year}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.month}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        {row.course}
                      </td>
                      <td
                        className={`border border-gray-300 px-4 py-2 text-center ${
                          row.status === "Not Completed"
                            ? "text-red-600 font-semibold"
                            : "text-green-600 font-semibold"
                        }`}
                      >
                        {row.status}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row.skill}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* Training needs identification */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Training needs Identification</h3>
              <p className="text-gray-600 mb-4">
                Please click the button to select courses
              </p>
              <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600">
                Course details
              </button>
            </div>
            {/* Course selection */}
            <div className="mt-6">
              <table className="w-full table-auto border-collapse border border-gray-300">
                <thead className="bg-gray-200">
                  <tr>
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">
                      Course Name
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="border border-gray-300 px-4 py-2 text-center"
                      colSpan="2"
                    >
                      Please select courses
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* Additional training requirement */}
            <div className="mt-6">
              <h3 className="font-semibold mb-2">Any other training requirement</h3>
              <textarea
                className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                rows="4"
                placeholder="Enter details here..."
              ></textarea>
            </div>

            {/* Additional input */}
            <div className="mt-4 flex space-x-4">
              <div>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox text-blue-600"
                  />
                  <span className="ml-2">Division Head</span>
                </label>
              </div>
              <div className="flex-grow">
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded p-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  placeholder="Enter details"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Close Button */}
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

export default HRAspectsModal;
