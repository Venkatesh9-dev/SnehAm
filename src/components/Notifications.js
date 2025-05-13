import React, { useState } from 'react';

export default function Notifications() {
  // Sample notifications (Can be replaced with dynamic data from backend)
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New message from a volunteer!", type: "Support", unread: true },
    { id: 2, message: "Your therapy session is scheduled for tomorrow.", type: "Therapy", unread: true },
    { id: 3, message: "New community update available.", type: "General", unread: false }
  ]);

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(notifications.map(notif =>
      notif.id === id ? { ...notif, unread: false } : notif
    ));
  };

  // Clear all notifications
  const clearNotifications = () => {
    setNotifications([]);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-purple-700">Notifications</h1>

      {/* Notification List */}
      <div className="mt-6 space-y-4">
        {notifications.length > 0 ? notifications.map(notif => (
          <div key={notif.id} className={`p-4 rounded ${notif.unread ? 'bg-gray-100' : 'bg-gray-200'}`}>
            <h4 className="font-semibold text-purple-700">{notif.type} Alert</h4>
            <p className="text-gray-600">{notif.message}</p>
            {notif.unread && (
              <button
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => markAsRead(notif.id)}
              >
                Mark as Read
              </button>
            )}
          </div>
        )) : (
          <p className="text-gray-600 text-center mt-4">No new notifications.</p>
        )}
      </div>

      {/* Clear All Button */}
      {notifications.length > 0 && (
        <div className="text-center mt-6">
          <button
            className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 transition duration-300"
            onClick={clearNotifications}
          >
            Clear All Notifications
          </button>
        </div>
      )}
    </div>
  );
}
