'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
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
  Sparkles,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
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

  const services = [
    {
      icon: Code,
      title: 'Web Designing & Development',
      description: 'Modern, responsive websites that captivate your audience and drive business growth with cutting-edge technologies.',
      features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimization', 'Performance Focused'],
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-500/10 to-pink-500/10',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Powerful online stores with seamless shopping experiences, secure payments, and comprehensive management systems.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications that engage users and deliver exceptional experiences on any device.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Publishing'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
    },
    {
      icon: Cog,
      title: 'Software Development',
      description: 'Custom software solutions tailored to streamline your business processes and drive digital transformation.',
      features: ['Custom Solutions', 'System Integration', 'API Development', 'Cloud Deployment'],
      gradient: 'from-gray-500 to-slate-500',
      bgGradient: 'from-gray-500/10 to-slate-500/10',
    },
    {
      icon: Bot,
      title: 'AI Agent Development',
      description: 'Intelligent AI-powered agents that automate processes, enhance decision-making, and provide advanced analytics.',
      features: ['Natural Language Processing', 'Machine Learning', 'Automation', 'Data Analysis'],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-500/10 to-violet-500/10',
    },
    {
      icon: Building,
      title: 'ERP Systems',
      description: 'Comprehensive Enterprise Resource Planning solutions that integrate all your business processes seamlessly.',
      features: ['Financial Management', 'HR Integration', 'Supply Chain', 'Analytics Dashboard'],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-500/10 to-amber-500/10',
    },
    {
      icon: CreditCard,
      title: 'Smart Business Cards',
      description: 'Revolutionary NFC-enabled digital business cards that transform networking and professional connections.',
      features: ['NFC Technology', 'Instant Sharing', 'Portfolio Integration', 'Analytics'],
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that boost your online presence, engagement, and return on investment.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns'],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
    },
  ];

  const processSteps = [
    {
      icon: Lightbulb,
      title: 'Discovery',
      description: 'We analyze your requirements and create a detailed project roadmap with clear objectives and timelines.',
      step: '01',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: PenTool,
      title: 'Development',
      description: 'Our expert team builds your solution using cutting-edge technologies and best practices.',
      step: '02',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Wrench,
      title: 'Testing',
      description: 'Rigorous testing ensures quality, performance, and security before deployment.',
      step: '03',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: Rocket,
      title: 'Deployment',
      description: 'We ensure smooth implementation and provide comprehensive training and support.',
      step: '04',
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
          <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Our Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tailored <span className="gradient-text-secondary">Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="fade-in-section card-glass hover-lift group relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-secondary mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-text-secondary">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-primary font-medium hover:text-secondary transition-colors duration-300 flex items-center space-x-2 group/btn">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Our Process</h2>
            <p className="text-xl text-text-secondary">How we bring your ideas to life</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="fade-in-section text-center relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Connecting line (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary to-transparent transform translate-x-4"></div>
                )}
                
                <div className="relative">
                  <div className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-text-secondary leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="card-glass p-8 fade-in-section">
            <h2 className="text-4xl font-bold mb-6 gradient-text-secondary">Ready to Get Started?</h2>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group flex items-center space-x-2">
                <span>Start Your Project</span>
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="btn-secondary group flex items-center space-x-2">
                <span>Schedule Consultation</span>
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;