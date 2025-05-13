import React, { useState } from 'react';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../firebase';

const ProfessionalTherapy = () => {
  const [form, setForm] = useState({ name: '', email: '', issue: '' });
  const [showPopup, setShowPopup] = useState(false);
  const [appointmentDetails, setAppointmentDetails] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 🔍 Check if the user has already used the free session
      const q = query(
        collection(db, 'appointmentRequests'),
        where('email', '==', form.email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert('You have already used your free session. Please upgrade to premium.');
        return;
      }

      // ✅ Allow submission for first-time users
      await addDoc(collection(db, 'appointmentRequests'), {
        ...form,
        status: 'pending',
        assigned: false,
        createdAt: new Date(),
      });

      // Simulate assigning a doctor after 5 seconds
      setTimeout(() => {
        const details = {
          doctor: 'Dr. Sneha ',
          time: '06:30 PM',
          date: new Date().toLocaleDateString(),
        };
        setAppointmentDetails(details); // Set the appointment details
        setShowPopup(true); // Show the popup after the doctor is assigned
      }, 5000);

      // Reset the form
      setForm({ name: '', email: '', issue: '' });
    } catch (err) {
      console.error('Error submitting appointment:', err);
      alert('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-purple-50 p-6">
      <h1 className="text-3xl font-bold text-purple-800 mb-4">Fix an Appointment</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md space-y-4"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Your Email"
          type="email"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="issue"
          value={form.issue}
          onChange={handleChange}
          placeholder="Briefly describe your issue"
          className="w-full p-2 border rounded"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800"
        >
          Request Help
        </button>
      </form>

      {/* Big Popup Modal */}
      {showPopup && appointmentDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center max-w-md">
            <h2 className="text-2xl font-bold text-purple-700 mb-4">Appointment Confirmed!</h2>
            <p className="text-lg mb-2">👨‍⚕️ Doctor: <strong>{appointmentDetails.doctor}</strong></p>
            <p className="text-lg mb-2">📅 Date: <strong>{appointmentDetails.date}</strong></p>
            <p className="text-lg mb-4">⏰ Time: <strong>{appointmentDetails.time}</strong></p>
            <button
              className="mt-4 px-6 py-2 bg-purple-700 text-white rounded hover:bg-purple-800"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfessionalTherapy;
