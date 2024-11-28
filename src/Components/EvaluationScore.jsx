import React from "react";

const EvaluationScore = () => {
  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h3 className="text-lg font-bold text-gray-700 mb-4">Evaluation Score</h3>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border"></th>
            <th className="p-2 border">KPI</th>
            <th className="p-2 border">Competencies</th>
            <th className="p-2 border">Career Development</th>
            <th className="p-2 border">HR Aspects</th>
            <th className="p-2 border">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border text-center">Allocations</td>
            <td className="p-2 border text-center">40%</td>
            <td className="p-2 border text-center">40%</td>
            <td className="p-2 border text-center">5%</td>
            <td className="p-2 border text-center">15%</td>
            <td className="p-2 border text-center">100</td>
          </tr>
          <tr>
            <td className="p-2 border text-center">Actual</td>
            <td className="p-2 border text-center">24</td>
            <td className="p-2 border text-center">20</td>
            <td className="p-2 border text-center">2</td>
            <td className="p-2 border text-center">8</td>
            <td className="p-2 border text-center">54</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EvaluationScore;
