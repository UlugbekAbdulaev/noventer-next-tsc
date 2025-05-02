

const LandingSection = () => {
    return (
        <section className="bg-[#0E041D] py-10 px-5 md:px-16 text-white">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row bg-[#2B2343]/60 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl border border-white/10">


                <div className="w-full md:w-2/3 p-8 md:p-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Landing sahifalar</h2>

                    
                        <ul className="space-y-6 mb-6 grid grid-cols-2">
                            <li className="flex items-start gap-3">
                                <span className="text-white text-xl">🔘</span>
                                <div>
                                    <p className="font-semibold">Qisqa va ta&apos;sirli</p>
                                    <p className="text-sm text-gray-300 w-60 ">
                                        Mijozni birinchi qarashda qiziqtiradigan va keyingi qadamga undaydigan muhim ma&apos;lumotlarni taqdim etadi.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-white text-xl">🔘</span>
                                <div>
                                    <p className="font-semibold">Maqsadli</p>
                                    <p className="text-sm text-gray-300 w-60">
                                        Aniq maqsadga yo&apos;naltirilgan bo&apos;lib, mijozni maxsus harakatga undashga xizmat qiladi.
                                    </p>
                                </div>
                            </li>

                            <li className="flex items-start gap-3">
                                <span className="text-white text-xl">🔘</span>
                                <div>
                                    <p className="font-semibold">Tez yuklanuvchi</p>
                                    <p className="text-sm text-gray-300 w-60">
                                        Mijozlarning sabr-toqatiga ta&apos;sir qilmaslik uchun iloji boricha tez yuklanadi.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    

                    <div className="text-sm text-gray-300 mb-4">
                        <p>Texnik vazifa tayyorlab berish: <b>1 kun</b></p>
                        <p>Sayt sahifalar soni: <b>1</b> (har bir sahifa minimum 5 ta qismdan iborat bo&apos;ladi.)</p>
                        <p>Veb Dizayn: <b>10-15 soatlik mehnat.</b></p>
                    </div>

                    <button className="md:mt-10 hidden md:inline-flex glass text-white border-t border-b py-1 px-3 hover:bg-gray-200 rounded text-base">
                        Buyurtma berish
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
    );
};

export default LandingSection;
