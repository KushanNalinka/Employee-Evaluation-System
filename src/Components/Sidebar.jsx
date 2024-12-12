import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import image1 from "../assets/images/newlogo4.bdaf469624cab663f527.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserGroup,
  faUser,
  faSignOutAlt,
  faCaretDown,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Access the current route
  const [isKpiMenuOpen, setIsKpiMenuOpen] = useState(false); // For KPI menu
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
        {/* <img
          src={image1}
          alt="Logo"
          className="mb-6 w-full h-auto border-none"
        /> */}
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-10">
          Evaluation Systems
        </h2>
      </div>
      {/* Navigation Section */}
      <ul className="flex-grow">
        <li className="mb-6">
          {/* Employee Menu */}
          <button
            className="flex items-center justify-between text-base font-medium hover:text-yellow-400 w-full"
            onClick={() => setIsEmployeeMenuOpen(!isEmployeeMenuOpen)}
          >
            {/* Left Section with Icon and Text */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUserGroup} className="text-lg" />
              <span className="text-[18px]">Employee Evalution</span>
            </div>
            {/* Right Section with Up/Down Icon */}
            <FontAwesomeIcon
              icon={isEmployeeMenuOpen ? faCaretUp : faCaretDown}
              className="text-sm"
            />
          </button>
          {/* Submenus */}
          {isEmployeeMenuOpen && (
            <ul className="pl-8 mt-4">
              <li className="mb-4">
                <button
                  className={`flex items-center gap-2 text-xs font-medium w-full ${
                    location.pathname === "/executive"
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                  onClick={() => navigate("/executive")}
                >
                  {/* <FontAwesomeIcon icon={faUser} className="text-[24px]" />
                  Executive Employee */}
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-white"></span>
                  <span className="text-[14px]">Executive</span>
                </button>
              </li>
              <li>
                <button
                  className={`flex items-center gap-2 text-xs font-medium w-full ${
                    location.pathname === "/non-executive"
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                  onClick={() => navigate("/non-executive")}
                >
                  {/* <FontAwesomeIcon icon={faUser} className="text-[24px]" /> */}
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-white"></span>
                  <span className="text-[14px]">Non-Executive</span>
                </button>
              </li>
            </ul>
          )}
        </li>

        {/* KPI ENTRY Menu */}
        <li className="mb-6">
          <button
            className="flex items-center justify-between text-base font-medium hover:text-yellow-400 w-full"
            onClick={() => setIsKpiMenuOpen(!isKpiMenuOpen)}
          >
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUserGroup} className="text-lg" />
              <span className="text-[18px]">KPI Entry</span>
            </div>
            <FontAwesomeIcon
              icon={isKpiMenuOpen ? faCaretUp : faCaretDown}
              className="text-sm"
            />
          </button>
          {isKpiMenuOpen && (
            <ul className="pl-8 mt-4">
              <li className="mb-4">
                <button
                  className={`flex items-center gap-2 text-xs font-medium w-full ${
                    location.pathname === "/kpi-entry"
                      ? "text-yellow-400"
                      : "hover:text-yellow-400"
                  }`}
                  onClick={() => navigate("/kpi-entry")}
                >
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-white"></span>
                  <span className="text-[14px]">KPI</span>
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
      {/* Logout Section */}
      <button
        className="flex items-center justify-center gap-2 bg-purple-600 text-xs font-medium text-white px-4 py-2 rounded-full hover:bg-purple-700"
        onClick={handleLogout}
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="text-base" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
