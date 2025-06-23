

'use client'
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiHome, FiUser, FiStar } from 'react-icons/fi';
// import { FaMapMarkerAlt } from 'react-icons/fa';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showReviewBtn, setShowReviewBtn] = useState(true);
  const reviewsSectionRef = useRef(null);

  // Define navigation items
  const navItems = [
    { name: 'Services', id: 'services' },
    { name: 'Service Centre', id: 'service-centre' },
    // { name: 'About', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
    { name: 'feedback', id: 'feeback' }
  ];

  // Define mobile bottom navigation items
  const mobileBottomNavItems = [
    // { name: 'Home', id: 'home', icon: <FiHome className="h-5 w-5" /> },
    { name: 'Services', id: 'services', icon: <FiStar className="h-5 w-5" /> },
    { name: 'Contact', id: 'contact', icon: <FiUser className="h-5 w-5" /> },
    { name: 'feedback', id: 'Feedback', icon: <ChatBubbleOutlinedIcon className="h-5 w-5" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Show/hide review button based on scroll position
      if (reviewsSectionRef.current) {
        const rect = reviewsSectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight && rect.bottom >= 0;
        setShowReviewBtn(!isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const logoVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        stiffness: 300,
        damping: 10
      }
    }
  };

  const navItemVariants = {
    hover: {
      y: -2,
      color: '#60a5fa',
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.95 }
  };

  const scrolltoall = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // Hide button when clicked
      setShowReviewBtn(false);
      
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Store ref to reviews section
      if (id === 'reviews') {
        reviewsSectionRef.current = element;
      }
    }
  };

  const scrolltodesk = (id) => {
    const element = document.getElementById(id);
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
    <>
      <motion.div 
        className={`fixed w-full z-50 ${
          isScrolled 
            ? 'bg-gray-900/90 backdrop-blur-md shadow-lg' 
            : 'bg-gray-900'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center sm:justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <motion.div
              variants={logoVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center"
            >
              <motion.h1 
                className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              >
                S
              </motion.h1>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  variants={navItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="text-lg font-medium cursor-pointer text-gray-300 hover:text-blue-400 transition-colors"
                  onClick={() => scrolltodesk(item.id)}
                >
                  {item.name}
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="md:hidden p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-gray-800"
            >
              <div className="px-4 pb-4 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="block py-3 text-lg font-medium text-gray-300 hover:text-white border-b border-gray-700"
                    onClick={() => {
                      scrolltoall(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

    

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-30 pb-4">
        <div className="flex justify-around items-center py-3">
          {mobileBottomNavItems.map((item) => (
            <motion.div
              key={item.id}
              whileTap={{ scale: 0.9 }}
              className="flex flex-col items-center justify-center text-gray-300 hover:text-white cursor-pointer"
              onClick={() => scrolltoall(item.id)}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;


