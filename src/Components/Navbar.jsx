import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white  border rounded-2xl border-[#7C83FD]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-blue-600 font-bold text-xl">IQ Hive</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {['Home', 'Menu', 'Events', 'Gallery', 'Reservations'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-blue-600 hover:text-[#7C83FD] px-3 py-2 text-sm font-medium transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
              <button className="bg-[#7C83FD] hover:bg-[#7C83FD]/90 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-[#7C83FD]/30">
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-blue-600 pt-2 hover:text-[#7C83FD] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} backdrop-blur-lg rounded-2xl pb-2 px-2`}
      >
        <div className="flex flex-col space-y-2 mt-2">
          {['Home', 'Menu', 'Events', 'Gallery', 'Reservations'].map((item) => (
            <a
              key={item}
              href="#"
              className="text-blue-600 hover:bg-[#7C83FD]/20 px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
            >
              {item}
            </a>
          ))}
          <button className="bg-[#7C83FD] hover:bg-[#7C83FD]/90 text-white px-4 py-2 rounded-full text-base font-medium mt-2 transition-all duration-300">
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar