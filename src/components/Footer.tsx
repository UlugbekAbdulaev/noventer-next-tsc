"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer: React.FC = () => {
    const t = useTranslations("footer")
    return (
        <div className="bg-[#0E041D] px-5 md:px-10 pb-20">
            <div className="py-10 text-white text-center">
                <h1 className="text-3xl md:text-4xl font-bold">{t("aloqa")}</h1>
                <p className="text-sm md:text-base">
                   {t("loyha")}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="glass md:col-span-2 px-5 md:px-10 py-6 border-b border-t border-white rounded-lg">
                    <h1 className="font-bold text-[24px] md:text-[30px] text-white">{t("jamoa")}</h1>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-3 mt-4">
                        {[...Array(9)].map((_, index) => (
                            <div
                                key={index}
                                className="glass1 border-b border-t border-white py-2 rounded-lg flex gap-2 px-2 items-center"
                            >
                                <div className="w-[40px] md:w-[50px] h-[50px] relative rounded-lg overflow-hidden">
                                    <Image
                                        src="/images/commentPhoto/com.jpg"
                                        alt="commentary photo"
                                        fill
                                        className="object-cover rounded-lg"
                                        sizes="(max-width: 768px) 100vw, 50px"
                                    />
                                </div>
                                <div className="text-white text-sm md:text-base">
                                    <h1>Husanov <br /> Alisher</h1>
                                    <p className="text-xs md:text-sm">Developer</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass border-b border-t border-white rounded-lg text-center py-5 md:py-7 px-5 md:px-10">
                    <h1 className="text-white text-[22px] md:text-[26px] font-bold">{t("consult")}</h1>
                    <p className="text-white text-sm md:text-base mt-2">
                    {t("consult")}
                    </p>

                    <input
                        className="border-b border-t border-white rounded-lg mt-5 px-3 py-2 text-white bg-transparent w-full"
                        type="text"
                        placeholder={t("ism")}
                    /><br /><br />
                    <input
                        className="border-b border-t border-white rounded-lg px-3 py-2 text-white bg-transparent w-full"
                        type="text"
                        placeholder={t("raqam")}
                    /><br />
                    <button className="border-b border-t border-white rounded-lg bg-[#5A00DB] px-10 py-2 mt-5 text-white w-full">
                    {t("send")}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Footer;
