import React, { useState } from "react";
import sendbtn from "../assets/sendbtn.png";

const ChatInput = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    setMessages([...messages, message]);

    if (message === "salom") {
      const reply =
        "Assalomu Alykum men sizning yuridik masalalrda maslahatchingiz bo'laman!";
      setMessages((prevMessages) => [...prevMessages, reply]);
    } else {
      try {
        const response = await fetch("https://example.com/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        });

        if (response.ok) {
          const data = await response.json();
          const reply = data.reply;

          setMessages((prevMessages) => [...prevMessages, reply]);
        } else {
          throw new Error("Failed to send message.");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div>
      <div className="h-full w-full rounded-2xl relative">
        <div className="absolute bottom-0 rounded-br-2xl  w-[600px]">
          <div className="text-white message-container">
            {messages.map((message, index) => (
              <div key={index} className="message">
                {message}
              </div>
            ))}
          </div>
          <div className="flex bg-[#1C243C] items-center rounded-bl-2xl mt-4 px-4">
            <input
              className="outline-none w-full text-white bg-[#1C243C] h-[60px]"
              type="text"
              placeholder="Xabar yuborish..."
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  const message = e.target.value;
                  e.target.value = "";

                  await handleSendMessage(message);
                }
              }}
            />
            <img className="h-7 w-7 z-[1]" src={sendbtn} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
