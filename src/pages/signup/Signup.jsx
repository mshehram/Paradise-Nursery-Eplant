import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    localStorage.setItem("userData", JSON.stringify(data));
    navigate("/login");
  };

  const password = watch("password");

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/tree.jpg')",
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="backdrop-blur-md bg-white/80 p-8 rounded-2xl shadow-2xl w-full max-w-md border border-white/30"
      >
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800 tracking-wide">
          Create Account
        </h2>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Full name is required",
              minLength: { value: 3, message: "Minimum 3 characters" },
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: "Only letters are allowed",
              },
            })}
            placeholder="Enter your full name"
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Enter a valid email address",
              },
            })}
            placeholder="Enter your email"
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-5">
          <label className="block text-gray-700 mb-2 font-medium">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message:
                  "Password must have 1 uppercase, 1 number, and be at least 8 characters long",
              },
            })}
            placeholder="Enter password"
            className={`w-full px-4 py-2 border ${
              errors.password ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300`}
          />
          {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-2 font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) => value === password || "Passwords do not match",
            })}
            placeholder="Re-enter password"
            className={`w-full px-4 py-2 border ${
              errors.confirmPassword ? "border-red-500" : "border-gray-300"
            } rounded-lg focus:ring-2 focus:ring-[#4caf50] focus:outline-none transition duration-300`}
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
          )}
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
