import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import VideoHero from '../components/hero.jsx';
import Footer from '../components/footer.jsx';

// Add CSS animations and background styles
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
  
  @keyframes bounceGentle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes nodePulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
  }

  @keyframes connectionFlow {
    0% {
      stroke-dashoffset: 100;
      opacity: 0.2;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 0.2;
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes particleFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(5px, -5px) rotate(90deg);
    }
    50% {
      transform: translate(0, -10px) rotate(180deg);
    }
    75% {
      transform: translate(-5px, -5px) rotate(270deg);
    }
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200px * 21));
    }
  }

  @keyframes scrollRight {
    0% {
      transform: translateX(calc(-200px * 21));
    }
    100% {
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
  
  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-pulse-slower {
    animation: pulse 3s ease-in-out infinite;
  }
  
  .animate-bounce-gentle {
    animation: bounceGentle 2s infinite ease-in-out;
  }

  .animate-node-pulse {
    animation: nodePulse 4s ease-in-out infinite;
  }

  .animate-connection-flow {
    animation: connectionFlow 3s linear infinite;
  }

  .animate-gradient-shift {
    animation: gradientShift 8s ease infinite;
    background-size: 200% 200%;
  }

  .animate-particle-float {
    animation: particleFloat 6s ease-in-out infinite;
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
  
  .testimonial-slide {
    transition: transform 0.5s ease-in-out;
  }

  /* Enhanced background styles */
  .cyber-video-container {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }
  
  .cyber-video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(16, 61, 93, 0.7), rgba(36, 86, 132, 0.7));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 2;
  }
  
  .cyber-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  /* Particles background container */
  .particles-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
  }

  .particle {
    position: absolute;
    background: rgba(16, 61, 93, 0.1);
    border-radius: 50%;
    animation: particleFloat 6s ease-in-out infinite;
  }

  .particle-2 {
    background: rgba(36, 86, 132, 0.08);
    animation-duration: 8s;
    animation-delay: 1s;
  }

  .particle-3 {
    background: rgba(23, 15, 23, 0.06);
    animation-duration: 10s;
    animation-delay: 2s;
  }

  /* Gradient mesh background */
  .gradient-mesh {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 15% 50%, rgba(16, 61, 93, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 85% 30%, rgba(36, 86, 132, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(23, 15, 23, 0.03) 0%, transparent 50%);
    animation: gradientShift 15s ease infinite;
  }

  /* Connected nodes overlay */
  .nodes-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .node {
    position: absolute;
    width: 6px;
    height: 6px;
    background: rgba(16, 61, 93, 0.3);
    border-radius: 50%;
    animation: nodePulse 4s ease-in-out infinite;
  }

  .connection {
    stroke: rgba(36, 86, 132, 0.1);
    stroke-width: 1;
    stroke-dasharray: 5;
  }

  /* Section-specific backgrounds */
  .services-background {
    background: 
      linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%),
      radial-gradient(circle at 20% 80%, rgba(16, 61, 93, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(36, 86, 132, 0.03) 0%, transparent 50%);
  }

  .stats-background {
    background: linear-gradient(135deg, #103d5d 0%, #245684 50%, #1a4a75 100%);
    position: relative;
    overflow: hidden;
  }

  .stats-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  }

  .testimonials-background {
    background: 
      linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%),
      radial-gradient(circle at 10% 20%, rgba(16, 61, 93, 0.02) 0%, transparent 50%);
  }

  .downloads-background {
    background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
    position: relative;
    overflow: hidden;
  }

  .downloads-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 20%, rgba(16, 61, 93, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(36, 86, 132, 0.02) 0%, transparent 50%);
  }

  /* Dual Line Partner Carousel Styles */
  .partners-background {
    background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
    position: relative;
    overflow: hidden;
  }

  .partners-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(16, 61, 93, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(36, 86, 132, 0.03) 0%, transparent 50%);
  }

  .dual-carousel-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 2rem 0;
  }

  .logo-track {
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .logo-track-top {
    animation: scrollLeft 60s linear infinite;
  }

  .logo-track-bottom {
    animation: scrollRight 50s linear infinite;
  }

  .logo-track:hover {
    animation-play-state: paused;
  }

  .logo-item {
    flex: 0 0 160px;
    height: 90px;
    background: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
  }

  .logo-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: #103d5d;
  }

  .logo-img {
    max-width: 100%;
    max-height: 45px;
    width: auto;
    height: auto;
    filter: grayscale(100%);
    opacity: 0.7;
    transition: all 0.3s ease;
  }

  .logo-item:hover .logo-img {
    filter: grayscale(0%);
    opacity: 1;
    transform: scale(1.1);
  }

  /* Downloads Section Styles */
  .brochure-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    text-align: center;
    height: 100%;
  }

  .brochure-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: #103d5d;
  }

  .brochure-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #103d5d, #245684);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }

  .download-btn {
    background: linear-gradient(135deg, #103d5d, #245684);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 61, 93, 0.3);
    background: linear-gradient(135deg, #245684, #103d5d);
  }

  .file-size {
    color: #6b7280;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  /* Fade edges */
  .carousel-fade {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    pointer-events: none;
    z-index: 2;
  }

  .carousel-fade-left {
    left: 0;
    background: linear-gradient(90deg, #f8fafc 0%, transparent 100%);
  }

  .carousel-fade-right {
    right: 0;
    background: linear-gradient(270deg, #f8fafc 0%, transparent 100%);
  }

  /* Content wrapper to ensure readability */
  .content-wrapper {
    position: relative;
    z-index: 1;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .logo-track {
      gap: 2rem;
      margin-bottom: 1.5rem;
    }
    
    .logo-item {
      flex: 0 0 120px;
      height: 70px;
      padding: 1rem;
    }
    
    .logo-img {
      max-height: 35px;
    }
    
    .carousel-fade {
      width: 50px;
    }

    .brochure-card {
      padding: 1.5rem;
    }

    .brochure-icon {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
    }
  }
`;

const HomePage = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 12, label: "Years Experience" },
    { id: 2, value: 0, target: 150, label: "Satisfied Clients" },
    { id: 3, value: 0, target: 100, label: "Successful Projects" },
    { id: 4, value: 0, target: 20, label: "Employees" }
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [particles, setParticles] = useState([]);

  // All Services Data
  const allServices = [
    {
      id: 1,
      title: "Cloud Solutions",
      description: "Comprehensive cloud services including migration, management, and optimization for your business.",
      icon: "☁️"
    },
    {
      id: 2,
      title: "IT Security",
      description: "Advanced security solutions to protect your business from cyber threats and data breaches.",
      icon: "🔒"
    },
    {
      id: 3,
      title: "IT Support",
      description: "24/7 IT support services to keep your business running smoothly without interruptions.",
      icon: "💻"
    },
    {
      id: 4,
      title: "Projects & Automation",
      description: "Custom IT projects and automation solutions to streamline your operations and increase efficiency.",
      icon: "⚙️"
    },
    {
      id: 5,
      title: "Internet & VOIP",
      description: "Reliable internet and VOIP solutions for seamless communication and connectivity.",
      icon: "📶"
    },
    {
      id: 6,
      title: "IT Training",
      description: "Professional IT training to upskill your team and maximize productivity and security awareness.",
      icon: "🎓"
    },
    {
      id: 7,
      title: "Digital Services",
      description: "Transform your business with our cutting-edge digital services and digital transformation strategies.",
      icon: "🌐"
    },
    {
      id: 8,
      title: "CRM & ERP Solutions",
      description: "Integrated CRM and ERP solutions to optimize your business processes and customer relationships.",
      icon: "📊"
    }
  ];

  // Partner Logos Data - 42 logos split into two groups
  const partnerLogosLine1 = Array.from({ length: 21 }, (_, i) => ({
    id: i + 1,
    name: `Partner ${i + 1}`,
    fallback: `https://via.placeholder.com/120x40/103d5d/ffffff?text=Partner+${i + 1}`
  }));

  const partnerLogosLine2 = Array.from({ length: 21 }, (_, i) => ({
    id: i + 22,
    name: `Partner ${i + 22}`,
    fallback: `https://via.placeholder.com/120x40/245684/ffffff?text=Partner+${i + 22}`
  }));

  // Brochures Data
  const brochures = [
    {
      id: 1,
      title: "IT Services Overview",
      description: "Complete overview of our managed IT services, support solutions, and technology offerings.",
      fileSize: "2.4 MB",
      downloadUrl: "/brochures/syscare-it-services-overview.pdf",
      icon: "📄"
    },
    {
      id: 2,
      title: "Cybersecurity Solutions",
      description: "Detailed guide to our security services including threat protection and compliance solutions.",
      fileSize: "3.1 MB",
      downloadUrl: "/brochures/syscare-cybersecurity-solutions.pdf",
      icon: "🔐"
    },
    {
      id: 3,
      title: "Cloud & Infrastructure",
      description: "Comprehensive information about our cloud migration and infrastructure management services.",
      fileSize: "2.8 MB",
      downloadUrl: "/brochures/syscare-cloud-infrastructure.pdf",
      icon: "☁️"
    }
  ];

  // Duplicate logos for infinite scroll effect
  const duplicatedLogosLine1 = [...partnerLogosLine1, ...partnerLogosLine1, ...partnerLogosLine1];
  const duplicatedLogosLine2 = [...partnerLogosLine2, ...partnerLogosLine2, ...partnerLogosLine2];

  // Get first 4 services for initial display
  const initialServices = allServices.slice(0, 4);
  const additionalServices = allServices.slice(4);

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      quote: "SysCare transformed our IT infrastructure completely. Their team is knowledgeable and responsive.",
      author: "Sarah Johnson",
      company: "TechForward Inc.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      quote: "The cybersecurity solutions they implemented gave us peace of mind we didn't have before.",
      author: "Michael Chen",
      company: "SecureData LLC",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "Excellent cloud migration services. We experienced minimal downtime thanks to their planning.",
      author: "Emily Rodriguez",
      company: "CloudNine Solutions",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  useEffect(() => {
    // Initialize animated background nodes, connections, and particles
    initializeBackground();
    initializeParticles();

    // Start counter animation when stats section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
      clearInterval(interval);
    };
  }, []);

  const initializeBackground = () => {
    // Create nodes for the connected network background
    const nodeCount = 15;
    const newNodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4
      });
    }
    
    setNodes(newNodes);

    // Create connections between nearby nodes
    const newConnections = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = Math.sqrt(
          Math.pow(newNodes[i].x - newNodes[j].x, 2) + 
          Math.pow(newNodes[i].y - newNodes[j].y, 2)
        );
        
        if (distance < 30) { // Only connect nearby nodes
          newConnections.push({
            id: `${i}-${j}`,
            from: newNodes[i],
            to: newNodes[j],
            delay: Math.random() * 3
          });
        }
      }
    }
    
    setConnections(newConnections);
  };

  const initializeParticles = () => {
    // Create floating particles for the background
    const particleCount = 50;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 8 + 2; // Random size between 2px and 10px
      const type = i % 3; // Distribute between 3 particle types
      
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        type: type,
        delay: Math.random() * 6
      });
    }
    
    setParticles(newParticles);
  };

  const animateStats = () => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: Math.floor(progress * stat.target)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const toggleServices = () => {
    setShowAllServices(!showAllServices);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const handleDownload = (brochure) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = brochure.downloadUrl;
    link.download = brochure.title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // You can also track downloads here if needed
    console.log(`Downloaded: ${brochure.title}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] relative">
      {/* Add animation styles */}
      <style>{animationStyles}</style>
      
      {/* Enhanced Particles Background */}
      <div className="particles-background">
        <div className="gradient-mesh"></div>
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle particle-${particle.type} animate-particle-float`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              opacity: 0.1 + (particle.size / 20)
            }}
          />
        ))}
        
        {/* Connected Nodes Network */}
        <div className="nodes-overlay">
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {connections.map((conn) => (
              <line
                key={conn.id}
                x1={`${conn.from.x}%`}
                y1={`${conn.from.y}%`}
                x2={`${conn.to.x}%`}
                y2={`${conn.to.y}%`}
                className="connection animate-connection-flow"
                style={{ animationDelay: `${conn.delay}s` }}
              />
            ))}
          </svg>
          {nodes.map((node) => (
            <div
              key={node.id}
              className="node animate-node-pulse"
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                animationDelay: `${node.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        <Navigation />

        <VideoHero/>

        {/* About Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-6">Managed IT Services in Australia | SysCare IT Solutions</h2>
              <p className="text-md text-gray-600 mb-6 text-justify">
                 At SysCare IT Solutions, we deliver reliable managed IT services in Melbourne, advanced IT support in Sydney, and proactive managed security services across Australia. Whether you need a full-service MSP in Melbourne or a trusted MSSP in Australia, we've got your business covered.
              </p>
              <p className="text-md text-gray-600 mb-8">
                Based in Melbourne and Sydney, SysCare IT Solutions supports businesses of all sizes across Australia. From small startups to growing enterprises, we deliver cost-effective and scalable IT solutions that reduce downtime, enhance security, and improve productivity.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-[#103d5d] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse-slow">150+ Clients</div>
                <div className="bg-[#245684] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse-slow" style={{animationDelay: '0.5s'}}>24/7 Support</div>
                <div className="bg-[#170f17] text-white px-6 py-2 rounded-full hover:scale-105 transition-transform duration-300 animate-pulse-slow" style={{animationDelay: '1s'}}>Certified Experts</div>
              </div>
            </div>
            <div className="cyber-video-container rounded-xl overflow-hidden h-96 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              {/* Cyber/Technology Background Video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="cyber-video"
                poster="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
              >
                <source src="https://assets.mixkit.co/videos/preview/mixkit-abstract-digital-waves-9885-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="cyber-video-overlay">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold mb-4">Cybersecurity & Technology</h3>
                  <p className="text-lg">Protecting your digital assets with cutting-edge solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual Line Partners Section */}
        <div className="partners-background py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                We partner with the world's leading technology companies to deliver exceptional solutions
              </p>
            </div>

            {/* Dual Line Carousel */}
            <div className="dual-carousel-container">
              <div className="carousel-fade carousel-fade-left"></div>
              <div className="carousel-fade carousel-fade-right"></div>
              
              {/* Top Line - Scrolls Left */}
              <div className="logo-track logo-track-top">
                {duplicatedLogosLine1.map((logo, index) => (
                  <div key={`top-${logo.id}-${index}`} className="logo-item">
                    <img 
                      src={logo.fallback} 
                      alt={logo.name}
                      className="logo-img"
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Line - Scrolls Right */}
              <div className="logo-track logo-track-bottom">
                {duplicatedLogosLine2.map((logo, index) => (
                  <div key={`bottom-${logo.id}-${index}`} className="logo-item">
                    <img 
                      src={logo.fallback} 
                      alt={logo.name}
                      className="logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Trust Stats */}
            <div className="mt-16 text-center">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#103d5d]">42+</div>
                  <div className="text-gray-600 text-sm">Technology Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#103d5d]">50+</div>
                  <div className="text-gray-600 text-sm">Certified Solutions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#103d5d]">100%</div>
                  <div className="text-gray-600 text-sm">Vendor Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#103d5d]">24/7</div>
                  <div className="text-gray-600 text-sm">Partner Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Downloads - Products & Services Brochures Section */}
        <div className="downloads-background py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
                Downloads - Products & Services Brochures
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                Download our comprehensive brochures to learn more about our IT solutions and services
              </p>
            </div>

            {/* Brochures Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {brochures.map((brochure, index) => (
                <div 
                  key={brochure.id} 
                  className="brochure-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="brochure-icon">
                    {brochure.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#170f17] mb-3">
                    {brochure.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {brochure.description}
                  </p>
                  <div className="file-size">
                    PDF • {brochure.fileSize}
                  </div>
                  <button 
                    onClick={() => handleDownload(brochure)}
                    className="download-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Brochure
                  </button>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-4">
                Need more information? Contact our team for customized solutions.
              </p>
              <Link 
                to="/contact-Us" 
                className="inline-flex items-center px-6 py-3 border border-[#103d5d] text-[#103d5d] rounded-lg font-semibold hover:bg-[#103d5d] hover:text-white transition-all duration-300"
              >
                Contact Sales Team
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Services Section - Enhanced with new background */}
        <div className="services-background py-16 md:py-24 relative overflow-hidden border border-gray-200 rounded-lg mx-4 sm:mx-6 lg:mx-8">
          {/* Animated background elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-blue-100 opacity-30 animate-pulse-slower"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-blue-200 opacity-20 animate-pulse-slower" style={{animationDelay: '1s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
                Our Managed IT & Security Solutions
              </h2>
              <p className="text-md text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                As a leading MSP in Melbourne and MSSP in Australia, we offer a wide range of solutions to keep your business secure and efficient:
              </p>
            </div>

            {/* Services Grid - Show first 4 services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {initialServices.map((service, index) => (
                <AnimatedServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index}
                  animationDelay={index * 0.1}
                />
              ))}
            </div>

            {/* Additional Services - Show when expanded */}
            {showAllServices && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 stagger-animation">
                {additionalServices.map((service, index) => (
                  <AnimatedServiceCard 
                    key={service.id} 
                    service={service} 
                    index={index + initialServices.length}
                    animationDelay={index * 0.1}
                  />
                ))}
              </div>
            )}

            {/* Show More/Less Button with Animation */}
            <div className="text-center mt-12 animate-bounce-gentle">
              <button 
                onClick={toggleServices}
                className="px-8 py-3 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white rounded-lg font-semibold hover:from-[#245684] hover:to-[#103d5d] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {showAllServices ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      Show Less Services
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Show More Services
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#245684] to-[#103d5d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section - Enhanced background */}
        <div id="stats-section" className="stats-background text-white py-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-white animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-animation">
              {stats.map((stat) => (
                <div key={stat.id} className="animate-fade-in">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}+
                  </div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Section - Enhanced background */}
        <div className="testimonials-background max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Trusted by businesses across various industries for our reliable IT solutions.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex testimonial-slide"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up">
                      <div className="flex flex-col md:flex-row items-center mb-6">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.author} 
                          className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6 hover:scale-105 transition-transform duration-300"
                        />
                        <div>
                          <div className="flex mb-2">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                xmlns="http://www.w3.org/2000/svg"
                                className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                          <p className="text-gray-600 italic mb-2">"{testimonial.quote}"</p>
                          <div>
                            <div className="font-semibold text-[#245684]">{testimonial.author}</div>
                            <div className="text-gray-500 text-sm">{testimonial.company}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-[#103d5d] scale-125' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#170f17] text-white py-16 md:py-24 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-white animate-pulse-slower"></div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse-slower" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Partner with SysCare IT Solutions </h2>
            <p className="text-md mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Your dedicated provider of managed IT services in Melbourne, IT support in Sydney, and trusted cybersecurity services nationwide. Discover how we can protect and empower your business with tailored IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 stagger-animation">
              <Link 
                to="/contact-Us" 
                className="px-8 py-3 bg-[#245684] text-white rounded-lg font-semibold hover:bg-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-gentle"
              >
                Get a Free Consultation
              </Link>
              <Link 
                to="/contact-Us" 
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#170f17] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

// Animated Service Card Component
const AnimatedServiceCard = ({ service, animationDelay = 0 }) => {
  return (
    <div 
      className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full border border-[#103d5d] animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="p-6 h-full flex flex-col relative">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        
        <div className="relative z-10">
          {/* Icon with animation */}
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 animate-float">
            {service.icon}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-[#245684] mb-3 group-hover:text-[#103d5d] transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow text-sm group-hover:text-gray-800 transition-colors duration-300">
            {service.description}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;