import React from "react";

const CompetenciesScore = () => {
  return (
    <div className="bg-white shadow p-4 rounded">
      <h3 className="text-lg font-bold text-gray-700 mb-4">
        Competencies Score
      </h3>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Criteria</th>
            <th className="p-2 border">Self-Appraisal</th>
            <th className="p-2 border">Superior Appraisal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">Achievement Orientation</td>
            <td className="p-2 border text-left">65</td>
            <td className="p-2 border text-left">55</td>
          </tr>
          <tr>
            <td className="p-2 border">People Orientation</td>
            <td className="p-2 border text-left">85</td>
            <td className="p-2 border text-left">75</td>
          </tr>
          <tr>
            <td className="p-2 border">Managerial Orientation</td>
            <td className="p-2 border text-left">90</td>
            <td className="p-2 border text-left">80</td>
          </tr>
          <tr>
            <td className="p-2 border">Adaptive Orientation</td>
            <td className="p-2 border text-left">85</td>
            <td className="p-2 border text-left">70</td>
          </tr>
        </tbody>
      </table>
      <br />
      <hr />
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-bold text-gray-700 mb-4">
          Career Development Score
        </h3>
        {/* <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Criteria</th>
              <th className="p-2 border">Superior Appraisal</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Career Development</td>
              <td className="p-2 border text-center">55</td>
            </tr>
            <tr>
              <td className="p-2 border">Career Development</td>
              <td className="p-2 border text-center">75</td>
            </tr>
            <tr>
              <td className="p-2 border">Career Development</td>
              <td className="p-2 border text-center">80</td>
            </tr>
            <tr>
              <td className="p-2 border">Career Development</td>
              <td className="p-2 border text-center">70</td>
            </tr>
          </tbody>
        </table> */}
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
      <br />
      <hr />
      <div className="bg-white shadow p-4 rounded">
        <h3 className="text-lg font-bold text-gray-700 mb-4">
          HR Aspects Score
        </h3>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Taken</th>
              <th className="p-2 border">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Annual Leave</td>
              <td className="p-2 border text-left">14</td>
              <td className="p-2 border text-left">11</td>
              <td className="p-2 border text-left">79%</td>
            </tr>
            <tr>
              <td className="p-2 border">Casual Leave</td>
              <td className="p-2 border text-left">7</td>
              <td className="p-2 border text-left">5</td>
              <td className="p-2 border text-left">71%</td>
            </tr>
            <tr>
              <td className="p-2 border">Sick Aspects</td>
              <td className="p-2 border text-left">21</td>
              <td className="p-2 border text-left">5</td>
              <td className="p-2 border text-left">24%</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold text-gray-700 mb-4"></h3>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border"></th>
              <th className="p-2 border">Total</th>
              <th className="p-2 border">Taken</th>
              <th className="p-2 border">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Short Leave Taken</td>
              <td className="p-2 border text-left">24</td>
              <td className="p-2 border text-left">14</td>
              <td className="p-2 border text-left">58%</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold text-gray-700 mb-4"></h3>
        {/* <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border">Leave Type</th>
              <th className="p-2 border">Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Nopay</td>
              <td className="p-2 border text-left">15</td>
            </tr>
            <tr>
              <td className="p-2 border">No Entered</td>
              <td className="p-2 border text-left">1</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold text-gray-700 mb-4"></h3>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border"></th>
              <th className="p-2 border">Days</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Late Occasions</td>
              <td className="p-2 border text-left">13</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-bold text-gray-700 mb-4"></h3>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-2 border"></th>
              <th className="p-2 border">%</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2 border">Extra Hours / Normal Hours</td>
              <td className="p-2 border text-left">20</td>
            </tr>
          </tbody>
        </table> */}

        <div className="flex space-x-8">
          {/* Table 1 */}
          <table className="table-auto w-1/3 border text-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border">Leave Type</th>
                <th className="p-2 border">Days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Nopay</td>
                <td className="p-2 border text-left">15</td>
              </tr>
              <tr>
                <td className="p-2 border">No Entered</td>
                <td className="p-2 border text-left">1</td>
              </tr>
            </tbody>
          </table>

          {/* Table 2 */}
          <table className="table-auto w-1/3 border text-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border"></th>
                <th className="p-2 border text-left">Days</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Late Occasions</td>
                <td className="p-2 border text-left">13</td>
              </tr>
            </tbody>
          </table>

          {/* Table 3 */}
          <table className="table-auto w-1/3 border text-lg">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 border"></th>
                <th className="p-2 border text-left">%</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 border">Extra Hours / Normal Hours</td>
                <td className="p-2 border text-left">20</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompetenciesScore;
