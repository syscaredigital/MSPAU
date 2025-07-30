import React from 'react';
import '../Style/AboutUs.css';
import Header from '../components/header';
import PageHero from '../components/pageHero';
const AboutUs = () => {
  return (
      
    <div className="digital-about">
      <Header />
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white py-20">
        <div className="container mx-auto text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          {/* <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Empowering your business with cutting-edge technology solutions tailored to your needs.
          </p>
          <button className="bg-white text-[#103d5d] px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition">
            Get Started
          </button> */}
        </div>
      </header>
 
      {/* Digital About Section */}
      <section className="digital-section digital-about">
        <div className="container">
          <div className="section-header">
            <h2><span className="section-number"></span>Digital Pioneers</h2>
            <p className="section-description">Redefining IT management for the digital age</p>
          </div>
          <div className="content-grid">
            <div className="digital-card">
              <div className="card-header">
                <div className="hexagon">
                  <svg viewBox="0 0 100 100" className="hex-shape">
                    <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" />
                  </svg>
                  <div className="hex-icon">⌘</div>
                </div>
                <h3>Who We Are</h3>
              </div>
              <p>
                SysCare IT Solutions is a next-generation managed service provider leveraging cutting-edge technologies to deliver unparalleled IT solutions. Founded in 2012, we've evolved from traditional IT support to becoming digital transformation architects.
              </p>
              <div className="tech-stack">
                <div className="tech-item">
                  <div className="tech-dot"></div>
                  <span>AI-Driven Operations</span>
                </div>
                <div className="tech-item">
                  <div className="tech-dot"></div>
                  <span>Predictive Analytics</span>
                </div>
                <div className="tech-item">
                  <div className="tech-dot"></div>
                  <span>Blockchain Security</span>
                </div>
              </div>
            </div>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value" data-value="99.99">0</div>
                <div className="stat-label">Uptime %</div>
                <div className="stat-bar"></div>
              </div>
              <div className="stat-item">
                <div className="stat-value" data-value="250">0</div>
                <div className="stat-label">Tech Patents</div>
                <div className="stat-bar"></div>
              </div>
              <div className="stat-item">
                <div className="stat-value" data-value="1200">0</div>
                <div className="stat-label">Clients Worldwide</div>
                <div className="stat-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Digital Vision Section */}
      <section className="digital-section digital-vision">
        <div className="container">
          <div className="section-header">
            <h2><span className="section-number"></span>Digital Core</h2>
            <p className="section-description">Our technological philosophy</p>
          </div>
          <div className="vision-cards">
            <div className="v-card">
              <div className="v-card-inner">
                <h3>Vision</h3>
                <p>
                  To create a world where technology boundaries disappear, enabling seamless digital experiences through intelligent, self-healing IT ecosystems.
                </p>
                <div className="v-card-bg"></div>
              </div>
            </div>
            <div className="v-card">
              <div className="v-card-inner">
                <h3>Mission</h3>
                <p>
                  To architect the future of business technology by implementing quantum-ready solutions today while maintaining bulletproof operational integrity.
                </p>
                <div className="v-card-bg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Digital Team Section */}
      <section className="digital-section digital-team">
        <div className="container">
          <div className="section-header">
            <h2><span className="section-number"></span>Digital Minds</h2>
            <p className="section-description">The architects of your digital future</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-bg"></div>
                <div className="avatar-overlay">
                  <span>CTO</span>
                  <span>15+ years</span>
                </div>
              </div>
              <h4>Dr. Elena Petrova</h4>
              <p>Quantum Computing Specialist</p>
              <div className="member-tech">
                <span>AI</span>
                <span>ML</span>
                <span>QC</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-bg"></div>
                <div className="avatar-overlay">
                  <span>CSO</span>
                  <span>12+ years</span>
                </div>
              </div>
              <h4>Markus Reinhardt</h4>
              <p>Blockchain Security Expert</p>
              <div className="member-tech">
                <span>Sec</span>
                <span>Crypto</span>
                <span>ZeroTrust</span>
              </div>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <div className="avatar-bg"></div>
                <div className="avatar-overlay">
                  <span>CDO</span>
                  <span>10+ years</span>
                </div>
              </div>
              <h4>Priya Desai</h4>
              <p>Data Science Lead</p>
              <div className="member-tech">
                <span>BigData</span>
                <span>AI</span>
                <span>BI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Digital Services Section */}
      <section className="digital-section digital-services">
        <div className="container">
          <div className="section-header">
            <h2><span className="section-number"></span>Digital Arsenal</h2>
            <p className="section-description">Next-generation managed services</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-bg"></div>
                <span>⎔</span>
              </div>
              <h3>Quantum-Ready Cloud</h3>
              <p>
                Future-proof cloud infrastructure designed for post-quantum cryptography and AI workloads.
              </p>
              <div className="service-tech">
                <span>Q-Encryption</span>
                <span>AI-Ops</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-bg"></div>
                <span>⏣</span>
              </div>
              <h3>Neural Security</h3>
              <p>
                AI-driven threat detection and autonomous response systems with behavioral analytics.
              </p>
              <div className="service-tech">
                <span>AI</span>
                <span>ML</span>
              </div>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <div className="icon-bg"></div>
                <span>⌬</span>
              </div>
              <h3>Data Fabric</h3>
              <p>
                Unified data management across hybrid environments with real-time analytics.
              </p>
              <div className="service-tech">
                <span>Blockchain</span>
                <span>BI</span>
              </div>
            </div>
          </div>
        </div>
      </section>
 
      {/* Digital CTA Section */}
<section className="digital-cta-section">
  <div className="cta-container">
    <div className="cta-content">
      <div className="cta-tech-label">
        <span className="tech-pulse"></span>
        <span>READY FOR DIGITAL TRANSFORMATION?</span>
      </div>
      <h3>Let's Build Your <span className="gradient-text">Future-Ready</span> Infrastructure</h3>
      <p className="cta-description">
        Our engineers are standing by to assess your current systems and design a
        customized roadmap for your digital evolution.
      </p>
    </div>
    <div className="cta-actions">
      <button className="cta-button cta-primary">
        <span className="button-text">Request Free Tech Audit</span>
        <span className="button-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
      <button className="cta-button cta-secondary">
        <span className="button-text">Explore Case Studies</span>
        <span className="button-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3V5M15 3V5M9 19V21M15 19V21M5 9H3M5 15H3M21 9H19M21 15H19M7 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H7C5.89543 5 5 5.89543 5 7V17C5 18.1046 5.89543 19 7 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </button>
    </div>
    <div className="cta-tech-grid">
      <div className="tech-grid-item"></div>
      <div className="tech-grid-item"></div>
      <div className="tech-grid-item"></div>
      <div className="tech-grid-item"></div>
      <div className="tech-grid-item"></div>
      <div className="tech-grid-item"></div>
    </div>
  </div>
</section>
    </div>
  );
};
 
export default AboutUs;
