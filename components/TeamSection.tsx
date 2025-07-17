'use client';

import Link from 'next/link';
import { Linkedin, Mail, Sparkles } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Fasil M',
      position: 'MD - Co-Founder',
      image: '/team/fasil.jpeg',
      linkedin: 'https://www.linkedin.com/in/fasil-m/',
      email: 'fasilm5171@gmail.com',
      bgColor: 'bg-gradient-to-br from-blue-500 to-purple-500',
      color: 'text-white',
    },
    {
      name: 'Henna Maria',
      position: 'CTO - Co-Founder',
      image: '/team/henna.jpg',
      linkedin: '#',
      email: '#',
      bgColor: 'bg-gradient-to-br from-purple-500 to-pink-500',
      color: 'text-white',
    },
    {
      name: 'Fayiza MP',
      position: 'Software Developer',
      image: '/team/fayiza.jpg',
      linkedin: 'https://www.linkedin.com/in/fayiza-mp/',
      email: 'fayizamp3@gmail.com',
      bgColor: 'bg-gradient-to-br from-green-500 to-teal-500',
      color: 'text-white',
    },
    {
      name: 'Akash A',
      position: 'Digital Marketing Specialist',
      image: '/team/akash.jpeg',
      linkedin: '#',
      email: 'akashashokan812@gmail.com',
      bgColor: 'bg-gradient-to-br from-orange-500 to-red-500',
      color: 'text-white',
    },
    {
      name: 'Pranav Kumar',
      position: 'UI/UX Designer',
      image: '/team/pranav.jpg',
      linkedin: '#',
      email: '#',
      bgColor: 'bg-gradient-to-br from-cyan-500 to-blue-500',
      color: 'text-white',
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-zinc-50 via-gray-50 to-white relative overflow-hidden">
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
        .team-card:nth-child(1) { animation-delay: 0.6s; }
        .team-card:nth-child(2) { animation-delay: 0.7s; }
        .team-card:nth-child(3) { animation-delay: 0.8s; }
        .team-card:nth-child(4) { animation-delay: 0.9s; }
        .team-card:nth-child(5) { animation-delay: 1.0s; }
        .card-hover {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
        }
        .card-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s ease;
        }
        .card-hover:hover::after {
          left: 100%;
        }
        .icon-hover:hover {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @media (max-width: 640px) {
          .scale-in, .team-card {
            animation-delay: 0.2s !important;
          }
          .team-card {
            max-width: 300px;
            margin-left: auto;
            margin-right: auto;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-bg">
        <div className="text-center mb-12 md:mb-20 scale-in">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-slate-200 rounded-full px-6 py-3 mb-4 md:mb-6 hover:bg-white/90 transition-all duration-300">
            <Sparkles className="w-4 md:w-5 h-4 md:h-5 text-blue-500" />
            <span className="text-sm md:text-base font-semibold text-slate-800">Our Experts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight text-slate-800">
            Meet Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-tight md:leading-relaxed">
            A passionate team dedicated to crafting innovative digital experiences that drive success.
          </p>
        </div>

         <div className="grid grid-cols-1 rounded-2xl sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="scale-in group"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      <div className="relative overflow-hidden rounded-2xl h-64 sm:h-80 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover rounded-2xl group-hover:scale-110 transition-transform duration-700"
                        />
                        
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                        
                        {/* Sparkles icon */}
                        <div className={`absolute top-4 right-4 w-12 h-12  rounded-full flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                          <Sparkles className={`w-6 h-6 `} />
                        </div>
                        
                         <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          {/* Name and position - starts below, moves to 0 on hover */}
                          <div className="transform translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                            <p className="text-sm text-white/90 font-medium">{member.position}</p>
                          </div>
                          
                          {/* Social links - hidden below, slides up on hover */}
                          <div className="flex space-x-3 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 mt-4">
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
  );
};

export default TeamSection;