import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import heroImage from '../assets/hero.jpg';

export default function Hero() {
  const words = ['actionable.', 'predictive.', 'intelligent.', 'impactful.'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[currentWordIdx];
      
      if (!isDeleting) {
        // Typing
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);
        
        if (currentText === fullWord) {
          // Pause at the end
          setTypingSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);
        
        if (currentText === '') {
          setIsDeleting(false);
          // Move to next word
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <section id="home">
      <div className="container">
        <div className="hero-wrapper">
          <div className="hero-content">
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Data tells stories.
              <br />
              <span style={{ color: 'var(--primary)' }}>
                make them {currentText}
              </span>
              <span className="typing-cursor"></span>
            </motion.h1>
            
            <motion.p 
              className="hero-desc"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              I'm Nigesh A — An B.Tech AI & Data Science undergraduate from Coimbatore, building end-to-end ML systems, predictive analytics, and data products.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a href="#projects" className="cta-link">
                See the projects &rarr;
              </a>
            </motion.div>

            <motion.div 
              className="contact-info-footer" 
              style={{ justifyContent: 'flex-start', marginTop: '3.5rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="https://github.com/Nigesh-45" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                <GithubIcon size={18} /> Github
              </a>
              <a href="https://linkedin.com/in/nigesh-a" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                <LinkedinIcon size={18} /> LinkedIn
              </a>
              <a href="mailto:adhiniki20@gmail.com" className="contact-info-link">
                <Mail size={18} /> Email
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-image-wrapper">
              <img src={heroImage} alt="Nigesh A" className="hero-profile-image" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
