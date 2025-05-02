import React, { useEffect, useState } from 'react';
import '../styles/Summary.css';
import profilePic from '../assets/profile.jpg';

const Summary = () => {
  const fullText = "ICT Student";
  const [text, setText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);


  useEffect(() => {
    const speed = isDeleting ? 70 : 100; // typing speed
    const pause = 1500; // pause after full word
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setText(fullText.substring(0, index + 1));
        setIndex(index + 1);
      } else if (isDeleting && index > 0) {
        setText(fullText.substring(0, index - 1));
        setIndex(index - 1);
      } else if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <section id="summary" className="summary">
      <div className="summary-left" data-aos="fade-right">
        <h1>Hello, I'm <span>Mohamed Saiah Aissa</span></h1>
        <h2 className="typewriter">{text}<span className="cursor">|</span></h2>
        <p className="summary-text">
        Aspiring DevOps and Cloud Engineer with experience in telecom engineering andsoftware Development. Completed a virtual job simulation at Verizon as a softwareengineer and an internship At ATM Mobilis, gaining expertise in mobile networks.Passionate about cloud computing,Automation, and infrastructure management.
        </p>
        <div className="summary-buttons">
          <a href="#contact" className="btn">Contact Me</a>
          <a href="/cv.pdf" className="btn outline" download>Download CV</a>
        </div>
      </div>

      <div className="summary-right" data-aos="fade-left">
        <img src={profilePic} alt="Profile" />
      </div>
    </section>
  );
};

export default Summary;
