'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Info, Briefcase, Package, Phone, Zap } from 'lucide-react';

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleOverlay = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  const closeOverlay = () => {
    setIsOverlayOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/about', label: 'About', icon: Info },
    { href: '/services', label: 'Services', icon: Briefcase },
    { href: '/products', label: 'Products', icon: Package },
    { href: '/contact', label: 'Contact', icon: Phone },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-dark shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <Zap className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-secondary/20 transition-all duration-300"></div>
              </div>
              <div className="text-xl font-bold">
                <span className="gradient-text">Zephyrix</span>{' '}
                <span className="text-white">Tech</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                    pathname === link.href 
                      ? 'text-primary' 
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary transform origin-left transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}></span>
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <Link href="/contact" className="hidden md:block">
              <button className="btn-primary animate-glow">
                Get Started
              </button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleOverlay}
              className="md:hidden p-2 rounded-lg glass hover:bg-white/10 transition-all duration-300"
            >
              <Menu className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 glass-dark border-t border-white/10 px-4 py-2 z-50">
          <div className="flex justify-between items-center max-w-md mx-auto">
            {navLinks.slice(0, 4).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center py-2 px-3 text-xs transition-all duration-300 ${
                  pathname === link.href 
                    ? 'text-primary' 
                    : 'text-gray-400'
                }`}
              >
                <link.icon className="w-5 h-5 mb-1" />
                <span>{link.label}</span>
              </Link>
            ))}
            <button
              onClick={toggleOverlay}
              className="flex flex-col items-center py-2 px-3 text-xs text-gray-400"
            >
              <Menu className="w-5 h-5 mb-1" />
              <span>Menu</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOverlayOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-black/90 backdrop-blur-xl"></div>
        <div className="relative flex flex-col items-center justify-center h-full">
          <button
            onClick={closeOverlay}
            className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-all duration-300"
          >
            <X className="w-8 h-8 text-white" />
          </button>
          
          <nav className="text-center">
            <ul className="space-y-8">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-500 ${
                    isOverlayOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-8 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={closeOverlay}
                    className="flex items-center justify-center space-x-4 text-3xl font-semibold text-white hover:text-primary transition-colors duration-300 group"
                  >
                    <link.icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;