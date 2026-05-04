import React from "react";
import { Link } from "react-router-dom";

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
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/formpage" className="hover:text-white">Submit Grievance</Link></li>
            <li><Link to="/track" className="hover:text-white">Track Status</Link></li>
            <li><Link to="/admin" className="hover:text-white">Login</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm text-gray-400 mb-2">
            📧 support@grievease.com
          </p>
          <p className="text-sm text-gray-400 mb-4">
            📞 +91 XXXXX XXXXX
          </p>
        </div>

      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} GrievEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;