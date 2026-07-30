import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaGem, FaUsers, FaCouch, FaTools, FaCheckCircle, 
  FaStar, FaHeart, FaShieldAlt, FaCogs, FaBuilding, FaSearchPlus
} from 'react-icons/fa';
import '../CSS/OurHeritage.css';

const OurHeritage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="heritage-page">
      
      {/* 1. HERO BANNER */}
      <section className="heritage-hero">
        <div className="heritage-hero-bg"></div>
        <div className="heritage-hero-overlay"></div>
        
        {/* Animated Background Orbs */}
        <div className="heritage-orb heritage-orb-1"></div>
        <div className="heritage-orb heritage-orb-2"></div>

        <div className="container heritage-hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="mb-4">
              <span className="badge rounded-pill bg-white text-dark px-4 py-2 text-uppercase fw-bold shadow-sm" style={{letterSpacing: '3px', fontSize: '0.85rem'}}>Our Heritage</span>
            </div>
            <motion.h1 
              className="display-3 fw-bold mb-4 font-playfair"
              initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.2, duration: 1}}
            >
              Every masterpiece begins with a <span className="heritage-gold-text">dream</span>,<br className="d-none d-md-block"/>a <span className="heritage-gold-text">vision</span>, and the <span className="heritage-gold-text">courage</span> to create.
            </motion.h1>
            <motion.div 
              className="d-flex justify-content-center gap-4 mt-5 flex-column flex-sm-row"
              initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}}
              transition={{delay: 0.5, duration: 0.6}}
            >
              <button className="btn-heritage-solid" onClick={() => document.getElementById('beginning').scrollIntoView({behavior: 'smooth'})}>Discover Our Story</button>
              <button className="btn-heritage-outline" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Book Consultation</button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. THE BEGINNING */}
      <section id="beginning" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideRight}>
              <div className="heritage-img-zoom">
                <img src="https://images.unsplash.com/photo-1517646287270-a5a9ca602e5c?auto=format&fit=crop&w=800&q=80" alt="Early Workshop" style={{height: '500px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-6 pl-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideLeft}>
              <h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--heritage-royal-blue)', letterSpacing: '2px'}}>The Beginning</h5>
              <h2 className="display-4 fw-bold font-playfair mb-4">Every Great Journey Starts With A Dream</h2>
              <p className="lead mb-4" style={{lineHeight: '1.8'}}>
                It began not in a grand studio, but in a modest workspace fueled entirely by passion and a relentless desire to create something extraordinary. The vision was simple yet profound: to craft furniture that wasn't just functional, but a true reflection of the soul of a home.
              </p>
              <p className="mb-4" style={{lineHeight: '1.8'}}>
                Those early days were defined by sawdust, late nights, and an uncompromising dedication to mastering the art of fine woodworking. Every piece was a lesson, every challenge a stepping stone towards building a brand synonymous with luxury.
              </p>
              <button className="btn-heritage-outline-dark mt-3" onClick={() => document.getElementById('journey').scrollIntoView({behavior: 'smooth'})}>Read Full Story</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. GAYU'S JOURNEY */}
      <section id="journey" className="py-5" style={{backgroundColor: 'var(--heritage-light-lavender)'}}>
        <div className="container py-5">
          <div className="row align-items-center flex-row-reverse g-5">
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideLeft}>
              <div className="heritage-img-zoom">
                <img src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=800&q=80" alt="Gayu's Journey" style={{height: '500px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-6 pr-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideRight}>
              <h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--heritage-royal-blue)', letterSpacing: '2px'}}>Gayu's Journey</h5>
              <h2 className="display-4 fw-bold font-playfair mb-4">Crafting Dreams Into Reality</h2>
              <p className="lead mb-4" style={{lineHeight: '1.8'}}>
                Gayu's journey is a testament to the power of persistence. Transitioning from small bespoke orders to designing premium, expansive interiors required not just skill, but an absolute refusal to settle for mediocrity.
              </p>
              <p className="mb-4" style={{lineHeight: '1.8'}}>
                Through sheer hard work and a deep understanding of what makes a space feel truly luxurious, Gayu transformed a solitary dream into GYP Signatures. Today, that journey continues, driven by the same passion that ignited the very first spark.
              </p>
              <button className="btn-heritage-solid mt-3" onClick={() => document.getElementById('visionary').scrollIntoView({behavior: 'smooth'})}>Meet The Founder</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. HERITAGE TIMELINE */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <motion.h2 className="display-4 fw-bold font-playfair mb-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Our Heritage Timeline</motion.h2>
          
          <div className="heritage-timeline mt-5">
            <div className="heritage-timeline-line"></div>
            <div className="heritage-timeline-points">
              {[
                { year: "2019", title: "Dream Begins" },
                { year: "2021", title: "First Workshop" },
                { year: "2022", title: "First Luxury Project" },
                { year: "2023", title: "GYP Signature Launch" },
                { year: "Today", title: "Growing Every Day" }
              ].map((item, index) => (
                <motion.div className="heritage-timeline-point" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: index * 0.2}}>
                  <div className="heritage-timeline-circle"></div>
                  <div className="heritage-timeline-year">{item.year}</div>
                  <div className="heritage-timeline-title">{item.title}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. MILESTONES & ACHIEVEMENTS */}
      <section className="achievements-section">
        <div className="container">
          <motion.h2 className="display-4 fw-bold font-playfair text-center mb-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Milestones</motion.h2>
          
          <div className="row g-4">
            {[
              { icon: FaCheckCircle, title: "Completed Projects" },
              { icon: FaUsers, title: "Happy Families" },
              { icon: FaGem, title: "Luxury Interiors" },
              { icon: FaStar, title: "Premium Materials" },
              { icon: FaTools, title: "Expert Team" },
              { icon: FaCogs, title: "Customization" }
            ].map((item, index) => (
              <motion.div className="col-md-6 col-lg-4" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                <div className="achievement-card">
                  <item.icon size={45} color="var(--heritage-white)" className="mb-4" />
                  <h4 className="fw-bold text-white m-0">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MEET THE VISIONARY */}
      <section id="visionary" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
              <div className="heritage-img-zoom">
                <img src="/src/assets/image/2.jpeg" alt="Gayathri P." style={{height: '550px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-7 pl-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
              <h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--heritage-royal-blue)', letterSpacing: '2px'}}>The Visionary</h5>
              <h2 className="display-3 fw-bold font-playfair mb-1">Gayathri P.</h2>
              <p className="text-muted fw-bold text-uppercase mb-4">Founder & CEO</p>
              
              <p className="visionary-quote font-playfair">
                My vision was never just to build furniture. It was to curate an experience, to weave luxury and comfort into the very fabric of a home, creating spaces where families don't just live, but truly thrive.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. MANUFACTURING EXCELLENCE */}
      <section className="py-5" style={{backgroundColor: 'var(--heritage-light-lavender)'}}>
        <div className="container py-5">
          <motion.div className="text-center mb-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
            <h2 className="display-4 fw-bold font-playfair mb-3">Where Luxury Comes To Life</h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '700px'}}>Our state-of-the-art manufacturing unit is where raw materials meet masterful precision.</p>
          </motion.div>

          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideRight}>
              <div className="heritage-img-zoom">
                <img src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=800&q=80" alt="Our Workshop" style={{height: '450px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideLeft}>
              <h3 className="fw-bold font-playfair mb-4">Our Workshop</h3>
              <p className="mb-5" style={{lineHeight: '1.8'}}>
                We don't outsource our passion. By maintaining our own facility, we control every single detail, ensuring that the final product doesn't just meet industry standards, it completely redefines them.
              </p>
              
              <div className="row g-4">
                {[
                  {icon: FaCogs, text: "Premium Machinery"},
                  {icon: FaTools, text: "Expert Craftsmen"},
                  {icon: FaSearchPlus, text: "Quality Control"},
                  {icon: FaGem, text: "Luxury Finishing"}
                ].map((item, index) => (
                  <div className="col-sm-6" key={index}>
                    <div className="mfg-card">
                      <item.icon size={24} color="var(--heritage-royal-blue)" />
                      <span className="fw-bold">{item.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. COMPANY STATISTICS */}
      <section className="stats-section-dark">
        <div className="container">
          <div className="row g-4">
            {[
              {num: "500+", label: "Happy Families"},
              {num: "2+", label: "Years Experience"},
              {num: "100%", label: "Customization"},
              {num: "1", label: "Manufacturing Unit"}
            ].map((stat, index) => (
              <motion.div className="col-6 col-lg-3" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: index * 0.1}}>
                <div className="stat-item-dark">
                  <div className="stat-number-dark">{stat.num}</div>
                  <div className="stat-label text-uppercase fw-bold" style={{color: 'rgba(255, 255, 255, 0.7)', letterSpacing: '1px'}}>{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. OUR PROMISE */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <motion.h2 className="display-4 fw-bold font-playfair mb-3" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Our Promise</motion.h2>
          <motion.p className="lead mb-5 mx-auto text-muted" style={{maxWidth: '600px'}} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.2}}>
            Luxury isn't just what we build. It's how we serve every client, from the first sketch to the final installation.
          </motion.p>
          
          <div className="row g-4">
            {[
              {icon: FaGem, title: "Quality"},
              {icon: FaShieldAlt, title: "Trust"},
              {icon: FaTools, title: "Craftsmanship"},
              {icon: FaHeart, title: "Innovation"}
            ].map((promise, index) => (
              <motion.div className="col-6 col-lg-3" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                <div className="promise-card">
                  <promise.icon size={40} color="var(--heritage-royal-blue)" className="mb-4 transition-all" />
                  <h4 className="fw-bold font-playfair m-0">{promise.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="cta-parallax">
        <div className="cta-parallax-overlay"></div>
        <div className="container cta-parallax-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
            <h2 className="display-4 fw-bold font-playfair mb-4">Let's Create Your Dream Home Together</h2>
            <p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}}>
              Every great home begins with one conversation. Let's discuss your vision.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
              <button className="btn-heritage-solid" style={{background: 'var(--heritage-white)', color: 'var(--heritage-dark)'}} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Book Consultation</button>
              <button className="btn-heritage-outline" onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Visit Experience Center</button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default OurHeritage;
