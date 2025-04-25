import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'; // ✅ Import Navbar
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import GetStarted from './components/GetStarted';

function App() {
  return (
    <Router>
      <Navbar /> {/* ✅ Show on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/get-started" element={<GetStarted />} />
      </Routes>
    </Router>
  );
}

export default App;
