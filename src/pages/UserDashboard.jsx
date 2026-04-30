// UserDashboard.jsx
import React, { useState } from "react";

const dummyGrievances = [
  {
    id: "#GR-345678",
    title: "Room lock not working",
    date: "11/18/2023",
    status: "Pending",
  },
  {
    id: "#GR-123456",
    title: "Fan not working",
    date: "11/15/2023",
    status: "Resolved",
  },
];

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

export default function UserDashboard() {
  const [grievances, setGrievances] = useState(dummyGrievances);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">

      {/* Header */}
      <h1 className="text-2xl font-bold mb-6">User Dashboard</h1>

      {/* Submit Grievance Form */}
      <div className="bg-white p-4 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-3">Submit Grievance</h2>

        <form className="grid gap-3">
          <input
            type="text"
            placeholder="Title"
            className="border p-2 rounded"
          />

          <textarea
            placeholder="Describe your issue"
            className="border p-2 rounded"
          />

          <button className="bg-blue-600 text-white py-2 rounded">
            Submit
          </button>
        </form>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Total</p>
          <h2 className="text-xl font-bold">{grievances.length}</h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-xl font-bold">
            {grievances.filter((g) => g.status === "Pending").length}
          </h2>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Resolved</p>
          <h2 className="text-xl font-bold">
            {grievances.filter((g) => g.status === "Resolved").length}
          </h2>
        </div>
      </div>

      {/* Grievance List */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">My Grievances</h2>

        {grievances.map((g) => (
          <div
            key={g.id}
            className="border rounded-lg p-4 mb-3 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-sm text-gray-500">{g.date}</p>
            </div>

            <div className="text-right">
              <StatusBadge status={g.status} />
              <p className="text-xs text-gray-400 mt-1">{g.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}