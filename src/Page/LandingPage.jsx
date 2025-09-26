import React from 'react';
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import MenuSection from '../Components/MenuSection';
import AccountDetails from '../Components/AccountDetails';

const LandingPage = () => {
  return (
    <div className="w-full">
      {/* NAVBAR */}
      <div className="w-full h-[65px]">
        <Navbar />
      </div>

      {/* HERO SECTION */}
      {/* HERO SECTION */}
      <div className="w-full relative z-10">
        <HeroSection />
      </div>

      {/* MENU SECTION */}
      <div className="w-full px-5 md:px-10 lg:px-[9%] -mt-12 relative z-20">
        <MenuSection />
      </div>


      {/* LOUNGE DETAILS */}
      <div className="w-full px-5 md:px-10 lg:px-[9%] mt-16">
        <AccountDetails />
      </div>
    </div>
  );
};

export default LandingPage;
