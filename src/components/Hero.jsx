import React from 'react'
import Button from '../components/Button'
import RightSectionContent from '../pages/RightSection/RightSectionContent'

const Hero = () => {
  return (
    <section className="px-6 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block text-blue-700 bg-blue-200 rounded-full px-4 py-1 text-sm mb-4">
            🚀 Introducing the New System
          </span>

          <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl mb-4">
            Hostel <span className="text-blue-600">GrievEase</span>
          </h1>

          <p className="text-gray-600 mb-6 max-w-md">
            Report and track grievances easily.
          </p>

          <Button />
        </div>

        <div className="flex-1">
          <RightSectionContent />
        </div>

      </div>
    </section>
  )
}

export default Hero