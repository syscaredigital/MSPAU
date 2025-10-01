import React, { useState, useEffect, useRef } from 'react';
import SysCarePrivateCloud from '../assets/website-images/Cloud.png';
import { FiServer, FiShield, FiCloud, FiCpu, FiWifi, FiCode, FiDatabase, FiChevronRight, FiChevronDown, FiX } from 'react-icons/fi';
import Navigation from '../components/Navigation';
import Footer from '../components/footer';

;

const CloudPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const [isVisible, setIsVisible] = useState([false, false, false, false]);
  const [isMobile, setIsMobile] = useState(false);
  const [showCoursesModal, setShowCoursesModal] = useState(false);
  const [selectedServiceCourses, setSelectedServiceCourses] = useState([]);
  const [selectedServiceTitle, setSelectedServiceTitle] = useState('');
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const headerRef = useRef(null);
  const modalRef = useRef(null);
 

  const services = [
    {
      title: "Microsoft Azure Training",
      icon: <FiCloud className="text-[#245684] text-2xl" />,
      content: "Microsoft Azure is one of the most widely adopted cloud platforms in the world. SysCare delivers structured learning pathways to help professionals validate their skills through globally recognized certifications.",
      image: "/images/Microsoft-Azure.png",
      courses: [
        {
          name: "Microsoft Azure Fundamentals (AZ-900)",
          description: " A beginner-friendly course designed for individuals new to cloud computing. Learn the basics of cloud concepts, Azure services, pricing, and support models. Perfect for business professionals and IT staff starting their cloud journey."
        },
        {
          name: "Microsoft Azure Administrator (AZ-104)",
          description: " This intermediate-level certification focuses on managing Azure subscriptions, implementing storage solutions, securing identities, and monitoring cloud resources. Ideal for IT administrators responsible for day-to-day Azure operations."
        },
        {
          name: "Azure Solutions Architect Expert (AZ-305)",
          description: "Designed for senior IT professionals, this course equips you to design cloud architecture that meets business, security, and scalability requirements. Learn to integrate compute, storage, networking, and governance strategies in enterprise-grade Azure solutions."
        },
        {
          name: "Microsoft Azure Security Technologies (AZ-500)",
          description: " Specialize in securing Azure cloud environments by implementing security controls, managing identities, and protecting workloads. A must-have certification for cloud security professionals."
        }
      ]
    },
    {
      title: "AWS Training",
      icon: <FiServer className="text-[#245684] text-2xl" />,
      content: "Amazon Web Services (AWS) remains the market leader in global cloud adoption. SysCare’s AWS training helps participants build strong foundations and progress toward advanced cloud expertise.",
      image: "/images/AWS.png",
      courses: [
        {
          name: "AWS Certified Cloud Practitioner (CLF-C02)",
          description: "An entry-level certification that introduces cloud concepts, AWS services, pricing, and shared responsibility models. Ideal for beginners or business leaders seeking foundational AWS knowledge without technical prerequisites."
        },
        {
          name: "AWS Certified Solutions Architect – Associate (SAA-C03) ",
          description: "Validates your ability to design secure, cost-optimized, and scalable cloud solutions. Covers core AWS services like compute, networking, storage, and databases. Ideal for those in solution design or pre-sales roles. Prepares you to recommend best-fit architectures based on business needs. "
        },
        {
          name: "AWS Certified Solutions Architect – Professional (SAP-C02) ",
          description: "An advanced-level certification focusing on designing complex, enterprise-scale architectures. Includes hybrid and multi-account setups, governance, migration strategies, and automation. Suited for experienced architects leading cloud adoption in organizations. Requires deep hands-on expertise in AWS services. "
        },
        {
          name: "AWS Certified Security – Specialty ",
          description: "Specialized certification for professionals managing security in AWS environments. Covers data protection, identity and access management (IAM), incident response, and compliance. Ideal for security engineers, architects, or compliance specialists. Proves your ability to secure workloads in line with AWS best practices. "
        }
      ]
    },
    {
      title: "Google Cloud Training",
      icon: <FiCpu className="text-[#245684] text-2xl" />,
      content: "Google Cloud is rapidly gaining popularity among businesses for its AI-driven and scalable infrastructure. SysCare provides Google-aligned certification training to equip professionals for the future.",
      image: "/images/Google.png",
      courses: [
        {
          name: "Google Cloud Digital Leader",
          description: " A beginner-level certification designed to help professionals understand cloud concepts, digital transformation strategies, and Google Cloud’s core products. This course is suitable for business leaders and IT professionals looking to align technology with business goals."
        },
        {
          name: "Associate Cloud Engineer ",
          description: " Focuses on deploying, managing, and operating applications on Google Cloud. Covers configuring cloud solutions, monitoring operations, and maintaining projects. Best suited for hands-on administrators or those starting technical roles in GCP. Prepares you for real-world tasks like setting up VMs, networking, and IAM. "
        },
        {
          name: "Professional Cloud Architect",
          description: "Validates advanced expertise in designing, building, and managing secure and scalable solutions on Google Cloud. Covers architecture frameworks, cloud security, compliance, and solution performance. Geared towards professionals who align business goals with cloud solutions. Demonstrates your ability to lead enterprise-level cloud transformations. "
        }
      ]
    },
  ];

  // Function to open courses modal
  const openCoursesModal = (serviceIndex) => {
    setSelectedServiceCourses(services[serviceIndex].courses);
    setSelectedServiceTitle(services[serviceIndex].title);
    setShowCoursesModal(true);
  };

  // Function to close courses modal
  const closeCoursesModal = () => {
    setShowCoursesModal(false);
    setSelectedServiceCourses([]);
    setSelectedServiceTitle('');
  };

  // Close modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeCoursesModal();
      }
    };

    if (showCoursesModal) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [showCoursesModal]);

  // Close modal with Escape key
  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape') {
        closeCoursesModal();
      }
    };

    if (showCoursesModal) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [showCoursesModal]);

  
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
              Cloud<span className="text-[#a3d4ff]"> Services</span>
            </h1>
          </div>
         
          <div className="overflow-hidden">
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-in-up opacity-0">
              Comprehensive cloud solutions to drive your business forward
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

      {/* Private Cloud Focus Section */}
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#103d5d] mb-8">IT Cloud Courses Australia – SysCare IT Solutions</h2>
              <p className="text-[#4a5d72] text-lg mb-8 leading-relaxed">
                Cloud computing has become the foundation of modern IT, powering digital transformation for businesses worldwide. As demand for cloud expertise grows, professionals need the right training and certifications to stay ahead in the competitive job market. SysCare IT Solutions Pty Ltd offers industry-leading IT cloud training in Australia, helping individuals and businesses master Microsoft Azure, AWS, and Google Cloud platforms.              </p>
              <p className="text-[#4a5d72] text-lg mb-10 leading-relaxed">
                Our programs combine expert instruction, hands-on labs, and real-world case studies to ensure you gain the practical skills needed to design, deploy, and manage cloud infrastructure with confidence. Whether you’re a beginner or an experienced IT professional, SysCare provides tailored IT cloud courses in Australia that align with your career goals.
              </p>
              <button className="bg-[#245684] hover:bg-[#1a4066] text-white px-10 py-4 rounded-md font-medium transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-lg group">
                Request Private Cloud Demo
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
                  src={SysCarePrivateCloud}
                  className="w-full h-auto rounded-lg transition-transform duration-500 hover:scale-[1.02]"
                  alt="SysCare Private Cloud Infrastructure"
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
            Our Cloud Services
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
                      
                      {/* Courses Section for Mobile - Updated to open modal */}
                      <div className="mt-8">
                        <button
                          onClick={() => openCoursesModal(index)}
                          className="flex items-center justify-between w-full text-left mb-4 bg-[#103d5d] text-white hover:bg-[#0a2a42] transition-colors duration-300 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg"
                        >
                          <span>
                            View Available Courses ({service.courses.length})
                          </span>
                          <FiChevronRight className="ml-2" />
                        </button>
                      </div>
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
                <div className="space-y-4">
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
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#103d5d] mt-2">{services[activeTab].title}</h3>
                  </div>
                </div>

                {/* Service Graphic */}
                <div className="mb-8 p-4 flex justify-center">
                  <img 
                    src={services[activeTab].image}
                    alt={`${services[activeTab].title} infrastructure`}
                    className="w-[150px] h-[150px] object-cover rounded-lg"
                    style={{ maxWidth: '100%', height: 'auto' }}
                  />
                </div>

                <p className="text-[#5c6f87] text-lg mb-8 leading-relaxed">{services[activeTab].content}</p>

                {/* Courses Button - Updated to open modal */}
                <button
                  onClick={() => openCoursesModal(activeTab)}
                  className="flex items-center mb-8 text-white bg-[#103d5d] hover:bg-[#0a2a42] transition-colors duration-300 px-6 py-3 rounded-lg font-medium shadow-md hover:shadow-lg"
                >
                  <span>
                    View Available Courses ({services[activeTab].courses.length})
                  </span>
                  <FiChevronRight className="ml-2" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Courses Modal */}
      {showCoursesModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-95 opacity-0 animate-modal-in"
          >
            {/* Modal Header */}
            <div className="bg-[#103d5d] text-white p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold">
                {selectedServiceTitle} - Available Courses
              </h3>
              <button
                onClick={closeCoursesModal}
                className="text-white hover:text-[#a3d4ff] transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
              >
                <FiX className="text-2xl" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 max-h-[calc(90vh-80px)] overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedServiceCourses.map((course, courseIndex) => (
                  <div 
                    key={courseIndex}
                    className="bg-[#f9fbfe] border border-[#e1e9f2] rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-[#245684] group"
                  >
                    <div className="flex items-start mb-4">
                      <div className="w-10 h-10 bg-[#103d5d] rounded-lg flex items-center justify-center mr-4 flex-shrink-0 group-hover:bg-[#245684] transition-colors duration-300">
                        <span className="text-white font-bold text-sm">
                          {courseIndex + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-[#103d5d] group-hover:text-[#245684] transition-colors duration-300">
                        {course.name}
                      </h4>
                    </div>
                    <p className="text-[#5c6f87] text-sm leading-relaxed pl-14">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-24 bg-[#000000] px-8 sm:px-12 md:px-16 lg:px-24 xl:px-32">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8">Partner with SysCare IT Solutions today </h2>
          <p className="text-xl md:text-2xl text-[#c9d8eb] mb-10 max-w-3xl mx-auto">
            streamline your IT, strengthen your security, and scale your business with expert-managed services
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
        @keyframes modal-in {
          0% { 
            opacity: 0;
            transform: scale(0.95);
          }
          100% { 
            opacity: 1;
            transform: scale(1);
          }
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
        .animate-modal-in {
          animation: modal-in 0.3s ease-out forwards;
        }
        .bg-grid-white {
          background-image: linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px);
        }
      `}</style>
    </div>
  );
};

export default CloudPage;