import React from 'react'

const RightSectionContent = () => {
  return (
    <>
    <div >
      {/**Right  **/}
    <div className="bg-white   lg:w-100 h-100 rounded-2xl p-6 mt-20">
    <div className="flex flex-col items-center justify-center mt-25"><h3 className='font-semibold text-2xl mb-3 '>Streamlined Process</h3>
    <p className='text-center text-gray-500'>Submit your Grievance in minutes and track its status in real-time</p></div>
    <div className="line  bg-gray-500 h-px w-full  mt-7"></div>

    <div className="flex justify-evenly mt-7">
    <div className="left">
    <p className='font-semibold'>Quick Response</p>
     <h3 className='font-bold text-xl text-center'>24h</h3>
    </div>

     <div className="right">
    <p className='font-semibold'>Resolution Rate</p>
     <h3 className='font-bold text-xl text-center'>98%</h3>
    </div>
    </div>
    </div>
    </div>
    </>
  )
}

export default RightSectionContent