import React, { useState, useEffect } from 'react';

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  // Apply dark mode on mount based on local storage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode and persist setting
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
    localStorage.setItem("darkMode", !darkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className={`max-w-3xl mx-auto p-6 shadow-lg rounded-lg mt-10 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
      <h1 className="text-3xl font-bold text-center text-purple-700">Settings</h1>

      {/* Theme Customization */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Appearance</h3>
        <p className="text-gray-600 mt-2">Switch between light and dark mode for a better experience.</p>
        <button 
          className={`mt-2 px-4 py-2 rounded ${darkMode ? 'bg-yellow-500 text-white' : 'bg-gray-700 text-white'}`}
          onClick={toggleDarkMode}
        >
          {darkMode ? 'Disable Dark Mode' : 'Enable Dark Mode'}
        </button>
      </div>

      {/* Notification Preferences */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Notifications</h3>
        <p className="text-gray-600 mt-2">Manage your notification preferences for alerts and updates.</p>
        <button 
          className={`mt-2 px-4 py-2 rounded ${notificationsEnabled ? 'bg-red-500 text-white' : 'bg-gray-700 text-white'}`}
          onClick={() => setNotificationsEnabled(!notificationsEnabled)}
        >
          {notificationsEnabled ? 'Disable Notifications' : 'Enable Notifications'}
        </button>
      </div>

      {/* Privacy Settings */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Privacy & Security</h3>
        <p className="text-gray-600 mt-2">Control your privacy settings and manage session history.</p>
        <button className="mt-2 bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">Manage Privacy</button>
      </div>

      {/* Feedback Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Feedback & Support</h3>
        <p className="text-gray-600 mt-2">Have a suggestion or issue? Let us know!</p>
        <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit Feedback</button>
      </div>
    </div>
  );
}
