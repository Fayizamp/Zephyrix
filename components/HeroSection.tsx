'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight, Code, Rocket, Zap, Terminal, ChevronRight, Users, Award, Clock, Sparkles, Star } from 'lucide-react';

const HeroSection = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  const terminalLines = [
    '$ whoami',
    '> TechCorp Solutions',
    '',
    '$ cat about.txt',
    '> Innovative software since 2020',
    '> Modern web & cloud solutions',
    '> Empowering businesses globally',
    '',
    '$ ls services/',
    '> web-development/',
    '> mobile-apps/',
    '> cloud-solutions/',
    '> ai-integration/',
    '',
    '$ echo "Ready to build?"',
    '> Ready to build?',
    '',
    '$ _'
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const typeSpeed = 60;
    const lineDelay = 300;

    const typeWriter = () => {
      if (currentLineIndex < terminalLines.length) {
        const currentLine = terminalLines[currentLineIndex];
        
        if (currentCharIndex < currentLine.length) {
          setTerminalText(prev => prev + currentLine[currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          setTerminalText(prev => prev + '\n');
          setCurrentLineIndex(prev => prev + 1);
          setCurrentCharIndex(0);
          
          setTimeout(() => {}, lineDelay);
        }
      }
    };

    const timer = setTimeout(typeWriter, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentLineIndex, currentCharIndex, terminalLines]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section className="min-h-screen bg-gray-900 text-white relative overflow-hidden">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className={`inline-flex items-center px-4 py-2 bg-gray-800 border border-gray-700 rounded-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <Terminal className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm font-medium text-gray-300">Software Development Company</span>
              </div>

              {/* Main Heading with Animation */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className={`inline-block transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  Great{' '}
                </span>
                <span className={`inline-block text-blue-400 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  software
                </span>
                <br />
                <span className={`inline-block transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  is built by great{' '}
                </span>
                <span className={`inline-block text-purple-400 transition-all duration-700 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  teams
                </span>
              </h1>

              {/* Subtitle */}
              <p className={`text-xl text-gray-300 max-w-xl leading-relaxed transition-all duration-700 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                We craft exceptional digital experiences and build scalable solutions that drive business growth through innovative technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-1300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <button className="group relative inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <button className="group inline-flex items-center justify-center px-8 py-4 bg-gray-800 text-gray-300 font-semibold rounded-xl border border-gray-700 hover:bg-gray-700 hover:border-gray-600 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                <span>View Our Work</span>
                <Rocket className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
              <div className={`group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1500ms'}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900 border border-blue-800 rounded-lg mb-4 group-hover:bg-blue-800 transition-all duration-300">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Cutting-edge technologies and industry best practices</p>
              </div>
              
              <div className={`group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1600ms'}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-900 border border-purple-800 rounded-lg mb-4 group-hover:bg-purple-800 transition-all duration-300">
                  <Zap className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Optimized for exceptional performance and speed</p>
              </div>
              
              <div className={`group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1700ms'}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-900 border border-green-800 rounded-lg mb-4 group-hover:bg-green-800 transition-all duration-300">
                  <Rocket className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Future Ready</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Scalable and maintainable solutions for growth</p>
              </div>
              
              <div className={`group bg-gray-800 border border-gray-700 rounded-xl p-6 hover:bg-gray-700 hover:border-gray-600 transition-all duration-500 hover:transform hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{transitionDelay: '1800ms'}}>
                <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-900 border border-yellow-800 rounded-lg mb-4 group-hover:bg-yellow-800 transition-all duration-300">
                  <Star className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Premium Quality</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Exceptional craftsmanship in every project</p>
              </div>
            </div>
          </div>

          {/* Right Side - Terminal */}
          <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden max-w-md w-full">
              {/* Terminal Header */}
              <div className="bg-gray-700 px-6 py-4 flex items-center justify-between border-b border-gray-600">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300 font-mono">dev@techcorp</span>
                </div>
                <div className="w-16"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-6 h-80 overflow-y-auto bg-black">
                <div className="font-mono text-sm">
                  <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                    {terminalText}
                    {showCursor && (
                      <span className="bg-green-400 text-black px-1 animate-pulse">_</span>
                    )}
                  </pre>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gray-700 px-6 py-3 flex items-center justify-between text-xs text-gray-400 border-t border-gray-600">
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    Online
                  </span>
                  <span>•</span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight className="w-3 h-3" />
                  <span>zsh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-20 lg:mt-24 transition-all duration-700 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300 transition-colors">500+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projects Completed</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300 transition-colors">50+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Happy Clients</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl font-bold text-green-400 mb-2 group-hover:text-green-300 transition-colors">5+</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Years Experience</div>
            </div>
            <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 group">
              <div className="text-4xl font-bold text-yellow-400 mb-2 group-hover:text-yellow-300 transition-colors">24/7</div>
              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`mt-20 lg:mt-24 text-center transition-all duration-700 delay-1600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <div className="inline-flex items-center space-x-4 text-gray-400 mb-8">
            <div className="w-20 h-px bg-gray-700"></div>
            <span className="text-sm whitespace-nowrap">Ready to transform your business?</span>
            <div className="w-20 h-px bg-gray-700"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group inline-flex items-center px-8 py-4 bg-gray-800 border border-gray-700 text-white font-medium rounded-xl hover:bg-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:-translate-y-1">
              <Terminal className="w-4 h-4 mr-2 group-hover:text-blue-400 transition-colors" />
              Start Your Project
            </button>
            <button className="group inline-flex items-center px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-medium rounded-xl hover:bg-gray-800 hover:border-gray-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              <Users className="w-4 h-4 mr-2 group-hover:text-purple-400 transition-colors" />
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;