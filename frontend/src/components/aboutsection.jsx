import React from 'react';


const AboutSection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[#0f172a] to-[#1e293b] overflow-hidden">
      {/* Decorative floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-400/10 rounded-full filter blur-[100px] animate-float1"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 rounded-full filter blur-[100px] animate-float2"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-400/10 rounded-full border border-cyan-400/20">
              <span className="h-2 w-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-cyan-400">WHO WE ARE</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Syscare IT Solutions</span> - 
              Your Trusted Digital Defense Partner
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Founded in 2015, CyberShield has grown from a small security startup to a global leader in cybersecurity solutions. Our mission is to protect businesses of all sizes from evolving digital threats with innovative, reliable security solutions.
            </p>
            
            {/* Interactive timeline */}
            <div className="relative pl-8 mt-8 border-l-2 border-cyan-400/30">
              <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-400 rounded-full -translate-x-1/2"></div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Our Journey</h3>
              
              <div className="space-y-6">
                <div className="relative group">
                  <div className="absolute -left-10 top-1 w-3 h-3 bg-purple-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <h4 className="text-lg font-semibold text-white">2015 - Founded</h4>
                  <p className="text-gray-400">Started with 5 team members focused on endpoint security</p>
                </div>
                
                <div className="relative group">
                  <div className="absolute -left-10 top-1 w-3 h-3 bg-pink-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <h4 className="text-lg font-semibold text-white">2018 - First Major Client</h4>
                  <p className="text-gray-400">Secured Fortune 500 company, expanded to 50 employees</p>
                </div>
                
                <div className="relative group">
                  <div className="absolute -left-10 top-1 w-3 h-3 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform"></div>
                  <h4 className="text-lg font-semibold text-white">2021 - Global Expansion</h4>
                  <p className="text-gray-400">Opened offices in 3 continents, serving 1000+ clients</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#" className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-cyan-400/20 transition flex items-center">
                Meet Our Team
                <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
              <a href="#" className="px-6 py-3 bg-transparent rounded-lg font-medium text-white border border-gray-600 hover:border-cyan-400 hover:text-cyan-400 transition flex items-center">
                Our Certifications
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Column - Visuals */}
          <div className="relative">
            {/* Main image with gradient overlay */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-gray-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="CyberShield team working" 
                className="w-full h-full object-cover"
              />
              
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 z-20 grid grid-cols-3 gap-4">
                <div className="bg-[#0f172a]/90 backdrop-blur-sm p-4 rounded-lg border border-gray-800 text-center">
                  <div className="text-3xl font-bold text-cyan-400">200+</div>
                  <div className="text-xs text-gray-400 mt-1">EMPLOYEES</div>
                </div>
                <div className="bg-[#0f172a]/90 backdrop-blur-sm p-4 rounded-lg border border-gray-800 text-center">
                  <div className="text-3xl font-bold text-purple-400">5K+</div>
                  <div className="text-xs text-gray-400 mt-1">CLIENTS</div>
                </div>
                <div className="bg-[#0f172a]/90 backdrop-blur-sm p-4 rounded-lg border border-gray-800 text-center">
                  <div className="text-3xl font-bold text-pink-400">99.9%</div>
                  <div className="text-xs text-gray-400 mt-1">UPTIME</div>
                </div>
              </div>
            </div>
            
            {/* Floating tech elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-cyan-400/10 rounded-full border border-cyan-400/20 backdrop-blur-sm z-0"></div>
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-purple-500/10 rounded-full border border-purple-500/20 backdrop-blur-sm z-0"></div>
            
            {/* Tech stack badges */}
            <div className="absolute -bottom-10 -right-2 flex flex-wrap gap-2">
              {['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'Ansible'].map((tech, index) => (
                <div key={index} className="px-3 py-1 bg-[#1e293b] rounded-full text-xs font-medium text-gray-300 border border-gray-700 hover:border-cyan-400 hover:text-cyan-400 transition">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;