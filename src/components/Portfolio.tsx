"use client";

import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#0E041D] text-white py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[90vh] relative">
      <div className="max-w-xl text-center md:text-left z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Tajribamiz davomida <br />
          turli xil hajmdagi <br />
          <span className="text-purple-500">IT loyihalarini</span> <br />
          ishga tushira oldik
        </h1>
      </div>

      <div className="relative w-[300px] h-[400px] mt-10 md:mt-0">
        <div className="absolute top-0 left-20 w-20 h-24 md:top-52 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />
        <div className="absolute top-24 left-10 w-50 h-50 md:-top-6 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />
        <div className="absolute top-40 left-28 w-40 h-40 md:top-40 md:-left-32 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />

        <div className="absolute top-0 md:-left-24 md:top-10 w-20 h-20 z-10 rounded-xl overflow-hidden">
          <Image
            src="/images/image 3.png"
            alt="rasm1"
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 80px"
          />
        </div>

        <div className="absolute top-24 left-12 md:-top-1 w-40 h-40 z-10 rounded-xl overflow-hidden">
          <Image
            src="/images/Frame 82.png"
            alt="rasm2"
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 160px"
          />
        </div>

        <div className="absolute md:top-44 md:-left-28 w-32 h-32 z-10 rounded-xl overflow-hidden">
          <Image
            src="/images/Frame 83.png"
            alt="rasm3"
            fill
            className="object-cover rounded-xl"
            sizes="(max-width: 768px) 100vw, 128px"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
