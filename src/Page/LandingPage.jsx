import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import MenuSection from '../Components/MenuSection'

const LandingPage = () => {
  return (
    <>
    {/* NAVBAR */}
    <div className='w-full h-[65px]'>
   <Navbar />
    </div>

    {/* HERO SECTION */}
    <div className='w-full relative'>
      <HeroSection />
    </div>

    <div className='w-full absolute top-[33em] lg:bottom-[-13em] lg:px-[9%] md:px-[5%] sm:px-[3%] px-[5%]'>
      <MenuSection />
    </div>
    </>
  )
}

export default LandingPage
