// TrackStatus.jsx
import React, { useState } from "react";

const mockData = {
  "#GR-345678": {
    title: "Room lock not working properly",
    description: "Electronic lock not recognizing card",
    status: "In Progress",
    steps: [
      { label: "Submitted", completed: true },
      { label: "Under Review", completed: true },
      { label: "In Progress", completed: true },
      { label: "Resolved", completed: false },
    ],
  },
};

const StatusBadge = ({ status }) => {
  const styles = {
    Pending: "bg-yellow-100 text-yellow-600",
    "In Progress": "bg-blue-100 text-blue-600",
    Resolved: "bg-green-100 text-green-600",
    Rejected: "bg-red-100 text-red-600",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${styles[status]}`}>
      {status}
    </span>
  );
};

export default function TrackStatus() {
  const [grievanceId, setGrievanceId] = useState("");
  const [data, setData] = useState(null);

  const handleSearch = () => {
    const result = mockData[grievanceId];
    setData(result || null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">Track Grievance Status</h1>

      {/* Search Box */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex gap-3">
        <input
          type="text"
          placeholder="Enter Grievance ID (e.g. #GR-345678)"
          className="border p-2 rounded w-full"
          value={grievanceId}
          onChange={(e) => setGrievanceId(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Track
        </button>
      </div>

      {/* Result */}
      {data ? (
        <div className="bg-white p-6 rounded-xl shadow">

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">{data.title}</h2>
            <StatusBadge status={data.status} />
          </div>

          <p className="text-gray-600 mb-6">{data.description}</p>

          {/* Timeline */}
          <div className="space-y-4">
            {data.steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full ${
                    step.completed ? "bg-green-500" : "bg-gray-300"
                  }`}
                ></div>
                <p
                  className={`${
                    step.completed ? "text-black" : "text-gray-400"
                  }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        grievanceId && (
          <p className="text-red-500">No grievance found</p>
        )
      )}
    </div>
  );
}