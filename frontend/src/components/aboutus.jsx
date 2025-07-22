import React from "react";

const teamMembers = [
  { name: "Alex", role: "Solutions Architect", img: "https://i.pravatar.cc/150?img=10" },
  { name: "Maya", role: "Network Engineer", img: "https://i.pravatar.cc/150?img=11" },
  { name: "John", role: "Security Analyst", img: "https://i.pravatar.cc/150?img=12" },
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-800 text-white px-4 py-12">
      <div className="max-w-6xl mx-auto backdrop-blur-md bg-white/10 p-10 rounded-3xl shadow-2xl border border-white/10">
        
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">About Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Your trusted partner in IT Managed Services & Digital Transformation.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <img
            src="https://source.unsplash.com/600x400/?technology,office"
            alt="Our Mission"
            className="rounded-xl shadow-lg border border-white/20"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At TechServe MSP, our mission is to empower businesses through
              reliable, scalable, and secure IT solutions. We help organizations
              stay ahead in a fast-evolving tech world by offering 24/7 support,
              cloud integration, and cybersecurity solutions tailored to their needs.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Professionals with years of experience in managing complex IT ecosystems.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-xl p-6 border border-white/10 shadow-md hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-20 h-20 mx-auto rounded-full border-4 border-white/30 mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-gray-400 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white/5 rounded-2xl p-10 text-center border border-white/10">
          <h2 className="text-3xl font-bold mb-4">Let’s Work Together</h2>
          <p className="text-gray-300 mb-6 max-w-lg mx-auto">
            Get in touch with us today and discover how we can support your IT needs.
          </p>
          <button className="bg-indigo-600 hover:bg-indigo-700 transition duration-300 text-white font-semibold py-3 px-6 rounded-full shadow-lg">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
