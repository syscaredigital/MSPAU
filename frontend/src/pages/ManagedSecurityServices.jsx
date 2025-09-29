import React, { useState, useEffect, useRef } from 'react';

import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight, FiMonitor, FiSmartphone, FiBox, FiGlobe, FiRefreshCw, FiCheckSquare, FiLock, FiBarChart2, FiShoppingCart, FiMessageCircle, FiArchive, FiEye, FiKey } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "1. What are Managed Security Services (MSS)?",
    answer: (
      <>
          Managed Security Services are outsourced solutions where a provider like SysCare IT Solutions monitors, manages, and protects your IT infrastructure from cyber threats. This includes firewalls, endpoints, cloud systems, networks, and more.
      </>
    ),
  },
  {
    question: "2. Why should my business in Melbourne or Sydney consider Managed Security Services?",
    answer: (
      <>
        Cyberattacks are increasing in frequency and complexity. Businesses in Melbourne and Sydney rely on MSS providers like SysCare to ensure 24/7 monitoring, compliance, and protection without the cost of building an in-house security team.
      </>
    ),
  },
  {
    question: "3. What does a Managed Security Services Provider (MSSP) do?",
    answer: (
      <>
         An MSSP delivers proactive security monitoring, vulnerability management, incident response, and compliance support. At SysCare, we act as your extended security team, detecting and responding to threats before they cause harm.
      </>
    ),
  },
  {
    question: "4. How do Managed Security Services differ from in-house IT security?",
    answer: (
      <>
          In-house IT teams often lack the resources for continuous monitoring. SysCare’s managed security services provide 24/7 SOC and NOC operations, advanced threat intelligence, and specialized expertise at a fraction of the cost.
      </>
    ),
  },
  {
    question: "5. Do you offer 24/7 monitoring?",
    answer: (
      <>
          Yes. SysCare operates a fully managed 24/7 Security Operations Centre (SOC) and Network Operations Centre (NOC) to ensure your business is always protected, day and night.
      </>
    ),
  },
  {
    question: "6. How does SysCare handle firewall management and monitoring?",
    answer: (
      <>
         We configure, monitor, and maintain enterprise firewalls with IDS/IPS features. This ensures your network perimeter is secured, malicious traffic is blocked, and security rules are always up to date.
      </>
    ),
  },
];

const ManagedITServicesPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const services = [
    {
      title: "Centralized Event Log Management, Monitoring & Response",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions excels in providing Centralized Event Log Management, Monitoring, and Response services, ensuring a robust and secure IT environment for our clients. Our comprehensive solution involves meticulous log monitoring, swift detection of potential issues, and proactive responses to mitigate risks promptly. With a focus on centralization, we streamline event log management, offering real-time insights into system activities. Count on SysCare for a proactive approach to security, efficient monitoring, and timely responses, bolstering the resilience of your IT infrastructure. Elevate your organization's security posture with our expert Centralized Event Log Management services.",
      image: "/images/Event-Log-Management.png"
    },
    {
      title: "Email Security & Protection",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions is safeguarding your digital communication with our Email Security & Protection services. Our comprehensive solutions are designed to fortify your organization's email ecosystem against cyber threats. From advanced threat detection to robust encryption, we prioritize the confidentiality and integrity of your communications. With SysCare's expertise, you can trust that your emails are shielded from phishing attacks, malware, and unauthorized access. Elevate your cybersecurity posture and ensure the resilience of your email infrastructure with our professional Email Security & Protection services. Your business communication, our priority.",
      image: "/images/Email-Security.png"
    },
    {
      title: "Endpoint Security & Protection",
      icon: <FiMonitor className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions ensures robust Endpoint Security & Protection, safeguarding your business with a comprehensive suite of services. Our expert team employs advanced measures to fortify endpoints, mitigating cybersecurity threats and ensuring data integrity. With cutting-edge technologies and proactive monitoring, SysCare guarantees a secure environment for your organization. Trust us to deliver tailored solutions, enhancing your defense against evolving cyber risks. Partner with SysCare for unparalleled Endpoint Security & Protection, where your business continuity is our top priority.",
      image: "/images/Endpoint-Security.png"
    },
    {
      title: "Firewall Management & Monitoring (IDS/IPS)",
      icon: <FiBarChart2 className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions provides Firewall Management & Monitoring (IDS/IPS), providing paramount security solutions for clients. Our dedicated team ensures proactive surveillance of your network, employing cutting-edge Intrusion Detection Systems (IDS) and Intrusion Prevention Systems (IPS). We meticulously manage and monitor firewalls, deploying robust measures to safeguard your digital assets. With SysCare, your organization gains a fortified defense against cyber threats, ensuring uninterrupted operations and peace of mind. Partner with us for expert Firewall Management & Monitoring, reinforcing your cybersecurity posture with state-of-the-art technology and vigilant oversight. Your protection is our priority at SysCare IT Solutions.",
      image: "/images/Firewall-Management.png"
    },
    {
      title: "Managed Cloud Security",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions presents Managed Cloud Security, a pinnacle in safeguarding your digital assets. Our comprehensive suite of services ensures the integrity, confidentiality, and availability of your data in the cloud environment. With proactive monitoring, threat detection, and compliance management, we fortify your cloud infrastructure against cyber threats. Our team of seasoned experts employs cutting-edge technologies to deliver a robust defense mechanism, allowing you to focus on your core business functions without compromise. Elevate your security posture with SysCare's Managed Cloud Security – your trusted partner in navigating the digital landscape securely and confidently.",
      image: "/images/Cloud-Security.png"
    },
    {
      title: "Identity & Access Management (IAM)",
      icon: <FiLock className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions offers Identity & Access Management (IAM), providing a sophisticated suite of services for enhanced security and streamlined access control. Our IAM solutions empower organizations with robust user authentication, seamless access permissions, and comprehensive identity governance. With cutting-edge technologies and meticulous attention to detail, SysCare ensures airtight security measures, regulatory compliance, and user-friendly access protocols. Elevate your organization's security posture with SysCare's IAM expertise—where every access point is fortified, and every identity is meticulously managed for optimal operational efficiency. Trust us to safeguard your digital assets with precision and reliability.",
      image: "/images/IAM.png"
    },
    {
      title: "Network Security Monitoring",
      icon: <FiWifi className="text-[#245684] text-2xl" />,
      content: "Explore peace of mind with SysCare IT Solutions' Network Security Monitoring service. Our expert team employs cutting-edge technology to vigilantly oversee and safeguard your network infrastructure. With real-time threat detection, rapid incident response, and proactive security measures, we ensure the resilience of your network against evolving cyber threats. Trust SysCare for a robust defense, providing you with comprehensive insights and continuous monitoring to fortify your digital assets. Elevate your security posture with our dedicated Network Security Monitoring service, delivering reliability and protection in an ever-evolving digital landscape.",
      image: "/images/Network-Security-Monitoring.png"
    },
    {
      title: "Vulnerability Management",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers comprehensive Vulnerability Management services, encompassing meticulous scanning and efficient remediation strategies. Our expert team employs advanced techniques to identify and address potential vulnerabilities in your systems, ensuring a proactive approach to cybersecurity. With a focus on precision and thoroughness, we safeguard your infrastructure, providing peace of mind in an ever-evolving digital landscape. Trust SysCare for robust Vulnerability Management solutions, fortifying your business against potential threats with cutting-edge technology and strategic remediation measures. Your security is our priority.",
      image: "/images/Vulnerability-Management2.png"
    },
    {
      title: "Security Awareness Training & Assessment",
      icon: <FiMessageCircle className="text-[#245684] text-2xl" />,
      content: "At SysCare IT Solutions, we understand that employees are often the first line of defense and sometimes the weakest link in cybersecurity. That’s why we deliver tailored Security Awareness Training & Assessment programs designed to educate and empower your staff. Our training covers phishing recognition, social engineering tactics, password hygiene, and safe online behavior. We use interactive workshops, real-world simulations, and periodic assessments to reinforce learning and track progress. By turning your employees into a human firewall, SysCare helps reduce risk, improve compliance, and foster a culture of security awareness across your organization.",
      image: "/images/Security-Training.png"
    },
    {
      title: "Threat Simulation",
      icon: <FiCpu className="text-[#245684] text-2xl" />,
      content: " SysCare IT Solutions delivers cutting-edge Threat Simulation services, providing clients with a proactive approach to cybersecurity. Our seasoned experts simulate real-world cyber threats to assess and fortify your organization's defenses. Through sophisticated techniques, we identify vulnerabilities, evaluate response mechanisms, and enhance overall resilience. SysCare's Threat Simulation ensures that your business is well-prepared to face evolving cyber threats, safeguarding critical assets and maintaining operational continuity. Trust us to fortify your cybersecurity posture with strategic simulations, empowering your team to respond effectively to potential threats. Secure your business with SysCare's advanced Threat Simulation services.",
      image: "/images/Threat-Simulation.png"
    },
    {
      title: "Security Monitoring and Incident Management (SIEM)",
      icon: <FiEye className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions excels in Security Monitoring and Incident Management (SIEM), providing a comprehensive suite of services to safeguard your digital assets. Our expert team employs state-of-the-art technology to monitor and detect security threats in real-time. With a proactive approach, we swiftly respond to incidents, minimizing potential damage and ensuring the integrity of your IT environment. Trust SysCare for robust SIEM solutions that fortify your defenses, enhance threat visibility, and guarantee a resilient security posture. Safeguard your business with our cutting-edge Security Monitoring and Incident Management servicesyour shield against evolving cyber threats.",
      image: "/images/SIEM.png"
    },
    {
      title: "Managed 24/7 SOC",
      icon: <FiDatabase className="text-[#245684] text-2xl" />,
      content: " SysCare IT Solutions operates a dedicated 24/7 Security Operations Centre (SOC) to protect your business from evolving cyber threats. Our expert analysts continuously monitor your systems, networks, and endpoints using advanced threat detection tools and AI-driven analytics. When suspicious activity is detected, we respond instantly to contain and mitigate risks before they escalate into major incidents. From malware outbreaks to insider threats, our SOC provides proactive threat hunting, incident response, and compliance reporting. With SysCare managing your security around the clock, you gain peace of mind knowing your digital assets are always protected.",
      image: "/images/SOC.png"
    },
    {
      title: "Managed 24/7 NOC",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "Reliable network performance is the backbone of any modern business. SysCare IT Solutions runs a 24/7 Network Operations Centre (NOC) dedicated to ensuring your systems are always fast, available, and secure. Our NOC team monitors network uptime, bandwidth, latency, and hardware health in real time, identifying and resolving issues before they impact your business. From routine maintenance to advanced troubleshooting, we keep your network optimized for maximum performance. Whether you operate locally or across multiple sites, SysCare’s managed NOC services ensure seamless connectivity, business continuity, and reduced downtime allowing your teams to stay productive without disruption.",
      image: "/images/NOC.png"
    }
  ];

  useEffect(() => {
    // Check if window is defined (to avoid SSR issues)
    if (typeof window !== 'undefined') {
      const checkIsMobile = () => {
        setIsMobile(window.innerWidth < 1024); // lg breakpoint
      };
      
      // Initial check
      checkIsMobile();
      
      // Add event listener
      window.addEventListener('resize', checkIsMobile);
      
      // Clean up
      return () => window.removeEventListener('resize', checkIsMobile);
    }
  }, []);

  useEffect(() => {
    const observers = sectionRefs.map((ref, index) => {
      return new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        },
        { threshold: 0.1 }
      );
    });

    sectionRefs.forEach((ref, index) => {
      if (ref.current) {
        observers[index].observe(ref.current);
      }
    });

    return () => {
      sectionRefs.forEach((ref, index) => {
        if (ref.current) {
          observers[index].unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const content = document.getElementById('service-content');
    if (content) {
      content.style.opacity = '0';
      content.style.transform = 'translateX(20px)';
      setTimeout(() => {
        content.style.opacity = '1';
        content.style.transform = 'translateX(0)';
        content.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
      }, 50);
    }
  }, [activeTab]);

  // Parallax effect for header
  const [parallaxStyle, setParallaxStyle] = useState({});
  
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        setParallaxStyle({
          transform: `translateY(${rate}px)`
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Split FAQs for two columns
  const faqsLeft = FAQS.slice(0, 3);
  const faqsRight = FAQS.slice(3, 6);

  return (
    <div className="min-h-screen bg-white">
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
         
          
        </div>
       
        {/* Content with parallax effect */}
        <div
          className="relative max-w-7xl mx-auto text-center"
          style={parallaxStyle}
        >
          <div className="mb-8 inline-block overflow-hidden">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-typewriter whitespace-nowrap overflow-hidden border-r-4 border-r-white">
              Managed <span className="text-[#a3d4ff]">IT Services</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive IT solutions to drive your business forward
            </p>
          </div>
         
          {/* Animated CTA button */}
          <div className="mt-12 animate-bounce-slow">
            <a href="/syscare-services" className="inline-block">
              <button className="bg-[#a3d4ff] text-[#103d5d] px-8 py-4 rounded-full font-bold hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center mx-auto">
                Explore Our Services
                <svg className="w-5 h-5 ml-2 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
            </a>
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

      {/* Managed IT Focus Section */}
      <section 
        className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        ref={sectionRefs[1]}
      >
        <div className="container mx-auto">
          <div 
            className="flex flex-col lg:flex-row gap-16 items-center"
            style={{
              opacity: isVisible[1] ? 1 : 0,
              transform: isVisible[1] ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 0.8s ease, transform 0.8s ease'
            }}
          >
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">Managed Security with SysCare IT Solutions</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                In today’s digital-first world, businesses face an ever-growing number of cyber threats. From ransomware and phishing to insider risks and cloud vulnerabilities, the challenges are complex and constantly evolving. SysCare IT Solutions, a trusted Managed Security Services Provider in Melbourne and Sydney, delivers proactive, round-the-clock protection to safeguard your business-critical data, infrastructure, and users. Our Managed Security Services (MSS) are tailored to meet the needs of organizations of all sizes, ensuring compliance, resilience, and business continuity.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request IT Assessment
                <FiChevronRight className="inline ml-3 transition-transform duration-300 group-hover:translateX-2" />
              </button>
            </div>
            <div 
              className="lg:w-1/2"
              style={{
                opacity: isVisible[1] ? 1 : 0,
                transform: isVisible[1] ? 'scale(1)' : 'scale(0.95)',
                transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s'
              }}
            >
              <div className="bg-white p-6 rounded-xl border border-[#e1e9f2] shadow-sm hover:shadow-md transition-shadow duration-500">
                <img 
                  
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                  alt="SysCare Managed IT Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview - Vertical Tabs */}
      <section 
        className="py-24 bg-white px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
        ref={sectionRefs[2]}
      >
        <div className="container mx-auto">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center"
            style={{
              opacity: isVisible[2] ? 1 : 0,
              transform: isVisible[2] ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease'
            }}
          >
            Our Managed Security Services
          </h2>
          
          {/* Mobile View - Accordion Style */}
          {isMobile ? (
            <div className="space-y-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="bg-[#f9fbfe] rounded-xl border border-[#e1e9f2] shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                    className={`w-full text-left p-6 transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-[#103d5d] text-white'
                        : 'bg-[#f5f9fd] text-[#103d5d]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                          activeTab === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                        }`}>
                          {React.cloneElement(service.icon, {
                            className: `${activeTab === index ? 'text-white' : 'text-[#245684]'} text-2xl`
                          })}
                        </div>
                        <h3 className="text-xl font-medium">{service.title}</h3>
                      </div>
                      <FiChevronRight 
                        className={`text-xl transition-transform duration-300 ${
                          activeTab === index ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </button>
                  
                  {activeTab === index && (
                    <div className="p-6 border-t border-[#e1e9f2]">
                      <div className="mb-6 bg-white p-4 rounded-lg border border-[#e1e9f2] shadow-sm flex justify-center">
                        <img 
                          src={service.image}
                          alt={`${service.title} infrastructure`}
                          className="w-[500px] h-[500px] object-cover rounded-lg"
                          style={{ maxWidth: '100%', height: 'auto' }}
                        />
                      </div>
                      <p className="text-[#5c6f87] text-lg mb-6 leading-relaxed">{service.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            /* Desktop View - Original Layout */
            <div 
              className="flex flex-col lg:flex-row gap-12"
              style={{
                opacity: isVisible[2] ? 1 : 0,
                transform: isVisible[2] ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s'
              }}
            >
              {/* Vertical Tabs */}
              <div className="lg:w-1/3">
                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-4">
                  {services.map((service, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`w-full text-left p-6 rounded-xl transition-all duration-300 ${
                        activeTab === index
                          ? 'bg-[#103d5d] text-white shadow-lg'
                          : 'bg-[#f5f9fd] text-[#103d5d] hover:bg-[#e1e9f2]'
                      }`}
                      style={{
                        transform: activeTab === index ? 'translateX(12px)' : 'none'
                      }}
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-6 ${
                          activeTab === index ? 'bg-white/20' : 'bg-[#f0f6ff]'
                        }`}>
                          {React.cloneElement(service.icon, {
                            className: `${activeTab === index ? 'text-white' : 'text-[#245684]'} text-2xl`
                          })}
                        </div>
                        <h3 className="text-xl font-medium">{service.title}</h3>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Content Area */}
              <div 
                id="service-content"
                className="lg:w-2/3 bg-[#f9fbfe] rounded-xl p-10 border border-[#e1e9f2] shadow-sm"
                style={{
                  minHeight: '600px',
                  transition: 'opacity 0.3s ease, transform 0.3s ease'
                }}
              >
                <div className="flex items-start mb-6">
                  <div className="w-16 h-16 rounded-xl bg-[#f0f6ff] flex items-center justify-center mr-8">
                    {services[activeTab].icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#103d5d] mt-2">{services[activeTab].title}</h3>
                </div>

                {/* Service Graphic - Now positioned under title but above description */}
                <div className="mb-8  p-4   flex justify-center">
                  <img 
                    src={services[activeTab].image}
                    alt={`${services[activeTab].title} infrastructure`}
                    className="w-[150px] h-[150px] object-cover rounded-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <p className="text-[#5c6f87] text-lg mb-8 leading-relaxed">{services[activeTab].content}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#000000] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Ready to Transform Your IT Management?</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            Our experts are ready to design the perfect managed IT solution for your business needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="/contact-Us" className="inline-block"> 
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-12 py-5 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] text-lg">
                Get Started Today
              </button>
            </a>
            <a href="/contact-Us" className="inline-block"> 
              <button className="border-2 border-white hover:bg-white hover:text-[#103d5d] text-white px-12 py-5 rounded-md font-medium transition-all duration-300 hover:scale-[1.02] text-lg">
                Speak to an Expert
              </button>
            </a>
          </div>
        </div>
      </section>
      
{/* FAQ Section */}
            <section
              className="py-24 bg-[#f5f9fd] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32"
              ref={sectionRefs[3]}
            >
              <div className="container mx-auto">
                <h2
                  className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-16 text-center"
                  style={{
                    opacity: isVisible[3] ? 1 : 0,
                    transform: isVisible[3] ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.6s ease, transform 0.6s ease'
                  }}
                >
                  Frequently Asked Questions
                </h2>
                <div className="max-w-5xl mx-auto">
                  {/* Responsive: Stack on mobile, 2 cols on md+ */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[faqsLeft, faqsRight].map((faqCol, colIdx) => (
                      <div key={colIdx} className="space-y-6">
                        {faqCol.map((faq, idx) => {
                          const qIdx = colIdx * 3 + idx + 1;
                          return (
                            <div
                              className={`rounded-xl border bg-white border-[#e1e9f2] shadow transition-all duration-500 group
                                ${activeFaq === qIdx ? 'ring-2 ring-[#245684] ring-opacity-40 scale-[1.02] shadow-xl' : ''}
                              `}
                              key={qIdx}
                              style={{
                                opacity: isVisible[3] ? 1 : 0,
                                transform: isVisible[3]
                                  ? 'scale(1)'
                                  : 'scale(0.95)',
                                transition: `opacity 0.7s ${0.15 * qIdx}s cubic-bezier(.4,0,.2,1), transform 0.7s ${0.15 * qIdx}s cubic-bezier(.4,0,.2,1)`
                              }}
                            >
                              <button
                                onClick={() => setActiveFaq(activeFaq === qIdx ? null : qIdx)}
                                className={`w-full flex justify-between items-center text-left p-6 rounded-xl transition-all duration-300
                                  ${activeFaq === qIdx
                                    ? 'bg-gradient-to-r from-[#103d5d] to-[#245684] text-white shadow'
                                    : 'bg-[#f5f9fd] text-[#103d5d] hover:bg-[#e1e9f2]'
                                  }
                                `}
                              >
                                <h3 className="text-xl font-semibold flex items-center gap-2">
                                  <span
                                    className={`inline-block w-3 h-3 rounded-full mr-2 transition-all duration-300
                                      ${activeFaq === qIdx ? 'bg-[#a3d4ff] scale-110 shadow-lg' : 'bg-[#245684] scale-90'}
                                    `}
                                  ></span>
                                  {faq.question}
                                </h3>
                                <FiChevronRight
                                  className={`text-2xl transition-transform duration-300
                                    ${activeFaq === qIdx ? 'rotate-90 text-[#a3d4ff]' : ''}
                                  `}
                                />
                              </button>
                              <div
                                className={`faq-answer transition-all duration-500 overflow-hidden
                                  ${activeFaq === qIdx ? 'max-h-[500px] opacity-100 py-4 px-6' : 'max-h-0 opacity-0 py-0 px-6'}
                                `}
                                style={{
                                  background: activeFaq === qIdx
                                    ? 'linear-gradient(90deg, #f5f9fd 65%, #a3d4ff1a 100%)'
                                    : undefined
                                }}
                              >
                                {activeFaq === qIdx && (
                                  <p className="text-[#5c6f87] text-lg leading-relaxed animate-fadein">
                                    {faq.answer}
                                  </p>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                  {/* Additional Support CTA */}
                  <div className="mt-16 text-center">
                    <p className="text-xl text-[#4a5d72] mb-8">
                      Still have questions? Our team is ready to help.
                    </p>
                    <a href="/contact-Us" className="inline-block">
                      <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg">
                        Contact Our Support Team
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              {/* Animations for FAQ */}
              <style jsx>{`
                @keyframes fadein {
                  from { opacity: 0; transform: translateY(16px);}
                  to { opacity: 1; transform: translateY(0);}
                }
                .animate-fadein {
                  animation: fadein 0.6s cubic-bezier(.4,0,.2,1);
                }
              `}</style>
            </section>

      <Footer/>

      {/* Add CSS animations */}
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
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes grid-move {
          0% { background-position: 0 0; }
          100% { background-position: 50px 50px; }
        }
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        @keyframes slide-in-up {
          from { 
            opacity: 0;
            transform: translateY(30px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes bounce-horizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        @keyframes scroll-indicator {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(26px); opacity: 0; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-rotate {
          animation: rotate 20s linear infinite;
        }
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        .animate-typewriter {
          animation: typewriter 2s steps(40) 1s both;
        }
        .animate-slide-in-up {
          animation: slide-in-up 1s ease-out 1.5s forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
        .animate-bounce-horizontal {
          animation: bounce-horizontal 1s infinite;
        }
        .animate-scroll-indicator {
          animation: scroll-indicator 2s infinite;
        }
        .bg-grid-white {
          background-image: linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default ManagedITServicesPage;