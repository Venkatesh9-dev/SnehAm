import React from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerHome = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <div className="bg-white shadow-xl rounded-3xl p-10 max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome, Volunteer!</h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          <span className="italic font-semibold text-purple-600">
            "You are the one who cures and resolves problems — not with medicine, but with presence, patience, and empathy."
          </span>
        </p>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => navigate('/volunteer-chat')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-full shadow"
          >
            Go to Chat
          </button>
          <button
            onClick={() => navigate('/volunteer-profile')}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full shadow"
          >
            View Profile
          </button>
        </div>

        <p className="text-sm text-gray-500">Thank you for being here. You're making the world a better place 💙</p>
      </div>
    </div>
  );
};

export default VolunteerHome;
