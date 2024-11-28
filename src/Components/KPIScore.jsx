import React from "react";

const KPIScore = () => {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h3 className="text-lg font-bold text-gray-700 mb-4">
        Target Date importance Mandatory Score
      </h3>
      {/* <ul className="space-y-2">
          <li>A- Divisional KPIs = 25 (100%)</li>
          <li>B- Departmental KPIs = 40 (100%)</li>
          <li>C- Self KPIs = 30 (100%)</li>
        </ul> */}
      {/* <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Divisional KPIs(100%)</th>
            <th className="p-2 border">Departmental KPIs(100%)</th>
            <th className="p-2 border">Self KPIs(100%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border text-center">25</td>
            <td className="p-2 border text-center">40</td>
            <td className="p-2 border text-center">30</td>
          </tr>
        </tbody>
      </table> */}
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">A - Divisional Criteria</th>
            <th className="p-2 border">Divisional KPIs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border text-left">Division Target 01</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">2</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Division Target 02</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">1</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Division Target 03</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">3</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
        </tbody>
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">B - Departmental Criteria</th>
            <th className="p-2 border">Departmental KPIs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border text-left">Department Target 01</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">1</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">20</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Department Target 02</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">1</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Department Target 03</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">1</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
        </tbody>
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">C - Self Target Criteria</th>
            <th className="p-2 border">Self KPIs</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border text-left">Self Target 01</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">0</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Self Target 02</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">0</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Self Target 03</td>
            <td className="p-2 border text-left">12/31/2024</td>
            <td className="p-2 border text-center">0</td>
            <td className="p-2 border text-center">Yes</td>
            <td className="p-2 border text-center">10</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4 font-semibold">Total KPI Score = 100</p>
    </div>
  );
};

export default KPIScore;
