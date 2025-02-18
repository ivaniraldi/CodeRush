/* eslint-disable react/prop-types */

import { useChat } from "../context/ChatContext";
import { useEffect, useRef } from "react";

const Chat = ({ user }) => {
  const { messages, message, setMessage, sendMessage } = useChat();
  const messagesEndRef = useRef(null); // Referencia al final del chat

  useEffect(() => {
    // Hace scroll al último mensaje
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <div className="flex flex-col h-80 w-full">
      {/* Contenedor de mensajes */}
      <div className="flex-1 overflow-y-auto p-4 bg-base-100 rounded-lg shadow-md">
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 chat ${msg.user === user.name ? "chat-end" : "chat-start"}`}
            >
              <div className="chat-bubble">
                <div className="font-bold">{msg.user}</div>
                <div className="flex justify-between">
                  {msg.user !== user.name && (
                    <div className="text-gray-500 mt-2 mr-3" style={{ fontSize: "0.6em" }}>
                      {msg.timestamp.slice(10, 16)}
                    </div>
                  )}
                  <div>{msg.message}</div>
                  {msg.user === user.name && (
                    <div className="text-gray-500 mt-3 ml-4" style={{ fontSize: "0.6em" }}>
                      {msg.timestamp.slice(10, 16)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
          {/* Referencia al final del chat */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input para enviar mensajes */}
      <form className="flex items-center mt-4 bg-base-200 rounded-b-lg" onSubmit={handleSendMessage}>
        <input
          type="text"
          disabled={!user.name}
          className="flex-1 p-2 border border-base-100 bg-base-100 rounded-lg focus:outline-none"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="btn btn-accent btn-soft ms-2" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Chat;
