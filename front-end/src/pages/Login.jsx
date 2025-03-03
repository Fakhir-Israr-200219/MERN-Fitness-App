import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../assets/logo_black.png";

const Login = () => {
  const navigate = useNavigate(); // Hook for navigation

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email,
        password,
      });
  
      // Extract token from response
      const token = response.data.accessToken; // FIX: Correct key name
      console.log("Login successful:", response.data);
  
      // Save token in localStorage
      localStorage.setItem("token", token);
  
      // Redirect to dashboard or home
      navigate("/exercises"); 
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password. Please try again.");
    }
  };
  

  return (
    <div className="login flex flex-col justify-center items-center min-h-screen">
      <div className="logo h-[289px]">
        <img src={logo} alt="Logo" />
      </div>

      <div className="form w-[90vw] m-auto mt-1 flex flex-col justify-center items-center">
        {/* Email Field */}
        <div className="w-full max-w-sm min-w-[200px] my-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full bg-transparent border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {/* Password Field */}
        <div className="w-full max-w-sm min-w-[200px] my-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="peer w-full bg-transparent border border-gray-300 rounded-md px-3 py-2"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}

        {/* Login Button */}
        <button
          type="button"
          onClick={handleLogin}
          className="mt-2 min-w-[200px] py-2.5 px-5 text-sm font-medium text-white bg-[#ed563b] rounded-lg hover:bg-black hover:text-[#ed563b]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
