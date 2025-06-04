import React, { useState, useRef, useEffect } from "react";
import '../styles/contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  
  const formRef = useRef();
  const containerRef = useRef();
  const particlesRef = useRef();

  // Floating particles animation
  useEffect(() => {
    const particles = [];
    const particleContainer = particlesRef.current;
    
    if (!particleContainer) return;
    
    // Create floating particles
    for (let i = 0; i < 15; i++) {
      const particle = document.createElement('div');
      particle.className = 'floating-particle';
      particle.style.cssText = `
        width: ${Math.random() * 6 + 4}px;
        height: ${Math.random() * 6 + 4}px;
        background: linear-gradient(45deg, #667eea, #764ba2, #f093fb);
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
      `;
      particleContainer.appendChild(particle);
      particles.push(particle);
    }

    // Animate particles
    const animateParticles = () => {
      particles.forEach((particle, index) => {
        const duration = 3000 + Math.random() * 2000;
        const delay = index * 200;
        
        particle.animate([
          { transform: 'translateY(0px) rotate(0deg)', opacity: 0.6 },
          { transform: `translateY(-${20 + Math.random() * 30}px) rotate(360deg)`, opacity: 0.2 },
          { transform: 'translateY(0px) rotate(720deg)', opacity: 0.6 }
        ], {
          duration,
          delay,
          iterations: Infinity,
          easing: 'ease-in-out'
        });
      });
    };

    animateParticles();

    // Cleanup
    return () => {
      particles.forEach(particle => particle.remove());
    };
  }, []);

  // Enhanced entrance animations
  useEffect(() => {
    const animateElement = (element, options) => {
      if (element) {
        element.animate([
          { 
            opacity: options.from?.opacity || 0,
            transform: `translateY(${options.from?.y || 50}px) scale(${options.from?.scale || 0.9})`
          },
          { 
            opacity: 1,
            transform: 'translateY(0px) scale(1)'
          }
        ], {
          duration: options.duration || 600,
          delay: options.delay || 0,
          fill: 'forwards',
          easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
        });
      }
    };

    const animateElements = (selector, options) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        animateElement(element, {
          ...options,
          delay: (options.delay || 0) + (index * (options.stagger || 0))
        });
      });
    };

    // Initial animations
    animateElement(containerRef.current, {
      from: { opacity: 0, y: 30 },
      duration: 800,
      delay: 100
    });

    animateElements('.form-group', {
      from: { opacity: 0, y: 20 },
      duration: 500,
      delay: 300,
      stagger: 100
    });

    animateElements('.info-card', {
      from: { opacity: 0, y: 20, scale: 0.95 },
      duration: 500,
      delay: 400,
      stagger: 100
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Enhanced shake animation
      if (formRef.current) {
        formRef.current.animate([
          { transform: 'translateX(0)' },
          { transform: 'translateX(-10px)' },
          { transform: 'translateX(10px)' },
          { transform: 'translateX(-8px)' },
          { transform: 'translateX(8px)' },
          { transform: 'translateX(0)' }
        ], {
          duration: 400,
          easing: 'ease-in-out'
        });
      }
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Success animation
      if (formRef.current) {
        formRef.current.animate([
          { opacity: 1, transform: 'scale(1)' },
          { opacity: 0, transform: 'scale(0.95) translateY(-10px)' }
        ], {
          duration: 500,
          fill: 'forwards'
        }).onfinish = () => {
          setSubmitStatus("success");
          
          // Animate success message
          setTimeout(() => {
            const successMsg = document.querySelector('.success-message');
            if (successMsg) {
              successMsg.animate([
                { opacity: 0, transform: 'scale(0.8) translateY(20px)' },
                { opacity: 1, transform: 'scale(1) translateY(0)' }
              ], {
                duration: 600,
                fill: 'forwards',
                easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
              });
            }
          }, 100);
        };
      }
      
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus(null);
    if (formRef.current) {
      formRef.current.animate([
        { opacity: 0, transform: 'scale(0.95) translateY(10px)' },
        { opacity: 1, transform: 'scale(1) translateY(0)' }
      ], {
        duration: 500,
        fill: 'forwards',
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
      });
    }
  };

  return (
    <div className="page-container">
      <div className="particles-container" ref={particlesRef}></div>
      
      <div className="contact-container" ref={containerRef}>
        {/* Header Section */}
        <div className="header1">
          <div className="brand-container">
            <div className="logo-icon">📚</div>
            <h1 className="brand-name">Winwise</h1>
          </div>
          <h2 className="page-title">Let's Connect & Learn Together</h2>
          <p className="page-subtitle">
            Have questions about our courses? Need academic guidance? We're here to help you on your learning journey.
          </p>
        </div>

        <div className="content-grid">
          {/* Contact Form */}
          <div className="form-container">
            {submitStatus === "success" ? (
              <div className="status-message success-message">
                <div className="status-icon">✅</div>
                <h3 className="status-title">Message Sent Successfully!</h3>
                <p className="status-text">
                  Thank you for reaching out to Winwise. Our team will get back to you within 24 hours.
                </p>
                <button onClick={resetForm} className="reset-button">
                  Send Another Message
                </button>
              </div>
            ) : submitStatus === "error" ? (
              <div className="status-message error error-message">
                <div className="status-icon">⚠️</div>
                <h3 className="status-title">Oops! Something went wrong</h3>
                <p className="status-text">
                  Please check your connection and try again.
                </p>
                <button onClick={resetForm} className="reset-button">
                  Try Again
                </button>
              </div>
            ) : (
              <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <div className={`input-container ${focusedField === 'name' ? 'focused' : ''} ${errors.name ? 'error' : ''}`}>
                    <span className="input-icon">👤</span>
                    <input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={handleBlur}
                      placeholder="Your Full Name"
                      className={`form-input ${errors.name ? 'error' : ''}`}
                    />
                  </div>
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <div className={`input-container ${focusedField === 'email' ? 'focused' : ''} ${errors.email ? 'error' : ''}`}>
                    <span className="input-icon">📧</span>
                    <input
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={handleBlur}
                      type="email"
                      placeholder="Your Email Address"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                    />
                  </div>
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <div className={`input-container ${focusedField === 'subject' ? 'focused' : ''} ${errors.subject ? 'error' : ''}`}>
                    <span className="input-icon">📝</span>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => handleFocus('subject')}
                      onBlur={handleBlur}
                      className={`form-select ${errors.subject ? 'error' : ''}`}
                    >
                      <option value="">Select a topic</option>
                      <option value="course-inquiry">Course Inquiry</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="academic-guidance">Academic Guidance</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  {errors.subject && <span className="error-text">{errors.subject}</span>}
                </div>

                <div className="form-group">
                  <div className={`input-container ${focusedField === 'message' ? 'focused' : ''} ${errors.message ? 'error' : ''}`}>
                    <span className="input-icon textarea-icon">💬</span>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={handleBlur}
                      placeholder="Tell us more about your inquiry..."
                      rows="4"
                      className={`form-textarea ${errors.message ? 'error' : ''}`}
                    />
                  </div>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner"></div>
                      Sending your message...
                    </>
                  ) : (
                    <>
                      Send Message 🚀
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info Cards */}
          <div className="info-container">
            <div className="info-card">
              <div className="info-icon">🎓</div>
              <h4 className="info-title">Academic Support</h4>
              <p className="info-text">
                Get personalized guidance for your learning path and course selection.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">⚡</div>
              <h4 className="info-title">Quick Response</h4>
              <p className="info-text">
                Our support team responds within 24 hours to help you succeed.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">🌟</div>
              <h4 className="info-title">Quality Learning</h4>
              <p className="info-text">
                Join thousands of learners achieving their goals with Winwise.
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">💡</div>
              <h4 className="info-title">Innovation Hub</h4>
              <p className="info-text">
                Experience cutting-edge educational technology and methodologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;