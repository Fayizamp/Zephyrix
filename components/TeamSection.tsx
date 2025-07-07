'use client';

import Link from 'next/link';
import { Linkedin, Mail, Sparkles } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Fasil M',
      position: 'MD - Co-Founder',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GYXNpbCBNPC90ZXh0Pjwvc3ZnPg==',
      linkedin: 'https://www.linkedin.com/in/fasil-m/',
      email: 'fasilm5171@gmail.com',
      gradient: 'from-blue-500 to-purple-500',
      description: 'Visionary leader driving innovation and strategic growth.',
    },
    {
      name: 'Henna Maria',
      position: 'CTO - Co-Founder',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5IZW5uYSFNYXJpYTwvdGV4dD48L3N2Zz4=',
      linkedin: '#',
      email: '#',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Technical architect shaping our technology landscape.',
    },
    {
      name: 'Fayiza MP',
      position: 'Software Developer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5GYXl6YSBNUDwvdGV4dD48L3N2Zz4=',
      linkedin: 'https://www.linkedin.com/in/fayiza-mp/',
      email: 'fayizamp3@gmail.com',
      gradient: 'from-green-500 to-teal-500',
      description: 'Full-stack developer creating exceptional user experiences.',
    },
    {
      name: 'Akash A',
      position: 'Digital Marketing Specialist',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5Ba2FzaCBBPC90ZXh0Pjwvc3ZnPg==',
      linkedin: '#',
      email: 'akashashokan812@gmail.com',
      gradient: 'from-orange-500 to-red-500',
      description: 'Marketing strategist amplifying our digital presence.',
    },
    {
      name: 'Pranav Kumar',
      position: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      fallbackImage: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzRhNGI1MiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjZTBlMGUwIiBkb21pbmFudC1iYXNlbGluZT0ibWlkZGxlIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5QcmFuYXYgS3VtYXI8L3RleHQ+PC9zdmc+',
      linkedin: '#',
      email: '#',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Creative designer crafting beautiful and intuitive interfaces.',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 md:gap-6 justify-items-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="scale-in team-card w-full max-w-[250px] h-[400px] flex flex-col">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-100/50 shadow-lg card-hover transition-all duration-300 flex flex-col h-full">
                <div className="relative overflow-hidden rounded-t-2xl h-[200px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    onError={(e) => (e.currentTarget.src = member.fallbackImage)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-800/20 to-transparent"></div>
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-md`}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-grow justify-between text-center">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold mb-1 text-slate-800">{member.name}</h3>
                    <p className="text-xs md:text-sm text-slate-600 mb-2 font-medium">{member.position}</p>
                    <p className="text-xs text-slate-600 mb-3 leading-tight">{member.description}</p>
                  </div>
                  <div className=" flex justify-center space-x-2">
                    {member.linkedin !== '#' && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        className={`w-9 h-9 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center icon-hover transition-all duration-300`}
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </Link>
                    )}
                    {member.email !== '#' && (
                      <Link
                        href={`mailto:${member.email}`}
                        className={`w-9 h-9 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center icon-hover transition-all duration-300`}
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
      </div>
    </section>
  );
};

export default TeamSection;