import React from "react";
import inst from "../assets/instagram.png";
import linkd from "../assets/linkedin.png";
import tg from "../assets/telegram.png";
import twt from "../assets/twitter.png";
const Contact = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="bg-[#1C243C] flex justify-center pt-32 pb-36">
        <div className="bg-[#2C344C] w-[88%] flex px-24 py-12 rounded-[20px]">
          <div className="mr-10">
            <h1 className="font-bold text-[32px] leading-10 text-white mb-5">
              Bog‘lanish uchun
            </h1>
            <div>
              <input
                className="font-normal px-4 rounded-sm w-[355px] h-[55px] bg-[#252525] outline-none text-[20px] leading-6 text-[#d0cfcf]"
                type="text"
                placeholder="Ismingiz"
              />
              <input
                className="font-normal ml-8 px-4 rounded-sm w-[355px] h-[55px] bg-[#252525] outline-none text-[20px] leading-6 text-[#d0cfcf]"
                type="text"
                placeholder="Email pochtangiz"
              />
            </div>
            <div>
              <input
                className="font-normal mt-6 px-4 rounded-sm w-[355px] h-[55px] bg-[#252525] outline-none text-[20px] leading-6 text-[#d0cfcf]"
                type="text"
                placeholder="Telefon raqamingiz"
              />
            </div>
            <div>
              <input
                className="font-normal mt-6 px-4 rounded-sm w-[750px] h-[151px] bg-[#252525] outline-none text-[20px] leading-6 text-[#d0cfcf]"
                type="text"
                placeholder="Xabaringizni yozib qoldiring"
              />
            </div>
          </div>
          <div className="bg-[#2C344C]">
            <h1 className="font-bold text-[32px] leading-10 text-white">
              Kontakt ma’lumotlari
            </h1>
            <p className="font-normal mt-5 text-[20px] leading-6 text-[#d0cfcf]">
              Quyidagi ma’lumotlar orqali biz <br /> bilan oson bog‘lanishingiz
              mumkin
            </p>
            <p className="font-normal mt-20 text-[20px] leading-6 text-[#d0cfcf]">
              deltagroup@gmail.com
            </p>
            <p className="font-normal mt-5 text-[20px] leading-6 text-[#d0cfcf]">
              +998 (90) 123-45-67
            </p>
            <div className="flex gap-2 mt-5 items-center">
              <img src={inst} alt="" />
              <img src={tg} alt="" />
              <img src={linkd} alt="" />
              <img src={twt} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
