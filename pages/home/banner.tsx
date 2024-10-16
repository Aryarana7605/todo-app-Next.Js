import React from 'react';

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-white py-20 h-[100vh] items-center flex">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">Manage Your Tasks Effortlessly</h1>
        <p className="text-lg lg:text-2xl mb-8">
          Stay organized and increase your productivity with our simple and intuitive todo list app.
        </p>
        <div>
          <a 
            href="/get-started" 
            className="inline-block bg-white text-blue-600 py-3 px-6 rounded-full font-semibold text-lg transition duration-300 ease-in-out hover:bg-gray-200">
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner;
