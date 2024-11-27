import React, { useState } from 'react';
import image1 from '../assets/images/cdplc_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'; // Import icons for toggle

const Header = ({ toggleSidebar }) => {
  return (
    <header className="bg-blue-100 flex justify-between items-center p-4">
  <div className="flex items-center">
    <button onClick={toggleSidebar}>
      <FontAwesomeIcon icon={faBars} className="text-xl" /> {/* Hamburger icon */}
    </button>
    <h1 className="text-lg font-bold ml-4">HELLO A.U.MALLAWARACHCHI</h1> {/* Added margin-left for space */}
  </div>
  <div className="flex items-center">
    <img src={image1} alt="Company Logo" className="mr-4" />
  </div>
</header>
  );
};

export default Header;
