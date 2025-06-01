import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Later: connect to email API or backend
    alert("Thanks for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
//



// import React, { useState } from 'react';
// import './Contact.css';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '', email: '', message: ''
//   });

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prev => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     alert('Form submitted!');
//     console.log(formData);
//     // Optional: use Formspree or EmailJS
//   };

//   return (
//     <div className="contact-container">
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit} className="contact-form">
//         <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
//         <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
//         <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default Contact;
