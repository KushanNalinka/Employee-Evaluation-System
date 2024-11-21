import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image1 from '../assets/images/loginbackground.5ad1adb02f73f4ac865e.webp';
import image2 from '../assets/images/cdplc_logo.png';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "admin" && password === "12345") {
      navigate("/executive");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      className="h-screen bg-cover bg-center flex items-end justify-start p-10"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="w-96 p-6 bg-white rounded-lg shadow-md mb-10 ml-10">
        <div className="text-center">
          <img src={image2} alt="Logo" className="w-16 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-6">Sign-In</h1>
        </div>
        <input
          type="text"
          placeholder="Username"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Powered by Dockyard Total Solutions. Copyright © 2023
        </p>
      </div>
    </div>
  );
  
  
};

export default Login;
