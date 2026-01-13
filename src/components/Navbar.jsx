import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
         <nav className=' flex justify-evenly py-7 gap-3' >
     <div className="logo">
      <span className='w-2 h-2 bg-gray-300 p-2 text-blue-700 rounded-full font-bold'>GR</span>
      GrievEase </div>

   <div className=" flex gap-5">
   <Link to='/'>Home</Link>
   <Link to='/formpage' >Submit GrievEase</Link>
   <Link>Track Status</Link>
   <Link to='/adminpage' >Admin</Link>
   </div>
   
    </nav>
    
    </>
  )
}

export default Navbar
