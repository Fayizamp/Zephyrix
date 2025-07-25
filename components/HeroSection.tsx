'use client';

import React, { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const commands = [
    { command: 'npm run build', output: 'Building your next breakthrough...' },
    { command: 'git push origin main', output: 'Pushing innovation forward...' },
    { command: 'docker deploy', output: 'Scaling your success...' },
    { command: 'npm start', output: 'Starting your journey...' }
  ];

  useEffect(() => {
    const currentCmd = commands[currentCommand];
    const fullText = `$ ${currentCmd.command}\n${currentCmd.output}`;
    
    if (isTyping) {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayText(fullText.slice(0, index));
          index++;
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
          
          setTimeout(() => {
            setCurrentCommand((prev) => (prev + 1) % commands.length);
            setDisplayText('');
            setIsTyping(true);
          }, 2000);
        }
      }, 50);
      
      return () => clearInterval(typingInterval);
    }
  }, [currentCommand, isTyping]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
      <div className="container mx-auto px-6 py-16">
        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-slate-800">
                Build the
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Future</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Empowering developers and businesses with cutting-edge technology solutions that scale.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full hover:from-blue-700 hover:to-purple-700 text-white font-semibold text-base md:text-lg transition-all duration-300 shadow-lg">
                Get Started
              </button>
              <button className="px-8 py-4 border-2 border-gray-600 hover:border-gray-800 rounded-full hover:bg-gray-800 hover:text-white font-semibold text-base md:text-lg transition-all duration-300">
                Learn More
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-base">Live System</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-base">99.9% Uptime</span>
              </div>
            </div>
          </div>
          
          {/* Right Column - Terminal */}
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-gray-100 border-b border-gray-200">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-sm text-gray-600">terminal</div>
                <div className="w-16"></div>
              </div>
              
              {/* Terminal Body */}
              <div className="p-6 font-mono text-sm h-64 overflow-hidden bg-gray-900 text-white">
                <div className="text-green-400 mb-2">
                  Welcome to TechCorp Terminal v2.1.0
                </div>
                <div className="text-gray-400 mb-4">
                  Type 'help' for available commands
                </div>
                
                <div className="text-white">
                  <pre className="whitespace-pre-wrap">
                    {displayText}
                    <span className="animate-pulse">|</span>
                  </pre>
                </div>
              </div>
            </div>
            
            {/* Removed floating elements for standard look */}
          </div>
        </div>
        
        {/* Bottom Stats Section */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-600">50</div>
            <div className="text-slate-500 text-base leading-normal">Projects Deployed</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-600">99.9%</div>
            <div className="text-slate-500 text-base leading-normal">Uptime</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-600">24/7</div>
            <div className="text-slate-500 text-base leading-normal">Support</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-orange-600">5+</div>
            <div className="text-slate-500 text-base leading-normal">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;