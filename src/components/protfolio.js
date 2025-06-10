import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Code, Briefcase, GraduationCap, User, ExternalLink, Menu, X, Zap } from 'lucide-react';
import './Protfolio.css';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['Home', 'About', 'Skills', 'Projects', 'Education', 'Contact'];
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'React', level: 75 },
    { name: 'Next.js', level: 70 },
    { name: 'JavaScript', level: 85 },
    { name: 'C++', level: 60 },
    { name: 'C#', level: 50 },
    { name: 'Java', level: 60 },
    { name: 'Node.js', level: 65 },
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 }
  ];

  const projects = [
    {
      title: 'ANT',
      description: 'A Social Media website built with React and CROW backend API using C++ featuring user authentication',
      tech: ['React', 'CSS', 'C++', 'Crow'],
      github: 'https://github.com/Haroon300/ANT.git',
      live: 'https://ant-7zrb.vercel.app/'
    },
    {
      title: 'F.R.I.D.A.Y',
      description: 'A productivity application with drag-and-drop functionality, real-time updates, and responsive design.',
      tech: ['Assembly'],
      github: 'https://github.com/Haroon300/F.R.I.D.A.Y.git',
      live: '#'
    }
  ];

  const education = [
    {
      degree: 'BS in Computer Science',
      institution: 'University Of Karachi',
      period: '2024 - 2028',
      status: 'Current'
    },
    {
      degree: 'DAE in Software Technology',
      institution: 'Aligarh Institute of Technology',
      period: '2021 - 2023',
      status: 'Completed'
    },
    {
      degree: 'Intermediate in Pre Engineering',
      institution: 'Govt.Degree College Gulzar-E-Hijri',
      period: '2019 - 2020',
      status: 'Completed'
    }
  ];

  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="brand">
              <div className="brand-icon"></div>
              <span>Haroon Hammad</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="desktop-menu">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              {['home', 'about', 'skills', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="mobile-nav-link"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className={`hero-content ${isVisible ? 'visible' : ''}`}>
          <div className="hero-text">
            <h1 className="hero-title">
              <span>Haroon</span> <span>Hammad</span>
            </h1>
            <div className="hero-subtitle">
              <Zap className="subtitle-icon" />
              <span>Front-End Developer</span>
            </div>
            <p className="hero-description">
              Crafting elegant solutions with modern web technologies. Currently working as a Front-End Intern at Coderatory and pursuing BS in Computer Science.
            </p>
            <div className="hero-buttons">
              <button
                onClick={() => scrollToSection('projects')}
                className="hero-button primary"
              >
                <Code className="button-icon" />
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="hero-button secondary"
              >
                Get In Touch
              </button>
            </div>
          </div>
          <div className="hero-graphic">
            <div className="graphic-element"></div>
            <div className="graphic-element"></div>
            <div className="graphic-element"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-grid">
            <div className="about-content">
              <p className="about-text">
                I'm a passionate Front-End Developer currently working as an intern at Coderatory in Karachi. 
                With expertise in modern web technologies, I create responsive and user-friendly applications.
              </p>
              <p className="about-text">
                Currently pursuing my Bachelor's degree in Computer Science at the University of Karachi, 
                I'm always eager to learn new technologies and take on challenging projects.
              </p>
              <div className="about-location">
                <MapPin className="location-icon" />
                <span>Karachi, Pakistan (Willing to relocate)</span>
              </div>
            </div>
            <div className="about-facts">
              <h3 className="facts-title">Quick Facts</h3>
              <div className="facts-container">
                <div className="fact-item">
                  <Briefcase className="fact-icon" />
                  <span>Front-End Intern at Coderatory</span>
                </div>
                <div className="fact-item">
                  <GraduationCap className="fact-icon" />
                  <span>BS Computer Science Student</span>
                </div>
                <div className="fact-item">
                  <Code className="fact-icon" />
                  <span>Full-Stack Development</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-card"
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}%</span>
                </div>
                <div className="skill-bar-container">
                  <div
                    className="skill-bar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="project-card"
              >
                <div className="project-content">
                  <h3 className="project-title">
                    {project.title}
                  </h3>
                  <p className="project-description">
                    {project.description}
                  </p>
                  <div className="project-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={tech} 
                        className="tech-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <Github className="link-icon" />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <ExternalLink className="link-icon" />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="section-container">
          <h2 className="section-title">Education</h2>
          <div className="education-list">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="education-item"
              >
                <div className="education-header">
                  <div>
                    <h3 className="education-degree">
                      {edu.degree}
                    </h3>
                    <p className="education-institution">{edu.institution}</p>
                    <p className="education-period">{edu.period}</p>
                  </div>
                  <div className="education-status-container">
                    <span className={`education-status ${edu.status.toLowerCase()}`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-grid">
            <div className="contact-info">
              <h3 className="contact-subtitle">Let's Connect</h3>
              <p className="contact-description">
                I'm always interested in new opportunities and collaborations. 
                Feel free to reach out for projects or just to chat about technology!
              </p>
              <div className="contact-details">
                <a
                  href="mailto:haroonhammad300@gmail.com"
                  className="contact-detail"
                >
                  <Mail className="detail-icon" />
                  <span>haroonhammad300@gmail.com</span>
                </a>
                <a
                  href="tel:+923132566400"
                  className="contact-detail"
                >
                  <Phone className="detail-icon" />
                  <span>+92 313 2566400</span>
                </a>
                <div className="contact-detail">
                  <MapPin className="detail-icon" />
                  <span>Karachi, Pakistan</span>
                </div>
              </div>
            </div>
            <div className="contact-social">
              <h3 className="social-title">Social Links</h3>
              <div className="social-links">
                <a
                  href="https://github.com/Haroon300?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Github className="social-icon" />
                  <span>GitHub Profile</span>
                </a>
                <a
                  href="https://pk.linkedin.com/in/haroon-hammad-0b5605264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Linkedin className="social-icon" />
                  <span>LinkedIn Profile</span>
                </a>
              </div>
              <div className="social-footer">
                <p className="social-note">
                  🌍 Open to opportunities worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">
            © 2025 Haroon Hammad. Built with React and passion for clean code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;