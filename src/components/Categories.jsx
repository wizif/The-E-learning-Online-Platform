import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaBitcoin,
  FaPalette,
  FaDollarSign,
  FaBullhorn,
  FaMusic,
  FaPuzzlePiece,
} from 'react-icons/fa';
import '../styles/Categories.css';

gsap.registerPlugin(ScrollTrigger);

const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);
  const gridRef = useRef(null);
  const cardsRef = useRef([]);

  const categories = [
    { name: 'All', icon: <FaPuzzlePiece />, color: '#6366f1' },
    { name: 'Blockchain', icon: <FaBitcoin />, color: '#f59e0b' },
    { name: 'Design', icon: <FaPalette />, color: '#ec4899' },
    { name: 'Finance', icon: <FaDollarSign />, color: '#10b981' },
    { name: 'Marketing', icon: <FaBullhorn />, color: '#3b82f6' },
    { name: 'Music', icon: <FaMusic />, color: '#8b5cf6' },
  ];

  // Ensure refs are clean on re-render
  cardsRef.current = [];

  const addToCardsRef = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useEffect(() => {
    const triggers = [];

    // Animate section
    triggers.push(
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    );

    // Animate heading and subtitle
    triggers.push(
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 80%',
          },
        }
      )
    );

    triggers.push(
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
          },
        }
      )
    );

    // Stagger animation for cards
    triggers.push(
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'back.out(1.7)',
          delay: 0.5,
          scrollTrigger: {
            trigger: gridRef.current,
            start: 'top 80%',
          },
        }
      )
    );

    // Hover animation for icons
    cardsRef.current.forEach((card, index) => {
      const icon = card.querySelector('.category-icon');
      const color = categories[index]?.color || '#6366f1';

      // Set CSS variable color
      gsap.set(card, { '--category-color': color });

      if (icon) {
        card.addEventListener('mouseenter', () => {
          gsap.to(icon, {
            y: -5,
            scale: 1.1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(icon, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: 'power2.out',
          });
        });
      }
    });

    return () => {
      triggers.forEach(trigger => trigger.scrollTrigger?.kill());
    };
  }, []);

  return (
    <section className="categories" ref={sectionRef}>
      <div className="container">
        <h2 ref={headingRef}>Browse Categories</h2>
        <p className="categories__subtitle" ref={subtitleRef}>
          Explore our wide range of course categories
        </p>

        <div className="categories__grid" ref={gridRef}>
          {categories.map((category, index) => (
            <div
              key={category.name}
              ref={addToCardsRef}
              className={`category-card ${
                selectedCategory === category.name ? 'active' : ''
              }`}
              onClick={() => setSelectedCategory && setSelectedCategory(category.name)}
              style={{ '--category-color': category.color }}
            >
              <div className="category-icon">{category.icon}</div>
              <h3>{category.name}</h3>
              <span className="category-count">
                {Math.floor(Math.random() * 20) + 5} courses
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
