import React, { useState } from "react";
import { Link } from "react-router-dom";

const ServicesMarquee = () => {
  const [pauseMarquee, setPauseMarquee] = useState(false);

  const services = [
    { name: "SysCare Private Cloud", link: "/SysCare-Private-Cloud" },
    { name: "Hosted Services", link: "/services/Hosted-Services" },
    { name: "Service Desk", link: "/services/service-desk" },
    { name: "Managed IT Services", link: "/services/managed-it" },
    { name: "Connectivity", link: "/services/connectivity" },
    { name: "VoIP & Video", link: "/services/voip-video" },
    { name: "Design & Dev", link: "/services/design-dev" },
    { name: "Digital Marketing", link: "/services/digital-marketing" },
    { name: "Cybersecurity Consultancy Services", link: "/services/cybersecurity-consultancy" },
    { name: "Managed Security Services", link: "/services/managed-security" },
    { name: "IT Infra Projects", link: "/services/infra-projects" },
    { name: "Development & Automation", link: "/services/dev-automation" },
    { name: "Security", link: "/services/security" },
    { name: "Cloud", link: "/services/cloud" },
    { name: "Small Business", link: "/services/smb" },
    { name: "Enterprise", link: "/services/enterprise" },
  ];

  return (
    <div
      className="relative bottom-10 left-0 w-full z-30 pointer-events-auto"
      onMouseEnter={() => setPauseMarquee(true)}
      onMouseLeave={() => setPauseMarquee(false)}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-r from-[#103d5d] to-[#245684]/70 backdrop-blur-md shadow-2xl">
          <div
            className="flex w-max animate-marquee"
            style={{ animationPlayState: pauseMarquee ? "paused" : "running" }}
          >
            {/* First full list */}
            {services.map((service, idx) => (
              <Link
                key={`first-${idx}`}
                to={service.link}
                className="mx-4 my-2 inline-flex items-center px-4 py-2 text-white rounded-lg bg-white/10 border border-white/30
                           hover:bg-white/20 hover:shadow-xl transition-all duration-300"
              >
                {service.name}
              </Link>
            ))}
            {/* Second full list for seamless loop */}
            {services.map((service, idx) => (
              <Link
                key={`second-${idx}`}
                to={service.link}
                className="mx-4 my-2 inline-flex items-center px-4 py-2 text-white rounded-lg bg-white/10 border border-white/30
                           hover:bg-white/20 hover:shadow-xl transition-all duration-300"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesMarquee;
