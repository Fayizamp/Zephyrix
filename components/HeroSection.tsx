'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowRight , Code, Rocket, Zap, Terminal, ChevronRight, Users, Award, Clock } from 'lucide-react';

const HeroSection = () => {
  const [terminalText, setTerminalText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

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
    <section className="min-h-screen bg-gradient-to-br from-[#0f0f23] via-slate-900 to-[#0f0f23] text-white">
      {/* Main Hero Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-8 lg:gap-12 items-center">
          
          {/* Left Side - Content (3 columns) */}
          <div className="xl:col-span-3 space-y-8">
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-blue-900/30 border border-blue-700/50 rounded-full backdrop-blur-sm">
                <Terminal className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-sm font-medium text-blue-300">Software Development Company</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Great{' '}
                <span className="text-blue-400">software</span>
                <br />
                is built by great{' '}
                <span className="text-indigo-400">teams</span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
                We build cutting-edge products and empower future tech leaders through 
                innovative solutions and comprehensive training programs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-gray-300 font-semibold rounded-lg border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-800/50 transition-all duration-200">
                <span>Learn More</span>
                <Rocket className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
              <div className="group bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-900/30 border border-blue-700/50 rounded-lg mb-4 group-hover:bg-blue-800/40 transition-colors duration-300">
                  <Code className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Expert Development</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Modern technologies and industry best practices</p>
              </div>
              
              <div className="group bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-indigo-900/30 border border-indigo-700/50 rounded-lg mb-4 group-hover:bg-indigo-800/40 transition-colors duration-300">
                  <Zap className="w-6 h-6 text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Lightning Fast</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Optimized for exceptional performance</p>
              </div>
              
              <div className="group bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-green-900/30 border border-green-700/50 rounded-lg mb-4 group-hover:bg-green-800/40 transition-colors duration-300">
                  <Rocket className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Future Ready</h3>
                <p className="text-gray-400 text-sm leading-relaxed">Scalable and maintainable solutions</p>
              </div>
            </div>
          </div>

          {/* Right Side - Terminal (2 columns) */}
          <div className="xl:col-span-2">
            <div className="bg-gray-800 border-2 border-gray-700 rounded-xl shadow-2xl overflow-hidden max-w-lg mx-auto">
              {/* Terminal Header */}
              <div className="bg-gray-700 px-4 py-3 flex items-center justify-between border-b border-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Terminal className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-300 font-mono">terminal</span>
                </div>
                <div className="w-16"></div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 h-64 sm:h-72 overflow-y-auto bg-black">
                <div className="font-mono text-xs sm:text-sm">
                  <pre className="text-green-400 whitespace-pre-wrap leading-relaxed">
                    {terminalText}
                    {showCursor && (
                      <span className="bg-green-400 text-black px-1">_</span>
                    )}
                  </pre>
                </div>
              </div>

              {/* Terminal Footer */}
              <div className="bg-gray-700 px-4 py-2 flex items-center justify-between text-xs text-gray-300 border-t border-gray-600">
                <div className="flex items-center space-x-3">
                  <span>Ready</span>
                  <span>•</span>
                  <span>UTF-8</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChevronRight className="w-3 h-3" />
                  <span>bash</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 lg:mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl font-bold text-indigo-400 mb-2">50+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl font-bold text-green-400 mb-2">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 text-center hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className="inline-flex items-center space-x-4 text-gray-400 mb-6">
            <div className="w-16 h-px bg-gray-700"></div>
            <span className="text-sm whitespace-nowrap">Ready to get started?</span>
            <div className="w-16 h-px bg-gray-700"></div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="inline-flex items-center px-8 py-4 bg-gray-800 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-700 hover:border-gray-600 transition-all duration-200 transform hover:scale-105">
              <Terminal className="w-4 h-4 mr-2" />
              Start Your Project
            </button>
            <button className="inline-flex items-center px-8 py-4 bg-transparent border border-gray-600 text-gray-300 font-medium rounded-lg hover:bg-gray-800/50 hover:border-gray-500 transition-all duration-200">
              <Users className="w-4 h-4 mr-2" />
              Talk to Our Team
            </button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;