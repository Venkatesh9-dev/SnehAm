import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db, auth } from "../firebase";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

import GoPremium from "./GoPremium"; // ✅ Adjust path if needed

function ChatVolunteer() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(false);
  const [chatLimitReached, setChatLimitReached] = useState(false);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const messagesEndRef = useRef(null);

  const [customerId] = useState(() => {
    return (
      auth.currentUser?.email ||
      localStorage.getItem("guestId") ||
      (() => {
        const id = "guest_" + uuidv4();
        localStorage.setItem("guestId", id);
        return id;
      })()
    );
  });

  const isPremium = localStorage.getItem("isPremium") === "true";
  const navigate = useNavigate(); // ✅ Initialize useNavigate

  useEffect(() => {
    const chatRef = collection(db, "chatMessages");
    const q = query(chatRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(data);

      if (!isPremium) {
        const userMessages = data.filter(
          (msg) => msg.sender === customerId
        ).length;
        if (userMessages >= 19) {
          setChatLimitReached(true);
          setShowPremiumPopup(true);
        }
      }
    });
    return () => unsubscribe();
  }, [customerId, isPremium]);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (chatLimitReached && !isPremium) {
      setShowPremiumPopup(true);
      return;
    }

    if (text.trim() === "") return;

    const chatRef = collection(db, "chatMessages");

    await addDoc(chatRef, {
      text,
      sender: customerId,
      receiver: "volunteer",
      timestamp: serverTimestamp(),
    });

    setText("");
    setTyping(true);

    // Simulate volunteer typing delay only
    setTimeout(() => {
      setTyping(false);
    }, 2000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleGoPremiumClick = () => {
    navigate("/go-premium"); // ✅ Navigate to /go-premium page
  };

  return (
    <div className="min-h-screen bg-purple-100 p-4 flex flex-col">
      <h1 className="text-3xl font-bold text-purple-700 mb-4 text-center">
        Chat with Volunteer
      </h1>

      <div className="flex-1 overflow-y-auto bg-white p-4 rounded shadow">
        {messages
          .filter(
            (msg) =>
              msg.sender === customerId || msg.receiver === customerId
          )
          .map((msg) => (
            <div
              key={msg.id}
              className={`mb-2 p-2 rounded-xl max-w-xs ${
                msg.sender === customerId
                  ? "bg-purple-200 self-end text-right ml-auto"
                  : "bg-gray-200 self-start text-left"
              }`}
            >
              {msg.text}
            </div>
          ))}
        <div ref={messagesEndRef} />
        {typing && (
          <p className="text-sm text-gray-500 mt-2 italic">
            Volunteer is typing...
          </p>
        )}
      </div>

      <form onSubmit={sendMessage} className="mt-4 flex gap-2">
        <input
          type="text"
          className="flex-1 px-4 py-2 rounded-full border border-purple-400 focus:outline-none"
          placeholder={
            chatLimitReached && !isPremium
              ? "Go Premium to continue chatting..."
              : "Type your message..."
          }
          value={text}
          onChange={(e) => setText(e.target.value)}
          disabled={chatLimitReached && !isPremium}
        />
        <button
          type="submit"
          className={`${
            chatLimitReached && !isPremium
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700"
          } text-white px-4 py-2 rounded-full`}
          disabled={chatLimitReached && !isPremium}
        >
          Send
        </button>
      </form>

      {/* 🟣 Premium Modal */}
      {showPremiumPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-2xl max-w-4xl w-full relative shadow-xl">
            <button
              onClick={() => setShowPremiumPopup(false)}
              className="absolute top-3 right-4 text-2xl text-gray-500 hover:text-black"
            >
              ×
            </button>
            <GoPremium />
            {/* Added button to navigate to Go Premium page */}
            <button
              onClick={handleGoPremiumClick}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-xl"
            >
              Go Premium Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatVolunteer;
