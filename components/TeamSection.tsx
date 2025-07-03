'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Github, Twitter, Sparkles, Quote, ArrowRight } from 'lucide-react';

const TeamSection = () => {
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

  const teamMembers = [
    {
      name: 'Fasil M',
      position: 'MD - Co-Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GYXNpbCBNPC90ZXh0Pjwvc3ZnPg==',
      linkedin: 'https://www.linkedin.com/in/fasil-m/',
      email: 'fasilm5171@gmail.com',
      gradient: 'from-blue-400 to-purple-400',
      description: 'Visionary leader driving innovation and strategic growth.',
    },
    {
      name: 'Henna Maria',
      position: 'CTO - Co-Founder',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IZW5uYSBNYXJpYTwvdGV4dD48L3N2Zz4=',
      linkedin: '#',
      email: '#',
      gradient: 'from-purple-400 to-pink-400',
      description: 'Technical architect shaping our technology landscape.',
    },
    {
      name: 'Fayiza MP',
      position: 'Software Developer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GYXl6YSBNUDwvdGV4dD48L3N2Zz4=',
      linkedin: 'https://www.linkedin.com/in/fayiza-mp/',
      email: 'fayizamp3@gmail.com',
      gradient: 'from-green-400 to-teal-400',
      description: 'Full-stack developer creating exceptional user experiences.',
    },
    {
      name: 'Akash A',
      position: 'Digital Marketing Specialist',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ba2FzaCBBPC90ZXh0Pjwvc3ZnPg==',
      linkedin: '#',
      email: 'akashashokan812@gmail.com',
      gradient: 'from-orange-400 to-red-400',
      description: 'Marketing strategist amplifying our digital presence.',
    },
    {
      name: 'Pranav Kumar',
      position: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QcmFuYXYgS3VtYXI8L3RleHQ+PC9zdmc+',
      linkedin: '#',
      email: '#',
      gradient: 'from-cyan-400 to-blue-400',
      description: 'Creative designer crafting beautiful and intuitive interfaces.',
    },
  ];

  const testimonials = [
    {
      quote: 'The team’s dedication to excellence is unmatched. Truly inspiring!',
      author: 'Sarah Johnson',
      company: 'TechTrend Innovations',
    },
    {
      quote: 'Working with this team was a game-changer for our project!',
      author: 'Michael Lee',
      company: 'GrowEasy Solutions',
    },
    {
      quote: 'Their creativity and expertise brought our vision to life.',
      author: 'Emma Davis',
      company: 'CreativeLabs',
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentTagline, setCurrentTagline] = useState(0);
  const taglines = [
    'Join Our Visionary Team',
    'Innovate with Passion',
    'Shape the Future Together',
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
    <section ref={sectionRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 pt-32 pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none select-none">
        <div className="absolute top-10 right-20 w-16 h-16 bg-blue-400/30 rounded-full animate-star-twinkle"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-purple-400/30 rounded-full animate-star-twinkle" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-cyan-400/30 rounded-full animate-star-twinkle" style={{ transform: 'translate(-50%, -50%)', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Team Spotlight Section */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 backdrop-blur-md border border-gray-700 rounded-full px-6 py-3 mb-6 hover:bg-gray-800/70 transition-all duration-300">
            <Sparkles className="w-5 h-5 text-blue-400 animate-pulse" />
            <span className="text-sm font-semibold text-gray-100">Our Mission</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
            Meet Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Experts</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate team dedicated to crafting innovative digital experiences that drive success.
          </p>
          <div className="mt-8 flex justify-center">
            <button className="group relative bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <Sparkles className="w-5 h-5 animate-pulse" />
              <span>Discover Our Team</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="fade-in-section group animate-staggered-reveal"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>

                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-t-2xl aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      onError={(e) => (e.currentTarget.src = member.fallbackImage)}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Badge */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:animate-glow-pulse transition-transform duration-300`}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 text-center">
                  <h3 className="text-xl font-bold mb-2 text-gray-100 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {member.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 font-medium">
                    {member.position}
                  </p>
                  <p className="text-gray-400 text-xs mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.linkedin !== '#' && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center hover:scale-110 hover:animate-spin-pop transition-all duration-300 shadow-lg group/icon`}
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </Link>
                    )}
                    {member.email !== '#' && (
                      <Link
                        href={`mailto:${member.email}`}
                        className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center hover:scale-110 hover:animate-spin-pop transition-all duration-300 shadow-lg group/icon`}
                      >
                        <Mail className="w-4 h-4 text-white" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Slider */}
        <div className="fade-in-section mb-20">
          <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 shadow-md p-8 text-center max-w-4xl mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 animate-pulse-slow"></div>
            <div className="relative z-10">
              <Quote className="w-8 h-8 text-blue-400 mx-auto mb-4 animate-pulse" />
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <p className="text-xl text-gray-300 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <p className="text-base text-gray-400 font-semibold">
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
          <div className="relative bg-gray-800/50 backdrop-blur-md rounded-2xl border border-gray-700 shadow-md p-8 text-center max-w-4xl mx-auto overflow-hidden hover:shadow-xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-cyan-400/20 animate-pulse-slow"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {taglines[currentTagline]}
              </h3>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're always looking for talented individuals who share our passion for innovation and excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/careers">
                  <button className="group relative bg-gradient-to-r from-blue-400 to-purple-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>View Careers</span>
                    <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </button>
                </Link>
                <Link href="/about">
                  <button className="group relative bg-gray-800/50 backdrop-blur-md border border-gray-700 text-gray-100 px-8 py-3 rounded-full font-semibold hover:bg-gray-800/70 hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                    <span>Learn More</span>
                    <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
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

        @keyframes staggered-reveal {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0);
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

        @keyframes star-twinkle {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1) translate(0, 0);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1) translate(5px, -5px);
          }
        }

        @keyframes glow-pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.3);
          }
          50% {
            transform: scale(1.1);
            box-shadow: 0 0 15px 5px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes spin-pop {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.2) rotate(180deg);
          }
          100% {
            transform: scale(1.1) rotate(360deg);
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

        .is-visible {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-staggered-reveal {
          animation: staggered-reveal 1s ease-out forwards;
        }

        .animate-scale-pulse {
          animation: scale-pulse 1.2s ease-out forwards;
        }

        .animate-star-twinkle {
          animation: star-twinkle 8s ease-in-out infinite;
        }

        .animate-glow-pulse {
          animation: glow-pulse 0.6s ease-in-out;
        }

        .animate-spin-pop {
          animation: spin-pop 0.4s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TeamSection;