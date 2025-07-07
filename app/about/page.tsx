'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Target, Award, Clock, Lightbulb, Shield, TrendingUp, Globe, Sparkles, ChevronDown, Play, Pause, Star, MapPin, Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const pageRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'approach'>('mission');

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

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+', gradient: 'from-blue-500 to-cyan-500', description: 'Satisfied customers worldwide' },
    { icon: Award, label: 'Years Experience', value: '15+', gradient: 'from-purple-500 to-pink-500', description: 'Industry expertise' },
    { icon: Target, label: 'Success Rate', value: '98%', gradient: 'from-green-500 to-emerald-500', description: 'Project completion' },
    { icon: Clock, label: 'Support', value: '24/7', gradient: 'from-orange-500 to-red-500', description: 'Always available' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create cutting-edge solutions that transform industries and drive progress.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do, exceeding expectations at every turn.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Building trust through transparency, ethical practices, and unwavering commitment to our values.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Fostering continuous learning and development for our team and clients to achieve sustainable success.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology', icon: '🚀' },
    { year: '2015', title: 'First Major Product', description: 'Launched our flagship ERP solution serving 100+ clients', icon: '🏆' },
    { year: '2020', title: 'Global Expansion', description: 'Expanded operations to serve clients across 25+ countries', icon: '🌍' },
    { year: '2025', title: 'Innovation Hub', description: 'Established as a leading innovation hub in the region', icon: '⚡' },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zephyrix Tech transformed our entire business process. Their innovative solutions helped us increase efficiency by 200%.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "Outstanding technical expertise and customer service. They delivered beyond our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupX",
      content: "Professional, reliable, and innovative. Zephyrix Tech is our go-to partner for all tech solutions.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  ];

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "We are dedicated to transforming businesses through innovative software solutions. Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and success in the digital age.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    },
    vision: {
      title: "Our Vision",
      content: "To be the leading global technology partner, creating innovative solutions that revolutionize industries and empower businesses to thrive in the digital future.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    approach: {
      title: "Our Approach",
      content: "We combine cutting-edge technology with deep industry expertise to deliver customized solutions that address unique business challenges and drive measurable results.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    }
  };

  const scrollToNext = () => {
    const nextSection = document.getElementById('mission-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main ref={pageRef} className="relative">
      <Header />

      {/* Dark Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '3s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeIn">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-400">About Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                Zephyrix Tech
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Shaping the Future with Innovative Solutions and Empowering the Next Generation of Tech Leaders
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <span className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-all duration-300"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                Watch Demo
              </button>
            </div>
          </div>
        </div>

        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        >
          <ChevronDown className="w-8 h-8" />
        </button>
      </section>

      {/* Light Theme Sections */}
      <div className="bg-white text-gray-900">
        {/* Mission/Vision/Approach Section */}
        <section id="mission-section" className="py-12 sm:py-16 md:py-24 relative overflow-hidden bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20 fade-in-section">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                Discover Zephyrix Tech
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Unravel our mission, vision, and approach to pioneering technology innovation
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
              <div className="w-full lg:w-1/2 fade-in-section">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 md:mb-10 bg-white rounded-full p-2 sm:p-3 shadow-sm border border-gray-100">
                  {(['mission', 'vision', 'approach'] as const).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium text-xs sm:text-sm tracking-wide capitalize transition-all duration-300 flex-1 sm:flex-none text-center ${
                        activeTab === tab
                          ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                          : 'text-gray-600 hover:text-blue-600 hover:bg-gray-100'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                
                <div className="space-y-6 sm:space-y-8">
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                    {tabContent[activeTab].title}
                  </h3>
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                    {tabContent[activeTab].content}
                  </p>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-4 sm:pt-6">
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
                      <MapPin className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                      Global Presence
                    </div>
                    <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-medium">
                      <Calendar className="w-4 sm:w-5 h-4 sm:h-5 text-blue-500" />
                      Since 2010
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="w-full lg:w-1/2 fade-in-section">
                <div className="relative group">
                  <img
                    src={tabContent[activeTab].image}
                    alt={tabContent[activeTab].title}
                    className="w-full h-auto rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:shadow-3xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl transition-opacity duration-300 group-hover:opacity-80"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent fade-in-section">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="fade-in-section bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="text-gray-900 font-medium mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent fade-in-section">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="fade-in-section bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group border border-gray-100"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <value.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent fade-in-section">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`fade-in-section flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    style={{ animationDelay: `${index * 300}ms` }}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
:

                        <div className="text-3xl mb-4">{milestone.icon}</div>
                        <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-centerulto mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent fade-in-section">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="fade-in-section bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 1s ease-out;
        }

        .fade-in-section {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .fade-in-section.is-visible {
          opacity: 1;
          transform: translateY(0);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }
      `}</style>
      <Footer />
    </main>
  );
};

export default AboutPage;