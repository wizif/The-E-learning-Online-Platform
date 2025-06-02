import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../styles/Faq.css'; // New dedicated CSS file

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Why Should I Prefer This Site?",
      answer: "Our platform offers industry-relevant courses with practical projects and expert instructors. We provide personalized learning paths and career support to help you achieve your goals."
    },
    {
      question: "How do I get started?",
      answer: "Simply browse our courses, select one that interests you, and enroll to begin learning. You can start with free introductory lessons before committing to a full course."
    },
    {
      question: "Are the courses certified?",
      answer: "Yes, all our courses provide verifiable certificates upon completion that you can add to your LinkedIn profile or resume. Many of our certificates are recognized by industry leaders."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, Apple Pay, Google Pay, and bank transfers. We also offer installment plans for many of our premium courses."
    },
    {
      question: "Can I access courses on mobile?",
      answer: "Absolutely! Our platform is fully responsive and works on all devices. We also have a mobile app available for iOS and Android for offline learning."
    },
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <h2>Frequently Asked Questions</h2>
        <p className="faq__subtitle">Find answers to common questions about our platform</p>
        
        <div className="faq__container">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className={`faq__item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFaq(index)}
            >
              <div className="faq__question">
                <h3>{faq.question}</h3>
                <span className="faq__icon">
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
              <div className="faq__answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;