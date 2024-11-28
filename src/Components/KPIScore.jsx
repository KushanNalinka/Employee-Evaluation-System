import React from 'react'

const KPIScore = () => {
    return (
      <div className="bg-white shadow p-4 rounded mb-4">
        <h3 className="text-lg font-bold text-gray-700 mb-4">KPI Score</h3>
        {/* <ul className="space-y-2">
          <li>A- Divisional KPIs = 25 (100%)</li>
          <li>B- Departmental KPIs = 40 (100%)</li>
          <li>C- Self KPIs = 30 (100%)</li>
        </ul> */}
         <table className="table-auto w-full border">
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
        </table>


        {/* <p className="mt-4 font-semibold">
          Total KPI Score = (40%*A + 40%*B + 20%*C)/3
        </p> */}
      </div>
    );
  };
  

export default KPIScore
  