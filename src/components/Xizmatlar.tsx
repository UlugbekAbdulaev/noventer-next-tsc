
import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <div className="bg-[#0E041D] text-white py-20 px-5 md:px-20 flex flex-col md:flex-row items-center justify-between min-h-[90vh] relative">
      <div className="max-w-xl text-center md:text-left z-10">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Har bir xizmat turini <br />
          har bir mijoz uchun <br />
          <span className="text-purple-500">alohida ahamiyatli</span> <br />
          deb yondoshamiz !
        </h1>
      </div>

      <div className="relative w-[300px] h-[400px] mt-10 md:mt-0">
        <div className="absolute top-0 left-20 w-20 h-24 md:top-52 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box"  />
        <div className="absolute top-24 left-10 w-50 h-50 md:-top-6 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />
        <div className="absolute top-40 left-28 w-40 h-40 md:top-40 md:-left-32 bg-white/10 backdrop-blur-md rounded-xl z-0 shadow-box" />

        <img
          src="/images/image 3.png"
          alt="rasm1"
          className="absolute top-0 md:-left-24 md:top-10 w-20 h-20 object-cover rounded-xl z-10"
        />

        <img
          src="/images/Frame 82.png"
          alt="rasm2"
          className="absolute  top-24 left-12 md:-top-1 w-40 h-40 object-cover rounded-xl z-10"
        />

        <img
          src="/images/Frame 83.png"
          alt="rasm3"
          className="absolute md:top-44 md:-left-28 w-32 h-32 object-cover rounded-xl z-10"
        />
      </div>
    </div>
  );
};

export default HeroSection;
