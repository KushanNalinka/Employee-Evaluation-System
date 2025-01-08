import React, { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import image1 from "../assets/images/loginbackground.5ad1adb02f73f4ac865e.webp";
import image2 from "../assets/images/cdplc_logo.png";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [err, setError] = useState(null);
  const [validationError, setValidationError] = useState({});
  const [rememberMe, setRememberMe] = useState(false);

  // const handleLogin = () => {
  //   if (username === "admin" && password === "12345") {
  //     navigate("/executive");
  //   } else {
  //     alert("Invalid username or password");
  //   }
  // };

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log("Input changed:", e.target.name, e.target.value);

  };

  useEffect(() => {
    const savedUserData = localStorage.getItem("rememberMeData") || sessionStorage.getItem("rememberMeData");
    if (savedUserData) {
      const { username } = JSON.parse(savedUserData);
      const { password } = JSON.parse(savedUserData);
      setInputs((prev) => ({ ...prev, username, password }));
      setRememberMe(true); // assume they checked "Remember Me"
      console.log("Pre-filled username:", username);
    } else {
      console.log("No saved user data found.");
    }
  }, []);

  const validateForm = () => {
    const errors = {};
    if (!inputs.username) {
      errors.username = "Username is required.";
    }
    if (!inputs.password) {
      errors.password = "Password is required.";
    } else if (inputs.password.length < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    return errors;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);
    //const validationErrors = validate();
    //if(Object.keys(validationErrors).length === 0 ){
      const errors = validateForm();
      if (Object.keys(errors).length > 0) {
        setValidationError(errors);
  
        console.log("Validation errors:", errors);
  
        return;
      } else {
        setValidationError({});
      }
      try {
        //const data = {username:email, password: password};
        await axios.post(`https://esystems.cdl.lk/backend/PerformanceEvaluationNew/Login/UserLogin?userName=${inputs.username}&password=${inputs.password}`);
        //localStorage.setItem('token', result.token);
        toast.success("Login success !", {
          position: "top-right"
        });
        navigate('/executive');

        // Save token based on Remember Me option
        if (rememberMe) {
          localStorage.setItem("rememberMeData", JSON.stringify(inputs)); // persists even after closing browser
          console.log("Saved user data to localStorage:", inputs);
        } else {
          sessionStorage.setItem("rememberMeData", JSON.stringify(inputs)); // only persists while the session is active
          console.log("Saved user data to sessionStorage:", inputs);
        };
  
      } catch (error){
        let message = {message:"Loging Failed!", severity:"error"};
        if (error.message === "Email or password incorrect") {
          message = error.message;
          toast.error(message, {
            position: "top-right"
          });
        }
      }
  };


  return (
    <div
      className="h-screen bg-cover bg-center flex items-end justify-start p-10"
      style={{ backgroundImage: `url(${image1})` }}
    >
      <div className="w-96 p-6 bg-white bg-opacity-80 backdrop-blur-lg rounded-lg shadow-md mb-10 ml-10">
        <div className="text-center mb-16">
        <img src={image2} alt="Logo" className=" w-60 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Sign-In</h1>
        </div>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="w-full p-3 border mb-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={inputs.username}
          onChange={handleChange}
        />
        {validationError.username && <p className="text-sm text-red-500 mb-1">{validationError.username}</p>}
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 border mb-4 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          value={inputs.password}
          onChange={handleChange}
        />
        {validationError.password && <p className="text-sm text-red-500 mb-1">{validationError.password}</p>}
        <button
          className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600"
          onClick={handleLogin}
        >
          Login
        </button>
        {err && <p className="text-sm text-red-500 text-center mt-2">{err}</p>}
        <p className="text-center text-sm text-gray-500 mt-4">
          Powered by Dockyard Total Solutions. Copyright © 2023
        </p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
