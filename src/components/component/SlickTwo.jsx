import React, { Component } from "react";
import Slider from "react-slick";
import avatarslick from "../../assets/svg/avatar-img.svg";
export default class SlickTwo extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="slick-two-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white text-left">
              “Mening ishimni boshqarganingiz uchun sizga va jamoangizga rahmat.
              Bu qiyin, o'ziga xos bahs bo'lib, jamoa ishonchli tarzda g'alaba
              qozondi, u ishonchli tarzda qochish va tajovuzkor ta'qibga duch
              keldi. Tanlovlarim va xarajatlarimni hisoblashda yordam
              berganingizdan minnatdorman. Siz qiyin jarayonni juda aniq
              tushuntirdingiz va tanlangan mutaxassislaringiz adolat meni
              chetlab o'tmasligiga ishonch hosil qilishda juda muhim edi.
              Ajoyib.”
            </p>
            <div className="teach-box flex items-center gap-[20px]">
                <img src={avatarslick} alt="" />
                <div className="info-box">
                    <p className="font-montserrat text-white font-medium text-xl">Aliyev Vali</p>
                    <p className="font-montserrat text-white font-extralight text-xl">O’qituvchi</p>
                </div>
            </div>
          </div>
          <div className="slick-two-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white text-left">
              “Mening ishimni boshqarganingiz uchun sizga va jamoangizga rahmat.
              Bu qiyin, o'ziga xos bahs bo'lib, jamoa ishonchli tarzda g'alaba
              qozondi, u ishonchli tarzda qochish va tajovuzkor ta'qibga duch
              keldi. Tanlovlarim va xarajatlarimni hisoblashda yordam
              berganingizdan minnatdorman. Siz qiyin jarayonni juda aniq
              tushuntirdingiz va tanlangan mutaxassislaringiz adolat meni
              chetlab o'tmasligiga ishonch hosil qilishda juda muhim edi.
              Ajoyib.”
            </p>
            <div className="teach-box flex items-center gap-[20px]">
                <img src={avatarslick} alt="" />
                <div className="info-box">
                    <p className="font-montserrat text-white font-medium text-xl">Aliyev Vali</p>
                    <p className="font-montserrat text-white font-extralight text-xl">O’qituvchi</p>
                </div>
            </div>
          </div>
          <div className="slick-two-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white text-left">
              “Mening ishimni boshqarganingiz uchun sizga va jamoangizga rahmat.
              Bu qiyin, o'ziga xos bahs bo'lib, jamoa ishonchli tarzda g'alaba
              qozondi, u ishonchli tarzda qochish va tajovuzkor ta'qibga duch
              keldi. Tanlovlarim va xarajatlarimni hisoblashda yordam
              berganingizdan minnatdorman. Siz qiyin jarayonni juda aniq
              tushuntirdingiz va tanlangan mutaxassislaringiz adolat meni
              chetlab o'tmasligiga ishonch hosil qilishda juda muhim edi.
              Ajoyib.”
            </p>
            <div className="teach-box flex items-center gap-[20px]">
                <img src={avatarslick} alt="" />
                <div className="info-box">
                    <p className="font-montserrat text-white font-medium text-xl">Aliyev Vali</p>
                    <p className="font-montserrat text-white font-extralight text-xl">O’qituvchi</p>
                </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
