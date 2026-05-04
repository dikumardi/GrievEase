import React from 'react'
import { Link } from 'react-router-dom'

const Button = () => {
  return (
    <div>
       <div className="flex gap-3">
        <Link to="/formpage">
        <button className='px-4 py-3 rounded-2xl text-white bg-blue-600'>Submit GrievEase</button>
        </Link>
         <Link to="/track">
         <button className='font-semibold px-5 py-3 rounded-2xl text-black bg-white '>Track Status</button>
         </Link>
        </div>
    </div>
  )
}

export default Button