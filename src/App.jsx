import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import FormPage from "./pages/FormPage";
import Admin from "./pages/Admin";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import TrackStatus from "./pages/TrackStatus";
import Home from "./pages/Home";

const App = () => {
  const navigate = useNavigate();

  // Load role from localStorage
  const [userRole, setUserRole] = useState(
    localStorage.getItem("role") || null
  );

  // Handle Login
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

  // Logout
  const handleLogout = () => {
    setUserRole(null);
    localStorage.removeItem("role");
    navigate("/");
  };

  return (
    <div>
      {/* Navbar gets role + logout */}
      <Navbar userRole={userRole} handleLogout={handleLogout} />

      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Home />} />
        <Route path="/formpage" element={<FormPage />} />
        <Route path="/admin" element={<Admin handleLogin={handleLogin} />} />
        <Route path="/track" element={<TrackStatus />} />

        {/* Protected Admin Route */}
        <Route
          path="/adminDashboard"
          element={
            userRole === "admin" ? <AdminDashboard /> : <HeroSection />
          }
        />

        {/* Protected User Route */}
        <Route
          path="/userDashboard"
          element={
            userRole === "user" ? <UserDashboard /> : <HeroSection />
          }
        />
      </Routes>
    </div>
  );
};

export default App;