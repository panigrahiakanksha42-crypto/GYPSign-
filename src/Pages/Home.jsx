import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaPaintBrush, FaHammer, FaGem, FaCheckCircle, 
  FaUserTie, FaClipboardList, FaCouch, FaGlassCheers 
} from 'react-icons/fa';
import { FaShieldHalved } from 'react-icons/fa6';
import AnimatedCounter from '../Component/AnimatedCounter';
import { MarqueeTestimonials } from '../components/ui/marquee-card';
import '../CSS/Home.css';
import handmadeArtImg from '../assets/OurCoreServices/HandmadeArtwork.jpg';
import woodworkImg from '../assets/OurCoreServices/Woodwork&Interior.jpg';
import eventManagementImg from '../assets/OurCoreServices/EventManagement.jpg';

import banner1 from '../assets/image/handmade_art_banner_1785395677663.png';
import banner2 from '../assets/image/luxury_interior_banner_1785395688253.png';
import banner3 from '../assets/image/event_management_banner_1785395698139.png';

import proj1 from '../assets/FeaturedProjects/ArtCarvedWoodenPanel.jpg';
import proj2 from '../assets/FeaturedProjects/LuxuryLivingRoom.jpg';
import proj3 from '../assets/FeaturedProjects/ModernWorkspace.jpg';
import proj4 from '../assets/FeaturedProjects/ContemporaryApartment.jpg';
import proj5 from '../assets/FeaturedProjects/GrandWeddingMandap.jpg';
import proj6 from '../assets/FeaturedProjects/EventsAnnualGalaSetup.jpg';

const heroImages = [
  banner1,
  banner2,
  banner3
];

const projects = [
  { id: 1, category: 'Handmade Art', img: proj1, title: 'Carved Wooden Panel' },
  { id: 2, category: 'Home Interiors', img: proj2, title: 'Luxury Living Room' },
  { id: 3, category: 'Office Interiors', img: proj3, title: 'Modern Workspace' },
  { id: 4, category: 'Apartment Projects', img: proj4, title: 'Contemporary Apartment' },
  { id: 5, category: 'Wedding Events', img: proj5, title: 'Grand Wedding Mandap' },
  { id: 6, category: 'Corporate Events', img: proj6, title: 'Annual Gala Setup' }
];

const Home = () => {
  const [showGatekeeper, setShowGatekeeper] = useState(() => {
    return sessionStorage.getItem('gatekeeperAcknowledged') !== 'true';
  });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('All');
  const navigate = useNavigate();

  // Hero Slider
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(slideTimer);
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

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  const premiumTransition = { duration: 1.2, ease: [0.16, 1, 0.3, 1] };

  return (
    <AnimatePresence mode='wait'>
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
            >
              <div className="position-absolute top-0 start-0 w-100" style={{height: '4px', background: 'linear-gradient(90deg, var(--primary-purple), var(--highlight-purple), var(--primary-purple))'}}></div>
              <div className="gatekeeper-header mb-4 mt-2">
                <div className="d-inline-flex justify-content-center align-items-center rounded-circle mb-3" style={{width: '80px', height: '80px', background: 'rgba(200, 160, 58, 0.1)'}}>
                  <FaShieldHalved size={36} style={{color: 'var(--royal-blue)'}} />
                </div>
                <h2 className="fw-bold text-white mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Development Disclosure</h2>
              </div>
              <div className="gatekeeper-body text-light mb-5 px-sm-3" style={{opacity: 0.85}}>
                <p className="mb-3">This is a <strong style={{color: 'var(--royal-blue)'}}>technical demonstration</strong> website and <strong>NOT</strong> the official portal.</p>
              </div>
              <button 
                className="btn w-100 py-3 rounded-3 text-uppercase fw-bold shadow-sm" 
                onClick={() => {
                  sessionStorage.setItem('gatekeeperAcknowledged', 'true');
                  setShowGatekeeper(false);
                }}
                style={{backgroundColor: 'var(--royal-blue)', color: 'white'}}
              >
                Acknowledge & Proceed
              </button>
            </motion.div>
          </motion.div>
        )}
        </AnimatePresence>

        {/* 1. HERO BANNER */}
        <section className="gyp-hero d-flex align-items-center text-white position-relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="position-absolute w-100 h-100 top-0 start-0 gyp-hero-bg"
              style={{ backgroundImage: `url('${heroImages[currentSlide]}')` }}
            />
          </AnimatePresence>
          <div className="gyp-hero-overlay position-absolute w-100 h-100 top-0 start-0"></div>
          
          {/* Shifted left using a custom container style, removing default container centering */}
          <div className="position-relative z-1 w-100 px-4 px-md-5" style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div className="gyp-hero-content ms-0 ms-lg-4">
              <motion.div 
                className="d-flex align-items-center mb-4"
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...premiumTransition, delay: 0.2 }}
              >
                <h4 className="text-uppercase fw-bold gyp-hero-sub m-0" style={{color: '#d4af37'}}>
                  Handmade Art • Woodwork • Interiors • Events
                </h4>
              </motion.div>
              
              <motion.h1 
                className="display-2 fw-bold mb-4 gyp-hero-title text-white"
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...premiumTransition, delay: 0.4 }}
              >
                Crafting <span style={{ color: '#d4af37' }}>Art, Interiors</span> &<br/>
                <span style={{ color: '#d4af37' }}>Unforgettable Experiences</span>
              </motion.h1>
              
              <motion.p 
                className="lead mb-5 gyp-hero-desc text-white"
                style={{ maxWidth: '700px', fontSize: '1.25rem', lineHeight: '1.8' }}
                initial={{ opacity: 0, y: 20, filter: 'blur(5px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ ...premiumTransition, delay: 0.6 }}
              >
                From handcrafted wooden masterpieces to luxurious home interiors and memorable event experiences, GYP Signatures transforms ideas into timeless creations with exceptional craftsmanship and attention to detail.
              </motion.p>
              
              <motion.div
                className="d-flex flex-column flex-sm-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...premiumTransition, delay: 0.8 }}
              >
                <button className="btn gyp-btn-primary" onClick={() => navigate('/services/interior')}>
                  Explore Our Services
                </button>
                <button className="btn gyp-btn-outline" onClick={() => navigate('/book/visit')}>
                  Book Free Consultation
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2. ABOUT GYP */}
        <section className="gyp-about">
          <div className="container">
            <div className="row align-items-center g-5">
              <motion.div 
                className="col-lg-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="gyp-about-img-wrapper">
                  <img src="https://images.unsplash.com/photo-1533090368676-1fd25485db88?auto=format&fit=crop&w=800&q=80" alt="Craftsmanship" className="img-fluid rounded-4 shadow-lg" />
                </div>
              </motion.div>
              <motion.div 
                className="col-lg-6 px-lg-4"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="display-5 fw-bold mb-4 gyp-section-title">Where Creativity Meets Craftsmanship</h2>
                <div className="gyp-divider mb-4"></div>
                <p className="lead text-muted mb-4">
                  At GYP Signatures, every creation reflects dedication, precision, and artistic excellence. Whether it's handcrafted wooden artwork, customized interior solutions for homes and offices, or elegant event decorations, we believe every project deserves a unique identity.
                </p>
                <button className="btn gyp-btn-primary" onClick={() => navigate('/brand/about')}>
                  Discover Our Story
                </button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. OUR CORE SERVICES */}
        <section className="gyp-services bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold gyp-section-title">Our Core Services</h2>
              <div className="gyp-divider mx-auto mt-3"></div>
            </div>
            
            <div className="row g-4">
              {/* Service 1 */}
              <motion.div className="col-lg-4 col-md-6" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                <div className="gyp-service-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="gyp-service-img">
                    <img src={handmadeArtImg} alt="Handmade Artwork" className="w-100" />
                  </div>
                  <div className="card-body p-4 text-center">
                    <div className="gyp-service-icon mb-3"><FaPaintBrush size={24} /></div>
                    <h4 className="fw-bold mb-3">Handmade Artwork</h4>
                    <p className="text-muted">Unique handcrafted artworks created with traditional skills and modern aesthetics, designed to enhance residential and commercial spaces.</p>
                  </div>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div className="col-lg-4 col-md-6" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.1}}>
                <div className="gyp-service-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="gyp-service-img">
                    <img src={woodworkImg} alt="Woodwork & Interior" className="w-100" />
                  </div>
                  <div className="card-body p-4 text-center">
                    <div className="gyp-service-icon mb-3"><FaCouch size={24} /></div>
                    <h4 className="fw-bold mb-3">Woodwork & Interior</h4>
                    <p className="text-muted">Custom furniture, modular solutions, wardrobes, kitchens, office interiors, and complete woodwork designed to match your lifestyle.</p>
                  </div>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div className="col-lg-4 col-md-6" initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: 0.2}}>
                <div className="gyp-service-card card h-100 border-0 shadow-sm rounded-4 overflow-hidden">
                  <div className="gyp-service-img">
                    <img src={eventManagementImg} alt="Event Management" className="w-100" />
                  </div>
                  <div className="card-body p-4 text-center">
                    <div className="gyp-service-icon mb-3"><FaGlassCheers size={24} /></div>
                    <h4 className="fw-bold mb-3">Event Management</h4>
                    <p className="text-muted">Complete event planning and decoration services for weddings, corporate events, social gatherings, and special celebrations.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4. WHY CHOOSE GYP */}
        <section className="gyp-why-choose">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold gyp-section-title text-white">Why Clients Choose GYP Signatures</h2>
              <div className="gyp-divider mx-auto mt-3 bg-white"></div>
            </div>
            
            <div className="row g-4 justify-content-center">
              {[
                { icon: <FaGem />, title: "Handmade Excellence" },
                { icon: <FaHammer />, title: "Premium Wood Quality" },
                { icon: <FaCouch />, title: "Custom Interior Design" },
                { icon: <FaGlassCheers />, title: "Professional Event Planning" },
                { icon: <FaUserTie />, title: "Experienced Craftsmen" },
                { icon: <FaCheckCircle />, title: "End-to-End Execution" }
              ].map((item, idx) => (
                <motion.div key={idx} className="col-6 col-md-4 col-lg-4" initial={{opacity:0, scale:0.9}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay: idx * 0.05}}>
                  <div className="gyp-feature-card text-center p-4 h-100 rounded-4">
                    <div className="gyp-feature-icon mb-3">{item.icon}</div>
                    <h5 className="fw-bold text-white mb-0">{item.title}</h5>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FEATURED PROJECTS */}
        <section className="gyp-projects bg-light">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold gyp-section-title">Featured Projects</h2>
              <div className="gyp-divider mx-auto mt-3"></div>
            </div>
            
            {/* Gallery */}
            <motion.div layout className="row g-4">
              <AnimatePresence>
                {projects.map(project => (
                  <motion.div 
                    layout 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="col-md-6 col-lg-4" 
                    key={project.id}
                  >
                    <div className="gyp-project-card rounded-4 overflow-hidden position-relative">
                      <img src={project.img} alt={project.title} className="w-100" />
                      <div className="gyp-project-overlay">
                        <span className="badge bg-primary mb-2">{project.category}</span>
                        <h4 className="text-white fw-bold mb-0">{project.title}</h4>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
            
            <div className="text-center mt-5">
              <button className="btn gyp-btn-outline-dark" onClick={() => navigate('/portfolio')}>View All Projects</button>
            </div>
          </div>
        </section>

        {/* 6. OUR PROCESS */}
        <section className="gyp-process">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold gyp-section-title">Our Process</h2>
              <div className="gyp-divider mx-auto mt-3"></div>
            </div>
            
            <div className="gyp-timeline">
              {[
                { title: 'Consultation', icon: '1' },
                { title: 'Design', icon: '2' },
                { title: 'Material Selection', icon: '3' },
                { title: 'Craftsmanship', icon: '4' },
                { title: 'Installation / Setup', icon: '5' },
                { title: 'Project Delivery', icon: '6' }
              ].map((step, idx) => (
                <motion.div key={idx} className="gyp-timeline-step" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: idx * 0.1}}>
                  <div className="gyp-step-icon">{step.icon}</div>
                  <h5 className="fw-bold mt-3 mb-0">{step.title}</h5>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. STATISTICS */}
        <section className="gyp-stats text-white text-center">
          <div className="container">
            <div className="row g-4">
              {[
                { num: 250, label: 'Completed Projects', suffix: '+' },
                { num: 100, label: 'Happy Clients', suffix: '+' },
                { num: 50, label: 'Luxury Events', suffix: '+' },
                { num: 100, label: 'Custom Solutions', suffix: '%' }
              ].map((stat, idx) => (
                <div key={idx} className="col-6 col-lg-3">
                  <div className="gyp-stat-item">
                    <h2 className="display-4 fw-bold mb-2">
                      <AnimatedCounter from={0} to={stat.num} duration={2} suffix={stat.suffix} />
                    </h2>
                    <p className="text-uppercase letter-spacing-1 text-light opacity-75">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CUSTOMER REVIEWS */}
        <section className="gyp-reviews bg-light overflow-hidden">
          <div className="container-fluid py-5 my-md-4 px-0">
            <div className="text-center mb-5 pb-3 px-3">
              <h2 className="display-4 fw-bold mb-3 gyp-section-title">Customer Reviews</h2>
              <div className="gyp-divider mx-auto"></div>
              <p className="text-muted mt-3">Hear from our delighted clients</p>
            </div>
            
            <MarqueeTestimonials />
          </div>
        </section>

        {/* 9. BOOK CONSULTATION */}
        <section className="gyp-book">
          <div className="container">
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold gyp-section-title">Book Consultation</h2>
              <div className="gyp-divider mx-auto mt-3"></div>
            </div>
            
            <div className="row g-4">
              <motion.div className="col-md-4" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
                <div className="gyp-book-card card h-100 text-center p-4 border-0 shadow-sm rounded-4">
                  <div className="gyp-book-icon mb-3"><FaPaintBrush size={30} /></div>
                  <h4 className="fw-bold mb-3">Handmade Artwork</h4>
                  <p className="text-muted mb-4">Create custom handcrafted pieces that tell your unique story.</p>
                  <button className="btn gyp-btn-outline-dark mt-auto" onClick={() => navigate('/experience/center')}>Request Custom Art</button>
                </div>
              </motion.div>
              
              <motion.div className="col-md-4" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.1}}>
                <div className="gyp-book-card card h-100 text-center p-4 border-0 shadow-sm rounded-4" style={{backgroundColor: 'var(--royal-blue)', color: 'white'}}>
                  <div className="gyp-book-icon mb-3 text-white"><FaCouch size={30} /></div>
                  <h4 className="fw-bold text-white mb-3">Interior Design</h4>
                  <p className="text-white opacity-75 mb-4">Book a consultation for your luxury home or office interior project.</p>
                  <button className="btn bg-white text-dark fw-bold rounded-pill mt-auto" onClick={() => navigate('/experience/center')}>Book Interior Visit</button>
                </div>
              </motion.div>

              <motion.div className="col-md-4" initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:0.2}}>
                <div className="gyp-book-card card h-100 text-center p-4 border-0 shadow-sm rounded-4">
                  <div className="gyp-book-icon mb-3"><FaGlassCheers size={30} /></div>
                  <h4 className="fw-bold mb-3">Event Planning</h4>
                  <p className="text-muted mb-4">Schedule a meeting to plan your unforgettable wedding or corporate event.</p>
                  <button className="btn gyp-btn-outline-dark mt-auto" onClick={() => navigate('/experience/center')}>Schedule Event Meeting</button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

      </motion.div>
    </AnimatePresence>
  );
};

export default Home;
