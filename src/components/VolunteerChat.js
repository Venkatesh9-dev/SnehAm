import React, { useEffect, useRef, useState } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebase";
import VolunteerNavbar from "./VolunteerNavbar";

function VolunteerChat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  useEffect(() => {
    const chatRef = collection(db, "chatMessages");
    const q = query(chatRef, orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, []);

  const uniqueCustomers = Array.from(
    new Set(
      messages
        .filter((msg) => msg.sender !== "volunteer")
        .map((msg) => msg.sender)
    )
  );

  const filteredMessages = messages.filter(
    (msg) =>
      (msg.sender === selectedCustomer && msg.receiver === "volunteer") ||
      (msg.sender === "volunteer" && msg.receiver === selectedCustomer)
  );

  const handleTyping = (e) => {
    setText(e.target.value);
    setIsTyping(true);

    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);

    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, 1500); // Hide after 1.5 seconds of inactivity
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!selectedCustomer || text.trim() === "") return;

    const chatRef = collection(db, "chatMessages");

    await addDoc(chatRef, {
      text,
      sender: "volunteer",
      receiver: selectedCustomer,
      timestamp: serverTimestamp(),
    });

    setText("");
    setIsTyping(false);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [filteredMessages]);

  return (
    <>
      <VolunteerNavbar />
      <div className="min-h-screen bg-blue-50 p-4 flex flex-col md:flex-row">
        <div className="md:w-1/4 bg-white shadow rounded p-4 mb-4 md:mb-0">
          <h2 className="text-xl font-semibold mb-2 text-blue-700">Customers</h2>
          <ul>
            {uniqueCustomers.length > 0 ? (
              uniqueCustomers.map((cust) => (
                <li
                  key={cust}
                  onClick={() => setSelectedCustomer(cust)}
                  className={`cursor-pointer p-2 rounded mb-1 ${
                    selectedCustomer === cust
                      ? "bg-blue-200 font-semibold"
                      : "hover:bg-blue-100"
                  }`}
                >
                  {cust}
                </li>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No active customers yet.</p>
            )}
          </ul>
        </div>

        <div className="md:flex-1 bg-white shadow rounded p-4 ml-0 md:ml-4 flex flex-col">
          <h2 className="text-xl font-bold text-blue-700 mb-2">
            {selectedCustomer ? `Chat with ${selectedCustomer}` : "Select a customer"}
          </h2>

          <div className="flex-1 overflow-y-auto mb-4 p-2">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                className={`mb-2 p-2 rounded-xl max-w-xs ${
                  msg.sender === "volunteer"
                    ? "bg-blue-200 self-end ml-auto text-right"
                    : "bg-gray-200 self-start text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
            {isTyping && selectedCustomer && (
              <div className="text-sm text-gray-500 italic mt-2">
                Volunteer is typing...
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {selectedCustomer && (
            <form onSubmit={sendMessage} className="flex gap-2">
              <input
                type="text"
                className="flex-1 px-4 py-2 rounded-full border border-blue-400 focus:outline-none"
                placeholder="Type your message..."
                value={text}
                onChange={handleTyping}
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default VolunteerChat;
