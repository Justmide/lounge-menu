import React from 'react';
import wallpaper from '../assets/Images/wallpaper.jpg';

const HeroSection = () => {
  return (
    <section className="relative w-full h-[500px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wallpaper}
          alt="lounge-background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div> {/* Full black overlay */}
      </div>

      {/* Centered Content */}
      <div className="relative z-10 text-center px-4 w-full max-w-4xl mx-auto">
        {/* Breadcrumb Navigation (Centered) */}
        <nav className="flex items-center justify-center text-white/80 text-sm mb-4">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>
          <span className="mx-2">/</span>
          <a
            href="/lounges"
            className="hover:text-white transition-colors font-bold"
          >
            Menu
          </a>
        </nav>

        {/* Main Title + Intro Text */}
        <div className="flex flex-col items-center">
          <h1 className="text-2xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
            Welcome to <span className="text-[#7C83FD]">IQ Hive</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
            Where every sip meets elegance. Join us for signature cocktails,
            rich conversations, and an unforgettable lounge experience.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#7C83FD] hover:bg-[#7C83FD]/90 text-white lg:px-6 lg:py-3 sm:px-4 sm:py-1.5 px-[15px] rounded-full text-base font-medium transition-all duration-300 shadow-lg">
              Reserve Now
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-base font-medium transition-all duration-300 backdrop-blur-sm border border-white/20">
              Club Package
            </button>
          </div>
        </div>a
      </div>
    </section>
  );
};

export default HeroSection