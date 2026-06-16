import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Position of the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Spring physics for trailing ring
  const springConfig = { stiffness: 250, damping: 28 };
  const trailX = useSpring(mouseX, springConfig);
  const trailY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check if it's mobile or touch device (hide custom cursor on touch devices)
    const checkDevice = () => {
      const mobile = window.matchMedia('(max-width: 768px)').matches || 
                     ('ontouchstart' in window) || 
                     (navigator.maxTouchPoints > 0);
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);

    if (isMobile) return;

    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Attach hover detection for links, buttons, and cards
    const addHoverListeners = () => {
      const targets = document.querySelectorAll('a, button, input, textarea, .tilt-card, .contact-info-link');
      targets.forEach((target) => {
        target.addEventListener('mouseenter', () => setIsHovered(true));
        target.addEventListener('mouseleave', () => setIsHovered(false));
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);
    
    // Add hover listeners after rendering
    const timer = setTimeout(addHoverListeners, 1000);

    // Re-bind listeners on document change (dynamic renders)
    const observer = new MutationObserver(addHoverListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('resize', checkDevice);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [isMobile, isVisible, mouseX, mouseY]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Outer Spring Ring */}
      <motion.div
        style={{
          position: 'fixed',
          left: trailX,
          top: trailY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 48 : 24,
          height: isHovered ? 48 : 24,
          borderRadius: '50%',
          border: '1.5px solid var(--primary)',
          backgroundColor: isHovered ? 'rgba(0, 82, 255, 0.05)' : 'transparent',
          boxShadow: isHovered ? '0 0 15px rgba(0, 82, 255, 0.3)' : 'none',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.2 }}
      />

      {/* Inner Dot */}
      <motion.div
        style={{
          position: 'fixed',
          left: mouseX,
          top: mouseY,
          translateX: '-50%',
          translateY: '-50%',
          width: isHovered ? 8 : 6,
          height: isHovered ? 8 : 6,
          borderRadius: '50%',
          backgroundColor: 'var(--primary)',
          boxShadow: '0 0 10px var(--primary-glow)',
          pointerEvents: 'none',
          zIndex: 10000,
        }}
        transition={{ type: 'tween', ease: 'linear', duration: 0 }}
      />

      {/* Global CSS to hide default cursor on desktop */}
      <style>{`
        @media (min-width: 769px) {
          html, body, a, button, input, textarea, .tilt-card {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  );
}
