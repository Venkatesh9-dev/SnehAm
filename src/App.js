import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import DashboardNavbar from './components/DashboardNavbar';
import MinimalNavbar from './components/MinimalNavbar';

import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import Settings from './components/Settings';
import CallVolunteer from './components/CallVolunteer';
import ChatVolunteer from './components/ChatVolunteer';
import ProfessionalTherapy from './components/ProfessionalTherapy';
import Home from './components/Home';
import GetStarted from './components/GetStarted';
import Support from './components/Support';
import Notifications from './components/Notifications';
import RequestHelp from './components/RequestHelp';
import GoPremium from './components/GoPremium';

import VolunteerLogin from './components/VolunteerLogin';
import VolunteerSignup from './components/VolunteerSignup';
import VolunteerChat from './components/VolunteerChat';
import VolunteerProfile from './components/VolunteerProfile';
import VolunteerHome from './components/VolunteerHome';

import ProtectedVolunteerRoute from './components/ProtectedVolunteerRoute'; // ✅ Import

const AppWrapper = () => {
  const location = useLocation();
  const path = location.pathname.replace(/\/+$/, '');

  const minimalNavbarRoutes = [
    "/profile",
    "/settings",
    "/call",
    "/chat",
    "/notifications",
    "/therapy",
    "/support",
    "/go-premium"
  ];

  const getNavbar = () => {
    if (path.startsWith("/volunteer")) {
      return null;
    } else if (minimalNavbarRoutes.includes(path)) {
      return <MinimalNavbar />;
    } else if (path.startsWith("/dashboard")) {
      return <DashboardNavbar />;
    } else {
      return <Navbar />;
    }
  };

  return (
    <>
      {getNavbar()}
      <div className={path.startsWith("/dashboard") || path.startsWith("/volunteer") ? "" : "pt-20"}>
        <Routes>
          {/* General User Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/call" element={<CallVolunteer />} />
          <Route path="/chat" element={<ChatVolunteer />} />
          <Route path="/therapy" element={<ProfessionalTherapy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/go-premium" element={<GoPremium />} />
          <Route path="/" element={<Home />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/request-help" element={<RequestHelp />} />

          {/* Volunteer Auth Routes */}
          <Route path="/volunteer-login" element={<VolunteerLogin />} />
          <Route path="/volunteer-signup" element={<VolunteerSignup />} />

          {/* Protected Volunteer Routes */}
          <Route
            path="/volunteer-home"
            element={
              <ProtectedVolunteerRoute>
                <VolunteerHome />
              </ProtectedVolunteerRoute>
            }
          />
          <Route
            path="/volunteer-chat"
            element={
              <ProtectedVolunteerRoute>
                <VolunteerChat />
              </ProtectedVolunteerRoute>
            }
          />
          <Route
            path="/volunteer-profile"
            element={
              <ProtectedVolunteerRoute>
                <VolunteerProfile />
              </ProtectedVolunteerRoute>
            }
          />
        </Routes>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
