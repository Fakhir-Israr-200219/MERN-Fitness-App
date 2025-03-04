// import React from 'react'
// import { MdOutlineFitnessCenter } from "react-icons/md";
// import { ImSpoonKnife } from "react-icons/im";
// import { GoLog } from "react-icons/go";
// import { AiOutlineInbox } from "react-icons/ai";
// import { Link } from 'react-router-dom';
// import { IoIosBody } from "react-icons/io";

// const BottomNavigationMenu = () => {
//     return (
//         <div className='bo_nav border-1 border-red-500 flex flex-row justify-center items-center space-x-4 py-3 bg-[#ed563b] w-[100vw] fixed bottom-0 rounded-xl'>
//             <Link to="/exercises">
//                 <div className='bo_nav_item flex flex-col justify-center items-center p-4 pt-4 rounded-full active:bg-[#eb8d7c]'>
//                     <div className='icon'><MdOutlineFitnessCenter /></div>
//                     <p className='name text-sm'>Exercises</p>
//                 </div>
//             </Link>
//             <Link to="/cardio">
//                 <div className='bo_nav_item flex flex-col justify-center items-center  p-4 pt-4 rounded-full active:bg-[#eb8d7c]'>
//                     <div className='icon'><IoIosBody /></div>
//                     <p className='name text-sm'>Cardio</p>
//                 </div>
//             </Link>
//             <Link to="/logs">
//                 <div className='bo_nav_item flex flex-col justify-center items-center  p-4 pt-4 rounded-full active:bg-[#eb8d7c]'>
//                     <div className='icon'><GoLog />
//                     </div>
//                     <p className='name text-sm'>Logs</p>
//                 </div>
//             </Link>
//             <Link to="/option">
//                 <div className='bo_nav_item flex flex-col justify-center items-center p-4 pt-4 rounded-full active:bg-[#eb8d7c]'>
//                     <div className='icon'><AiOutlineInbox /></div>
//                     <p className='name text-sm'>Options</p>
//                 </div>
//             </Link>
//         </div>
//     )
// }

// export default BottomNavigationMenu
import React from 'react';
import { MdOutlineFitnessCenter } from "react-icons/md";
import { IoIosBody } from "react-icons/io";
import { GoLog } from "react-icons/go";
import { AiOutlineInbox } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BottomNavigationMenu = () => {
    return (
        <div className="fixed bottom-0 w-full bg-[#ed563b] flex justify-center items-center py-3 md:top-0 md:bottom-auto md:left-0 md:w-[80px] md:h-full md:flex-col md:justify-start md:pt-6">
            <div className="flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-6">
                <Link to="/exercises">
                    <div className='bo_nav_item flex flex-col justify-center items-center p-4 rounded-full active:bg-[#eb8d7c]'>
                        <div className='icon text-white text-2xl'><MdOutlineFitnessCenter /></div>
                        <p className='name text-sm text-white hidden md:block'>Exercises</p>
                    </div>
                </Link>
                <Link to="/cardio">
                    <div className='bo_nav_item flex flex-col justify-center items-center p-4 rounded-full active:bg-[#eb8d7c]'>
                        <div className='icon text-white text-2xl'><IoIosBody /></div>
                        <p className='name text-sm text-white hidden md:block'>Cardio</p>
                    </div>
                </Link>
                <Link to="/logs">
                    <div className='bo_nav_item flex flex-col justify-center items-center p-4 rounded-full active:bg-[#eb8d7c]'>
                        <div className='icon text-white text-2xl'><GoLog /></div>
                        <p className='name text-sm text-white hidden md:block'>Logs</p>
                    </div>
                </Link>
                <Link to="/option">
                    <div className='bo_nav_item flex flex-col justify-center items-center p-4 rounded-full active:bg-[#eb8d7c]'>
                        <div className='icon text-white text-2xl'><AiOutlineInbox /></div>
                        <p className='name text-sm text-white hidden md:block'>Options</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default BottomNavigationMenu;

