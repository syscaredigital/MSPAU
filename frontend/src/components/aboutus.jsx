import React from 'react';
import '../Style/AboutUs.css';

const AboutUs = () => {
  return (
    <div className="digital-about">
      {/* Digital Hero Section */}
      <div className="digital-hero">
        <div className="hero-grid">
          <div className="hero-content">
            <h1>
              <span className="gradient-text">SysCare</span>
              <span className="text-outline">IT Solutions</span>
            </h1>
            <p className="hero-subtitle">Digital Transformation Partners</p>
            <div className="tech-tags">
              <span>Cloud</span>
              <span>Cybersecurity</span>
              <span>AI</span>
              <span>IoT</span>
              <span>Blockchain</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="digital-circle"></div>
            <div className="circuit-lines"></div>
          </div>
        </div>
      </div>

      {/* Digital About Section */}
      <section className="digital-section digital-about">
        <div className="container">
          <div className="section-header">
            <h2><span className="section-number">01</span>Digital Pioneers</h2>
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
            <h2><span className="section-number">02</span>Digital Core</h2>
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
            <h2><span className="section-number">03</span>Digital Minds</h2>
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
            <h2><span className="section-number">04</span>Digital Arsenal</h2>
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

      {/* Digital CTA */}
      <div className="digital-cta">
        <div className="cta-grid">
          <div className="cta-content">
            <h3>Ready for Digital Transformation?</h3>
            <p>Let's architect your future together</p>
          </div>
          <div className="cta-buttons">
            <button className="btn-primary">Schedule Tech Audit</button>
            <button className="btn-secondary">Explore Solutions</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;