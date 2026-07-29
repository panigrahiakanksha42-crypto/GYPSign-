import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaHome, FaMapMarkerAlt, FaMap, FaCalendarAlt, FaPhoneAlt, 
  FaClipboardList, FaUserTie, FaRulerCombined, FaLayerGroup, 
  FaHandshake, FaRegClock, FaCity, FaPlus, FaMinus
} from 'react-icons/fa';
import '../CSS/HomeSiteVisit.css';

const HomeSiteVisit = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  // FAQ State
  const [activeFaq, setActiveFaq] = useState(0);

  // Form State & Validation
  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', address: '', gLocation: '',
    city: '', date: '', time: '', projectType: '', requirements: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    if (errors[e.target.id]) {
      setErrors({ ...errors, [e.target.id]: '' });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    if (!formData.phone.trim() || !/^\d{10}$/.test(formData.phone.replace(/\D/g,''))) newErrors.phone = 'Valid 10-digit phone number is required';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.address.trim()) newErrors.address = 'Property Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.date) newErrors.date = 'Preferred Date is required';
    if (!formData.time) newErrors.time = 'Preferred Time is required';
    if (!formData.projectType) newErrors.projectType = 'Project Type is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitStatus({ type: 'success', message: 'Your Home Visit request has been successfully submitted! Our team will contact you shortly to confirm the appointment.' });
      setFormData({
        fullName: '', phone: '', email: '', address: '', gLocation: '',
        city: '', date: '', time: '', projectType: '', requirements: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } else {
      setSubmitStatus({ type: 'error', message: 'Please fix the errors in the form before submitting.' });
    }
  };

  const faqs = [
    {
      q: "Is the home visit free?",
      a: "Yes, our initial home consultation and measurement visit is completely free of charge with no obligations."
    },
    {
      q: "How long does the visit take?",
      a: "A typical home visit takes about 45 to 60 minutes, depending on the size of your property and the scope of the project."
    },
    {
      q: "Can I reschedule my appointment?",
      a: "Absolutely. If you need to reschedule, simply contact our support team at least 12 hours before your scheduled time."
    },
    {
      q: "Do I need to prepare anything?",
      a: "It's helpful if you have a rough idea of your requirements, budget, and any inspiration photos. However, it's not strictly necessary!"
    },
    {
      q: "Can multiple family members attend?",
      a: "Yes! We encourage decision-makers to be present during the consultation so we can understand everyone's vision."
    }
  ];

  return (
    <div className="home-site-visit-page">
      
      {/* 1. HERO BANNER */}
      <section className="hsv-hero">
        <div className="hsv-hero-bg"></div>
        <div className="hsv-hero-overlay"></div>
        
        <div className="hsv-shape hsv-shape-1"></div>
        <div className="hsv-shape hsv-shape-2"></div>

        <div className="container hsv-hero-content">
          <motion.h4 className="text-uppercase mb-3" style={{letterSpacing: '4px', fontWeight: 600}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}}>
            HOME SITE VISIT
          </motion.h4>
          <motion.h1 className="display-3 fw-bold mb-4" initial={{opacity:0, y: 20}} animate={{opacity:1, y:0}} transition={{delay: 0.3, duration: 0.8}}>
            We Bring Design<br/>Expertise to Your Home
          </motion.h1>
          <motion.p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: 0.6, duration: 0.8}}>
            Book a personalized home consultation with our interior experts and get tailored design solutions.
          </motion.p>
          <motion.a href="#booking-form" className="btn btn-light rounded-pill px-5 py-3 fw-bold shadow-lg text-primary" initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay: 0.9, duration: 0.5}}>
            Book Home Visit
          </motion.a>
        </div>
      </section>

      {/* 2. OVERVIEW */}
      <section className="hsv-overview">
        <div className="container">
          <div className="row align-items-center">
            <motion.div className="col-lg-6 mb-5 mb-lg-0" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
              <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Designer consultation" className="hsv-overview-img" />
            </motion.div>
            <motion.div className="col-lg-5 offset-lg-1" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
              <h2 className="display-6 fw-bold mb-4">Personalized Design Consultation at Your Doorstep</h2>
              <p className="text-muted lead mb-4">
                Our experienced designers visit your home to understand your space, discuss your lifestyle, take accurate measurements, recommend suitable materials, and provide expert guidance before your project begins.
              </p>
              <ul className="hsv-feature-list mb-5">
                <li><FaUserTie className="hsv-feature-icon" /> Personalized consultation</li>
                <li><FaRulerCombined className="hsv-feature-icon" /> Accurate site measurements</li>
                <li><FaLayerGroup className="hsv-feature-icon" /> Material recommendations</li>
                <li><FaClipboardList className="hsv-feature-icon" /> Budget guidance</li>
                <li><FaMap className="hsv-feature-icon" /> Space planning</li>
                <li><FaHome className="hsv-feature-icon" /> Design suggestions</li>
              </ul>
              <a href="#booking-form" className="btn-hsv-primary text-decoration-none d-inline-block text-center" style={{width: 'auto'}}>Schedule a Visit</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY BOOK A HOME VISIT? */}
      <section className="hsv-benefits">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Why Book a Home Visit?</motion.h2>
            <motion.p className="text-muted" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Experience a concierge-level design service.</motion.p>
          </div>
          <motion.div className="row g-4" initial="hidden" whileInView="visible" viewport={{once:true}} variants={staggerContainer}>
            
            <motion.div className="col-md-6 col-lg-4" variants={fadeUp}>
              <div className="hsv-benefit-card">
                <div className="hsv-benefit-icon"><FaRulerCombined /></div>
                <h5 className="fw-bold mb-3">Professional Measurement</h5>
                <p className="text-muted mb-0">We take precise dimensions to ensure your custom furniture fits flawlessly into your layout.</p>
              </div>
            </motion.div>

            <motion.div className="col-md-6 col-lg-4" variants={fadeUp}>
              <div className="hsv-benefit-card">
                <div className="hsv-benefit-icon"><FaLayerGroup /></div>
                <h5 className="fw-bold mb-3">Material Consultation</h5>
                <p className="text-muted mb-0">Feel and see premium fabric, wood, and laminate samples directly under your home's lighting.</p>
              </div>
            </motion.div>

            <motion.div className="col-md-6 col-lg-4" variants={fadeUp}>
              <div className="hsv-benefit-card">
                <div className="hsv-benefit-icon"><FaMap /></div>
                <h5 className="fw-bold mb-3">Space Planning</h5>
                <p className="text-muted mb-0">Our designers evaluate the flow of your room to recommend optimal furniture arrangements.</p>
              </div>
            </motion.div>

            <motion.div className="col-md-6 col-lg-4" variants={fadeUp}>
              <div className="hsv-benefit-card">
                <div className="hsv-benefit-icon"><FaClipboardList /></div>
                <h5 className="fw-bold mb-3">Budget Estimation</h5>
                <p className="text-muted mb-0">Get on-the-spot realistic estimates for your interior project based on your requirements.</p>
              </div>
            </motion.div>

            <motion.div className="col-md-6 col-lg-4" variants={fadeUp}>
              <div className="hsv-benefit-card">
                <div className="hsv-benefit-icon"><FaHandshake /></div>
                <h5 className="fw-bold mb-3">Design Discussion</h5>
                <p className="text-muted mb-0">Collaborate with our experts to match your personal style with functional luxury.</p>
              </div>
            </motion.div>

            <motion.div className="col-md-6 col-lg-4" variants={fadeUp}>
              <div className="hsv-benefit-card">
                <div className="hsv-benefit-icon"><FaUserTie /></div>
                <h5 className="fw-bold mb-3">Expert Recommendations</h5>
                <p className="text-muted mb-0">Receive professional advice on color palettes, lighting, and decor to elevate your space.</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* 4. BOOKING FORM */}
      <section className="hsv-booking-section" id="booking-form">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-9">
              <motion.div className="hsv-booking-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <div className="text-center mb-5">
                  <h3 className="fw-bold" style={{color: 'var(--hsv-royal-purple)'}}>HOME VISIT REQUEST</h3>
                  <p className="text-muted">Fill out the form below and our team will get in touch to confirm your appointment.</p>
                </div>
                
                <form onSubmit={handleSubmit}>
                  {submitStatus && (
                    <div className={`alert alert-${submitStatus.type === 'success' ? 'success' : 'danger'} mb-4`} role="alert">
                      {submitStatus.message}
                    </div>
                  )}
                  <h6 className="fw-bold mb-3 text-uppercase text-muted" style={{letterSpacing: '1px'}}>Personal Details</h6>
                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon"><FaUserTie /></span>
                        <input type="text" className={`form-control ${errors.fullName ? 'is-invalid' : ''}`} id="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
                        {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon"><FaPhoneAlt /></span>
                        <input type="tel" className={`form-control ${errors.phone ? 'is-invalid' : ''}`} id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                        {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon" style={{fontSize: '1rem', marginTop: '2px'}}>@</span>
                        <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                    </div>
                  </div>

                  <h6 className="fw-bold mb-3 text-uppercase text-muted" style={{letterSpacing: '1px'}}>Property Details</h6>
                  <div className="row g-3 mb-4">
                    <div className="col-md-12">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon hsv-input-icon-textarea"><FaMapMarkerAlt /></span>
                        <textarea className={`form-control ${errors.address ? 'is-invalid' : ''}`} id="address" placeholder="Property Address" value={formData.address} onChange={handleChange}></textarea>
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hsv-form-group mb-0">
                        <span className="hsv-input-icon"><FaMap /></span>
                        <input type="text" className="form-control" id="gLocation" placeholder="Google Map Link (Optional)" value={formData.gLocation} onChange={handleChange} />
                      </div>
                      <div className="text-end mb-3 mt-1">
                        <button type="button" className="btn btn-sm btn-link text-decoration-none p-0">📍 Use Current Location</button>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon"><FaCity /></span>
                        <select className={`form-select ${errors.city ? 'is-invalid' : ''}`} id="city" value={formData.city} onChange={handleChange}>
                          <option value="" disabled>Select City</option>
                          <option value="Bhubaneswar">Bhubaneswar</option>
                          <option value="Cuttack">Cuttack</option>
                          <option value="Puri">Puri</option>
                          <option value="Balasore">Balasore</option>
                          <option value="Other">Other</option>
                        </select>
                        {errors.city && <div className="invalid-feedback">{errors.city}</div>}
                      </div>
                    </div>
                  </div>

                  <h6 className="fw-bold mb-3 text-uppercase text-muted" style={{letterSpacing: '1px'}}>Appointment Details</h6>
                  <div className="row g-3 mb-4">
                    <div className="col-md-4">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon"><FaCalendarAlt /></span>
                        <input type="date" className={`form-control ${errors.date ? 'is-invalid' : ''}`} id="date" value={formData.date} onChange={handleChange} />
                        {errors.date && <div className="invalid-feedback">{errors.date}</div>}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon"><FaRegClock /></span>
                        <select className={`form-select ${errors.time ? 'is-invalid' : ''}`} id="time" value={formData.time} onChange={handleChange}>
                          <option value="" disabled>Preferred Time</option>
                          <option value="10:00 AM">10:00 AM</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="1:00 PM">1:00 PM</option>
                          <option value="2:30 PM">2:30 PM</option>
                          <option value="4:00 PM">4:00 PM</option>
                          <option value="5:30 PM">5:30 PM</option>
                        </select>
                        {errors.time && <div className="invalid-feedback">{errors.time}</div>}
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon"><FaHome /></span>
                        <select className={`form-select ${errors.projectType ? 'is-invalid' : ''}`} id="projectType" value={formData.projectType} onChange={handleChange}>
                          <option value="" disabled>Project Type</option>
                          <option value="Living Room">Living Room</option>
                          <option value="Bedroom">Bedroom</option>
                          <option value="Kitchen">Kitchen</option>
                          <option value="Wardrobe">Wardrobe</option>
                          <option value="Complete Home">Complete Home</option>
                          <option value="Villa">Villa</option>
                          <option value="Office">Office</option>
                          <option value="Commercial">Commercial</option>
                        </select>
                        {errors.projectType && <div className="invalid-feedback">{errors.projectType}</div>}
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="hsv-form-group">
                        <span className="hsv-input-icon hsv-input-icon-textarea"><FaClipboardList /></span>
                        <textarea className="form-control" id="requirements" placeholder="Tell us about your project..." value={formData.requirements} onChange={handleChange}></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="text-center mt-5">
                    <button type="submit" className="btn-hsv-primary">Schedule Home Visit</button>
                  </div>
                </form>

              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS TIMELINE */}
      <section className="hsv-timeline-section">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>What Happens During the Visit?</motion.h2>
          </div>
          
          <motion.div className="hsv-timeline" initial="hidden" whileInView="visible" viewport={{once:true}} variants={staggerContainer}>
            
            <motion.div className="hsv-timeline-step" variants={fadeUp}>
              <div className="hsv-timeline-num">1</div>
              <h6 className="fw-bold">Designer Arrives</h6>
              <p className="text-muted small">Prompt arrival at your scheduled time.</p>
            </motion.div>
            
            <motion.div className="hsv-timeline-step" variants={fadeUp}>
              <div className="hsv-timeline-num">2</div>
              <h6 className="fw-bold">Space Measurement</h6>
              <p className="text-muted small">Accurate laser dimensions of your rooms.</p>
            </motion.div>

            <motion.div className="hsv-timeline-step" variants={fadeUp}>
              <div className="hsv-timeline-num">3</div>
              <h6 className="fw-bold">Design Discussion</h6>
              <p className="text-muted small">Understanding your vision and lifestyle.</p>
            </motion.div>

            <motion.div className="hsv-timeline-step" variants={fadeUp}>
              <div className="hsv-timeline-num">4</div>
              <h6 className="fw-bold">Material Suggestions</h6>
              <p className="text-muted small">Reviewing physical samples together.</p>
            </motion.div>

            <motion.div className="hsv-timeline-step" variants={fadeUp}>
              <div className="hsv-timeline-num">5</div>
              <h6 className="fw-bold">Budget Planning</h6>
              <p className="text-muted small">Setting realistic financial expectations.</p>
            </motion.div>

            <motion.div className="hsv-timeline-step" variants={fadeUp}>
              <div className="hsv-timeline-num">6</div>
              <h6 className="fw-bold">Next Steps</h6>
              <p className="text-muted small">Moving towards final quotation and 3D.</p>
            </motion.div>

          </motion.div>
        </div>
      </section>


      {/* 7. FAQ */}
      <section className="hsv-faq">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Frequently Asked Questions</motion.h2>
              </div>
              
              <div className="hsv-accordion">
                {faqs.map((faq, index) => (
                  <div className={`hsv-accordion-item ${activeFaq === index ? 'active' : ''}`} key={index}>
                    <div className="hsv-accordion-header" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                      <span>{faq.q}</span>
                      <span>{activeFaq === index ? <FaMinus /> : <FaPlus />}</span>
                    </div>
                    <div className="hsv-accordion-content">
                      <p className="mb-0 text-muted">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section className="hsv-cta">
        <div className="hsv-cta-overlay"></div>
        <div className="container hsv-cta-content">
          <h2 className="display-5 fw-bold mb-4">Ready to Transform Your Home?</h2>
          <p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}}>
            Our designers are just one appointment away. Book your home visit today and start your luxury interior journey.
          </p>
          <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
            <a href="#booking-form" className="btn-hsv-light">Schedule Visit</a>
            <a href="tel:+919999999999" className="btn-hsv-outline">Call Our Experts</a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomeSiteVisit;
