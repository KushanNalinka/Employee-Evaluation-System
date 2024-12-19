import React from "react";

const KPIScore = () => {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h3 className="text-lg font-bold text-gray-700 mb-4">
        KPI Score
      </h3>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">KPIs</th>
            <th className="p-2 border">Scores (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border text-left">Division KPIs</td>
            <td className="p-2 border text-left">25</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Departmental KPIs</td>
            <td className="p-2 border text-left">40</td>
          </tr>
          <tr>
            <td className="p-2 border text-left">Self KPIs</td>
            <td className="p-2 border text-left">30</td>
          </tr>
        </tbody>
      </table>

      <p className="mt-4 font-semibold">Total KPI Score = 100</p>
    </div>
  );
};

export default KPIScore;
