import React, { Component } from "react";
import Slider from "react-slick";
import arrowsclick from "../../assets/svg/strelka-carousel.svg";
export default class MultipleSlick extends Component {
  render() {
    const settings = {
      focusOnSelect: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="one-slick-item w-[60%]">
            <p className="item-text font-montserrat font-normal text-lg text-white">
              Jamiyatining jismoniy va yuridik shaxslarning murojaatlari bilan
              ishlash tartibi to'g'risida nizomi
            </p>
            <button className="btn flex items-center gap-[18px] text-[#DBA865] mt-[48px]">
              Batafsil <img src={arrowsclick} alt="" />
            </button>
          </div>

          <div className="one-slick-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white">
              «Advokatura instituti samaradorligini tubdan oshirish va
              advokatlarning mustaqilligini.
            </p>
            <button className="btn flex items-center gap-[18px] text-[#DBA865] mt-[48px]">
              Batafsil <img src={arrowsclick} alt="" />
            </button>
          </div>

          <div className="one-slick-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white">
              Advokatura faoliyatiga zamonaviy axborot-kommunikatsiya
              texnologiyalarini keng.
            </p>
            <button className="btn flex items-center gap-[18px] text-[#DBA865] mt-[48px]">
              Batafsil <img src={arrowsclick} alt="" />
            </button>
          </div>
          <div className="one-slick-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white">
              Jamiyatining jismoniy va yuridik shaxslarning murojaatlari bilan
              ishlash tartibi to'g'risida nizomi
            </p>
            <button className="btn flex items-center gap-[18px] text-[#DBA865] mt-[48px]">
              Batafsil <img src={arrowsclick} alt="" />
            </button>
          </div>

          <div className="one-slick-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white">
              «Advokatura instituti samaradorligini tubdan oshirish va
              advokatlarning mustaqilligini.
            </p>
            <button className="btn flex items-center gap-[18px] text-[#DBA865] mt-[48px]">
              Batafsil <img src={arrowsclick} alt="" />
            </button>
          </div>

          <div className="one-slick-item ">
            <p className="item-text font-montserrat font-normal text-lg text-white">
              Advokatura faoliyatiga zamonaviy axborot-kommunikatsiya
              texnologiyalarini keng.
            </p>
            <button className="btn flex items-center gap-[18px] text-[#DBA865] mt-[48px]">
              Batafsil <img src={arrowsclick} alt="" />
            </button>
          </div>
        </Slider>
      </div>
    );
  }
}
