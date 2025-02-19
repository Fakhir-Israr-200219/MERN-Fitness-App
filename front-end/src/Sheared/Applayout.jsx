import React from 'react'
import BottomNavigationMenu from '../components/BottomNavigationMenu'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <div>
        <Outlet/>
        <BottomNavigationMenu/>
    </div>
  )
}

export default Applayout