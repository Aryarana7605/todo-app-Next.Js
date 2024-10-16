"use client"

import React, { useState } from 'react';
import Link from 'next/link';


const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-10">
      <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">        
        <div className="text-2xl font-bold text-[#8dd3bb]">
          <Link href="/">
            Todo App  
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleNav}
            className="text-3xl focus:outline-none"
            aria-label="Toggle navigation"
          >
            {navOpen ? "x" : "="}
          </button>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/">
            <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-200 list-none">Home</li>
          </Link>
          <Link href="/about">
            <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-200 list-none">About</li>
          </Link>
          <Link href="/services">
            <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-200 list-none">Services</li>
          </Link>
          <Link href="/contact">
            <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-200 list-none">Contact</li>
          </Link>
        </div>
      </div>

      {navOpen && (
        <div className="md:hidden bg-white">
          <div className="flex flex-col px-6 py-4 space-y-4">
            <Link href="/">
              <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-20 list-none" onClick={toggleNav}>Home</li>
            </Link>
            <Link href="/about">
              <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-200 list-none" onClick={toggleNav}>About</li>
            </Link>
            <Link href="/services">
              <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-200 list-none" onClick={toggleNav}>Services</li>
            </Link>
            <Link href="/contact">
              <li className="text-gray-600 hover:text-[#8dd3bb] transition duration-200 list-none" onClick={toggleNav}>Contact</li>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

