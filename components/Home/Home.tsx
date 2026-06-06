'use client';

import React, { useEffect } from 'react';
import ThemeToggler from '../Helper/ThemeToggler';
import Hero from './Hero/Hero';
import About from './About/About';
import Skills from './Skills/Skills';
import Project from './Project/Project';
import Experience from './Expeirence/Experience';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import('aos');
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-bottom',
      });
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Experience />
    </div>
  );
};

export default Home;
