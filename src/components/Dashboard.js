import React from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
     

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="bg-purple-700 text-white w-64 p-4 flex flex-col">
          <div className="text-2xl font-bold mb-8">Dashboard </div>
          <button className="mb-4 text-left hover:underline" onClick={() => navigate('/profile')}>Profile</button>
          <button className="mb-4 text-left hover:underline" onClick={() => navigate('/settings')}>Settings</button>
          <button className="mb-4 text-left hover:underline" onClick={() => navigate('/login')}>Logout</button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col items-center justify-center bg-gray-100 p-0">
          {/* Centered Welcome Message */}
          <h1 className="text-3xl font-bold text-gray-800 text-center">Welcome to SnehAm ❤️</h1>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Call a Volunteer</h2>
              <p className="text-gray-600 mb-4">Need someone to talk to? Connect with a volunteer instantly.</p>
              <button onClick={() => navigate('/call')} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Call Now</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Chat with Volunteer</h2>
              <p className="text-gray-600 mb-4">Open a private chat and share what’s on your mind.</p>
              <button onClick={() => navigate('/chat')} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Chat Now</button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h2 className="text-xl font-semibold text-purple-700 mb-2">Need Professional Therapy?</h2>
              <p className="text-gray-600 mb-4">We'll refer you to licensed professionals securely.</p>
              <button onClick={() => navigate('/therapy')} className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Request Help</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
