import React from 'react';

const Hero = () => {
  return (
    <div className="bg-slate-500 text-white h-screen flex items-center justify-center">
    <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">Your Hero Title</h1>
    <p className="text-lg mb-8">A brief description of your awesome project.</p>
    <button className="bg-yellow-500 text-blue-500 py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300">
    Get Started
    </button>
    </div>
    </div>
    );
  };
  
  export default Hero;