import ScrollReveal from '../components/ScrollReveal';
import { Award, BookOpen, GraduationCap, Languages, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">About Me</h2>
        </ScrollReveal>
        
        <div className="about-grid">
          <ScrollReveal delay={0.2}>
            <div className="about-bio">
              <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                I am a highly motivated B.Tech Artificial Intelligence and Data Science undergraduate with hands-on experience in data analysis, machine learning model development, and predictive analytics.
              </p>
              <p style={{ marginBottom: '2rem' }}>
                My technical experience spans building end-to-end Machine Learning pipelines, working with IoT telemetry data, developing Dockerized Web APIs, and extracting structured insights from business data with Power BI. I have a strong foundation in statistics, databases, and core software engineering principles, allowing me to build robust, scalable, data-driven solutions.
              </p>
              
              <div className="about-details">
                <div className="about-info-item">
                  <span><GraduationCap size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> Education</span>
                  <p>B.Tech AI & Data Science</p>
                </div>
                <div className="about-info-item">
                  <span><Award size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> Academic Performance</span>
                  <p>7.49 CGPA</p>
                </div>
                <div className="about-info-item">
                  <span><MapPin size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> Location</span>
                  <p>Coimbatore, India</p>
                </div>
                <div className="about-info-item">
                  <span><Languages size={14} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'text-bottom' }} /> Languages</span>
                  <p>English, Tamil, Japanese</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="about-sidebar">
              <h3>Academic Background</h3>
              <ul className="about-sidebar-list">
                <li>
                  <span>College</span>
                  <span>KPR Inst. of Tech</span>
                </li>
                <li>
                  <span>Duration</span>
                  <span>2023 - Present</span>
                </li>
                <li>
                  <span>High School</span>
                  <span>Jaycees Mat. School</span>
                </li>
              </ul>
              
              <h3 style={{ marginTop: '2rem', marginBottom: '1rem' }}>Key Coursework</h3>
              <div className="skill-list" style={{ marginTop: 0 }}>
                <span className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
                  <BookOpen size={12} /> Machine Learning
                </span>
                <span className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
                  <BookOpen size={12} /> Data Structures
                </span>
                <span className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
                  <BookOpen size={12} /> Probability & Stats
                </span>
                <span className="skill-tag" style={{ fontSize: '0.8rem', padding: '0.3rem 0.75rem' }}>
                  <BookOpen size={12} /> DBMS & SQL
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
