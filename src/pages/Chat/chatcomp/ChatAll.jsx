import React from "react";
import ChatAi from "./ChatAi";
import ChatInput from "./ChatInput";

const ChatAll = () => {
  return (
    <div>
      <div className="h-full w-full flex">
        <div className="flex h-full gap-10">
          <div className="self-end">
            <ChatAi></ChatAi>
          </div>
          <div className="self-end justify-center">
            <ChatInput></ChatInput>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatAll;
