"use client"
import { motion } from 'framer-motion';

const HeroSection = () => {

  const scrolltodesk = () => {
    const element = document.getElementById('expert');
    if (element) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div 
      className="relative pt-24 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Your Trusted Electrical Store – <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Quality & Reliability!
          </span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Powering your projects with premium electrical supplies and expert service since 2005.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
       
          <button id='expert' onClick={scrolltodesk} className="px-8 py-3 border border-blue-400 text-blue-400 hover:bg-blue-400/10 font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1">
            Contact Experts
          </button>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent z-10" />
    </motion.div>
  );
};

export default HeroSection;


  //  <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1">
  //         //   Shop Now
  //         // </button>