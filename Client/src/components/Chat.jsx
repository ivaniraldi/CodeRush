import { useChat } from "../context/ChatContext";

const Chat = () => {
  const { messages, message, setMessage, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-80 w-full">
      <div className="flex-1 overflow-y-auto p-4 bg-base-100 rounded-lg shadow-md">
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-base-200 rounded-lg shadow-sm">
              <div className="font-bold">{msg.user}</div>
              <div>{msg.message}</div>
              <div className="text-xs text-gray-500">{msg.timestamp}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center p-4 bg-base-200 rounded-b-lg">
        <input
          type="text"
          className="flex-1 p-2 border border-base-300 bg-base-100 rounded-lg"
          placeholder="Escribe un mensaje..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          className="ml-2 p-2 bg-base-300 text-white rounded-lg"
          onClick={sendMessage}
        >
          Enviar
        </button>
      </div>
    </div>
  );
};

export default Chat;
