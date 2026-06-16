import ScrollReveal from '../components/ScrollReveal';
import { Award, Trophy, Users, ShieldCheck, Star } from 'lucide-react';

export default function Achievements() {
  const certifications = [
    {
      title: '30 Days MasterClass in Full Stack Development',
      provider: 'NoviTech R&D Private Limited',
    },
    {
      title: 'Introduction to Data Science',
      provider: 'Cisco Networking Academy & KPRIET',
    },
    {
      title: 'Data Analytics in Python',
      provider: 'EDA, visualization & manipulation',
    },
    {
      title: 'Python Bootcamp',
      provider: 'Core Python, OOP & Problem Solving',
    },
    {
      title: 'Introduction to Generative AI',
      provider: 'Google Cloud & Simplilearn',
    },
    {
      title: 'Power BI Master Class',
      provider: 'Dashboards, DAX calculations & Modeling',
    },
    {
      title: 'Industry 4.0 & Industrial IoT',
      provider: 'Smart Manufacturing & Industrial Data',
    },
    {
      title: 'ChatGPT for Everyone',
      provider: 'Generative AI & Prompt Engineering',
    },
  ];

  const accomplishments = [
    {
      title: 'Winner – KPR Alumni Trophy Handball',
      desc: 'Demonstrated team leadership, resilience, and tactical coordination to secure first place.',
      icon: <Trophy size={20} />,
    },
    {
      title: 'Best Player – Sri Ramakrishna Alumni Trophy',
      desc: 'Recognized for outstanding gameplay, strategic contributions, and high scoring in handball matches.',
      icon: <Star size={20} />,
    },
    {
      title: 'Smart India Hackathon 2025 Participant',
      desc: 'Collaborated on developing technology-driven software solutions to solve real-world problems.',
      icon: <Users size={20} />,
    },
    {
      title: 'Runners – Sri Sakthi Alumni Trophy Handball',
      desc: 'Showcased teamwork and high competitive spirit in the regional finals.',
      icon: <Award size={20} />,
    },
  ];

  return (
    <section id="achievements">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Certifications & Trophies</h2>
        </ScrollReveal>

        <div className="achievements-grid">
          <ScrollReveal delay={0.2}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={22} style={{ color: 'var(--secondary)' }} /> Technical Certifications
            </h3>
            <div className="certs-list">
              {certifications.map((cert, idx) => (
                <div key={idx} className="cert-card">
                  <div className="cert-icon">
                    <Award size={18} />
                  </div>
                  <div className="cert-info">
                    <h4>{cert.title}</h4>
                    <p>{cert.provider}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Trophy size={22} style={{ color: 'var(--accent)' }} /> Honors & Achievements
            </h3>
            <div className="achievements-list">
              {accomplishments.map((acc, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-badge">
                    {acc.icon}
                  </div>
                  <div className="achievement-info">
                    <h4 style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{acc.title}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.5' }}>{acc.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
