import React from "react";
import herobgimg from "../assets/png/hero-bg-img.png";
const Hero = () => {
  return (
    <div className="hero pt-16">
      <div className="max-width flex justify-center lg:justify-end pt-48 pb-52">
        <div className="left-cont w-[50%]">
          <div className="text-box">
            <h2 className="font-montserrat font-normal text-3xl text-[#DBA865] mb-5">
              SAYT NOMI
            </h2>
            <h1 className="font-sedan font-normal text-7xl text-white mb-9">
              Sizning beminnat maslahatchingiz
            </h1>
            <p className="font-montserrat font-normal text-white mb-20">
              Sizga kerakli joyda, kerakli vaqtda ko’mak berishga berishga
              tayyormiz. Buning uchun biz bog’lanishingiz kifoya
            </p>
            <button className="btn-free-konst">
              Bepul Konsultatsiya
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
