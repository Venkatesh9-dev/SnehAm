import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate, Link } from 'react-router-dom';
import { auth, db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const VolunteerLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);  // For showing loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);  // Set loading state to true when submitting form

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Check if the user is a valid volunteer
      const docRef = doc(db, 'volunteers', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const volunteerData = docSnap.data();

        // Check if the volunteer is approved
        if (volunteerData.approved === true) {
          // User is a valid volunteer and approved
          navigate('/volunteer-chat');
        } else {
          // Not approved, deny access
          setError("Access denied. You're not an authorized volunteer.");
          auth.signOut();
        }
      } else {
        // No document found for this UID, deny access
        setError("Access denied. You're not an authorized volunteer.");
        auth.signOut();
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError('Failed to log in. Please check your credentials.');
    } finally {
      setLoading(false);  // Set loading state back to false once done
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Volunteer Login</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-2 rounded-full border border-purple-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onFocus={() => setError('')}  // Clear error on user input
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-full border border-purple-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onFocus={() => setError('')}  // Clear error on user input
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className={`bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-800 transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}  // Disable button while loading
        >
          {loading ? 'Logging in...' : 'Sign In'}
        </button>
      </form>
      <p className="mt-4 text-sm text-purple-700">
        Don't have an account?{" "}
        <Link to="/volunteer-signup" className="underline font-semibold hover:text-purple-900">
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default VolunteerLogin;
