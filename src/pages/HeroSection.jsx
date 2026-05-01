import React, { useState } from 'react'
import Button from '../components/Button'
import RightSectionContent from './RightSection/RightSectionContent'

const HeroSection = () => {

  // FAQ State
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "How do I submit a grievance?",
      answer: "Go to the 'Submit Grievance' page and fill in your issue details."
    },
    {
      question: "How can I track my complaint?",
      answer: "Use the 'Track Status' page and enter your grievance ID."
    },
    {
      question: "How long does it take to resolve issues?",
      answer: "Most issues are resolved within 24–72 hours."
    },
    {
      question: "Can I edit my grievance?",
      answer: "Currently editing is not supported. Contact admin for updates."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      {/* HERO SECTION */}
      <section className="px-6 py-16 bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

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

            <div className="p-6 bg-blue-50 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-blue-700">
                Submit a Grievance
              </h3>
              <p className="text-gray-600 text-sm">
                Easily raise issues through a simple interface.
              </p>
            </div>

            <div className="p-6 bg-purple-50 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-purple-700">
                Track Status
              </h3>
              <p className="text-gray-600 text-sm">
                Stay updated with real-time progress.
              </p>
            </div>

            <div className="p-6 bg-green-50 border rounded-xl hover:shadow-lg transition">
              <h3 className="font-semibold text-lg mb-2 text-green-700">
                Get Resolution
              </h3>
              <p className="text-gray-600 text-sm">
                Receive timely solutions.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ SECTION (ACCORDION) */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-500 text-center mb-10">
            Click on a question to view the answer.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center p-5">
                  <h3 className="font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                  <span className="text-xl">
                    {openIndex === index ? "-" : "+"}
                  </span>
                </div>

                {openIndex === index && (
                  <div className="px-5 pb-5 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 px-6 py-10">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">

          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              GrievEase
            </h3>
            <p className="text-sm text-gray-400">
              Simplifying hostel grievance management efficiently.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Submit</li>
              <li className="hover:text-white cursor-pointer">Track</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p className="text-sm text-gray-400">support@grievease.com</p>
            <p className="text-sm text-gray-400">+91 XXXXX XXXXX</p>
          </div>

        </div>

        <div className="text-center text-sm text-gray-500 mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} GrievEase. All rights reserved.
        </div>
      </footer>
    </>
  )
}

export default HeroSection