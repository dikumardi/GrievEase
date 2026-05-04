import React, { useState } from "react";

const faqs = [
  {
    question: "How do I submit a grievance?",
    answer:
      "Go to the 'Submit Grievance' page and fill out the form with your issue details.",
  },
  {
    question: "How can I track my complaint?",
    answer:
      "Use the 'Track Status' page and enter your grievance ID to see the progress.",
  },
  {
    question: "How long does it take to resolve issues?",
    answer:
      "Most grievances are resolved within 24–72 hours depending on the issue type.",
  },
  {
    question: "Can I edit my grievance after submission?",
    answer:
      "Currently, editing is not available. You can contact the admin for updates.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="px-6 py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Click on a question to expand and view the answer.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border rounded-xl shadow-sm"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-5 text-left"
              >
                <span className="font-medium text-gray-800">
                  {faq.question}
                </span>

                {/* Arrow Icon */}
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              <div
                className={`px-5 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-40 py-3" : "max-h-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;