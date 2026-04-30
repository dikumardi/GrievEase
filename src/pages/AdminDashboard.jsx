// AdminDashboard.jsx
import React from "react";

const grievances = [
  {
    id: "#GR-345678",
    title: "Room lock not working properly",
    category: "security",
    room: "Room C-103",
    date: "11/18/2023",
    description:
      "The electronic lock on my room door is malfunctioning...",
    status: "Pending",
  },
  {
    id: "#GR-123456",
    title: "Broken ceiling fan",
    category: "maintenance",
    room: "Room A-101",
    date: "11/15/2023",
    description:
      "The ceiling fan has stopped working and makes noise...",
    status: "In Progress",
  },
];

const StatusBadge = ({ status }) => {
  const colors = {
    Pending: "bg-yellow-100 text-yellow-600",
    "In Progress": "bg-blue-100 text-blue-600",
    Resolved: "bg-green-100 text-green-600",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm ${colors[status]}`}>
      {status}
    </span>
  );
};

export default function AdminDashboard() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Generate Report
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Total Grievances</p>
          <h2 className="text-2xl font-bold">5</h2>
          <p className="text-sm text-gray-400">1 resolved</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">Pending</p>
          <h2 className="text-2xl font-bold">1</h2>
          <p className="text-sm text-gray-400">Awaiting action</p>
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          <p className="text-gray-500">In Progress</p>
          <h2 className="text-2xl font-bold">2</h2>
          <p className="text-sm text-gray-400">Being addressed</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-4">
        {["All", "Pending", "In Progress", "Resolved", "Rejected"].map(
          (tab) => (
            <button
              key={tab}
              className="px-4 py-1 rounded-full bg-gray-200 text-sm"
            >
              {tab}
            </button>
          )
        )}
      </div>

      {/* Grievance List */}
      <div className="bg-white rounded-xl shadow p-4">
        <h2 className="text-lg font-semibold mb-4">Grievances</h2>

        {grievances.map((g) => (
          <div
            key={g.id}
            className="border rounded-lg p-4 mb-4 flex justify-between"
          >
            <div>
              <h3 className="font-semibold">{g.title}</h3>
              <p className="text-sm text-gray-500">
                {g.category} • {g.room} • {g.date}
              </p>
              <p className="text-sm mt-2">{g.description}</p>

              {/* Buttons */}
              <div className="flex gap-2 mt-3">
                <button className="bg-green-100 text-green-600 px-3 py-1 rounded">
                  Mark Resolved
                </button>
                <button className="bg-blue-100 text-blue-600 px-3 py-1 rounded">
                  Mark In Progress
                </button>
                <button className="bg-red-100 text-red-600 px-3 py-1 rounded">
                  Reject
                </button>
              </div>
            </div>

            <div className="text-right">
              <StatusBadge status={g.status} />
              <p className="text-sm text-gray-400 mt-2">{g.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}