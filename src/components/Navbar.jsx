import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg text-gray-800">
          <span className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full">
            GR
          </span>
          GrievEase
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600 transition">
            Home
          </Link>
          <Link to="/formpage" className="hover:text-blue-600 transition">
            Submit
          </Link>
          <Link to="/track" className="hover:text-blue-600 transition">
            Track Status
          </Link>
          <Link to="/admin" className="hover:text-blue-600 transition">
            Login
          </Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-3 text-gray-700 font-medium">
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link to="/formpage" onClick={() => setMenuOpen(false)}>
            Submit
          </Link>
          <Link to="/track" onClick={() => setMenuOpen(false)}>
            Track Status
          </Link>
          <Link to="/admin" onClick={() => setMenuOpen(false)}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;