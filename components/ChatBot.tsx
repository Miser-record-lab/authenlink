"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaComment } from "react-icons/fa";
import Image from "next/image";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Bonjour 👋🏻 ! Comment puis-je vous aider ?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const generateSessionId = () => {
    let storedSessionId = localStorage.getItem("chatbot_session_id");

    if (!storedSessionId) {
      storedSessionId = Math.random().toString(36).substring(2, 15);
      localStorage.setItem("chatbot_session_id", storedSessionId);
    }

    return storedSessionId;
  };

  useEffect(() => {
    const id = generateSessionId();
    setSessionId(id);
  }, []);

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://n8n.authenlink.com/webhook/chatbot-webhook-options",
        {
          message: input,
          sender: "user",
          sessionId: sessionId,
          metadata: {
            userId: "user-123",
            timestamp: new Date().toISOString(),
          },
        }
      );

      if (response.data && response.data.output) {
        const botMessage = { text: response.data.output, sender: "bot" };
        setMessages((prev) => [...prev, botMessage]);
      } else {
        const errorMessage = { text: "Désolé, je n'ai pas pu comprendre cela.", sender: "bot" };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi au webhook :", error);
      const errorMessage = { text: "Désolé, une erreur s'est produite.", sender: "bot" };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Icône ronde pour le chatbot */}
      <div
        className="fixed bottom-4 right-4 z-50 w-12 h-12 bg-black text-white rounded-full flex justify-center items-center cursor-pointer border border-white/20"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaComment className="w-6 h-6" />
      </div>

      {/* Chatbot widget */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 z-50 w-[90%] max-w-sm h-[70%] sm:h-[500px] bg-gray-800 text-white rounded-lg shadow-lg border border-white/20">
          {/* Header */}
          <div className="flex items-center justify-between bg-black p-3 rounded-t-lg border-b border-white/20">
            <div className="flex items-center space-x-2">
              <Image src="/favicon.ico" alt="logo" width={30} height={30} />
              <span className="font-semibold text-white text-sm sm:text-base">AuthenLink</span>
            </div>
            <button
              className="text-xs sm:text-sm text-white hover:font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Fermer
            </button>
          </div>

          {/* Messages */}
          <div className="h-[60%] sm:h-[70%] overflow-y-auto p-2 space-y-2 text-sm sm:text-base">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === "bot" ? "justify-start" : "justify-end"}`}
              >
                <div
                  className={`p-2 rounded-lg ${
                    msg.sender === "bot"
                      ? "bg-white text-black text-sm"
                      : "bg-black border border-white/20 text-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <div className="w-6 h-6 border-4 border-t-4 border-gray-200 border-t-black rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="flex items-center p-2">
            <input
              type="text"
              className="flex-1 p-2 rounded-l-lg border border-white/20 bg-white text-black focus:outline-none"
              placeholder="Tapez votre message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              className="p-2 bg-black rounded-r-lg text-white hover:bg-black/80 border border-white/20"
              onClick={handleSendMessage}
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
