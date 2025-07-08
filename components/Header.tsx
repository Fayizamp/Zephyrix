'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Home, Info, Briefcase, Package, Phone, Zap } from 'lucide-react';
import Image from 'next/image';

const Header = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
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

  const getHeaderStyle = () => {
    if (isHomePage) {
      return isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-2xl border-b border-gray-200/50' 
        : 'bg-transparent rounder-[25px]';
    } else {
      return isScrolled 
        ? 'bg-white shadow-lg border-b border-gray-200' 
        : 'bg-transparent';
    }
  };

  // Determine text color for navigation links
  const getNavLinkStyle = (isActive: boolean) => {
    if (isHomePage) {
      if (isActive) {
        return isScrolled ? 'text-blue-600' : 'text-blue-400';
      } else {
        return isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-300 hover:text-white';
      }
    } else {
      return isActive ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';
    }
  };

  // Determine company name color
  const getCompanyNameStyle = () => {
    if (isHomePage) {
      return isScrolled ? 'text-gray-800' : 'text-white';
    } else {
      return 'text-gray-800';
    }
  };

  // Determine mobile menu button style
  const getMobileButtonStyle = () => {
    if (isHomePage) {
      return isScrolled 
        ? 'bg-gray-100 hover:bg-gray-200 text-gray-800' 
        : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white';
    } else {
      return 'bg-gray-100 hover:bg-gray-200 text-gray-800';
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${getHeaderStyle()}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative ">
                <Image
                  src="/assets/Logo.png"
                  alt="Zephyrix Tech Logo"
                  width={100}
                  height={100}
                  className="transition-all rounded-[25px] bg-white duration-300 group-hover:scale-110"
                />
              </div>
              {/* <div className="text-2xl font-bold">
                <span className={`bg-gradient-to-r transition-all duration-300 ${
                  isHomePage 
                    ? (isScrolled ? 'from-blue-600 to-purple-600' : 'from-blue-400 to-purple-400')
                    : 'from-blue-600 to-purple-600'
                } bg-clip-text text-transparent`}>
                  Zephyrix
                </span>{' '}
                <span className={`transition-colors duration-300 ${getCompanyNameStyle()}`}>
                  Tech
                </span>
              </div> */}
            </Link>

            {/* Desktop Navigation - Moved to right side */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 group ${
                    getNavLinkStyle(pathname === link.href)
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleOverlay}
              className={`md:hidden p-3 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                getMobileButtonStyle()
              }`}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          isOverlayOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-gray-900/95 to-slate-900/95 backdrop-blur-2xl"></div>
        <div className="relative flex flex-col items-center justify-center h-full">
          <button
            onClick={closeOverlay}
            className="absolute top-8 right-8 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
          >
            <X className="w-8 h-8 text-white" />
          </button>
          
          <nav className="text-center">
            <ul className="space-y-6">
              {navLinks.map((link, index) => (
                <li
                  key={link.href}
                  className={`transform transition-all duration-700 ${
                    isOverlayOpen
                      ? 'translate-y-0 opacity-100'
                      : 'translate-y-12 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    onClick={closeOverlay}
                    className="flex items-center justify-center space-x-4 text-4xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 transition-all duration-300 group py-3"
                  >
                    <link.icon className="w-10 h-10 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
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