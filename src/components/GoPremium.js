import React from 'react';
import { getAuth } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

export default function GoPremium() {
  const plans = [
    {
      title: 'Pay As You Go',
      price: '₹29 / Call or ₹19 / Chat',
      amount: 2900,
      features: [
        'One 15-min Emotional Call – ₹29',
        'One 30-min Chat Session – ₹19',
        'No monthly subscription needed',
      ],
      button: 'Pay & Start Now',
    },
    {
      title: 'Daily Care',
      price: '₹1499 / month',
      amount: 149900,
      features: [
        'Daily 30-min Call',
        'OR Daily 90-min Chat',
        'Perfect for regular support',
      ],
      button: 'Subscribe Now',
    },
    {
      title: 'Deep Healing',
      price: '₹1999 / month',
      amount: 199900,
      features: [
        'Daily 1hr Call',
        'AND 2hr Chat Support',
        'Best for emotional recovery',
      ],
      button: 'Subscribe Now',
    },
    {
      title: 'Unlimited Support',
      price: '₹2999 / month',
      amount: 299900,
      features: [
        'Unlimited Emotional Calls',
        'Unlimited Chat Support',
        'Priority Listener Allocation',
      ],
      button: 'Go Unlimited',
    },
  ];

  const handlePayment = async (plan) => {
    const auth = getAuth();
    const user = auth.currentUser;

    if (!user) {
      alert('Please log in first.');
      return;
    }

    const options = {
      key: 'rzp_test_pIVkv5axTJwuj4',
      amount: plan.amount,
      currency: 'INR',
      name: 'SnehAm 💜',
      description: plan.title,
      image: 'https://your-logo-url.com/logo.png',
      handler: async function (response) {
        const paymentData = {
          userId: user.uid,
          planName: plan.title,
          amount: plan.amount / 100,
          paymentId: response.razorpay_payment_id,
          timestamp: new Date().toISOString(),
        };
        try {
          await setDoc(doc(db, 'premiumUsers', user.uid), paymentData);
          localStorage.setItem('isPremium', 'true'); // ✅ Set flag
          alert('🎉 Payment Successful and Plan Activated!');
          window.location.reload(); // ✅ Refresh to apply
        } catch (error) {
          console.error('Firebase Error:', error);
          alert('Payment succeeded, but we failed to save your plan. Please contact support.');
        }
      },
      prefill: {
        name: user.displayName || 'User',
        email: user.email,
        contact: '',
      },
      theme: {
        color: '#7e22ce',
      },
      modal: {
        ondismiss: function () {
          alert('Oops 😔 Payment was cancelled or failed. Please try again.');
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="pt-24 p-6 bg-gradient-to-br from-purple-100 to-white min-h-screen">
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-800">Go Premium 💜</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300 border border-purple-200"
          >
            <h2 className="text-2xl font-bold text-purple-700 mb-2">{plan.title}</h2>
            <p className="text-lg font-semibold mb-4 text-green-600">{plan.price}</p>
            <ul className="text-left mb-6 space-y-2 text-gray-700">
              {plan.features.map((feature, i) => (
                <li key={i}>✅ {feature}</li>
              ))}
            </ul>
            <button
              onClick={() => handlePayment(plan)}
              className="w-full bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition"
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
