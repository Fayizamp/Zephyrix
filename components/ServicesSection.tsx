'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { 
  Code, 
  ShoppingCart, 
  Smartphone, 
  Cog, 
  Bot, 
  Building, 
  CreditCard, 
  Target,
  ArrowRight,
  Sparkles,
  Zap
} from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites that captivate your audience and drive business growth.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
      gradient: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-blue-900/30 to-indigo-900/30',
      delay: '0ms',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores with seamless shopping experiences and secure payments.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics'],
      gradient: 'from-emerald-600 to-teal-600',
      bgColor: 'bg-gradient-to-br from-emerald-900/30 to-teal-900/30',
      delay: '100ms',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users on any device.',
      features: ['iOS & Android', 'Cross-platform', 'Push Notifications', 'Offline Support'],
      gradient: 'from-purple-600 to-pink-600',
      bgColor: 'bg-gradient-to-br from-purple-900/30 to-pink-900/30',
      delay: '200ms',
    },
    {
      icon: Cog,
      title: 'Custom Software',
      description: 'Tailored software solutions that streamline your business processes and operations.',
      features: ['Custom Solutions', 'API Integration', 'Cloud Deployment', 'Scalable Architecture'],
      gradient: 'from-slate-700 to-slate-900',
      bgColor: 'bg-gradient-to-br from-slate-800/30 to-gray-800/30',
      delay: '300ms',
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent AI-powered systems that automate processes and enhance decision-making.',
      features: ['Machine Learning', 'Natural Language Processing', 'Automation', 'Data Analysis'],
      gradient: 'from-violet-600 to-purple-700',
      bgColor: 'bg-gradient-to-br from-violet-900/30 to-purple-900/30',
      delay: '400ms',
    },
    {
      icon: Building,
      title: 'ERP Systems',
      description: 'Comprehensive enterprise solutions that integrate all your business processes.',
      features: ['Financial Management', 'HR Integration', 'Supply Chain', 'Real-time Analytics'],
      gradient: 'from-orange-600 to-amber-600',
      bgColor: 'bg-gradient-to-br from-orange-900/30 to-amber-900/30',
      delay: '500ms',
    },
    {
      icon: CreditCard,
      title: 'Smart Business Cards',
      description: 'Revolutionary NFC-enabled digital business cards for modern networking.',
      features: ['NFC Technology', 'Instant Sharing', 'Portfolio Integration', 'Analytics Dashboard'],
      gradient: 'from-cyan-600 to-blue-600',
      bgColor: 'bg-gradient-to-br from-cyan-900/30 to-blue-900/30',
      delay: '600ms',
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that boost your online presence and ROI.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns'],
      gradient: 'from-pink-600 to-rose-600',
      bgColor: 'bg-gradient-to-br from-pink-900/30 to-rose-900/30',
      delay: '700ms',
    },
  ];

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-br from-[#0f0f23] via-slate-900 to-[#0f0f23]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ transform: 'translate(-50%, -50%)', animationDelay: '5s' }}></div>
        <div className="absolute top-32 right-1/4 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '7s' }}></div>
      </div>

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-500 rounded-full animate-float opacity-60"></div>
        <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-indigo-500 rounded-full animate-float opacity-60" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-1/4 left-3/4 w-3 h-3 bg-purple-500 rounded-full animate-float opacity-60" style={{ animationDelay: '2.5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 mb-8 hover:bg-white/10 transition-all duration-500">
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold text-white">Our Expertise</span>
            <Zap className="w-4 h-4 text-indigo-400 animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
            Services We <span className="text-blue-400">Offer</span>
            <br />
            with <span className="text-indigo-400">Excellence</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business and drive unprecedented growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-section group cursor-pointer relative"
              style={{ animationDelay: service.delay }}
            >
              <div className={`relative h-full p-8 rounded-2xl backdrop-blur-md border border-white/10 transition-all duration-500 hover:border-white/20 hover:scale-105 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] ${service.bgColor} bg-opacity-50 hover:bg-opacity-70`}>
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-700`}></div>
                
                {/* Icon with enhanced animation */}
                <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-[0_5px_15px_rgba(0,0,0,0.3)]`}>
                  <service.icon className="w-8 h-8 text-white group-hover:animate-pulse-slow" />
                </div>
                
                <h3 className="relative text-xl font-semibold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="relative text-gray-300 mb-6 leading-relaxed text-sm group-hover:text-gray-200 transition-colors duration-300">
                  {service.description}
                </p>

                <div className="relative space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                <button className="relative text-blue-400 font-semibold hover:text-indigo-300 transition-colors duration-300 flex items-center space-x-2 group/btn">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                </button>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center fade-in-section">
          <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-12 hover:bg-white/10 transition-all duration-500">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 rounded-3xl transition-opacity duration-700"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 border border-blue-400/20 rounded-full px-6 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-blue-400 animate-pulse-slow" />
                <span className="text-sm font-medium text-blue-300">Ready to Start?</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-white">
                Ready to Transform Your{' '}
                <span className="text-blue-400">Business</span>?
              </h3>
              
              <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how our cutting-edge services can help you achieve your digital transformation goals and accelerate growth.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/services">
                  <button className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full transition-all duration-500 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 flex items-center space-x-3">
                    <span>View All Services</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </Link>
                
                <Link href="/contact">
                  <button className="group relative overflow-hidden px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full transition-all duration-500 hover:bg-white/10 hover:shadow-[0_10px_20px_rgba(0,0,0,0.3)] hover:scale-105 flex items-center space-x-3">
                    <span>Get Consultation</span>
                    <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;