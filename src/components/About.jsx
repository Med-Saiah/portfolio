import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <p class="text-center">Want to know me</p>
      <h2 className="about-title">About Me</h2>

      {/* Experience Block */}
      <div className="about-block">
  <div className="about-header">
    <div className="about-line"></div>
    <h3 className="about-subtitle" data-aos="fade-left">👨‍💻 Professional Experience</h3>
  </div>

  <div className="about-content" data-aos="fade-left">
    <p className="about-text">
      <strong>Virtual Job Simulation – Software Engineer</strong><br />
      <em>Verizon (Forage) | 2025</em><br />
      Tested a cloud-based VPN service (Sasha) for redundancy, resiliency, and least-privilege access.
    </p>

    <p className="about-text">
      <strong>Intern – Telecom Engineer</strong><br />
      <em>ATM Mobilis | 2024</em><br />
      Worked in the UOP (maintenance) department, gaining hands-on experience in mobile networks.
    </p>
  </div>
</div>

<div className="about-block">
  <div className="about-header">
    <div className="about-line"></div>
    <h3 className="about-subtitle" data-aos="fade-left">🎓 Education</h3>
  </div>

  <div className="about-content" data-aos="fade-left">
    <p className="about-text">
      <strong>4th Year – ENSTTIC</strong><br />
      <em>2021 - Present</em><br />
      National Higher School of Telecommunications and ICT.
    </p>

    <p className="about-text">
      <strong>Secondary School Certification (Bac)</strong><br />
      <em>2021 – Very Good</em>
    </p>
  </div>
</div>


    </section>
  );
};

export default About;
