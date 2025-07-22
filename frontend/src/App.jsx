import React from 'react';
import Header from './components/header';
import Hero from './components/hero';

function App() {
  return (
    <div className="text-white relative overflow-x-hidden">
      {/* Particle Background */}
      <div id="particles-js" className="grid-pattern"></div>
      
      <Header />
      <div className="h-20"></div> {/* Spacer for fixed header */}
      <Hero />
      
      {/* Rest of your content would go here */}
    </div>
  );
}

export default App;