import React from "react";
import sendbtn from "../assets/sendbtn.png";

const ChatInput = () => {
  return (
    <div>
      <div className="h-full w-full pt-[810px] rounded-2xl bg-[#212B48]">
        <div className="flex rounded-br-2xl rounded-bl-2xl bg-[#1C243C] mt-4 px-4 items-center w-[600px]">
          <input
            className="outline-none w-full bg-[#1C243C] h-[60px]"
            type="text"
            placeholder="Xabar yuborish..."
          />
          <img className="h-7 w-7 z-[1]" src={sendbtn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
