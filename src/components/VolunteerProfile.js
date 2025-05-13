import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const VolunteerProfile = () => {
  const navigate = useNavigate();

  const [editMode, setEditMode] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'Volunteer Name',
    email: 'volunteer@example.com',
    phone: '9876543210',
    bio: 'Passionate about helping people and making a difference.',
    experience: '2 years in emotional support volunteering',
  });

  const handleChange = (e) => {
    setProfileData({
      ...profileData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // You can add Firebase update logic here if needed
    setEditMode(false);
  };

  const handleExit = () => {
    navigate('/volunteer-home'); // ✅ Navigate to Volunteer Home
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-semibold text-center mb-6">Volunteer Profile</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-gray-600">Name</label>
          {editMode ? (
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          ) : (
            <p>{profileData.name}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600">Email</label>
          {editMode ? (
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          ) : (
            <p>{profileData.email}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600">Phone</label>
          {editMode ? (
            <input
              type="text"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          ) : (
            <p>{profileData.phone}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600">Bio</label>
          {editMode ? (
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          ) : (
            <p>{profileData.bio}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-600">Experience</label>
          {editMode ? (
            <textarea
              name="experience"
              value={profileData.experience}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
          ) : (
            <p>{profileData.experience}</p>
          )}
        </div>
      </div>

      <div className="flex gap-4 justify-center mt-6">
        {editMode ? (
          <button
            onClick={handleSave}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        )}
        <button
          onClick={handleExit}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Exit
        </button>
      </div>
    </div>
  );
};

export default VolunteerProfile;
