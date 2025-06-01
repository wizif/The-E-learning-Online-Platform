import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/Testimonials.css'; // ✅ correct path

const Testimonials = () => {
  const sectionRef = useRef();

  useEffect(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-list">
        <blockquote>"This platform helped me get my first job!" - Ravi</blockquote>
        <blockquote>"Amazing explanations and UI!" - Priya</blockquote>
        <blockquote>"Highly recommended for beginners." - Saurav</blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
