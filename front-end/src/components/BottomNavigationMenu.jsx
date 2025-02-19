import React from 'react'
import { MdOutlineFitnessCenter } from "react-icons/md";
import { LuNotebookPen } from "react-icons/lu";
import { ImSpoonKnife } from "react-icons/im";
import { GoLog } from "react-icons/go";
import { AiOutlineInbox } from "react-icons/ai";
import { Link } from 'react-router-dom';

const BottomNavigationMenu = () => {
    return (
        <div className='bo_nav border-1 border-red-500 flex flex-row justify-center items-center space-x-4 py-3 bg-[#ed563b] w-[100vw] absolute bottom-0 rounded-xl'>
            <Link to="/exercises">
                <div className='bo_nav_item flex flex-col justify-center items-center p-2 pt-4 rounded-full active:bg-[#eb8d7c]'>
                    <div className='icon'><MdOutlineFitnessCenter /></div>
                    <p className='name text-sm'>Exercises</p>
                </div>
            </Link>
            <Link to="/plans">
                <div className='bo_nav_item flex flex-col justify-center items-center  p-2 pt-4 rounded-full active:bg-[#eb8d7c]'>
                    <div className='icon'><LuNotebookPen /></div>
                    <p className='name text-sm'>Plans</p>
                </div>
            </Link>
            <Link to="/nutritions">
                <div className='bo_nav_item flex flex-col justify-center items-center  p-2 pt-4 rounded-full active:bg-[#eb8d7c]'>
                    <div className='icon'><ImSpoonKnife /></div>
                    <p className='name text-sm'>Nutrition</p>
                </div>
            </Link>
            <Link to="/logs">
                <div className='bo_nav_item flex flex-col justify-center items-center  p-2 pt-4 rounded-full active:bg-[#eb8d7c]'>
                    <div className='icon'><GoLog />
                    </div>
                    <p className='name text-sm'>Logs</p>
                </div>
            </Link>
            <Link to="/option">
                <div className='bo_nav_item flex flex-col justify-center items-center p-2 pt-4 rounded-full active:bg-[#eb8d7c]'>
                    <div className='icon'><AiOutlineInbox /></div>
                    <p className='name text-sm'>Options</p>
                </div>
            </Link>
        </div>
    )
}

export default BottomNavigationMenu
