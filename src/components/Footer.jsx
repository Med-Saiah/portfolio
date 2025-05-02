import React from 'react';
import '../styles/Footer.css';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter, FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* Contact Section */}
        <div className="footer-section">
          <h4>Contact</h4>
          <ul>
            <li><FaLinkedin className="footer-icon" /> <a href="https://linkedin.com/in/mohamed-saiah-aissa-985385269" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><FaGithub className="footer-icon" /> <a href="https://github.com/Med-Saiah" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><FaEnvelope className="footer-icon" /> <a href="saiahaissa.med@gmail.com">saiahaissa.med@gmail.com</a></li>
            <li><FaMapMarkerAlt className="footer-icon" />Chlef, Algeria</li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="footer-section">
          <h4>Links</h4>
          <ul>
            <li><a href="#summary">Summary</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div className="footer-section">
          <h4>Follow Us</h4>
          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Made with ❤️ by Mohamed Saiah Aissa © 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
