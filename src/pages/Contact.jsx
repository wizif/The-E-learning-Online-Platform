import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const formRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    // Initial animation
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 50,
      duration: 0.8,
      ease: "power3.out"
    });

    // Animate form elements sequentially
    gsap.from(".contact-form input, .contact-form textarea, .contact-form button", {
      opacity: 0,
      y: 20,
      duration: 0.5,
      stagger: 0.1,
      delay: 0.3,
      ease: "back.out"
    });
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
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
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      // Shake animation for errors
      gsap.to(formRef.current, {
        x: [-5, 5, -5, 5, 0],
        duration: 0.3,
        ease: "power1.inOut"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success animation
      gsap.to(formRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        onComplete: () => {
          setSubmitStatus("success");
          gsap.from(".success-message", {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "back.out"
          });
        }
      });
      
      console.log("Form submitted:", formData);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
      console.error("Submission error:", error);
      
      // Error animation
      gsap.from(".error-message", {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.out"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus(null);
    gsap.to(".success-message, .error-message", {
      opacity: 0,
      y: -20,
      duration: 0.3,
      onComplete: () => {
        gsap.from(formRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          ease: "back.out"
        });
      }
    });
  };

  return (
    <div className="contact-container" ref={containerRef}>
      <h2>Contact Us</h2>
      
      {submitStatus === "success" ? (
        <div className="success-message">
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path fill="#4CAF50" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <h3>Thank You!</h3>
          <p>Your message has been sent successfully.</p>
          <button onClick={resetForm} className="reset-button">
            Send Another Message
          </button>
        </div>
      ) : submitStatus === "error" ? (
        <div className="error-message">
          <svg viewBox="0 0 24 24" width="48" height="48">
            <path fill="#F44336" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
          <h3>Oops!</h3>
          <p>Something went wrong. Please try again.</p>
          <button onClick={resetForm} className="reset-button">
            Try Again
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form" ref={formRef}>
          <div className="form-group">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className={errors.name ? "error" : ""}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>
          
          <div className="form-group">
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Your Email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>
          
          <div className="form-group">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows="5"
              className={errors.message ? "error" : ""}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>
          
          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;