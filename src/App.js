import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import Navbar from './components/Navbar';
import Summary from './components/Summary';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    document.body.className = isDark ? 'dark-mode' : '';
    AOS.init({
      duration: 1000,
      once: false, 
    });
    
  }, [isDark]);
  

  return (
    <div className="App">
      <Navbar toggleTheme={toggleTheme} isDark={isDark} />
      
      <Summary /> {}
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

    </div>
    
  );
}

export default App;
