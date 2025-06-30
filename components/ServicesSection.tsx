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
  Sparkles
} from 'lucide-react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
      gradient: 'from-red-500 to-pink-500',
      delay: '0ms',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Powerful online stores with seamless shopping experiences and secure payments.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Analytics'],
      gradient: 'from-blue-500 to-cyan-500',
      delay: '100ms',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users on any device.',
      features: ['iOS & Android', 'Cross-platform', 'Push Notifications', 'Offline Support'],
      gradient: 'from-green-500 to-emerald-500',
      delay: '200ms',
    },
    {
      icon: Cog,
      title: 'Custom Software',
      description: 'Tailored software solutions that streamline your business processes and operations.',
      features: ['Custom Solutions', 'API Integration', 'Cloud Deployment', 'Scalable Architecture'],
      gradient: 'from-gray-500 to-slate-500',
      delay: '300ms',
    },
    {
      icon: Bot,
      title: 'AI Solutions',
      description: 'Intelligent AI-powered systems that automate processes and enhance decision-making.',
      features: ['Machine Learning', 'Natural Language Processing', 'Automation', 'Data Analysis'],
      gradient: 'from-purple-500 to-violet-500',
      delay: '400ms',
    },
    {
      icon: Building,
      title: 'ERP Systems',
      description: 'Comprehensive enterprise solutions that integrate all your business processes.',
      features: ['Financial Management', 'HR Integration', 'Supply Chain', 'Real-time Analytics'],
      gradient: 'from-orange-500 to-amber-500',
      delay: '500ms',
    },
    {
      icon: CreditCard,
      title: 'Smart Business Cards',
      description: 'Revolutionary NFC-enabled digital business cards for modern networking.',
      features: ['NFC Technology', 'Instant Sharing', 'Portfolio Integration', 'Analytics Dashboard'],
      gradient: 'from-teal-500 to-cyan-500',
      delay: '600ms',
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that boost your online presence and ROI.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns'],
      gradient: 'from-pink-500 to-rose-500',
      delay: '700ms',
    },
  ];

  return (
    <section ref={sectionRef} className="section-lg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
        <div className="absolute top-16 left-10 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-10 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Our Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Services We <span className="gradient-text">Offer</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital solutions tailored to transform your business and drive growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-section card-glass hover-lift group cursor-pointer"
              style={{ animationDelay: service.delay }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-text-secondary mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-text-secondary">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </div>
                ))}
              </div>
              
              <button className="text-primary font-medium hover:text-secondary transition-colors duration-300 flex items-center space-x-2 group/btn">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-section">
          <div className="card-glass bg-white/80 dark:bg-surface-light rounded-2xl shadow-lg p-8">
            <h3 className="text-3xl font-bold mb-6 gradient-text-secondary">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Let's discuss how our services can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <button className="btn-primary group flex items-center space-x-2">
                  <span>View All Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="/contact">
                <button className="btn-secondary group flex items-center space-x-2">
                  <span>Get Consultation</span>
                  <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;