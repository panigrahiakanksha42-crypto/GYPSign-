import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaHome, FaBuilding, FaHammer, FaCouch, FaGlassCheers, FaBriefcase,
  FaCheckCircle, FaStar, FaArrowsAltH, FaArrowRight, FaPaintBrush,
  FaTools, FaDraftingCompass, FaHandshake, FaMedal
} from 'react-icons/fa';
import '../CSS/Portfolio.css';
import AnimatedCounter from '../Component/AnimatedCounter';

const heroImages = [
  'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1920&q=80', // Wooden carving workshop
  'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80', // Luxury house interior
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1920&q=80', // Apartment interior
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80', // Office workspace
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1920&q=80', // Wedding stage
  'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1920&q=80'  // Corporate conference
];

const Portfolio = () => {
  const navigate = useNavigate();
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [baSliderVal, setBaSliderVal] = useState(50);

  // Hero Slider Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const premiumTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] };
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: premiumTransition }
  };

  return (
    <div className="portfolio-page gyp-theme">
      
      {/* 1. HERO BANNER */}
      <section className="portfolio-hero">
        <AnimatePresence mode='wait'>
          <motion.div 
            key={currentHeroSlide}
            className="hero-bg-slider"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5 }}
            style={{ backgroundImage: `url(${heroImages[currentHeroSlide]})` }}
          />
        </AnimatePresence>
        <div className="hero-overlay"></div>
        
        <div className="container position-relative z-2 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="gyp-hero-badge">Project Portfolio</span>
            <h1 className="gyp-hero-title mb-4">
              Every Project<br/>Tells A Story
            </h1>
            <p className="gyp-hero-desc mx-auto mb-5">
              Explore our handcrafted artwork, luxury interiors, and memorable events.
            </p>
            <button className="btn-gyp-gold" onClick={() => document.getElementById('portfolio-overview').scrollIntoView({behavior:'smooth'})}>
              Explore Projects
            </button>
          </motion.div>
        </div>
        
        {/* Floating shapes (implemented via CSS pseudo-elements) */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
      </section>

      {/* 2. PORTFOLIO OVERVIEW */}
      <section id="portfolio-overview" className="py-5 bg-ivory">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={premiumTransition}
            >
              <div className="gyp-image-frame">
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80" alt="Designers discussing" className="img-fluid" />
              </div>
            </motion.div>
            <motion.div 
              className="col-lg-6 px-lg-4"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={premiumTransition}
            >
              <h2 className="gyp-section-title mb-4">Every Creation Reflects Our Passion</h2>
              <p className="gyp-text-muted mb-4">
                At GYP Signatures, every project is designed with creativity, handcrafted precision, premium materials, and exceptional attention to detail. Whether it's a custom artwork, a complete home interior, or a grand event setup, our goal is to deliver experiences that exceed expectations.
              </p>
              <button className="btn-gyp-outline" onClick={() => document.getElementById('categories').scrollIntoView({behavior:'smooth'})}>
                View Portfolio
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PORTFOLIO CATEGORIES */}
      <section id="categories" className="py-5 bg-parchment">
        <div className="container py-5">
          <motion.div className="row g-4" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-50px" }}>
            {[
              { title: "Artwork", img: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80" },
              { title: "Home Interior", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80" },
              { title: "Apartment Interior", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=600&q=80" },
              { title: "Office Interior", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" },
              { title: "Wedding Events", img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80" },
              { title: "Corporate Events", img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80" }
            ].map((cat, idx) => (
              <motion.div className="col-12 col-md-6 col-lg-4" key={idx} variants={fadeUpVariant}>
                <div className="gyp-cat-card">
                  <img src={cat.img} alt={cat.title} className="gyp-cat-img" />
                  <div className="gyp-cat-overlay">
                    <h3 className="gyp-cat-title">{cat.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. FEATURED PROJECTS */}
      <section className="py-5 bg-ivory">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="gyp-section-title">Featured Projects</h2>
            <div className="gyp-divider mx-auto mt-3"></div>
          </div>
          
          <div className="row g-5">
            {/* Featured Project 1 */}
            <motion.div className="col-12 col-lg-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={premiumTransition}>
              <div className="gyp-featured-card">
                <div className="gyp-featured-img-wrap">
                  <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80" alt="Villa Interior" />
                </div>
                <div className="gyp-featured-content">
                  <h3 className="mb-1">Royal Heritage Villa</h3>
                  <p className="text-muted small mb-3"><FaHome className="me-2"/>Srikalahasti • Interior Design</p>
                  <div className="d-flex justify-content-between mb-4 small">
                    <span><strong>Size:</strong> 8,500 sq.ft</span>
                    <span><strong>Time:</strong> 4 Months</span>
                  </div>
                  <button className="btn-gyp-text">View Project <FaArrowRight className="ms-2"/></button>
                </div>
              </div>
            </motion.div>
            {/* Featured Project 2 */}
            <motion.div className="col-12 col-lg-6" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{...premiumTransition, delay: 0.2}}>
              <div className="gyp-featured-card">
                <div className="gyp-featured-img-wrap">
                  <img src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80" alt="Wedding Mandap" />
                </div>
                <div className="gyp-featured-content">
                  <h3 className="mb-1">Palace Wedding</h3>
                  <p className="text-muted small mb-3"><FaGlassCheers className="me-2"/>Udaipur • Event Management</p>
                  <div className="d-flex justify-content-between mb-4 small">
                    <span><strong>Guests:</strong> 1,200+</span>
                    <span><strong>Time:</strong> 3 Days Setup</span>
                  </div>
                  <button className="btn-gyp-text">View Project <FaArrowRight className="ms-2"/></button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. HANDMADE ARTWORK PORTFOLIO */}
      <section className="py-5 bg-parchment">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="gyp-section-title">Pure Handmade Artwork</h2>
            <div className="gyp-divider mx-auto mt-3"></div>
          </div>
          <div className="row g-4">
            {[
              {title: 'Temple Carving', cat: 'Wood Carving', img: 'https://images.unsplash.com/photo-1588698188168-9de1195aa1d9?auto=format&fit=crop&w=600&q=80', mat: 'Teak Wood', time: '6 Weeks'},
              {title: 'Abstract Sculpture', cat: 'Modern Artwork', img: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80', mat: 'Walnut', time: '4 Weeks'},
              {title: 'Custom Name Board', cat: 'Name Boards', img: 'https://images.unsplash.com/photo-1582560469796-0153be95f00e?auto=format&fit=crop&w=600&q=80', mat: 'Rosewood', time: '2 Weeks'},
              {title: 'Traditional Wall Panel', cat: 'Wall Panels', img: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80', mat: 'Oak', time: '5 Weeks'}
            ].map((art, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="gyp-project-card">
                  <div className="gyp-project-img-wrap">
                    <img src={art.img} alt={art.title} className="gyp-project-img" />
                  </div>
                  <div className="gyp-project-info">
                    <span className="gyp-project-cat">{art.cat}</span>
                    <h4 className="gyp-project-title">{art.title}</h4>
                    <div className="gyp-project-meta">
                      <span>{art.mat}</span>
                      <span>✓ Handcrafted</span>
                      <span>{art.time}</span>
                    </div>
                    <button className="btn-gyp-block mt-3">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WOODWORK & INTERIOR PORTFOLIO */}
      <section className="py-5 bg-ivory">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="gyp-section-title">Premium Woodwork & Interior Projects</h2>
            <div className="gyp-divider mx-auto mt-3"></div>
          </div>
          <div className="row g-4">
            {[
              {title: 'Luxury Living Room', cat: 'Living Room', loc: 'Hyderabad', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=600&q=80', mat: 'Teak & Brass', time: '8 Weeks'},
              {title: 'Modular Kitchen', cat: 'Kitchen', loc: 'Chennai', img: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80', mat: 'Acrylic & Wood', time: '4 Weeks'},
              {title: 'Executive Cabin', cat: 'Office', loc: 'Bangalore', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80', mat: 'Walnut & Glass', time: '6 Weeks'},
              {title: 'Master Bedroom', cat: 'Bedroom', loc: 'Mumbai', img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=600&q=80', mat: 'Mahogany', time: '5 Weeks'}
            ].map((int, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="gyp-project-card">
                  <div className="gyp-project-img-wrap">
                    <img src={int.img} alt={int.title} className="gyp-project-img" />
                  </div>
                  <div className="gyp-project-info">
                    <span className="gyp-project-cat">{int.cat}</span>
                    <h4 className="gyp-project-title">{int.title}</h4>
                    <div className="gyp-project-meta">
                      <span>{int.loc}</span>
                      <span>{int.mat}</span>
                      <span>{int.time}</span>
                    </div>
                    <button className="btn-gyp-block mt-3">View Project</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. EVENT MANAGEMENT PORTFOLIO */}
      <section className="py-5 bg-parchment">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="gyp-section-title">Wedding & Corporate Events</h2>
            <div className="gyp-divider mx-auto mt-3"></div>
          </div>
          <div className="row g-4">
            {[
              {title: 'Grand Wedding Mandap', cat: 'Wedding', loc: 'Taj Falaknuma', img: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=600&q=80', guests: '1500+', theme: 'Royal'},
              {title: 'Product Launch', cat: 'Corporate', loc: 'HICC', img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=600&q=80', guests: '500+', theme: 'Modern Tech'},
              {title: 'Floral Entrance', cat: 'Reception', loc: 'Novotel', img: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80', guests: '800+', theme: 'Spring Bloom'},
              {title: 'Award Ceremony', cat: 'Award Ceremony', loc: 'ITC Kohinoor', img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=600&q=80', guests: '1000+', theme: 'Glamour'}
            ].map((evt, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="gyp-project-card">
                  <div className="gyp-project-img-wrap">
                    <img src={evt.img} alt={evt.title} className="gyp-project-img" />
                  </div>
                  <div className="gyp-project-info">
                    <span className="gyp-project-cat">{evt.cat}</span>
                    <h4 className="gyp-project-title">{evt.title}</h4>
                    <div className="gyp-project-meta">
                      <span>{evt.loc}</span>
                      <span>Guests: {evt.guests}</span>
                      <span>{evt.theme} Theme</span>
                    </div>
                    <button className="btn-gyp-block mt-3">View Gallery</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. BEFORE & AFTER */}
      <section className="py-5 bg-ivory">
        <div className="container py-5 text-center">
          <h2 className="gyp-section-title mb-4">Transformation Stories</h2>
          <p className="gyp-text-muted mx-auto mb-5" style={{maxWidth:'600px'}}>
            Drag the slider to compare before and after. Witness how ordinary spaces become extraordinary masterpieces.
          </p>
          
          <div className="ba-slider-container shadow-lg">
            <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80" alt="After" className="ba-image ba-image-after" />
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80" 
              alt="Before" 
              className="ba-image ba-image-before" 
              style={{ clipPath: `polygon(0 0, ${baSliderVal}% 0, ${baSliderVal}% 100%, 0 100%)` }}
            />
            <div className="ba-slider-line" style={{ left: `${baSliderVal}%` }}>
              <div className="ba-slider-button"><FaArrowsAltH /></div>
            </div>
            <input 
              type="range" min="0" max="100" 
              value={baSliderVal} 
              onChange={(e) => setBaSliderVal(e.target.value)} 
              className="ba-slider-input" 
            />
            <div className="ba-label ba-label-after">After</div>
            <div className="ba-label ba-label-before">Before</div>
          </div>
        </div>
      </section>

      {/* 9. OUR PROJECT JOURNEY */}
      <section className="py-5 bg-parchment">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="gyp-section-title">Our Project Journey</h2>
            <div className="gyp-divider mx-auto mt-3"></div>
          </div>
          
          <div className="journey-timeline">
            {[
              {icon: FaHandshake, title: "Consultation", desc: "Understanding your vision."},
              {icon: FaDraftingCompass, title: "Design", desc: "Crafting concepts & layouts."},
              {icon: FaCheckCircle, title: "Material Selection", desc: "Choosing premium wood & finishes."},
              {icon: FaHammer, title: "Production", desc: "Artisanal crafting & manufacturing."},
              {icon: FaTools, title: "Installation", desc: "Expert on-site assembly."},
              {icon: FaStar, title: "Completion", desc: "Final handover of your dream space."}
            ].map((step, idx) => (
              <motion.div 
                className="journey-step" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="journey-icon">{React.createElement(step.icon)}</div>
                <h4 className="journey-title">{step.title}</h4>
                <p className="journey-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CLIENT SUCCESS STORIES */}
      <section className="py-5 bg-ivory">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="gyp-section-title">Client Success Stories</h2>
            <div className="gyp-divider mx-auto mt-3"></div>
          </div>
          
          <div className="row g-4">
            {[
              {name: 'Rajesh K.', project: 'Villa Interior', img: 'https://i.pravatar.cc/150?img=11', text: 'GYP Signatures transformed our bare villa into a palace. The custom woodwork is flawless and the attention to detail exceeded all expectations.'},
              {name: 'Anita S.', project: 'Wedding Decor', img: 'https://i.pravatar.cc/150?img=5', text: 'The floral arrangements and stage design for our daughter\'s wedding were breathtaking. Truly an unforgettable experience crafted by true professionals.'},
              {name: 'Vikram M.', project: 'Office Workspace', img: 'https://i.pravatar.cc/150?img=12', text: 'Our new corporate office designed by GYP perfectly reflects our brand\'s premium identity. The ergonomic and luxurious interiors boost our team\'s morale.'}
            ].map((story, idx) => (
              <div className="col-12 col-md-4" key={idx}>
                <div className="gyp-story-card">
                  <div className="story-stars">★★★★★</div>
                  <p className="story-text">"{story.text}"</p>
                  <div className="story-client">
                    <img src={story.img} alt={story.name} />
                    <div>
                      <h5>{story.name}</h5>
                      <span>{story.project}</span>
                    </div>
                  </div>
                  <button className="btn-gyp-text mt-4">Read Full Story</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PROJECT STATISTICS */}
      <section className="py-5 text-white" style={{ backgroundColor: 'var(--bg-dark)' }}>
        <div className="container py-5">
          <div className="row g-4 text-center">
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <FaCheckCircle className="stat-icon" />
                <h3 className="stat-number"><AnimatedCounter from={0} to={300} duration={2} suffix="+" /></h3>
                <p className="stat-label">Completed Projects</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <FaCouch className="stat-icon" />
                <h3 className="stat-number"><AnimatedCounter from={0} to={150} duration={2} suffix="+" /></h3>
                <p className="stat-label">Interior Projects</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <FaGlassCheers className="stat-icon" />
                <h3 className="stat-number"><AnimatedCounter from={0} to={80} duration={2} suffix="+" /></h3>
                <p className="stat-label">Events Managed</p>
              </div>
            </div>
            <div className="col-6 col-lg-3">
              <div className="stat-card">
                <FaMedal className="stat-icon" />
                <h3 className="stat-number"><AnimatedCounter from={0} to={100} duration={2} suffix="%" /></h3>
                <p className="stat-label">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. PREMIUM CTA */}
      <section className="gyp-cta-section text-center text-white">
        <div className="gyp-cta-bg"></div>
        <div className="gyp-cta-overlay"></div>
        <div className="container position-relative z-2">
          <h2 className="gyp-section-title text-white mb-4" style={{fontSize: '3.5rem'}}>Ready To Start<br/>Your Dream Project?</h2>
          <p className="lead mb-5 opacity-75" style={{maxWidth: '600px', margin: '0 auto'}}>Let's create something extraordinary together. From custom artwork to full-scale interiors and luxury events.</p>
          <div className="d-flex justify-content-center gap-4 flex-column flex-sm-row">
            <button className="btn-gyp-gold-solid px-5 py-3" onClick={() => navigate('/experience/center')}>Book Consultation</button>
            <button className="btn-gyp-outline-white px-5 py-3" onClick={() => navigate('/contact')}>Call Now</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
