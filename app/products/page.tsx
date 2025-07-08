'use client';
import React, { useEffect, useRef } from 'react';
import { Check, Star, Zap, Sparkles, ArrowRight, Target, Layers, Globe, Shield, TrendingUp, Users, Award } from 'lucide-react';

const ProductsPage = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add custom CSS animations to the document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin-slow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-20px); }
      }
      
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-10px) rotate(2deg); }
        66% { transform: translateY(5px) rotate(-2deg); }
      }
      
      @keyframes scale-pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
      }
      
      @keyframes sway {
        0%, 100% { transform: translateX(0px) rotate(0deg); }
        25% { transform: translateX(10px) rotate(1deg); }
        75% { transform: translateX(-10px) rotate(-1deg); }
      }
      
      @keyframes slide-up {
        from { 
          opacity: 0; 
          transform: translateY(50px); 
        }
        to { 
          opacity: 1; 
          transform: translateY(0); 
        }
      }
      
      @keyframes bounce-subtle {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
      }
      
      @keyframes gradient {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      .animate-spin-slow {
        animation: spin-slow 8s linear infinite;
      }
      
      .animate-bounce-slow {
        animation: bounce-slow 3s ease-in-out infinite;
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-scale-pulse {
        animation: scale-pulse 4s ease-in-out infinite;
      }
      
      .animate-sway {
        animation: sway 5s ease-in-out infinite;
      }
      
      .animate-slide-up {
        animation: slide-up 1s ease-out;
      }
      
      .animate-bounce-subtle {
        animation: bounce-subtle 2s ease-in-out infinite;
      }
      
      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }
      
      .fade-in-section {
        opacity: 0;
        transform: translateY(30px);
        transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .fade-in-section.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px) scale(1.02);
      }
      
      .card-glass {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .group:hover .group-hover\\:scale-110 {
        transform: scale(1.1);
      }
      
      .group:hover .group-hover\\:rotate-6 {
        transform: rotate(6deg);
      }
      
      .group/feature:hover .group-hover\\/feature\\:scale-110 {
        transform: scale(1.1);
      }
      
      .group/feature:hover .group-hover\\/feature\\:text-gray-900 {
        color: #111827;
      }
      
      .group/btn:hover .group-hover\\/btn\\:translate-x-1 {
        transform: translateX(0.25rem);
      }
      
      .group/btn:hover .group-hover\\/btn\\:scale-105 {
        transform: scale(1.05);
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pageRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  const products = [
    {
      title: 'E-commerce Platform',
      description: 'A comprehensive e-commerce solution with advanced features for modern retail businesses and seamless customer experiences.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Multi-vendor marketplace support',
        'AI-powered product recommendations',
        'Advanced inventory management',
        'Integrated payment gateway',
      ],
      badge: 'Popular',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Movie Ticket Booking System',
      description: 'State-of-the-art ticketing solution for cinema chains and entertainment venues with real-time capabilities.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Real-time seat selection',
        'Multiple cinema management',
        'Food & beverage pre-ordering',
        'Customer loyalty program',
      ],
      badge: 'New',
      badgeColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Enterprise Resource Planning',
      description: 'Integrated ERP solution designed for modern enterprises to streamline operations and boost productivity.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Financial management suite',
        'HR & payroll integration',
        'Supply chain optimization',
        'Real-time analytics dashboard',
      ],
      badge: null,
      badgeColor: '',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Smart Business Card',
      description: 'Revolutionizing networking with a smart, tap-to-share digital business card for modern professionals.',
      image: 'https://images.pexels.com/photos/6373478/pexels-photo-6373478.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Instant contact sharing',
        'Portfolio & social links in one tap',
        'Eco-friendly & paperless',
        'No app required',
      ],
      badge: 'Featured',
      badgeColor: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'AI Customer Support Bot',
      description: 'Intelligent chatbot solution for automated customer service and support with advanced AI capabilities.',
      image: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        '24/7 automated responses',
        'Natural language processing',
        'Multi-language support',
        'Integration with existing systems',
      ],
      badge: 'Hot',
      badgeColor: 'bg-gradient-to-r from-red-500 to-pink-500',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Learning Management System',
      description: 'Complete LMS solution for educational institutions and corporate training with comprehensive features.',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: [
        'Course creation and management',
        'Student progress tracking',
        'Video conferencing integration',
        'Certification management',
      ],
      badge: null,
      badgeColor: '',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Built for speed and efficiency, our products deliver exceptional performance even under heavy loads.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance standards to protect your business data and operations.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'Global Scalability',
      description: 'Cloud-native architecture designed to scale seamlessly across multiple regions and markets.',
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  const stats = [
    { icon: Users, value: '500K+', label: 'Active Users' },
    { icon: TrendingUp, value: '99.9%', label: 'Uptime' },
    { icon: Award, value: '50+', label: 'Awards Won' },
    { icon: Globe, value: '120+', label: 'Countries' },
  ];

  return (
    <main ref={pageRef} className="bg-white">
      {/* Hero Section - White Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-16">
        {/* Unique geometric animation instead of bubbles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-32 h-32 border-2 border-blue-200 rounded-lg rotate-45 animate-spin-slow opacity-30"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border-2 border-purple-200 rounded-full animate-bounce-slow opacity-40"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full animate-float opacity-50"></div>
          <div className="absolute bottom-20 right-1/3 w-16 h-16 border-2 border-emerald-200 rotate-12 animate-pulse opacity-30"></div>
          <div className="absolute top-1/3 left-1/2 w-40 h-40 border border-gray-200 rounded-full animate-scale-pulse opacity-20"></div>
          <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-r from-orange-100 to-yellow-100 rounded-lg rotate-12 animate-sway opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-full px-4 py-2 mb-8 transform hover:scale-105 transition-all duration-300 shadow-sm">
              <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">Innovation That Transforms</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Powerful <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">Digital Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering businesses worldwide with cutting-edge software products that drive growth, efficiency, and innovation
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mb-12 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-4 sm:p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500 mx-auto mb-2 animate-bounce-subtle" />
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex items-center space-x-2">
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 group flex items-center space-x-2">
                <Layers className="w-5 h-5" />
                <span>View Demo</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Enhanced */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Product Suite
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of digital solutions designed to accelerate your business growth
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="fade-in-section bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group hover-lift border border-gray-100"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  {product.badge && (
                    <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center space-x-1 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      {product.badge === 'Popular' && <Star className="w-4 h-4 animate-pulse" />}
                      {product.badge === 'New' && <Zap className="w-4 h-4 animate-bounce" />}
                      {product.badge === 'Featured' && <Target className="w-4 h-4 animate-spin-slow" />}
                      {product.badge === 'Hot' && <Sparkles className="w-4 h-4 animate-pulse" />}
                      <span>{product.badge}</span>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold transform translate-y-8 group-hover:translate-y-0 transition-all duration-300 shadow-xl hover:bg-blue-50 hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 group/feature">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0 group-hover/feature:scale-110 transition-transform duration-300`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 text-sm sm:text-base group-hover/feature:text-gray-900 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 sm:py-4 rounded-xl hover:shadow-xl transition-all duration-300 font-semibold group/btn hover:scale-105">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our Solutions?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for the demands of modern business
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-section card-glass rounded-3xl p-6 sm:p-8 text-center group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 hover:scale-105"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-glass p-8 sm:p-12 rounded-3xl shadow-xl fade-in-section border border-white/20 hover:shadow-2xl transition-all duration-500">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
              <span className="text-sm font-medium text-blue-700">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform Your Business Today
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Join thousands of businesses worldwide who trust our solutions to drive their digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105 group flex items-center space-x-2 justify-center">
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                <span>Request Demo</span>
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 transform hover:scale-105 group flex items-center space-x-2 justify-center">
                <span>Contact Sales</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductsPage;