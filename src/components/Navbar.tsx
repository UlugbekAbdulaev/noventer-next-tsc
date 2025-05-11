"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import { redirect, usePathname } from "@/i18n/navigation";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const locale = useLocale()
    const path = usePathname()

    const switchlang = (params: React.ChangeEvent<HTMLSelectElement>) => {
        redirect({ locale: params.target.value, href: path });
    };
    const t = useTranslations("navbar")
    return (
        <div className="bg-[#0E041D] sticky top-0 z-50">
            <header className="text-gray-600 body-font mx-auto w-[95%]">
                <div className="flex flex-wrap p-5 items-center justify-between">

                    <div className="flex items-center">
                        <Image src="/images/logo/logo.png" alt="logo" width={128} height={40} />
                    </div>

                    <nav className="hidden md:flex md:items-center text-white">
                        <Link className="mr-5 hover:text-gray-500 cursor-pointer" href="/">{t("home")}</Link>
                        <Link className="mr-5 hover:text-gray-500 cursor-pointer" href="/portfolio">{t("Portfolio")}</Link>
                        <Link className="mr-5 hover:text-gray-500 cursor-pointer" href="/servis">{t("Xizmat")}</Link>
                       
                    </nav>
                    <select className="glass text-white border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base" onChange={switchlang} value={locale}>
                        <option className="text-black" value="en" >EN</option>
                        <option className="text-black" value="uz"  >UZ</option>
                    </select>

                    <button className="hidden md:inline-flex glass text-white border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base">
                        {t("loyha")}
                    </button>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
                            {isOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>

                {isOpen && (
                    <div className="md:hidden flex flex-col items-center bg-[#0E041D] py-5 text-white">
                        <Link className="mr-5 hover:text-gray-500 cursor-pointer" href="/">Bosh sahifa</Link>
                        <Link className="mr-5 hover:text-gray-500 cursor-pointer" href="/portfolio">Portfolio</Link>
                        <Link className="mr-5 hover:text-gray-500 cursor-pointer" href="/servis">{t("aloqa")}</Link>
                        <button className="glass text-white border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base mt-3">
                            Loyha bormi?
                        </button>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Navbar;
