import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import image1 from "../assets/images/newlogo4.bdaf469624cab663f527.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolderClosed,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2"; // Import SweetAlert2

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Handle logout click
  const handleLogout = () => {
    // Show SweetAlert2 confirmation dialog
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
        // If user clicks "Yes, Log Out!", navigate to login page
        navigate("/"); // Adjust the path to your login page
      }
    });
  };

  return (
    <div className="w-[325px] bg-blue-900 text-white min-h-screen p-6 flex flex-col justify-between">
      {" "}
      {/* Reduced width */}
      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <img
          src={image1}
          alt="Logo"
          className="mb-6 w-full h-auto border-none" // Updated for full width and no border
        />
        <h2 className="text-lg font-semibold uppercase tracking-wide mb-10">
          Evaluation Systems
        </h2>
      </div>
      {/* Navigation Section */}
      <ul className="flex-grow">
        <li className="mb-6">
          <button
            className="flex items-center gap-4 text-xl font-medium hover:text-yellow-400 w-full"
            onClick={() => navigate("/executive-employee")}
          >
            <FontAwesomeIcon icon={faFolderClosed} className="text-3xl" />
            Executive employee
          </button>
        </li>
        <li className="mb-6">
          <button
            className="flex items-center gap-4 text-xl font-medium hover:text-yellow-400 w-full"
            onClick={() => navigate("/non-executive-employee")}
          >
            <FontAwesomeIcon icon={faFolderClosed} className="text-3xl" />
            Non-executive employee
          </button>
        </li>
      </ul>
      {/* Logout Section */}
      <button
        className="flex items-center justify-center gap-2 bg-purple-600 text-sm font-medium text-white px-4 py-2 rounded-full hover:bg-purple-700"
        onClick={handleLogout} // Add the logout handler
      >
        <FontAwesomeIcon icon={faSignOutAlt} className="text-3xl" />
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
