import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("userData"));

    if (
      storedUser &&
      storedUser.email === loginData.email &&
      storedUser.password === loginData.password
    ) {
      navigate("/dashboard");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-400 outline-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-300"
        >
          Login
        </button>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-green-600 cursor-pointer hover:underline"
          >
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
