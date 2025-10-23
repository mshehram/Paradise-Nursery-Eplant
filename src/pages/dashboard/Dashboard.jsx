import React, { useState } from "react";
import plantsData from "../../data/plantsData";

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [activePage, setActivePage] = useState("home");
  const [selectedCategory, setSelectedCategory] = useState("AirPurifyingPlants");

  const renderMainContent = () => {
    if (activePage === "home") {
      return (
        <div
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } rounded-2xl shadow-md p-6 transition-all duration-300`}
        >
          <h2 className="text-xl font-semibold mb-4">Main Content Area</h2>
          <p className="text-base">
            Welcome to Paradise Nursery Dashboard. Click on "Plants" to see all products.
          </p>
        </div>
      );
    } else if (activePage === "plants") {
      const plants = plantsData[selectedCategory] || [];
      return (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-4">All Products</h2>
          <div className="mb-4">
            <button
              onClick={() => setSelectedCategory("AirPurifyingPlants")}
              className={`px-4 py-2 mr-2 rounded-lg ${
                selectedCategory === "AirPurifyingPlants"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Air Purifying Plants
            </button>
            <button
              onClick={() => setSelectedCategory("FragrantPlants")}
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "FragrantPlants"
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              Fragrant Plants
            </button>
          </div>
          <div className="overflow-x-auto">
            <table
              className={`min-w-full shadow-md rounded-lg overflow-hidden ${
                darkMode ? "bg-gray-700" : "bg-white"
              }`}
            >
              <thead className={`${
                darkMode ? "bg-gray-600 text-white" : "bg-green-600 text-white"
              }`}>
                <tr>
                  <th className="px-4 py-2 text-left">Image</th>
                  <th className="px-4 py-2 text-left">Name</th>
                  <th className="px-4 py-2 text-left">Price</th>
                  <th className="px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody className={darkMode ? "text-white" : "text-gray-800"}>
                {plants.map((plant) => (
                  <tr
                    key={plant.id}
                    className={`border-b ${
                      darkMode ? "hover:bg-gray-600" : "hover:bg-gray-100"
                    }`}
                  >
                    <td className="px-4 py-2">
                      <img
                        src={plant.image}
                        alt={plant.name}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="px-4 py-2">{plant.name}</td>
                    <td className="px-4 py-2">${plant.price}</td>
                    <td className="px-4 py-2">{plant.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (activePage === "cart") {
      return (
        <div
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } rounded-2xl shadow-md p-6 transition-all duration-300`}
        >
          <h2 className="text-xl font-semibold mb-4">Cart</h2>
          <p>Your cart is empty.</p>
        </div>
      );
    }
  };

  return (
    <div
      className={`flex h-screen transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div
        className={`w-64 ${
          darkMode ? "bg-gray-800" : "bg-green-600"
        } text-white flex flex-col transition-all duration-300`}
      >
        <div className="flex items-center justify-center px-4 py-5 border-b border-green-500">
          <h2 className="font-bold text-xl">Dashboard</h2>
        </div>
        <nav className="flex-1 px-4 py-4 space-y-3">
          <button
            onClick={() => setActivePage("home")}
            className="block w-full text-left px-3 py-2 rounded-lg hover:bg-green-500"
          >
            Home
          </button>
          <button
            onClick={() => setActivePage("plants")}
            className="block w-full text-left px-3 py-2 rounded-lg hover:bg-green-500"
          >
            Plants
          </button>
          <button
            onClick={() => setActivePage("cart")}
            className="block w-full text-left px-3 py-2 rounded-lg hover:bg-green-500"
          >
            Cart
          </button>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <div
          className={`${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          } shadow-md py-4 px-6 flex justify-between items-center transition-all duration-300`}
        >
          <h1
            className={`text-2xl font-bold ${
              darkMode ? "text-green-400" : "text-green-600"
            }`}
          >
            Welcome To Paradise Nursery
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`${
              darkMode
                ? "bg-green-500 hover:bg-green-600"
                : "bg-gray-200 hover:bg-gray-300"
            } px-4 py-2 rounded-lg font-semibold text-sm transition duration-300`}
          >
            {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
          </button>
        </div>
        <main className="flex-1 p-6 overflow-y-auto">{renderMainContent()}</main>
      </div>
    </div>
  );
};

export default Dashboard;
