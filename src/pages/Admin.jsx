import React, { useState } from "react";

const Admin = ({ handleLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState("user");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // LOGIN
      handleLogin(formData.email, formData.password);
    } else {
      // REGISTER (dummy for now)
      alert(`${role} registered successfully`);
      setIsLogin(true);
    }

    setFormData({ name: "", email: "", password: "" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <div className="bg-white w-80 lg:w-96 p-6 rounded-xl shadow">

        <h2 className="text-xl font-bold text-center mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>

        {/* Role Selection */}
        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setRole("admin")}
            className={`px-3 py-1 rounded ${
              role === "admin" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            Admin
          </button>

          <button
            onClick={() => setRole("user")}
            className={`px-3 py-1 rounded ${
              role === "user" ? "bg-blue-600 text-white" : "bg-gray-200"
            }`}
          >
            User
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">

          {/* Name (only for register) */}
          {!isLogin && (
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full border px-3 py-2 rounded"
              required
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full border px-3 py-2 rounded"
            required
          />

          {/* Password */}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full border px-3 py-2 rounded"
            required
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        {/* Toggle */}
        <div className="text-center mt-4 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}

          <span
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-600 cursor-pointer ml-1"
          >
            {isLogin ? "Register" : "Login"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Admin;