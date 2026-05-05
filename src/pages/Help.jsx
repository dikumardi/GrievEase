import React from "react";

const Help = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-2xl font-bold mb-4">Help Center</h1>
      <p className="mb-3">
        Need help? Follow these steps:
      </p>
      <ul className="list-disc ml-5 space-y-2">
        <li>Submit your grievance from the "Submit Grievance" page.</li>
        <li>Track status using your grievance ID.</li>
        <li>Contact admin if your issue is unresolved.</li>
      </ul>
    </div>
  );
};

export default Help;