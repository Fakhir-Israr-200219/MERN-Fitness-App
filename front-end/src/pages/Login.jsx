import React from 'react';
import logo from '../assets/logo_black.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login flex flex-col justify-center items-center min-h-screen">
      <div className="logo h-[289px]">
        <img src={logo} alt="Logo" />
      </div>

      <div className="form w-[90vw] m-auto mt-1 flex flex-col justify-center items-center">
        {/* Username or Email Field */}
        <div className="w-full max-w-sm min-w-[200px] my-4">
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />
            <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2.5 peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              Username or Email
            </label>
          </div>
        </div>

        {/* Password Field */}
        <div className="w-full max-w-sm min-w-[200px] my-4">
          <div className="relative">
            <input
              type="password"
              placeholder=" "
              className="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            />
            <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-placeholder-shown:top-2.5 peer-placeholder-shown:left-2.5 peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
              Password
            </label>
          </div>
        </div>

        {/* Login Button */}
        <p className="p-2 m-2 mb-2">Go to <Link  to="/signin" className='text-[#ed563b]'>Sign In</Link></p>
        <button
          type="button"
          className="mt-2 min-w-[200px] py-2.5 px-5 mb-2 text-sm font-medium text-black focus:outline-none bg-[#ed563b] rounded-lg border border-gray-800 hover:bg-black hover:text-[#ed563b] focus:z-10 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-600 dark:bg-black dark:text-[#ed563b] dark:border-gray-600 dark:hover:text-black dark:hover:bg-[#ed563b]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
