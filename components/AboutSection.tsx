'use client';

import { useEffect, useRef } from 'react';
import { Lightbulb, Users, GraduationCap, Shield, Target, Award, TrendingUp, Globe } from 'lucide-react';

const AboutSection = () => {
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

  const stats = [
    { icon: Users, label: 'Happy Clients', value: '500+', color: 'text-primary' },
    { icon: Award, label: 'Years Experience', value: '15+', color: 'text-secondary' },
    { icon: Target, label: 'Success Rate', value: '98%', color: 'text-accent' },
    { icon: Globe, label: 'Countries Served', value: '25+', color: 'text-success' },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create cutting-edge solutions that transform businesses.',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with our clients to achieve extraordinary results through teamwork.',
      gradient: 'from-secondary to-accent',
    },
    {
      icon: GraduationCap,
      title: 'Empowerment',
      description: 'Empowering the next generation of tech leaders through comprehensive training programs.',
      gradient: 'from-accent to-success',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building trust through transparency, ethical practices, and unwavering commitment.',
      gradient: 'from-success to-warning',
    },
  ];

  return (
    <section ref={sectionRef} className="section-lg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ transform: 'translate(-50%, -50%)', animationDelay: '4s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-section">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Zephyrix Tech</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're passionate about building innovative products that make a difference in the world through technology.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="fade-in-section">
            <div className="card-glass p-8 hover-lift">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Our Mission</h3>
              <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                Our mission is to harness the power of technology to drive positive change in the world. We believe that by combining innovative thinking with technical expertise, we can create solutions that make a real difference in people's lives.
              </p>
              <p className="text-lg text-text-secondary leading-relaxed">
                With over a decade of experience, we've helped hundreds of businesses across multiple industries modernize their operations and achieve their digital transformation goals.
              </p>
            </div>
          </div>

          <div className="fade-in-section">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-auto rounded-2xl shadow-2xl hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-20 fade-in-section">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text-secondary">Our Impact</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center card-glass hover-lift group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${
                  index === 0 ? 'from-primary to-secondary' :
                  index === 1 ? 'from-secondary to-accent' :
                  index === 2 ? 'from-accent to-success' :
                  'from-success to-warning'
                } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className={`text-3xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <p className="text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div className="fade-in-section">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-glass hover-lift group text-center"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-white group-hover:text-primary transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;