import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import '../styles/Hero.css';

import thecourse from "../images/mainlogo.avif"; 

const Hero = () => {
  const heroRef = useRef(null);
  const headerLeftRef = useRef(null);
  const headerRightRef = useRef(null);

  useEffect(() => {
    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Staggered text animation
    tl.fromTo(
      headerLeftRef.current.querySelectorAll('h1, p, a'),
      { y: 20, opacity: 0 },
      { 
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2
      }
    );

    // Image animation with floating effect
    tl.fromTo(
      headerRightRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8 },
      '-=0.5'
    );

    // Continuous floating animation for the image
    gsap.to(headerRightRef.current.querySelector('img'), {
      y: 10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Background elements animation (optional)
    const shapes = [];
    for (let i = 0; i < 5; i++) {
      const shape = document.createElement('div');
      shape.className = `hero-shape hero-shape-${i + 1}`;
      heroRef.current.appendChild(shape);
      shapes.push(shape);
    }

    gsap.set(shapes, { opacity: 0 });
    gsap.to(shapes, {
      opacity: 0.1,
      duration: 1,
      stagger: 0.2,
      delay: 0.5
    });

    return () => {
      shapes.forEach(shape => shape.remove());
    };
  }, []);

  return (
    <header className="header" ref={heroRef}>
      <div className="container header__container">
        <div className="header__left" ref={headerLeftRef}>
          <h1>Grow your skills with EduZone to ace your Career</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Consequatur assumenda voluptas, ipsum nihil eligendi eaque 
            odio doloremque nam a accusantium?
          </p>
          <Link to="/courses" className="btn btn-primary">Get Started</Link>
        </div>
        <div className="header__right" ref={headerRightRef}>
          <div className="header__right-image">
            <img src="{thecourse}" alt="EduZone Learning" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;