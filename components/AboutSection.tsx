'use client';

import { Lightbulb, Users, GraduationCap, Shield, Target } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to create cutting-edge solutions that transform businesses.',
      gradient: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-50/80 backdrop-blur-sm'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working together with our clients to achieve extraordinary results through teamwork.',
      gradient: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50/80 backdrop-blur-sm'
    },
    {
      icon: GraduationCap,
      title: 'Empowerment',
      description: 'Empowering the next generation of tech leaders through comprehensive training programs.',
      gradient: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50/80 backdrop-blur-sm'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Building trust through transparency, ethical practices, and unwavering commitment.',
      gradient: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-50/80 backdrop-blur-sm'
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
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
        .scale-in:nth-child(3) { animation-delay: 0.6s; }
        .value-card:nth-child(1) { animation-delay: 0.8s; }
        .value-card:nth-child(2) { animation-delay: 1s; }
        .value-card:nth-child(3) { animation-delay: 1.2s; }
        .value-card:nth-child(4) { animation-delay: 1.4s; }
        .fade-slide {
          opacity: 0;
          transform: translateX(30px);
          animation: fadeSlide 0.8s ease-out forwards;
          animation-delay: 0.4s;
        }
        .card-hover {
          position: relative;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .card-hover::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }
        .card-hover:hover::after {
          left: 100%;
        }
        .icon-hover:hover {
          transform: rotate(360deg);
          transition: transform 0.6s ease;
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @media (max-width: 640px) {
          .scale-in, .value-card, .fade-slide {
            animation-delay: 0.2s !important;
          }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 section-bg">
        <div className="text-center mb-12 md:mb-20 scale-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-[#0f0f23] to-slate-700 bg-clip-text text-transparent">
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zephyrix Tech</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            We're passionate about building innovative products that make a difference in the world through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
          <div className="scale-in">
            <div className="p-6 md:p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg card-hover transition-all duration-300 border border-slate-100/50">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full mb-4 md:mb-6 transition-all duration-300">
                <Lightbulb className="h-4 md:h-5 w-4 md:w-5 text-purple-600 mr-2" />
                <span className="text-purple-800 font-medium text-sm md:text-base">Our Mission</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Our Mission
              </h3>
              <p className="text-base md:text-lg text-slate-600 mb-4 md:mb-6 leading-relaxed">
                Our mission is to harness the power of technology to drive positive change in the world. We combine innovative thinking with technical expertise to create solutions that make a real impact.
              </p>
              <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                With over a decade of experience, we've helped hundreds of businesses across multiple industries modernize their operations and achieve their digital transformation goals.
              </p>
            </div>
          </div>

          <div className="flex justify-center fade-slide">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full max-w-sm md:max-w-md h-auto rounded-2xl shadow-2xl card-hover transition-transform duration-300"
              />
              <div className="absolute -top-3 md:-top-4 -right-3 md:-right-4 w-16 md:w-24 h-16 md:h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                <Target className="h-8 md:h-12 w-8 md:w-12 text-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="scale-in">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#0f0f23] to-slate-700 bg-clip-text text-transparent">
            Our Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`${value.bgColor} rounded-2xl p-6 md:p-8 text-center shadow-lg card-hover transition-all duration-300 border border-slate-100/50 relative overflow-hidden value-card`}
              >
                <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-gradient-to-l from-white/20 to-transparent rounded-full transform translate-x-12 md:translate-x-16 -translate-y-12 md:-translate-y-16"></div>
                <div className={`inline-flex p-3 md:p-4 rounded-2xl bg-gradient-to-r ${value.gradient} text-white mb-4 md:mb-6 shadow-lg icon-hover`}>
                  <value.icon className="w-6 md:w-8 h-6 md:h-8 text-white" />
                </div>
                <h4 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-[#0f0f23]">{value.title}</h4>
                <p className="text-base text-slate-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;