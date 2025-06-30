'use client';

import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Mail, Phone, Send, CheckCircle, MapPin, Clock, Sparkles, MessageCircle } from 'lucide-react';

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
      title: 'Office',
      value: 'Kochi, Kerala, India',
      link: '#',
      description: 'Visit us for a coffee chat',
      gradient: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <main ref={pageRef}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-success/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-warning/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-error/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-success/10 border border-success/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-success" />
              <span className="text-sm font-medium text-success">Contact Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Let's Discuss Your <span className="gradient-text">Project</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Ready to transform your business? We'd love to hear from you and discuss how we can help achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="fade-in-section">
              <h2 className="text-4xl font-bold mb-8 gradient-text">Get in Touch</h2>
              <p className="text-xl text-text-secondary mb-12 leading-relaxed">
                Ready to start your next project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="card-glass hover-lift group p-6"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                          {info.title}
                        </h3>
                        {info.link !== '#' ? (
                          <a 
                            href={info.link} 
                            className="text-primary hover:text-secondary transition-colors duration-300 text-lg font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-text-secondary text-lg">{info.value}</span>
                        )}
                        <p className="text-text-muted mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Business Hours */}
              <div className="mt-12 card-glass p-6 fade-in-section">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                </div>
                <div className="space-y-2 text-text-secondary">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="text-primary">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-primary">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-text-muted">Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="fade-in-section">
              <div className="card-glass p-8 lg:p-10">
                <h2 className="text-3xl font-bold text-white mb-8">Send Us a Message</h2>
                
                {isSubmitted ? (
                  <div className="text-center py-12 animate-scaleIn">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-custom">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-white mb-2">Thank You!</h3>
                    <p className="text-text-secondary">Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-text-muted"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-text-muted"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-text-muted"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-text-secondary mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-white placeholder-text-muted"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 bg-surface border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 resize-none text-white placeholder-text-muted"
                        placeholder="Tell us about your project..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-gradient-to-r from-primary to-secondary text-white py-4 px-6 rounded-lg hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-3 group font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? (
                        <>
                          <div className="loading"></div>
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
      <section className="section relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-glass p-8 fade-in-section">
            <h2 className="text-4xl font-bold mb-6 gradient-text-secondary">Ready to Start Your Project?</h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Let's turn your ideas into reality. Our team is ready to help you build something amazing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group flex items-center space-x-2">
                <span>Schedule a Call</span>
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group flex items-center space-x-2">
                <span>View Portfolio</span>
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;