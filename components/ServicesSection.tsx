'use client';

import Link from 'next/link';
import { Code, ShoppingCart, Smartphone, Cog, Bot, Building, CreditCard, Target, ArrowRight, Sparkles } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites that captivate your audience and drive business growth.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Modern UI/UX'],
      gradient: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-50/80 backdrop-blur-sm',
      delay: '0ms',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores with seamless shopping experiences and secure payments.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics'],
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50/80 backdrop-blur-sm',
      delay: '100ms',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users on any device.',
      features: ['iOS & Android', 'Cross-platform', 'Push Notifications', 'Offline Support'],
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50/80 backdrop-blur-sm',
      delay: '200ms',
    },
    {
      icon: Cog,
      title: 'Custom Software',
      description: 'Tailored software solutions that streamline your business processes and operations.',
      features: ['Custom Solutions', 'API Integration', 'Cloud Deployment', 'Scalable Architecture'],
      gradient: 'from-slate-600 to-slate-800',
      bgColor: 'bg-slate-50/80 backdrop-blur-sm',
      delay: '300ms',
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent AI-powered systems that automate processes and enhance decision-making.',
      features: ['Machine Learning', 'Natural Language Processing', 'Automation', 'Data Analysis'],
      gradient: 'from-violet-500 to-purple-600',
      bgColor: 'bg-violet-50/80 backdrop-blur-sm',
      delay: '400ms',
    },
    {
      icon: Building,
      title: 'ERP Systems',
      description: 'Comprehensive enterprise solutions that integrate all your business processes.',
      features: ['Financial Management', 'HR Integration', 'Supply Chain', 'Real-time Analytics'],
      gradient: 'from-orange-500 to-amber-500',
      bgColor: 'bg-orange-50/80 backdrop-blur-sm',
      delay: '500ms',
    },
    {
      icon: CreditCard,
      title: 'Smart Business Cards',
      description: 'Revolutionary NFC-enabled digital business cards for modern networking.',
      features: ['NFC Technology', 'Instant Sharing', 'Portfolio Integration', 'Analytics Dashboard'],
      gradient: 'from-cyan-500 to-blue-500',
      bgColor: 'bg-cyan-50/80 backdrop-blur-sm',
      delay: '600ms',
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that boost your online presence and ROI.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns'],
      gradient: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-50/80 backdrop-blur-sm',
      delay: '700ms',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-gray-100 to-white relative overflow-hidden">
      <style jsx>{`
        .section-bg {
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 70%);
        }
        .scale-in {
          opacity: 0;
          transform: scale(0.95);
          animation: scaleIn 0.6s ease-out forwards;
        }
        .scale-in:nth-child(1) { animation-delay: 0.2s; }
        .scale-in:nth-child(2) { animation-delay: 0.4s; }
        .scale-in:nth-child(3) { animation-delay: 0.6s; }
        .service-card:nth-child(1) { animation-delay: 0.8s; }
        .service-card:nth-child(2) { animation-delay: 0.9s; }
        .service-card:nth-child(3) { animation-delay: 1.0s; }
        .service-card:nth-child(4) { animation-delay: 1.1s; }
        .service-card:nth-child(5) { animation-delay: 1.2s; }
        .service-card:nth-child(6) { animation-delay: 1.3s; }
        .service-card:nth-child(7) { animation-delay: 1.4s; }
        .service-card:nth-child(8) { animation-delay: 1.5s; }
        .fade-slide {
          opacity: 0;
          transform: translateX(30px);
          animation: fadeSlide 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
        .card-hover {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .card-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        .card-hover:hover::after {
          left: 100%;
        }
        .icon-hover:hover {
          transform: rotate(360deg);
          transition: transform 0.6s ease;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 640px) {
          .scale-in, .service-card, .fade-slide {
            animation-delay: 0.2s !important;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-bg">
        <div className="text-center mb-12 md:mb-20 scale-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-8 hover:bg-white/90 transition-all duration-300">
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-blue-500" />
            <span className="text-sm md:text-base font-semibold text-slate-800">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-slate-800">
            Services We <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Offer</span>
            <br />
            with <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business and drive unprecedented growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
          {services.map((service, index) => (
            <div key={index} className="scale-in service-card">
              <div className={`relative h-full p-6 md:p-8 rounded-2xl border border-slate-100/50 ${service.bgColor} transition-all duration-300 card-hover`}>
                <div className={`w-14 md:w-16 h-14 md:h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 md:mb-6 icon-hover shadow-lg`}>
                  <service.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-slate-800">{service.title}</h3>
                <p className="text-base md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed">{service.description}</p>
                <div className="space-y-3 mb-4 md:mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm md:text-base text-slate-600">
                      <div className={`w-2 h-2 bg-gradient-to-r ${service.gradient} rounded-full mr-3`}></div>
                      {feature}
                    </div>
                  ))}
                </div>
                <Link href={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className="text-blue-500 font-semibold hover:text-indigo-500 transition-colors duration-300 flex items-center space-x-2 group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="scale-in">
          <div className="relative backdrop-blur-sm bg-white/80 border border-slate-200 rounded-3xl shadow-lg p-8 md:p-12 hover:bg-white/90 transition-all duration-300">
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-blue-50/80 border border-blue-200 rounded-full px-6 py-2 mb-4 md:mb-6">
                <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-blue-500" />
                <span className="text-sm md:text-base font-medium text-slate-800">Ready to Start?</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 leading-tight text-slate-800">
                Ready to Transform Your{' '}
                <span className="bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">Business</span>?
              </h3>
              <p className="text-lg text-slate-600 mb-6 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Let's discuss how our cutting-edge services can help you achieve your digital transformation goals and accelerate growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
                <Link href="/services">
                  <button className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 flex items-center space-x-3">
                    <span>View All Services</span>
                    <ArrowRight className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="group relative overflow-hidden px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm border border-slate-200 text-slate-800 font-semibold rounded-full transition-all duration-300 hover:bg-white/90 hover:shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:scale-105 flex items-center space-x-3">
                    <span>Get Consultation</span>
                    <Target className="w-4 md:w-5 h-4 md:h-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;