import React from 'react';
import Header from './components/header';
import Hero from './components/hero';
 import AboutUs from './pages/aboutus.jsx';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from  './pages/home.jsx';

function App() {
  return (
    // <div className="text-white relative overflow-x-hidden">
    //   {/* Particle Background */}
    //   <div id="particles-js" className="grid-pattern"></div>
     
    //   <Header />
    //   <div className="h-20"></div> {/* Spacer for fixed header */}
    //   <Hero />
     
    //   {/* Rest of your content would go here */}

    //   <div className="relative">
    //   <Sidebar />
    //   <ThemeToggle />
    //   <AboutUs />
    // </div>

    // </div>

     
      //<AboutUs />
     <div>
          <BrowserRouter>
          <Routes>
            <Route index element = {<Home />} ></Route>
            <Route path='/home'  element = {<Home />}></Route>
            <Route path='/about-us'  element = {<AboutUs />}></Route>
          </Routes>
          </BrowserRouter>
     </div>

  );
}
 
export default App;