'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Linkedin, Mail, Github, Twitter, Sparkles } from 'lucide-react';

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
      { threshold: 0.1 }
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
      linkedin: 'https://www.linkedin.com/in/fasil-m/',
      email: 'fasilm5171@gmail.com',
      gradient: 'from-blue-500 to-purple-500',
      description: 'Visionary leader driving innovation and strategic growth.',
    },
    {
      name: 'Henna Maria',
      position: 'CTO - Co-Founder',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: '#',
      gradient: 'from-purple-500 to-pink-500',
      description: 'Technical architect shaping our technology landscape.',
    },
    {
      name: 'Fayiza MP',
      position: 'Software Developer',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: 'https://www.linkedin.com/in/fayiza-mp/',
      email: 'fayizamp3@gmail.com',
      gradient: 'from-green-500 to-teal-500',
      description: 'Full-stack developer creating exceptional user experiences.',
    },
    {
      name: 'Akash A',
      position: 'Digital Marketing Specialist',
      image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: 'akashashokan812@gmail.com',
      gradient: 'from-orange-500 to-red-500',
      description: 'Marketing strategist amplifying our digital presence.',
    },
    {
      name: 'Pranav Kumar',
      position: 'UI/UX Designer',
      image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=400',
      linkedin: '#',
      email: '#',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Creative designer crafting beautiful and intuitive interfaces.',
    },
  ];

  return (
    <section ref={sectionRef} className="section-lg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-success/5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <div className="inline-flex items-center space-x-2 bg-accent/10 border border-accent/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Our Team</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our <span className="gradient-text">Experts</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Talented individuals passionate about creating exceptional digital experiences and driving innovation.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="fade-in-section group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="card-glass hover-lift overflow-hidden text-center relative">
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Image Container */}
                <div className="relative mb-6">
                  <div className="relative overflow-hidden rounded-2xl aspect-square">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Floating Badge */}
                  <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-text-secondary text-sm mb-3 font-medium">
                    {member.position}
                  </p>
                  <p className="text-text-muted text-xs mb-6 leading-relaxed">
                    {member.description}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-3">
                    {member.linkedin !== '#' && (
                      <Link
                        href={member.linkedin}
                        target="_blank"
                        className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group/icon`}
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </Link>
                    )}
                    {member.email !== '#' && (
                      <Link
                        href={`mailto:${member.email}`}
                        className={`w-10 h-10 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group/icon`}
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

        {/* CTA Section */}
        <div className="mt-20 text-center fade-in-section">
          <div className="card-glass p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 gradient-text-secondary">
              Join Our Amazing Team
            </h3>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <button className="btn-primary group flex items-center space-x-2">
                  <span>View Careers</span>
                  <Sparkles className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </Link>
              <Link href="/about">
                <button className="btn-secondary group flex items-center space-x-2">
                  <span>Learn More</span>
                  <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;