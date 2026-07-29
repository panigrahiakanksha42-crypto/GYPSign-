import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaArrowRight, FaMapMarkerAlt, FaMedal, FaCrown, FaTools, 
  FaShieldAlt, FaStar, FaCouch, FaSearchPlus, FaHeart, FaCogs, FaCheckCircle, FaBuilding
} from 'react-icons/fa';
import '../CSS/Aboutus.css';
import founderImg from '../assets/image/2.jpeg';

const Aboutus = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="about-page">
      
      {/* 1. HERO BANNER */}
      <section className="about-hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80')"}}>
        <div className="about-hero-overlay"></div>
        <div className="container position-relative z-2 d-flex justify-content-center">
          <motion.div 
            className="about-hero-glass text-center"
            initial="hidden" animate="visible" variants={fadeUp}
          >
            <div className="about-hero-badge mb-3">
              <span>ABOUT GYP SIGNATURES</span>
            </div>
            <motion.h1 
              className="display-4 fw-bold mb-4 font-playfair text-white"
              initial={{opacity: 0, scale: 0.9}} animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.2, duration: 0.8}}
            >
              Crafting Timeless Luxury,<br className="d-none d-md-block"/>One Home at a Time
            </motion.h1>
            <motion.div 
              className="d-flex justify-content-center gap-4 mt-4 flex-column flex-sm-row"
              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
              transition={{delay: 0.4, duration: 0.6}}
            >
              <button className="btn-about-outline" onClick={() => document.getElementById('heritage').scrollIntoView({behavior: 'smooth'})}>Our Heritage</button>
              <button className="btn-about-solid" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Book Consultation</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. OUR STORY */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideLeft}>
              <div className="about-img-zoom position-relative">
                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=800&q=80" alt="Founder Working" style={{height: '500px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideRight}>
              <h5 className="text-uppercase" style={{color: 'var(--about-royal-blue)', letterSpacing: '2px'}}>Our Story</h5>
              <h2 className="display-5 fw-bold mb-4 font-playfair">Crafting Dreams Into Reality</h2>
              <p className="lead mb-4" style={{color: '#555', lineHeight: '1.8'}}>
                Our journey began with one simple belief: that every home deserves to be a masterpiece. What started as a small workshop driven by passion has blossomed into GYP Signatures, a beacon of luxury furniture design and impeccable craftsmanship. 
              </p>
              <p className="mb-4" style={{color: '#555', lineHeight: '1.8'}}>
                We pour our hearts into every sketch, every cut of wood, and every stitch of fabric, ensuring that the final piece doesn't just fill a space—it defines it.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. OUR HERITAGE */}
      <section id="heritage" className="py-5" style={{backgroundColor: 'var(--about-light-lavender)'}}>
        <div className="container py-5 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
            <h2 className="display-5 fw-bold mb-4 font-playfair">Our Heritage</h2>
            <p className="lead mx-auto mb-5" style={{maxWidth: '800px', color: '#555'}}>
              Rooted in generations of artisanal woodworking and upholstery, GYP Signatures carries forward a legacy of uncompromising quality. We blend time-honored techniques with contemporary design aesthetics to create furniture that transcends trends and stands the test of time.
            </p>
            <div className="about-img-zoom mb-5 mx-auto" style={{maxWidth: '1000px', height: '400px'}}>
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80" alt="GYP Heritage" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. MEET THE VISIONARY */}
      <section id="visionary" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
              <div className="about-img-zoom">
                <img src={founderImg} alt="The Visionary" style={{height: '550px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-7 pl-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
              <h5 className="text-uppercase mb-2" style={{color: 'var(--about-royal-blue)', letterSpacing: '2px'}}>The Visionary</h5>
              <h2 className="display-4 fw-bold font-playfair mb-1">Gayathri Posey</h2>
              <p className="text-muted fw-bold text-uppercase mb-4">Founder & CEO</p>
              
              <div className="founder-content">
                <span className="founder-quote-mark font-playfair">"</span>
                <p className="highlight-quote font-playfair">
                  Luxury is not just about expensive materials; it is about the experience, the emotion, and the profound sense of belonging you feel when you enter a thoughtfully designed room.
                </p>
                <p className="mb-4" style={{color: '#555', lineHeight: '1.8'}}>
                  Under Gayathri's visionary leadership, GYP Signatures has redefined bespoke furniture. Her meticulous attention to detail and unwavering commitment to client satisfaction have cemented the brand's reputation as a leader in premium interior solutions.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. MISSION, VISION, VALUES */}
      <section id="mission" className="py-5" style={{backgroundColor: '#0a192f'}}>
        <div className="container py-5">
          <div className="row g-4">
            <motion.div className="col-md-4" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
              <div className="mvv-card">
                <div className="mvv-icon-wrapper">
                  <FaCrown size={30} color="var(--about-royal-blue)" />
                </div>
                <h3 className="font-playfair fw-bold mb-3">Our Mission</h3>
                <p className="text-muted mb-0">To elevate everyday living by designing and crafting bespoke, luxury furniture that perfectly aligns with our clients' lifestyles and aspirations.</p>
              </div>
            </motion.div>
            <motion.div className="col-md-4" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.2}}>
              <div className="mvv-card">
                <div className="mvv-icon-wrapper">
                  <FaStar size={30} color="var(--about-royal-blue)" />
                </div>
                <h3 className="font-playfair fw-bold mb-3">Our Vision</h3>
                <p className="text-muted mb-0">To be the world's most trusted and revered luxury furniture brand, recognized for uncompromising quality, innovative design, and timeless elegance.</p>
              </div>
            </motion.div>
            <motion.div className="col-md-4" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.4}}>
              <div className="mvv-card">
                <div className="mvv-icon-wrapper">
                  <FaHeart size={30} color="var(--about-royal-blue)" />
                </div>
                <h3 className="font-playfair fw-bold mb-3">Our Values</h3>
                <p className="text-muted mb-0">Integrity in craftsmanship, obsession with detail, sustainable practices, and a relentless dedication to exceeding client expectations in every project.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. THE GYP DIFFERENCE */}
      <section className="py-5" style={{backgroundColor: 'var(--about-light-lavender)'}}>
        <div className="container py-5 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
            <h2 className="display-5 fw-bold font-playfair mb-2">The GYP Difference</h2>
            <p className="lead text-muted mb-5">Why Choose GYP Signatures?</p>
          </motion.div>
          
          <div className="row g-4">
            {[
              {icon: FaMedal, title: "Premium Craftsmanship"},
              {icon: FaCouch, title: "Luxury Materials"},
              {icon: FaTools, title: "Custom Designs"},
              {icon: FaSearchPlus, title: "Attention To Detail"}
            ].map((diff, index) => (
              <motion.div className="col-6 col-lg-3" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                <div className="diff-card">
                  <diff.icon size={40} color="var(--about-royal-blue)" className="mb-3" />
                  <h5 className="fw-bold m-0">{diff.title}</h5>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. LOCAL EXPERTISE */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <motion.div className="expertise-card mx-auto" style={{maxWidth: '800px'}} initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
            <FaMapMarkerAlt size={50} color="var(--about-royal-blue)" className="mb-4" />
            <h2 className="display-6 fw-bold font-playfair mb-3">Local Expertise</h2>
            <p className="lead text-muted mb-4">
              With our roots firmly planted locally, we deeply understand the architectural nuances and design preferences of our community. We combine this localized insight with global luxury standards to deliver unparalleled spaces.
            </p>
            <button className="btn-about-solid" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Visit Experience Center</button>
          </motion.div>
        </div>
      </section>

      {/* 8. OUR JOURNEY TIMELINE */}
      <section className="py-5" style={{backgroundColor: 'var(--about-light-lavender)'}}>
        <div className="container py-5 text-center">
          <motion.h2 className="display-5 fw-bold font-playfair mb-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Our Journey</motion.h2>
          
          <div className="timeline-wrapper">
            <div className="timeline-line d-none d-md-block"></div>
            <div className="timeline-points">
              {[
                {year: "2023", title: "Started"},
                {year: "2024", title: "First Studio"},
                {year: "2025", title: "Luxury Collection"},
                {year: "Today", title: "Growing Brand"}
              ].map((point, index) => (
                <motion.div className="timeline-point" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.2}}>
                  <div className="timeline-circle"></div>
                  <div className="timeline-year">{point.year}</div>
                  <div className="timeline-title">{point.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. MANUFACTURING EXCELLENCE */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideLeft}>
              <div className="about-img-zoom">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80" alt="Factory" style={{height: '500px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideRight}>
              <h5 className="text-uppercase mb-2" style={{color: 'var(--about-royal-blue)', letterSpacing: '2px'}}>Manufacturing Excellence</h5>
              <h2 className="display-5 fw-bold font-playfair mb-4">Own Manufacturing Unit</h2>
              <p className="text-muted mb-4" style={{lineHeight: '1.8'}}>
                Having our own state-of-the-art manufacturing unit empowers us to maintain absolute control over quality, precision, and timelines. We don't rely on third parties; we build your furniture from the ground up.
              </p>
              
              <div className="row g-3 mb-4">
                {[
                  {icon: FaCogs, text: "Premium Machines"},
                  {icon: FaTools, text: "Expert Craftsmen"},
                  {icon: FaCheckCircle, text: "Quality Check"},
                  {icon: FaBuilding, text: "Modern Equipment"}
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="mfg-feature-card">
                      <item.icon size={24} color="var(--about-royal-blue)" />
                      <span className="fw-bold">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 10. COMPANY STATISTICS */}
      <section id="stats" className="stats-section py-5">
        <div className="container py-5">
          <div className="row g-4">
            {[
              {num: "500+", label: "Happy Families"},
              {num: "2+", label: "Years Experience"},
              {num: "100%", label: "Customization"},
              {num: "1", label: "Manufacturing Unit"}
            ].map((stat, index) => (
              <motion.div className="col-6 col-lg-3" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: index * 0.1}}>
                <div className="stat-item">
                  <div className="stat-number">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. CTA SECTION */}
      <section className="cta-section text-center">
        <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=1600&q=80" alt="CTA Background" className="cta-bg-img" />
        <div className="container cta-content">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
            <h2 className="display-4 fw-bold font-playfair mb-3">Begin Your Luxury Journey</h2>
            <p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}}>
              Let's create a home that's uniquely yours. Schedule a private consultation with our design experts today.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
              <button className="btn-about-solid" style={{backgroundColor: 'var(--about-white)', color: 'var(--about-dark)'}} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Book Consultation</button>
              <button className="btn-about-outline" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Visit Experience Center</button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Aboutus;
