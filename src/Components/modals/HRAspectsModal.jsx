import React from 'react';

const HRAspectsModal = ({ closePopup }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-4xl overflow-y-auto max-h-[90vh]">
      <h2 className="text-xl font-bold mb-6 text-center">HR Aspects Popup</h2>

      {/* Attendance Summary Section */}
      <div className="p-4 space-y-6">
        {/* Attendance Summary */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">
            (B). ATTENDANCE SUMMARY (FROM: 2021-01-01 TO 2024-11-22)
          </h2>
          <div className="flex space-x-6">
            {/* Left Table */}
            <table className="table-auto border-collapse border border-gray-300 w-1/2">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">Description</th>
                  <th className="border border-gray-300 px-4 py-2">Total</th>
                  <th className="border border-gray-300 px-4 py-2">Taken</th>
                  <th className="border border-gray-300 px-4 py-2">Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Annual Leave</td>
                  <td className="border border-gray-300 px-4 py-2">14</td>
                  <td className="border border-gray-300 px-4 py-2">14</td>
                  <td className="border border-gray-300 px-4 py-2">0</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Casual Leave</td>
                  <td className="border border-gray-300 px-4 py-2">7</td>
                  <td className="border border-gray-300 px-4 py-2">6</td>
                  <td className="border border-gray-300 px-4 py-2">1</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sick Leave</td>
                  <td className="border border-gray-300 px-4 py-2">21</td>
                  <td className="border border-gray-300 px-4 py-2">4</td>
                  <td className="border border-gray-300 px-4 py-2">17</td>
                </tr>
              </tbody>
            </table>
            {/* Right Summary */}
            <div className="flex-1 space-y-2">
              <p className="border-b pb-2">
                <strong>Leave Type: </strong> Nopay, Not Entered
              </p>
              <p>
                <strong>Short Leave Taken: </strong> 22
              </p>
              <p>
                <strong>Late Occasions: </strong> 0
              </p>
              <p>
                <strong>Extra Hours: </strong> 15.00
              </p>
              <p>
                <strong>Years in Present Grade: </strong>
              </p>
            </div>
          </div>
        </div>

        {/* Disciplinary Actions Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">
            (C). DISCIPLINARY ACTIONS / COMMENDATIONS (FROM: 2021-01-01 TO
            2024-11-22)
          </h2>
          <div className="space-y-6">
            {/* Commendations */}
            <div>
              <h3 className="font-bold mb-2">Commendations</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">Incident</th>
                    <th className="border border-gray-300 px-4 py-2">Action</th>
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
              <h3 className="font-bold mb-2">Offences</h3>
              <table className="table-auto border-collapse border border-gray-300 w-full">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2">#</th>
                    <th className="border border-gray-300 px-4 py-2">Date</th>
                    <th className="border border-gray-300 px-4 py-2">Incident</th>
                    <th className="border border-gray-300 px-4 py-2">Action</th>
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
          <h2 className="text-lg font-bold mb-4">
            (D). CRITICAL INCIDENTS (FROM: 2021-01-01 TO 2024-11-22)
          </h2>
          <div>
            {/* Critical Incidents Table */}
            <h3 className="font-bold mb-2">Commendations</h3>
            <table className="table-auto border-collapse border border-gray-300 w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">#</th>
                  <th className="border border-gray-300 px-4 py-2">Date</th>
                  <th className="border border-gray-300 px-4 py-2">Evaluation</th>
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
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">
            (E). EVALUATION - PERFORMANCE CRITERIA (To be evaluated by the Section)
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <label className="block font-bold mb-1">Achievements Orientation</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded p-2"
                  defaultValue={0}
                />
              </div>
              <div>
                <label className="block font-bold mb-1">People Orientation</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded p-2"
                  defaultValue={0}
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Managerial Orientation</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded p-2"
                  defaultValue={0}
                />
              </div>
              <div>
                <label className="block font-bold mb-1">Adaptive Orientation</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 rounded p-2"
                  defaultValue={0}
                />
              </div>
            </div>
            <div className="text-right font-bold text-blue-600">
              Total Marks (Out of 100): 0
            </div>
          </div>
        </div>

        {/* Evaluation discussed with the Employee Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Evaluation discussed with the Employee:</h2>
          <div className="flex items-center space-x-4 mb-4">
            <label>
              <input type="radio" name="evaluation" value="yes" className="mr-2" />
              Yes
            </label>
            <label>
              <input type="radio" name="evaluation" value="no" className="mr-2" />
              No
            </label>
          </div>
          <div>
            <label className="block font-bold mb-1">Recommended Increments:</label>
            <input
              type="text"
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        {/* Commendation and Recommendation Section */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Commendation and Recommendation</h2>
          <div className="space-y-6">
            {/* Special Comments by Department Head */}
            <div>
              <label className="block font-bold mb-1">
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
              <label className="block font-bold mb-1">
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

      <br/>

      {/* Special Evaluation Section */}
      <div className="bg-gray-100  rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 text-white bg-blue-600 p-2 uppercase">
  Special Evaluation
</h2>


        {/* Recommendation */}
        <div className="mb-4">
          <label className="block font-bold mb-1">
            * Do you recommend the above employee to be granted with "Special
            Additional" salary increments with regard to any exceptional
            performance/characteristics demonstrated by him/her?
          </label>
          <div className="flex items-center space-x-4">
            <label>
              <input type="radio" name="special_increment" value="yes" className="mr-2" />
              Yes
            </label>
            <label>
              <input type="radio" name="special_increment" value="no" className="mr-2" />
              No
            </label>
          </div>
        </div>

        {/* Number of increments */}
        <div className="mb-4">
          <label className="block font-bold mb-1">If yes, Number of special additional increments recommended:</label>
          <div className="flex space-x-4">
            <label>
              <input type="radio" name="increment_number" value="1" className="mr-2" />
              1
            </label>
            <label>
              <input type="radio" name="increment_number" value="2" className="mr-2" />
              2
            </label>
          </div>
        </div>

        {/* Justification */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Justification</label>
          <textarea
            rows="3"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Please justify your recommendation"
          ></textarea>
        </div>

        {/* Justification categories */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Your justification mainly falls under:</label>
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
          <label className="block font-bold mb-1">Recommended By:</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter recommender's name"
          />
        </div>

        {/* Total increments */}
        <div className="mb-4">
          <label className="block font-bold mb-1">Total Increments:</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Enter total increments"
          />
        </div>

        {/* Department Head Recommendation */}
        <div className="mb-4">
          <label className="block font-bold mb-2">Recommendation of Departmental Head</label>
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
          <label className="block font-bold mb-2">Approval of Division Head</label>
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


      {/* Close Button */}
      <button
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded block mx-auto"
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
);

export default HRAspectsModal;
