import React from 'react';

import { Link } from 'react-router-dom';




function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-300 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">SnehAm Login</h2>
        
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-xl hover:bg-purple-700 transition duration-300"
          >
            Login
          </button>
        </form>

       

<p className="text-sm text-gray-500 mt-4 text-center">
  Don’t have an account?{" "}
  <Link to="/signup" className="text-purple-700 font-semibold hover:underline">
    Sign up
  </Link>
</p>

      </div>
    </div>
  );
}

export default Login;
