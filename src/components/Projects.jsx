import React from 'react';
import '../styles/Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <p className="projects-subtitle">Browse My</p>
      <h2 className="projects-title">Projects</h2>

      <div className="projects-container">

        {/* Project 1 */}
        <div className="project-card" data-aos="fade-up">
          <img src="https://via.placeholder.com/400x250" alt="Project 1" className="project-img" />
          <h3 className="project-title">Portfolio Website</h3>
          <p className="project-description">
            A personal portfolio website to showcase my projects, skills, and experience with a professional modern design.
          </p>
          <div className="project-tech">
            <span>React</span> | <span>CSS</span> | <span>AOS</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="link-icon" /> Code
            </a>
            <a href="https://your-website.com" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link-icon" /> Demo
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card" data-aos="fade-up">
          <img src="https://via.placeholder.com/400x250" alt="Project 2" className="project-img" />
          <h3 className="project-title">Store Management App</h3>
          <p className="project-description">
            A full CRUD web app to manage products, clients, and invoices with authentication and clean UI.
          </p>
          <div className="project-tech">
            <span>PHP</span> | <span>MySQL</span> | <span>MVC</span>
          </div>
          <div className="project-links">
            <a href="https://github.com/your-repo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="link-icon" /> Code
            </a>
            <a href="https://your-demo-link.com" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt className="link-icon" /> Demo
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
