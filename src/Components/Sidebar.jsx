import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import image1 from '../assets/images/newlogo4.bdaf469624cab663f527.webp';

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="w-1/5 bg-blue-900 text-white min-h-screen p-4 flex flex-col items-center">
      {/* Add an image */}
      <img
        src={image1}
        alt="Logo"
        className="mb-6 rounded-full border border-gray-300"
      />
      <h2 className="text-xl font-bold mb-8">Evaluation System</h2>
      <ul className="w-full text-center">
        <li className="mb-4">
          <button
            className="hover:text-yellow-400 w-full"
            onClick={() => navigate('/executive-employee')} // Navigate to the executive page
          >
            Executive employee
          </button>
        </li>
        <li className="mb-4">
          <button
            className="hover:text-yellow-400 w-full"
            onClick={() => navigate('/non-executive-employee')} // Navigate to the non-executive page
          >
            Non-executive employee
          </button>
        </li>
      </ul>
      <button className="mt-8 bg-red-500 px-4 py-2 rounded w-full">Logout</button>
    </div>
  );
};

export default Sidebar;
