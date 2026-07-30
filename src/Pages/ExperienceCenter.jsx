import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaCouch, FaSwatchbook, FaPenNib, FaCoffee, FaChild, 
  FaMapMarkerAlt, FaParking, FaCar, FaRegClock, FaRegCalendarAlt, 
  FaWheelchair, FaCheckCircle, FaUsers, FaSearchLocation,
  FaPhoneAlt, FaWhatsapp, FaRegPlayCircle
} from 'react-icons/fa';
import '../CSS/ExperienceCenter.css';

const ExperienceCenter = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', date: '', time: '', 
    visitType: 'Showroom Visit', projectType: 'Living Room', requirement: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  const galleryImages = [
    { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg', title: 'Living Room' },
    { src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg', title: 'Material Display' },
    { src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg', title: 'Bedroom Suite' },
    { src: 'https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg', title: 'Kitchen' },
    { src: 'https://images.pexels.com/photos/3791558/pexels-photo-3791558.jpeg', title: 'Dining Area' },
    { src: 'https://images.pexels.com/photos/7061672/pexels-photo-7061672.jpeg', title: 'Consultation Area' },
    { src: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg', title: 'Wardrobe' },
    { src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg', title: 'Design Studio' }
  ];

  return (
    <div className="ec-page-container">
      
      {/* 1. HERO BANNER */}
      <section className="ec-hero">
        <div className="ec-hero-bg"></div>
        <div className="ec-hero-overlay"></div>
        
        <div className="ec-floating-shape ec-shape-a"></div>
        <div className="ec-floating-shape ec-shape-b"></div>

        <div className="container ec-hero-content">
          <motion.h4 className="text-uppercase mb-3" style={{letterSpacing: '4px', fontWeight: 600}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}}>
            EXPERIENCE CENTER
          </motion.h4>
          <motion.h1 className="display-3 fw-bold mb-4" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.2}}>
            Experience <span className="ec-gold-text">Luxury</span> Before<br/>You Bring It <span className="ec-gold-text">Home</span>
          </motion.h1>
          <motion.p className="lead mb-5 mx-auto pb-3" style={{maxWidth: '700px', opacity: 0.9}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, delay: 0.4}}>
            Walk through beautifully designed spaces, explore premium materials, and meet our experts.
          </motion.p>
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.6}}>
            <button className="btn-ec-primary" onClick={() => document.getElementById('booking-section').scrollIntoView({behavior: 'smooth'})}>
              Book Your Visit
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="ec-welcome">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div className="ec-image-wrapper" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <img src="https://images.pexels.com/photos/3209045/pexels-photo-3209045.jpeg?auto=compress&cs=tinysrgb&w=800" alt="GYP Experience Center" />
              </motion.div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
                <h4 className="text-muted text-uppercase mb-2" style={{letterSpacing: '2px', fontSize: '0.9rem'}}>Welcome to GYP</h4>
                <h2 className="fw-bold mb-4 display-5">Discover the GYP Experience</h2>
                <p className="lead text-muted mb-4">
                  Our Experience Center is more than just a showroom. It is a creative space where your ideas meet our craftsmanship.
                </p>
                <p className="text-muted mb-5">
                  Explore our exclusive furniture collections, interact with a vast library of material samples, test different finishes, and sit down with our master designers for a personalized consultation before making any decisions.
                </p>
                <button className="btn-ec-outline" onClick={() => document.getElementById('gallery-section').scrollIntoView({behavior: 'smooth'})}>
                  Explore Showroom
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SHOWROOM HIGHLIGHTS */}
      <section className="ec-highlights">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Showroom Highlights</motion.h2>
          </div>
          
          <motion.div className="row g-4" initial="hidden" whileInView="visible" viewport={{once:true}} variants={staggerContainer}>
            {[
              { icon: <FaCouch />, title: "Premium Furniture", desc: "Test the comfort and quality of our luxury furniture." },
              { icon: <FaSwatchbook />, title: "Material Library", desc: "Thousands of fabrics, laminates, and wood samples." },
              { icon: <FaPenNib />, title: "Design Studio", desc: "Watch your ideas come to life in 3D." },
              { icon: <FaUsers />, title: "Consultation Lounge", desc: "Private discussion areas with our experts." },
              { icon: <FaChild />, title: "Kids Zone", desc: "A safe space for kids while you design." },
              { icon: <FaCoffee />, title: "Coffee Lounge", desc: "Enjoy premium beverages during your visit." }
            ].map((item, index) => (
              <motion.div className="col-lg-4 col-md-6" key={index} variants={fadeUp}>
                <div className="ec-highlight-card">
                  <div className="ec-highlight-card-inner">
                    <div className="eh-icon">{item.icon}</div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p className="text-muted mb-0">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. LOCATION */}
      <section className="ec-location">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <motion.div className="ec-location-card shadow-sm" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <h3 className="fw-bold mb-4">Visit Our Location</h3>
                    <ul className="ec-info-list">
                      <li>
                        <FaMapMarkerAlt className="ec-loc-icon mt-1" />
                        <div>
                          <strong>GYP Signatures Experience Center</strong><br/>
                          123 Luxury Avenue, Design District<br/>
                          Mumbai, Maharashtra 400001<br/>
                          <span className="text-muted small">Landmark: Opposite Grand Mall</span>
                        </div>
                      </li>
                      <li>
                        <FaPhoneAlt className="ec-loc-icon mt-1" />
                        <div>
                          <strong>Phone:</strong> +91 98765 43210
                        </div>
                      </li>
                      <li>
                        <FaParking className="ec-loc-icon mt-1" />
                        <div>
                          <strong>Parking:</strong> Valet parking available on site.
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EXPERIENCE GALLERY (MASONRY) */}
      <section className="ec-gallery" id="gallery-section">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Experience Gallery</motion.h2>
            <motion.p className="text-muted" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay:0.1}}>A glimpse into our world of luxury.</motion.p>
          </div>
          
          <motion.div className="ec-masonry" initial="hidden" whileInView="visible" viewport={{once:true}} variants={staggerContainer}>
            {galleryImages.map((img, i) => (
              <motion.div className="ec-gallery-item" key={i} variants={fadeUp}>
                <img src={`${img.src}?auto=compress&cs=tinysrgb&w=600`} alt={img.title} />
                <div className="ec-gallery-overlay">
                  <h4 className="ec-gallery-title">{img.title}</h4>
                  <span className="text-light mt-2" style={{letterSpacing: '1px', fontSize:'0.8rem', textTransform:'uppercase'}}>View Full Image</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>





      {/* 8. OPENING HOURS & 9. BENEFITS */}
      <section className="ec-hours-benefits">
        <div className="container">
          <div className="row">
            
            <div className="col-lg-5 mb-5 mb-lg-0">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <h3 className="fw-bold mb-4">Opening Hours</h3>
                
                <div className="ec-hours-card">
                  <div>
                    <h6 className="fw-bold mb-1">Monday – Friday</h6>
                    <p className="text-muted small mb-0">Showroom & Support</p>
                  </div>
                  <div className="fw-bold text-dark">9:30 AM – 7:00 PM</div>
                </div>
                
                <div className="ec-hours-card">
                  <div>
                    <h6 className="fw-bold mb-1">Saturday</h6>
                    <p className="text-muted small mb-0">Showroom Only</p>
                  </div>
                  <div className="fw-bold text-dark">10:00 AM – 6:00 PM</div>
                </div>

                <div className="ec-hours-card" style={{borderLeftColor: '#E5E7EB'}}>
                  <div>
                    <h6 className="fw-bold mb-1">Sunday</h6>
                    <p className="text-muted small mb-0">Closed</p>
                  </div>
                  <div className="fw-bold text-muted">By Appointment</div>
                </div>

                <div className="mt-4">
                  <span className="ec-badge"><FaCar className="me-1"/> Free Parking</span>
                  <span className="ec-badge"><FaWheelchair className="me-1"/> Wheelchair Accessible</span>
                  <span className="ec-badge"><FaChild className="me-1"/> Family Friendly</span>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-6 offset-lg-1">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <h3 className="fw-bold mb-4">Why Visit Us?</h3>
                <div className="row g-3">
                  {[
                    "Premium Material Display",
                    "Furniture Experience & Trials",
                    "Expert One-on-One Consultation",
                    "3D Design Previews",
                    "Budget Guidance",
                    "Live Product Demonstrations"
                  ].map((benefit, i) => (
                    <div className="col-md-6" key={i}>
                      <div className="p-3 border rounded h-100 d-flex align-items-center" style={{backgroundColor: 'var(--ec-light-gray)'}}>
                        <FaCheckCircle className="text-primary me-3 fs-5" />
                        <span className="fw-bold text-dark">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 10. APPOINTMENT BOOKING FORM */}
      <section className="ec-booking-section" id="booking-section">
        <div className="container">
          <div className="row">
            
            {/* Booking Benefits */}
            <div className="col-lg-5 mb-5 mb-lg-0 pe-lg-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <h4 className="text-muted text-uppercase mb-2" style={{letterSpacing: '2px', fontSize: '0.9rem'}}>Book Appointment</h4>
                <h2 className="fw-bold mb-4 display-6">Plan Your Visit</h2>
                <p className="text-muted mb-5">
                  Schedule your personalized showroom experience. Our design experts are ready to assist you.
                </p>

                <div className="ec-benefit-list-card">
                  <FaPenNib className="ec-benefit-icon" />
                  <h6 className="fw-bold">Personal Designer</h6>
                  <p className="text-muted small mb-0">Get dedicated one-on-one time with a senior designer.</p>
                </div>
                
                <div className="ec-benefit-list-card">
                  <FaSwatchbook className="ec-benefit-icon" />
                  <h6 className="fw-bold">Material Guidance</h6>
                  <p className="text-muted small mb-0">Professional advice on selecting the right textures and finishes.</p>
                </div>

                <div className="ec-benefit-list-card">
                  <FaRegCalendarAlt className="ec-benefit-icon" />
                  <h6 className="fw-bold">Free Consultation</h6>
                  <p className="text-muted small mb-0">Your initial showroom consultation is completely free of charge.</p>
                </div>
              </motion.div>
            </div>

            {/* Glassmorphic Form */}
            <div className="col-lg-7">
              <motion.div className="ec-booking-glass-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit}>
                    <h3 className="fw-bold mb-4 border-bottom pb-3">Booking Details</h3>
                    
                    <div className="row">
                      <div className="col-md-6 eb-form-group">
                        <label className="eb-label">Full Name</label>
                        <input type="text" className="eb-form-control" name="name" value={formData.name} onChange={handleInputChange} placeholder="John Doe" required />
                      </div>
                      <div className="col-md-6 eb-form-group">
                        <label className="eb-label">Phone Number</label>
                        <input type="tel" className="eb-form-control" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="+91 98765 43210" required />
                      </div>
                    </div>

                    <div className="eb-form-group">
                      <label className="eb-label">Email Address</label>
                      <input type="email" className="eb-form-control" name="email" value={formData.email} onChange={handleInputChange} placeholder="john@example.com" required />
                    </div>

                    <div className="row">
                      <div className="col-md-6 eb-form-group">
                        <label className="eb-label">Preferred Date <FaRegCalendarAlt className="ms-1 text-muted"/></label>
                        <input type="date" className="eb-form-control" name="date" value={formData.date} onChange={handleInputChange} required />
                      </div>
                      <div className="col-md-6 eb-form-group">
                        <label className="eb-label">Preferred Time <FaRegClock className="ms-1 text-muted"/></label>
                        <select className="eb-form-select" name="time" value={formData.time} onChange={handleInputChange} required>
                          <option value="">Select Time</option>
                          <option>10:00 AM</option>
                          <option>11:00 AM</option>
                          <option>12:00 PM</option>
                          <option>2:00 PM</option>
                          <option>3:00 PM</option>
                          <option>4:00 PM</option>
                          <option>5:00 PM</option>
                        </select>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 eb-form-group">
                        <label className="eb-label">Visit Type</label>
                        <select className="eb-form-select" name="visitType" value={formData.visitType} onChange={handleInputChange}>
                          <option>Showroom Visit</option>
                          <option>Home Consultation</option>
                          <option>Video Consultation</option>
                        </select>
                      </div>
                      <div className="col-md-6 eb-form-group">
                        <label className="eb-label">Project Type</label>
                        <select className="eb-form-select" name="projectType" value={formData.projectType} onChange={handleInputChange}>
                          <option>Living Room</option>
                          <option>Bedroom</option>
                          <option>Kitchen</option>
                          <option>Complete Home</option>
                          <option>Office</option>
                          <option>Commercial</option>
                        </select>
                      </div>
                    </div>

                    <div className="eb-form-group">
                      <label className="eb-label">Requirement Details</label>
                      <textarea className="eb-form-control" name="requirement" value={formData.requirement} onChange={handleInputChange} rows="3" placeholder="e.g., Modular Kitchen, Custom Wardrobe, Full Interior Design..." required></textarea>
                    </div>

                    <button type="submit" className="btn-ec-primary w-100 mt-2" style={{padding: '18px'}}>
                      Book Appointment
                    </button>
                  </form>
                ) : (
                  <motion.div className="ec-summary-card" initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}}>
                    <FaCheckCircle className="ec-success-icon" />
                    <h3 className="fw-bold mb-3">Booking Confirmed</h3>
                    <p className="text-muted mb-4">Thank you, {formData.name || 'Valued Client'}! Our design team will contact you shortly to confirm your visit.</p>
                    
                    <div className="text-start bg-light p-4 rounded text-dark">
                      <p className="mb-2"><strong>Date:</strong> {formData.date}</p>
                      <p className="mb-2"><strong>Time:</strong> {formData.time}</p>
                      <p className="mb-2"><strong>Visit Type:</strong> {formData.visitType}</p>
                      <p className="mb-0"><strong>Ref ID:</strong> #GYP-{Math.floor(1000 + Math.random() * 9000)}</p>
                    </div>
                    
                    <button className="btn-ec-outline mt-4" onClick={() => setIsSubmitted(false)}>Book Another Visit</button>
                  </motion.div>
                )}
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="ec-faq">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Frequently Asked Questions</motion.h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="ecFaq">
                {[
                  { q: "Is the showroom consultation free?", a: "Yes, your initial consultation with our design experts is completely free and comes with no obligations." },
                  { q: "Do I need an appointment to visit?", a: "While walk-ins are welcome, we highly recommend booking an appointment so we can assign a dedicated designer to assist you." },
                  { q: "Can I reschedule my appointment?", a: "Absolutely. You can call us or reply to your confirmation email to reschedule your visit at any time." },
                  { q: "How long does a visit usually take?", a: "A typical showroom visit and initial design consultation takes between 45 to 90 minutes." },
                  { q: "Can I bring family members?", a: "Yes! We encourage you to bring anyone involved in the decision-making process. We even have a safe Kids Zone for children." }
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

      {/* 12. FINAL CTA */}
      <section className="ec-final-cta">
        <div className="container position-relative" style={{zIndex: 2}}>
          <motion.h2 className="display-4 fw-bold mb-4" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            Need Immediate Assistance?
          </motion.h2>
          <motion.p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
            Our design team is available right now to answer your questions.
          </motion.p>
          <motion.div className="d-flex flex-column flex-sm-row justify-content-center gap-3" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.4}}>
            <button className="btn btn-light px-5 py-3 rounded-pill fw-bold text-uppercase d-flex align-items-center justify-content-center" style={{color: 'var(--ec-purple)'}} onClick={() => window.location.href = 'tel:+919876543210'}>
              <FaPhoneAlt className="me-2" /> Call Now
            </button>
            <button className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold text-uppercase d-flex align-items-center justify-content-center" onClick={() => window.open('https://wa.me/919876543210', '_blank')}>
              <FaWhatsapp className="me-2" /> WhatsApp
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default ExperienceCenter;
