'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Star, Zap, Sparkles } from 'lucide-react';

const ProductsSection = () => {
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

  const products = [
    {
      title: 'ERP System',
      description: 'Comprehensive Enterprise Resource Planning solution for streamlined business operations and resource optimization.',
      image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Resource Management', 'Inventory Control', 'Business Analytics', 'Real-time Reporting'],
      badge: 'Featured',
      badgeColor: 'bg-gradient-to-r from-primary to-secondary',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Movie Ticket Booking',
      description: 'Advanced movie ticket booking platform with real-time seat selection and secure payment integration.',
      image: 'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Seat Selection', 'Multiple Theaters', 'Secure Payments', 'Mobile Friendly'],
      badge: 'New',
      badgeColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'E-commerce Platform',
      description: 'Feature-rich e-commerce platform with advanced product management and seamless checkout experience.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      features: ['Product Management', 'Secure Checkout', 'Order Tracking', 'Analytics Dashboard'],
      badge: null,
      badgeColor: '',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section ref={sectionRef} className="section-lg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDelay: '5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-secondary/10 border border-secondary/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Our Products</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Enterprise <span className="gradient-text-secondary">Solutions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Powerful software products designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={index}
              className="fade-in-section card-glass hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video mb-6">
                {product.badge && (
                  <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center space-x-1 shadow-lg`}>
                    {product.badge === 'Featured' && <Star className="w-4 h-4" />}
                    {product.badge === 'New' && <Zap className="w-4 h-4" />}
                    <span>{product.badge}</span>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-primary px-6 py-2 rounded-full font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {product.title}
                </h3>
                <p className="text-text-secondary mb-6 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-primary to-secondary text-white py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold group/btn">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="fade-in-section">
          <div className="card-glass p-8 text-center max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 gradient-text">
                Looking for Custom Solutions?
              </h3>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                We create tailored software solutions that perfectly match your unique business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <button className="btn-primary group flex items-center space-x-2">
                    <span>View All Products</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="btn-secondary group flex items-center space-x-2">
                    <span>Request Demo</span>
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;