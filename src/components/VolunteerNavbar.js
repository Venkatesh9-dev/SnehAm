import React from "react";
import { useNavigate } from "react-router-dom";

function VolunteerNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-purple-600 text-white px-6 py-3 flex justify-between items-center shadow-md">
      <div
        className="text-2xl font-bold cursor-pointer"
        onClick={() => navigate("/volunteer-home")}
      >
        SnehAm
      </div>

      <div className="space-x-6 text-lg">
        <button onClick={() => navigate("/volunteer-home")} className="hover:underline">
          Home
        </button>
        <button onClick={() => navigate("/volunteer-profile")} className="hover:underline">
          My Profile
        </button>
        <button onClick={handleLogout} className="hover:underline">
          Logout
        </button>
      </div>
    </nav>
  );
}

export default VolunteerNavbar;
