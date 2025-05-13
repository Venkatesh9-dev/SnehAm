// src/components/Navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname.replace(/\/+$/, ''); // Normalize trailing slashes

  // Minimal navbar routes
  const minimalNavbarRoutes = ["/go-premium", "/request-help"];

  // Check if current path is one of the minimal routes
  const isMinimal = minimalNavbarRoutes.includes(currentPath);

  return (
    <nav className="bg-purple-600 text-white px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
      {/* Left Side - Branding */}
      <div className="text-xl font-bold">SnehAm 💜</div>

      {/* Right Side - Conditional Links */}
      <div className="space-x-6 flex items-center">
        {isMinimal ? (
          <>
            <Link to="/dashboard" className="bg-gray-800 px-4 py-2 rounded-xl hover:bg-gray-700 transition duration-300">
              Dashboard
            </Link>
            <button
              className="bg-red-600 px-4 py-2 rounded-xl hover:bg-red-700 transition duration-300"
              onClick={() => alert("Logged Out!")}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/login" className="hover:underline">Login</Link>
            <Link
              to="/signup"
              className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-xl hover:bg-purple-100 transition duration-300"
            >
              Sign Up
            </Link>
            {/* Add Volunteer Login Link */}
            <Link
              to="/volunteer-login"
              className="bg-white text-purple-700 font-semibold px-4 py-2 rounded-xl hover:bg-purple-100 transition duration-300"
            >
              Volunteer Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
