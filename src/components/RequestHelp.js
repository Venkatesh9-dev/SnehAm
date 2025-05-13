// src/components/RequestHelp.jsx
import React from 'react';

export default function RequestHelp() {
  return (
    <div className="pt-24 px-4 flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Fix an Appointment</h1>
      <p className="text-lg text-gray-700 mb-6 max-w-md">
        One of our professional therapists will get in touch with you soon.
      </p>
      <button
        onClick={() => alert('Your request has been submitted!')}
        className="bg-purple-600 text-white px-6 py-3 rounded-xl hover:bg-purple-700 transition duration-300"
      >
        Request Now
      </button>
    </div>
  );
}
