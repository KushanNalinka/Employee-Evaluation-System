import React from 'react'
import image1 from '../assets/images/cdplc_logo.png'

const Header = () => {
    return (
      <header className="bg-blue-100 flex justify-between items-center p-4">
        <h1 className="text-lg font-bold">HELLO A.U.MALLAWARACHCHI</h1>
        <div className="flex items-center">
          <img
            src={image1}
            alt="Company Logo"
            className="mr-4"
          />
          
        </div>
      </header>
    );
  };
  

export default Header