import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CallVolunteer = () => {
  const [hasCalled, setHasCalled] = useState(false);
  const navigate = useNavigate();
  const phoneNumber = '7674887932'; // Replace with your actual number

  useEffect(() => {
    const calledStatus = localStorage.getItem('hasMadeFreeCall');
    if (calledStatus === 'true') {
      setHasCalled(true);
    }
  }, []);

  const handleCallClick = () => {
    // Set the flag that user made their first free call
    localStorage.setItem('hasMadeFreeCall', 'true');
    setHasCalled(true);
    // Trigger phone dial
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleGoPremium = () => {
    navigate('/go-premium');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Call a Volunteer</h1>
      <p className="text-lg text-purple-700 mb-6">
        Need to talk? We're just a call away.
      </p>

      {!hasCalled ? (
        <button
          onClick={handleCallClick}
          className="bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-800 transition duration-300"
        >
          📞 Call Now (Free)
        </button>
      ) : (
        <button
          onClick={handleGoPremium}
          className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition duration-300"
        >
          🔒 Go Premium to Continue
        </button>
      )}
    </div>
  );
};

export default CallVolunteer;
