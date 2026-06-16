import { useState, useEffect } from 'react';
import Canvas3D from './components/Canvas3D';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Achievements from './sections/Achievements';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';

import { motion, useScroll, useSpring } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState('dark');

  // Initialize theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.body.className = savedTheme === 'light' ? 'light-mode' : '';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme === 'light' ? 'light-mode' : '';
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 250; // offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Custom Mouse Cursor */}
      <CustomCursor />

      {/* Scroll Progress Bar */}
      <motion.div className="scroll-bar" style={{ scaleX }} />

      {/* 3D Background */}
      <Canvas3D />

      {/* Navigation Bar */}
      <header className="navbar">
        <a href="#home" className="navbar-logo">
          NIGESH A
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <ul className="navbar-links">
            <li>
              <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
                About
              </a>
            </li>
            <li>
              <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
                Skills
              </a>
            </li>
            <li>
              <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
                Work
              </a>
            </li>
            <li>
              <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                Contact
              </a>
            </li>
          </ul>
          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>

      {/* Main Layout Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <footer>
        <div className="container">
          <p style={{ marginBottom: '0.5rem' }}>
            Designed & Developed by <span className="gradient-text" style={{ fontWeight: 600 }}>Nigesh A</span>
          </p>
          <p style={{ fontSize: '0.8rem' }}>
            &copy; {new Date().getFullYear()} | Powered by React, Vite, Framer Motion & Three.js
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
