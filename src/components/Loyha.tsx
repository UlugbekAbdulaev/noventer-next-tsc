"use client";

import React from "react";
import Image from "next/image";
import Loyhalarimiz from "./Loyhalarimiz"
import { useTranslations } from "next-intl";

const Loyha: React.FC = () => {
 
  

  const t=useTranslations("loyhalarimiz")
  return (
    <div className="bg-[#0E041D]">
      <Loyhalarimiz/>

      {/* Xizmat turlari */}
      <div className="py-10 text-white text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{t("turlar")}</h1>
        <p className="text-sm md:text-base mt-2">{t("turlar2")}</p>
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
              <h1 className="font-bold text-lg md:text-2xl">{t("land")}</h1>
              <p className="mt-2 text-sm md:text-base">
              {t("land2")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loyha;
