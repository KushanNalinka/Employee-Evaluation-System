import React from 'react'

const KPIScore = () => {
    return (
      <div className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-lg font-bold text-gray-700 mb-4">KPI Score</h3>
        <ul className="space-y-2">
          <li>A- Divisional KPIs = 25 (100%)</li>
          <li>B- Departmental KPIs = 40 (100%)</li>
          <li>C- Self KPIs = 30 (100%)</li>
        </ul>
        <p className="mt-4 font-semibold">
          Total KPI Score = (40%*A + 40%*B + 20%*C)/3
        </p>
      </div>
    );
  };
  

export default KPIScore
  