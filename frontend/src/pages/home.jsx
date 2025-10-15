import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation.jsx';
import VideoHero from '../components/hero.jsx';
import Footer from '../components/footer.jsx';
import aboutus_video from '../assets/website_video/aboutus_video.mp4';

// Add CSS animations and background styles
const animationStyles = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    25% {
      transform: translate(10px, -10px) rotate(90deg);
    }
    50% {
      transform: translate(0, -20px) rotate(180deg);
    }
    75% {
      transform: translate(-10px, -10px) rotate(270deg);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  @keyframes bounceGentle {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }

  @keyframes nodePulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.6;
      box-shadow: 0 0 20px currentColor;
    }
    50% {
      transform: scale(1.3);
      opacity: 1;
      box-shadow: 0 0 30px currentColor;
    }
  }

  @keyframes connectionFlow {
    0% {
      stroke-dashoffset: 100;
      opacity: 0.2;
    }
    50% {
      opacity: 0.6;
    }
    100% {
      stroke-dashoffset: 0;
      opacity: 0.2;
    }
  }

  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes particleFloat {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.3;
    }
    25% {
      transform: translate(15px, -15px) scale(1.1);
      opacity: 0.5;
    }
    50% {
      transform: translate(0, -25px) scale(1.2);
      opacity: 0.7;
    }
    75% {
      transform: translate(-15px, -15px) scale(1.1);
      opacity: 0.5;
    }
  }

  @keyframes gridMove {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }

  @keyframes scrollLeft {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(calc(-200px * 21));
    }
  }

  @keyframes scrollRight {
    0% {
      transform: translateX(calc(-200px * 21));
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes circuitMove {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 100px 100px;
    }
  }

  @keyframes techFloat {
    0%, 100% {
      transform: translate(0, 0) rotate(0deg);
      opacity: 0.1;
    }
    25% {
      transform: translate(20px, -20px) rotate(90deg);
      opacity: 0.15;
    }
    50% {
      transform: translate(0, -40px) rotate(180deg);
      opacity: 0.2;
    }
    75% {
      transform: translate(-20px, -20px) rotate(270deg);
      opacity: 0.15;
    }
  }

  @keyframes dataPulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.2;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.4;
    }
  }

  @keyframes dataFlow {
    0% {
      background-position: -100px 0;
    }
    100% {
      background-position: 100px 0;
    }
  }

  @keyframes gridShift {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(50px, 50px);
    }
  }
  
  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.8s ease-out forwards;
  }
  
  .animate-float {
    animation: float 3s ease-in-out infinite;
  }
  
  .animate-pulse-slow {
    animation: pulse 2s ease-in-out infinite;
  }
  
  .animate-pulse-slower {
    animation: pulse 3s ease-in-out infinite;
  }
  
  .animate-bounce-gentle {
    animation: bounceGentle 2s infinite ease-in-out;
  }

  .animate-node-pulse {
    animation: nodePulse 4s ease-in-out infinite;
  }

  .animate-connection-flow {
    animation: connectionFlow 3s linear infinite;
  }

  .animate-gradient-shift {
    animation: gradientShift 8s ease infinite;
    background-size: 200% 200%;
  }

  .animate-particle-float {
    animation: particleFloat 6s ease-in-out infinite;
  }
  
  .service-card {
    transition: all 0.3s ease;
  }
  
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .stagger-animation > * {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
  }
  
  .stagger-animation > *:nth-child(1) { animation-delay: 0.1s; }
  .stagger-animation > *:nth-child(2) { animation-delay: 0.2s; }
  .stagger-animation > *:nth-child(3) { animation-delay: 0.3s; }
  .stagger-animation > *:nth-child(4) { animation-delay: 0.4s; }
  .stagger-animation > *:nth-child(5) { animation-delay: 0.5s; }
  .stagger-animation > *:nth-child(6) { animation-delay: 0.6s; }
  .stagger-animation > *:nth-child(7) { animation-delay: 0.7s; }
  .stagger-animation > *:nth-child(8) { animation-delay: 0.8s; }
  
  .testimonial-slide {
    transition: transform 0.5s ease-in-out;
  }

  /* Enhanced background styles */
  .cyber-video-container {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
  }
  
  .cyber-video-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(16, 61, 93, 0.7), rgba(36, 86, 132, 0.7));
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    z-index: 2;
  }
  
  .cyber-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  /* Enhanced Particles Background Container */
  .particles-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
    background: linear-gradient(135deg, #103d5d 0%, #1a4a72 25%, #245684 50%, #A91101 100%);
  }

  /* Animated Gradient Mesh Overlay */
  .gradient-mesh {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 15% 20%, rgba(16, 61, 93, 0.4) 0%, transparent 50%),
      radial-gradient(circle at 85% 30%, rgba(26, 74, 114, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 50% 80%, rgba(36, 86, 132, 0.5) 0%, transparent 50%),
      radial-gradient(circle at 70% 70%, rgba(169, 17, 1, 0.2) 0%, transparent 50%),
      radial-gradient(circle at 25% 40%, rgba(16, 61, 93, 0.3) 0%, transparent 50%);
    animation: gradientShift 15s ease infinite;
    background-size: 200% 200%;
  }

  /* Floating Geometric Shapes */
  .floating-shapes {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .shape {
    position: absolute;
    opacity: 0.1;
    animation: float 20s infinite linear;
  }

  .shape-1 {
    width: 100px;
    height: 100px;
    background: linear-gradient(45deg, #103d5d, #1a4a72);
    top: 10%;
    left: 5%;
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    animation-delay: 0s;
  }

  .shape-2 {
    width: 150px;
    height: 150px;
    background: linear-gradient(45deg, #245684, #A91101);
    top: 60%;
    right: 10%;
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    animation-delay: 5s;
    animation-duration: 25s;
  }

  .shape-3 {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg, #A91101, #103d5d);
    bottom: 20%;
    left: 20%;
    border-radius: 50% 50% 50% 70% / 50% 50% 70% 60%;
    animation-delay: 10s;
    animation-duration: 30s;
  }

  .shape-4 {
    width: 120px;
    height: 120px;
    background: linear-gradient(45deg, #1a4a72, #245684);
    top: 30%;
    right: 20%;
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    animation-delay: 15s;
    animation-duration: 35s;
  }

  /* Animated Grid Lines */
  .grid-lines {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridMove 20s linear infinite;
  }

  /* Enhanced Particles */
  .particle {
    position: absolute;
    border-radius: 50%;
    animation: particleFloat 8s ease-in-out infinite;
  }

  .particle-0 {
    background: rgba(16, 61, 93, 0.3);
    animation-duration: 6s;
  }

  .particle-1 {
    background: rgba(26, 74, 114, 0.25);
    animation-duration: 8s;
    animation-delay: 1s;
  }

  .particle-2 {
    background: rgba(36, 86, 132, 0.35);
    animation-duration: 10s;
    animation-delay: 2s;
  }

  .particle-3 {
    background: rgba(169, 17, 1, 0.2);
    animation-duration: 7s;
    animation-delay: 3s;
  }

  /* Enhanced Connection Nodes */
  .node {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    animation: nodePulse 4s ease-in-out infinite;
  }

  .node-0 {
    background: rgba(16, 61, 93, 0.6);
    box-shadow: 0 0 20px rgba(16, 61, 93, 0.4);
  }

  .node-1 {
    background: rgba(26, 74, 114, 0.5);
    box-shadow: 0 0 20px rgba(26, 74, 114, 0.3);
  }

  .node-2 {
    background: rgba(36, 86, 132, 0.7);
    box-shadow: 0 0 20px rgba(36, 86, 132, 0.5);
  }

  .node-3 {
    background: rgba(169, 17, 1, 0.4);
    box-shadow: 0 0 20px rgba(169, 17, 1, 0.3);
  }

  .connection {
    stroke-width: 1;
    stroke-dasharray: 5;
    animation: connectionFlow 4s linear infinite;
  }

  .connection-0 {
    stroke: rgba(16, 61, 93, 0.3);
  }

  .connection-1 {
    stroke: rgba(26, 74, 114, 0.25);
  }

  .connection-2 {
    stroke: rgba(36, 86, 132, 0.4);
  }

  .connection-3 {
    stroke: rgba(169, 17, 1, 0.2);
  }
    /*about us Add these to your existing animationStyles */
@keyframes iconFloat {
  0%, 100% {
    transform: translate(0, 0) rotate(0deg) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translate(15px, -20px) rotate(5deg) scale(1.1);
    opacity: 0.4;
  }
  50% {
    transform: translate(-10px, -30px) rotate(-5deg) scale(1.2);
    opacity: 0.35;
  }
  75% {
    transform: translate(-20px, -20px) rotate(5deg) scale(1.1);
    opacity: 0.4;
  }
}

.animate-icon-float {
  animation: iconFloat 12s ease-in-out infinite;
}

@keyframes circuitGlow {
  0%, 100% {
    stroke-dashoffset: 100;
    opacity: 0.2;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-circuit-glow {
  animation: circuitGlow 6s linear infinite;
}

/* Smooth fade-in for stats */
@keyframes smoothFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-smooth-fade-in {
  animation: smoothFadeIn 0.8s ease-out forwards;
}

  /* Section-specific backgrounds */
  .services-background {
    position: relative;
    background: 
      linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%),
      radial-gradient(circle at 20% 80%, rgba(16, 61, 93, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(169, 17, 1, 0.03) 0%, transparent 50%);
    background-blend-mode: overlay, normal;
  }

  .services-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(135deg, rgba(255, 255, 255, 0.92) 0%, rgba(248, 250, 252, 0.92) 100%),
      radial-gradient(circle at 20% 30%, rgba(16, 61, 93, 0.05) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(36, 86, 132, 0.05) 0%, transparent 50%);
    z-index: 1;
  }

  .services-content {
    position: relative;
    z-index: 2;
  }

  /* Enhanced Industries Background */
  .industries-background {
    background: 
      linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%),
      radial-gradient(circle at 10% 20%, rgba(16, 61, 93, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(36, 86, 132, 0.03) 0%, transparent 50%);
    position: relative;
    overflow: hidden;
  }

  .industries-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(16, 61, 93, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(36, 86, 132, 0.03) 0%, transparent 50%);
  }

  /* Animated Circuit Board Background */
  .circuit-board {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.1;
    background-image: 
      linear-gradient(90deg, transparent 79px, #103d5d 79px, #103d5d 81px, transparent 81px),
      linear-gradient(#103d5d 1px, transparent 1px);
    background-size: 100px 100px;
    background-position: 0 0;
    animation: circuitMove 20s linear infinite;
  }

  /* Floating Tech Icons */
  .tech-icons-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .tech-icon {
    position: absolute;
    font-size: 1.5rem;
    opacity: 0.1;
    animation: techFloat 15s ease-in-out infinite;
    color: #103d5d;
  }

  /* Geometric Pattern Overlay */
  .geometric-pattern {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        rgba(16, 61, 93, 0.02) 10px,
        rgba(16, 61, 93, 0.02) 20px
      ),
      repeating-linear-gradient(
        -45deg,
        transparent,
        transparent 10px,
        rgba(36, 86, 132, 0.02) 10px,
        rgba(36, 86, 132, 0.02) 20px
      );
  }

  /* Data Flow Animation */
  .data-flow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .data-node {
    position: absolute;
    width: 6px;
    height: 6px;
    background: #103d5d;
    border-radius: 50%;
    opacity: 0.3;
    animation: dataPulse 4s ease-in-out infinite;
  }

  .data-connection {
    position: absolute;
    height: 1px;
    background: linear-gradient(90deg, transparent, #103d5d, transparent);
    opacity: 0.2;
    animation: dataFlow 3s linear infinite;
  }

  /* Industry Grid Background */
  .industry-grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      linear-gradient(90deg, rgba(16, 61, 93, 0.03) 1px, transparent 1px),
      linear-gradient(rgba(16, 61, 93, 0.03) 1px, transparent 1px);
    background-size: 50px 50px;
    animation: gridShift 30s linear infinite;
  }

  /* Enhanced Industries List Container */
  .industries-list-container {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 
      0 8px 32px rgba(16, 61, 93, 0.1),
      0 2px 8px rgba(16, 61, 93, 0.05),
      inset 0 1px 0 rgba(255, 255, 255, 0.8);
  }

  /* Industry Item Hover Effects */
  .industry-item {
    transition: all 0.3s ease;
    border-left: 3px solid transparent;
  }

  .industry-item:hover {
    border-left-color: #103d5d;
    background: rgba(16, 61, 93, 0.05);
    transform: translateX(5px);
  }

  .industry-dot {
    transition: all 0.3s ease;
  }

  .industry-item:hover .industry-dot {
    transform: scale(1.5);
    background: #103d5d;
    box-shadow: 0 0 10px rgba(16, 61, 93, 0.5);
  }

  .stats-background {
    background: linear-gradient(135deg, #103d5d 0%, #1a4a72 50%, #245684 100%);
    position: relative;
    overflow: hidden;
  }

  .stats-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 70% 60%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  }

  /* Testimonials Section Background */
  .testimonials-background {
    background: linear-gradient(135deg, #245684 0%, #1a4a72 50%, #103d5d 100%);
    position: relative;
    overflow: hidden;
  }

  .testimonials-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
  }

  /* Testimonials Particles */
  .testimonials-particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
  }

  .testimonial-particle {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    animation: particleFloat 8s ease-in-out infinite;
  }

  .testimonial-particle-2 {
    background: rgba(255, 255, 255, 0.08);
    animation-duration: 10s;
    animation-delay: 1s;
  }

  .testimonial-particle-3 {
    background: rgba(255, 255, 255, 0.06);
    animation-duration: 12s;
    animation-delay: 2s;
  }

  .downloads-background {
    background: 
      linear-gradient(135deg, #ffffff 0%, #f8fafc 100%),
      radial-gradient(circle at 10% 20%, rgba(16, 61, 93, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(169, 17, 1, 0.02) 0%, transparent 50%);
    position: relative;
    overflow: hidden;
  }

  .downloads-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 10% 20%, rgba(16, 61, 93, 0.02) 0%, transparent 50%),
      radial-gradient(circle at 90% 80%, rgba(169, 17, 1, 0.02) 0%, transparent 50%);
  }

  /* Dual Line Partner Carousel Styles */
  .partners-background {
    background: 
      linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%),
      radial-gradient(circle at 20% 30%, rgba(26, 74, 114, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(36, 86, 132, 0.03) 0%, transparent 50%);
    position: relative;
    overflow: hidden;
  }

  .partners-background::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 30%, rgba(26, 74, 114, 0.03) 0%, transparent 50%),
      radial-gradient(circle at 80% 70%, rgba(36, 86, 132, 0.03) 0%, transparent 50%);
  }

  .dual-carousel-container {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding: 2rem 0;
  }

  .logo-track {
    display: flex;
    gap: 3rem;
    margin-bottom: 2rem;
  }

  .logo-track-top {
    animation: scrollLeft 60s linear infinite;
  }

  .logo-track-bottom {
    animation: scrollRight 50s linear infinite;
  }

  .logo-track:hover {
    animation-play-state: paused;
  }

  .logo-item {
    flex: 0 0 160px;
    height: 90px;
    background: white;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
  }

  .logo-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
    border-color: #103d5d;
  }

  .logo-img {
    max-width: 100%;
    max-height: 45px;
    width: auto;
    height: auto;
    filter: none;
    opacity: 0.9;
    transition: all 0.3s ease;
  }

  .logo-item:hover .logo-img {
    filter: none;
    opacity: 1;
    transform: scale(1.1);
  }

  /* Downloads Section Styles */
  .brochure-card {
    background: white;
    border-radius: 16px;
    padding: 2rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #e2e8f0;
    text-align: center;
    height: 100%;
  }

  .brochure-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
    border-color: #103d5d;
  }

  .brochure-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    background: linear-gradient(135deg, #103d5d, #245684);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 2rem;
  }

  .download-btn {
    background: linear-gradient(135deg, #103d5d, #245684);
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 8px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .download-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(16, 61, 93, 0.3);
    background: linear-gradient(135deg, #245684, #103d5d);
  }

  .file-size {
    color: #6b7280;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }

  /* Fade edges */
  .carousel-fade {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    pointer-events: none;
    z-index: 2;
  }

  .carousel-fade-left {
    left: 0;
    background: linear-gradient(90deg, #f8fafc 0%, transparent 100%);
  }

  .carousel-fade-right {
    right: 0;
    background: linear-gradient(270deg, #f8fafc 0%, transparent 100%);
  }

  /* Content wrapper to ensure readability */
  .content-wrapper {
    position: relative;
    z-index: 1;
  }

  /* Ensure text remains readable */
  .text-content {
    position: relative;
    z-index: 2;
  }

  /* About Section Styles */
  .about-section {
    position: relative;
  }

  .video-player-container {
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }

  .video-player {
    width: 100%;
    height: auto;
    display: block;
    border-radius: 14px;
  }

  .play-button {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.9);
  }

  .play-button:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
    background: white;
  }

  .play-icon {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 15px 0 15px 26px;
    border-color: transparent transparent transparent #245684;
    margin-left: 5px;
  }

  /* Enhanced text shadows for better readability */
  .text-content h2 {
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  }

  .text-content p {
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  }

  /* Responsive */
  @media (max-width: 768px) {
    .logo-track {
      gap: 2rem;
      margin-bottom: 1.5rem;
    }
    
    .logo-item {
      flex: 0 0 120px;
      height: 70px;
      padding: 1rem;
    }
    
    .logo-img {
      max-height: 35px;
    }
    
    .carousel-fade {
      width: 50px;
    }

    .brochure-card {
      padding: 1.5rem;
    }

    .brochure-icon {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
    }

    .services-background {
      background-attachment: scroll;
    }

    .shape-1,
    .shape-2,
    .shape-3,
    .shape-4 {
      display: none;
    }

    .tech-icon {
      font-size: 1rem;
    }
    
    .industries-list-container {
      backdrop-filter: none;
      background: rgba(255, 255, 255, 0.98);
    }

    .about-section {
      padding: 3rem 1rem;
    }
    
    .video-player-container {
      margin-top: 2rem;
    }
    
    .play-button {
      width: 60px;
      height: 60px;
    }
    
    .play-icon {
      border-width: 12px 0 12px 20px;
      margin-left: 4px;
    }
  }
`;

const HomePage = () => {
  const [showAllServices, setShowAllServices] = useState(false);
  const [stats, setStats] = useState([
    { id: 1, value: 0, target: 12, label: "Years Experience" },
    { id: 2, value: 0, target: 150, label: "Satisfied Clients" },
    { id: 3, value: 0, target: 100, label: "Successful Projects" },
    { id: 4, value: 0, target: 20, label: "Employees" }
  ]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [particles, setParticles] = useState([]);
  const [testimonialParticles, setTestimonialParticles] = useState([]);
  
  // Video states
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [volume] = useState(0.7);
  const videoRef = useRef(null);

  // Industries background states
  const [techIconPositions, setTechIconPositions] = useState([]);
  const [dataNodes, setDataNodes] = useState([]);
  const [dataConnections, setDataConnections] = useState([]);
  const techIcons = ['💻', '🔒', '☁️', '📱', '🌐', '⚡', '🔧', '📊', '🚀', '🛡️', '🔗', '💾'];

  // All Services Data
  const allServices = [
    {
      id: 1,
      title: "Cloud",
      description: "Comprehensive cloud services including migration, management, and optimization for your business.",
      icon: "☁️"
    },
    {
      id: 2,
      title: "IT Security",
      description: "Advanced security solutions to protect your business from cyber threats and data breaches.",
      icon: "🔒"
    },
    {
      id: 3,
      title: "IT Support",
      description: "24/7 IT support services to keep your business running smoothly without interruptions.",
      icon: "💻"
    },
    {
      id: 4,
      title: "Projects & Automation",
      description: "Custom IT projects and automation solutions to streamline your operations and increase efficiency.",
      icon: "⚙️"
    },
    {
      id: 5,
      title: "Internet & VOIP",
      description: "Reliable internet and VOIP solutions for seamless communication and connectivity.",
      icon: "📶"
    },
    {
      id: 6,
      title: "IT Training",
      description: "Professional IT training to upskill your team and maximize productivity and security awareness.",
      icon: "🎓"
    },
    {
      id: 7,
      title: "Digital Services",
      description: "Transform your business with our cutting-edge digital services and digital transformation strategies.",
      icon: "🌐"
    },
    {
      id: 8,
      title: "CRM & ERP Solutions",
      description: "Integrated CRM and ERP solutions to optimize your business processes and customer relationships.",
      icon: "📊"
    }
  ];

  // Partner Logos Data - 42 logos split into two groups using assets folder
  const partnerLogosLine1 = [
    { id: 1, name: "Microsoft", image: "/Partner_logos/Access4.png" },
    { id: 2, name: "Cisco", image: "/Partner_logos/acronis.png" },
    { id: 3, name: "Dell", image: "/Partner_logos/altaro.png" },
    { id: 4, name: "HP", image: "/Partner_logos/aws.png" },
    { id: 5, name: "Lenovo", image: "/Partner_logos/Azure.png" },
    { id: 6, name: "IBM", image: "/Partner_logos/Cisco.png" },
    { id: 7, name: "Oracle", image: "/Partner_logos/citrix.png" },
    { id: 8, name: "VMware", image: "/Partner_logos/comvergence.png" },
    { id: 9, name: "Amazon Web Services", image: "/Partner_logos/Datastor.png" },
    { id: 10, name: "Google Cloud", image: "/Partner_logos/DickerData.jpg" },
    { id: 11, name: "Azure", image: "/Partner_logos/DellEMC.png" },
    { id: 12, name: "Fortinet", image: "/Partner_logos/Dropbox_For_Business.png" },
    { id: 13, name: "Palo Alto", image: "/Partner_logos/Duo.png" },
    { id: 14, name: "Sophos", image: "/Partner_logos/exclaimer.png" },
    { id: 15, name: "McAfee", image: "/Partner_logos/Exetel.png" },
    { id: 16, name: "Symantec", image: "/Partner_logos/gemalto.png" },
    { id: 17, name: "Check Point", image: "/Partner_logos/GFI.png" },
    { id: 18, name: "SonicWall", image: "/Partner_logos/Godaddy.jpg" },
    { id: 19, name: "Ubiquiti", image: "/Partner_logos/Hills.png" },
    { id: 20, name: "Aruba", image: "/Partner_logos/HP.png" },
    { id: 21, name: "Meraki", image: "/Partner_logos/HPE.png" }
  ];

  const partnerLogosLine2 = [
    { id: 22, name: "SAP", image: "/Partner_logos/hyper_v.png" },
    { id: 23, name: "Salesforce", image: "/Partner_logos/Ingram.png" },
    { id: 24, name: "Adobe", image: "/Partner_logos/Leader_Computers.png" },
    { id: 25, name: "Autodesk", image: "/Partner_logos/Lenovo.png" },
    { id: 26, name: "Intel", image: "/Partner_logos/MailStore.png" },
    { id: 27, name: "AMD", image: "/Partner_logos/McAfee.png" },
    { id: 28, name: "NVIDIA", image: "/Partner_logos/Microsoft1.png" },
    { id: 29, name: "Western Digital", image: "/Partner_logos/NextDC.png" },
    { id: 30, name: "Seagate", image: "/Partner_logos/Pristine.png" },
    { id: 31, name: "Toshiba", image: "/Partner_logos/QNAP.png" },
    { id: 32, name: "Samsung", image: "/Partner_logos/Solar_Winds.jpg" },
    { id: 33, name: "Apple", image: "/Partner_logos/Sonicwall.png" },
    { id: 34, name: "Canon", image: "/Partner_logos/storagecraft.jpg" },
    { id: 35, name: "Epson", image: "/Partner_logos/syantec.png" },
    { id: 36, name: "Brother", image: "/Partner_logos/Synnex.png" },
    { id: 37, name: "Logitech", image: "/Partner_logos/TechData.png" },
    { id: 38, name: "Poly", image: "/Partner_logos/trentmicro.png" },
    { id: 39, name: "Jabra", image: "/Partner_logos/veeam.png" },
    { id: 40, name: "APC", image: "/Partner_logos/vmware.jpg" },
    { id: 41, name: "CyberPower", image: "/Partner_logos/vmware.jpg" }
  ];

  // Brochures Data
  const brochures = [
    {
      id: 1,
      title: "SysCare Cloud Brochure 2017v3",
      description: "A complete guide to our secure, scalable, and reliable cloud solutions.",
      fileSize: "1.4 MB",
      downloadUrl: "/brochures/SysCare_Cloud_Brochure-2017v3.pdf",
      icon: "☁️"
    },
    {
      id: 2,
      title: "SysCare Service Portfolio 2017v2",
      description: "An overview of our managed IT and cybersecurity services for modern businesses.",
      fileSize: "1.1 MB",
      downloadUrl: "/brochures/SysCare_Service_Portfolio_2017v2.pdf",
      icon: "🔐"
    },
    {
      id: 3,
      title: "SysCare MailStore Archival Brochure 2018v2",
      description: "Insight into our efficient and compliant email archiving solutions.",
      fileSize: "1.8 MB",
      downloadUrl: "/brochures/SysCare_MailStore_Archival_Brochure_2018v2.pdf",
      icon: "📄"
    }
  ];

  

  // Duplicate logos for infinite scroll effect
  const duplicatedLogosLine1 = [...partnerLogosLine1, ...partnerLogosLine1, ...partnerLogosLine1];
  const duplicatedLogosLine2 = [...partnerLogosLine2, ...partnerLogosLine2, ...partnerLogosLine2];

  // Get first 4 services for initial display
  const initialServices = allServices.slice(0, 4);
  const additionalServices = allServices.slice(4);

  // Testimonials Data
  const testimonials = [
    {
      id: 1,
      quote: "SysCare transformed our IT infrastructure completely. Their team is knowledgeable and responsive.",
      author: "Sarah Johnson",
      company: "TechForward Inc.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 2,
      quote: "The cybersecurity solutions they implemented gave us peace of mind we didn't have before.",
      author: "Michael Chen",
      company: "SecureData LLC",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 3,
      quote: "Excellent cloud migration services. We experienced minimal downtime thanks to their planning.",
      author: "Emily Rodriguez",
      company: "CloudNine Solutions",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    }
  ];

  // Video control functions
  const toggleVideoPlay = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(error => {
          console.error("Error playing video:", error);
        });
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsVideoPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
  };

  const initializeBackground = () => {
    // Create nodes for the connected network background
    const nodeCount = 15;
    const newNodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      newNodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4
      });
    }
    
    setNodes(newNodes);

    // Create connections between nearby nodes
    const newConnections = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const distance = Math.sqrt(
          Math.pow(newNodes[i].x - newNodes[j].x, 2) + 
          Math.pow(newNodes[i].y - newNodes[j].y, 2)
        );
        
        if (distance < 30) { // Only connect nearby nodes
          newConnections.push({
            id: `${i}-${j}`,
            from: newNodes[i],
            to: newNodes[j],
            delay: Math.random() * 3
          });
        }
      }
    }
    
    setConnections(newConnections);
  };

  const initializeParticles = () => {
    // Create floating particles for the background
    const particleCount = 60; // Increased for more density
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 10 + 3; // Random size between 3px and 13px
      const type = i % 4; // Distribute between 4 particle types for different colors
      
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        type: type,
        delay: Math.random() * 8
      });
    }
    
    setParticles(newParticles);
  };

  const initializeTestimonialParticles = () => {
    // Create floating particles specifically for testimonials section
    const particleCount = 25;
    const newParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 6 + 2; // Random size between 2px and 8px
      const type = i % 3; // Distribute between 3 particle types
      
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: size,
        type: type,
        delay: Math.random() * 8
      });
    }
    
    setTestimonialParticles(newParticles);
  };

  const initializeIndustriesBackground = () => {
    // Initialize tech icons
    const icons = [];
    for (let i = 0; i < 20; i++) {
      icons.push({
        id: i,
        icon: techIcons[Math.floor(Math.random() * techIcons.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 15,
        duration: 10 + Math.random() * 10
      });
    }
    setTechIconPositions(icons);

    // Initialize data nodes
    const nodes = [];
    for (let i = 0; i < 25; i++) {
      nodes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 4
      });
    }
    setDataNodes(nodes);

    // Initialize data connections
    const connections = [];
    for (let i = 0; i < 15; i++) {
      const fromNode = nodes[Math.floor(Math.random() * nodes.length)];
      const toNode = nodes[Math.floor(Math.random() * nodes.length)];
      if (fromNode && toNode && fromNode.id !== toNode.id) {
        connections.push({
          id: i,
          from: fromNode,
          to: toNode,
          delay: Math.random() * 3
        });
      }
    }
    setDataConnections(connections);
  };

  useEffect(() => {
    // Initialize animated background nodes, connections, and particles
    initializeBackground();
    initializeParticles();
    initializeTestimonialParticles();
    initializeIndustriesBackground();

    // Start counter animation when stats section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateStats();
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    // Auto-rotate testimonials
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    // Set initial volume
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }

    return () => {
      if (statsSection) {
        observer.unobserve(statsSection);
      }
      clearInterval(interval);
    };
  }, []);

  const animateStats = () => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      setStats(prevStats => 
        prevStats.map(stat => ({
          ...stat,
          value: Math.floor(progress * stat.target)
        }))
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  const toggleServices = () => {
    setShowAllServices(!showAllServices);
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonial(index);
  };

  const handleDownload = (brochure) => {
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = brochure.downloadUrl;
    link.download = brochure.title.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // You can also track downloads here if needed
    console.log(`Downloaded: ${brochure.title}`);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] relative">
      {/* Add animation styles */}
      <style>{animationStyles}</style>
      
      {/* Enhanced Particles Background */}
      <div className="particles-background">
        {/* Animated Gradient Mesh */}
        <div className="gradient-mesh"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
        
        {/* Animated Grid Lines */}
        <div className="grid-lines"></div>
        
        {/* Floating Particles */}
        {particles.map((particle) => (
          <div
            key={particle.id}
            className={`particle particle-${particle.type}`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
        
        {/* Connected Nodes Network */}
        <div className="nodes-overlay">
          <svg width="100%" height="100%" style={{ position: 'absolute', top: 0, left: 0 }}>
            {connections.map((conn, index) => (
              <line
                key={conn.id}
                x1={`${conn.from.x}%`}
                y1={`${conn.from.y}%`}
                x2={`${conn.to.x}%`}
                y2={`${conn.to.y}%`}
                className={`connection connection-${index % 4}`}
                style={{ animationDelay: `${conn.delay}s` }}
              />
            ))}
          </svg>
          {nodes.map((node, index) => (
            <div
              key={node.id}
              className={`node node-${index % 4}`}
              style={{
                left: `${node.x}%`,
                top: `${node.y}%`,
                animationDelay: `${node.delay}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="content-wrapper">
        <Navigation />

        <VideoHero/>

       {/* About Section with Beautiful Background */}
<div className="about-section relative py-16 md:py-24 overflow-hidden">
  {/* Main Background Gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>
  
  {/* Animated Gradient Orbs */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50 animate-pulse-slow" style={{animationDelay: '2s'}}></div>
  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-full blur-3xl opacity-40 animate-pulse-slower"></div>

  {/* Floating Geometric Shapes */}
  <div className="absolute inset-0 overflow-hidden">
    {/* Large shapes */}
    <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100/30 rounded-3xl rotate-45 animate-float"></div>
    <div className="absolute bottom-20 right-16 w-40 h-40 bg-cyan-100/40 rounded-full animate-float" style={{animationDelay: '3s', animationDuration: '8s'}}></div>
    <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200/20 rounded-2xl rotate-12 animate-float" style={{animationDelay: '1s', animationDuration: '7s'}}></div>
    <div className="absolute bottom-40 left-20 w-28 h-28 bg-cyan-200/30 rounded-full animate-float" style={{animationDelay: '2s', animationDuration: '9s'}}></div>
    
    {/* Small shapes */}
    <div className="absolute top-60 right-40 w-16 h-16 bg-blue-100/20 rounded-lg rotate-45 animate-float" style={{animationDelay: '4s', animationDuration: '6s'}}></div>
    <div className="absolute bottom-60 left-40 w-20 h-20 bg-cyan-100/25 rounded-2xl animate-float" style={{animationDelay: '5s', animationDuration: '10s'}}></div>
  </div>

  {/* Floating IT Icons */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-32 left-5 text-3xl text-blue-300/40 animate-icon-float">💻</div>
    <div className="absolute top-20 right-16 text-4xl text-cyan-300/30 animate-icon-float" style={{animationDelay: '1s'}}>🔒</div>
    <div className="absolute bottom-28 left-20 text-3xl text-blue-400/35 animate-icon-float" style={{animationDelay: '2s'}}>☁️</div>
    <div className="absolute bottom-16 right-8 text-4xl text-cyan-400/25 animate-icon-float" style={{animationDelay: '3s'}}>🌐</div>
    <div className="absolute top-44 left-1/4 text-3xl text-blue-300/30 animate-icon-float" style={{animationDelay: '1.5s'}}>⚡</div>
    <div className="absolute bottom-44 right-1/4 text-3xl text-cyan-300/35 animate-icon-float" style={{animationDelay: '2.5s'}}>📱</div>
    <div className="absolute top-1/2 left-1/5 text-4xl text-blue-400/25 animate-icon-float" style={{animationDelay: '0.5s'}}>🔧</div>
    <div className="absolute bottom-1/3 right-1/5 text-3xl text-cyan-400/30 animate-icon-float" style={{animationDelay: '3.5s'}}>📊</div>
  </div>

  {/* Subtle Grid Pattern */}
  <div className="absolute inset-0 opacity-15">
    <div className="w-full h-full bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
  </div>

  {/* Animated Connection Lines */}
  <div className="absolute inset-0 opacity-20">
    <svg width="100%" height="100%" className="text-blue-200">
      {[...Array(8)].map((_, i) => (
        <line
          key={i}
          x1={`${Math.random() * 100}%`}
          y1={`${Math.random() * 100}%`}
          x2={`${Math.random() * 100}%`}
          y2={`${Math.random() * 100}%`}
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="5,5"
          className="animate-circuit-glow"
          style={{animationDelay: `${i * 0.5}s`}}
        />
      ))}
    </svg>
  </div>

  {/* Floating Dots */}
  <div className="absolute inset-0">
    {[...Array(15)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-blue-300/20 rounded-full animate-pulse"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.3}s`
        }}
      />
    ))}
  </div>

  {/* Text Background Overlay for Better Readability */}
  <div className="absolute inset-0 bg-white/30 backdrop-blur-[1px]"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text Content - IMPROVED CONTRAST */}
      <div className="text-content animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-blue-200 shadow-sm mb-6 animate-fade-in">
          <div className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-800">Trusted IT Solutions Since 2012</span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          Managed IT Services in{' '}
          <span className="bg-gradient-to-r from-blue-700 to-cyan-700 bg-clip-text text-transparent">
            Australia
          </span>
        </h2>
        
        <div className="space-y-4 mb-8">
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            At <strong className="text-blue-800">SysCare IT Solutions</strong>, we deliver reliable managed IT services in Melbourne, advanced IT support in Sydney, and proactive managed security services across Australia. Whether you need a full-service MSP in Melbourne or a trusted MSSP in Australia, we've got your business covered.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            Based in Melbourne and Sydney, SysCare IT Solutions supports businesses of all sizes across Australia. From small startups to growing enterprises, we deliver cost-effective and scalable IT solutions that reduce downtime, enhance security, and improve productivity.
          </p>
        </div>
        
        
        
        {/* Stats Cards */}
       {/*  <div className="flex flex-wrap gap-4">
          {[
            { value: '150+', label: 'Clients', color: 'from-blue-600 to-cyan-600' },
            { value: '24/7', label: 'Support', color: 'from-cyan-600 to-blue-600' },
            { value: '12+', label: 'Years Experience', color: 'from-blue-700 to-cyan-700' },
            { value: '100+', label: 'Projects', color: 'from-cyan-700 to-blue-700' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="flex-1 min-w-[120px] bg-gradient-to-r p-4 rounded-xl text-[#103d5d] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in-up border border-white/20"
              style={{ 
                backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="font-bold text-xl mb-1 text-[#103d5d]">{stat.value}</div>
              <div className="text-sm opacity-95 text-[#103d5d]">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
      
      {/* Video Player */}
      <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
        <div className="video-player-container rounded-2xl overflow-hidden shadow-2xl border border-gray-300 bg-white/80 backdrop-blur-sm">
          <video 
            ref={videoRef}
            className="video-player w-full h-auto"
            onClick={toggleVideoPlay}
            onEnded={handleVideoEnd}
            onPlay={handleVideoPlay}
            onPause={handleVideoPause}
            controls={isVideoPlaying}
          >
            <source src={aboutus_video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Play Button Overlay */}
          {!isVideoPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/10 transition-all duration-300 cursor-pointer">
              <div 
                className="play-button bg-white/95 hover:bg-white transition-all duration-300 shadow-2xl border border-gray-300"
                onClick={toggleVideoPlay}
              >
                <div className="play-icon" style={{borderColor: "transparent transparent transparent #1e40af"}}></div>
              </div>
            </div>
          )}
        </div>
        
        

        {/* Quick Action Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <Link 
            to="/syscare-services"
            className="px-6 py-3 bg-white text-gray-800 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 border border-gray-300 shadow-sm hover:shadow-md flex items-center hover:scale-105 hover:text-blue-700"
          >
            <span className="mr-2">🔍</span>
            Our Services
          </Link>
          <Link 
            to="/contact-Us"
            className="px-6 py-3 bg-gradient-to-r from-blue-700 to-cyan-700 text-white rounded-xl font-semibold hover:from-blue-800 hover:to-cyan-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center hover:scale-105"
          >
            <span className="mr-2">📞</span>
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Services Section - Enhanced with background image */}
        <div className="services-background py-16 md:py-24 relative overflow-hidden border border-gray-200 rounded-lg mx-4 sm:mx-6 lg:mx-8">
          {/* Animated background elements */}
          <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-[#103d5d] opacity-10 animate-pulse-slower"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 rounded-full bg-[#1a4a72] opacity-10 animate-pulse-slower" style={{animationDelay: '1s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 services-content">
            <div className="text-center mb-16 text-content">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
                Our Managed IT & Security Solutions
              </h2>
              <p className="text-md text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                As a leading MSP in Melbourne and MSSP in Australia, we offer a wide range of solutions to keep your business secure and efficient:
              </p>
            </div>

            {/* Services Grid - Show first 4 services */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-animation">
              {initialServices.map((service, index) => (
                <AnimatedServiceCard 
                  key={service.id} 
                  service={service} 
                  index={index}
                  animationDelay={index * 0.1}
                />
              ))}
            </div>

            {/* Additional Services - Show when expanded */}
            {showAllServices && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 stagger-animation">
                {additionalServices.map((service, index) => (
                  <AnimatedServiceCard 
                    key={service.id} 
                    service={service} 
                    index={index + initialServices.length}
                    animationDelay={index * 0.1}
                  />
                ))}
              </div>
            )}

            {/* Show More/Less Button with Animation */}
            <div className="text-center mt-12 animate-bounce-gentle">
              <button 
                onClick={toggleServices}
                className="px-8 py-3 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white rounded-lg font-semibold hover:from-[#245684] hover:to-[#103d5d] transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {showAllServices ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                      </svg>
                      Show Less Services
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      Show More Services
                    </>
                  )}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#245684] to-[#103d5d] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              </button>
            </div>
          </div>
        </div>

        {/* Industries We Support Section - Enhanced Background */}
        <div className="industries-background py-16 md:py-24 relative overflow-hidden">
          {/* Animated Circuit Board */}
          <div className="circuit-board"></div>
          
          {/* Geometric Pattern */}
          <div className="geometric-pattern"></div>
          
          {/* Industry Grid */}
          <div className="industry-grid"></div>
          
          {/* Data Flow Animation */}
          <div className="data-flow">
            {dataNodes.map((node) => (
              <div
                key={node.id}
                className="data-node"
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  animationDelay: `${node.delay}s`
                }}
              />
            ))}
            {dataConnections.map((conn) => (
              <div
                key={conn.id}
                className="data-connection"
                style={{
                  left: `${Math.min(conn.from.x, conn.to.x)}%`,
                  top: `${Math.min(conn.from.y, conn.to.y)}%`,
                  width: `${Math.abs(conn.from.x - conn.to.x)}%`,
                  transform: `rotate(${Math.atan2(conn.to.y - conn.from.y, conn.to.x - conn.from.x)}rad)`,
                  animationDelay: `${conn.delay}s`
                }}
              />
            ))}
          </div>
          
          {/* Floating Tech Icons */}
          <div className="tech-icons-container">
            {techIconPositions.map((icon) => (
              <div
                key={icon.id}
                className="tech-icon"
                style={{
                  left: `${icon.x}%`,
                  top: `${icon.y}%`,
                  animationDelay: `${icon.delay}s`,
                  animationDuration: `${icon.duration}s`
                }}
              >
                {icon.icon}
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 text-content">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
                Industries We Support
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                We provide tailored IT solutions for businesses across diverse sectors throughout Australia
              </p>
            </div>

            {/* Industries List Container - Enhanced */}
            <div className="industries-list-container rounded-2xl p-8 md:p-12 animate-fade-in-up backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div className="space-y-4">
                  {[
                    "Accounting Services",
                    "Advertising and Marketing",
                    "Automobile Services",
                    "Building Services",
                    "Construction and Development",
                    "Design and Architecture",
                    "Educational Services",
                    "Electrical Services",
                    "Entertainment Services",
                    "Farming and Agriculture",
                    "Fast Food Industry"
                  ].map((industry, index) => (
                    <div key={index} className="industry-item flex items-center text-gray-700 hover:text-[#103d5d] transition-all duration-300 p-2 rounded-lg">
                      <span className="industry-dot w-2 h-2 bg-[#103d5d] rounded-full mr-3"></span>
                      <span className="font-medium">{industry}</span>
                    </div>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="space-y-4">
                  {[
                    "Financial Services",
                    "Food Manufacturing Industry",
                    "Health Care Services",
                    "Home Care and Disability Services",
                    "Hospitality Industry",
                    "Human Resources",
                    "Management and Consulting",
                    "Mining and Support Industry",
                    "Pet Food Manufacturing",
                    "Pharmaceutical Industry",
                    "Printing and Publishing Industry"
                  ].map((industry, index) => (
                    <div key={index} className="industry-item flex items-center text-gray-700 hover:text-[#103d5d] transition-all duration-300 p-2 rounded-lg">
                      <span className="industry-dot w-2 h-2 bg-[#103d5d] rounded-full mr-3"></span>
                      <span className="font-medium">{industry}</span>
                    </div>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="space-y-4">
                  {[
                    "Production Industry",
                    "Real Estate",
                    "Retail Industry",
                    "Small Business",
                    "Social and Community Services",
                    "Spare Parts Industry",
                    "Steel and Aluminium Manufacturing",
                    "Technology Services Industry",
                    "Telecommunication Services Industry",
                    "Tourism Industry",
                    "Transport and Logistics Services",
                    "Wholesale and Warehousing"
                  ].map((industry, index) => (
                    <div key={index} className="industry-item flex items-center text-gray-700 hover:text-[#103d5d] transition-all duration-300 p-2 rounded-lg">
                      <span className="industry-dot w-2 h-2 bg-[#103d5d] rounded-full mr-3"></span>
                      <span className="font-medium">{industry}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 animate-fade-in text-content" style={{animationDelay: '0.5s'}}>
              <p className="text-lg text-gray-600 mb-6">
                Don't see your industry? We have experience across countless sectors!
              </p>
              <Link 
                to="/contact-Us" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#103d5d] to-[#245684] text-white rounded-xl font-semibold hover:from-[#245684] hover:to-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Get Your Custom IT Solution
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section - Enhanced background */}
        <div id="stats-section" className="stats-background text-white py-16 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-float"></div>
            <div className="absolute top-1/2 right-1/4 w-24 h-24 rounded-full bg-white animate-float" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-white animate-float" style={{animationDelay: '2s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-content">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-animation">
              {stats.map((stat) => (
                <div key={stat.id} className="animate-fade-in">
                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    {stat.value}+
                  </div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>




        {/* Downloads - Products & Services Brochures Section */}
        <div className="downloads-background py-16 md:py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16 text-content">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
                Downloads - Products & Services Brochures
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                Download our comprehensive brochures to learn more about our IT solutions and services
              </p>
            </div>

            {/* Brochures Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {brochures.map((brochure, index) => (
                <div 
                  key={brochure.id} 
                  className="brochure-card animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="brochure-icon">
                    {brochure.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#170f17] mb-3">
                    {brochure.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {brochure.description}
                  </p>
                  <div className="file-size">
                    PDF • {brochure.fileSize}
                  </div>
                  <button 
                    onClick={() => handleDownload(brochure)}
                    className="download-btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Download Brochure
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Carousel Section - Updated with new color background and particles */}
        <div className="testimonials-background py-16 md:py-24 relative overflow-hidden">
          {/* Testimonials Particles Background */}
          <div className="testimonials-particles">
            {testimonialParticles.map((particle) => (
              <div
                key={particle.id}
                className={`testimonial-particle testimonial-particle-${particle.type} animate-particle-float`}
                style={{
                  left: `${particle.x}%`,
                  top: `${particle.y}%`,
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  animationDelay: `${particle.delay}s`,
                  opacity: 0.1 + (particle.size / 20)
                }}
              />
            ))}
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-content">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in">What Our Clients Say</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                Trusted by businesses across various industries for our reliable IT solutions.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="overflow-hidden">
                <div className="flex testimonial-slide"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                      <div className="bg-white p-8 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up border border-blue-100">
                        <div className="flex flex-col md:flex-row items-center mb-6">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.author} 
                            className="w-20 h-20 rounded-full object-cover mb-4 md:mb-0 md:mr-6 hover:scale-105 transition-transform duration-300 border-2 border-[#103d5d]"
                          />
                          <div>
                            <div className="flex mb-2">
                              {[...Array(5)].map((_, i) => (
                                <svg
                                  key={i}
                                  xmlns="http://www.w3.org/2000/svg"
                                  className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                              ))}
                            </div>
                            <p className="text-gray-700 italic mb-2 text-lg leading-relaxed">"{testimonial.quote}"</p>
                            <div>
                              <div className="font-semibold text-[#1a4a72] text-lg">{testimonial.author}</div>
                              <div className="text-gray-600 text-sm">{testimonial.company}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center mt-8 space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'bg-white scale-125' : 'bg-blue-200'}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Dual Line Partners Section - Updated with colorful logos */}
        <div className="partners-background py-16 md:py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 text-content">
              <h2 className="text-3xl md:text-4xl font-bold text-[#170f17] mb-4 animate-fade-in">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
                We partner with the world's leading technology companies to deliver exceptional solutions
              </p>
            </div>

            {/* Dual Line Carousel */}
            <div className="dual-carousel-container">
              <div className="carousel-fade carousel-fade-left"></div>
              <div className="carousel-fade carousel-fade-right"></div>
              
              {/* Top Line - Scrolls Left */}
              <div className="logo-track logo-track-top">
                {duplicatedLogosLine1.map((logo, index) => (
                  <div key={`top-${logo.id}-${index}`} className="logo-item">
                    <img 
                      src={logo.image} 
                      alt={logo.name}
                      className="logo-img"
                      style={{ filter: 'none', opacity: 0.9 }}
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-text';
                        fallback.textContent = logo.name;
                        fallback.style.cssText = 'font-size: 14px; font-weight: bold; color: #103d5d; text-align: center;';
                        e.target.parentNode.appendChild(fallback);
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Bottom Line - Scrolls Right */}
              <div className="logo-track logo-track-bottom">
                {duplicatedLogosLine2.map((logo, index) => (
                  <div key={`bottom-${logo.id}-${index}`} className="logo-item">
                    <img 
                      src={logo.image} 
                      alt={logo.name}
                      className="logo-img"
                      style={{ filter: 'none', opacity: 0.9 }}
                      onError={(e) => {
                        // Fallback if image doesn't exist
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'fallback-text';
                        fallback.textContent = logo.name;
                        fallback.style.cssText = 'font-size: 14px; font-weight: bold; color: #103d5d; text-align: center;';
                        e.target.parentNode.appendChild(fallback);
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#170f17] text-white py-16 md:py-24 relative overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-1/4 right-1/4 w-40 h-40 rounded-full bg-white animate-pulse-slower"></div>
            <div className="absolute bottom-1/4 left-1/4 w-32 h-32 rounded-full bg-white animate-pulse-slower" style={{animationDelay: '1s'}}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">Partner with SysCare IT Solutions </h2>
            <p className="text-md mb-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
              Your dedicated provider of managed IT services in Melbourne, IT support in Sydney, and trusted cybersecurity services nationwide. Discover how we can protect and empower your business with tailored IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 stagger-animation">
              <Link 
                to="/contact-Us" 
                className="px-8 py-3 bg-[#245684] text-white rounded-lg font-semibold hover:bg-[#103d5d] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-bounce-gentle"
              >
                Get a Free Consultation
              </Link>
              <Link 
                to="/contact-Us" 
                className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#170f17] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>

        <Footer/>
      </div>
    </div>
  );
};

// Animated Service Card Component
const AnimatedServiceCard = ({ service, animationDelay = 0 }) => {
  return (
    <div 
      className="group bg-white rounded-xl shadow-md overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full border border-[#103d5d] animate-fade-in-up"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="p-6 h-full flex flex-col relative">
        {/* Hover effect background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
        
        <div className="relative z-10">
          {/* Icon with animation */}
          <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-500 animate-float">
            {service.icon}
          </div>
          
          {/* Title */}
          <h3 className="text-xl font-bold text-[#1a4a72] mb-3 group-hover:text-[#103d5d] transition-colors duration-300">
            {service.title}
          </h3>
          
          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow text-sm group-hover:text-gray-800 transition-colors duration-300">
            {service.description}
          </p>
          
        </div>
      </div>
    </div>
  );
};

export default HomePage;