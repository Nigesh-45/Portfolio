import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import { Code, Cpu, Database, BarChart, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <Code size={20} />,
      skills: [
        { name: 'Python', level: '90%' },
        { name: 'SQL', level: '85%' },
        { name: 'Java', level: '70%' },
        { name: 'C++', level: '75%' },
        { name: 'C', level: '65%' },
      ],
    },
    {
      title: 'Libraries & Frameworks',
      icon: <Cpu size={20} />,
      skills: [
        { name: 'NumPy', level: '85%' },
        { name: 'Pandas', level: '88%' },
        { name: 'Scikit-learn', level: '82%' },
        { name: 'Matplotlib', level: '80%' },
      ],
    },
    {
      title: 'Data & Analytics',
      icon: <Database size={20} />,
      skills: [
        { name: 'Power BI', level: '85%' },
        { name: 'Excel', level: '80%' },
        { name: 'Data Preprocessing', level: '88%' },
        { name: 'Exploratory Data Analysis', level: '85%' },
      ],
    },
    {
      title: 'Platforms & Tools',
      icon: <BarChart size={20} />,
      skills: [
        { name: 'Jupyter Notebook', level: '90%' },
        { name: 'VS Code', level: '85%' },
        { name: 'Google Colab', level: '90%' },
        { name: 'Docker / Flask (APIs)', level: '75%' },
      ],
    },
    {
      title: 'Soft Skills',
      icon: <Users size={20} />,
      skills: [
        { name: 'Analytical Thinking', level: '90%' },
        { name: 'Team Collaboration', level: '85%' },
        { name: 'Communication', level: '80%' },
        { name: 'Time Management', level: '85%' },
      ],
    },
  ];

  return (
    <section id="skills">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Skills & Expertise</h2>
        </ScrollReveal>

        <div className="skills-categories">
          {skillCategories.map((category, catIdx) => (
            <ScrollReveal key={category.title} delay={catIdx * 0.1}>
              <TiltCard className="skill-card-wrapper" style={{ height: '100%' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                  <div className="project-icon" style={{ margin: 0, width: '40px', height: '40px' }}>
                    {category.icon}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 600 }}>{category.title}</h3>
                </div>

                <div className="skill-progress-container">
                  {category.skills.map((skill) => (
                    <div className="skill-progress-bar" key={skill.name}>
                      <div className="skill-progress-label">
                        <span>{skill.name}</span>
                        <span>{skill.level}</span>
                      </div>
                      <div className="skill-progress-track">
                        <motion.div
                          className="skill-progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: skill.level }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: 0.1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
