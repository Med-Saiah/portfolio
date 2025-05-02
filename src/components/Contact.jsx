import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
  const form = useRef();
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ogbulxj', 'template_95o4o8g', form.current, 'YFw1hrsFuhF6QSpD9')
      .then((result) => {
          console.log(result.text);
          setIsError(false);
          setMessage('Message Sent Successfully! ✅');
      }, (error) => {
          console.log(error.text);
          setIsError(true);
          setMessage('Something went wrong. Please try again ❌');
      });
      
    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <p className="contact-subtitle">Get In Touch</p>
      <h2 className="contact-title">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="contact-form" data-aos="fade-up">
        <input 
          type="text" 
          name="user_name"
          placeholder="Your Name" 
          className="contact-input"
          required 
        />
        <input 
          type="email" 
          name="user_email"
          placeholder="Your Email" 
          className="contact-input"
          required 
        />
        <textarea 
          name="message"
          placeholder="Your Message" 
          className="contact-textarea"
          rows="6"
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Send Message
        </button>

        {/* Show the message here */}
        {message && (
          <p className={`contact-status ${isError ? 'error' : 'success'}`}>
            {message}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
