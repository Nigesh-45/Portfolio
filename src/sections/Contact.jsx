import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import { Mail, Phone, Send, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Get In Touch</h2>
        </ScrollReveal>

        <div className="contact-wrapper">
          <ScrollReveal delay={0.2}>
            <div className="contact-card">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{ textAlign: 'center', padding: '2rem 0' }}
                >
                  <CheckCircle size={60} style={{ color: 'var(--secondary)', marginBottom: '1.5rem' }} />
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-secondary)' }}>Thank you for reaching out, Nigesh. I will respond to you as soon as possible.</p>
                  <button 
                    className="btn btn-primary" 
                    style={{ marginTop: '2rem' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">Name</label>
                    <input 
                      type="text" 
                      id="name"
                      className="form-input" 
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">Email</label>
                    <input 
                      type="email" 
                      id="email"
                      className="form-input" 
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Message</label>
                    <textarea 
                      id="message"
                      className="form-textarea" 
                      required
                      rows="5"
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn btn-primary"
                    disabled={isSubmitting}
                    style={{ justifyContent: 'center', width: '100%', gap: '0.75rem' }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="contact-info-footer">
              <a href="mailto:adhiniki20@gmail.com" className="contact-info-link">
                <Mail size={16} /> adhiniki20@gmail.com
              </a>
              <a href="tel:+919042812252" className="contact-info-link">
                <Phone size={16} /> +91 9042812252
              </a>
              <a href="https://linkedin.com/in/nigesh-a" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                <LinkedinIcon size={16} /> nigesh-a
              </a>
              <a href="https://github.com/Nigesh-45" target="_blank" rel="noopener noreferrer" className="contact-info-link">
                <GithubIcon size={16} /> Nigesh-45
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
