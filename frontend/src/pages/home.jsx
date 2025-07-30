 import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import AboutSection from "../components/aboutsection";
import ServicesSection from "../components/servicesection";
export  default function Home () {
    return (
        <>
        <div className="text-white relative overflow-x-hidden">
{/* Particle Background */}
<div id="particles-js" className="grid-pattern"></div>
<Header/>
        
         <div className="h-20"></div> {/* Spacer for fixed header */}
        
        <Hero />
        </div>
        
        <AboutSection />
        <ServicesSection />
        </>
    )
}