import React, { useState } from 'react'

const Admin = ({handleLogin}) => {
  
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const userhandler= (e)=>{
    e.preventDefault();

    handleLogin(email,password);

    setemail("")
    setpassword("")
  }

  return (
    <>
    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>

    <div className="bg-white w-75 p-10 lg:w-120 rounded-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
   
  <form className="space-y-3 "
  onSubmit={(e)=>{userhandler(e)}}>
       
   
    <h3 className=' font-bold text-xl mb-2 text-center'>Admin Login</h3>

          {/* Email */}
         
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

          {/* Password */}
          <div>
            <label className="block font-medium mb-1">Enter Password </label>
            <input
              type="tel"
              value={password}
              onChange={(e)=>{setpassword(e.target.value)}}
              placeholder="Enter your Password "
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>



         
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition mt-7"
          >
            Login
          </button>
<div className="flex items-center justify-center gap-3  p-3 rounded-2xl mt-6">
   <div className="whitespace-nowrap cursor-pointer active:scale-95 text-sm">Admin Login</div> |   
   <div className="whitespace-nowrap cursor-pointer active:scale-95 text-sm ">Register Now</div>
   </div>
        </form>
    </div>
    </div>
    </>
  )
}

export default Admin