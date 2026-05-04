import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Grievance submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">

      <div className="max-w-3xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">
          Submit a Grievance
        </h2>

        <p className="text-center text-gray-500 mb-8">
          Fill out the form below to report any issues or concerns.
        </p>

        {/* Form Card */}
        <div className="bg-white p-8 rounded-2xl shadow-md">

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-medium mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label className="block font-medium mb-1">
                Grievance Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                required
              >
                <option value="">Select category</option>
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
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Brief title of your grievance"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                rows="4"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Provide detailed information..."
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                required
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Grievance
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;