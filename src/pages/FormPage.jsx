import React from 'react'

const FormPage = () => {
  return (
    <>
    
    <div className='mt-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>

    <h2 className='text-center font-bold text-3xl mb-3'>Submit a Grievance</h2>
    <p className='text-center text-gray-500 mb-3'>Fill up the form below to report any issues or concerns you're experiencing in the hostel</p>
    <div className="bg-white w-75 p-10 lg:w-150 rounded">
   
  <form className="space-y-3 ">
       
    <h3 className=' font-bold text-xl mb-2'>Submit a Grievance</h3>
          {/* Full Name */}
          
            <label className="block font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className=" w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

          {/* Email */}
         
            <label className="block font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />

          {/* Phone */}
          <div>
            <label className="block font-medium mb-1">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block font-medium mb-1">Grievance Category</label>
            <select
              defaultValue=""
              className="w-full border rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>Select category</option>
              <option>Faculty Issues</option>
              <option>Hostel Issues</option>
              <option>Food Issues</option>
              <option>Security Issues</option>
              <option>Other</option>
            </select>
          </div>

          {/* Subject */}
          <div>
            <label className="block font-medium mb-1">Subject</label>
            <input
              type="text"
              placeholder="Brief title of your grievance"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block font-medium mb-1">Description</label>
            <textarea
              rows="4"
              placeholder="Provide detailed information about your grievance"
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition "
          >
            Submit Grievance
          </button>

        </form>
    </div>
    </div>
    </>
  )
}

export default FormPage