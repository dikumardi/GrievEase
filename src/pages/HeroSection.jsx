import React from 'react'
import Button from '../components/Button'
import RightSectionContent from './RightSection/RightSectionContent'

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* LEFT CONTENT */}
          <div className="flex-1 text-center lg:text-left">
            <span className="inline-block text-blue-600 bg-blue-100 rounded-full px-4 py-1 text-sm mb-4">
              Introducing the New System
            </span>

            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl mb-4 leading-tight">
              Hostel GrievEase
            </h1>

            <p className="text-gray-500 mb-6 text-sm sm:text-base">
              A simple, intuitive system for hostel residents to report
              and track the status of their grievances efficiently.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button />
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex-1 w-full">
            <RightSectionContent />
          </div>

        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
            How it works
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            A simple 3-step process to report and resolve hostel issues quickly and efficiently.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Submit a Grievance</h3>
              <p className="text-gray-500 text-sm">
                Easily raise issues through a simple and user-friendly interface.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Track Status</h3>
              <p className="text-gray-500 text-sm">
                Stay updated with real-time progress of your complaints.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
              <h3 className="font-semibold text-lg mb-2">Get Resolution</h3>
              <p className="text-gray-500 text-sm">
                Receive timely solutions and ensure accountability.
              </p>
            </div>

          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection