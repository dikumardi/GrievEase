import React, { useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import HeroSection from "./pages/HeroSection";
import FormPage from "./pages/FormPage";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import TrackStatus from "./pages/TrackStatus";
import FAQ from "./components/FAQ";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";
import Terms from "./pages/Terms";

const App = () => {
  const navigate = useNavigate();

  // Load role from localStorage
  const [userRole, setUserRole] = useState(
    localStorage.getItem("role") || null
  );

  // 🔐 Login
  const handleLogin = (email, password) => {
    if (email === "admin@gmail.com" && password === "123") {
      setUserRole("admin");
      localStorage.setItem("role", "admin");
      navigate("/adminDashboard");
    } else if (email === "user@gmail.com" && password === "123") {
      setUserRole("user");
      localStorage.setItem("role", "user");
      navigate("/userDashboard");
    } else {
      alert("Invalid Credentials");
    }
  };

  // 🚪 Logout
  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div>
      <Navbar userRole={userRole} handleLogout={handleLogout} />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/admin" element={<Admin handleLogin={handleLogin} />} />
        <Route path="/track" element={<TrackStatus />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/terms" element={<Terms />} />

        {/* Protected Admin Route */}
        <Route
          path="/adminDashboard"
          element={
            userRole === "admin" ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin" />
            )
          }
        />

        {/* Protected User Route */}
        <Route
          path="/userDashboard"
          element={
            userRole === "user" ? (
              <UserDashboard />
            ) : (
              <Navigate to="/admin" />
            )
          }
        />

        {/* 404 Route */}
        <Route path="*" element={<h1 className="text-center mt-10">404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
};

export default App;