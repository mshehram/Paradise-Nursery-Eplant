import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("userData", JSON.stringify(formData));
    navigate("/login");
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/tree.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-white/80 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
          Create Account
        </h2>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300"
            required
          />
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#4caf50] hover:bg-[#43a047] text-white font-semibold py-2.5 rounded-lg transition duration-300 shadow-md hover:shadow-lg"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-700 mt-5">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#4caf50] cursor-pointer font-semibold hover:underline"
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
};

export default Signup;
