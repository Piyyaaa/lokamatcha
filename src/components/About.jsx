import React from 'react';
import img from '../assets/matcha1.jpg';
import Button from '../layouts/Button';

const About = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-6 py-20 bg-gradient-to-r from-[#FFF] to-[#3BB143]">
      <h1 className="font-serif font-bold text-5xl text-center text-gray-900 mb-12 tracking-wide">
        Tentang <span className="text-[#1D4F1F]">Loka Matcha</span>
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-7xl w-full">
        {/* Image */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500">
          <img
            src={img}
            alt="Premium Matcha"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full lg:w-1/2 space-y-8 text-gray-900">
          <h2 className="text-4xl font-semibold font-serif leading-snug">
            What makes our <span className="text-[#3BB143]">Matcha</span> so special?
          </h2>

          <p className="text-lg leading-relaxed">
            At Loka Matcha, every leaf is carefully handpicked from the finest tea gardens, 
            ensuring a vibrant green color and rich umami flavor. Our unique shading process 
            enhances chlorophyll production, delivering powerful antioxidants and a smooth, 
            naturally sweet taste.
          </p>

          <p className="text-lg leading-relaxed">
            Crafted with passion and tradition, our matcha fuels your day with clean, 
            balanced energy—perfect for those who value health without compromising on flavor. 
            Whether for your morning boost or mindful moments, Loka Matcha is your natural choice.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
