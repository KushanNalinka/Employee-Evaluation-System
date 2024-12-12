// import React, { useEffect, useState } from "react";
// import image1 from "../assets/images/executive.914c1c1e735aaecabb8f.png";
// import EMPModal from "../Components/modals/EMPModal";

// const EmployeeSelection = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [employee, setEmployee] = useState(null);

//   // Simulating an API call
//   const fetchEmployeeData = async () => {
//     // Simulated API response
//     const response = [
//       {
//         id: 1,
//         name: "P.H.S.Daminda",
//         designation: "Chief Information Officer",
//         division: "DMD",
//         department: "SIT",
//         recruitmentDate: "1993-01-01",
//         basicSalary: "500,000",
//         permanentDate: "1994-01-01",
//         presentGrade: "Grade A",
//         retirementDate: "2023-10-31",
//         basisOfEmployment: "CDL Permanent",
//       },
//       {
//         id: 2,
//         name: "J. Doe",
//         designation: "Senior Engineer",
//         division: "ENG",
//         department: "Development",
//         recruitmentDate: "2005-06-15",
//         basicSalary: "350,000",
//         permanentDate: "2006-07-20",
//         presentGrade: "Grade B",
//         retirementDate: "2030-12-31",
//         basisOfEmployment: "Full-Time",
//       },
//     ];

//     // Simulate fetching the first employee
//     const selectedEmployee = response.find((emp) => emp.id === 1);
//     setEmployee(selectedEmployee);
//   };

//   useEffect(() => {
//     fetchEmployeeData();
//   }, []);
//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="bg-white shadow-lg p-6 rounded-lg mb-4">
//       {/* Top Section */}
//       <div className="flex items-center justify-between">
//         {/* Left Section */}
//         <div>
//           <h2 className="text-xl font-semibold text-blue-700 mb-2">
//             Evaluating Employee:{" "}
//             <span className="font-bold">0002014 - Daminda P.H.S.</span>
//           </h2>
//           <h3 className="text-xl font-semibold text-blue-700 mb-2">
//             Current Evaluation Status -{" "}
//             <span className="text-green-600">Pending</span>
//           </h3>
//           <div className="grid grid-cols-1 gap-4">
//             {/* Select an Employee */}
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">
//                 Select an Employee:
//               </label>
//               <button
//                 className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
//                 onClick={toggleModal}
//               >
//                 Click here
//               </button>
//             </div>

//             {/* Evaluation Status */}
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">
//                 Evaluation Status:
//               </label>
//               <select className="border p-2 rounded w-40">
//                 <option>Incomplete</option>
//                 <option>Complete</option>
//               </select>
//             </div>

//             {/* Category */}
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">Category:</label>
//               <select className="border p-2 rounded w-40">
//                 <option>Executive</option>
//                 <option>Non-Executive</option>
//               </select>
//             </div>

//             {/* Period and Year */}
//             <div className="flex items-center gap-2">
//               <label className="font-medium text-gray-700">Period:</label>
//               <select className="border p-2 rounded w-32">
//                 <option>Year end</option>
//                 <option>Mid year</option>
//               </select>

//               <label className="font-medium text-gray-700">Year:</label>
//               <select className="border p-2 rounded w-24">
//                 <option>2021</option>
//                 <option>2022</option>
//                 <option>2023</option>
//               </select>
//             </div>
//             {/* PCR Attachments */}
//             <div className="mt-1">
//               <label className="font-medium text-gray-700 block mb-2">
//                 PCR Attachments:
//               </label>
//               <input
//                 type="file"
//                 className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               />
//             </div>

//             {/* Buttons */}
//             {/* <div className="flex gap-2">
//               <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
//                 Save Data
//               </button>
//               <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
//                 Reset
//               </button>
//             </div> */}
//           </div>
//         </div>

//         {/* Right Section */}
//         {/* <div className="flex items-center">
//           <img
//             src={image1}
//             alt="Employee"
//             className="w-56 h-56 rounded border border-gray-300 shadow"
//           />
//         </div> */}
//         {/* Right Section (Image) */}
//         <div className="flex items-center">
//           <img
//             src={image1}
//             alt="Employee"
//             className="w-56 h-56 rounded border border-gray-300 shadow"
//           />
//         </div>
//       </div>

//       {/* Buttons (below the image) */}
//       <div className="flex gap-2 mt-4 justify-start">
//         <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
//           Save Data
//         </button>
//         <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
//           Reset
//         </button>
//       </div>

//       {/* Employee Details Section */}
//       <div className="bg-white shadow p-4 rounded mt-6">
//         <h2 className="text-lg font-bold text-gray-700 mb-4">Profile</h2>
//         {employee ? (
//           <ul className="space-y-2">
//             <li>
//               <strong>Name:</strong> {employee.name}
//             </li>
//             <li>
//               <strong>Designation:</strong> {employee.designation}
//             </li>
//             <li>
//               <strong>Division:</strong> {employee.division}
//             </li>
//             <li>
//               <strong>Department:</strong> {employee.department}
//             </li>
//             <li>
//               <strong>Recruitment Date:</strong> {employee.recruitmentDate}
//             </li>
//             <li>
//               <strong>Basic Salary:</strong> {employee.basicSalary}
//             </li>
//             <li>
//               <strong>Permanent Date:</strong> {employee.permanentDate}
//             </li>
//             <li>
//               <strong>Present Grade:</strong> {employee.presentGrade}
//             </li>
//             <li>
//               <strong>Retirement Date:</strong> {employee.retirementDate}
//             </li>
//             <li>
//               <strong>Basis Of Employment:</strong> {employee.basisOfEmployment}
//             </li>
//           </ul>
//         ) : (
//           <p>Loading employee data...</p>
//         )}
//       </div>
//       <EMPModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
//     </div>
//   );
// };

// export default EmployeeSelection;


import React, { useEffect, useState } from "react";
import image1 from "../assets/images/executive.914c1c1e735aaecabb8f.png";
import EMPModal from "../Components/modals/EMPModal";

const EmployeeSelection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [employee, setEmployee] = useState(null);

  // Simulating an API call
  const fetchEmployeeData = async () => {
    // Simulated API response
    const response = [
      {
        id: 1,
        name: "P.H.S.Daminda",
        designation: "Chief Information Officer",
        division: "DMD",
        department: "SIT",
        recruitmentDate: "1993-01-01",
        basicSalary: "500,000",
        permanentDate: "1994-01-01",
        presentGrade: "Grade A",
        retirementDate: "2023-10-31",
        basisOfEmployment: "CDL Permanent",
      },
      {
        id: 2,
        name: "J. Doe",
        designation: "Senior Engineer",
        division: "ENG",
        department: "Development",
        recruitmentDate: "2005-06-15",
        basicSalary: "350,000",
        permanentDate: "2006-07-20",
        presentGrade: "Grade B",
        retirementDate: "2030-12-31",
        basisOfEmployment: "Full-Time",
      },
    ];

    // Simulate fetching the first employee
    const selectedEmployee = response.find((emp) => emp.id === 1);
    setEmployee(selectedEmployee);
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="bg-white shadow-lg p-6 rounded-lg mb-4">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        {/* Left Section */}
        <div>
          <h2 className="text-xl font-semibold text-blue-700 mb-2">
            Evaluating Employee:{" "}
            <span className="font-bold">0002014 - Daminda P.H.S.</span>
          </h2>
          <h3 className="text-xl font-semibold text-blue-700 mb-2">
            Current Evaluation Status -{" "}
            <span className="text-green-600">Pending</span>
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {/* Select an Employee */}
            <div className="flex items-center gap-2">
              <label className="font-medium text-gray-700">
                Select an Employee:
              </label>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600"
                onClick={toggleModal}
              >
                Click here
              </button>
            </div>

            {/* Evaluation Status */}
            <div className="flex items-center gap-2">
              <label className="font-medium text-gray-700">
                Evaluation Status:
              </label>
              <select className="border p-2 rounded w-40">
                <option>Incomplete</option>
                <option>Complete</option>
              </select>
            </div>

            {/* Category */}
            <div className="flex items-center gap-2">
              <label className="font-medium text-gray-700">Category:</label>
              <select className="border p-2 rounded w-40">
                <option>Executive</option>
                <option>Non-Executive</option>
              </select>
            </div>

            {/* Period and Year */}
            <div className="flex items-center gap-2">
              <label className="font-medium text-gray-700">Period:</label>
              <select className="border p-2 rounded w-32">
                <option>Year end</option>
                <option>Mid year</option>
              </select>

              <label className="font-medium text-gray-700">Year:</label>
              <select className="border p-2 rounded w-24">
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
              </select>
            </div>
            {/* PCR Attachments */}
            {/* <div className="mt-1">
              <label className="font-medium text-gray-700 block mb-2">
                PCR Attachments:
              </label>
              <input
                type="file"
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-lg p-2 shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div> */}
          </div>
        </div>

        {/* Right Section (Image and Buttons) */}
        <div className="flex flex-col items-center">
          <img
            src={image1}
            alt="Employee"
            className="w-56 h-56 rounded border border-gray-300 shadow mb-4"
          />
          {/* Buttons below the image */}
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600">
              Save Data
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600">
              Reset
            </button>
          </div>
        </div>
      </div>

      {/* Employee Details Section */}
      <div className="bg-white shadow p-4 rounded mt-6">
        <h2 className="text-lg font-bold text-gray-700 mb-4">Profile</h2>
        {employee ? (
          <ul className="space-y-2">
            <li>
              <strong>Name:</strong> {employee.name}
            </li>
            <li>
              <strong>Designation:</strong> {employee.designation}
            </li>
            <li>
              <strong>Division:</strong> {employee.division}
            </li>
            <li>
              <strong>Department:</strong> {employee.department}
            </li>
            <li>
              <strong>Recruitment Date:</strong> {employee.recruitmentDate}
            </li>
            <li>
              <strong>Basic Salary:</strong> {employee.basicSalary}
            </li>
            <li>
              <strong>Permanent Date:</strong> {employee.permanentDate}
            </li>
            <li>
              <strong>Present Grade:</strong> {employee.presentGrade}
            </li>
            <li>
              <strong>Retirement Date:</strong> {employee.retirementDate}
            </li>
            <li>
              <strong>Basis Of Employment:</strong> {employee.basisOfEmployment}
            </li>
          </ul>
        ) : (
          <p>Loading employee data...</p>
        )}
      </div>
      <EMPModal isModalOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default EmployeeSelection;
