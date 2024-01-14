import React from 'react';

interface HeroProps {
  title: string;
  description: string;
  cta: string;
}

const Hero: React.FC<HeroProps> = ({ title, description, cta }) => {
  return (
    <div className="bg-slate-500 dark:bg-black text-white h-[50dvh] w-full flex items-center justify-center mx-auto dark:border-2 border-slate-700 rounded-xl dark:text-white">
    <div className="text-center">
    <h1 className="text-4xl font-bold mb-4">{title}</h1>
    <p className="text-lg mb-8">{description}</p>
    <button className="bg-yellow-500 text-blue-500 dark:text-white py-2 px-4 rounded-full hover:bg-yellow-400 transition duration-300">
    {cta}
    </button>
    </div>
    </div>
    );
  };
  
  export default Hero;
  