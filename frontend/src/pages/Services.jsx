import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';
import { FaHeadset, FaChevronRight, FaCloud, FaShieldAlt, FaTools, FaRobot, FaGraduationCap, FaLightbulb, FaChartLine, FaGlobe, FaTimes, FaServer, FaDesktop, FaDatabase } from 'react-icons/fa';

// Add CSS animations in a style tag
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-float-delayed {
    animation: float 3s ease-in-out 0.5s infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-slide-in-right {
    animation: slideInRight 0.5s ease-out forwards;
  }
  
  .service-card {
    transition: all 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .stagger-animation > * {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
  .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
  .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }
  .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }
  
  .modal-animation {
    animation: fadeIn 0.3s ease-out;
  }
  
  .modal-content-animation {
    animation: slideInRight 0.4s ease-out 0.1s both;
  }

  /* Center alignment for services */
  .services-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5rem;
    width: 100%;
    max-width: 1200px;
    justify-content: center;
    margin: 0 auto;
  }

  .category-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 2rem;
    width: 100%;
  }

  /* Mobile optimizations */
  @media (max-width: 768px) {
    .mobile-stack {
      flex-direction: column !important;
    }
    
    .mobile-full-width {
      width: 100% !important;
    }
    
    .mobile-text-center {
      text-align: center !important;
    }
    
    .mobile-padding {
      padding: 1rem !important;
    }
    
    .mobile-margin-bottom {
      margin-bottom: 1.5rem !important;
    }

    .services-grid {
      grid-template-columns: 1fr;
      max-width: 400px;
      margin: 0 auto;
    }

    .category-tabs {
      justify-content: center;
      padding: 0 1rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    .services-grid {
      grid-template-columns: repeat(2, 1fr);
      max-width: 800px;
    }
  }

  @media (min-width: 1025px) {
    .services-grid {
      grid-template-columns: repeat(4, 1fr);
      max-width: 1200px;
    }
  }
`;

// Header Component
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full bg-white shadow-md transition-transform duration-300 z-50 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <Navigation />
    </header>
  );
};

// SubServiceModal Component
const SubServiceModal = ({ isOpen, onClose, subService, }) => {
  if (!isOpen || !subService) return null;

  // Special handling for services with detailed lists
  const isPrivateCloud = subService.title === "SysCare Private Cloud";
  const isServiceDesk = subService.title === "Service Desk";
  const isManagedIT = subService.title === "Managed IT Services";
  const isCybersecurityConsultancy = subService.title === "Cybersecurity Consultancy Services";
  const isManagedSecurity = subService.title === "Managed Security Services";
  const isCloudSolutions = subService.title === "Cloud Solutions";
  const isHostedSolutions = subService.title === "Hosted Solutions";
  const isITInfraProjects = subService.title === "IT Infra Projects";
  const isOfficeAutomation = subService.title === "Office IT Automation";
  const isConnectivity = subService.title === "Connectivity";
  const isVoIP = subService.title === "VoIP & Video";
  const isDesignDevelopment = subService.title === "Design & Development";
  const isDigitalMarketing = subService.title === "Multimedia & Digital Marketing";
  const isSmallBusinessCRM = subService.title === "Small Business Solutions";
  const isEnterpriseCRM = subService.title === "Enterprise Solutions";
  const isSecurityTraining = subService.title === "Security Training";
  const isCloudTraining = subService.title === "Cloud Training";
  
  const renderServiceDetails = () => {
    if (isPrivateCloud) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Cloud Solutions:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#103d5d]/10 p-4 rounded-lg border border-[#103d5d]/20 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-[#103d5d] mr-2" />
                <h5 className="font-medium text-[#103d5d]">Cloud Solutions</h5>
              </div>
              <p className="text-sm text-[#103d5d]">Dedicated cloud infrastructure for your organization</p>
            </div>
            <div className="bg-[#103d5d]/10 p-4 rounded-lg border border-[#103d5d]/20 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-[#103d5d] mr-2" />
                <h5 className="font-medium text-[#103d5d]">Hosted Servers</h5>
              </div>
              <p className="text-sm text-[#103d5d]">Fully managed server hosting solutions</p>
            </div>
            <div className="bg-[#103d5d]/10 p-4 rounded-lg border border-[#103d5d]/20 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-[#103d5d] mr-2" />
                <h5 className="font-medium text-[#103d5d]">Dedicated Virtual Servers</h5>
              </div>
              <p className="text-sm text-[#103d5d]">Isolated virtual servers with guaranteed resources</p>
            </div>
            <div className="bg-[#103d5d]/10 p-4 rounded-lg border border-[#103d5d]/20 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaDesktop className="text-[#103d5d] mr-2" />
                <h5 className="font-medium text-[#103d5d]">Virtual Desktops</h5>
              </div>
              <p className="text-sm text-[#103d5d]">Secure remote desktop solutions for your team</p>
            </div>
            <div className="bg-[#103d5d]/10 p-4 rounded-lg border border-[#103d5d]/20 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaDatabase className="text-[#103d5d] mr-2" />
                <h5 className="font-medium text-[#103d5d]">Rack Space Hire</h5>
              </div>
              <p className="text-sm text-[#103d5d]">Colocation services for your hardware</p>
            </div>
            <div className="bg-[#103d5d]/10 p-4 rounded-lg border border-[#103d5d]/20 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-[#103d5d] mr-2" />
                <h5 className="font-medium text-[#103d5d]">Leased Servers</h5>
              </div>
              <p className="text-sm text-[#103d5d]">Flexible server leasing options</p>
            </div>
          </div>
        </div>
      );
    }

    if (isServiceDesk) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Service Desk Features:</h4>
          <div className="grid grid-cols-1 gap-3">
            <div className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
              <h5 className="font-medium text-[#103d5d]">Help Desk Support Ticketing System & Guaranteed SLA Response Time</h5>
            </div>
            <div className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
              <h5 className="font-medium text-[#103d5d]">Remote IT User Support</h5>
              <p className="text-sm text-[#103d5d]">Level 1 to Level 3 Covered</p>
            </div>
            <div className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
              <h5 className="font-medium text-[#103d5d]">On-Site IT Support</h5>
              <p className="text-sm text-[#103d5d]">Level 1 to Level 3 Covered (Per Hr, Min 2 Hrs/Visit, No Call Out/Travel Charges within 30km of CBD)</p>
            </div>
          </div>
        </div>
      );
    }

    if (isManagedIT) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Managed IT Services Include:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Managed Servers", "Managed Endpoints (AV/Malware/DNS/EDR/XDR)", 
              "Mobile Device Management (MDM)", "IT Asset Management", 
              "Domain & DNS Management", "Windows OS Patch Management",
              "Application Patch Management", "Vulnerability Management",
              "MS 365 Portal Management", "AD/Azure/Entra ID Management",
              "M365 Security & Compliance Management", "Managed WIFI",
              "Managed Firewall", "Managed VPN Access", "Managed DR & BCP",
              "SW Licence Management", "HW Procurement", "IT Consultancy Services",
              "Centralised E-Mail Signature Management", "Managed E-Mail Archival",
              "Endpoint Monitoring & Management", "Device encryption management",
              "Managed Spam protection"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isCybersecurityConsultancy) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Cybersecurity Consultancy Services:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Cloud Security Posture Assessment", "Vulnerability Scanning & Penetration Testing (VAPT)",
              "Security Analytics & Reporting (MS365, Azure)", "Security Policy & Procedure Development",
              "Security Audit & Compliance", "Cyber Incident Response & Emergency Support",
              "End User Security Assessment", "Consultancy Services"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isManagedSecurity) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Managed Security Services Include:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Centralized Event Log Management, Monitoring & Response", "Email Security & Protection",
              "Endpoint Security & Protection", "Firewall Management & Monitoring (IDS/IPS)",
              "Managed Cloud Security", "Identity & Access Management (IAM)",
              "Network Security Monitoring", "Vulnerability Management (Includes Scanning & Remediation)",
              "Security Awareness Training & Assessment", "Threat Simulation",
              "Security Monitoring and Incident Management (SIEM)", "Managed 24/7 SOC",
              "Managed 24/7 NOC"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isCloudSolutions) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Cloud Solutions Include:</h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Hosted Servers (Virtual Machines)", "Virtual Desktops (VDI) & RDS",
              "Dedicated Virtual Servers", "Rack Space Hire (Co-location)",
              "Leased Dedicated Physical Servers"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isHostedSolutions) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Hosted Solutions Include:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Hosted Exchange/E-Mail", "Adv Spam Filtering", "E-Mail Backup (M365 Backup)",
              "E-Mail Archival (M365 Backup)", "SharePoint Backup (M365 Backup)",
              "One Drive Backup (M365 Backup)", "MS Teams Backup (M365 Backup)", "Cloud Backup"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isITInfraProjects) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">IT Infrastructure Projects:</h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "IT Network Infrastructure Design & Implementation", 
              "Office 365 (Exchange, OneDrive, SharePoint) Migration",
              "Microsoft Azure Setup/Migration", 
              "AWS Cloud Setup/Migration"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isOfficeAutomation) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Office IT Automation Services:</h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "SharePoint Workflows", "PowerApps & PowerBI", "Power Automation",
              "AI Transformation", "Copilot / Copilot Studio"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isConnectivity) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Connectivity Services:</h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Business Internet", "Private WAN/MPLS", "SDWAN", "VPN & Remote Access"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isVoIP) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">VoIP & Video Services:</h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "Cloud Hosted PABX (VOIP)", "MS Teams Calling (VOIP)", "Video Conferencing",
              "VoIP (Hosted PBX) & Teams Calling", "UC XPRESS", "UC UCXEL"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isDesignDevelopment) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h4 className="font-semibold text-[#103d5d] mb-2">Design & Development Services:</h4>
              {[
                "Website Design", "UI/UX Design", "Website Development", "Website Security",
                "E-commerce Development", "SEO-Friendly Website Development", "Website Redesign",
                "Analytics Integration", "Mobile App Development", "Domain and Hosting Services",
                "Custom Web Solutions"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h4 className="font-semibold text-[#103d5d] mb-2">SEO Services:</h4>
              {[
                "Keyword Research and Strategy", "Local SEO", "Content Creation and Optimization",
                "SEO Reporting and Analytics", "On-Page Optimization", "E-commerce SEO",
                "Technical SEO", "SEO for Mobile", "SEO for Video Content", "SEO Audit and Analysis",
                "Link Building & Outreach", "Conversion Rate Optimization (CRO)",
                "Schema Markup & Structured Data Implementation"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (isDigitalMarketing) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">MultiMedia Services:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">Graphic Design:</h5>
              {[
                "Logo Design", "Business Cards & Stationery", "Social Media Graphics",
                "Flyers, Posters & Brochures", "Presentations & Infographics", "Web Graphics",
                "Digital Branding", "Product Mockups"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">Video Editing:</h5>
              {[
                "Video Editing", "YouTube Video Editing",
                "Social Media Shorts", "Intro & Outro Creation", "Corporate Videos", "Documentary Edits",
                "Product Promo Videos", "Subtitles & Captions", "Interview Editing",
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Digital Marketing Services:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <h5 className="font-semibold text-[#103d5d] mb-2">Digital Marketing:</h5>
                {[
                  "Paid Social Media Campaigns ","Meta Ads","Prospecting & Retargeting Ads","Shopping Ads","Awareness Campaigns","Keyword Research for Social Media",
                ].map((service, index) => (
                  <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                    <p className="text-xs text-[#103d5d]">{service}</p>
                  </div>
                ))}
              </div>
              <div>
                <h5 className="font-semibold text-[#103d5d] mb-2">Social Media Management:</h5>
                {[
                  "Account Setup & Profile Optimization", "Content Creation & Optimization for Social Media",
                  "Content Scheduling", "Research & Trend Analysis", "Analytics & Reporting", "Paid Campaigns",
                  "Visual Branding"
                ].map((service, index) => (
                  <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                    <p className="text-xs text-[#103d5d]">{service}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (isSmallBusinessCRM) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Small Business CRM/ERP Solutions:</h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "SAP Business One", "Microsoft Business Central", "ZOHO CRM/ERP"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isEnterpriseCRM) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Enterprise CRM/ERP Solutions:</h4>
          <div className="grid grid-cols-1 gap-3">
            {[
              "SAP S/4HANA", "Microsoft Dynamics 365"
            ].map((service, index) => (
              <div key={index} className="bg-[#103d5d]/10 p-3 rounded-lg border border-[#103d5d]/20">
                <p className="text-sm text-[#103d5d] font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isSecurityTraining) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Security Training Programs:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">Microsoft Security Training:</h5>
              {[
                "Microsoft Security Operations Analyst (SC-200)",
                "Microsoft Information Protection Administrator (SC-400)",
                "Microsoft Identity and Access Administrator (SC-300)",
                "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">EC-Council Security Training:</h5>
              {[
                "Certified Secure Computer User (C|SCU v.3)",
                "Certified Ethical Hacker (C|EH v.13)",
                "Certified Network Defender (C|ND v.2)",
                "Computer Hacking Forensic Investigator (C|HFI v.10)",
                "EC-Council Certified Incident Handler (E|CIH)",
                "Certified Cybersecurity Technician (C|CT)",
                "Certified Cloud Security Engineer (C|CSE)",
                "Web Application Hacking & Security"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (isCloudTraining) {
      return (
        <div className="mt-2 bg-[#103d5d]/5 p-4 rounded-lg border border-[#103d5d]/20">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Cloud Training Programs:</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">Microsoft Azure:</h5>
              {[
                "Microsoft Azure Fundamentals (AZ-900)",
                "Microsoft Azure Administrator (AZ-104)",
                "Azure Solutions Architect Expert (AZ-305)",
                "Microsoft Azure Security Technologies (AZ-500)"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">AWS:</h5>
              {[
                "AWS Certified Cloud Practitioner (CLF-C02)"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">Google Cloud:</h5>
              {[
                "Cloud Digital Leader"
              ].map((service, index) => (
                <div key={index} className="bg-[#103d5d]/10 p-2 rounded-lg border border-[#103d5d]/20 mb-2">
                  <p className="text-xs text-[#103d5d]">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 modal-animation">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content-animation">
        <div className="flex justify-between items-center p-6 border-b bg-[#103d5d]">
          <h3 className="text-xl font-bold text-white">{subService.title}</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-[#245684] transition-colors duration-200"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-[#103d5d] mb-4">{subService.description}</p>
          {renderServiceDetails()}
        </div>
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#103d5d]/10 text-[#103d5d] px-4 py-2 rounded mr-3 hover:bg-[#103d5d]/20 transition-colors duration-200"
          >
            Close
          </button>
          <Link
            to="/contact"
            className="bg-[#245684] text-white px-4 py-2 rounded hover:bg-[#103d5d] transition-colors duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

// Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-5">
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#245684] animate-pulse"
          style={{
            width: `${Math.random() * 20 + 5}px`,
            height: `${Math.random() * 20 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

const ServicesPage = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSubService, setSelectedSubService] = useState(null);
  const [selectedMainService, setSelectedMainService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const servicesSectionRef = React.useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle hash URLs on component mount and hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the # symbol
      if (hash) {
        // Map URL hash to category IDs
        const hashToCategoryMap = {
          'infrastructure': 'infrastructure',
          'security': 'security',
          'support': 'support',
          'solutions': 'solutions',
          'training': 'training'
        };
        
        const category = hashToCategoryMap[hash];
        if (category && categories.find(cat => cat.id === category)) {
          handleCategoryChange(category);
        }
      }
    };

    // Handle initial hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Function to handle category change with scroll to center
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    
    // Scroll to center the services section after a short delay to allow re-render
    setTimeout(() => {
      if (servicesSectionRef.current) {
        const element = servicesSectionRef.current;
        const elementRect = element.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({
          top: middle,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const openSubServiceModal = (mainService, subService) => {
    setSelectedMainService(mainService);
    setSelectedSubService(subService);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSubService(null);
    setSelectedMainService(null);
  };

  const services = [
    {
      main: "IT Support",
      icon: <FaTools className="text-3xl text-[#103d5d]" />,
      category: "support",
      subs: [
        {
          title: "Service Desk",
          description: "Dedicated help desk support for all your IT issues and queries with guaranteed SLA response times and comprehensive Level 1-3 support coverage."
        },
        {
          title: "Managed IT Services",
          description: "End-to-end management of your IT infrastructure including servers, endpoints, security, and compliance with 24/7 monitoring and support."
        }
      ]
    },
    {
      main: "IT Security",
      icon: <FaShieldAlt className="text-3xl text-[#103d5d]" />,
      category: "security",
      subs: [
        {
          title: "Cybersecurity Consultancy Services",
          description: "Expert guidance to strengthen your security posture with comprehensive assessments, penetration testing, and security strategy development."
        },
        {
          title: "Managed Security Services",
          description: "Proactive monitoring and management of your security infrastructure with 24/7 SOC/NOC support and comprehensive threat protection."
        }
      ]
    },
    {
      main: "Cloud Solutions",
      icon: <FaCloud className="text-3xl text-[#103d5d]" />,
      category: "infrastructure",
      subs: [
        {
          title: "Cloud Solutions",
          description: "Dedicated private cloud infrastructure tailored to your organization's specific needs with enhanced security and customization options."
        },
        {
          title: "Hosted Solutions",
          description: "Comprehensive hosted services including email, backup, archival, and cloud solutions with 99.9% uptime guarantee."
        }
      ]
    },
    {
      main: "Projects & Automation",
      icon: <FaRobot className="text-3xl text-[#103d5d]" />,
      category: "solutions",
      subs: [
        {
          title: "IT Infra Projects",
          description: "Design and implementation of robust IT infrastructure solutions including network design, cloud migration, and system implementation."
        },
        {
          title: "Office IT Automation",
          description: "Automate routine tasks and workflows using Power Platform, AI transformation, and Copilot solutions to improve efficiency."
        }
      ]
    },
    {
      main: "Internet & VOIP",
      icon: <FaGlobe className="text-3xl text-[#103d5d]" />,
      category: "infrastructure",
      subs: [
        {
          title: "Connectivity",
          description: "High-speed internet and network solutions including business internet, SDWAN, VPN, and private WAN/MPLS for seamless operations."
        },
        {
          title: "VoIP & Video",
          description: "Crystal-clear voice and video communication systems including hosted PBX, Teams calling, and video conferencing solutions."
        }
      ]
    },
    {
      main: "Digital Services",
      icon: <FaLightbulb className="text-3xl text-[#103d5d]" />,
      category: "solutions",
      subs: [
        {
          title: "Design & Development",
          description: "Custom design and development services including website design, UI/UX, e-commerce, mobile apps, and custom web solutions."
        },
        {
          title: "Multimedia & Digital Marketing",
          description: "Comprehensive digital marketing services including SEO, social media management, content creation, and paid advertising campaigns."
        }
      ]
    },
    {
      main: "CRM & ERP Solutions",
      icon: <FaChartLine className="text-3xl text-[#103d5d]" />,
      category: "solutions",
      subs: [
        {
          title: "Small Business Solutions",
          description: "Tailored CRM and ERP solutions for small businesses including SAP Business One, Microsoft Business Central, and ZOHO CRM/ERP."
        },
        {
          title: "Enterprise Solutions",
          description: "Scalable CRM and ERP systems for large organizations including SAP S/4HANA and Microsoft Dynamics 365."
        }
      ]
    },
    {
      main: "IT Training",
      icon: <FaGraduationCap className="text-3xl text-[#103d5d]" />,
      category: "training",
      subs: [
        {
          title: "Security Training",
          description: "Specialized security training programs including Microsoft security certifications and EC-Council cybersecurity courses."
        },
        {
          title: "Cloud Training",
          description: "Comprehensive cloud training on Microsoft Azure, AWS, and Google Cloud platforms with certification preparation."
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'infrastructure', name: 'Infrastructure' },
    { id: 'security', name: 'Security' },
    { id: 'support', name: 'Support' },
    { id: 'solutions', name: 'Solutions' },
    { id: 'training', name: 'Training' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f5f7fa]">
      {/* Add animation styles */}
      <style>{animationStyles}</style>
      
      {/* Use the Header component instead of Navigation */}
      <Header />
      
      {/* SubService Modal */}
      <SubServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        subService={selectedSubService} 
        mainService={selectedMainService}
      />
      
      <div className="pt-20">
        {/* HEADER SECTION */}
        <div className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white pb-24 md:pb-32 pt-16 md:pt-24 lg:pt-32 px-4 sm:px-6 lg:px-8 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 rounded-full border-2 border-white"></div>
            <div className="absolute bottom-20 right-8 md:right-16 w-24 h-24 md:w-48 md:h-48 rounded-full border-2 border-white"></div>
            <div className="absolute top-1/3 right-1/4 w-16 h-16 md:w-32 md:h-32 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-8 md:top-20 md:left-20 animate-float">
            <div className="w-8 h-8 md:w-12 md:h-12 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          <div className="absolute bottom-20 right-8 md:bottom-40 md:right-32 animate-float-delayed">
            <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col lg:flex-row items-center mobile-stack">
              <div className="lg:w-1/2 mb-8 lg:mb-0 mobile-full-width mobile-text-center mobile-padding">
                <h1 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Our <span className="text-[#a3c1e0]">Services</span>
                </h1>
                <p className={`text-sm md:text-md text-[#c9d8eb] mb-6 md:mb-8 max-w-lg mx-auto lg:mx-0 transition-all duration-700 delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Discover our comprehensive range of IT solutions designed to empower your business with cutting-edge technology and expert support.
                </p>
                <div className={`flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start transition-all duration-700 delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <a href="#services" className="bg-white text-[#103d5d] px-5 py-3 md:px-6 md:py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center justify-center">
                    Explore Services <FaChevronRight className="ml-2" />
                  </a>
                  <a href="#contact" className="border-2 border-white text-white px-5 py-3 md:px-6 md:py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d] text-center">
                    Get In Touch
                  </a>
                </div>
              </div>
              
              <div className="lg:w-1/2 flex justify-center mobile-full-width">
                <div className={`relative transition-all duration-700 delay-300 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="absolute -inset-4 md:-inset-6 bg-[#a3c1e0] rounded-2xl rotate-3 opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-2xl max-w-sm md:max-w-md mx-auto">
                    <div className="text-center p-4 md:p-6">
                      <div className="w-16 h-16 md:w-24 md:h-24 mx-auto mb-4 md:mb-6 rounded-full bg-[#103d5d] flex items-center justify-center">
                        <FaCloud className="text-2xl md:text-4xl text-[#a3c1e0]" />
                      </div>
                      <h3 className="text-xl md:text-2xl font-semibold mb-2">Comprehensive Solutions</h3>
                      <p className="text-[#c9d8eb] text-sm md:text-base">From IT support to cloud solutions, we've got your business covered.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION - Centered Layout */}
        <section id="services" ref={servicesSectionRef} className="py-12 md:py-16 bg-white px-4 sm:px-6 lg:px-8 -mt-12 md:-mt-20">
          {/* Particle Background */}
          <ParticleBackground />
          
          <div className="max-w-7xl mx-auto relative z-10 services-container">
            <div className="text-center mb-8 md:mb-12 animate-fade-in w-full">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#000000] mb-4">SysCare Services</h2>
              <div className="w-20 md:w-24 h-1 bg-[#245684] mx-auto mb-4 md:mb-6"></div>
              <p className="text-[#000000] max-w-3xl mx-auto text-sm md:text-md px-4">
                At SysCare, we are committed to delivering exceptional quality in every service we provide. We believe that your satisfaction is the true measure of our success.
              </p>
            </div>

            {/* Category Filter - Centered */}
            <div className="category-tabs stagger-animation">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 md:px-5 md:py-2 rounded-full transition-all duration-300 text-sm md:text-base ${
                    activeCategory === category.id
                      ? 'bg-[#245684] text-white shadow-md transform scale-105'
                      : 'bg-white text-[#245684] border border-[#245684] hover:bg-[#245684] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Services Grid - Centered */}
            <div className="services-grid stagger-animation">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col border border-[#103d5d] hover:shadow-lg"
                >
                  <div className="p-4 md:p-5 flex-grow">
                    <div className="flex items-center mb-3 md:mb-4">
                      <div className="p-2 md:p-3 rounded-lg bg-white mr-3 border border-[#103d5d]">
                        {service.icon}
                      </div>
                      <h3 className="text-base md:text-lg font-bold text-[#103d5d] leading-tight">{service.main}</h3>
                    </div>
                    
                    <div className="border-t border-[#103d5d] pt-3 md:pt-4 mt-2">
                      {service.subs.map((sub, subIndex) => (
                        <div 
                          key={subIndex} 
                          className="mb-3 md:mb-4 last:mb-0 cursor-pointer hover:bg-[#103d5d] hover:bg-opacity-10 p-2 rounded-md transition-colors duration-200"
                          onClick={() => openSubServiceModal(service.main, sub)}
                        >
                          <h4 className="font-semibold text-[#103d5d] text-sm md:text-base">{sub.title}</h4>
                          <p className="text-[#000000] text-xs md:text-sm mt-1 leading-relaxed line-clamp-2">
                            {sub.description}
                          </p>
                          <span className="text-[#245684] text-xs font-medium mt-1 inline-block">
                            Click to learn more
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No services message */}
            {filteredServices.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#103d5d] text-lg">No services found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Rest of the components remain the same */}
        <section className="py-12 md:py-20 bg-gradient-to-br from-[#f8fafc] to-[#e2e8f0] relative overflow-hidden">
          {/* ... existing process section code ... */}
        </section>

        <section id="contact" className="py-12 md:py-16 bg-[#000000] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* ... existing CTA section code ... */}
        </section>

        <Footer/>
      </div>
    </div>
  );
};

export default ServicesPage;