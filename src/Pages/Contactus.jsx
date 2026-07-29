import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, 
  FaBuilding, FaHome, FaDesktop, FaCheckCircle, 
  FaRegLightbulb, FaCoins, FaClipboardList, FaUsers, 
  FaInstagram, FaFacebookF, FaPinterestP, FaYoutube, FaLinkedinIn
} from 'react-icons/fa';
import '../CSS/Contactus.css';

const Contactus = () => {
  const [bookingType, setBookingType] = useState('Experience Center Visit');
  const [openFaq, setOpenFaq] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="contact-page-container">
      {/* 1. HERO BANNER */}
      <section className="contact-hero">
        <div className="contact-hero-bg"></div>
        <div className="contact-hero-overlay"></div>
        
        {/* Floating Shapes */}
        <div className="contact-floating-shape shape-a"></div>
        <div className="contact-floating-shape shape-b"></div>
        
        <div className="container contact-hero-content">
          <motion.h4 className="text-uppercase mb-3" style={{letterSpacing: '3px', fontWeight: 600}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}}>
            CONTACT US
          </motion.h4>
          <motion.h1 className="display-3 fw-bold mb-4" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.2}}>
            Let's Build Something<br/>Beautiful Together
          </motion.h1>
          <motion.p className="lead mb-5 pb-4 mx-auto" style={{maxWidth: '600px', opacity: 0.9}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, delay: 0.4}}>
            Have a question or planning your dream home? Our experts are here to help.
          </motion.p>
          <motion.div className="d-flex flex-column flex-sm-row justify-content-center gap-3" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.6}}>
            <button className="btn-contact-primary" onClick={() => document.getElementById('book-section').scrollIntoView({behavior: 'smooth'})}>
              Book Consultation
            </button>
            <button className="btn-contact-outline" onClick={() => window.location.href = 'tel:+919876543210'}>
              Call Us
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="contact-welcome">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div className="contact-image-wrapper" initial="hidden" whileInView="visible" viewport={{once:true}} variants={slideLeft}>
                <img src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Designer Meeting" />
              </motion.div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={slideRight}>
                <h4 className="text-muted text-uppercase mb-2" style={{letterSpacing: '2px', fontSize: '0.9rem'}}>Welcome to GYP Signatures</h4>
                <h2 className="fw-bold mb-4 display-5">We'd Love to Hear About Your Project</h2>
                <p className="lead text-muted mb-4">
                  Whether you're planning a single room makeover or a complete luxury home, our design team is ready to guide you from concept to completion.
                </p>
                <button className="btn-contact-outline-dark" onClick={() => document.getElementById('message-section').scrollIntoView({behavior: 'smooth'})}>
                  Send an Inquiry
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT INFORMATION (OVERLAPPING GRIDS IF DESIRED, OR NORMAL FLOW) */}
      <section className="contact-info-section pb-5" style={{marginTop: '-20px'}}>
        <div className="container">
          <div className="contact-info-grid">
            <motion.div className="contact-info-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.1}}>
              <div className="ci-icon"><FaMapMarkerAlt /></div>
              <h5 className="fw-bold">Visit Us</h5>
              <p className="text-muted small mb-0 flex-grow-1">123 Luxury Avenue, Design District, Mumbai, 400001</p>
              <a href="#map" className="ci-link">View on Map →</a>
            </motion.div>

            <motion.div className="contact-info-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
              <div className="ci-icon"><FaPhoneAlt /></div>
              <h5 className="fw-bold">Call Us</h5>
              <p className="text-muted small mb-0 flex-grow-1">Mon-Sat from 9:30 AM to 7:00 PM</p>
              <a href="tel:+919876543210" className="ci-link">+91 98765 43210 →</a>
            </motion.div>

            <motion.div className="contact-info-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.3}}>
              <div className="ci-icon"><FaEnvelope /></div>
              <h5 className="fw-bold">Email Us</h5>
              <p className="text-muted small mb-0 flex-grow-1">We typically reply within 24 hours.</p>
              <a href="mailto:hello@gypsignatures.com" className="ci-link">hello@gypsignatures.com →</a>
            </motion.div>

            <motion.div className="contact-info-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.4}}>
              <div className="ci-icon"><FaWhatsapp /></div>
              <h5 className="fw-bold">WhatsApp</h5>
              <p className="text-muted small mb-0 flex-grow-1">Chat instantly with our design experts.</p>
              <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="ci-link">Start Chat →</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. SEND US A MESSAGE */}
      <section className="contact-form-section" id="message-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0 d-none d-lg-block">
               <motion.div className="contact-image-wrapper h-100" initial="hidden" whileInView="visible" viewport={{once:true}} variants={slideLeft}>
                <img src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Luxury Interior" style={{minHeight: '650px'}} />
              </motion.div>
            </div>
            <div className="col-lg-7 ps-lg-5">
              <motion.div className="contact-form-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <h3 className="fw-bold mb-2">Send Us a Message</h3>
                <p className="text-muted mb-4">Fill out the form below and our team will get back to you shortly.</p>
                
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
                    <div className="col-md-6 c-form-group">
                      <label className="c-form-label">Full Name</label>
                      <input type="text" className="c-form-control" placeholder="John Doe" required />
                    </div>
                    <div className="col-md-6 c-form-group">
                      <label className="c-form-label">Email Address</label>
                      <input type="email" className="c-form-control" placeholder="john@example.com" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 c-form-group">
                      <label className="c-form-label">Phone Number</label>
                      <input type="tel" className="c-form-control" placeholder="+91 98765 43210" required />
                    </div>
                    <div className="col-md-6 c-form-group">
                      <label className="c-form-label">City</label>
                      <input type="text" className="c-form-control" placeholder="Mumbai" required />
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6 c-form-group">
                      <label className="c-form-label">Project Type</label>
                      <select className="c-form-select">
                        <option>Residential</option>
                        <option>Commercial</option>
                        <option>Retail</option>
                      </select>
                    </div>
                    <div className="col-md-6 c-form-group">
                      <label className="c-form-label">Room Type</label>
                      <select className="c-form-select">
                        <option>Full Home</option>
                        <option>Living Room</option>
                        <option>Kitchen</option>
                        <option>Bedroom</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="c-form-group">
                    <label className="c-form-label">Message</label>
                    <textarea className="c-form-control" rows="4" placeholder="Tell us a bit about your project..." required></textarea>
                  </div>

                  <button type="submit" className="btn-contact-primary w-100 mt-2">
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BOOK A CONSULTATION */}
      <section className="booking-section" id="book-section">
        <div className="container">

          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
                <div className="booking-type-grid">
                  <div className={`booking-card ${bookingType === 'Experience Center Visit' ? 'selected' : ''}`} onClick={() => setBookingType('Experience Center Visit')}>
                    <FaBuilding className="b-icon" />
                    <h6 className="fw-bold mb-0">Experience Center Visit</h6>
                  </div>
                  <div className={`booking-card ${bookingType === 'Home Visit' ? 'selected' : ''}`} onClick={() => setBookingType('Home Visit')}>
                    <FaHome className="b-icon" />
                    <h6 className="fw-bold mb-0">Home Site Visit</h6>
                  </div>
                  <div className={`booking-card ${bookingType === 'Video Consultation' ? 'selected' : ''}`} onClick={() => setBookingType('Video Consultation')}>
                    <FaDesktop className="b-icon" />
                    <h6 className="fw-bold mb-0">Video Consultation</h6>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. VISIT EXPERIENCE CENTER & 7. BUSINESS HOURS */}
      <section className="experience-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <h4 className="text-muted text-uppercase mb-2" style={{letterSpacing: '2px', fontSize: '0.9rem'}}>Our Showroom</h4>
                <h2 className="fw-bold mb-4">Experience Luxury Before You Decide</h2>
                <p className="text-muted mb-4 lead">
                  Touch the materials, feel the finishes, and visualize your future home in our state-of-the-art Experience Center.
                </p>
                <ul className="feature-list mb-5">
                  <li><FaCheckCircle /> Premium Material Display</li>
                  <li><FaCheckCircle /> Finished Furniture Samples</li>
                  <li><FaCheckCircle /> On-site Design Experts</li>
                  <li><FaCheckCircle /> Extensive Material Library</li>
                </ul>
              </motion.div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={slideRight}>
                <h3 className="fw-bold mb-4">Business Hours</h3>
                
                <div className="hours-card">
                  <div>
                    <h6 className="fw-bold mb-1">Monday – Friday</h6>
                    <p className="text-muted small mb-0">Showroom & Support</p>
                  </div>
                  <div className="fw-bold text-dark">9:30 AM – 7:00 PM</div>
                </div>
                
                <div className="hours-card">
                  <div>
                    <h6 className="fw-bold mb-1">Saturday</h6>
                    <p className="text-muted small mb-0">Showroom Only</p>
                  </div>
                  <div className="fw-bold text-dark">10:00 AM – 6:00 PM</div>
                </div>

                <div className="hours-card" style={{borderLeftColor: '#E5E7EB'}}>
                  <div>
                    <h6 className="fw-bold mb-1">Sunday</h6>
                    <p className="text-muted small mb-0">Closed</p>
                  </div>
                  <div className="fw-bold text-muted">By Appointment</div>
                </div>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHY CONTACT GYP */}
      <section className="why-contact-section">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>What You Can Expect</motion.h2>
          </div>
          
          <div className="why-contact-grid">
            {[
              { icon: <FaRegLightbulb />, title: "Free Consultation" },
              { icon: <FaClipboardList />, title: "Custom Design Advice" },
              { icon: <FaCheckCircle />, title: "Material Guidance" },
              { icon: <FaCoins />, title: "Budget Planning" },
              { icon: <FaDesktop />, title: "3D Visualization" },
              { icon: <FaUsers />, title: "Complete Project Support" }
            ].map((item, index) => (
              <motion.div className="wc-card" key={index} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                <div className="wc-icon">{item.icon}</div>
                <h5 className="fw-bold mb-0">{item.title}</h5>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="contact-faq">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Frequently Asked Questions</motion.h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="contactFaq">
                {[
                  { q: "Do you provide free consultations?", a: "Yes, our initial design consultation is completely free. You can meet our experts to discuss your ideas and requirements without any obligations." },
                  { q: "Do you offer home visits?", a: "Yes! We can arrange for a designer to visit your site to take accurate measurements and better understand the space." },
                  { q: "Can I customize every design?", a: "Absolutely. GYP Signatures specializes in 100% bespoke furniture and interiors tailored to your exact taste." },
                  { q: "How long does a project take?", a: "A typical full-home interior project takes between 45 to 60 days from finalization of designs to complete installation." },
                  { q: "Do you provide installation services?", a: "Yes, we handle everything end-to-end, including safe delivery and professional on-site installation." }
                ].map((faq, index) => (
                  <div className="accordion-item bg-transparent border-0 border-bottom mb-2" key={index}>
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button bg-transparent shadow-none fw-bold fs-5 text-dark ${openFaq !== index ? 'collapsed' : ''}`} 
                        type="button" 
                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                        style={{padding: '25px 0'}}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }} 
                          animate={{ height: 'auto', opacity: 1 }} 
                          exit={{ height: 0, opacity: 0 }}
                          className="accordion-collapse overflow-hidden"
                        >
                          <div className="accordion-body text-muted pb-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. GOOGLE MAP */}
      <section id="map" className="map-section">
        <iframe 
          title="GYP Signatures Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d241317.11609823277!2d72.74109995736186!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692185203387!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      {/* 11. SOCIAL MEDIA */}
      <section className="social-media-section">
        <div className="container">
          <motion.h3 className="fw-bold mb-5" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Stay Connected</motion.h3>
          <motion.div className="social-icons-wrapper" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
            <a href="#" className="social-icon-large"><FaInstagram /></a>
            <a href="#" className="social-icon-large"><FaFacebookF /></a>
            <a href="#" className="social-icon-large"><FaPinterestP /></a>
            <a href="#" className="social-icon-large"><FaYoutube /></a>
            <a href="#" className="social-icon-large"><FaLinkedinIn /></a>
          </motion.div>
        </div>
      </section>

      {/* 12. PREMIUM CTA */}
      <section className="contact-cta">
        <div className="container position-relative" style={{zIndex: 2}}>
          <motion.h2 className="display-4 fw-bold mb-4" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            Ready to Create<br/>Your Dream Space?
          </motion.h2>
          <motion.p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
            Let's discuss your ideas and bring them to life with premium craftsmanship.
          </motion.p>
          <motion.div className="d-flex flex-column flex-sm-row justify-content-center gap-3" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.4}}>
            <button className="btn btn-light px-5 py-3 rounded-pill fw-bold text-uppercase" style={{color: 'var(--contact-purple)'}} onClick={() => document.getElementById('book-section').scrollIntoView({behavior: 'smooth'})}>
              Book Consultation
            </button>
            <button className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold text-uppercase" onClick={() => window.location.href = 'tel:+919876543210'}>
              Call Our Team
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Contactus;
