// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import image1 from "../assets/images/newlogo4.bdaf469624cab663f527.webp";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faFolderOpen,
//   faSignOutAlt,
//   faCaretDown,
//   faCaretUp,
// } from "@fortawesome/free-solid-svg-icons";
// import Swal from "sweetalert2";

// const Sidebar = () => {
//   const navigate = useNavigate();
//   const [isEmployeeMenuOpen, setIsEmployeeMenuOpen] = useState(false);

//   const handleLogout = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonText: "Yes, Log Out!",
//       cancelButtonText: "Cancel",
//       reverseButtons: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         navigate("/"); // Navigate to login page
//       }
//     });
//   };

//   return (
//     <div className="w-[275px] bg-blue-900 text-white min-h-screen p-6 flex flex-col justify-between">
//       {/* Logo Section */}
//       <div className="flex flex-col items-center">
//         <img
//           src={image1}
//           alt="Logo"
//           className="mb-6 w-full h-auto border-none"
//         />
//         <h2 className="text-lg font-semibold uppercase tracking-wide mb-10">
//           Evaluation Systems
//         </h2>
//       </div>
//       {/* Navigation Section */}
//       <ul className="flex-grow">
//         <li className="mb-6">
//           {/* Employee Menu */}
//           <button
//             className="flex items-center gap-4 text-xl font-medium hover:text-yellow-400 w-full"
//             onClick={() => setIsEmployeeMenuOpen(!isEmployeeMenuOpen)}
//           >
//             <FontAwesomeIcon
//               icon={isEmployeeMenuOpen ? faCaretUp : faCaretDown}
//               className="text-3xl"
//             />
//             Employee
//           </button>
//           {/* Submenus */}
//           {isEmployeeMenuOpen && (
//             <ul className="pl-6 mt-4">
//               <li className="mb-4">
//                 <button
//                   className="flex items-center gap-2 text-sm font-medium hover:text-yellow-400 w-full"
//                   onClick={() => navigate("/executive")}
//                 >
//                   <FontAwesomeIcon icon={faFolderOpen} className="text-lg" />
//                   Executive Employee
//                 </button>
//               </li>
//               <li>
//                 <button
//                   className="flex items-center gap-2 text-sm font-medium hover:text-yellow-400 w-full"
//                   onClick={() => navigate("/non-executive")}
//                 >
//                   <FontAwesomeIcon icon={faFolderOpen} className="text-lg" />
//                   Non-Executive Employee
//                 </button>
//               </li>
//             </ul>
//           )}
//         </li>
//       </ul>
//       {/* Logout Section */}
//       <button
//         className="flex items-center justify-center gap-2 bg-purple-600 text-sm font-medium text-white px-4 py-2 rounded-full hover:bg-purple-700"
//         onClick={handleLogout}
//       >
//         <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
//         Logout
//       </button>
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import image1 from "../assets/images/newlogo4.bdaf469624cab663f527.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderOpen,
  faSignOutAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access the current route
  const [isEmployeeMenuOpen, setIsEmployeeMenuOpen] = useState(false);

  // Keep the submenu open if the current route matches the submenu's path
  React.useEffect(() => {
    if (
      location.pathname === "/executive" ||
      location.pathname === "/non-executive"
    ) {
      setIsEmployeeMenuOpen(true);
    }
  }, [location.pathname]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, Log Out!",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/"); // Navigate to login page
      }
    });
  };

  return (
    <div className="w-[275px] bg-blue-900 text-white min-h-screen p-6 flex flex-col justify-between">
      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <img
          src={image1}
          alt="Logo"
          className="mb-6 w-full h-auto border-none"
        />
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-10">
          Evaluation Systems
        </h2>
      </div>
      {/* Navigation Section */}
      <ul className="flex-grow">
        <li className="mb-6">
          {/* Employee Menu */}
          <button
            className="flex items-center gap-4 text-xl font-medium hover:text-yellow-400 w-full"
            onClick={() => setIsEmployeeMenuOpen(!isEmployeeMenuOpen)}
          >
            <FontAwesomeIcon
              icon={isEmployeeMenuOpen ? faCaretUp : faCaretDown}
              className="text-3xl"
            />
            Employee
          </button>
          {/* Submenus */}
          {isEmployeeMenuOpen && (
            <ul className="pl-6 mt-4">
              <li className="mb-4">
                <button
                  className={`flex items-center gap-2 text-sm font-medium w-full ${
                    location.pathname === "/executive"
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                  onClick={() => navigate("/executive")}
                >
                  <FontAwesomeIcon icon={faFolderOpen} className="text-lg" />
                  Executive Employee
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center gap-2 text-sm font-medium w-full ${
                    location.pathname === "/non-executive"
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                  onClick={() => navigate("/non-executive")}
                >
                  <FontAwesomeIcon icon={faFolderOpen} className="text-lg" />
                  Non-Executive Employee
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
      {/* Logout Section */}
      <button
        className="flex items-center justify-center gap-2 bg-purple-600 text-sm font-medium text-white px-4 py-2 rounded-full hover:bg-purple-700"
        onClick={handleLogout}
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
