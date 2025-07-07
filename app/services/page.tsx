'use client';

import { useEffect, useRef, useState } from 'react';
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
  ArrowRight,
  X,
  type LucideIcon
} from 'lucide-react';

// Define interface for service objects
interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  bgGradient: string;
  details: string;
}

const ServicesPage = () => {
  const pageRef = useRef<HTMLElement>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

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

  const services: Service[] = [
    {
      icon: Code,
      title: 'Web Designing & Development',
      description: 'Modern, responsive websites that captivate your audience and drive business growth with cutting-edge technologies.',
      features: ['Responsive Design', 'Modern UI/UX', 'SEO Optimization', 'Performance Focused'],
      gradient: 'from-red-500 to-pink-500',
      bgGradient: 'from-red-500/10 to-pink-500/10',
      details: 'Our web development services include custom CMS integration, accessibility compliance, and advanced animations to create engaging user experiences.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Development',
      description: 'Powerful online stores with seamless shopping experiences, secure payments, and comprehensive management systems.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
      details: 'We build scalable e-commerce platforms with multi-vendor support, AI-driven product recommendations, and seamless third-party integrations.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Application Development',
      description: 'Native and cross-platform mobile applications that engage users and deliver exceptional experiences on any device.',
      features: ['iOS Development', 'Android Development', 'Cross-platform', 'App Store Publishing'],
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10',
      details: 'Our mobile apps feature offline capabilities, push notifications, and optimized performance for both iOS and Android platforms.'
    },
    {
      icon: Cog,
      title: 'Software Development',
      description: 'Custom software solutions tailored to streamline your business processes and drive digital transformation.',
      features: ['Custom Solutions', 'System Integration', 'API Development', 'Cloud Deployment'],
      gradient: 'from-gray-500 to-slate-500',
      bgGradient: 'from-gray-500/10 to-slate-500/10',
      details: 'We provide end-to-end software development with microservices architecture, CI/CD pipelines, and robust security measures.'
    },
    {
      icon: Bot,
      title: 'AI Agent Development',
      description: 'Intelligent AI-powered agents that automate processes, enhance decision-making, and provide advanced analytics.',
      features: ['Natural Language Processing', 'Machine Learning', 'Automation', 'Data Analysis'],
      gradient: 'from-purple-500 to-violet-500',
      bgGradient: 'from-purple-500/10 to-violet-500/10',
      details: 'Our AI agents leverage deep learning models and real-time data processing to deliver predictive insights and automation.'
    },
    {
      icon: Building,
      title: 'ERP Systems',
      description: 'Comprehensive Enterprise Resource Planning solutions that integrate all your business processes seamlessly.',
      features: ['Financial Management', 'HR Integration', 'Supply Chain', 'Analytics Dashboard'],
      gradient: 'from-orange-500 to-amber-500',
      bgGradient: 'from-orange-500/10 to-amber-500/10',
      details: 'Our ERP systems offer modular designs, real-time analytics, and cloud-based scalability for businesses of all sizes.'
    },
    {
      icon: CreditCard,
      title: 'Smart Business Cards',
      description: 'Revolutionary NFC-enabled digital business cards that transform networking and professional connections.',
      features: ['NFC Technology', 'Instant Sharing', 'Portfolio Integration', 'Analytics'],
      gradient: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
      details: 'Smart business cards include customizable templates, CRM integration, and detailed interaction tracking.'
    },
    {
      icon: Target,
      title: 'Digital Marketing',
      description: 'Strategic digital marketing campaigns that boost your online presence, engagement, and return on investment.',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'PPC Campaigns'],
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
      details: 'Our digital marketing strategies include A/B testing, audience segmentation, and cross-channel campaign management.'
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

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <main ref={pageRef} className="relative">
      {/* Hero Section (Dark Theme) */}
            <Header />

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-900 text-white">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
              <span className="text-sm font-medium text-blue-400">Our Services</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Tailored <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Comprehensive digital solutions designed to transform your business and drive sustainable growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid (Light Theme) */}
      <section className="py-24 relative overflow-hidden bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="fade-in-section relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100 group"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleServiceClick(service)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                
                <div className="relative z intensely">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="text-blue-500 font-medium hover:text-blue-600 transition-colors duration-300 flex items-center space-x-2 group/btn">
                    <span>Quick View</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-lg w-full shadow-2xl border border-gray-100 relative transform transition-all duration-300 scale-100">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center mb-6 mx-auto shadow-lg`}>
              <selectedService.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">{selectedService.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{selectedService.description}</p>
            <p className="text-gray-700 mb-6 leading-relaxed font-medium">{selectedService.details}</p>
            <ul className="space-y-2 mb-6">
              {selectedService.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
              onClick={closeModal}
            >
              <span>Close</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Process Section (Light Theme) */}
      <section className="py-24 relative overflow-hidden bg-gray-50 text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-section">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Process
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              How we bring your ideas to life with precision and expertise
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="fade-in-section text-center relative"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform translate-x-4"></div>
                )}
                
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center mx-auto mb-6 relative shadow-lg hover:scale-110 transition-transform duration-300`}>
                    <step.icon className="w-10 h-10 text-white" />
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section (Light Theme) */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 fade-in-section shadow-lg border border-gray-100">
            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed">
              Let's discuss how we can help transform your business with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 group">
                <span>Start Your Project</span>
                <Rocket className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
              <button className="bg-gray-100 text-gray-900 px-8 py-3 rounded-full hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group border border-gray-200">
                <span>Schedule Consultation</span>
                <Target className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out;
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

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        @media (max-width: 640px) {
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }

          .text-5xl {
            font-size: 2.5rem;
          }

          .text-4xl {
            font-size: 2rem;
          }

          .max-w-4xl {
            max-width: 100%;
          }
        }

        @media (min-width: 640px) and (max-width: 1024px) {
          .grid-cols-2 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </main>
  );
};

export default ServicesPage;