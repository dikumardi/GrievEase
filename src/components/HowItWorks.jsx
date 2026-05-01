import React from 'react'

const steps = [
  {
    title: "Submit a Grievance",
    desc: "Easily raise your issue using a simple and user-friendly form interface.",
    color: "bg-blue-50 text-blue-700",
    icon: "📝"
  },
  {
    title: "Track Status",
    desc: "Monitor the real-time progress of your complaint anytime, anywhere.",
    color: "bg-purple-50 text-purple-700",
    icon: "📊"
  },
  {
    title: "Get Resolution",
    desc: "Receive timely solutions and ensure transparency in the process.",
    color: "bg-green-50 text-green-700",
    icon: "✅"
  }
]

const HowItWorks = () => {
  return (
    <section className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          How it works
        </h2>

        <p className="text-gray-500 max-w-2xl mx-auto mb-12">
          A simple 3-step process to report and resolve hostel issues quickly and efficiently.
        </p>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {steps.map((step, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 flex items-center justify-center rounded-full mb-4 text-xl ${step.color}`}>
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2 text-gray-800">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default HowItWorks