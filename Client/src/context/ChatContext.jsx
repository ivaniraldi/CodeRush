/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useContext, useEffect } from "react";
import { io } from "socket.io-client";
import { useAuth } from "./AuthContext";

// Conectar con el servidor de Socket.io
const socket = io("http://localhost:3000"); // Cambia la URL si es diferente

// Crear el contexto
const ChatContext = createContext();

export const useChat = () => {
  return useContext(ChatContext);
};

export const ChatProvider = ({ children }) => {
  const { user } = useAuth();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  // Escuchar los mensajes enviados
  useEffect(() => {
    socket.on("receive_message", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("receive_message");
    };
  }, []);

  // Función para enviar mensajes con nombre de usuario y fecha
  const sendMessage = () => {
    if (!user) {
      alert("Por favor, inicia sesión para enviar mensajes.");
      return;
    } else if (!message) {
      alert("Por favor, escribe un mensaje.");
      return;
    } else {
      const newMessage = {
        user: user.name, // El nombre del usuario
        message,
        timestamp: new Date().toLocaleString(), // La fecha y hora del mensaje
      };
      socket.emit("send_message", newMessage);
      setMessage("");
    }
  };

  return (
    <ChatContext.Provider
      value={{ messages, message, setMessage, sendMessage }}
    >
      {children}
    </ChatContext.Provider>
  );
};
