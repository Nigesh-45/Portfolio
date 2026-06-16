import ScrollReveal from '../components/ScrollReveal';
import TiltCard from '../components/TiltCard';
import { Activity, FileSearch, BarChart2, ExternalLink, HeartPulse, GraduationCap } from 'lucide-react';
import { GithubIcon } from '../components/SocialIcons';

export default function Projects() {
  const projects = [
    {
      title: 'FactoryGuard AI – Predictive Maintenance System',
      description: 'Built an IoT-based predictive maintenance model to forecast equipment failure 24 hours in advance using engineered temporal features. Deployed an explainable ML API using Flask with SHAP-based failure risk interpretation for real-time monitoring.',
      icon: <Activity size={24} />,
      year: '2026',
      tech: ['Python', 'XGBoost', 'SMOTE', 'Flask', 'SHAP', 'IoT Telemetry'],
      github: 'https://github.com/Nigesh-45/FactoryGuard-AI',
    },
    {
      title: 'LexiScan Auto – Intelligent Document Parsing System',
      description: 'Developed an OCR-to-NER pipeline to extract key legal entities from unstructured and scanned PDF contracts. Trained and evaluated a custom Named Entity Recognition model for entity-level accuracy. Containerized with Docker.',
      icon: <FileSearch size={24} />,
      year: '2026',
      tech: ['Python', 'OCR', 'NER (NLP)', 'Docker', 'REST API', 'JSON Outputs'],
      github: 'https://github.com/Nigesh-45/LexiScan-Auto',
    },
    {
      title: 'Diabetes Prediction System',
      description: 'Built an end-to-end Machine Learning model to predict diabetes risk using supervised classification algorithms. Executed data preprocessing, feature engineering, and exploratory data analysis (EDA) with visual metrics.',
      icon: <HeartPulse size={24} />,
      year: '2025',
      tech: ['Python', 'Scikit-learn', 'EDA', 'Pandas', 'Classification', 'Model Evaluation'],
      github: 'https://github.com/Nigesh-45/diabetes-prediction',
    },
    {
      title: 'Student Performance Prediction',
      description: 'Created a predictive system using classification and regression algorithms to forecast student academic outcomes based on demographic, behavioral, and academic performance telemetry data.',
      icon: <GraduationCap size={24} />,
      year: '2025',
      tech: ['Python', 'Supervised Learning', 'Feature Engineering', 'Predictive Modeling'],
      github: 'https://github.com/Nigesh-45/Student-Academic-Performance-Prediction',
    },
    {
      title: 'Sales & Shipment Performance Dashboard',
      description: 'Built a Power BI dashboard to analyze sales and shipment performance across countries and products. Created KPI cards, trend analysis, and waterfall charts to track sales growth and product contribution.',
      icon: <BarChart2 size={24} />,
      year: '2025',
      tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'ETL Pipelines'],
      github: 'https://github.com/Nigesh-45',
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <ScrollReveal>
          <h2 className="section-title">Featured Projects</h2>
        </ScrollReveal>

        <div className="projects-grid">
          {projects.map((project, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.15}>
              <TiltCard className="project-card-wrapper">
                <div className="project-card">
                  <div className="project-icon">
                    {project.icon}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', lineHeight: '1.3' }}>{project.title}</h3>
                    <span style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--secondary)' }}>{project.year}</span>
                  </div>
                  <p>{project.description}</p>
                  
                  <div className="project-tags">
                    {project.tech.map((t) => (
                      <span key={t} className="project-tag">{t}</span>
                    ))}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <GithubIcon size={16} /> Code Base
                    </a>
                    <a href="#contact" className="project-link" style={{ color: 'var(--text-secondary)' }}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
