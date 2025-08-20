import React, { useState, useEffect, useRef } from 'react';
import Navigation from '../components/Navigation';
const AboutUs = () => {
  const [animatedStats, setAnimatedStats] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      
      // Existing stats animation logic
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimatedStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax effect
  const parallaxStyle = {
    transform: `translateY(${scrollPosition * 0.5}px)`
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     <Navigation />

      {/* Enhanced Header Section */}
      <header 
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-r from-[#103d5d] to-[#245684] text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-16 h-16 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '0s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-10 h-10 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-12 h-12 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 right-1/3 w-14 h-14 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '3s'}}></div>
          <div className="absolute bottom-1/3 left-1/2 w-8 h-8 rounded-full bg-white opacity-10 animate-float" style={{animationDelay: '4s'}}></div>
          
          {/* Animated gradient circles */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-pulse-slow"></div>
            <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-rotate"></div>
            <div className="absolute bottom-1/4 right-1/3 w-72 h-72 rounded-full bg-[#a3d4ff] mix-blend-screen filter blur-3xl animate-float-slow"></div>
          </div>
          
          {/* Animated grid lines */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-grid-white bg-[length:50px_50px] animate-grid-move"></div>
          </div>
        </div>
        
        {/* Content with parallax effect */}
        <div 
          className="relative max-w-7xl mx-auto text-center"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-block overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-typewriter whitespace-nowrap overflow-hidden border-r-4 border-r-white">
              About <span className="text-[#a3d4ff]">SysCare</span>
            </h1>
          </div>
          
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Pioneering IT solutions with innovation and expertise
            </p>
          </div>
          
          {/* Animated CTA button */}
          <div className="mt-12 animate-bounce-slow">
            <button className="bg-[#a3d4ff] text-[#103d5d] px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto">
              Discover Our Story
              <svg className="w-5 h-5 ml-2 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </button>
          </div>
          
          {/* Scroll indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center mx-auto p-1">
              <div className="w-2 h-2 bg-white rounded-full animate-scroll-indicator"></div>
            </div>
            <p className="text-sm mt-2 opacity-80">Scroll to explore</p>
          </div>
        </div>
      </header>

      {/* About Section with Animated Stats */}
      <section id="stats-section" className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#245684] font-semibold uppercase tracking-wider animate-fadeIn">
              OUR STORY
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mt-2 mb-4 animate-fadeIn">
              Digital Pioneers in IT Solutions
            </h2>
            <div className="w-24 h-1 bg-[#245684] mx-auto animate-grow"></div>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 animate-slideInLeft">
              <div className="bg-[#103d5d] p-1 rounded-lg inline-block mb-6 hover:rotate-6 transition-transform duration-300">
                <div className="bg-white p-3 rounded-md text-[#103d5d] text-3xl">
                  ⌘
                </div>
              </div>
              <h3 className="text-2xl font-bold text-[#170f17] mb-4">Who We Are</h3>
              <p className="text-gray-700 mb-6">
                SysCare IT Solutions is a next-generation managed service provider leveraging cutting-edge technologies to deliver unparalleled IT solutions. Founded in 2012, we've evolved from traditional IT support to becoming digital transformation architects.
              </p>
              
              <div className="space-y-3">
                {["AI-Driven Operations", "Predictive Analytics", "Blockchain Security"].map((item, i) => (
                  <div key={i} className="flex items-start group">
                    <div className="mt-1 mr-3">
                      <div className="w-3 h-3 rounded-full bg-[#245684] group-hover:animate-pulse"></div>
                    </div>
                    <span className="text-gray-700 group-hover:text-[#103d5d] transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 animate-slideInRight">
              {[
                { value: "99.99%", label: "Uptime" },
                { value: "250+", label: "Tech Patents" },
                { value: "1200+", label: "Clients Worldwide" },
                { value: "15+", label: "Years Experience" }
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#245684] hover:shadow-lg transition-shadow">
                  <div className={`text-3xl font-bold text-[#103d5d] mb-2 ${animatedStats ? 'animate-countUp' : ''}`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                  <div className="mt-4 h-1 w-full bg-gray-200 overflow-hidden">
                    <div 
                      className="h-1 bg-[#245684] animate-progress" 
                      style={{ width: '100%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-[#f8fafc] px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white text-sm font-medium rounded-full mb-4 shadow-md">
              OUR CORE PURPOSE
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-6">
              Building <span className="text-[#245684]">Tomorrow's</span> Technology
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#a3d4ff] to-[#245684] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card - Using gradient background */}
            <div className="bg-gradient-to-br from-[#103d5d] to-[#1a3d6b] p-0.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-full bg-white rounded-xl p-8">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#103d5d] to-[#245684] flex items-center justify-center text-white text-2xl shadow-md">
                  👁️
                </div>
                <h3 className="text-2xl font-bold text-[#103d5d] mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-700 mb-6">
                  To create a world where technology boundaries disappear, enabling seamless digital experiences through intelligent IT ecosystems.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Innovation", "Boundless", "Future"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-[#e6f2ff] text-[#103d5d] rounded-full text-sm font-medium hover:bg-[#a3d4ff] transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Mission Card - Using brand accent color */}
            <div className="bg-gradient-to-br from-[#245684] to-[#a3d4ff] p-0.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="h-full bg-white rounded-xl p-8">
                <div className="w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-[#245684] to-[#a3d4ff] flex items-center justify-center text-white text-2xl shadow-md">
                  🎯
                </div>
                <h3 className="text-2xl font-bold text-[#245684] mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-700 mb-6">
                  To architect the future of business technology with cutting-edge solutions while maintaining operational excellence and security.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Excellence", "Security", "Innovation"].map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-[#e6f2ff] text-[#245684] rounded-full text-sm font-medium hover:bg-[#a3d4ff] transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Core Values with Brand Colors */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-[#103d5d] text-center mb-8">
              Our Core Values
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { 
                  icon: "💡", 
                  title: "Innovation", 
                  desc: "Pushing technological boundaries",
                  bg: "bg-[#e6f2ff]",
                  text: "text-[#103d5d]",
                  border: "border-[#103d5d]"
                },
                { 
                  icon: "🛡️", 
                  title: "Integrity", 
                  desc: "Ethical and transparent",
                  bg: "bg-[#d9e8ff]",
                  text: "text-[#1a3d6b]",
                  border: "border-[#1a3d6b]"
                },
                { 
                  icon: "🏆", 
                  title: "Excellence", 
                  desc: "Uncompromising quality",
                  bg: "bg-[#cde0ff]",
                  text: "text-[#245684]",
                  border: "border-[#245684]"
                },
                { 
                  icon: "❤️", 
                  title: "Passion", 
                  desc: "For technology and people",
                  bg: "bg-[#a3d4ff]",
                  text: "text-[#103d5d]",
                  border: "border-[#103d5d]"
                }
              ].map((value, i) => (
                <div 
                  key={i} 
                  className={`p-6 rounded-lg border-2 ${value.border} ${value.bg} hover:shadow-lg transition-all duration-300 group`}
                >
                  <div className={`text-4xl mb-4 ${value.text} group-hover:scale-110 transition-transform`}>
                    {value.icon}
                  </div>
                  <h4 className={`text-xl font-bold ${value.text} mb-2`}>{value.title}</h4>
                  <p className={`${value.text} opacity-90`}>{value.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#245684] font-semibold uppercase tracking-wider animate-fadeIn">
              OUR TEAM
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mt-2 mb-4 animate-fadeIn">
              Meet Our Leadership
            </h2>
            <div className="w-24 h-1 bg-[#245684] mx-auto animate-grow"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto animate-fadeIn">
              The brilliant minds driving innovation at SysCare IT Solutions
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Elena Petrova",
                title: "Quantum Computing Specialist",
                role: "CTO",
                experience: "15+ years",
                skills: ["AI", "ML", "QC"]
              },
              {
                name: "Markus Reinhardt",
                title: "Blockchain Security Expert",
                role: "CSO",
                experience: "12+ years",
                skills: ["Sec", "Crypto", "ZeroTrust"]
              },
              {
                name: "Priya Desai",
                title: "Data Science Lead",
                role: "CDO",
                experience: "10+ years",
                skills: ["BigData", "AI", "BI"]
              }
            ].map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-[#a3d4ff]"
              >
                <div className="relative h-48 bg-gradient-to-r from-[#103d5d] to-[#245684]">
                  <div className="absolute inset-0 flex items-center justify-center text-white text-6xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                    <div className="flex justify-between">
                      <span>{member.role}</span>
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold text-[#170f17]">{member.name}</h4>
                  <p className="text-gray-600 mb-4">{member.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-[#245684] hover:text-white transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#000000] text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center mb-4 px-4 py-2 bg-white bg-opacity-10 rounded-full animate-pulse">
              <div className="w-2 h-2 mr-2 rounded-full bg-[#a3d4ff]"></div>
              <span className="text-sm font-medium">READY FOR DIGITAL TRANSFORMATION?</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fadeIn">
              Let's Build Your <span className="bg-gradient-to-r from-[#a3d4ff] to-white bg-clip-text text-transparent">Future-Ready</span> Infrastructure
            </h2>
            <p className="text-xl mb-8 opacity-90 animate-fadeIn">
              Our engineers are standing by to assess your current systems and design a customized roadmap for your digital evolution.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fadeIn">
              <button className="bg-white text-[#103d5d] px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition flex items-center justify-center hover:scale-105">
                <span>Request Free Tech Audit</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-[#103d5d] transition flex items-center justify-center hover:scale-105">
                <span>Explore Case Studies</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#103d5d] text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SysCare IT</h3>
            <p className="text-[#a3d4ff]">Transforming businesses through innovative technology solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">Cloud Solutions</a></li>
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">Cybersecurity</a></li>
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">AI & ML</a></li>
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">Data Analytics</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-[#a3d4ff] hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <address className="not-italic text-[#a3d4ff]">
              <p>123 Tech Avenue</p>
              <p>San Francisco, CA 94107</p>
              <p className="mt-2">info@syscareit.com</p>
              <p>+1 (555) 123-4567</p>
            </address>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-[#245684] text-center text-[#a3d4ff]">
          <p>© {new Date().getFullYear()} SysCare IT Solutions. All rights reserved.</p>
        </div>
      </footer>
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-30px) scale(1.05); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes slide-in-up {
          from { 
            transform: translateY(50px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-10px);}
          60% {transform: translateY(-5px);}
        }
        
        @keyframes bounce-horizontal {
          0%, 20%, 50%, 80%, 100% {transform: translateX(0);}
          40% {transform: translateX(5px);}
          60% {transform: translateX(3px);}
        }
        
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(20px); opacity: 0; }
        }
        
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes grow {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes countUp {
          from { 
            opacity: 0;
            transform: translateY(20px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0;
            transform: translateX(-50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0;
            transform: translateX(50px);
          }
          to { 
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .bg-grid-white {
          background-image: linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px);
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 15s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
        
        .animate-typewriter {
          animation: typewriter 2s steps(40, end) forwards;
          white-space: nowrap;
          overflow: hidden;
        }
        
        .animate-slide-in-up {
          animation: slide-in-up 1.5s ease-out forwards;
          animation-delay: 0.5s;
          opacity: 0;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .animate-bounce-horizontal {
          animation: bounce-horizontal 2s infinite;
        }
        
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        
        .animate-grow {
          animation: grow 1s ease-out forwards;
        }
        
        .animate-countUp {
          animation: countUp 2s ease-out forwards;
        }
        
        .animate-progress {
          animation: progress 2s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;