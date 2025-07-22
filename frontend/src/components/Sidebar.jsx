import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed md:sticky top-0 left-0 h-screen w-64 bg-gray-900 text-white p-6 hidden md:flex flex-col z-10">
      <h2 className="text-2xl font-bold mb-10">SysCare</h2>
      <nav className="flex flex-col gap-5 text-sm">
        <a href="#company" className="hover:text-indigo-400">About Our Company</a>
        <a href="#vision" className="hover:text-indigo-400">Our Vision</a>
        <a href="#mission" className="hover:text-indigo-400">Our Mission</a>
        <a href="#team" className="hover:text-indigo-400">Our Team</a>
        <a href="#contact" className="hover:text-indigo-400">Contact</a>
      </nav>
    </aside>
  );
};

export default Sidebar;

