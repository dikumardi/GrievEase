import React from "react";
import { Link } from "react-router-dom";

const ReportHero = () => {
  return (
    <section className="bg-gray-50 min-h-[60vh] flex items-center justify-center px-6">

      <div className="max-w-4xl w-full bg-gradient-to-br from-blue-100 via-white to-blue-100 rounded-2xl p-10 md:p-14 text-center shadow-sm">

        {/* Heading */}
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Report an Issue?
        </h1>

        {/* Subtext */}
        <p className="text-gray-600 mb-8 max-w-xl mx-auto text-sm md:text-base">
          Don't let minor issues affect your hostel experience. Report them now
          and get them resolved quickly.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <Link to="/formpage">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full sm:w-auto">
              Submit a Grievance
            </button>
          </Link>

          <Link to="/track">
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-400 transition w-full sm:w-auto">
              Track Existing Grievance
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
};

export default ReportHero;