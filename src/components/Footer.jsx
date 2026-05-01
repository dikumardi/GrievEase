import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-bold text-white mb-3">
            GrievEase
          </h2>
          <p className="text-sm text-gray-400">
            Simplifying hostel grievance management with transparency,
            efficiency, and real-time tracking.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Submit Grievance</li>
            <li className="hover:text-white cursor-pointer">Track Status</li>
            <li className="hover:text-white cursor-pointer">Login</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">FAQs</li>
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">
            Contact
          </h3>
          <p className="text-sm text-gray-400 mb-2">
            📧 support@grievease.com
          </p>
          <p className="text-sm text-gray-400 mb-4">
            📞 +91 XXXXX XXXXX
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 text-lg">
            <span className="hover:text-white cursor-pointer">🌐</span>
            <span className="hover:text-white cursor-pointer">🐦</span>
            <span className="hover:text-white cursor-pointer">💼</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} GrievEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;