"use client";

import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTopFloat: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-6 right-6 z-[999] bg-gradient-to-r from-blue-600 to-purple-600 hover:to-purple-700 text-white rounded-full shadow-lg w-11 h-11 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
      style={{ boxShadow: '0 4px 24px rgba(37,99,235,0.18)' }}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default ScrollToTopFloat; 