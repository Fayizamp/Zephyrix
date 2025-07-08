'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, Send, CheckCircle, MapPin, Clock, Sparkles, MessageCircle, ArrowRight, Users, Award, Globe, Headphones } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const pageRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Add custom CSS animations to the document
    const style = document.createElement('style');
    style.textContent = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        33% { transform: translateY(-15px) rotate(2deg); }
        66% { transform: translateY(8px) rotate(-2deg); }
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
        50% { transform: translateY(-8px); }
      }
      
      @keyframes pulse-glow {
        0%, 100% { 
          box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          transform: scale(1);
        }
        50% { 
          box-shadow: 0 0 30px rgba(59, 130, 246, 0.5);
          transform: scale(1.05);
        }
      }
      
      @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      
      @keyframes scale-in {
        from { 
          opacity: 0; 
          transform: scale(0.8); 
        }
        to { 
          opacity: 1; 
          transform: scale(1); 
        }
      }
      
      @keyframes wiggle {
        0%, 100% { transform: rotate(0deg); }
        25% { transform: rotate(3deg); }
        75% { transform: rotate(-3deg); }
      }
      
      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }
      
      .animate-float {
        animation: float 6s ease-in-out infinite;
      }
      
      .animate-slide-up {
        animation: slide-up 1s ease-out;
      }
      
      .animate-bounce-subtle {
        animation: bounce-subtle 2s ease-in-out infinite;
      }
      
      .animate-pulse-glow {
        animation: pulse-glow 3s ease-in-out infinite;
      }
      
      .animate-gradient-shift {
        background-size: 200% 200%;
        animation: gradient-shift 4s ease infinite;
      }
      
      .animate-scale-in {
        animation: scale-in 0.6s ease-out;
      }
      
      .animate-wiggle {
        animation: wiggle 1s ease-in-out infinite;
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
      
      .hover-lift {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .hover-lift:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
      }
      
      .card-glass {
        background: rgba(255, 255, 255, 0.95);
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }
      
      .input-focus {
        transition: all 0.3s ease;
      }
      
      .input-focus:focus {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(59, 130, 246, 0.15);
      }
      
      .btn-primary {
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
        position: relative;
        overflow: hidden;
      }
      
      .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 15px 35px rgba(59, 130, 246, 0.4);
      }
      
      .btn-primary:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
        transition: left 0.5s;
      }
      
      .btn-primary:hover:before {
        left: 100%;
      }
      
      .btn-secondary {
        background: white;
        color: #374151;
        padding: 1rem 2rem;
        border-radius: 50px;
        font-weight: 600;
        transition: all 0.3s ease;
        border: 2px solid #e5e7eb;
        cursor: pointer;
      }
      
      .btn-secondary:hover {
        transform: translateY(-2px);
        border-color: #3b82f6;
        color: #3b82f6;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      }
      
      .loading {
        border: 2px solid transparent;
        border-top: 2px solid currentColor;
        border-radius: 50%;
        animation: spin 1s linear infinite;
      }
      
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      
      .stats-counter {
        font-size: 2rem;
        font-weight: bold;
        background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
      }
      
      @media (max-width: 640px) {
        .stats-counter {
          font-size: 1.5rem;
        }
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', company: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@company.com',
      link: 'mailto:hello@company.com',
      description: 'We\'ll respond within 24 hours',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Mon-Fri from 9am to 6pm',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      value: 'San Francisco, CA',
      link: '#',
      description: 'Come for a coffee chat',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'Expert Team',
      description: 'Work with experienced professionals who understand your needs',
    },
    {
      icon: Clock,
      title: 'Fast Response',
      description: 'Quick turnaround times without compromising on quality',
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients',
    },
  ];

  return (
    <main ref={pageRef} className="bg-white">
      {/* Hero Section - Light Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8 transform hover:scale-105 transition-all duration-300 shadow-sm">
              <MessageCircle className="w-5 h-5 text-blue-600 " />
              <span className="text-sm font-semibold text-blue-700">Let's Connect</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gray-900">
              Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient-shift">Touch</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? We're here to help you every step of the way. Let's start a conversation.
            </p>

            {/* Contact Methods Preview */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 justify-center items-center mb-12 max-w-2xl mx-auto">
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Mail className="w-5 h-5 text-blue-600 group-hover:animate-bounce-subtle" />
                <span className="text-gray-700 font-medium">hello@company.com</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg hover:shadow-xl transition-all duration-300 group">
                <Phone className="w-5 h-5 text-green-600 group-hover:animate-bounce-subtle" />
                <span className="text-gray-700 font-medium">+1 (555) 123-4567</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="btn-primary group flex items-center space-x-2">
                <span>Start Conversation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group flex items-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Schedule Call</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 fade-in-section">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Why Choose Us?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to delivering exceptional results and building lasting relationships
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="fade-in-section card-glass rounded-3xl p-6 sm:p-8 text-center group hover-lift"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:animate-pulse-glow transition-all duration-500 shadow-lg">
                  <feature.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="fade-in-section">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Let's Talk
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed">
                Ready to start your next project? Send us a message, and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card-glass hover-lift group p-6 sm:p-8 rounded-3xl shadow-lg"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:animate-wiggle transition-all duration-300 shadow-lg`}>
                        <info.icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.link !== '#' ? (
                          <a 
                            href={info.link} 
                            className="text-blue-600 hover:text-blue-800 transition-colors duration-300 text-base sm:text-lg font-semibold block mb-1"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-gray-700 text-base sm:text-lg font-semibold block mb-1">{info.value}</span>
                        )}
                        <p className="text-gray-500 text-sm sm:text-base">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-8 sm:mt-12 card-glass p-6 sm:p-8 rounded-3xl shadow-lg fade-in-section">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                    <Clock className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Business Hours</h3>
                </div>
                <div className="space-y-3 text-gray-600 text-sm sm:text-base">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Monday - Friday</span>
                    <span className="text-blue-600 font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium">Saturday</span>
                    <span className="text-blue-600 font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Sunday</span>
                    <span className="text-gray-400 font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-section">
              <div className="card-glass p-6 sm:p-8 lg:p-10 rounded-3xl shadow-xl">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12 animate-scale-in">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                      <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Thank You!</h3>
                    <p className="text-gray-600 text-sm sm:text-base">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 input-focus"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 input-focus"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 input-focus"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-900 placeholder-gray-400 input-focus"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-gray-900 placeholder-gray-400 input-focus"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full btn-primary py-4 px-6 rounded-xl flex items-center justify-center space-x-3 group font-semibold text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="loading w-5 h-5"></div>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-glass p-8 sm:p-12 rounded-3xl shadow-xl fade-in-section">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-blue-600 animate-bounce-subtle" />
              <span className="text-sm font-semibold text-blue-700">Ready to Get Started?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Your success is our priority. Let's turn your vision into reality with our expertise and dedication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group flex items-center space-x-2 justify-center">
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce-subtle transition-all duration-300" />
                <span>Start Project</span>
              </button>
              <button className="btn-secondary group flex items-center space-x-2 justify-center">
                <span>View Portfolio</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;