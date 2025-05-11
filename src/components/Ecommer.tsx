import { useTranslations } from 'next-intl'
import React from 'react'

function Ecommer() {
    const t=useTranslations("commer")

  return (
    <section className="bg-[#0E041D] py-10 px-5 md:px-16 text-white">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-[#2B2343]/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10">


        <div className="w-full md:w-2/3 p-8 md:p-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("land")}</h2>

            
                <ul className="space-y-6 mb-6 md:grid md:grid-cols-2">
                    <li className="flex items-start gap-3">
                        <span className="text-white text-xl">🔘</span>
                        <div>
                            <p className="font-semibold">{t("tasir")}</p>
                            <p className="text-sm text-gray-300 w-60 ">
                               {t("qadam")}
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="text-white text-xl">🔘</span>
                        <div>
                            <p className="font-semibold">{t("maqsad")}</p>
                            <p className="text-sm text-gray-300 w-60">
                            {t("aniq")}
                                
                            </p>
                        </div>
                    </li>

                    <li className="flex items-start gap-3">
                        <span className="text-white text-xl">🔘</span>
                        <div>
                            <p className="font-semibold">{t("tez")}</p>
                            <p className="text-sm text-gray-300 w-60">
                            {t("sabr")}
                                
                            </p>
                        </div>
                    </li>
                </ul>
            

            <div className="text-sm text-gray-300 mb-4 md:pr-44">
                <p>{t("texnik")} </p>
            </div>

            <button className="md:mt-10 hidden md:inline-flex glass text-white border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base">
                {t("buyurtma")}
            </button>
        </div>


        <div className="w-full md:w-1/3 object-cover flex items-center justify-center bg-white/5">
            <img
                src='/images/image 2.png'
                alt="Landing Page Preview"
                className="rounded-xl shadow-lg object-contain max-h-[550px]"
            />
        </div>
    </div>
    
</section>
  )
}

export default Ecommer