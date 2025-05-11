"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Main: React.FC = () => {
  const t=useTranslations("main")
  const pictures = [
    { src: "/images/picture1.png", title:`${t("bosh")}` , desc: `${t("bosh2")}` },
    { src: "/images/picture2.png", title:`${t("dan")}` , desc: `${t("dan2")}`},
    { src: "/images/picture3.png", title: `${t("jam")}`, desc: `${t("jam2")}` }
  ];

  return (
    <div className="bg-[#0E041D] py-10 lg:px-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-8 px-7">
        {pictures.map((item, index) => (
          <div key={index} className="glass border-b-1 rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-60">
              <Image
                src={item.src}
                alt={`main picture ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-t-xl"
              />
            </div>
            <div className="px-5 py-6">
              <h2 className="text-lg md:text-xl font-bold">{item.title}</h2>
              <p className="text-sm md:text-base mt-3">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="px-5 md:px-10 py-5">
        <p className="text-white text-sm md:text-base leading-relaxed">
        {t("lorem")}
        </p>
      </div>
    </div>
  );
};

export default Main;
