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
                        <div className={`text-white px-5 py-5 md:py-10 ${i % 2 === 0 ? "order-2 md:order-1" : ""}`}>
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

        </div>
    );
};

export default Loyha;
