import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaRulerCombined, FaMoneyBillWave, FaTree, FaPaintBrush, FaCalculator, FaHandshake, FaChevronRight, FaChevronDown, FaCheckCircle, FaStar, FaCogs, FaClipboardCheck, FaTruck } from 'react-icons/fa';
import '../CSS/BudgetEstimator.css';
import AnimatedCounter from '../Component/AnimatedCounter';

const BudgetEstimator = () => {
  // State for Calculator
  const [roomType, setRoomType] = useState('Living Room');
  const [area, setArea] = useState('200-400');
  const [budgetTier, setBudgetTier] = useState('Premium');
  const [material, setMaterial] = useState('Wood');
  const [finish, setFinish] = useState('Matte PU');
  
  const [isCalculated, setIsCalculated] = useState(false);
  const [estimatedMin, setEstimatedMin] = useState(0);
  const [estimatedMax, setEstimatedMax] = useState(0);
  const [isCalculating, setIsCalculating] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(0);

  // Scroll to results ref
  const resultsRef = useRef(null);

  // Pricing Logic (Mock algorithm)
  const calculateEstimate = () => {
    setIsCalculating(true);
    setIsCalculated(false);

    setTimeout(() => {
      // Base rates per sq ft
      let baseRate = 1500; // Standard

      if (budgetTier === 'Premium') baseRate = 2500;
      if (budgetTier === 'Luxury') baseRate = 4500;

      // Area multiplier
      let areaMultiplier = 300; // Default mid-range
      if (area === '<100') areaMultiplier = 80;
      if (area === '100-200') areaMultiplier = 150;
      if (area === '200-400') areaMultiplier = 300;
      if (area === '400-800') areaMultiplier = 600;
      if (area === '800+') areaMultiplier = 1000;

      // Material multipliers
      let matMult = 1.0;
      if (material === 'Wood' || material === 'Marble' || material === 'Leather') matMult = 1.3;
      if (material === 'Veneer' || material === 'Metal') matMult = 1.1;

      // Finish multipliers
      let finMult = 1.0;
      if (finish === 'PU Finish' || finish === 'Duco Finish' || finish === 'High Gloss') finMult = 1.2;

      const minCost = Math.round(baseRate * areaMultiplier * matMult * finMult);
      const maxCost = Math.round(minCost * 1.2); // 20% variance

      setEstimatedMin(minCost);
      setEstimatedMax(maxCost);
      setIsCalculated(true);
      setIsCalculating(false);

      // Scroll to results on mobile
      if (window.innerWidth < 768 && resultsRef.current) {
        setTimeout(() => {
          resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }, 1500); // Simulate processing time
  };

  // Format currency
  const formatCurrency = (val) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="budget-page-container">
      {/* 1. HERO BANNER */}
      <section className="budget-hero">
        <div className="budget-hero-bg"></div>
        <div className="budget-hero-overlay"></div>
        
        {/* Floating Shapes */}
        <div className="budget-floating-shape shape-a"></div>
        <div className="budget-floating-shape shape-b"></div>
        <div className="budget-floating-shape shape-c"></div>

        <div className="container budget-hero-content">
          <motion.h4 className="text-uppercase mb-3" style={{letterSpacing: '3px', fontWeight: 600}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}}>
            📊 BUDGET ESTIMATOR
          </motion.h4>
          <motion.h1 className="display-3 fw-bold mb-4" initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.2}}>
            Estimate the Investment<br/>for Your Dream Interior
          </motion.h1>
          <motion.p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, delay: 0.4}}>
            Get an instant estimate based on your space, materials, and finish preferences.
          </motion.p>
          <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.6}}>
            <button className="btn-budget-primary" onClick={() => document.getElementById('calculator-section').scrollIntoView({behavior: 'smooth'})}>
              Start Estimation
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="budget-intro">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <motion.div className="intro-image-wrapper" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Luxury Interior" />
              </motion.div>
            </div>
            <div className="col-lg-6 ps-lg-5">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
                <h2 className="fw-bold mb-4">Plan Your Dream Home with Confidence</h2>
                <p className="text-muted mb-4 lead">
                  Our estimator provides a preliminary budget based on your unique selections. The final quotation is meticulously prepared after a detailed design consultation and thorough site assessment.
                </p>
                <div className="benefits-list mb-5">
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaCheckCircle /></div>
                    <span className="fw-bold">Instant preliminary estimate</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaCheckCircle /></div>
                    <span className="fw-bold">Transparent pricing approach</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaCheckCircle /></div>
                    <span className="fw-bold">Personalized recommendations</span>
                  </div>
                  <div className="benefit-item">
                    <div className="benefit-icon"><FaCheckCircle /></div>
                    <span className="fw-bold">Free consultation after estimation</span>
                  </div>
                </div>
                <button className="btn-budget-outline" onClick={() => document.getElementById('calculator-section').scrollIntoView({behavior: 'smooth'})}>
                  Try Calculator
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="how-it-works">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>How It Works</motion.h2>
            <motion.p className="text-muted" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.1}}>Three simple steps to your personalized budget.</motion.p>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <motion.div className="hiw-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
                <div className="hiw-icon"><FaHome /></div>
                <h5 className="fw-bold">Choose Your Space</h5>
                <p className="text-muted small mb-0">Select the room and area you want to design.</p>
              </motion.div>
            </div>
            <div className="col-lg-1 col-md-12 text-center hiw-arrow">
              <FaChevronRight />
            </div>
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <motion.div className="hiw-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.4}}>
                <div className="hiw-icon"><FaPaintBrush /></div>
                <h5 className="fw-bold">Select Materials</h5>
                <p className="text-muted small mb-0">Pick your preferred materials and finishes.</p>
              </motion.div>
            </div>
            <div className="col-lg-1 col-md-12 text-center hiw-arrow">
              <FaChevronRight />
            </div>
            <div className="col-lg-3 col-md-12 mb-4 mb-lg-0">
              <motion.div className="hiw-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.6}}>
                <div className="hiw-icon"><FaCalculator /></div>
                <h5 className="fw-bold">Get Estimate</h5>
                <p className="text-muted small mb-0">Receive your customized budget range instantly.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE BUDGET ESTIMATOR & 5. RESULT SUMMARY */}
      <section className="budget-calculator-section" id="calculator-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Calculate Your Investment</h2>
            <p className="text-muted">Fill in the details below for an instant budget estimate.</p>
          </div>
          
          <div className="row">
            {/* Form Column */}
            <div className={`col-lg-${isCalculated ? '7' : '10 mx-auto'} transition-all duration-500`}>
              <div className="calculator-card">
                
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label"><FaHome className="icon" /> Room Type</label>
                      <select className="form-select" value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                        <option>Living Room</option>
                        <option>Bedroom</option>
                        <option>Kitchen</option>
                        <option>Dining Room</option>
                        <option>Wardrobe</option>
                        <option>TV Unit</option>
                        <option>Home Office</option>
                        <option>Complete Home</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label"><FaRulerCombined className="icon" /> Area</label>
                      <select className="form-select" value={area} onChange={(e) => setArea(e.target.value)}>
                        <option value="<100">Below 100 sq. ft.</option>
                        <option value="100-200">100–200 sq. ft.</option>
                        <option value="200-400">200–400 sq. ft.</option>
                        <option value="400-800">400–800 sq. ft.</option>
                        <option value="800+">800+ sq. ft.</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label"><FaMoneyBillWave className="icon" /> Budget Preference</label>
                  <div className="budget-tier-grid">
                    {['Standard', 'Premium', 'Luxury'].map(tier => (
                      <div 
                        key={tier} 
                        className={`budget-tier-card ${budgetTier === tier ? 'selected' : ''}`}
                        onClick={() => setBudgetTier(tier)}
                      >
                        <div className="tier-title">{tier}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label"><FaTree className="icon" /> Material</label>
                      <select className="form-select" value={material} onChange={(e) => setMaterial(e.target.value)}>
                        <option>Wood</option>
                        <option>Veneer</option>
                        <option>Laminate</option>
                        <option>Marble</option>
                        <option>Glass</option>
                        <option>Leather</option>
                        <option>Fabric</option>
                        <option>Metal</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label"><FaPaintBrush className="icon" /> Finish</label>
                      <select className="form-select" value={finish} onChange={(e) => setFinish(e.target.value)}>
                        <option>Matte PU</option>
                        <option>High Gloss</option>
                        <option>PU Finish</option>
                        <option>Duco Finish</option>
                        <option>Natural Finish</option>
                        <option>Textured Finish</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="text-center mt-4">
                  <button 
                    className="btn-budget-primary w-100" 
                    onClick={calculateEstimate}
                    disabled={isCalculating}
                  >
                    {isCalculating ? 'Calculating...' : 'Calculate Estimate'}
                  </button>
                </div>

              </div>
            </div>

            {/* Results Column */}
            <AnimatePresence>
              {isCalculated && (
                <motion.div 
                  className="col-lg-5 mt-5 mt-lg-0"
                  initial={{opacity: 0, scale: 0.9, x: 20}}
                  animate={{opacity: 1, scale: 1, x: 0}}
                  transition={{duration: 0.5, type: 'spring'}}
                  ref={resultsRef}
                >
                  <div className="result-card">
                    <h4 className="fw-bold text-dark mb-1">Estimated Budget</h4>
                    <p className="text-muted small">Based on your selections</p>
                    
                    <div className="result-price-range">
                      ₹ <AnimatedCounter to={estimatedMin} duration={1.5} /> <br/>
                      <span className="text-muted fs-4">to</span> <br/>
                      ₹ <AnimatedCounter to={estimatedMax} duration={1.5} />
                    </div>

                    <div className="result-details">
                      <div className="result-row">
                        <span className="text-muted">Estimated Timeline:</span>
                        <span className="fw-bold text-dark">45–60 Days</span>
                      </div>
                      <div className="result-row">
                        <span className="text-muted">Recommended Style:</span>
                        <span className="fw-bold text-dark">{budgetTier} Modern</span>
                      </div>
                      <div className="result-row">
                        <span className="text-muted">Suggested Materials:</span>
                        <span className="fw-bold text-dark">{material}, {finish}</span>
                      </div>
                    </div>

                    <p className="small text-muted mb-4" style={{fontSize: '0.75rem'}}>
                      * This is an estimated budget. Final pricing may vary depending on site conditions, customization, and material availability.
                    </p>

                    <div className="d-grid gap-2 d-print-none">
                      <button className="btn-budget-primary">Book Consultation</button>
                      <button className="btn-budget-outline" onClick={() => window.print()}>Download Estimate</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 6. WHAT'S INCLUDED */}
      <section className="included-section">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>What's Included</motion.h2>
            <motion.p className="text-muted" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.1}}>Every project includes our end-to-end premium service.</motion.p>
          </div>
          
          <div className="row">
            {[
              { title: "Space Planning", icon: <FaRulerCombined />, desc: "Detailed 2D & 3D layouts optimized for your lifestyle." },
              { title: "Custom Furniture", icon: <FaHome />, desc: "Bespoke pieces designed perfectly for your dimensions." },
              { title: "Material Selection", icon: <FaTree />, desc: "Curated premium materials sourced globally." },
              { title: "Manufacturing", icon: <FaCogs />, desc: "In-house production ensuring flawless quality." },
              { title: "Delivery", icon: <FaTruck />, desc: "Safe, insured, and timely transport of all items." },
              { title: "Professional Installation", icon: <FaCheckCircle />, desc: "Expert assembly and finishing on-site." }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div className="included-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                  <div className="included-icon">{item.icon}</div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p className="text-muted small mb-0">{item.desc}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE GYP */}
      <section className="why-gyp-section">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>More Than Just an Estimate</motion.h2>
          </div>
          
          <div className="row">
            {[
              { title: "Transparent Pricing", icon: <FaMoneyBillWave /> },
              { title: "Premium Materials", icon: <FaStar /> },
              { title: "Custom Designs", icon: <FaPaintBrush /> },
              { title: "Expert Designers", icon: <FaClipboardCheck /> },
              { title: "In-House Manufacturing", icon: <FaCogs /> },
              { title: "End-to-End Execution", icon: <FaCheckCircle /> }
            ].map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <motion.div className="why-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                  <div className="why-icon">{item.icon}</div>
                  <h5 className="fw-bold mb-0">{item.title}</h5>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="faq-section">
        <div className="container">
          <div className="text-center mb-5">
            <motion.h2 className="fw-bold" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>Frequently Asked Questions</motion.h2>
          </div>
          
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="accordion" id="budgetFaq">
                {[
                  { q: "How accurate is the estimate?", a: "The estimate is based on our standard pricing matrix and your inputs. It gives a highly accurate baseline, though custom requirements discussed during consultation may adjust the final price." },
                  { q: "Can I customize the design?", a: "Absolutely. We specialize in bespoke furniture and interiors. Your personal designer will tailor everything to your exact tastes." },
                  { q: "Is consultation free?", a: "Yes, the initial design consultation and site visit are completely free of charge with no obligations." },
                  { q: "How is the final quote prepared?", a: "After a site measurement and detailed discussion with our designers, we provide a transparent, itemized quotation." },
                  { q: "Do you provide installation services?", a: "Yes, our end-to-end service includes delivery, professional installation, and post-installation cleanup." }
                ].map((faq, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header">
                      <button 
                        className={`accordion-button ${openFaq !== index ? 'collapsed' : ''}`} 
                        type="button" 
                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
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
                          className="accordion-collapse"
                        >
                          <div className="accordion-body">
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

      {/* 9. CTA */}
      <section className="cta-section">
        <div className="cta-overlay-pattern"></div>
        <div className="container position-relative" style={{zIndex: 2}}>
          <motion.h2 className="display-4 fw-bold mb-4" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            Ready to Turn Your Estimate<br/>Into Reality?
          </motion.h2>
          <motion.p className="lead mb-5 mx-auto" style={{maxWidth: '600px'}} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
            Meet our design experts and receive a personalized proposal tailored to your exact lifestyle and space.
          </motion.p>
          <motion.div className="d-flex flex-column flex-sm-row justify-content-center gap-3" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.4}}>
            <button className="btn btn-light px-5 py-3 rounded-pill fw-bold text-uppercase" style={{color: 'var(--budget-purple)'}}>
              Book Consultation <FaHandshake className="ms-2"/>
            </button>
            <button className="btn btn-outline-light px-5 py-3 rounded-pill fw-bold text-uppercase">
              Visit Experience Center
            </button>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default BudgetEstimator;
