import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShieldHalved, FaInstagram, FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight, FaPaintbrush, FaHandsHoldingCircle } from 'react-icons/fa6';
import { FaCrown, FaCouch, FaGem, FaMapMarkedAlt, FaClock, FaHeart, FaHandshake, FaMoneyBillWave, FaHeadset } from 'react-icons/fa';
import AnimatedCounter from '../Component/AnimatedCounter';
import image1 from '../assets/image/1.jpeg';
import '../CSS/Home.css';
import { MarqueeTestimonials } from '../components/ui/marquee-card';

const heroImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2000&q=80"
];

const instagramImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?auto=format&fit=crop&w=600&q=80"
];

const testimonials = [
  {
    name: "Aarti Reddy",
    location: "Jubilee Hills",
    review: "GYP Signatures completely transformed our living room. The bespoke sofa and center table are masterfully crafted and have become the centerpiece of our home. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Ramesh Kumar",
    location: "Banjara Hills",
    review: "The level of customization and attention to detail is unparalleled. From the initial consultation to final delivery, the entire experience was luxurious and seamless.",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Sharma",
    location: "Gachibowli",
    review: "We wanted a modern yet timeless dining set, and GYP delivered exactly that. The premium teak wood and fabric selection perfectly match our interior theme.",
    img: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Vikram Singh",
    location: "HITEC City",
    review: "Outstanding craftsmanship and extremely professional team. They understood my vision perfectly and executed it with precision and on time.",
    img: "https://randomuser.me/api/portraits/men/79.jpg"
  }
];

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [showGatekeeper, setShowGatekeeper] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Hero Slider
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(slideTimer);
  }, []);

  // Testimonial Slider
  useEffect(() => {
    const testTimer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(testTimer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -20 }
  };

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.5
  };

  const nextTestimonial = () => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <AnimatePresence mode='wait'>
      {loading ? (
        <motion.div 
          key="preloader"
          className="preloader d-flex flex-column justify-content-center align-items-center bg-dark text-white position-fixed w-100 h-100 top-0 start-0 z-3"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8 } }}
        >
          <h1 className="fw-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>GYP <span style={{fontWeight: 300}}>SIGNATURES</span></h1>
          <div className="loader-bar">
            <motion.div 
              className="loader-progress"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
          className="home-wrapper"
        >
          {/* GATEKEEPER */}
          <AnimatePresence>
          {showGatekeeper && (
            <motion.div 
              className="demo-gatekeeper position-fixed w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center p-3"
              style={{ zIndex: 1050 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="gatekeeper-backdrop position-absolute w-100 h-100" style={{background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)'}}></div>
              <motion.div 
                className="gatekeeper-content p-4 p-md-5 rounded-4 shadow-lg position-relative text-center w-100" 
                style={{
                  maxWidth: '550px', 
                  maxHeight: '90vh', 
                  overflowY: 'auto', 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  backdropFilter: 'blur(20px)', 
                  border: '1px solid rgba(255,255,255,0.1)'
                }}
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
              >
                <div className="position-absolute top-0 start-0 w-100" style={{height: '4px', background: 'linear-gradient(90deg, #C8A03A, #f3e5ab, #C8A03A)'}}></div>
                <div className="gatekeeper-header mb-4 mt-2">
                  <div className="d-inline-flex justify-content-center align-items-center rounded-circle mb-3" style={{width: '80px', height: '80px', background: 'rgba(200, 160, 58, 0.1)'}}>
                    <FaShieldHalved size={36} style={{color: '#C8A03A'}} />
                  </div>
                  <h2 className="fw-bold text-white mb-2" style={{fontFamily: 'Playfair Display, serif', letterSpacing: '1px'}}>Development Disclosure</h2>
                </div>
                <div className="gatekeeper-body text-light mb-5 px-sm-3" style={{opacity: 0.85, fontSize: '1.05rem', lineHeight: '1.6'}}>
                  <p className="mb-3">This is a <strong style={{color: '#C8A03A'}}>technical demonstration</strong> website and <strong>NOT</strong> the official portal.</p>
                  <p className="mb-0">All content and features are presented for display and portfolio purposes only.</p>
                </div>
                <button 
                  className="btn w-100 py-3 rounded-3 text-uppercase fw-bold shadow-sm gatekeeper-btn" 
                  onClick={() => setShowGatekeeper(false)}
                  style={{letterSpacing: '1.5px', transition: 'all 0.3s ease', backgroundColor: '#C8A03A', color: '#111', border: 'none'}}
                  onMouseOver={(e) => { e.currentTarget.style.backgroundColor = '#f3e5ab'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.backgroundColor = '#C8A03A'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  Acknowledge & Proceed
                </button>
              </motion.div>
            </motion.div>
          )}
          </AnimatePresence>

          {/* 1. HERO BANNER */}
          <section className="hero-section d-flex align-items-center text-white position-relative overflow-hidden" style={{minHeight: '100vh', backgroundColor: '#111', paddingTop: '170px'}}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="position-absolute w-100 h-100 top-0 start-0"
                style={{
                  backgroundImage: `url('${heroImages[currentSlide]}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </AnimatePresence>
            <div className="hero-overlay position-absolute w-100 h-100 top-0 start-0" style={{background: 'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 100%)'}}></div>
            
            <div className="container position-relative z-1 d-flex flex-column justify-content-center h-100 hero-content-container" style={{ paddingBottom: '120px' }}>
              <div className="row">
                <div className="col-12 col-lg-8">
                  <motion.div 
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="d-flex align-items-center mb-4"
                  >
                    <div style={{width: '40px', height: '2px', backgroundColor: '#C8A03A'}} className="me-3"></div>
                    <span className="text-uppercase fw-bold letter-spacing-2" style={{color: '#C8A03A', fontSize: '0.85rem'}}>Srikalahasti's Bespoke Atelier</span>
                  </motion.div>
                  
                  <motion.h1 
                    className="hero-title fw-bold mb-3 mb-md-4 text-white" 
                    style={{fontFamily: 'Playfair Display, serif', lineHeight: '1.2'}}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    Exquisite Custom<br />Furniture For Your<br /><span style={{color: '#C8A03A', fontStyle: 'italic', fontWeight: '400'}}>Dream Home & Art</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="lead mb-5" 
                    style={{maxWidth: '600px', fontWeight: 300, fontSize: '1.1rem', opacity: 0.9, lineHeight: '1.6'}}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  >
                    Experience master craftsmanship, unparalleled luxury, and bespoke comfort.
                  </motion.p>
                  
                  <motion.div
                    className="d-flex flex-column flex-sm-row gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                  >
                    <button className="btn rounded-pill px-5 py-3 text-uppercase fw-bold shadow-sm d-flex align-items-center justify-content-center btn-cta-primary w-sm-100" style={{backgroundColor: '#C8A03A', color: '#111', letterSpacing: '1px', transition: 'all 0.3s'}}>
                      Explore Showcase
                    </button>
                    <button className="btn rounded-pill px-5 py-3 text-uppercase fw-bold text-white d-flex align-items-center justify-content-center w-sm-100" style={{border: '1px solid rgba(255,255,255,0.5)', backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(4px)', letterSpacing: '1px', transition: 'all 0.3s'}} onMouseOver={(e) => {e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = '#fff';}} onMouseOut={(e) => {e.currentTarget.style.backgroundColor = 'rgba(0,0,0,0.3)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)';}}>
                      Book Experience
                    </button>
                  </motion.div>
                </div>
              </div>
            </div>
            
            {/* Hero Quick Stats */}
            <motion.div 
              className="position-absolute bottom-0 start-0 w-100 bg-dark bg-opacity-75"
              style={{ backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.1)', borderTopLeftRadius: '30px', borderTopRightRadius: '30px' }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="container">
                <div className="row text-center py-3">
                  <div className="col-4 border-end border-secondary border-opacity-50 px-1 px-md-3">
                    <h4 className="text-white mb-0 fw-bold stat-number"><AnimatedCounter from={0} to={500} duration={2} suffix="+" /></h4>
                    <span className="small text-uppercase letter-spacing-1 stat-label" style={{color: '#C8A03A', fontSize: '0.7rem'}}>Families</span>
                  </div>
                  <div className="col-4 border-end border-secondary border-opacity-50 px-1 px-md-3">
                    <h4 className="text-white mb-0 fw-bold stat-number"><AnimatedCounter from={0} to={2} duration={2} suffix="+" /></h4>
                    <span className="small text-uppercase letter-spacing-1 stat-label" style={{color: '#C8A03A', fontSize: '0.7rem'}}>Years</span>
                  </div>
                  <div className="col-4 px-1 px-md-3">
                    <h4 className="text-white mb-0 fw-bold stat-number"><AnimatedCounter from={0} to={100} duration={2} suffix="%" /></h4>
                    <span className="small text-uppercase letter-spacing-1 stat-label" style={{color: '#C8A03A', fontSize: '0.7rem'}}>Customization</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
          
          {/* 2. LUXURY INTRODUCTION */}
          <section className="py-5 bg-white overflow-hidden">
            <div className="container py-5 my-md-4">
              <div className="row align-items-center g-5 flex-column-reverse flex-lg-row">
                <motion.div 
                  className="col-lg-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8 }}
                >
                  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Luxury Interior" className="img-fluid w-100 rounded-4 shadow-lg" style={{objectFit: 'cover', height: '500px'}} />
                </motion.div>
                
                <motion.div 
                  className="col-lg-6 px-lg-5 text-center text-lg-start"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif', color: '#111'}}>Crafting Dream Spaces Since Day One</h2>
                  <p className="text-muted mb-4" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                    At GYP Signatures, we believe that your home is a reflection of your unique identity. For years, we have dedicated ourselves to mastering the art of bespoke furniture and interior curation.
                  </p>
                  <p className="text-muted mb-5" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                    Every sofa, dining table, and accent piece is meticulously crafted using premium materials, merging timeless aesthetics with modern comfort to elevate your everyday living.
                  </p>
                  <button className="btn rounded-pill px-5 py-3 text-uppercase fw-bold shadow-sm" style={{backgroundColor: '#C8A03A', color: '#111', letterSpacing: '1px'}}>
                    Learn More <span className="ms-2">→</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 3. COMPANY STATISTICS */}
          <section className="py-5" style={{backgroundColor: '#111111'}}>
            <div className="container py-5">
              <div className="row g-4 text-center">
                {[
                  { value: 500, suffix: '+', label: 'Happy Families' },
                  { value: 2, suffix: '+', label: 'Years Experience' },
                  { value: 100, suffix: '%', label: 'Customization' },
                  { value: 1, suffix: '', label: 'Own Factory' }
                ].map((stat, idx) => (
                  <motion.div 
                    key={idx}
                    className="col-6 col-lg-3"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="stat-card p-4 rounded-4" style={{border: '1px solid rgba(200, 160, 58, 0.2)', backgroundColor: 'rgba(255,255,255,0.02)'}}>
                      <h2 className="display-4 fw-bold mb-2" style={{color: '#C8A03A', fontFamily: 'Playfair Display, serif'}}>
                        <AnimatedCounter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
                      </h2>
                      <p className="text-uppercase letter-spacing-1 mb-0 text-light" style={{fontSize: '0.85rem'}}>{stat.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. THE GYP DIFFERENCE */}
          <section className="py-5" style={{backgroundColor: '#f1f0eb'}}>
            <div className="container py-5 my-md-4">
              <div className="text-center mb-5 pb-3">
                <span className="text-uppercase fw-bold letter-spacing-2" style={{color: '#C8A03A', fontSize: '0.9rem'}}>The GYP Difference</span>
                <h2 className="display-4 fw-bold mt-3" style={{fontFamily: 'Playfair Display, serif', color: '#111'}}>Why Choose GYP Signatures?</h2>
                <div style={{width: '60px', height: '3px', backgroundColor: '#C8A03A', margin: '20px auto 0'}}></div>
              </div>

              <div className="row g-4 justify-content-center">
                {[
                  { icon: FaCouch, title: "Bespoke Craftsmanship", desc: "Every piece is masterfully handcrafted to your exact specifications." },
                  { icon: FaGem, title: "Premium Materials", desc: "We source only the finest teak woods, imported fabrics, and durable finishes." },
                  { icon: FaPaintbrush, title: "Luxury Finishes", desc: "Impeccable detailing and world-class polishing for a royal aesthetic." },
                  { icon: FaClock, title: "Timely Delivery", desc: "Committed to delivering your dream interiors precisely on schedule." }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx}
                    className="col-12 col-md-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <div className="d-flex p-4 rounded-4 bg-white shadow-sm h-100 flex-column flex-sm-row text-center text-sm-start align-items-center align-items-sm-start gyp-difference-card">
                      <div className="flex-shrink-0 mb-3 mb-sm-0 me-sm-4 rounded-circle d-flex align-items-center justify-content-center icon-wrapper" style={{width: '70px', height: '70px', backgroundColor: 'rgba(200, 160, 58, 0.1)'}}>
                        <feature.icon size={30} color="#C8A03A" className="card-icon" />
                      </div>
                      <div>
                        <h4 className="fw-bold mb-2" style={{fontFamily: 'Playfair Display, serif', color: '#111'}}>{feature.title}</h4>
                        <p className="text-muted mb-0" style={{lineHeight: '1.6'}}>{feature.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 5. WHY CHOOSE GYP SIGNATURES (6 Features Grid) */}
          <section className="py-5 bg-white">
            <div className="container py-5 my-md-4">
              <div className="text-center mb-5 pb-3">
                <h2 className="display-5 fw-bold mb-3" style={{fontFamily: 'Playfair Display, serif', color: '#111'}}>We don't just build furniture;<br/>we create lifestyles.</h2>
              </div>

              <div className="row g-4">
                {[
                  { icon: FaCrown, title: "Premium Quality", desc: "Crafted with excellence to stand the test of time. We ensure every joint, seam, and finish meets our rigorous standards for enduring luxury." },
                  { icon: FaPaintbrush, title: "Personalized Design", desc: "Tailored perfectly to match your unique vision. Our designers work closely with you to curate spaces that reflect your personality." },
                  { icon: FaGem, title: "Luxury Materials", desc: "Sourced globally for the ultimate premium feel. From rich Italian leathers to solid Burmese teak, we use only the finest materials available." },
                  { icon: FaHandsHoldingCircle, title: "Expert Craftsmanship", desc: "Built by master artisans with decades of experience. Our craftsmen pour passion and precision into every single piece they create." },
                  { icon: FaMoneyBillWave, title: "Transparent Pricing", desc: "Honest quotes with absolutely no hidden costs. We provide clear, upfront pricing so you can design your dream home with total peace of mind." },
                  { icon: FaHeadset, title: "Lifetime Support", desc: "Dedicated assistance whenever you need it. Our relationship doesn't end at delivery; we provide ongoing support for years to come." }
                ].map((item, idx) => (
                  <motion.div 
                    key={idx}
                    className="col-12 col-sm-6 col-lg-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <div className="p-4 text-center border rounded-4 h-100 why-choose-card" style={{borderColor: '#eee', transition: 'all 0.3s ease'}}>
                      <div className="icon-container mb-3 d-inline-flex justify-content-center align-items-center rounded-circle" style={{width: '70px', height: '70px', backgroundColor: 'rgba(200, 160, 58, 0.05)', transition: 'all 0.3s ease'}}>
                        <item.icon size={30} color="#C8A03A" className="why-icon" style={{transition: 'all 0.3s ease'}} />
                      </div>
                      <h5 className="fw-bold mb-3" style={{color: '#111'}}>{item.title}</h5>
                      <p className="text-muted mb-0 small" style={{lineHeight: '1.6'}}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* 6. FOUNDER STORY */}
          <section className="py-5 bg-white border-top">
            <div className="container py-5">
              <div className="row align-items-center g-5">
                <motion.div 
                  className="col-lg-5 order-lg-1"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img src={image1} alt="Founder" className="img-fluid rounded-4 shadow founder-img" />
                </motion.div>
                
                <motion.div 
                  className="col-lg-7 px-lg-5 order-lg-2 text-center text-lg-start"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <h2 className="fw-bold mb-4 display-4" style={{fontFamily: 'Playfair Display, serif', color: '#111'}}>The Visionary</h2>
                  <h4 className="mb-4 fw-bold" style={{color: '#111'}}>Bhanu Kiran Pasula</h4>
                  <h6 className="mb-5 text-uppercase letter-spacing-1" style={{color: '#C8A03A'}}>Founder & CEO</h6>
                  
                  <div className="position-relative p-4 p-md-5 mb-5 rounded-4 bg-light">
                    <FaQuoteLeft className="position-absolute top-0 start-0 translate-middle text-white bg-warning rounded-circle p-2" size={40} style={{backgroundColor: '#C8A03A'}} />
                    <p className="fs-5 mb-0" style={{fontStyle: 'italic', color: '#555', lineHeight: '1.7'}}>
                      "Building a home is not just about furniture; it's about creating a sanctuary where every piece tells your story. Our mission is to deliver premium, customized dream furniture that elevates everyday living."
                    </p>
                  </div>
                  
                  <button className="btn rounded-pill px-5 py-3 text-uppercase fw-bold btn-outline-dark" style={{letterSpacing: '1px'}}>
                    Our Heritage <span className="ms-2">→</span>
                  </button>
                </motion.div>
              </div>
            </div>
          </section>

          {/* 7. LOCAL EXPERTISE */}
          <section className="py-5" style={{backgroundColor: '#f1f0eb'}}>
            <div className="container py-5">
              <motion.div 
                className="bg-white rounded-5 p-5 text-center shadow-sm max-w-4xl mx-auto"
                style={{maxWidth: '800px', margin: '0 auto'}}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="d-inline-flex align-items-center justify-content-center rounded-circle mb-4" style={{width: '80px', height: '80px', backgroundColor: 'rgba(200, 160, 58, 0.1)'}}>
                  <FaMapMarkedAlt size={36} color="#C8A03A" />
                </div>
                <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif', color: '#111'}}>Local Expertise</h2>
                <p className="lead text-muted mb-5" style={{lineHeight: '1.7'}}>
                  Deeply rooted in Srikalahasti, we understand local architecture and premium interior design requirements better than anyone else. We bring global luxury standards to your neighborhood.
                </p>
                <button className="btn rounded-pill px-5 py-3 text-uppercase fw-bold text-white shadow" style={{backgroundColor: '#111', letterSpacing: '1px'}}>
                  Visit Experience Center
                </button>
              </motion.div>
            </div>
          </section>

          {/* 8. PREMIUM CTA SECTION */}
          <section className="py-5 text-center text-white" style={{background: 'linear-gradient(135deg, #111 0%, #1a1a1a 100%)', display: 'flex', alignItems: 'center', minHeight: '500px'}}>
            <div className="container py-5">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-uppercase fw-bold letter-spacing-2 mb-3 d-block" style={{color: '#C8A03A', fontSize: '0.9rem'}}>Begin Your Journey</span>
                <h2 className="display-3 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Let's Craft the Home<br/>You've Always Imagined</h2>
                <p className="lead mb-5 mx-auto text-light" style={{maxWidth: '600px', opacity: 0.8, fontWeight: 300, lineHeight: '1.6'}}>
                  Book a private consultation with our experts and take the first step towards your luxurious new living space.
                </p>
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                  <button className="btn rounded-pill px-5 py-3 text-uppercase fw-bold shadow-sm" style={{backgroundColor: '#C8A03A', color: '#111', letterSpacing: '1px', transition: 'all 0.3s'}}>Book Consultation</button>
                  <button className="btn btn-outline-light rounded-pill px-5 py-3 text-uppercase fw-bold" style={{letterSpacing: '1px', transition: 'all 0.3s'}}>Take Style Quiz</button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* 9. CLIENT TESTIMONIALS */}
          <section className="py-5 bg-white overflow-hidden">
            <div className="container-fluid py-5 my-md-4 px-0">
              <div className="text-center mb-5 pb-3 px-3">
                <h2 className="display-4 fw-bold mb-3" style={{fontFamily: 'Playfair Display, serif', color: '#111'}}>What Our Clients Say</h2>
                <div style={{width: '60px', height: '3px', backgroundColor: '#C8A03A', margin: '0 auto'}}></div>
              </div>
              
              <MarqueeTestimonials />
            </div>
          </section>

          {/* 10. INSTAGRAM GALLERY */}
          <section className="py-5" style={{backgroundColor: '#111'}}>
            <div className="container py-5 text-center">
              <h2 className="display-4 fw-bold mb-5 text-white" style={{fontFamily: 'Playfair Display, serif'}}>Follow Our Journey</h2>
              
              <div className="row g-3 mb-5">
                {instagramImages.map((src, idx) => (
                  <motion.div 
                    key={idx}
                    className="col-6 col-md-4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                  >
                    <div className="instagram-item position-relative overflow-hidden rounded-3 ratio ratio-1x1 bg-dark">
                      <img src={src} alt="Gallery" className="w-100 h-100 object-fit-cover" style={{transition: 'transform 0.5s ease'}} />
                      <div className="instagram-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0" style={{backgroundColor: 'rgba(0,0,0,0.6)', transition: 'opacity 0.3s ease'}}>
                        <FaInstagram size={40} color="#fff" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <button className="btn rounded-pill px-5 py-3 text-uppercase fw-bold btn-outline-light" style={{letterSpacing: '1px'}}>
                Follow on Instagram
              </button>
            </div>
          </section>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Home;
