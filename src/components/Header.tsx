"use client";

import React from "react";
import Image from "next/image";

const Header: React.FC = () => {
    const stats = [
        { icon: "/images/icon/v1.png", title: "7+ yillik", desc: "Umumiy tajriba" },
        { icon: "/images/icon/v2.png", title: "50+", desc: "Mijozlar" },
        { icon: "/images/icon/v3.png", title: "100+", desc: "Loyiha" },
        { icon: "/images/icon/v4.png", title: "24/7", desc: "Qo'llab-quvvatlash" },
    ];

    return (
        <div className='box-border'>

            <div className='imag grid grid-cols-1 md:grid-cols-2 bg-[#0E041D] relative w-full lg:min-h-screen px-5 md:px-20'>
                <div className='text-white text-3xl md:text-[50px] flex flex-col justify-center sm:mb-10 md:mb-[170px] sm:ml-0 md:ml-[50px] lg:ml-0'>
                    <span className='font-bold'>Yuqori sifatdagi</span>
                    <span>aniqlikka asoslanib</span>
                    <span className='text-[#5A00DB]'>istalgan turdagi</span>
                    <span>dasturlarni tayyorlaymiz</span>
                    <button className='border text-white text-[16px] md:text-[18px] px-4 py-2 w-44 rounded-lg my-5 bg-[#5A00DB]'>Xizmatlar haqida</button>
                </div>
            </div>

            <div className="qism2 relative lg:absolute bottom-0 w-full z-10 px-5 py-3 md:px-0 ml-0 lg:ml-20 bg-[#0E041D] lg:bg-transparent">
                <div className="grid grid-cols-2 md:grid-cols-4 text-white w-full gap-5 md:gap-x-10">
                    {stats.map((item, index) => (
                        <div key={index} className="glass border w-full sm:w-44 px-4 py-3 rounded-lg flex items-center gap-3 bg-[#ffffff10] backdrop-blur-lg shadow-lg">
                            <Image src={item.icon} alt="iconka" width={48} height={48} />
                            <div className="text-left">
                                <p className="font-bold">{item.title}</p>
                                <p className="text-sm">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='text-white bg-[#5A00DB] px-5 md:px-15 py-5 text-center md:text-left'>
                <h1 className='font-bold text-2xl md:text-3xl'>Biz haqimizda</h1>
                <p className='text-sm md:text-base'>qisqacha ma&apos;lumot</p>
            </div>

        </div>
    );
}

export default Header;
