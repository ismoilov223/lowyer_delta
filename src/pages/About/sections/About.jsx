import React from "react";

import about1 from "../images/about1.svg";
import about2 from "../images/about2.svg";

const About = () => {
  return (
    <section id="about-about__section">
      <div className="container about-about__content">
        <h1 className="about-about__name">Biz haqimizda</h1>
        <div className="">
          <img src={about1} alt="" className="about-about__img" />
          <h1 className="about-about__title">
            Biz har doim mijozlarimizdan xursandmiz! Yillar davomida biz
            huquqning turli sohalarida sifatli yuridik xizmatlar ko‘rsatish
            bo‘yicha katta tajribaga egamiz. <br /> Tez-tez o'zgarib turadigan
            qonunchilik sharoitida yuqori malakali yuridik yordam sizga
            kelajakka ishonch beradi. Biznes egalarini oldindan bilish,
            rejalashtirish va himoya qilish bizning vazifamizdir.
            <br />
            <br /> Yuridik foydalanishning TO'LIQ KOMPLEKSIni taqdim etish
            bizning asosiy vazifamizdir.
          </h1>
        </div>
        <div className="">
          <h1 className="about-about__title">
            Biz har doim mijozlarimizdan xursandmiz! Yillar davomida biz
            huquqning turli sohalarida sifatli yuridik xizmatlar ko‘rsatish
            bo‘yicha katta tajribaga egamiz. Tez-tez o'zgarib turadigan
            qonunchilik sharoitida yuqori malakali yuridik yordam sizga
            kelajakka ishonch beradi. Biznes egalarini oldindan bilish,
            rejalashtirish va himoya qilish bizning vazifamizdir. Yuridik
            foydalanishning TO'LIQ KOMPLEKSIni taqdim etish bizning asosiy
            vazifamizdir.
          </h1>
          <img src={about2} alt="" className="about-about__img" />
        </div>
      </div>
    </section>
  );
};

export default About;
