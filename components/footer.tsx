import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-8">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        
        <div className="mb-4 lg:mb-0">
          <h1 className="text-lg font-bold text-[#8dd3bb]">Todo App</h1>
          <p className="text-sm mt-1 text-gray-400">Keep track of your tasks easily.</p>
        </div>
        
        <div className="flex gap-4">
          <a href="/about" className="text-sm text-gray-400 hover:text-white transition duration-300">About Us</a>
          <a href="/privacy" className="text-sm text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
          <a href="/contact" className="text-sm text-gray-400 hover:text-white transition duration-300">Contact</a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-4 text-center border-t border-gray-700 pt-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} Todo App. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
