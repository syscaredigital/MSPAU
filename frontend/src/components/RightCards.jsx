import { motion , useAnimation  } from "framer-motion";
import { useEffect } from "react";

{/* Right Horizontal Stacked Cards Section */}
const RightCards = () => {
  const controls = useAnimation();
  let lastScrollY = 0;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // scrolling down → move cards out
        controls.start({ x: 400, opacity: 0, transition: { duration: 0.6 } });
      } else {
        // scrolling up → move cards back in
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.6 } });
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  const cards = [
    {
      title: "Digital Transformation",
      desc: "Tailored solutions to modernize your business",
      gradient: "from-blue-500 to-blue-700",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      ),
    },
    {
      title: "Cybersecurity",
      desc: "Enterprise-grade protection and compliance",
      gradient: "from-purple-500 to-purple-700",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 6v.01M6 8v2a4 4 0 004 4h0a4 4 0 004-4V8m-6 0h0m6 0h0" />
      ),
    },
    {
      title: "Cloud Solutions",
      desc: "Scalable infrastructure for every business",
      gradient: "from-green-500 to-green-700",
      icon: (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h18M9 3v4m6-4v4M4 11h16M4 15h16M4 19h16" />
      ),
    },
  ];

  return (
    <motion.div
      animate={controls}
      initial={{ x: 0, opacity: 1 }}
      className="relative z-10 hidden lg:flex items-center space-x-6"
    >
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative w-72 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20 transform hover:-translate-y-2 transition-all duration-500"
        >
          <div className="p-6 text-center">
            <div className={`inline-block p-4 bg-gradient-to-br ${card.gradient} rounded-xl mb-4 shadow-lg`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {card.icon}
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
            <p className="text-white/80">{card.desc}</p>
          </div>
        </div>
      ))}
    </motion.div>
  );
};

export default RightCards;
