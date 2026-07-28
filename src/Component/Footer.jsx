import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer 
      className="luxury-footer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container footer-container py-5">
        <div className="row g-5">
          {/* Section 1 - Brand Information */}
          <div className="col-12 col-md-6 col-lg-3 footer-brand-section text-center text-md-start">
            <h2 className="footer-logo mb-3">GYP Signatures</h2>
            <p className="footer-description mb-4">
              GYP Signatures is a premium bespoke furniture and interior design brand dedicated to creating elegant living spaces with exceptional craftsmanship, luxurious materials, and timeless designs.
            </p>
            <div className="footer-socials d-flex justify-content-center justify-content-md-start gap-3">
              <a href="#" className="social-icon" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" className="social-icon" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" className="social-icon" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" className="social-icon" aria-label="WhatsApp"><FaWhatsapp /></a>
            </div>
          </div>

          {/* Section 2 - Quick Links */}
          <div className="col-12 col-md-6 col-lg-3 footer-links-section text-center text-md-start">
            <h3 className="footer-heading mb-4">Quick Links</h3>
            <ul className="list-unstyled footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/">About Us</Link></li>
              <li><Link to="/">Portfolio</Link></li>
              <li><Link to="/">Showcase</Link></li>
              <li><Link to="/">Materials</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>

          {/* Section 3 - Contact Us */}
          <div className="col-12 col-md-6 col-lg-3 footer-contact-section text-center text-md-start">
            <h3 className="footer-heading mb-4">Contact Us</h3>
            <ul className="list-unstyled footer-contact-info">
              <li className="d-flex align-items-start justify-content-center justify-content-md-start mb-3">
                <FaLocationDot className="contact-icon mt-1 me-2" />
                <span>Srikalahasti,<br/>Andhra Pradesh,<br/>India</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-3">
                <FaPhone className="contact-icon me-2" />
                <span>+91 99999 99999</span>
              </li>
              <li className="d-flex align-items-center justify-content-center justify-content-md-start mb-4">
                <FaEnvelope className="contact-icon me-2" />
                <span>info@gypsignatures.com</span>
              </li>
              <li className="business-hours">
                <strong>Business Hours</strong><br/>
                Monday – Saturday<br/>
                10:00 AM – 7:00 PM
              </li>
            </ul>
          </div>

          {/* Section 4 - Newsletter */}
          <div className="col-12 col-md-6 col-lg-3 footer-newsletter-section text-center text-md-start">
            <h3 className="footer-heading mb-4">Newsletter</h3>
            <p className="newsletter-text mb-4">
              Subscribe to receive the latest luxury furniture collections, design inspiration, and exclusive updates.
            </p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your Email" 
                className="newsletter-input mb-3"
                required
              />
              <button type="submit" className="newsletter-btn w-100">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center text-center text-md-start">
            <div className="col-12 col-md-4 mb-3 mb-md-0">
              <span className="copyright-text">&copy; 2026 GYP Signatures</span>
            </div>
            <div className="col-12 col-md-4 mb-3 mb-md-0 d-flex justify-content-center gap-3 footer-bottom-links">
              <Link to="/">Privacy Policy</Link>
              <Link to="/">Terms & Conditions</Link>
            </div>
            <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-end gap-3 footer-bottom-social-text">
              <a href="https://qubnixtechnology.in/" target="_blank" rel="noopener noreferrer">Developed by Qubnix Technology</a>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
