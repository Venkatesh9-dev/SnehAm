import React from 'react';

export default function Support() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center text-purple-700">Support & Help</h1>

      {/* FAQ Section */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Frequently Asked Questions</h3>
        <div className="mt-4 space-y-4">
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="text-purple-700 font-semibold">How do I connect with a volunteer?</h4>
            <p className="text-gray-600">You can use the 'Call a Volunteer' or 'Chat with a Volunteer' option in the dashboard to get started.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="text-purple-700 font-semibold">Is my conversation private?</h4>
            <p className="text-gray-600">Yes, all conversations are confidential and protected to ensure user safety.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded">
            <h4 className="text-purple-700 font-semibold">How can I request professional therapy?</h4>
            <p className="text-gray-600">Go to the 'Professional Therapy' section and submit a request. Our team will connect you with licensed therapists.</p>
          </div>
        </div>
      </div>

      {/* Contact Support */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Need Help?</h3>
        <p className="text-gray-600 mt-2">If you're facing issues, you can reach out to us.</p>
        <button className="mt-4 bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition duration-300">
          Contact Support
        </button>
      </div>

      {/* Helpful Resources */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold text-purple-700">Helpful Resources</h3>
        <ul className="mt-4 space-y-2">
          <li className="text-gray-600 hover:underline cursor-pointer">📖 Mental Health Guide</li>
          <li className="text-gray-600 hover:underline cursor-pointer">💬 Peer Support Community</li>
          <li className="text-gray-600 hover:underline cursor-pointer">🎥 Video Resources on Well-being</li>
        </ul>
      </div>
    </div>
  );
}
