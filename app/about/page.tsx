'use client';

import { useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TeamSection from '@/components/TeamSection';
import { Users, Target, Award, Clock, Lightbulb, Shield, TrendingUp, Globe, Sparkles } from 'lucide-react';

const AboutPage = () => {
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

  const stats = [
    { icon: Users, label: 'Clients Worldwide', value: '500+', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Award, label: 'Years Experience', value: '15+', gradient: 'from-purple-500 to-pink-500' },
    { icon: Target, label: 'Client Satisfaction', value: '98%', gradient: 'from-green-500 to-emerald-500' },
    { icon: Clock, label: 'Support Available', value: '24/7', gradient: 'from-orange-500 to-red-500' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create cutting-edge solutions that transform industries and drive progress.',
      gradient: 'from-yellow-500 to-orange-500',
    },
    {
      icon: Shield,
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do, exceeding expectations at every turn.',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'Building trust through transparency, ethical practices, and unwavering commitment to our values.',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Fostering continuous learning and development for our team and clients to achieve sustainable success.',
      gradient: 'from-pink-500 to-rose-500',
    },
  ];

  const milestones = [
    { year: '2010', title: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2015', title: 'First Major Product', description: 'Launched our flagship ERP solution serving 100+ clients' },
    { year: '2020', title: 'Global Expansion', description: 'Expanded operations to serve clients across 25+ countries' },
    { year: '2025', title: 'Innovation Hub', description: 'Established as a leading innovation hub in the region' },
  ];

  return (
    <main ref={pageRef}>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fadeInUp">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Us</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              About <span className="gradient-text">Zephyrix Tech</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary mb-12 max-w-4xl mx-auto leading-relaxed">
              Shaping the Future with Innovative Solutions and Empowering the Next Generation of Tech Leaders
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-lg relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="fade-in-section">
              <h2 className="text-4xl font-bold mb-6 gradient-text">Our Mission</h2>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                We are dedicated to transforming businesses through innovative software solutions. Our mission is to empower organizations with cutting-edge technology that drives growth, efficiency, and success in the digital age.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                With over a decade of experience, we've helped hundreds of businesses across multiple industries modernize their operations and achieve their digital transformation goals.
              </p>
            </div>
            <div className="fade-in-section">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mission illustration"
                  className="w-full h-auto rounded-2xl shadow-2xl hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-secondary fade-in-section">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="fade-in-section card-glass hover-lift text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2 gradient-text">{stat.value}</div>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text fade-in-section">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="fade-in-section card-glass hover-lift text-center group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${value.gradient} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 gradient-text-secondary fade-in-section">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`fade-in-section flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  style={{ animationDelay: `${index * 300}ms` }}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card-glass p-6 hover-lift">
                      <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-secondary rounded-full border-4 border-background shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      <Footer />
    </main>
  );
};

export default AboutPage;