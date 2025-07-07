'use client';

import { useState } from 'react';
import { Mail, Phone, Send, CheckCircle, MapPin, Clock, Sparkles } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'zephyrixtech@gmail.com',
      link: 'mailto:zephyrixtech@gmail.com',
      description: 'We\'ll respond within 24 hours',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7306165171',
      link: 'tel:+917306165171',
      description: 'Mon-Fri from 9am to 6pm',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kochi, Kerala, India',
      link: '#',
      description: 'Visit us for a coffee chat',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50 relative overflow-hidden">
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
        .contact-card:nth-child(1) { animation-delay: 0.6s; }
        .contact-card:nth-child(2) { animation-delay: 0.7s; }
        .contact-card:nth-child(3) { animation-delay: 0.8s; }
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
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        .input-focus {
          transition: all 0.3s ease;
        }
        .input-focus:focus {
          border-color: transparent;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.3);
        }
        .loading-spinner {
          border: 3px solid rgba(255, 255, 255, 0.3);
          border-top: 3px solid white;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 1s linear infinite;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (max-width: 640px) {
          .scale-in, .contact-card, .fade-slide {
            animation-delay: 0.2s !important;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-bg">
        <div className="text-center mb-12 md:mb-20 scale-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-4 md:mb-6 hover:bg-white/90 transition-all duration-300">
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-blue-500" />
            <span className="text-sm md:text-base font-semibold text-slate-800">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-slate-800">
            Let's Start a <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Conversation</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-tight md:leading-relaxed">
            Ready to transform your business? We'd love to hear from you and discuss how we can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6 scale-in">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100/50 p-6 card-hover contact-card transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center icon-hover transition-all duration-300`}>
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg font-semibold text-slate-800 mb-1">{info.title}</h3>
                    {info.link !== '#' ? (
                      <a
                        href={info.link}
                        className="text-blue-500 hover:text-cyan-500 transition-colors duration-300 text-sm md:text-base font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-slate-600 text-sm md:text-base">{info.value}</span>
                    )}
                    <p className="text-xs md:text-sm text-slate-600 mt-1 leading-tight md:leading-relaxed">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100/50 p-6 card-hover transition-all duration-300 contact-card">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center icon-hover transition-all duration-300">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-slate-800">Business Hours</h3>
              </div>
              <div className="space-y-2 text-slate-600 text-xs md:text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-blue-500">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-blue-500">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-slate-600">Closed</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fade-slide">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100/50 p-6 md:p-8 shadow-lg card-hover transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Send Us a Message</h3>
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl md:text-2xl font-semibold text-slate-800 mb-3">Thank You!</h4>
                  <p className="text-sm md:text-base text-slate-600">Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm md:text-base font-medium text-slate-600 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-lg input-focus text-slate-800 placeholder-slate-400"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm md:text-base font-medium text-slate-600 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-lg input-focus text-slate-800 placeholder-slate-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm md:text-base font-medium text-slate-600 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 border border-slate-200 rounded-lg input-focus resize-none text-slate-800 placeholder-slate-400"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 px-6 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 group font-semibold text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="loading-spinner"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 md:w-5 h-4 md:h-5 group-hover:translate-x-1 transition-transform duration-300" />
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
  );
};

export default ContactSection;