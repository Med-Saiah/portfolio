import React from 'react';
import '../styles/Skills.css';
import { 
  FaJava, FaPhp,FaPython , FaJs, FaHtml5, FaCss3Alt, 
  FaNetworkWired, FaDocker,FaGithub,
  FaProjectDiagram, FaPaintBrush, 
  FaReact, FaAws 
} from 'react-icons/fa';

import { FcLinux } from "react-icons/fc";
import { VscAzure } from "react-icons/vsc";

import { 
  SiMysql, SiGooglecloud, SiKubernetes
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <p className="skills-subtitle">Explore My</p>
      <h2 className="skills-title">Practical Skills</h2>

      <div className="skills-container">

        {/* Programming */}
        <div className="skill-item" data-aos="zoom-in">
          <FaJava className="skill-icon" style={{ color: "#007396" }} />
          <p>Java</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaPython className="skill-icon" style={{ color: "#306998" }} />
          <p>Python</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaPhp className="skill-icon" style={{ color: "#474A8A" }} />
          <p>PHP</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaJs className="skill-icon" style={{ color: "#f0db4f" }} />
          <p>JavaScript</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaReact className="skill-icon" style={{ color: "#00d8ff" }} />
          <p>ReactJS</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaHtml5 className="skill-icon" style={{ color: "#e34c26" }} />
          <p>HTML</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaCss3Alt className="skill-icon" style={{ color: "#264de4" }} />
          <p>CSS</p>
        </div>

        {/* Databases */}
        <div className="skill-item" data-aos="zoom-in">
          <SiMysql className="skill-icon" style={{ color: "#00758F" }} />
          <p>MySQL</p>
        </div>

        {/* Networking */}
        <div className="skill-item" data-aos="zoom-in">
          <FaNetworkWired className="skill-icon" style={{ color: "#ff5722" }} />
          <p>Networking</p>
        </div>

        {/* DevOps & Cloud */}
        <div className="skill-item" data-aos="zoom-in">
          <FaDocker className="skill-icon" style={{ color: "#0db7ed" }} />
          <p>Docker</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <SiKubernetes className="skill-icon" style={{ color: "#326ce5" }} />
          <p>Kubernetes</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaGithub  className="skill-icon" style={{ color: "#000" }} />
          <p>Github</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaAws  className="skill-icon" style={{ color: "#ff9900" }} />
          <p>AWS</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <SiGooglecloud className="skill-icon" style={{ color: "#4285F4" }} />
          <p>Google Cloud</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <VscAzure className="skill-icon" style={{ color: "#008AD7" }} />
          <p>Azure</p>
        </div>

        {/* Operating Systems */}
        <div className="skill-item" data-aos="zoom-in">
          <FcLinux className="skill-icon" style={{ color: "#000000" }} />
          <p>Linux</p>
        </div>
    
        {/* Project & Creativity */}
        <div className="skill-item" data-aos="zoom-in">
          <FaProjectDiagram className="skill-icon" style={{ color: "#673ab7" }} />
          <p>Project Planning</p>
        </div>
        <div className="skill-item" data-aos="zoom-in">
          <FaPaintBrush className="skill-icon" style={{ color: "#ff9800" }} />
          <p>UI/UX Design</p>
        </div>

      </div>
    </section>
  );
};

export default Skills;
