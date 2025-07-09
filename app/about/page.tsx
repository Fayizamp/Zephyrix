'use client';
import React, { useEffect, useRef, useState } from 'react';
import { 
  Users, Target, Award, Clock, Lightbulb, Shield, TrendingUp, Globe, 
  Sparkles, ChevronDown, Play, Pause, Star, MapPin, Calendar, ArrowRight,
  Mail, Linkedin, Twitter, Github, Heart, Zap, Rocket, Eye, CheckCircle,
  Building, Code, Headphones, Palette, Database, Smartphone
} from 'lucide-react';

const AboutPage = () => {
  const pageRef = useRef<HTMLElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    const elements = pageRef.current?.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { 
      icon: Users, 
      label: 'Happy Clients', 
      value: '2,500+', 
      color: 'text-white',
      bgColor: 'from-blue-500 to-blue-700',
      description: 'Satisfied customers globally'
    },
    { 
      icon: Award, 
      label: 'Awards Won', 
      value: '45+', 
      color: 'text-white',
      bgColor: 'from-purple-500 to-purple-700',
      description: 'Industry recognitions'
    },
    { 
      icon: Target, 
      label: 'Projects Done', 
      value: '1,200+', 
      color: 'text-white',
      bgColor: 'from-green-500 to-green-700',
      description: 'Successfully completed'
    },
    { 
      icon: Clock, 
      label: 'Years Experience', 
      value: '15+', 
      color: 'text-white',
      bgColor: 'from-orange-500 to-orange-700',
      description: 'Industry expertise'
    },
  ];

  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create cutting-edge solutions that transform industries and drive progress forward.',
      color: 'text-white',
      bgColor: 'from-yellow-500 to-yellow-700',
      borderColor: 'border-yellow-200'
    },
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'Building secure, reliable solutions with unwavering commitment to data protection and ethical business practices.',
      color: 'text-white',
      bgColor: 'from-blue-500 to-blue-700',
      borderColor: 'border-blue-200'
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description: 'Every decision we make is driven by our commitment to delivering exceptional value and exceeding client expectations.',
      color: 'text-white',
      bgColor: 'from-red-500 to-red-700',
      borderColor: 'border-red-200'
    },
    {
      icon: TrendingUp,
      title: 'Excellence',
      description: 'Striving for perfection in every project, maintaining the highest standards of quality and continuous improvement.',
      color: 'text-white',
      bgColor: 'from-green-500 to-green-700',
      borderColor: 'border-green-200'
    },
];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      position: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in tech innovation',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b739?w=400&h=400&fit=crop&crop=face',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      linkedin: '#',
      email: 'sarah@zephyrixtech.com'
    },
    {
      name: 'Michael Chen',
      position: 'CTO',
      description: 'Technical architect specializing in scalable solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      linkedin: '#',
      email: 'michael@zephyrixtech.com'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Head of Design',
      description: 'Creative director crafting intuitive user experiences',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      linkedin: '#',
      email: 'emily@zephyrixtech.com'
    },
    {
      name: 'David Kim',
      position: 'Lead Developer',
      description: 'Full-stack expert in modern web technologies',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      linkedin: '#',
      email: 'david@zephyrixtech.com'
    },
    {
      name: 'Lisa Wang',
      position: 'Product Manager',
      description: 'Strategic thinker driving product innovation',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face',
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      linkedin: '#',
      email: 'lisa@zephyrixtech.com'
    },
    {
      name: 'Alex Thompson',
      position: 'Marketing Director',
      description: 'Brand strategist with digital marketing expertise',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      linkedin: '#',
      email: 'alex@zephyrixtech.com'
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "CEO, TechCorp Solutions",
      content: "Zephyrix Tech transformed our entire digital infrastructure. Their innovative approach and attention to detail exceeded all our expectations.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b739?w=100&h=100&fit=crop&crop=face",
      company: "TechCorp Solutions"
    },
    {
      name: "Robert Chen",
      role: "CTO, InnovateLabs",
      content: "Outstanding technical expertise and project management. They delivered our complex system on time and within budget.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      company: "InnovateLabs"
    },
    {
      name: "Amanda Foster",
      role: "Founder, StartupX",
      content: "Professional, reliable, and truly innovative. Zephyrix Tech has been our trusted technology partner for over 5 years.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      company: "StartupX"
    }
  ];

  const tabContent = {
    mission: {
      title: "Our Mission",
      content: "To empower businesses worldwide with innovative technology solutions that drive growth, efficiency, and digital transformation. We believe in creating tools that not only solve today's challenges but anticipate tomorrow's opportunities.",
      icon: Target,
      color: 'text-blue-600'
    },
    vision: {
      title: "Our Vision",
      content: "To be the global leader in technology innovation, creating a future where businesses can achieve unlimited potential through intelligent, scalable, and sustainable digital solutions.",
      icon: Eye,
      color: 'text-purple-600'
    },
    values: {
      title: "Our Values",
      content: "We are guided by integrity, innovation, and excellence. Our commitment to ethical practices, continuous learning, and client success forms the foundation of everything we do.",
      icon: Heart,
      color: 'text-red-600'
    }
  };

  const TeamMembers = [
  {
    name: "Sarah Chen",
    position: "Lead Developer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    linkedin: "#",
    email: "sarah@example.com",
    bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    color: "text-white"
  },
  {
    name: "Marcus Rodriguez",
    position: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    linkedin: "#",
    email: "marcus@example.com",
    bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    color: "text-white"
  },
  {
    name: "Emily Watson",
    position: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    linkedin: "#",
    email: "emily@example.com",
    bgColor: "bg-gradient-to-br from-emerald-500 to-teal-500",
    color: "text-white"
  }
];


  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main ref={pageRef} className="relative bg-white overflow-hidden ">
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 pt-16 sm:pt-20 md:pt-24 lg:pt-0">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-30 ">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto pt-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
          <div className="fade-in-up">
            <div className="grid grid-cols-1 pt-7 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="text-left">
                {/* Badge */}
                <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-blue-200 rounded-full px-6 py-3 mb-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Building className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-slate-800">About Zephyrix Tech</span>
                </div>
                
                {/* Main Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight text-slate-800">
                  Innovating the Future of{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Digital Solutions
                  </span>
                </h1>
                
                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-slate-600 mb-6 sm:mb-8 leading-relaxed">
                  We empower businesses worldwide with cutting-edge technology solutions, innovative strategies, and exceptional digital experiences that drive sustainable growth.
                </p>

                {/* Feature Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-200">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Code className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">Custom Development</p>
                      <p className="text-xs text-slate-600">Tailored solutions</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-200">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Palette className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">UI/UX Design</p>
                      <p className="text-xs text-slate-600">Beautiful interfaces</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-200">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Database className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">Data Analytics</p>
                      <p className="text-xs text-slate-600">Smart insights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 bg-white/60 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-slate-200">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Smartphone className="w-5 h-5 text-orange-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm">Mobile Apps</p>
                      <p className="text-xs text-slate-600">Cross-platform</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button 
                    onClick={() => scrollToSection('mission-section')}
                    className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-2 justify-center">
                      Explore Our Story
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  <button 
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="group flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm border border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-white hover:shadow-lg transition-all duration-300 justify-center text-sm sm:text-base"
                  >
                    {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    Watch Demo
                  </button>
                </div>
              </div>
              
              {/* Right Content - Interactive Elements */}
              <div className="relative">
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-200">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-slate-800">Why Choose Us?</h3>
                      <p className="text-xs sm:text-sm text-slate-600">Excellence in every project</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm sm:text-base text-slate-700">15+ Years of Industry Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm sm:text-base text-slate-700">2,500+ Successful Projects Delivered</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm sm:text-base text-slate-700">24/7 Dedicated Support Team</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="text-sm sm:text-base text-slate-700">Global Presence in 25+ Countries</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-slate-200">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-blue-600">98%</div>
                        <div className="text-xs text-slate-600">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-purple-600">45+</div>
                        <div className="text-xs text-slate-600">Awards Won</div>
                      </div>
                      <div className="text-center">
                        <div className="text-xl sm:text-2xl font-bold text-green-600">24/7</div>
                        <div className="text-xs text-slate-600">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            
            {/* Scroll Indicator */}
            <div className="flex flex-col items-center gap-2 text-slate-500 mt-16">
              <span className="text-sm font-medium">Discover More</span>
              <button 
                onClick={() => scrollToSection('mission-section')}
                className="animate-bounce hover:text-blue-600 transition-colors"
              >
                <ChevronDown className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision/Values Section */}
      <section id="mission-section" className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-800">
              What Drives Us
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our foundation is built on clear principles that guide every decision we make
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
            {/* Tabs */}
            <div className="w-full lg:w-1/2 fade-in-left">
              <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start">
                {(['mission', 'vision', 'values'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg text-sm sm:text-base'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    } text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3`}
                  >
                    {React.createElement(tabContent[tab].icon, { className: "w-5 h-5" })}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              
              <div className="space-y-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-800">
                  {tabContent[activeTab].title}
                </h3>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  {tabContent[activeTab].content}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 pt-4">
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Proven Track Record
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-500">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Global Impact
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2 fade-in-right">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                  alt="Team collaboration"
                  className="relative w-full h-auto rounded-xl sm:rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-slate-600">
              Measurable results that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="scale-in bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border border-slate-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${stat.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-wiggle transition-all duration-300 shadow-lg`}>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <div className="text-2xl sm:text-3xl font-bold mb-2 text-slate-800">
                  {stat.value}
                </div>
                <p className="text-sm sm:text-base text-slate-900 font-medium mb-2">{stat.label}</p>
                <p className="text-sm text-slate-500">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
<section className="py-12 sm:py-16 md:py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 sm:mb-16 fade-in-up">
      <h2 className="text-4xl font-bold mb-6 text-slate-800">
        Our Core Values
      </h2>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        The principles that guide our work and define our culture
      </p>
    </div>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      {coreValues.map((value, index) => (
        <div
          key={index}
          className={`scale-in bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group border-2 ${value.borderColor}`}
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <div className={`w-14 sm:w-16 h-14 sm:h-16 bg-gradient-to-br ${value.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:animate-wiggle transition-all duration-300 shadow-lg`}>
            <value.icon className={`w-8 h-8 ${value.color}`} />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
            {value.title}
          </h3>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {value.description}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* Team Section */}
     <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-purple-200 rounded-full px-6 py-3 mb-6">
            <Users className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-semibold text-slate-800">Our Team</span>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-slate-800">
            Meet the Innovators
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {TeamMembers.map((member, index) => (
            <div
              key={index}
              className="scale-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl h-64 sm:h-80 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                
                {/* Sparkles icon */}
                <div className={`absolute top-4 right-4 w-12 h-12 ${member.bgColor} rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <Sparkles className={`w-6 h-6 ${member.color}`} />
                </div>
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-sm text-white/90 mb-4 font-medium">{member.position}</p>
                  
                  {/* Social links */}
                  <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-300"
                    >
                      <Mail className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
</section>
      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-up">
            <h2 className="text-4xl font-bold mb-6 text-slate-800">
              What Our Clients Say
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real feedback from companies that trust us with their digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="scale-in bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-1 mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-slate-600 mb-4 sm:mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm sm:text-base font-semibold text-slate-900">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.3)_0%,transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-8 sm:py-12">
          <div className="fade-in-up">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8">
              <Zap className="w-5 h-5 text-yellow-400" />
              <span className="text-xs sm:text-sm font-semibold">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-3xl mx-auto opacity-90 leading-relaxed">
              Transform your business with our innovative solutions. Join over 2,500 satisfied clients who trust us to deliver exceptional results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
              <button className="group bg-gradient-to-r from-yellow-400 to-orange-500 text-slate-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <span className="flex items-center gap-2">
                  Start Your Project
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
              <button className="group flex items-center gap-2 sm:gap-3 border-2 border-white/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm sm:text-base">
                <Headphones className="w-5 h-5" />
                Schedule Consultation
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <Shield className="w-6 h-6 text-green-400" />
                <div className="text-left">
                  <p className="font-semibold text-xs sm:text-sm">Secure & Reliable</p>
                  <p className="text-xs opacity-80">Enterprise-grade security</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <Award className="w-6 h-6 text-yellow-400" />
                <div className="text-left">
                  <p className="font-semibold text-xs sm:text-sm">Award Winning</p>
                  <p className="text-xs opacity-80">45+ industry awards</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
                <Users className="w-6 h-6 text-blue-400" />
                <div className="text-left">
                  <p className="font-semibold text-xs sm:text-sm">Expert Team</p>
                  <p className="text-xs opacity-80">100+ skilled professionals</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .fade-in-left {
          opacity: 0;
          animation: fadeInLeft 0.8s ease-out forwards;
        }

        .fade-in-right {
          opacity: 0;
          animation: fadeInRight 0.8s ease-out forwards;
        }

        .scale-in {
          opacity: 0;
          animation: scaleIn 0.8s ease-out forwards;
        }

        .fade-in-up.animate-in,
        .fade-in-left.animate-in,
        .fade-in-right.animate-in,
        .scale-in.animate-in {
          animation-play-state: running;
        }

        @media (max-width: 768px) {
          .fade-in-up, .fade-in-left, .fade-in-right, .scale-in {
            animation-delay: 0.1s !important;
          }
        }
      `}</style>
    </main>
  );
};

export default AboutPage;