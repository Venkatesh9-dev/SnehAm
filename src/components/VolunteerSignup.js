// src/components/VolunteerSignup.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase'; // ✅ use existing auth and db exports

const VolunteerSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // ✅ Store volunteer role in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: 'volunteer',
      });

      navigate('/chat'); // Redirect after signup
    } catch (err) {
      console.error("Signup failed:", err);
      setError('Failed to sign up. Email may already be in use.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-50 p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Volunteer Sign Up</h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded-full border border-purple-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-full border border-purple-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-800 transition duration-300"
        >
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-purple-700">
        Already have an account?{" "}
        <Link to="/volunteer-login" className="underline font-semibold hover:text-purple-900">
          Login
        </Link>
      </p>
    </div>
  );
};

export default VolunteerSignup;
