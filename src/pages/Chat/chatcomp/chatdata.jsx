import React from "react";
import ChatInput from "./ChatInput";

const chatdata = () => {
  const data = [
    { id: 1, text: "Pesan 1" },
    { id: 2, text: "Pesan 2" },
    { id: 3, text: "Pesan 3" },
  ];

  return (
    <div>
      <h1>My Chat Bot</h1>
      <ChatInput data={data} />
    </div>
  );
};

export default chatdata;
