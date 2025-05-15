import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();

  useEffect(() => {
    gsap.from(formRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
    });
  }, []);

  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <form ref={formRef} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
