import React from 'react'
import Button from '../components/Button'
import RightSectionContent from './RightSection/RightSectionContent'

const HeroSection = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="px-6 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

          {/* LEFT */}
          <div className="flex-1 text-center lg:text-left">

            <span className="inline-block text-blue-700 bg-blue-200 rounded-full px-4 py-1 text-sm mb-4">
              🚀 Introducing the New System
            </span>

            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4 leading-tight text-gray-900">
              Hostel <span className="text-blue-600">GrievEase</span>
            </h1>

            <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-md mx-auto lg:mx-0">
              A simple, intuitive system for hostel residents to report
              and track the status of their grievances efficiently.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Button />
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex-1 w-full">
            <RightSectionContent />
          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            How it works
          </h2>

          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            A simple 3-step process to report and resolve hostel issues quickly and efficiently.
          </p>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="p-6 bg-blue-50 border border-blue-100 rounded-xl hover:shadow-lg hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">
                Submit a Grievance
              </h3>
              <p className="text-gray-600 text-sm">
                Easily raise issues through a simple and user-friendly interface.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="p-6 bg-purple-50 border border-purple-100 rounded-xl hover:shadow-lg hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2 text-purple-700">
                Track Status
              </h3>
              <p className="text-gray-600 text-sm">
                Stay updated with real-time progress of your complaints.
              </p>
            </div>

            {/* CARD 3 */}
            <div className="p-6 bg-green-50 border border-green-100 rounded-xl hover:shadow-lg hover:-translate-y-1 transition">
              <h3 className="font-semibold text-lg mb-2 text-green-700">
                Get Resolution
              </h3>
              <p className="text-gray-600 text-sm">
                Receive timely solutions and ensure accountability.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-10">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              GrievEase
            </h3>
            <p className="text-sm text-gray-400">
              Simplifying hostel grievance management with transparency and efficiency.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Submit Grievance</li>
              <li className="hover:text-white cursor-pointer">Track Status</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-400">support@grievease.com</p>
            <p className="text-sm text-gray-400">+91 XXXXX XXXXX</p>
          </div>

        </div>

        {/* Bottom */}
        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} GrievEase. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default HeroSection