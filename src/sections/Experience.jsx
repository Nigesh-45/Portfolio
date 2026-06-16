import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

export default function Experience() {
  const experiences = [
    {
      role: 'Data Science & Machine Learning Intern',
      company: 'Infotact Solutions',
      date: 'Ongoing',
      align: 'left',
      color: 'var(--primary)',
      bullets: [
        'Built end-to-end AI solutions for predictive maintenance and intelligent document parsing.',
        'Developed an IoT-based model to predict equipment failures and improved performance on imbalanced data using SMOTE and optimized XGBoost.',
        'Deployed explainable ML APIs with Flask and SHAP for real-time insights.',
        'Created an OCR-to-NER pipeline for extracting entities from documents and deployed scalable Dockerized APIs.'
      ]
    },
    {
      role: 'Power BI Intern',
      company: 'NoviTech Private Limited, Coimbatore',
      date: 'August 2025',
      align: 'right',
      color: 'var(--secondary)',
      bullets: [
        'Worked on real-world datasets to design and develop interactive Power BI dashboards for business insights.',
        'Performed data cleaning and transformation using Power Query to ensure data accuracy and consistency.',
        'Created calculated measures and KPIs using DAX for performance tracking and reporting.',
        'Built data models by establishing relationships between multiple tables for efficient analysis.',
        'Delivered visual reports enabling stakeholders to make data-driven decisions.'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'Macs Solutions, Erode',
      date: 'Dec 2025 – Jan 2026',
      align: 'left',
      color: 'var(--primary)',
      bullets: [
        'Architected and deployed "Work Hub - CES", a workflow system used by community members to manage daily operations.',
        'Reduced administrative task allocation time through the implementation of an automated role-based dashboard.',
        'Integrated AI-driven code assistants to accelerate feature delivery, completing the project ahead of schedule.'
      ]
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Work Experience</h2>
        </ScrollReveal>

        <div className="timeline">
          {experiences.map((exp, idx) => (
            <div key={idx} className={`timeline-item ${exp.align}`}>
              <motion.div
                initial={{ opacity: 0, x: exp.align === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="timeline-content">
                  <div className="timeline-date">{exp.date}</div>
                  <h3 className="timeline-role">{exp.role}</h3>
                  <div className="timeline-company">{exp.company}</div>
                  <ul className="timeline-bullets">
                    {exp.bullets.map((bullet, bulletIdx) => (
                      <li key={bulletIdx}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
