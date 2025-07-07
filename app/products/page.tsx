'use client';

import { useEffect, useRef } from 'react';
import { Check, Star, Zap, Sparkles, ArrowRight, Target } from 'lucide-react';

const ProductsPage = () => {
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    return () => observer.disconnect();
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
      icon: Check,
      title: 'Reliable & Secure',
      description: 'Enterprise-grade security and reliability ensure your business operations run smoothly 24/7.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: Star,
      title: 'User-Friendly',
      description: 'Intuitive interfaces and user experiences designed to minimize learning curves and maximize productivity.',
      gradient: 'from-blue-500 to-purple-500',
    },
  ];

  return (
    <main ref={pageRef} className="bg-gray-50">

      {/* Hero Section - Dark Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f0f23] via-slate-900 to-[#0f0f23] text-white pt-16">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-5 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-5 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
          <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 border border-blue-500/30 rounded-full px-4 py-2 mb-8 transform hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-medium text-blue-200">Our Products</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Enterprise <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Powering Business Growth with Cutting-Edge Software Products and Innovative Technology Solutions
            </p>

            <button className="btn-primary group flex items-center space-x-2 mx-auto">
              <span>Explore Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid - Light Theme */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="fade-in-section card-glass hover-lift group overflow-hidden rounded-2xl shadow-lg transition-all duration-500"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative overflow-hidden aspect-video">
                  {product.badge && (
                    <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center space-x-1 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                      {product.badge === 'Popular' && <Star className="w-4 h-4" />}
                      {product.badge === 'New' && <Zap className="w-4 h-4" />}
                      {product.badge === 'Featured' && <Target className="w-4 h-4" />}
                      {product.badge === 'Hot' && <Sparkles className="w-4 h-4" />}
                      <span>{product.badge}</span>
                    </div>
                  )}
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-blue-50">
                      View Details
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {product.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-600 text-sm sm:text-base">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-lg hover:shadow-xl transition-all duration-300 font-semibold group/btn">
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

      {/* Features Section - Light Theme */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our Products?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">Built with cutting-edge technology and designed for scalability</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-section card-glass hover-lift text-center group rounded-2xl shadow-md transition-all duration-500"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br ${feature.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base px-4">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light Theme */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-glass p-6 sm:p-8 rounded-2xl shadow-lg fade-in-section">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Get in touch with our team to discuss how our products can help streamline your operations and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group flex items-center space-x-2 justify-center">
                <span>Request Demo</span>
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group flex items-center space-x-2 justify-center">
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