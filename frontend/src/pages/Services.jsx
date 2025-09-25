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
const SubServiceModal = ({ isOpen, onClose, subService, mainService }) => {
  if (!isOpen) return null;

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
  const isDigitalMarketing = subService.title === "Digital Marketing";
  const isSmallBusinessCRM = subService.title === "Small Business Solutions";
  const isEnterpriseCRM = subService.title === "Enterprise Solutions";
  const isSecurityTraining = subService.title === "Security Training";
  const isCloudTraining = subService.title === "Cloud Training";
  
  const renderServiceDetails = () => {
    if (isPrivateCloud) {
      return (
        <div className="mt-2">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Our Private Cloud Solutions:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-blue-600 mr-2" />
                <h5 className="font-medium text-blue-800">Private Cloud</h5>
              </div>
              <p className="text-sm text-blue-700">Dedicated cloud infrastructure for your organization</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-blue-600 mr-2" />
                <h5 className="font-medium text-blue-800">Hosted Servers</h5>
              </div>
              <p className="text-sm text-blue-700">Fully managed server hosting solutions</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-blue-600 mr-2" />
                <h5 className="font-medium text-blue-800">Dedicated Virtual Servers</h5>
              </div>
              <p className="text-sm text-blue-700">Isolated virtual servers with guaranteed resources</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaDesktop className="text-blue-600 mr-2" />
                <h5 className="font-medium text-blue-800">Virtual Desktops</h5>
              </div>
              <p className="text-sm text-blue-700">Secure remote desktop solutions for your team</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaDatabase className="text-blue-600 mr-2" />
                <h5 className="font-medium text-blue-800">Rack Space Hire</h5>
              </div>
              <p className="text-sm text-blue-700">Colocation services for your hardware</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 transition-transform duration-200 hover:scale-[1.02]">
              <div className="flex items-center mb-2">
                <FaServer className="text-blue-600 mr-2" />
                <h5 className="font-medium text-blue-800">Leased Servers</h5>
              </div>
              <p className="text-sm text-blue-700">Flexible server leasing options</p>
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
            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
              <h5 className="font-medium text-green-800">Help Desk Support Ticketing System</h5>
              <p className="text-sm text-green-700">Guaranteed SLA Response Time</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
              <h5 className="font-medium text-green-800">Remote IT User Support</h5>
              <p className="text-sm text-green-700">Level 1 to Level 3 Covered</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg border border-green-100">
              <h5 className="font-medium text-green-800">On-Site IT Support</h5>
              <p className="text-sm text-green-700">Level 1 to Level 3 Covered (Per Hr, Min 2 Hrs/Visit, No Call Out/Travel Charges within 30km of CBD)</p>
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
              <div key={index} className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">{service}</p>
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
              <div key={index} className="bg-red-50 p-3 rounded-lg border border-red-100">
                <p className="text-sm text-red-700 font-medium">{service}</p>
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
              <div key={index} className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                <p className="text-sm text-purple-700 font-medium">{service}</p>
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
              <div key={index} className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">{service}</p>
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
              <div key={index} className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                <p className="text-sm text-teal-700 font-medium">{service}</p>
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
              <div key={index} className="bg-purple-50 p-3 rounded-lg border border-purple-100">
                <p className="text-sm text-purple-700 font-medium">{service}</p>
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
              <div key={index} className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                <p className="text-sm text-indigo-700 font-medium">{service}</p>
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
              <div key={index} className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <p className="text-sm text-blue-700 font-medium">{service}</p>
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
              <div key={index} className="bg-green-50 p-3 rounded-lg border border-green-100">
                <p className="text-sm text-green-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isDesignDevelopment) {
      return (
        <div className="mt-2">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Design & Development Services:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              "Website Design", "UI/UX Design", "Website Development", "Website Security",
              "E-commerce Development", "SEO-Friendly Website Development", "Website Redesign",
              "Analytics Integration", "Mobile App Development", "Domain and Hosting Services",
              "Custom Web Solutions"
            ].map((service, index) => (
              <div key={index} className="bg-orange-50 p-3 rounded-lg border border-orange-100">
                <p className="text-sm text-orange-700 font-medium">{service}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }

    if (isDigitalMarketing) {
      return (
        <div className="mt-2">
          <h4 className="font-semibold text-[#103d5d] mb-4 text-lg">Digital Marketing Services:</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">SEO Services:</h5>
              {[
                "Keyword Research and Strategy", "Local SEO", "Content Creation and Optimization",
                "SEO Reporting and Analytics", "On-Page Optimization", "E-commerce SEO",
                "Technical SEO", "SEO for Mobile", "SEO for Video Content", "SEO Audit and Analysis",
                "Link Building & Outreach", "Conversion Rate Optimization (CRO)",
                "Schema Markup & Structured Data Implementation"
              ].map((service, index) => (
                <div key={index} className="bg-yellow-50 p-2 rounded-lg border border-yellow-100 mb-2">
                  <p className="text-xs text-yellow-700">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">MultiMedia & Digital Marketing:</h5>
              {[
                "Graphic Design", "Logo Design", "Business Cards & Stationery", "Social Media Graphics",
                "Flyers, Posters & Brochures", "Presentations & Infographics", "Web Graphics",
                "Digital Branding", "Product Mockups", "Video Editing", "YouTube Video Editing",
                "Social Media Shorts", "Intro & Outro Creation", "Corporate Videos", "Documentary Edits",
                "Product Promo Videos", "Subtitles & Captions", "Interview Editing", "Digital Marketing",
                "Paid Social Media Campaigns", "Meta Ads", "Prospecting & Retargeting Ads", "Shopping Ads",
                "Awareness Campaigns", "Keyword Research for Social Media", "Social media management",
                "Account Setup & Profile Optimization", "Content Creation & Optimization for Social Media",
                "Content Scheduling", "Research & Trend Analysis", "Analytics & Reporting", "Paid Campaigns",
                "Visual Branding"
              ].map((service, index) => (
                <div key={index} className="bg-pink-50 p-2 rounded-lg border border-pink-100 mb-2">
                  <p className="text-xs text-pink-700">{service}</p>
                </div>
              ))}
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
              <div key={index} className="bg-teal-50 p-3 rounded-lg border border-teal-100">
                <p className="text-sm text-teal-700 font-medium">{service}</p>
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
              <div key={index} className="bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                <p className="text-sm text-indigo-700 font-medium">{service}</p>
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
                <div key={index} className="bg-red-50 p-2 rounded-lg border border-red-100 mb-2">
                  <p className="text-xs text-red-700">{service}</p>
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
                <div key={index} className="bg-purple-50 p-2 rounded-lg border border-purple-100 mb-2">
                  <p className="text-xs text-purple-700">{service}</p>
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
                <div key={index} className="bg-blue-50 p-2 rounded-lg border border-blue-100 mb-2">
                  <p className="text-xs text-blue-700">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">AWS:</h5>
              {[
                "AWS Certified Cloud Practitioner (CLF-C02)"
              ].map((service, index) => (
                <div key={index} className="bg-orange-50 p-2 rounded-lg border border-orange-100 mb-2">
                  <p className="text-xs text-orange-700">{service}</p>
                </div>
              ))}
            </div>
            <div>
              <h5 className="font-semibold text-[#103d5d] mb-2">Google Cloud:</h5>
              {[
                "Cloud Digital Leader"
              ].map((service, index) => (
                <div key={index} className="bg-green-50 p-2 rounded-lg border border-green-100 mb-2">
                  <p className="text-xs text-green-700">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    // Default case for services without special formatting
    return (
      <div className="bg-gray-100 p-4 rounded-md">
        <h4 className="font-semibold text-[#103d5d] mb-2">Part of: {mainService}</h4>
        <p className="text-sm text-gray-600">Contact us to learn more about how we can implement this solution for your business.</p>
      </div>
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 modal-animation">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto modal-content-animation">
        <div className="flex justify-between items-center p-6 border-b">
          <h3 className="text-xl font-bold text-[#103d5d]">{subService.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            <FaTimes className="text-xl" />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-700 mb-4">{subService.description}</p>
          {renderServiceDetails()}
        </div>
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded mr-3 hover:bg-gray-300 transition-colors duration-200"
          >
            Close
          </button>
          <Link
            to="/contact"
            className="bg-[#245684] text-white px-4 py-2 rounded hover:bg-[#1a3d66] transition-colors duration-200"
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

  useEffect(() => {
    // Trigger animations after component mounts
    const timer = setTimeout(() => {
      setHeaderVisible(true);
    }, 100);
    return () => clearTimeout(timer);
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
      icon: <FaTools className="text-3xl text-green-500" />,
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
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
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
      icon: <FaCloud className="text-3xl text-blue-500" />,
      category: "infrastructure",
      subs: [
        {
          title: "SysCare Private Cloud",
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
      icon: <FaRobot className="text-3xl text-purple-500" />,
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
      icon: <FaGlobe className="text-3xl text-indigo-500" />,
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
      icon: <FaLightbulb className="text-3xl text-orange-500" />,
      category: "solutions",
      subs: [
        {
          title: "Design & Development",
          description: "Custom design and development services including website design, UI/UX, e-commerce, mobile apps, and custom web solutions."
        },
        {
          title: "Digital Marketing",
          description: "Comprehensive digital marketing services including SEO, social media management, content creation, and paid advertising campaigns."
        }
      ]
    },
    {
      main: "CRM & ERP Solutions",
      icon: <FaChartLine className="text-3xl text-teal-500" />,
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
      icon: <FaGraduationCap className="text-3xl text-yellow-500" />,
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
    <div className="min-h-screen bg-[#f8fafc]">
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
      
      {/* Add padding to account for fixed header */}
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#103d5d] to-[#245684] text-white pb-32 pt-24 md:pt-32 px-4 md:px-8 lg:px-16 overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}>
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full border-2 border-white"></div>
            <div className="absolute bottom-20 right-16 w-48 h-48 rounded-full border-2 border-white"></div>
            <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full border-2 border-white"></div>
          </div>
          
          {/* Floating elements */}
          <div className="absolute top-20 left-20 animate-float">
            <div className="w-12 h-12 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          <div className="absolute bottom-40 right-32 animate-float-delayed">
            <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          <div className="absolute top-1/2 left-1/3 animate-float">
            <div className="w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0">
                <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in-up ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Our <span className="text-[#a3c1e0]">Services</span>
                </h1>
                <p className={`text-xl text-[#c9d8eb] mb-8 max-w-lg animate-fade-in-up delay-100 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  Comprehensive IT solutions to drive your business forward and transform your IT infrastructure.
                </p>
                <div className={`flex flex-wrap gap-4 animate-fade-in-up delay-200 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <a href="#services" className="bg-white text-[#103d5d] px-6 py-3 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] flex items-center animate-pulse-slow">
                    Explore Services <FaChevronRight className="ml-2" />
                  </a>
                  <a href="#contact" className="border-2 border-white text-white px-6 py-3 rounded-md font-medium transition-all duration-300 hover:bg-white hover:text-[#103d5d]">
                    Contact Us
                  </a>
                </div>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className={`relative animate-fade-in delay-300 ${headerVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
                  <div className="absolute -inset-6 bg-[#a3c1e0] rounded-2xl rotate-3 opacity-30"></div>
                  <div className="relative bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                    <div className="text-center p-6">
                      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#103d5d] flex items-center justify-center animate-pulse-slow">
                        <FaHeadset className="text-4xl text-[#a3c1e0]" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-2">Expert Support</h3>
                      <p className="text-[#c9d8eb]">Our team of experts is ready to help you transform your IT infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section with Particle Background */}
        <section id="services" className="py-16 bg-[#f8fafc] px-4 sm:px-6 lg:px-8 -mt-20 relative overflow-hidden">
          {/* Particle Background */}
          <ParticleBackground />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">SysCare Services</h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto mb-6"></div>
              <p className="text-[#170f17] max-w-3xl mx-auto text-lg">
                At SysCare, we are committed to delivering exceptional quality in every service we provide. We believe that your satisfaction is the true measure of our success.
              </p>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12 stagger-animation">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#245684] text-white shadow-md'
                      : 'bg-white text-[#245684] border border-[#245684] hover:bg-[#245684] hover:text-white'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            {/* Services Grid - Updated to 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {filteredServices.map((service, index) => (
                <div 
                  key={index}
                  className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 h-full flex flex-col"
                >
                  <div className="p-5 flex-grow">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-blue-50 mr-3">
                        {service.icon}
                      </div>
                      <h3 className="text-lg font-bold text-[#103d5d] leading-tight">{service.main}</h3>
                    </div>
                    
                    <div className="border-t border-gray-100 pt-4 mt-2">
                      {service.subs.map((sub, subIndex) => (
                        <div 
                          key={subIndex} 
                          className="mb-4 last:mb-0 cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors duration-200"
                          onClick={() => openSubServiceModal(service.main, sub)}
                        >
                          <h4 className="font-semibold text-[#103d5d] text-base">{sub.title}</h4>
                          <p className="text-[#170f17] text-sm mt-1 leading-relaxed line-clamp-2">
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
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4">Our Service Process</h2>
              <div className="w-24 h-1 bg-[#245684] mx-auto mb-6"></div>
              <p className="text-[#170f17] max-w-3xl mx-auto text-lg">
                We follow a structured approach to ensure we deliver the best solutions for your business needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 stagger-animation">
              <div className="text-center p-6 service-card">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">1</div>
                <h3 className="text-xl font-semibold mb-2">Consultation & Assessment</h3>
                <p className="text-gray-600">We begin with a detailed consultation to understand your business goals, IT environment, and security needs.</p>
              </div>
              <div className="text-center p-6 service-card">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">2</div>
                <h3 className="text-xl font-semibold mb-2">Tailored Strategy Design</h3>
                <p className="text-gray-600">Our experts create a customised managed IT and security plan that aligns with your business objectives.</p>
              </div>
              <div className="text-center p-6 service-card">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">3</div>
                <h3 className="text-xl font-semibold mb-2">Seamless Implementation</h3>
                <p className="text-gray-600">We deploy, configure, and optimise solutions with minimal disruption to your daily operations.</p>
              </div>
              <div className="text-center p-6 service-card">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">4</div>
                <h3 className="text-xl font-semibold mb-2">24/7 Monitoring & Support</h3>
                <p className="text-gray-600"> Our Melbourne and Sydney support teams provide round-the-clock monitoring, IT helpdesk, and fast issue resolution.</p>
              </div>
              <div className="text-center p-6 service-card">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">5</div>
                <h3 className="text-xl font-semibold mb-2">Continuous Improvement</h3>
                <p className="text-gray-600"> We regularly review performance, update systems, and implement innovations to keep your business secure and efficient.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-16 bg-[#000000] text-white px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-32 h-32 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 border-2 border-white rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8">
              Let's discuss how we can help you achieve your digital goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="group relative bg-white text-[#103d5d] px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:shadow-lg text-center animate-pulse-slow">
                <span className="relative z-10">Contact Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#103d5d] to-[#245684] opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <a href="tel:1300697972" className="group relative bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold overflow-hidden transition-all duration-300 hover:bg-white hover:text-[#103d5d] text-center">
                <span className="relative z-10">Call Now</span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </a>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
    </div>
  );
};

export default ServicesPage;