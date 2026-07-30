import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaComments, FaPenNib, FaSwatchbook, FaIndustry, 
  FaClipboardCheck, FaTruck, FaTools, FaGem, 
  FaShieldAlt, FaArrowsAltH, FaArrowRight
} from 'react-icons/fa';
import '../CSS/OurProcess.css';

const OurProcess = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle Before & After Slider
  const handleMove = (e) => {
    if (!isDragging) return;
    const container = document.getElementById('before-after-container');
    if (container) {
      const rect = container.getBoundingClientRect();
      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const percent = (x / rect.width) * 100;
      setSliderPosition(percent);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const steps = [
    { icon: FaComments, title: "Consultation", desc: "We understand your lifestyle, preferences, budget, and vision." },
    { icon: FaPenNib, title: "Design", desc: "Space planning, mood boards, and 3D concepts." },
    { icon: FaSwatchbook, title: "Material", desc: "Selecting premium woods, fabrics, and finishes." },
    { icon: FaIndustry, title: "Production", desc: "Expert craftsmanship and precision manufacturing." },
    { icon: FaClipboardCheck, title: "Quality", desc: "Multiple quality checks and safe packaging." },
    { icon: FaTruck, title: "Delivery", desc: "Safe transportation and professional handling." },
    { icon: FaTools, title: "Installation", desc: "Professional installation and final walkthrough." }
  ];

  return (
    <div className="process-page">
      
      {/* 1. HERO BANNER */}
      <section className="process-hero">
        <div className="process-hero-bg"></div>
        <div className="process-hero-overlay"></div>
        {/* Animated Background Orbs */}
        <div className="process-orb process-orb-1"></div>
        <div className="process-orb process-orb-2"></div>

        <div className="container process-hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="mb-4">
              <span className="badge rounded-pill bg-white text-dark px-4 py-2 text-uppercase fw-bold shadow-sm" style={{letterSpacing: '3px', fontSize: '0.85rem'}}>Our Process</span>
            </div>
            <motion.h1 
              className="display-3 fw-bold mb-4 font-playfair"
              initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.2, duration: 1}}
            >
              From Your <span className="process-gold-text">Dream</span><br className="d-none d-md-block"/>To Your <span className="process-gold-text">Dream Home</span>
            </motion.h1>
            <motion.p 
              className="lead mb-5 mx-auto" 
              style={{maxWidth: '600px'}}
              initial={{opacity: 0}} animate={{opacity: 1}}
              transition={{delay: 0.4, duration: 1}}
            >
              Every project follows a carefully planned journey to deliver exceptional quality.
            </motion.p>
            <motion.div 
              className="d-flex justify-content-center mt-5 pt-4"
              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5, duration: 0.6}}
            >
              <button className="btn-process-solid" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Book Consultation</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. PROCESS OVERVIEW */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideRight}>
              <div className="process-img-wrapper">
                <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Process Overview" style={{height: '500px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-6 pl-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideLeft}>
              <h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--process-royal-blue)', letterSpacing: '2px'}}>Our Process</h5>
              <h2 className="display-4 fw-bold font-playfair mb-4">Turning Ideas Into Timeless Spaces</h2>
              <p className="lead mb-4" style={{lineHeight: '1.8'}}>
                Every GYP Signatures project follows a carefully planned process—from the first consultation to the final installation. We combine creativity, premium materials, and skilled craftsmanship to deliver spaces that are elegant, functional, and built to last.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. THE LUXURY JOURNEY TIMELINE */}
      <section id="timeline" className="timeline-section">
        <div className="container text-center mb-5">
          <motion.h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--process-royal-blue)', letterSpacing: '2px'}} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>The Journey</motion.h5>
          <motion.h2 className="display-4 fw-bold font-playfair" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.2}}>7 Steps To Perfection</motion.h2>
        </div>

        <div className="process-timeline-container">
          <div className="process-timeline-line">
            {/* Desktop Horizontal Progress */}
            <div className="process-timeline-progress d-none d-lg-block" style={{width: `${(activeStep / (steps.length - 1)) * 100}%`}}></div>
            {/* Mobile Vertical Progress */}
            <div className="process-timeline-progress d-lg-none" style={{height: `${(activeStep / (steps.length - 1)) * 100}%`}}></div>
          </div>
          
          <div className="process-steps-wrapper">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`process-step-item ${index <= activeStep ? 'active' : ''}`}
                onMouseEnter={() => setActiveStep(index)}
                onClick={() => setActiveStep(index)}
              >
                <div className="process-step-dot d-none d-lg-block"></div>
                
                {/* Mobile Dot */}
                <div className="process-step-dot d-lg-none" style={{
                  background: index <= activeStep ? 'var(--process-royal-purple)' : 'var(--process-white)',
                  borderColor: index <= activeStep ? 'var(--process-white)' : 'var(--process-royal-blue)'
                }}></div>

                <div className="process-step-content">
                  <div className="step-icon-wrapper">
                    <step.icon size={24} color="var(--process-royal-blue)" />
                  </div>
                  <h5 className="fw-bold mb-2">{step.title}</h5>
                  <p className="text-muted small m-0 d-none d-lg-block">{step.desc}</p>
                  <p className="text-muted m-0 d-lg-none">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="container text-center mt-5 pt-4">
          <button className="btn-process-solid" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Start Your Journey</button>
        </div>
      </section>

      {/* 4. MATERIAL SELECTION EXPERIENCE */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <motion.h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--process-royal-blue)', letterSpacing: '2px'}} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Premium Sourcing</motion.h5>
          <motion.h2 className="display-4 fw-bold font-playfair mb-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.1}}>Material Selection Experience</motion.h2>
          
          <div className="row g-4 mb-5 justify-content-center">
            {[
              {title: "Premium Woods", img: "https://images.pexels.com/photos/129731/pexels-photo-129731.jpeg?auto=compress&cs=tinysrgb&w=400"},
              {title: "Italian Marble", img: "https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg?auto=compress&cs=tinysrgb&w=400"},
              {title: "Luxury Fabrics", img: "https://images.pexels.com/photos/3738088/pexels-photo-3738088.jpeg?auto=compress&cs=tinysrgb&w=400"},
              {title: "Genuine Leather", img: "https://images.pexels.com/photos/2085739/pexels-photo-2085739.jpeg?auto=compress&cs=tinysrgb&w=400"}
            ].map((material, index) => (
              <motion.div className="col-12 col-md-6 col-lg-3" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: index * 0.1}}>
                <div className="material-exp-card p-3">
                  <div className="w-100 overflow-hidden mb-3" style={{height: '200px', borderRadius: '10px'}}>
                    <img src={material.img} alt={material.title} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
                  </div>
                  <h6 className="fw-bold m-0 py-2">{material.title}</h6>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. QUALITY PROMISE */}
      <section className="quality-promise-section">
        <div className="container text-center">
          <motion.h2 className="display-4 fw-bold font-playfair mb-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Quality Without Compromise</motion.h2>
          
          <div className="row g-4">
            {[
              {icon: FaGem, title: "Premium Materials", desc: "Only the finest globally sourced materials."},
              {icon: FaTools, title: "Expert Craftsmanship", desc: "Decades of experience in every cut."},
              {icon: FaIndustry, title: "Precision Engineering", desc: "State-of-the-art manufacturing techniques."},
              {icon: FaShieldAlt, title: "Lifetime Durability", desc: "Built to last for generations to come."}
            ].map((quality, index) => (
              <motion.div className="col-md-6 col-lg-3" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                <div className="quality-card">
                  <quality.icon size={45} color="var(--process-royal-blue)" className="mb-4 transition-all" />
                  <h4 className="fw-bold mb-3">{quality.title}</h4>
                  <p className="text-muted m-0">{quality.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER JOURNEY */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <motion.h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--process-royal-blue)', letterSpacing: '2px'}} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Transformation</motion.h5>
          <motion.h2 className="display-4 fw-bold font-playfair mb-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.1}}>Before & After Journey</motion.h2>
          
          <motion.div 
            id="before-after-container"
            className="before-after-container"
            initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}
            onMouseMove={handleMove}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
          >
            {/* Before Image (Background) */}
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80" alt="Before" className="before-img" draggable="false" />
            
            {/* After Image (Clipped) */}
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80" alt="After" className="after-img" draggable="false" style={{clipPath: `polygon(${sliderPosition}% 0, 100% 0, 100% 100%, ${sliderPosition}% 100%)`}} />
            
            {/* Labels */}
            <div className="slider-label label-before">BEFORE</div>
            <div className="slider-label label-after">AFTER</div>

            {/* Slider Handle */}
            <div 
              className="slider-handle" 
              style={{left: `${sliderPosition}%`}}
              onMouseDown={() => setIsDragging(true)}
            >
              <div className="slider-button">
                <FaArrowsAltH />
              </div>
            </div>
          </motion.div>
          <p className="text-muted mt-3 small">Drag the slider to see the transformation</p>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-5" style={{backgroundColor: 'var(--process-soft-gray)'}}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <motion.h2 className="display-4 fw-bold font-playfair mb-3" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Frequently Asked Questions</motion.h2>
              </div>

              <div className="accordion faq-accordion" id="faqAccordion">
                {[
                  {q: "How long does a project take?", a: "Depending on the scope, a complete interior project typically takes 8 to 12 weeks from design approval to final installation."},
                  {q: "Can I customize everything?", a: "Absolutely. We are a bespoke furniture manufacturer and interior design firm. Everything from dimensions to fabrics can be tailored to your exact needs."},
                  {q: "Do you offer home visits?", a: "Yes, we offer complimentary home site visits to take precise measurements and understand your space's lighting and flow."},
                  {q: "Can I choose my materials?", a: "Yes, our Material Library allows you to select from a vast range of premium woods, veneers, fabrics, and leathers."},
                  {q: "Do you provide installation?", a: "Yes, our expert team handles delivery and professional installation to ensure a flawless finish in your home."}
                ].map((faq, index) => (
                  <motion.div className="accordion-item" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                    <h2 className="accordion-header" id={`heading${index}`}>
                      <button 
                        className={`accordion-button ${activeFaq !== index ? 'collapsed' : ''}`} 
                        type="button" 
                        onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                        style={{ cursor: 'pointer' }}
                      >
                        {faq.q}
                      </button>
                    </h2>
                    {activeFaq === index && (
                      <div className="accordion-body" style={{ padding: '20px', color: '#000', fontSize: '1rem', backgroundColor: '#fff' }}>
                        {faq.a}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. PREMIUM CTA */}
      <section className="cta-process">
        <div className="cta-process-overlay"></div>
        <div className="container cta-process-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
            <h2 className="display-3 fw-bold font-playfair mb-4">Let's Build Your Dream Space</h2>
            <p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}}>
              Every masterpiece begins with a conversation.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
              <button className="btn-process-solid" style={{background: 'var(--process-white)', color: 'var(--process-dark)'}} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Book Consultation</button>
              <button className="btn-process-outline" style={{borderColor: 'var(--process-white)', color: 'var(--process-white)'}} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Visit Experience Center</button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default OurProcess;
