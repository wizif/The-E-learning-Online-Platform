import React from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from 'react-icons/fa';
import '../styles/Footer.css';



const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        
        {/* Column 1 - About */}
        <div className="footer__col">
          <h4>EduZone</h4>
          <p className="footer__about">
            Empowering learners worldwide with quality education and skill development courses.
          </p>
          <div className="footer__socials">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="Instagram"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="YouTube"><FaYoutube /></a>
          </div>
        </div>

        {/* Column 2 - Links */}
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/courses">Courses</a></li>
            <li><a href="/instructors">Instructors</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 - Support */}
        <div className="footer__col">
          <h4>Support</h4>
          <ul className="footer__links">
            <li><a href="/faq">FAQ</a></li>
            <li><a href="/help-center">Help Center</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/refund">Refund Policy</a></li>
            <li><a href="/careers">Careers</a></li>
          </ul>
        </div>

        {/* Column 4 - Contact */}
        <div className="footer__col">
          <h4>Contact Us</h4>
          <ul className="footer__contact">
            <li>
              <FaMapMarkerAlt />
              <span>123 Education Street, Learning City, 10101</span>
            </li>
            <li>
              <FaPhoneAlt />
              <span>+1 (234) 567-8910</span>
            </li>
            <li>
              <FaEnvelope />
              <span>info@eduzone.com</span>
            </li>
            <li>
              <FaClock />
              <span>Mon-Fri: 9AM - 6PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__copyright">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} EduZone. All rights reserved.</p>
          <div className="footer__payment">
            <span>We accept:</span>
            <div className="payment-icons">
              <span className="visa">Visa</span>
              <span className="mastercard">Mastercard</span>
              <span className="paypal">PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;