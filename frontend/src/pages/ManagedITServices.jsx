import React, { useState, useEffect, useRef } from 'react';
import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight, FiMonitor, FiSmartphone, FiBox, FiGlobe, FiRefreshCw, FiCheckSquare, FiLock, FiBarChart2, FiShoppingCart, FiMessageCircle, FiArchive, FiEye, FiKey } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

const FAQS = [
  {
    question: "1. What are Managed IT Services, and how can they benefit my business?",
    answer: (
      <>
         Managed IT Services from SysCare IT Solutions cover the full spectrum of IT support, monitoring, and management. From servers and endpoints to firewalls, Microsoft 365, and security compliance, we proactively handle your IT environment so your team can focus on core business goals. This reduces downtime, enhances security, and optimizes performance, all while lowering long-term IT costs.
      </>
    ),
  },
  {
    question: "2. How does SysCare IT Solutions ensure the security of our systems?",
    answer: (
      <>
        SysCare implements multi-layered protection across your IT environment. This includes Managed Endpoints (AV/Malware/DNS/EDR/XDR), Device Encryption, Managed Firewalls, VPN Access, and Spam Protection. We also manage patching, vulnerabilities, and Microsoft 365 security settings to keep your systems aligned with industry standards. Our proactive approach ensures your business stays ahead of evolving cyber threats.
      </>
    ),
  },
  {
    question: "3. Do you provide Managed IT Services for small and medium-sized businesses in Melbourne and Sydney?",
    answer: (
      <>
         Absolutely. SysCare specializes in delivering Managed IT Services for SMBs in Melbourne and Sydney. Our solutions are tailored to fit your scale and budget, ensuring you get enterprise-level IT support without the overhead of a large internal IT team. We help small and growing businesses stay secure, compliant, and competitive in today’s fast-moving digital environment.
      </>
    ),
  },
  {
    question: "4. How does SysCare handle patch management for Windows and business applications?",
    answer: (
      <>
         SysCare manages both Windows OS Patch Management and Application Patch Management to keep systems secure and up to date. We apply patches strategically to minimize disruption, ensuring vulnerabilities are closed before attackers can exploit them. Our automated processes reduce downtime, improve compliance, and keep your IT environment stable and resilient.
      </>
    ),
  },
  {
    question: "5. Can SysCare help with IT compliance and regulatory requirements?",
    answer: (
      <>
         Yes. Our services include M365 Security & Compliance Management, Device Encryption, and Email Archival, all aligned with industry regulations. Whether your business needs to comply with standards like ISO, GDPR, or local data protection laws, SysCare ensures your IT systems meet security and compliance obligations, reducing legal and operational risks.
      </>
    ),
  },
  {
    question: "6. What makes SysCare’s Managed IT Services different from break-fix IT support?",
    answer: (
      <>
         Unlike break-fix IT models where support is reactive, SysCare’s Managed IT Services are proactive. We continuously monitor, patch, and secure your systems to prevent problems before they occur. Services like Endpoint Monitoring, DR & BCP (Disaster Recovery & Business Continuity Planning), and Asset Management ensure stability and resilience. This proactive approach saves costs, reduces downtime, and delivers predictable IT performance.
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
      title: "Managed Servers",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "At SysCare IT Solutions, we provide complete Managed Server Services that ensure your infrastructure runs smoothly 24/7. Our team proactively monitors server performance, applies critical updates, and performs scheduled maintenance to keep your systems secure and reliable. With automated backups and disaster recovery planning, we safeguard your business data against potential failures. We handle configuration, optimization, and health checks, so your servers operate at peak performance. Our managed approach minimizes downtime and maximizes efficiency, giving your team uninterrupted access to essential applications and resources. Whether you run physical, virtual, or cloud-based servers, SysCare ensures stability, scalability, and resilience.",
      image: "/images/Managed-Servers.png"
    },
    {
      title: "Managed Endpoints",
      icon: <FiMonitor className="text-[#245684] text-2xl" />,
      content: "SysCare delivers enterprise-grade Managed Endpoint Protection to secure every device across your business. From antivirus and malware defense to DNS filtering and advanced EDR/XDR solutions, we provide multiple layers of protection against evolving cyber threats. Our security team continuously monitors endpoints for suspicious activity, applying rapid remediation when risks are detected. We manage updates, policies, and configurations to keep devices compliant and resilient. By preventing unauthorized access and blocking malicious traffic, we reduce the risk of breaches. With SysCare managing your endpoints, your business enjoys stronger security, improved productivity, and peace of mind knowing every user device is protected.",
      image: "/images/Managed-Endpoints.png"
    },
    {
      title: "Mobile Device Management",
      icon: <FiSmartphone className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions provides Mobile Device Management (MDM) solution. Seamlessly integrating into your business framework, our MDM services empower you to efficiently manage and secure your mobile devices. With a focus on professional-grade security protocols, SysCare ensures data integrity while facilitating streamlined device configurations and updates. Experience heightened control over your mobile fleet, enhanced security features, and simplified administration with SysCare's MDM solution. Elevate your business mobility seamlessly and securely with our tailored Mobile Device Management services.",
      image: "/images/Mobile-Device-Management.png"
    },
    {
      title: "IT Asset Management",
      icon: <FiBox className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions provides comprehensive IT Asset Management services to optimize your business operations. Our expert team ensures careful tracking, maintenance, and strategic utilization of your IT assets. From procurement to disposal, we provide a seamless process, ensuring regulatory compliance and cost-effectiveness. Leverage our sophisticated IT Asset Management solutions to enhance efficiency, reduce risks, and streamline your IT infrastructure. Trust SysCare for a professional approach to safeguarding and maximizing the value of your IT investments.",
      image: "/images/IT-Asset-Management.png"
    },
    {
      title: "Domain & DNS Management",
      icon: <FiGlobe className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions offers Domain & DNS Management, providing seamless control and optimization of your digital presence. Our expert team ensures precise domain registration, strategic management, and efficient DNS configurations. With a focus on security and reliability, we safeguard your online identity. Trust SysCare for streamlined domain and DNS services, empowering your business with a solid and secure online foundation. Experience hassle-free management and optimization of your digital assets with our professional and dedicated Domain & DNS Management solutions.",
      image: "/images/Domain-&-DNS-Management.png"
    },
    {
      title: "Windows OS Patch Management",
      icon: <FiRefreshCw className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions offers top-tier Windows Patch Management for PCs. Our adept team ensures seamless and secure updates for your computer systems, enhancing performance and safeguarding against vulnerabilities. With a focus on efficiency and reliability, SysCare meticulously manages the patching process, minimizing downtime and optimizing your PC infrastructure. Rely on SysCare for a professional approach to Windows Patch Management, ensuring your systems operate at peak performance while maintaining robust security standards.",
      image: "/images/Windows-OS-Patch-Management.png"
    },
    {
      title: "Application Patch Management",
      icon: <FiCheckSquare className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions extends patch management beyond operating systems, offering full Application Patch Management for business-critical software. Our team ensures applications remain updated with the latest security fixes and performance enhancements. By addressing vulnerabilities quickly, we reduce the window of exposure to cyberattacks. We maintain patch schedules tailored to your workflows, minimizing disruption to productivity. From productivity tools like Microsoft 365 to industry-specific applications, SysCare manages the patching process end-to-end. This proactive approach ensures your applications remain compliant, efficient, and secure. With SysCare, you can focus on business growth while we handle application integrity.",
      image: "/images/Application-Patch-Management.png"
    },
    {
      title: "Vulnerability Management",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "SysCare provides robust Vulnerability Management Services to help businesses identify, prioritize, and address IT risks. Our team performs continuous vulnerability scans across networks, servers, endpoints, and applications. Detected risks are assessed for severity and impact, allowing us to prioritize remediation efforts effectively. We apply patches, configurations, or compensating controls to reduce exposure before attackers exploit weaknesses. With ongoing monitoring and detailed reporting, we help businesses maintain compliance with security standards. SysCare’s vulnerability management reduces risk, improves resilience, and strengthens your overall cybersecurity posture, ensuring your systems remain secure against evolving threats.",
      image: "/images/Vulnerability-Management.png"
    },
    {
      title: "MS 365 Portal Management",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions offers MS Exchange Portal Management, providing seamless and secure management of your email communication infrastructure. Our dedicated team of experts ensures the efficient operation of Microsoft Exchange, guaranteeing optimal performance, data integrity, and enhanced collaboration within your organization. From user account management to security configurations and troubleshooting, SysCare's professional approach ensures your MS Exchange environment remains robust and reliable. Trust us for comprehensive administration services that streamline your email communication, leaving you free to focus on your core business functions with confidence. Elevate your communication infrastructure with SysCare's expertise in MS Exchange Portal Administration.",
      image: "/images/MS-365-Portal-Management.png"
    },
    {
      title: "AD/Azure/Entra ID Management",
      icon: <FiLock className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions is providing comprehensive AD/Azure/Entra ID Management services, encompassing User Management and File & Folder Security Management. Our skilled professionals ensure seamless operation of your Active Directory, optimizing user access and enhancing security protocols. With a focus on precision and efficiency, SysCare delivers tailored solutions to safeguard your digital assets. Rely on us for expert administration, robust user management, and file and folder security measures. Elevate your IT infrastructure with SysCare's adept AD/Azure/ Entra ID Management services, offering a secure and streamlined experience for your organization.",
      image: "/images/AD-Azure-Entra-AD Management.png"
    },
    {
      title: "M365 Security & Compliance",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers unparalleled MS 365 Security & Compliance Management services, ensuring robust protection and regulatory adherence for your business. Our expert team meticulously configures and monitors security protocols, shielding your data from threats. With a focus on compliance, we implement measures that align with industry standards, safeguarding your organization's integrity. Rely on SysCare for a seamless integration of Microsoft 365 security features, providing peace of mind and empowering your business with a resilient shield against cyber threats. Elevate your security posture with our proactive and comprehensive MS 365 Security & Compliance Management solutions.",
      image: "/images/M365-Security-&-Compliance-Management.png"
    },
    {
      title: "Managed WIFI",
      icon: <FiWifi className="text-[#245684] text-2xl" />,
      content: "SysCare offers fully Managed Wi-Fi Solutions that provide fast, reliable, and secure wireless connectivity for businesses. We design and implement Wi-Fi networks tailored to your office size, user load, and performance needs. Our team manages configuration, monitoring, and troubleshooting, ensuring maximum uptime and performance. Security features, including encryption and access controls, are enforced to protect against unauthorized access. With proactive monitoring, we identify and resolve issues before users experience disruption. Whether supporting remote workers, office staff, or guest access, SysCare ensures your Wi-Fi network delivers consistent performance and scalability as your business grows. ",
      image: "/images/Managed-WIFI.png"
    },
    {
      title: "Managed Firewall",
      icon: <FiBarChart2 className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions is safeguarding your digital assets with our cutting-edge Managed On-Premises Firewall service. As a trusted provider, we manage and optimize your firewall infrastructure, ensuring robust protection against cyber threats. Our expert team monitors, updates, and fine-tunes the firewall to align with evolving security needs, providing a proactive defense for your on-premises environment. With SysCare, you can rely on a seamless and secure IT infrastructure, allowing you to focus on your core business functions while we handle the intricacies of firewall management with utmost professionalism and expertise. Your security is our priority.",
      image: "/images/Managed-Firwall.png"
    },
    {
      title: "Managed VPN Access",
      icon: <FiLock className="text-[#245684] text-2xl" />,
      content: "SysCare provides secure, reliable Managed VPN Access to enable remote employees to connect to your business systems safely. We configure and manage VPN infrastructure with encryption and authentication protocols, ensuring data is protected in transit. Our solutions support seamless, user-friendly access while maintaining strict security controls. By monitoring VPN usage and applying policy-based access, we reduce risks of unauthorized entry. SysCare’s VPN services empower remote and hybrid teams with secure connectivity to internal resources, improving flexibility while safeguarding sensitive business data.",
      image: "/images/Managed-VPN-Access.png"
    },
    {
      title: "Managed DR & BCP",
      icon: <FiDatabase className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions presents an unparalleled Disaster Recovery (DR) and Business Continuity Planning (BCP) solution, featuring Cloud Backup to our secure Private Cloud. Safeguard your critical data with our state-of-the-art infrastructure, ensuring swift recovery in the face of unforeseen disasters. Our expert team orchestrates seamless Cloud Backup, providing a robust foundation for comprehensive Disaster Recovery strategies. Rely on SysCare's Private Cloud for unmatched data protection, minimizing downtime, and ensuring business continuity with a resilient DR and BCP framework. Elevate your data security with SysCare's cutting-edge solutions tailored to meet your business resilience needs.",
      image: "/images/Managed-DR-&-BCP.png"
    },
    {
      title: "Software Licence Management",
      icon: <FiCheckSquare className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions provides Software License Management, providing a comprehensive suite of services tailored to meet diverse client needs. Our seasoned professionals navigate the complex landscape of software procurement, ensuring optimal licensing solutions for your business. With a focus on cost efficiency and compliance, SysCare streamlines the acquisition process, offering expert guidance on licensing strategies and negotiations. Trust us to secure the right software licenses, manage compliance effectively, and optimize your software investments for enhanced operational efficiency. SysCare – your partner in strategic and streamlined Software License Management.",
      image: "/images/SW-Licencing.png"
    },
    {
      title: "Hardware Procurement",
      icon: <FiShoppingCart className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions offers Hardware Procurement, providing clients with streamlined, efficient, and cost-effective solutions. Our expert team navigates the complexities of procurement, ensuring the acquisition of top-quality hardware and accessories that align with your specific needs. From sourcing to delivery, SysCare takes pride in vendor management, cost optimization, and timely supply chain coordination. Elevate your IT infrastructure with our professional procurement services, where reliability and excellence converge to meet your hardware requirements seamlessly. Trust SysCare for a strategic and hassle-free approach to computer hardware and accessories procurement.",
      image: "/images/HW-Procurement.png"
    },
    {
      title: "IT Consultancy Services",
      icon: <FiMessageCircle className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions provides a comprehensive suite of services, prominently featuring our distinguished IT Consultancy Services. Backed by a team of seasoned professionals, we offer strategic guidance tailored to your business needs. Our consultancy services encompass a thorough analysis of your IT landscape, ensuring optimal solutions for efficiency and growth. From system optimization to technology adoption, SysCare's expert advice propels your business forward. Rely on us for insightful, proactive, and personalized IT consultancy, empowering your organization to navigate the dynamic tech landscape with confidence and success. Elevate your IT strategy with SysCare's unmatched expertise.",
      image: "/images/IT-Consultancy-Services-and-Advice.png"
    },
    {
      title: "Centralized Email Signature Management",
      icon: <FiMessageCircle className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions excels in providing a suite of services, including Centralized E-Mail Signature Management. Seamlessly ensuring uniform and professional email signatures across your organization, our solution streamlines brand consistency and compliance. With SysCare's expertise, you can effortlessly manage and update email signatures company-wide, reflecting professionalism and brand integrity. Experience the efficiency and uniformity of Centralized E-Mail Signature Management with SysCare IT Solutions – your trusted partner in optimizing business communications.",
      image: "/images/Centralise-E-Mail-Signature-Management.png"
    },
    {
      title: "Managed Email Archival",
      icon: <FiArchive className="text-[#245684] text-2xl" />,
      content: "At SysCare IT Solutions, we provide Managed Email Archival is to secure, store, and manage business emails in compliance with legal and regulatory requirements. Our solution ensures every inbound and outbound email is captured, indexed, and stored securely for easy retrieval when needed. This protects your business against data loss, legal disputes, and compliance violations. With advanced search and retrieval capabilities, employees can quickly access historical emails without burdening IT teams. SysCare’s archival system prevents mailbox overload, enhances storage efficiency, and supports business continuity. We safeguard sensitive communication while keeping your email environment organized, compliant, and secure.",
      image: "/images/Managed-E-Mail-Archival.png"
    },
    {
      title: "Endpoint Monitoring & Management",
      icon: <FiEye className="text-[#245684] text-2xl" />,
      content: "SysCare IT Solutions delivers proactive Endpoint Monitoring Management to keep all your business devices performing at their best. Our team continuously monitors desktops, laptops, and servers for health, performance, and security issues. Automated alerts allow us to detect and resolve problems before they impact your operations. We manage updates, configurations, and security policies to ensure every device stays compliant and protected. Real-time reporting gives you full visibility into your IT environment. With SysCare managing your endpoints, downtime is reduced, productivity is enhanced, and risks are minimized. We ensure your workforce has stable and secure technology to rely on every day.",
      image: "/images/Endpoint-Monitoring-&-Management.png"
    },
    {
      title: "Device Encryption Management",
      icon: <FiKey className="text-[#245684] text-2xl" />,
      content: "Protecting sensitive business data is a priority, and that’s why SysCare offers robust Device Encryption Management services. We implement advanced encryption protocols across laptops, desktops, and mobile devices to safeguard information against theft or unauthorized access. Whether a device is lost, stolen, or compromised, encryption ensures that data remains unreadable to outsiders. SysCare manages encryption keys, policies, and compliance requirements to simplify administration. Our solutions are designed to balance strong security with seamless usability, ensuring employees can work efficiently without extra barriers. With SysCare managing encryption, your business can meet compliance standards while keeping critical data secure.",
      image: "/images/Device-Encryption-Management.png"
    },
    {
      title: "Managed Spam Protection",
      icon: <FiShield className="text-[#245684] text-2xl" />,
      content: "At SysCare IT Solutions, we provide advanced Managed Spam Protection to defend your business email environment against unwanted and malicious messages. Our filtering systems block spam, phishing attempts, and malware before they reach user inboxes, reducing the risk of data breaches. By stopping harmful emails at the source, we protect employees from falling victim to scams and prevent downtime caused by email threats. SysCare continuously updates filtering rules and threat intelligence to stay ahead of evolving attacks. With reduced inbox clutter, employees can focus on productivity while enjoying a safer email experience. SysCare ensures your business communication remains clean, efficient, and secure.",
      image: "/images/Managed-Spam-Protection.png"
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">SysCare Managed IT Services</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                At SysCare IT Solutions Pty Ltd, we provide end-to-end Managed IT Services in Melbourne and Sydney, helping businesses stay secure, productive, and future ready. Our proactive approach ensures your IT infrastructure is monitored, maintained, and optimized 24/7, so you can focus on running your business while we take care of the technology.
              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                Whether you need cloud managed services in Sydney, IT outsourcing in Melbourne, or nationwide coverage across Australia, our tailored solutions give you enterprise level IT management at a predictable cost. From servers and endpoints to security, networks, and compliance, SysCare Managed IT Solutions Australia is your trusted partner for reliable and scalable IT support.
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
            Our Managed IT Services
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Partner with SysCare IT Solutions today</h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            streamline your IT, strengthen your security, and scale your business with expert-managed services.
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