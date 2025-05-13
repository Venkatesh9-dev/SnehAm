import React from 'react';
import { Link } from 'react-router-dom';

export default function DashboardNavbar() {
  return (
    <nav className="bg-purple-800 text-white px-6 py-4 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
      <div className="text-xl font-bold">SnehAm 💜</div>
      <div className="space-x-6">
        <Link to="/support" className="hover:underline">Support</Link>
        <Link to="/notifications" className="hover:underline">Notifications</Link>
        <Link
          to="/go-premium" // ✅ updated path
          className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition duration-300"
        >
          Go Premium
        </Link>
      </div>
    </nav>
  );
}
