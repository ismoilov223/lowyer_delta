import React from "react";
import lowyerImg from "../assets/png/lawyer-img.png";
import MultipleItems from "./component/MultipleSlick";
import questionimg from "../assets/png/question-img.png";
import SlickTwo from "./component/SlickTwo";
const Main = () => {
  return (
    <div className="main w-full bg-[#1C243C]">
      <div className="max-width">
        <div className="who-lowyer pt-10 flex flex-col items-center md:flex-row md:gap-16 pb-[120px]">
          <div className="left-cont w-[50%]">
            <img src={lowyerImg} className="w-[90%]" alt="" />
          </div>
          <div className="rigth-cont w-[50%]">
            <h1 className="font-sedan font-normal text-7xl text-left text-white">
              <span className="text-[#DBA865]">Advakat</span> kim?
            </h1>
            <p className="font-montserrat font-normal text-lg text-white text-left">
              Advokat (lot. advocatus, advocare — yordamga chaqirish) — yuridik
              yordam koʻrsatuvchi shaxs. Jinoyat ishlari boʻyicha surishtiruv,
              tergov harakatlari yuritilganda va sud majlisida, fuqaroviy ishlar
              sudda, xoʻjalik nizolari xoʻjalik sudlarida yoki maʼmuriy
              huquqbuzarlik toʻgʻrisidagi ishlar sudya yoxud vakolatli organlar
              (mansabdor shaxslar) tomonidan koʻrilganda ishtirok etadi, qonunda
              belgilangan vakolatga ega boʻladi. Oʻzbekiston Respublikasi
              „Advokatura toʻgʻrisida“gi Qonunida (1996-yil 27-dekabr)
              koʻrsatilishicha, oliy yuridik maʼlumotli va belgilangan tartibda
              advokatlik faoliyati bilan shugʻullanish huquqini beruvchi
              litsenziya olgan Oʻzbekiston Respublikasi fuqarosi Oʻzbekiston
              Respublikasida Advokat boʻlishi mumkin. Oʻzbekiston Respublikasi
              „Advokatlik faoliyatining kafolatlari va avdokatlarning ijtimoiy
              himoyasi toʻgʻrisida“gi Qonunida (1998-yil 25-dekabr) advokatlik
              faoliyati bilan shugʻullanish huquqi, faoliyatining asosiy
              prinsiplari, Advokat qasamyodi, vakolatlari, mustaqilligini
              taʼminlash, daxlsizligi, Advokatlik faoliyatiga aralashishga yoʻl
              qoʻyilmasligi va uning himoyalanishini taʼminlash, Advokatning
              ijtimoiy himoyasi choralari va boshqa belgilab berilgan.{" "}
            </p>
          </div>
        </div>
        <div className="lowyer-activiti-box">
          <div className="title-box mx-auto w-[80%] pb-8">
            <h1 className="font-sedan font-normal text-center text-[70px] text-white">
              Advakatlik faoliyati bo‘yicha{" "}
              <span className="text-[#DBA865]"> Qonun loyihalari</span>
            </h1>
            <p className="font-montserrat text-lg font-normal text-white text-center">
              Bu bo’limda advokatlik, advokatlik faoliyati va advokat bilan
              ishlash bo’yicha O‘zbekiston Respublikasidagi mavjud qonun
              loyihalari bilan tanishishingiz mumkin
            </p>
          </div>
          <div className="carousel-box pb-[80px]">
            <MultipleItems></MultipleItems>
          </div>
          <section id="quetsions">
            <div className="conts-box flex flex-col items-center">
              <div className="random-box w-[90%] flex items-center justify-between pb-[110px]">
                <div className="box-item flex items-center flex-col">
                  <h1 className="text-[#DBA865] text-[110px] font-normal font-montserrat">
                    300+
                  </h1>
                  <p className="font-montserrat font-normal text-xl text-center text-white ">
                    Umumiy kelib tushgan murojaatlar
                  </p>
                </div>
                <div className="box-item flex items-center flex-col">
                  <h1 className="text-[#DBA865] text-[110px] font-normal font-montserrat">
                    128
                  </h1>
                  <p className="font-montserrat font-normal text-xl text-center text-white ">
                    Muaffaqqiyatli bajarilgan ishlar
                  </p>
                </div>
                <div className="box-item flex items-center flex-col">
                  <h1 className="text-[#DBA865] text-[110px] font-normal font-montserrat">
                    79
                  </h1>
                  <p className="font-montserrat font-normal text-xl text-center text-white ">
                    Ayni vaqtda ko’rib chiqilayotgan ishlar
                  </p>
                </div>
              </div>
              <div className="quetsions-box w-full flex items-center justify-between gap-7">
                <div className="left-cont w-[70%]">
                  <h1 className="font-sedan font-normal text-[72px] text-white mb-7">
                    Ko‘p so‘raladigan savollar
                  </h1>
                  <div className="item flex justify-between gap-9 mb-14">
                    <div className="item-num-box w-[95px] h-[85px] p-[10px] bg-[#2C344C] flex justify-center items-center">
                      <h1 className="font-montserrat font-normal text-[54px] text-white">
                        01
                      </h1>
                    </div>
                    <div className="text-box">
                      <p className="text-[#DBA865] text-[20px] font-normal font-montserrat mb-9">
                        Uy egasi vafot etganda uy egasining farzandlaridan
                        boshqa yana kimlar uyga davogar bo’lishi mumkin?
                      </p>
                      <p className="text-[#FFFFFF] text-[20px] font-normal font-montserrat">
                        Avvalo yakka tartibdagi nizolarni ko‘ruvchi komissiga
                        murojaat qilsangiz bo‘ladi. Shu bilan birga, mehnat
                        nizolari bo‘yicha prokurotura asosiy organ bo‘lganligi
                        uchun prokuroturaga hamda sudga murojjat qilsangiz ham
                        bo‘ladi.
                      </p>
                    </div>
                  </div>
                  <div className="item flex justify-between gap-9 mb-14">
                    <div className="item-num-box w-[80px] h-[80px] p-[10px] bg-[#2C344C] flex justify-center items-center">
                      <h1 className="font-montserrat font-normal text-[54px] text-white">
                        02
                      </h1>
                    </div>
                    <div className="text-box">
                      <p className="text-[#DBA865] text-[20px] font-normal font-montserrat mb-9">
                        Uy egasi vafot etganda uy egasining farzandlaridan
                        boshqa yana kimlar uyga davogar bo’lishi mumkin?
                      </p>
                      <p className="text-[#FFFFFF] text-[20px] font-normal font-montserrat">
                        Avvalo yakka tartibdagi nizolarni ko‘ruvchi komissiga
                        murojaat qilsangiz bo‘ladi. Shu bilan birga, mehnat
                        nizolari bo‘yicha prokurotura asosiy organ bo‘lganligi
                        uchun prokuroturaga hamda sudga murojjat qilsangiz ham
                        bo‘ladi.
                      </p>
                    </div>
                  </div>
                  <div className="item flex justify-between gap-9 mb-14">
                    <div className="item-num-box w-[80px] h-[80px] p-[10px] bg-[#2C344C] flex justify-center items-center">
                      <h1 className="font-montserrat font-normal text-[54px] text-white">
                        03
                      </h1>
                    </div>
                    <div className="text-box">
                      <p className="text-[#DBA865] text-[20px] font-normal font-montserrat mb-9">
                        Uy egasi vafot etganda uy egasining farzandlaridan
                        boshqa yana kimlar uyga davogar bo’lishi mumkin?
                      </p>
                      <p className="text-[#FFFFFF] text-[20px] font-normal font-montserrat">
                        Avvalo yakka tartibdagi nizolarni ko‘ruvchi komissiga
                        murojaat qilsangiz bo‘ladi. Shu bilan birga, mehnat
                        nizolari bo‘yicha prokurotura asosiy organ bo‘lganligi
                        uchun prokuroturaga hamda sudga murojjat qilsangiz ham
                        bo‘ladi.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="right-cont w-[30%]">
                  <img src={questionimg} alt="" />
                </div>
              </div>
            </div>
          </section>
          <section id="feedbecks">
            <div className="feedbek-cont max-width pt-9">
              <div className="title-box pb-9">
                <h1 className="font-sedan font-normal text-[72px] text-center text-white">
                  Mijozlarimiz <span className="text-[#DBA865]"> fikrlari</span>
                </h1>
                <p className="font-montserrat text-[18px] text-center text-white font-normal">
                  Faoliyatimiz bo’yicha mijozlarimiz tomonidan bildirilgan fikr
                  va mulohazalar
                </p>
              </div>
              <SlickTwo></SlickTwo>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Main;
