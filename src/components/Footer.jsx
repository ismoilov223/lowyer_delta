import React from "react";
import { Link } from "react-router-dom";
import instaIcon from "../assets/svg/icon_instagram.svg"
import tgIcon from "../assets/svg/icon_telegram.svg"
import linkinIcon from "../assets/svg/icon_linkedin.svg"
import TwitIcon from "../assets/svg/twit_icon.png"
const Footer = () => {
  return (
    <div className="footer pb-14 pt-12">
      <div className="max-width">
        <div className="title-box flex flex-col items-center w-[70%] mx-auto mb-20 mt-8">
          <h1 className="font-sedan font-normal text-white text-[55px] text-center">
            Sizga ko‘mak berishga doim tayyormiz
          </h1>
          <p className="font-montserrat font-normal text-lg text-white text-center mb-11">
            Quyidagi havola orqali bepul konsultatsiyaga ro’yhatdan o’tishingiz
            va o’zingizni qiynayotgan savollarga mutaxassislar orqali javob
            olishingiz mumkin
          </p>
          <button className="btn-free-konst">Bepul Konsultatsiya</button>
        </div>
        <div className="bottom-box flex flex-col items-center md:gap-[45px] md:flex-row md:justify-between">
          <div className="fot-items w-[24%]">
            <h1 className="font-montserrat text-4xl font-bold text-white">
              LOGO
            </h1>
            <p className="norml-text">
              Sizni qiynayotgan savollarga onlayn tarzda tunu kun javob berishga
              tayyormiz. Qonun doirasida amalga oshirishga qiynalayotgan
              savollaringizni bizga yozib qoldiring
            </p>
          </div>
          <div className="fot-items w-[24%]">
            <h2 className="norml-text font-bold">ASOSIY</h2>
            <div className="links-box flex flex-col gap-[8px]">
              <Link className="norml-text">ADVAKAT KIM?</Link>
              <Link className="norml-text">QONUNLAR</Link>
              <Link className="norml-text">FAQ</Link>
              <Link className="norml-text">FIKRLAR</Link>
            </div>
          </div>
          <div className="fot-items w-[24%]">
            <h2 className="norml-text font-bold">MENYU</h2>
            <div className="links-box flex flex-col gap-[8px]">
              <Link className="norml-text">ASOSIY</Link>
              <Link className="norml-text">BIZ HAQIMIZDA</Link>
              <Link className="norml-text">BOG’LANISH</Link>
              <Link className="norml-text">CHAT</Link>
            </div>
          </div>
          <div className="fot-items w-[24%]">
            <h2 className="norml-text font-bold">BOG’LANISH</h2>
            <div className="links-box flex flex-col gap-[8px]">
              <Link className="norml-text">deltagroup@gmail.com</Link>
              <Link className="norml-text">+998 (90) 123-45-67</Link>
              <div className="icons flex items-center gap-3">
                <a href="">
                    <img src={instaIcon} alt="" />
                </a>
                <a href="">
                    <img src={tgIcon} alt="" />
                </a>
                <a href="">
                    <img src={linkinIcon} alt="" />
                </a>
                <a href="">
                    <img src={TwitIcon} alt="" className="w-[35px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
