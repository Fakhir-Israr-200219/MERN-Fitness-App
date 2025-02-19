import React from 'react'
import logo from '../assets/logo_black.png'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className='signin  flex flex-col justify-center items-center'>

            <div className='logo h-[289px]'>
                <img src={logo} alt="" />
            </div>

            <div className='form w-[90vw] m-auto flex flex-col justify-center items-center'>

                <div class="w-full max-w-sm min-w-[200px] my-4">
                    <div class="relative">
                        <input
                            class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                        <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                            Enter User Name
                        </label>
                    </div>
                </div>
                <div class="w-full max-w-sm min-w-[200px] my-4">
                    <div class="relative">
                        <input
                            class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                        <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                            Enter Email Address
                        </label>
                    </div>
                </div>
                <div class="w-full max-w-sm min-w-[200px] my-4">
                    <div class="relative">
                        <input
                            class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                        <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                            Enter Password
                        </label>
                    </div>
                </div>
                <div class="w-full max-w-sm min-w-[200px] my-4">
                    <div class="relative">
                        <input
                            class="peer w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        />
                        <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                            Conform Password
                        </label>
                    </div>
                </div>
                <div class="w-full max-w-sm min-w-[200px] my-4">
                    <div class="relative">
                        <input
                            type="file"
                            class="peer w-full bg-transparent text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow file:border-0 file:bg-transparent file:text-slate-600 file:mr-2"
                        />
                        <label class="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-400 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                            Upload Profile Pic
                        </label>
                    </div>
                </div>
                <p className="p-2 m-2 mb-2">Go to <Link to="/login" className='text-[#ed563b]'>Sign In</Link></p>
                <button type="button" class=" mt-2 min-w-[200px] py-2.5 px-5 me-2 mb-2 text-sm font-medium text-black focus:outline-none bg-[#ed563b] rounded-lg border border-gray-800 hover:bg-black hover:text-[#ed563b] focus:z-10 focus:ring-4 focus:ring-gray-700 dark:focus:ring-gray-600 dark:bg-black dark:text-[#ed563b] dark:border-gray-600 dark:hover:text-black dark:hover:bg-[#ed563b]">
                    Alternative
                </button>

            </div>
        </div>
    )
}

export default Signin
