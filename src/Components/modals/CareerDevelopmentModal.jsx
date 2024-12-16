import React, { useState } from "react";

const CareerDevelopmentModal = ({ closePopup }) => {
  const [scores, setScores] = useState({
    "Professional Qualifications": 0,
    "Higher Education": 0,
    "Continuous Professional Development - CPD": 0,
  });

  const maxValues = {
    "Professional Qualifications": 1,
    "Higher Education": 1,
    "Continuous Professional Development - CPD": 3,
  };

  // Handle input changes and validate maximum scores
  const handleScoreChange = (area, value) => {
    const numericValue = parseInt(value, 10) || 0;
    const maxValue = maxValues[area];

    if (numericValue >= 0 && numericValue <= maxValue) {
      setScores({ ...scores, [area]: numericValue });
    } else if (numericValue > maxValue) {
      alert(`Maximum allowed score for "${area}" is ${maxValue}`);
    }
  };

  // Calculate the total score dynamically
  const totalScore = Object.values(scores).reduce((acc, score) => acc + score, 0);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white p-6 rounded shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-2 right-2 text-red-500 text-2xl font-bold focus:outline-none"
          onClick={closePopup}
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Career Development Score</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Area</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
                <th className="border border-gray-300 px-4 py-2 text-center">Score</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  area: "Professional Qualifications",
                  plan: (
                    <>
                      Become a chartered engineer by 2025 <br />
                      Complete Lean Six Sigma Black Belt by 2025 <br />
                      ECSL Registration
                    </>
                  ),
                },
                {
                  area: "Higher Education",
                  plan: "Complete a MSc or MBA by 2026",
                },
                {
                  area: "Continuous Professional Development - CPD",
                  plan: "Short course on Human Resource Development",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="border border-gray-300 px-4 py-2">{item.area}</td>
                  <td
                    className="border border-gray-300 px-4 py-2"
                    style={{ backgroundColor: "#fdf2e9" }} // Beige background
                  >
                    {item.plan}
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    <input
                      type="number"
                      className="w-full text-center border border-gray-300 rounded"
                      min="0"
                      max={maxValues[item.area]}
                      value={scores[item.area]}
                      onChange={(e) =>
                        handleScoreChange(item.area, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
              <tr>
                <td className="border border-gray-300 px-4 py-2 font-bold" colSpan={2}>
                  Total
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-300 font-bold">
                  {totalScore}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex mt-6">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
            Save
          </button>
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

export default CareerDevelopmentModal;
