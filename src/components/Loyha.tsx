"use client";

import React from "react";
import Image from "next/image";

const Loyha: React.FC = () => {
  const loyihalar = [
    { img: "/images/1.png", title: "Tourmad loyihasi", desc: "Tourmad - O'zbekistonning ichki turizmini rivojlantirish maqsadida ishlab chiqilgan bu web sayt..." },
    { img: "/images/2.png", title: "Tourmad loyihasi", desc: "Tourmad - O'zbekistonning ichki turizmini rivojlantirish maqsadida ishlab chiqilgan bu web sayt..." },
    { img: "/images/3.png", title: "Tourmad loyihasi", desc: "Tourmad - O'zbekistonning ichki turizmini rivojlantirish maqsadida ishlab chiqilgan bu web sayt..." }
  ];

  return (
    <div className="bg-[#0E041D]">
      <div className="text-center text-white py-5 md:py-10 px-5 md:px-10">
        <h1 className="font-bold text-[28px] md:text-[35px]">Loyihalarimiz</h1>
        <p className="text-sm md:text-base">Biz haqimizda gapirsin!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 md:px-10">
        {loyihalar.map((item, i) => (
          <React.Fragment key={i}>
            <div className={`text-white px-5 py-5 md:py-10 ${i % 2 === 1 ? "order-2 md:order-1" : ""}`}>
              <h1 className="text-lg md:text-xl font-bold">{item.title}</h1>
              <p className="text-sm md:text-base mt-2">{item.desc}</p>
              <button className="glass px-4 py-2 border rounded-lg mt-4">Loyihani ko'rish</button>
            </div>
            <div className={`rounded-xl contain-content ${i % 2 === 1 ? "order-1 md:order-2" : ""}`}>
              <div className="relative w-full h-60 md:h-72 rounded-xl overflow-hidden">
                <Image src={item.img} alt="loyha rasm" fill className="object-cover rounded-xl" />
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>

      <div className="text-center py-10">
        <button className="bg-[#5A00DB] text-white border px-5 py-2 rounded-lg">Boshqa loyhalarni ko'rish</button>
      </div>

      {/* Xizmat turlari */}
      <div className="py-10 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Xizmat turlari</h1>
        <p className="text-sm md:text-base mt-2">Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 md:px-10 gap-5 py-10">
        {[...Array(9)].map((_, index) => (
          <div key={index} className="glass hover:scale-105 transition transform duration-300 rounded-xl text-center flex flex-col justify-center items-center py-10 px-5">
            <div className="glass1 w-[80px] h-[80px] md:w-[100px] md:h-[100px] rounded-xl text-white flex justify-center items-center">
              <div className="relative w-2/3 h-2/3">
                <Image src="/images/icon/icon.png" alt="icon" fill className="object-contain" />
              </div>
            </div>
            <div className="px-4 text-white mt-4">
              <h1 className="font-bold text-lg md:text-2xl">Landing saxifalar</h1>
              <p className="mt-2 text-sm md:text-base">
                Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida harakatga undash uchun mo'ljallangan.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loyha;
