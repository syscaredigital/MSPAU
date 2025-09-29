import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';
import { FaHeadset, FaChevronRight, FaCloud, FaShieldAlt, FaTools, FaRobot, FaGraduationCap, FaLightbulb, FaChartLine, FaGlobe, FaTimes, FaServer, FaDesktop, FaDatabase, FaArrowRight, FaStar, FaPhone, FaEnvelope } from 'react-icons/fa';

// Enhanced CSS animations
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
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
  
  @keyframes ripple {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    100% {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 5px rgba(16, 61, 93, 0.3);
    }
    50% {
      box-shadow: 0 0 20px rgba(16, 61, 93, 0.6);
    }
  }
  
  @keyframes typewriter {
    from { width: 0 }
    to { width: 100% }
  }
  
  @keyframes blinkCursor {
    from, to { border-color: transparent }
    50% { border-color: #103d5d }
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
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
  
  .animate-slide-in-left {
    animation: slideInLeft 0.5s ease-out forwards;
  }
  
  .animate-bounce {
    animation: bounce 2s infinite;
  }
  
  .animate-shimmer {
    animation: shimmer 2s infinite linear;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    background-size: 1000px 100%;
  }
  
  .animate-ripple {
    animation: ripple 1s linear infinite;
  }
  
  .animate-glow {
    animation: glow 2s ease-in-out infinite;
  }
  
  .animate-typewriter {
    animation: typewriter 3.5s steps(40, end), blinkCursor 0.75s step-end infinite;
  }
  
  .animate-rotate {
    animation: rotate 10s linear infinite;
  }
  
  .service-card {
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.5s;
  }
  
  .service-card:hover::before {
    left: 100%;
  }
  
  .service-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 15px 30px -10px rgba(0, 0, 0, 0.15);
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
  
  .hover-lift {
    transition: transform 0.3s ease;
  }
  
  .hover-lift:hover {
    transform: translateY(-5px);
  }
  
  .text-shimmer {
    background: linear-gradient(90deg, #103d5d, #245684, #103d5d);
    background-size: 200% 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shimmer 3s infinite linear;
  }
  
  .gradient-border {
    position: relative;
    background: white;
    border-radius: 10px;
  }
  
  .gradient-border::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, #103d5d, #245684, #103d5d);
    border-radius: 12px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .gradient-border:hover::before {
    opacity: 1;
  }
  
  .parallax-bg {
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
  .magnetic-effect {
    transition: transform 0.3s ease;
    display: inline-block;
  }
  
  .magnetic-effect:hover {
    transform: scale(1.05);
  }
  
  .ripple-button {
    position: relative;
    overflow: hidden;
  }
  
  .ripple-button span.ripple {
    position: absolute;
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
  }
  
  .floating-shapes {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
  }
  
  .floating-shape {
    position: absolute;
    opacity: 0.1;
    animation: float 6s ease-in-out infinite;
  }
  
  .pulse-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #245684;
    animation: pulse 2s infinite;
  }
`;

// Enhanced Particle Background Component
const ParticleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-10">
      {[...Array(25)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#245684] animate-pulse"
          style={{
            width: `${Math.random() * 25 + 5}px`,
            height: `${Math.random() * 25 + 5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${Math.random() * 5 + 5}s`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        ></div>
      ))}
      {[...Array(5)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-[#245684] to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 100 + 50}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            animation: `float ${Math.random() * 10 + 5}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.3 + 0.1,
          }}
        ></div>
      ))}
    </div>
  );
};

// Floating Elements Component
const FloatingElements = () => {
  return (
    <>
      <div className="absolute top-20 left-20 animate-float">
        <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <FaCloud className="text-white text-lg" />
        </div>
      </div>
      <div className="absolute bottom-40 right-32 animate-float-delayed">
        <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <FaShieldAlt className="text-white text-sm" />
        </div>
      </div>
      <div className="absolute top-1/2 left-1/3 animate-float">
        <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center">
          <FaTools className="text-white text-xs" />
        </div>
      </div>
      <div className="absolute top-1/4 right-1/4 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-6 rounded-full bg-white/5 backdrop-blur-sm"></div>
      </div>
      <div className="absolute bottom-1/3 left-1/5 animate-float" style={{ animationDelay: '1.5s' }}>
        <div className="w-14 h-14 rounded-lg bg-white/15 backdrop-blur-sm flex items-center justify-center">
          <FaStar className="text-white text-lg" />
        </div>
      </div>
    </>
  );
};

// Enhanced Header Component
const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`fixed w-full transition-all duration-500 z-50 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    } ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'}`}>
      <Navigation />
    </header>
  );
};

// Ripple Button Component
const RippleButton = ({ children, className, onClick, ...props }) => {
  const [coords, setCoords] = useState({ x: -1, y: -1 });
  const [isRippling, setIsRippling] = useState(false);

  useEffect(() => {
    if (coords.x !== -1 && coords.y !== -1) {
      setIsRippling(true);
      setTimeout(() => setIsRippling(false), 600);
    } else setIsRippling(false);
  }, [coords]);

  useEffect(() => {
    if (!isRippling) setCoords({ x: -1, y: -1 });
  }, [isRippling]);

  return (
    <button
      className={`ripple-button ${className}`}
      onClick={e => {
        const rect = e.target.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
      {...props}
    >
      {isRippling && (
        <span
          className="ripple"
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      )}
      {children}
    </button>
  );
};

// Enhanced SubServiceModal Component
const SubServiceModal = ({ isOpen, onClose, subService, mainService }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) onClose();
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Special handling for services with detailed lists
  const isPrivateCloud = subService?.title === "SysCare Private Cloud";
  const isServiceDesk = subService?.title === "Service Desk";
  const isManagedIT = subService?.title === "Managed IT Services";
  const isCybersecurityConsultancy = subService?.title === "Cybersecurity Consultancy Services";
  const isManagedSecurity = subService?.title === "Managed Security Services";
  const isCloudSolutions = subService?.title === "Cloud Solutions";
  const isHostedSolutions = subService?.title === "Hosted Solutions";
  const isITInfraProjects = subService?.title === "IT Infra Projects";
  const isOfficeAutomation = subService?.title === "Office IT Automation";
  const isConnectivity = subService?.title === "Connectivity";
  const isVoIP = subService?.title === "VoIP & Video";
  const isDesignDevelopment = subService?.title === "Design & Development";
  const isDigitalMarketing = subService?.title === "Multimedia & Digital Marketing";
  const isSmallBusinessCRM = subService?.title === "Small Business Solutions";
  const isEnterpriseCRM = subService?.title === "Enterprise Solutions";
  const isSecurityTraining = subService?.title === "Security Training";
  const isCloudTraining = subService?.title === "Cloud Training";
  
  const renderServiceDetails = () => {
    if (!subService) return null;

    if (isPrivateCloud) {
      return (
        <div className="mt-2">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Our Private Cloud Solutions:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#103d5d]/10 p-4 rounded-lg border border-[#103d5d]/20 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-[#103d5d] mr-2" />
                <h5 className="font-medium text-[#103d5d]">Private Cloud</h5>
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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
        <div className="mt-2">
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

    // Default case for services without special formatting
    return (
      <div className="bg-[#103d5d]/10 p-4 rounded-md">
        <h4 className="font-semibold text-[#103d5d] mb-2">Part of: {mainService}</h4>
        <p className="text-sm text-[#103d5d]">Contact us to learn more about how we can implement this solution for your business.</p>
      </div>
    );
  };

  if (!isOpen || !subService) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 modal-animation">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content-animation shadow-2xl border border-[#103d5d]/20"
      >
        <div className="sticky top-0 bg-white flex justify-between items-center p-6 border-b border-[#103d5d]/20 rounded-t-2xl">
          <h3 className="text-2xl font-bold text-[#103d5d]">{subService.title}</h3>
          <button 
            onClick={onClose}
            className="text-[#103d5d] hover:text-[#245684] transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-[#103d5d]/10"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-[#103d5d] mb-6 text-lg leading-relaxed">{subService.description}</p>
          {renderServiceDetails()}
        </div>
        <div className="sticky bottom-0 bg-white p-6 border-t border-[#103d5d]/20 rounded-b-2xl flex justify-end space-x-4">
          <RippleButton
            onClick={onClose}
            className="bg-[#103d5d]/10 text-[#103d5d] px-6 py-3 rounded-lg font-medium hover:bg-[#103d5d]/20 transition-all duration-300"
          >
            Close
          </RippleButton>
          <RippleButton
            onClick={() => window.location.href = '/contact'}
            className="bg-gradient-to-r from-[#103d5d] to-[#245684] text-white px-6 py-3 rounded-lg font-medium hover:from-[#245684] hover:to-[#103d5d] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center"
          >
            Contact Us <FaArrowRight className="ml-2" />
          </RippleButton>
        </div>
      </div>
    </div>
  );
};

// Enhanced Service Card Component
const ServiceCard = ({ service, onSubServiceClick, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`service-card bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 h-full flex flex-col border border-[#103d5d]/20 gradient-border ${
        isHovered ? 'animate-glow' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="p-6 flex-grow">
        <div className="flex items-center mb-4">
          <div className="p-3 rounded-lg bg-gradient-to-br from-[#103d5d] to-[#245684] mr-4 text-white magnetic-effect">
            {service.icon}
          </div>
          <h3 className="text-xl font-bold text-[#103d5d] leading-tight">{service.main}</h3>
        </div>
        
        <div className="border-t border-[#103d5d]/20 pt-4 mt-2">
          {service.subs.map((sub, subIndex) => (
            <div 
              key={subIndex} 
              className="mb-4 last:mb-0 cursor-pointer hover:bg-gradient-to-r from-[#103d5d]/5 to-[#245684]/5 p-3 rounded-lg transition-all duration-300 group"
              onClick={() => onSubServiceClick(service.main, sub)}
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#103d5d] text-base group-hover:text-[#245684] transition-colors duration-300">
                    {sub.title}
                  </h4>
                  <p className="text-[#000000] text-sm mt-1 leading-relaxed line-clamp-2">
                    {sub.description}
                  </p>
                </div>
                <FaChevronRight className="text-[#245684] mt-1 transform group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <span className="text-[#245684] text-xs font-medium mt-2 inline-block group-hover:underline">
                Learn more
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Enhanced Category Filter
const CategoryFilter = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12 stagger-animation">
      {categories.map((category, index) => (
        <RippleButton
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-3 rounded-full transition-all duration-500 transform hover:scale-110 magnetic-effect ${
            activeCategory === category.id
              ? 'bg-gradient-to-r from-[#103d5d] to-[#245684] text-white shadow-lg'
              : 'bg-white text-[#103d5d] border-2 border-[#103d5d] hover:bg-[#103d5d] hover:text-white'
          }`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          {category.name}
        </RippleButton>
      ))}
    </div>
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-[#103d5d] to-[#245684] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};

// Floating Shapes Background
const FloatingShapes = () => {
  return (
    <div className="floating-shapes">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="floating-shape"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            background: `rgba(${Math.random() * 50 + 16}, ${Math.random() * 50 + 61}, ${Math.random() * 50 + 93}, ${Math.random() * 0.1 + 0.05})`,
            borderRadius: Math.random() > 0.5 ? '50%' : '10%',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 10 + 10}s`,
          }}
        />
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
      icon: <FaTools className="text-3xl text-white" />,
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
      icon: <FaShieldAlt className="text-3xl text-white" />,
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
      icon: <FaCloud className="text-3xl text-white" />,
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
      icon: <FaRobot className="text-3xl text-white" />,
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
      icon: <FaGlobe className="text-3xl text-white" />,
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
      icon: <FaLightbulb className="text-3xl text-white" />,
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
      icon: <FaChartLine className="text-3xl text-white" />,
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
      icon: <FaGraduationCap className="text-3xl text-white" />,
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
    <div className="min-h-screen bg-white overflow-hidden">
      <style>{animationStyles}</style>
      
      <ScrollProgress />
      <Header />
      
      <SubServiceModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        subService={selectedSubService} 
        mainService={selectedMainService}
      />
      
      <div className="pt-20">
        {/* Enhanced Hero Section */}
        <div 
          className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white pb-32 pt-24 md:pt-32 px-4 md:px-8 lg:px-16 overflow-hidden"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        >
          <FloatingElements />
          <FloatingShapes />
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight transition-all duration-1000 ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Our <span className="text-shimmer">Services</span>
                </h1>
                <p className={`text-xl text-white/90 mb-8 max-w-lg transition-all duration-1000 delay-200 ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  Comprehensive IT solutions designed to empower your business with cutting-edge technology and expert support.
                </p>
                <div className={`flex flex-wrap gap-4 transition-all duration-1000 delay-300 ${
                  headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                  <RippleButton 
                    href="#services" 
                    className="magnetic-effect bg-white text-[#103d5d] px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center"
                  >
                    Explore Services <FaChevronRight className="ml-2 animate-bounce" />
                  </RippleButton>
                  <RippleButton 
                    href="#contact" 
                    className="magnetic-effect border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d] hover:scale-105"
                  >
                    Get In Touch
                  </RippleButton>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className={`relative transition-all duration-1000 delay-500 ${
                  headerVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-12'
                }`}>
                  <div className="absolute -inset-6 bg-white/20 rounded-2xl rotate-3 opacity-30 animate-pulse"></div>
                  <div className="absolute -inset-3 bg-white/10 rounded-2xl -rotate-3 opacity-20"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl hover-lift">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center magnetic-effect">
                        <FaHeadset className="text-4xl text-[#103d5d] animate-bounce" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2 text-white">Expert Support</h3>
                      <p className="text-white/90">24/7 technical support and managed services to keep your business running smoothly.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Services Section */}
        <section id="services" className="py-16 bg-white px-4 sm:px-6 lg:px-8 -mt-20 relative overflow-hidden">
          <ParticleBackground />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-4">Our Comprehensive Services</h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto mb-6"></div>
              <p className="text-[#000000] max-w-3xl mx-auto text-lg">
                At SysCare, we are committed to delivering exceptional quality in every service we provide. We believe that your satisfaction is the true measure of our success.
              </p>
            </div>

            <CategoryFilter 
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {filteredServices.map((service, index) => (
                <ServiceCard 
                  key={index}
                  service={service}
                  onSubServiceClick={openSubServiceModal}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Process Section */}
        <section className="py-16 bg-gradient-to-br from-white to-[#103d5d]/5 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#103d5d] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#245684] rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-4">Our Service Journey</h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto mb-6"></div>
              <p className="text-[#000000] max-w-3xl mx-auto text-lg">
                Follow our step-by-step process from consultation to continuous improvement
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#103d5d] to-[#245684] transform md:-translate-x-1/2 animate-pulse-slow"></div>
              
              <div className="space-y-12">
                {[
                  {
                    step: "01",
                    title: "Discovery & Consultation",
                    description: "We conduct in-depth discussions to understand your business objectives, current IT infrastructure, and specific requirements.",
                    icon: "🔍"
                  },
                  {
                    step: "02",
                    title: "Solution Design",
                    description: "Our experts create a customized strategy that aligns with your business goals and budget constraints.",
                    icon: "💡"
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    description: "Seamless deployment of solutions with minimal disruption to your daily operations.",
                    icon: "🚀"
                  },
                  {
                    step: "04",
                    title: "Ongoing Support",
                    description: "24/7 monitoring, maintenance, and proactive support to ensure optimal performance.",
                    icon: "🛡️"
                  },
                  {
                    step: "05",
                    title: "Growth & Optimization",
                    description: "Regular reviews and updates to keep your systems efficient and aligned with evolving needs.",
                    icon: "📊"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex flex-col md:flex-row items-center">
                    <div className="absolute left-4 md:left-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#103d5d] to-[#245684] border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10 flex items-center justify-center magnetic-effect">
                      <span className="text-white font-bold">{item.step}</span>
                    </div>
                    
                    <div className={`ml-16 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:ml-auto'
                    }`}>
                      <div className="bg-white p-6 rounded-2xl shadow-lg border border-[#103d5d]/10 hover:shadow-xl transition-all duration-500 hover-lift">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h3 className="text-xl font-semibold text-[#103d5d]">{item.title}</h3>
                        </div>
                        <p className="text-[#000000]">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section id="contact" className="py-20 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-white rounded-full animate-float"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border-2 border-white rounded-full animate-float-delayed"></div>
            <div className="absolute top-1/2 left-1/2 w-40 h-40 border-2 border-white rounded-full animate-pulse"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">
              Ready to Transform Your <span className="text-shimmer">Business</span>?
            </h2>
            <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <RippleButton 
                onClick={() => window.location.href = '/contact'}
                className="group relative bg-white text-[#103d5d] px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-500 hover:shadow-2xl text-center magnetic-effect"
              >
                <span className="relative z-10 flex items-center justify-center">
                  Contact Us <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#103d5d] to-[#245684] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </RippleButton>
              <RippleButton 
                href="tel:1300697972"
                className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-500 hover:bg-white hover:text-[#103d5d] text-center magnetic-effect"
              >
                <span className="relative z-10 flex items-center justify-center">
                  <FaPhone className="mr-2" /> Call Now
                </span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </RippleButton>
            </div>
            <div className="mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <p className="text-white/80 mb-4">Or send us an email at</p>
              <a href="mailto:info@syscare.com" className="text-white hover:text-white/80 transition-colors duration-300 flex items-center justify-center">
                <FaEnvelope className="mr-2" /> info@syscare.com
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default ServicesPage;