import React from 'react';

export default function Profile() {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-purple-700">Your Profile</h1>

      {/* User Info */}
      <div className="flex items-center mt-6">
        <img src="https://via.placeholder.com/100" alt="Profile" className="rounded-full border-4 border-purple-700" />
        <div className="ml-6">
          <h2 className="text-xl font-semibold">Venkatesh</h2>
          <p className="text-gray-600">venkatesh@example.com</p>
          <button className="mt-2 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">Edit Profile</button>
        </div>
      </div>

      {/* Account Settings */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Account Settings</h3>
        <p className="text-gray-600 mt-2">Manage your account preferences and security.</p>
        <button className="mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Change Password</button>
        <button className="mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 ml-2">Notification Settings</button>
      </div>

      {/* Activity Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Recent Activity</h3>
        <ul className="mt-4">
          <li className="text-gray-600">✔ Called a volunteer - 2 days ago</li>
          <li className="text-gray-600">✔ Started a chat session - 5 days ago</li>
          <li className="text-gray-600">✔ Booked professional therapy - 1 week ago</li>
        </ul>
      </div>

      {/* Premium Offer */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-semibold text-purple-700">Upgrade to Premium</h3>
        <p className="text-gray-600 mt-2">Get access to priority support, exclusive content, and more!</p>
        <button className="mt-4 bg-yellow-500 text-white px-6 py-3 rounded-xl hover:bg-green-600 transition duration-300">
          Go Premium
        </button>
      </div>
    </div>
  );
}
