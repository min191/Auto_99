import React, { useState } from "react";
import axios from "axios";

const ChatbotGemini = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const API_KEY = "AIzaSyBXx08yB4fKL9Mas4uFFYQzPlFQcZ5uCkU"; 
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
        {
          contents: [
            {
              parts: [{ text: `Đây là chatbot của Auto_99. ${input}` }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Lấy nội dung từ response của Gemini 2.0 Flash
      const botReply = response.data.candidates[0].content.parts[0].text;
      const botMessage = {
        role: "bot",
        content: botReply,
      };

      setMessages([...newMessages, botMessage]);
    } catch (error) {
      console.error("Lỗi khi gọi API Gemini:", error.response?.data || error.message);
      const errorMessage = {
        role: "bot",
        content: "Xin lỗi, có lỗi xảy ra khi xử lý yêu cầu của bạn.",
      };
      setMessages([...newMessages, errorMessage]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 ">
      {/* Nút bong bóng chat */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gray-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-gray-600 transition-all duration-300 backdrop-blur-md bg-opacity-80 hover:scale-110 active:scale-95"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Chatbot container */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute bottom-20 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="bg-gray-600 text-white p-3 flex justify-between items-center">
          <h3 className="font-semibold">Chatbot Auto_99</h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200"
          >
            ×
          </button>
        </div>

        <div className="h-96 overflow-y-auto p-4 bg-gray-50">
          {messages.length === 0 && (
            <div className="text-gray-500 text-center">
              Chào bạn! Tôi là Chatbot Auto_99. Hãy bắt đầu trò chuyện nào!
            </div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.role === "user" ? "justify-end" : "justify-start"
              } mb-3`}
            >
              <div
                className={`text-start max-w-[70%] p-3 rounded-lg ${
                  msg.role === "user"
                    ? "bg-gray-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                <strong>{msg.role === "user" ? "Bạn" : "Auto_99"}: </strong>
                {msg.content}
              </div>
            </div>
          ))}
        </div>

        <div className="p-3 border-t bg-white flex items-center gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Nhập tin nhắn..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
          />
          <button
            onClick={sendMessage}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatbotGemini;