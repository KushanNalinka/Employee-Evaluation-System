import React from "react";

const CareerDevelopmentModal = ({ closePopup }) => (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="relative bg-white p-6 rounded shadow-lg">
      {" "}
      {/* Added 'relative' */}
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
              <th className="border border-gray-300 px-4 py-2 text-left">
                Area
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Plan
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Score
              </th>
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
                score: 1,
              },
              {
                area: "Higher Education",
                plan: "Complete a MSc or MBA by 2026",
                score: 1,
              },
              {
                area: "Continuous Professional Development - CPD",
                plan: "Short course on Human Resource Development",
                score: 3,
              },
            ].map((item, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="border border-gray-300 px-4 py-2">
                  {item.area}
                </td>
                <td
                  className="border border-gray-300 px-4 py-2"
                  style={{ backgroundColor: "#fdf2e9" }} // Beige background color
                >
                  {item.plan}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  {item.score}
                </td>
              </tr>
            ))}
            <tr>
              <td
                className="border border-gray-300 px-4 py-2 font-bold"
                colSpan={2}
              >
                Total
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center bg-yellow-300 font-bold">
                5
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        onClick={closePopup}
      >
        Close
      </button>
    </div>
  </div>
);

export default CareerDevelopmentModal;
