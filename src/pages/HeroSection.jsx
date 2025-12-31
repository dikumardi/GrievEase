import React from 'react'

const HeroSection = () => {
  return (
    <>
    <div className='p-3 flex flex-wrap justify-evenly'>
    <div className="w-100 lg:w-125 mt-40">
        <span className='text-blue-500 bg-gray-300 rounded-full p-1.5'>Introducing the New System</span>

    <h1 className='font-bold text-5xl whitespace-nowrap mb-3'>Hostel GrievEase</h1>
    <p className='mb-3 text-gray-400'>A Simple, intuitive system for hostel residents to report <br />  and track the status of their grievances efficiently</p>
    <div className="flex gap-3">
    <Button/>
    
    </div>
    </div>

    <RightSectionContent/>




    </div>
    </>
  )
}

export default HeroSection