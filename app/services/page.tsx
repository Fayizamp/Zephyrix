'use client';

import React, { useEffect, useRef, useState } from 'react';
import { 
  Code, 
  ShoppingCart, 
  Smartphone, 
  Cog, 
  Bot, 
  Building, 
  CreditCard, 
  Target,
  Lightbulb,
  PenTool,
  Rocket,
  Wrench,
  ArrowRight,
  X,
  Search,
  TrendingUp,
  Users,
  CheckCircle,
  Star,
  Award,
  Zap,
  Shield,
  Clock,
  Globe,
  Phone,
  Mail,
  MapPin,
  Play,
  Menu,
  Filter,
  ChevronDown,
  MousePointer,
  Sparkles,
  Heart,
  ThumbsUp,
  MessageCircle,
  ArrowUp,
  type LucideIcon
} from 'lucide-react';
import Link from 'next/link';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  details: string;
  color: string;
  timeline: string;
  category: string;
  rating: number;
  reviews: number;
  popular?: boolean;
}

interface ColorClasses {
  bg: string;
  icon: string;
  hover: string;
  gradient: string;
  shadow: string;
  border: string;
}

interface Stat {
  number: string;
  label: string;
  icon: LucideIcon;
  color: string;
  gradient: string;
  shadow: string;
}

interface ProcessStep {
  icon: LucideIcon;
  title: string;
  description: string;
  step: string;
  color: string;
  gradient: string;
  shadow: string;
}

// Enhanced color system
const getColorClasses = (color: string): ColorClasses => {
  const colors: { [key: string]: ColorClasses } = {
    blue: { 
      bg: 'bg-blue-50', 
      icon: 'text-blue-600', 
      hover: 'group-hover:bg-blue-100',
      gradient: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/25',
      border: 'border-blue-200'
    },
    green: { 
      bg: 'bg-green-50', 
      icon: 'text-green-600', 
      hover: 'group-hover:bg-green-100',
      gradient: 'from-green-500 to-green-600',
      shadow: 'shadow-green-500/25',
      border: 'border-green-200'
    },
    purple: { 
      bg: 'bg-purple-50', 
      icon: 'text-purple-600', 
      hover: 'group-hover:bg-purple-100',
      gradient: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/25',
      border: 'border-purple-200'
    },
    gray: { 
      bg: 'bg-gray-50', 
      icon: 'text-gray-600', 
      hover: 'group-hover:bg-gray-100',
      gradient: 'from-gray-500 to-gray-600',
      shadow: 'shadow-gray-500/25',
      border: 'border-gray-200'
    },
    indigo: { 
      bg: 'bg-indigo-50', 
      icon: 'text-indigo-600', 
      hover: 'group-hover:bg-indigo-100',
      gradient: 'from-indigo-500 to-indigo-600',
      shadow: 'shadow-indigo-500/25',
      border: 'border-indigo-200'
    },
    orange: { 
      bg: 'bg-orange-50', 
      icon: 'text-orange-600', 
      hover: 'group-hover:bg-orange-100',
      gradient: 'from-orange-500 to-orange-600',
      shadow: 'shadow-orange-500/25',
      border: 'border-orange-200'
    },
    pink: { 
      bg: 'bg-pink-50', 
      icon: 'text-pink-600', 
      hover: 'group-hover:bg-pink-100',
      gradient: 'from-pink-500 to-pink-600',
      shadow: 'shadow-pink-500/25',
      border: 'border-pink-200'
    },
    teal: { 
      bg: 'bg-teal-50', 
      icon: 'text-teal-600', 
      hover: 'group-hover:bg-teal-100',
      gradient: 'from-teal-500 to-teal-600',
      shadow: 'shadow-teal-500/25',
      border: 'border-teal-200'
    },
    red: { 
      bg: 'bg-red-50', 
      icon: 'text-red-600', 
      hover: 'group-hover:bg-red-100',
      gradient: 'from-red-500 to-red-600',
      shadow: 'shadow-red-500/25',
      border: 'border-red-200'
    },
    yellow: { 
      bg: 'bg-yellow-50', 
      icon: 'text-yellow-600', 
      hover: 'group-hover:bg-yellow-100',
      gradient: 'from-yellow-500 to-yellow-600',
      shadow: 'shadow-yellow-500/25',
      border: 'border-yellow-200'
    },
  };
  return colors[color] || colors.blue;
};

const ServicesPage: React.FC = () => {
  const pageRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [animatedStats, setAnimatedStats] = useState<boolean>(false);

  // Enhanced scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            
            // Trigger stats animation
            if (entry.target.classList.contains('stats-section') && !animatedStats) {
              setAnimatedStats(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = pageRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    // Back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animatedStats]);

  const services: Service[] = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive websites that deliver exceptional user experiences and drive business growth.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Cross-browser Compatibility'],
      details: 'Our web development services include custom CMS integration, accessibility compliance, and modern frameworks to create fast, secure, and scalable websites that convert visitors into customers.',
      color: 'blue',
    
      timeline: '2-4 weeks',
      category: 'development',
      rating: 4.9,
      reviews: 127,
      popular: true
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Comprehensive online stores with seamless shopping experiences and secure payment processing.',
      features: ['Shopping Cart Integration', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
      details: 'We build scalable e-commerce platforms with multi-vendor support, product recommendations, and integrated analytics for better business insights and increased sales.',
      color: 'green',
      timeline: '3-6 weeks',
      category: 'development',
      rating: 4.8,
      reviews: 89,
      popular: true
    },
    {
      icon: Smartphone,
      title: 'Mobile Applications',
      description: 'Native and cross-platform mobile apps that engage users across iOS and Android devices.',
      features: ['iOS Development', 'Android Development', 'Cross-platform Solutions', 'App Store Optimization'],
      details: 'Our mobile apps feature intuitive interfaces, offline capabilities, push notifications, and seamless integration with existing systems for maximum user engagement.',
      color: 'purple',
      timeline: '4-8 weeks',
      category: 'development',
      rating: 4.9,
      reviews: 156
    },
    {
      icon: Cog,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to streamline operations and enhance productivity.',
      features: ['Custom Solutions', 'System Integration', 'API Development', 'Cloud Deployment'],
      details: 'We provide end-to-end software development with microservices architecture, automated testing, and comprehensive documentation for long-term maintainability.',
      color: 'gray',
      timeline: '4-10 weeks',
      category: 'development',
      rating: 4.7,
      reviews: 98
    },
    {
      icon: Bot,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions that optimize processes and enhance decision-making capabilities.',
      features: ['Process Automation', 'Machine Learning', 'Data Analytics', 'AI Integration'],
      details: 'Our AI solutions leverage advanced algorithms and real-time data processing to deliver predictive insights and workflow automation that saves time and reduces costs.',
      color: 'indigo',
      timeline: '6-12 weeks',
      category: 'ai',
      rating: 4.8,
      reviews: 67
    },
    {
      icon: Building,
      title: 'ERP Systems',
      description: 'Integrated enterprise solutions that unify business processes and improve operational efficiency.',
      features: ['Financial Management', 'HR Integration', 'Supply Chain Management', 'Real-time Analytics'],
      details: 'Our ERP systems offer modular designs, customizable dashboards, and seamless integration with existing business tools to streamline all your operations.',
      color: 'orange',
      timeline: '8-16 weeks',
      category: 'enterprise',
      rating: 4.6,
      reviews: 43
    },
    {
      icon: Search,
      title: 'SEO & Digital Marketing',
      description: 'Strategic search engine optimization and digital marketing to boost online visibility and growth.',
      features: ['SEO Optimization', 'Keyword Research', 'Content Strategy', 'Performance Analytics'],
      details: 'We provide comprehensive SEO services including technical audits, content optimization, link building, and ongoing performance monitoring to increase your online presence.',
      color: 'pink',
      timeline: '3-6 months',
      category: 'marketing',
      rating: 4.7,
      reviews: 134
    },
    {
      icon: CreditCard,
      title: 'Smart Business Cards',
      description: 'Digital business cards with NFC technology for modern networking and professional connections.',
      features: ['NFC Technology', 'Digital Sharing', 'Contact Integration', 'Analytics Dashboard'],
      details: 'Smart business cards include customizable profiles, real-time updates, and detailed interaction tracking for better networking insights and professional growth.',
      color: 'teal',
      timeline: '1-2 weeks',
      category: 'digital',
      rating: 4.5,
      reviews: 87
    },
    {
      icon: Target,
      title: 'Digital Strategy',
      description: 'Comprehensive digital transformation strategies that align technology with business objectives.',
      features: ['Digital Consulting', 'Technology Roadmap', 'Market Analysis', 'ROI Optimization'],
      details: 'Our digital strategy services include market research, competitive analysis, and technology recommendations for sustainable growth and competitive advantage.',
      color: 'red',
      timeline: '2-4 weeks',
      category: 'consulting',
      rating: 4.8,
      reviews: 76
    },
  ];

  const processSteps: ProcessStep[] = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We analyze your requirements and create a detailed project roadmap with clear objectives.',
      step: '01',
      color: 'yellow',
      gradient: 'from-yellow-500 to-yellow-600',
      shadow: 'shadow-yellow-500/25'
    },
    {
      icon: PenTool,
      title: 'Development',
      description: 'Our expert team builds your solution using modern technologies and best practices.',
      step: '02',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/25'
    },
    {
      icon: Wrench,
      title: 'Testing',
      description: 'Comprehensive testing ensures quality, performance, and security standards.',
      step: '03',
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      shadow: 'shadow-green-500/25'
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'Smooth implementation with training and ongoing support for your team.',
      step: '04',
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/25'
    },
  ];

  const stats: Stat[] = [
    { 
      number: '500+', 
      label: 'Projects Completed', 
      icon: CheckCircle, 
      color: 'green',
      gradient: 'from-green-500 to-green-600',
      shadow: 'shadow-green-500/25'
    },
    { 
      number: '150+', 
      label: 'Happy Clients', 
      icon: Users, 
      color: 'blue',
      gradient: 'from-blue-500 to-blue-600',
      shadow: 'shadow-blue-500/25'
    },
    { 
      number: '98%', 
      label: 'Success Rate', 
      icon: TrendingUp, 
      color: 'purple',
      gradient: 'from-purple-500 to-purple-600',
      shadow: 'shadow-purple-500/25'
    },
    { 
      number: '24/7', 
      label: 'Support Available', 
      icon: Target, 
      color: 'orange',
      gradient: 'from-orange-500 to-orange-600',
      shadow: 'shadow-orange-500/25'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'development', label: 'Development' },
    { id: 'ai', label: 'AI & Automation' },
    { id: 'enterprise', label: 'Enterprise' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'digital', label: 'Digital Tools' },
    { id: 'consulting', label: 'Consulting' },
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const handleServiceClick = (service: Service): void => {
    setIsLoading(true);
    setTimeout(() => {
      setSelectedService(service);
      setIsLoading(false);
    }, 300);
  };

  const closeModal = (): void => {
    setSelectedService(null);
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderStars = (rating: number): JSX.Element => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <main ref={pageRef} className="relative">
      {/* Enhanced Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 overflow-hidden">
        {/* Animated background elements */}
        {/* <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-purple-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-pink-200 rounded-full opacity-20 animate-pulse animation-delay-2000"></div>
        </div> */}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 shadow-lg animate-bounce">
              <Sparkles className="w-5 h-5 text-blue-600" />
              <span className="text-xs sm:text-sm font-semibold text-blue-600">Premium Digital Services</span>
            </div>
            
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight px-2 sm:px-0">
              Transform Your Business
              <span className="block text-blue-600">
                Digitally
              </span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              Innovative digital solutions that drive growth, enhance efficiency, and create lasting value 
              in today's competitive landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-12 sm:mb-16 lg:mb-20 px-4 sm:px-0">
              <button className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base">
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group bg-white/80 backdrop-blur-sm text-gray-900 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-gray-200 hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 font-semibold text-sm sm:text-base">
                {/* <Play className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span> */}
              </button>
            </div>

            {/* Enhanced animated stats */}
            <div className="stats-section fade-in-section grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto px-4 sm:px-0">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r ${stat.gradient} rounded-xl sm:rounded-2xl mb-3 sm:mb-4 lg:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl ${stat.shadow}`}>
                    <stat.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1 sm:mb-2 ${animatedStats ? 'animate-count-up' : ''}`}>
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section with Filter */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-6 py-3 mb-8">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Our Expertise</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Comprehensive digital services designed to meet your unique business needs and exceed expectations.
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-105'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => {
              const colorClasses = getColorClasses(service.color);
              return (
                <div
                  key={index}
                  className="fade-in-section bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group relative overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                  onClick={() => handleServiceClick(service)}
                >
                  {/* Popular badge */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Popular
                    </div>
                  )}

                  {/* Background gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${colorClasses.gradient} rounded-2xl mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl ${colorClasses.shadow}`}>
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-between mb-6">
                    {renderStars(service.rating)}
                    <span className="text-sm text-gray-500">{service.reviews} reviews</span>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.slice(0, 3).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-400">
                        +{service.features.length - 3} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                    
                    <button className={`${colorClasses.icon} font-semibold hover:opacity-75 transition-all duration-300 flex items-center gap-2`}>
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Enhanced Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in-0 duration-300" onClick={closeModal}>
          <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in-0 zoom-in-95 duration-300">
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors duration-200 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${getColorClasses(selectedService.color).gradient} rounded-2xl mb-8 shadow-xl ${getColorClasses(selectedService.color).shadow}`}>
                  <selectedService.icon className="w-10 h-10 text-white" />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <h3 className="text-3xl font-bold text-gray-900">
                    {selectedService.title}
                  </h3>
                  {selectedService.popular && (
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Popular
                    </div>
                  )}
                </div>
                
                <div className="mb-6">
                  {renderStars(selectedService.rating)}
                  <span className="text-sm text-gray-500 ml-2">
                    Based on {selectedService.reviews} reviews
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {selectedService.description}
                </p>
                
                <p className="text-gray-700 mb-8 leading-relaxed">
                  {selectedService.details}
                </p>
              </div>
              
              <div>
                <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    What's Included
                  </h4>
                  <div className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    Project Details
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Timeline:</span>
                      <span className="font-semibold text-gray-900">{selectedService.timeline}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Support:</span>
                      <span className="font-semibold text-gray-900">24/7 Available</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Satisfaction:</span>
                      <span className="font-semibold text-gray-900">100% Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
              <button
                className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-semibold"
                onClick={closeModal}
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                className="px-6 py-4 rounded-2xl border border-gray-200 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center gap-2 font-semibold"
                onClick={closeModal}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Free Consultation</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Process Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-100 rounded-full px-6 py-3 mb-8">
              <Cog className="w-5 h-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-600">Our Methodology</span>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              How We Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven, structured approach to delivering exceptional results for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="fade-in-section text-center relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Enhanced connection line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-gray-300 rounded-full animate-pulse"></div>
                  </div>
                )}
                
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group h-full flex flex-col relative z-10">
                  <div className={`flex items-center justify-center w-20 h-20 bg-gradient-to-r ${step.gradient} rounded-2xl mx-auto mb-8 relative group-hover:scale-110 transition-transform duration-300 shadow-xl ${step.shadow}`}>
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-32 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 border border-gray-100 shadow-xl">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-blue-100 rounded-full px-6 py-3 mb-8">
              <Rocket className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-blue-600">Ready to Start?</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital solutions can help you achieve your goals and drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-semibold">
                <span>Start Your Project</span>
                <Rocket className="w-5 h-5" />
              </button>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-2xl border border-gray-200 hover:bg-gray-50 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 font-semibold">
                <span>Schedule Consultation</span>
                <Phone className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>100% Satisfaction Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-50"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <span className="text-gray-700 font-medium">Loading...</span>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .animate-count-up {
          animation: countUp 2s ease-out;
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        @media (max-width: 640px) {
          .text-5xl {
            font-size: 2.5rem;
          }
          
          .text-4xl {
            font-size: 2rem;
          }
          
          .text-3xl {
            font-size: 1.875rem;
          }
        }

        @media (max-width: 768px) {
          .grid-cols-2 {
            grid-template-columns: repeat(1, minmax(0, 1fr));
          }
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }

        .group:hover .group-hover\\:translate-x-1 {
          transform: translateX(0.25rem);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f5f9;
        }

        ::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;