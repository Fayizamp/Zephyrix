'use client';

import Link from 'next/link';
import { Linkedin, Instagram, Mail, Zap, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Our Team', href: '/about#team' },
      { name: 'Careers', href: '/contact' },
      { name: 'Contact', href: '/contact' },
    ],
    services: [
      { name: 'Web Development', href: '/services' },
      { name: 'Mobile Apps', href: '/services' },
      { name: 'AI Solutions', href: '/services' },
      { name: 'Digital Marketing', href: '/services' },
    ],
    products: [
      { name: 'ERP System', href: '/products' },
      { name: 'E-commerce Platform', href: '/products' },
      { name: 'Smart Business Cards', href: '/products' },
      { name: 'Custom Solutions', href: '/products' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-br from-surface via-surface-light to-background border-t border-border overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-6 group">
                <div className="relative">
                  <Zap className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:bg-secondary/20 transition-all duration-300"></div>
                </div>
                <div className="text-2xl font-bold">
                  <span className="gradient-text">Zephyrix</span>{' '}
                  <span className="text-white">Tech</span>
                </div>
              </Link>
              
              <p className="text-text-secondary leading-relaxed mb-6 max-w-md">
                Zephyrix Tech: Innovating for Impact! We build cutting-edge products and empower future tech leaders through our comprehensive training programs.
              </p>
              
              <div className="flex space-x-4">
                <Link
                  href="https://www.linkedin.com/company/zephyrix-tech/"
                  target="_blank"
                  className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <Linkedin className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </Link>
                <Link
                  href="https://www.instagram.com/zephyrixtech/"
                  target="_blank"
                  className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <Instagram className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </Link>
                <Link
                  href="mailto:zephyrixtech@gmail.com"
                  className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <Mail className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </Link>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Company
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-primary to-secondary"></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Services
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-secondary to-accent"></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-secondary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6 relative">
                Products
                <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-gradient-to-r from-accent to-success"></span>
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-text-secondary hover:text-accent transition-colors duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-text-secondary">
                <span>© 2025 Zephyrix Tech. Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in India</span>
              </div>
              
              <div className="flex items-center space-x-6">
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                  Privacy Policy
                </Link>
                <Link href="#" className="text-text-secondary hover:text-primary transition-colors duration-300">
                  Terms of Service
                </Link>
                <button
                  onClick={scrollToTop}
                  className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;