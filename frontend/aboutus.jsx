import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white font-sans px-4 py-10">
      <motion.div
        className="max-w-6xl mx-auto backdrop-blur-lg bg-white/10 p-10 rounded-3xl shadow-xl border border-white/20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">About Us</h1>
          <p className="text-gray-300 text-lg">
            Empowering businesses with innovative IT managed services.
          </p>
        </div>

        {/* Mission Section */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src="https://source.unsplash.com/600x400/?technology,team"
            alt="Our Mission"
            className="rounded-2xl shadow-lg border border-white/10"
          />
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              At MSP Solutions, our mission is to simplify technology
              management and support, enabling businesses to scale confidently.
              We combine cutting-edge tools with expert support to ensure
              seamless digital transformation.
            </p>
          </div>
        </motion.div>

        {/* Our Team Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold mb-6">Meet the Team</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            A passionate group of engineers, strategists, and technologists.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Alex", "Maya", "John"].map((name, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-6 shadow-md border border-white/10"
              >
                <img
                  src={`https://i.pravatar.cc/150?img=${i + 10}`}
                  alt={name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 border-4 border-white/20"
                />
                <h3 className="text-lg font-semibold text-white">{name}</h3>
                <p className="text-gray-400">Tech Specialist</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-white/5 py-12 px-6 rounded-2xl border border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Ready to elevate your IT infrastructure? Let’s discuss how we can
            support your business goals.
          </p>
          <button className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition duration-300">
            Contact Us
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
