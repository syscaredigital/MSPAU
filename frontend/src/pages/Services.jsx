import React, { useState } from 'react';
import {
  LightningBoltIcon,
  ShieldCheckIcon,
  CloudIcon,
  ServerIcon,
  PhoneIcon,
  ChipIcon,
  AcademicCapIcon,
  ChartBarIcon,
  ArrowRightIcon,
  XIcon,
  CheckIcon
} from '@heroicons/react/outline';

const ServicesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 1,
      title: "IT Support",
      category: "support",
      icon: <LightningBoltIcon className="w-10 h-10 text-blue-400" />,
      description: "Comprehensive IT support services including helpdesk, remote assistance, and on-site support with guaranteed response times.",
      features: [
        "24/7 Helpdesk Support",
        "Remote Troubleshooting",
        "On-Site Technician Dispatch",
        "Hardware Maintenance",
        "Software Installation"
      ],
      stats: [
        { label: "Response Time", value: "<15min" },
        { label: "Resolution Rate", value: "98%" },
        { label: "Supported Clients", value: "500+" }
      ]
    },
    {
      id: 2,
      title: "Security Services",
      category: "security",
      icon: <ShieldCheckIcon className="w-10 h-10 text-green-400" />,
      description: "End-to-end cybersecurity solutions including threat detection, vulnerability assessments, and compliance management.",
      features: [
        "Network Security Monitoring",
        "Penetration Testing",
        "SIEM Implementation",
        "Compliance Management",
        "Security Awareness Training"
      ],
      stats: [
        { label: "Threats Blocked", value: "10M+" },
        { label: "Compliance", value: "100%" },
        { label: "Security Audits", value: "200+" }
      ]
    },
    {
      id: 3,
      title: "Cloud Solutions",
      category: "cloud",
      icon: <CloudIcon className="w-10 h-10 text-purple-400" />,
      description: "Migration, management, and optimization of cloud infrastructure across all major platforms.",
      features: [
        "Cloud Migration",
        "Multi-Cloud Management",
        "Cost Optimization",
        "Disaster Recovery",
        "Serverless Architecture"
      ],
      stats: [
        { label: "Uptime", value: "99.99%" },
        { label: "Cost Savings", value: "40% avg" },
        { label: "Deployments", value: "1000+" }
      ]
    },
    {
      id: 4,
      title: "Infrastructure & Automation",
      category: "infrastructure",
      icon: <ServerIcon className="w-10 h-10 text-yellow-400" />,
      description: "Design, implementation, and management of scalable IT infrastructure with intelligent automation.",
      features: [
        "Network Design & Implementation",
        "Infrastructure as Code",
        "CI/CD Pipelines",
        "Monitoring & Alerting",
        "Performance Optimization"
      ],
      stats: [
        { label: "Automation", value: "85%" },
        { label: "Incident Reduction", value: "60% ↓" },
        { label: "Efficiency Gain", value: "3x" }
      ]
    },
    {
      id: 5,
      title: "Internet & VOIP",
      category: "communication",
      icon: <PhoneIcon className="w-10 h-10 text-pink-400" />,
      description: "Reliable internet connectivity and enterprise-grade VOIP solutions for seamless communication.",
      features: [
        "Business Internet Solutions",
        "VOIP Phone Systems",
        "SD-WAN Implementation",
        "Unified Communications",
        "Video Conferencing"
      ],
      stats: [
        { label: "Call Quality", value: "99.9%" },
        { label: "Downtime", value: "<0.1%" },
        { label: "Cost Savings", value: "50% avg" }
      ]
    },
    {
      id: 6,
      title: "Digital Services",
      category: "digital",
      icon: <ChipIcon className="w-10 h-10 text-indigo-400" />,
      description: "Digital transformation services including web development, digital marketing, and automation.",
      features: [
        "Web & App Development",
        "Digital Marketing",
        "Process Automation",
        "Data Analytics",
        "E-Commerce Solutions"
      ],
      stats: [
        { label: "ROI", value: "300% avg" },
        { label: "Projects", value: "250+" },
        { label: "Automation", value: "90%" }
      ]
    },
    {
      id: 7,
      title: "IT Training",
      category: "training",
      icon: <AcademicCapIcon className="w-10 h-10 text-red-400" />,
      description: "Customized IT training programs to upskill your team in the latest technologies.",
      features: [
        "Certification Training",
        "Technical Workshops",
        "Security Awareness",
        "Cloud Computing",
        "DevOps Practices"
      ],
      stats: [
        { label: "Certifications", value: "500+" },
        { label: "Satisfaction", value: "98%" },
        { label: "Corporate Clients", value: "200+" }
      ]
    },
    {
      id: 8,
      title: "CRM & ERP Solutions",
      category: "business",
      icon: <ChartBarIcon className="w-10 h-10 text-teal-400" />,
      description: "Implementation and customization of CRM and ERP systems to streamline business operations.",
      features: [
        "Salesforce Implementation",
        "Microsoft Dynamics",
        "SAP Integration",
        "Custom Workflows",
        "Data Migration"
      ],
      stats: [
        { label: "Efficiency Gain", value: "50% ↑" },
        { label: "Implementation Time", value: "30 days avg" },
        { label: "Clients", value: "150+" }
      ]
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(service => service.category === activeTab);

  const openServiceModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            Our Digital Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
            Cutting-edge solutions for your business needs
          </p>
        </div>
      </div>

      {/* Services Navigation */}
      <div className="sticky top-0 z-10 bg-gray-800/80 backdrop-blur-sm border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto py-4 space-x-4 scrollbar-hide">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                activeTab === 'all' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
              }`}
            >
              All Services
            </button>
            {[
              { id: 'support', name: 'IT Support' },
              { id: 'security', name: 'Security' },
              { id: 'cloud', name: 'Cloud' },
              { id: 'infrastructure', name: 'Infrastructure' },
              { id: 'communication', name: 'Internet/VOIP' },
              { id: 'digital', name: 'Digital' },
              { id: 'training', name: 'Training' },
              { id: 'business', name: 'CRM/ERP' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full whitespace-nowrap font-medium transition-colors ${
                  activeTab === tab.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-700/50 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div 
              key={service.id}
              onClick={() => openServiceModal(service)}
              className="group relative bg-gray-800/50 border border-gray-700 rounded-xl p-6 transition-all hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 rounded-xl transition-opacity"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 flex items-center justify-center bg-gray-700 rounded-lg mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="flex items-center text-blue-400 font-medium">
                  <span>Learn more</span>
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={closeServiceModal}
          ></div>
          
          <div className="flex items-center justify-center min-h-screen p-4">
            <div className="relative bg-gray-800 border border-gray-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <button
                onClick={closeServiceModal}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-700 text-gray-300 hover:text-white hover:bg-gray-600 transition-colors"
              >
                <XIcon className="w-5 h-5" />
              </button>
              
              <div className="p-6 sm:p-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-gray-700 rounded-lg">
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                    <p className="text-gray-400 mt-2">{selectedService.description}</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                    Key Features
                  </h3>
                  <ul className="space-y-3">
                    {selectedService.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckIcon className="flex-shrink-0 w-5 h-5 text-green-400 mt-0.5 mr-3" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-gray-700">
                    Performance Metrics
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedService.stats.map((stat, index) => (
                      <div key={index} className="bg-gray-700/30 border border-gray-700 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                          {stat.value}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-gray-700">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center">
                    Request Service Consultation
                    <ArrowRightIcon className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 border-t border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
              Our experts will design a customized solution tailored to your business needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg font-medium text-white hover:from-blue-500 hover:to-purple-500 transition-all flex items-center justify-center">
                Get Free Assessment
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </button>
              <button className="px-6 py-3 bg-gray-700 rounded-lg font-medium text-white hover:bg-gray-600 transition-all flex items-center justify-center">
                Contact Sales
                <PhoneIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;