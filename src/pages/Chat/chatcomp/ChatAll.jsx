import React from "react";
import ChatAi from "./ChatAi";
import ChatInput from "./ChatInput";

const ChatAll = () => {
  return (
    <div>
      <div className="">
        <div className="flex gap-10">
          <div className="flex mt-16 gap-4">
            <ChatAi></ChatAi>
            <ChatInput></ChatInput>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAll;
