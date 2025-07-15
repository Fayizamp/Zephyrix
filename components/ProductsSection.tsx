'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Star, Zap, Sparkles, Quote } from 'lucide-react';

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
      { threshold: 0.25 }
    );

    const elements = sectionRef.current?.querySelectorAll('.fade-in-section');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const products = [
    {
      title: 'ERP System',
      description: 'Streamline your business with our comprehensive ERP solution for optimized operations.',
      image: '/products/ERP.jpg',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjNDA0MDQwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FUlAgU3lzdGVtPC90ZXh0Pjwvc3ZnPg==',
      features: ['Resource Management', 'Inventory Control', 'Business Analytics', 'Real-time Reporting'],
      badge: 'Featured',
      badgeColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Movie Ticket Booking',
      description: 'Seamless movie ticket booking with real-time seat selection and secure payments.',
      image: '/products/flickBooker.png',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjNDA0MDQwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Nb3ZpZSBUaWNrZXQ8L3RleHQ+PC9zdmc+',
      features: ['Seat Selection', 'Multiple Theaters', 'Secure Payments', 'Mobile Friendly'],
      badge: 'New',
      badgeColor: 'bg-gradient-to-r from-cyan-500 to-blue-500',
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'E-commerce Platform',
      description: 'Feature-rich platform with advanced product management and seamless checkout.',
      image: '/products/Ecommerce.jpg',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y0ZjRmNCIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjNDA0MDQwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5FLWNvbW1lcmNlPC90ZXh0Pjwvc3ZnPg==',
      features: ['Product Management', 'Secure Checkout', 'Order Tracking', 'Analytics Dashboard'],
      badge: null,
      badgeColor: '',
      gradient: 'from-green-500 to-emerald-500',
    },
  ];

  const testimonials = [
    {
      quote: 'The ERP system transformed our workflow, saving us countless hours!',
      author: 'Jane Doe',
      company: 'TechCorp',
    },
    {
      quote: 'The movie booking platform is seamless and user-friendly. Highly recommend!',
      author: 'John Smith',
      company: 'CinemaWorld',
    },
    {
      quote: 'Our e-commerce sales skyrocketed thanks to this robust platform.',
      author: 'Emily Brown',
      company: 'ShopEasy',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    'Empower Your Business',
    'Innovate with Confidence',
    'Scale Your Success',
  ];

  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    const taglineInterval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);
    return () => {
      clearInterval(testimonialInterval);
      clearInterval(taglineInterval);
    };
  }, [testimonials.length, taglines.length]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <div className="absolute top-10 right-20 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-parallax-orbit"></div>
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-parallax-orbit" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-300/30 rounded-full blur-3xl animate-parallax-orbit" style={{ transform: 'translate(-50%, -50%)', animationDelay: '5s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Feature Spotlight Section */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-white/85 backdrop-blur-md border border-gray-200 rounded-full px-6 py-3 mb-6 hover:bg-white/95 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-blue-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-800">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Next-Level <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover innovative products designed to propel your business to new heights with seamless integration and scalability.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span>Explore Features</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {products.map((product, index) => (
            <div
              key={index}
              className="fade-in-section group relative bg-white/85 backdrop-blur-md rounded-2xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 animate-bounce-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video mb-6 rounded-t-2xl">
                {product.badge && (
                  <div className={`absolute top-4 right-4 ${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium z-10 flex items-center space-x-1 shadow-md group-hover:scale-110 group-hover:animate-pulse-rotate transition-transform duration-300`}>
                    {product.badge === 'Featured' && <Star className="w-4 h-4 animate-pulse" />}
                    {product.badge === 'New' && <Zap className="w-4 h-4 animate-pulse" />}
                    <span>{product.badge}</span>
                  </div>
                )}
                <img
                  src={product.image}
                  alt={product.title}
                  onError={(e) => (e.currentTarget.src = product.fallbackImage)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 shadow-md hover:shadow-lg">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {product.title}
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-base">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${product.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-125 group-hover:animate-spin-pop transition-transform duration-300`}>
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-700 text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Action Button */}
                <button className={`w-full bg-gradient-to-r ${product.gradient} text-white py-3 rounded-lg hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold group/btn`}>
                  <span className="flex items-center justify-center space-x-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div className="fade-in-section mb-20">
          <div className="relative bg-white/85 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md p-8 text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-cyan-200/20 animate-pulse-slow"></div>
            <div className="relative z-10">
              <Quote className="w-8 h-8 text-blue-500 mx-auto mb-4 animate-pulse" />
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <p className="text-xl text-gray-700 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-base text-gray-600 font-semibold">
                        — {testimonial.author}, {testimonial.company}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="fade-in-section animate-scale-pulse">
          <div className="relative bg-white/85 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md p-8 text-center max-w-4xl mx-auto overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-cyan-200/20 animate-pulse-slow"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {taglines[currentTagline]}
              </h3>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                We create tailored software solutions that perfectly match your unique business requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products">
                  <button className="group relative bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>View All Products</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </Link>
                <Link href="/contact">
                  <button className="group relative bg-white/85 backdrop-blur-md border border-gray-200 text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-white/95 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>Request Demo</span>
                    <Zap className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          60% {
            opacity: 1;
            transform: scale(1.05) translateY(0);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes scale-pulse {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes parallax-orbit {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(15px, -15px) scale(1.05);
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes spin-pop {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.3) rotate(180deg);
          }
          100% {
            transform: scale(1.25) rotate(360deg);
          }
        }

        @keyframes pulse-rotate {
          0%, 100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(6deg);
          }
        }

        .is-visible {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-bounce-in {
          animation: bounce-in 1s ease-out forwards;
        }

        .animate-scale-pulse {
          animation: scale-pulse 1.2s ease-out forwards;
        }

        .animate-parallax-orbit {
          animation: parallax-orbit 10s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-spin-pop {
          animation: spin-pop 0.4s ease-out;
        }

        .animate-pulse-rotate {
          animation: pulse-rotate 0.6s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default ProductsSection;