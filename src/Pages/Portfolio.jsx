import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  FaHome, FaBuilding, FaHotel, FaHammer, FaCouch, 
  FaArrowRight, FaArrowsAltH, FaComments, FaPencilRuler, 
  FaTools, FaCheckSquare, FaGem 
} from 'react-icons/fa';
import '../CSS/Portfolio.css';
import AnimatedCounter from '../Component/AnimatedCounter';

const categories = [
  { name: 'Residential', icon: FaHome, count: '120+', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80' },
  { name: 'Commercial', icon: FaBuilding, count: '45+', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80' },
  { name: 'Luxury Villas', icon: FaHotel, count: '30+', img: 'https://images.unsplash.com/photo-1613490908574-17066e159491?auto=format&fit=crop&w=800&q=80' },
  { name: 'Apartments', icon: FaBuilding, count: '80+', img: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80' },
  { name: 'Hospitality', icon: FaCouch, count: '15+', img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80' },
  { name: 'Custom Furniture', icon: FaHammer, count: '500+', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80' }
];

const projects = [
  { id: 1, title: 'Opulent Villa', location: 'Srikalahasti', category: 'Luxury Villas', status: 'Completed', img: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'Modern Minimalist', location: 'Tirupati', category: 'Residential', status: 'Completed', img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Corporate HQ', location: 'Chennai', category: 'Commercial', status: 'Completed', img: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Skyline Apartment', location: 'Bangalore', category: 'Apartments', status: 'Completed', img: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Boutique Hotel', location: 'Goa', category: 'Hospitality', status: 'Completed', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Classic Bungalow', location: 'Nellore', category: 'Residential', status: 'Completed', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Executive Suites', location: 'Hyderabad', category: 'Commercial', status: 'Completed', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Penthouse Luxe', location: 'Mumbai', category: 'Luxury Villas', status: 'Completed', img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80' },
];

const filterOptions = ["All", "Residential", "Commercial", "Luxury Villas", "Apartments", "Hospitality"];

const Portfolio = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [sliderVal, setSliderVal] = useState(50);
  
  const initialCategory = category 
    ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'All';

  const [activeFilter, setActiveFilter] = useState(
    filterOptions.find(f => f.toLowerCase() === initialCategory.toLowerCase()) || 'All'
  );

  const handleFilterClick = (cat) => {
    setActiveFilter(cat);
    const urlParam = cat === 'All' ? '' : cat.toLowerCase().replace(/\s+/g, '-');
    navigate(`/portfolio/${urlParam}`, { replace: true });
  };

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-page bg-light" style={{paddingTop: '80px'}}>
      
      {/* 1. HERO BANNER */}
      <section className="portfolio-hero" style={{backgroundImage: "linear-gradient(135deg, rgba(39, 2, 73, 0.6) 0%, rgba(65, 105, 225, 0.7) 100%), url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80')"}}>
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        
        <motion.div 
          className="container d-flex justify-content-center text-white position-relative z-1"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="portfolio-glass-content text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <span className="portfolio-hero-badge">Exclusive Projects</span>
            </motion.div>
            
            <motion.h1 
              className="portfolio-hero-title" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover <span className="gradient-text">Luxury</span> Interiors
            </motion.h1>
            
            <motion.p 
              className="portfolio-hero-desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Explore our curated portfolio of completed projects. Every space reflects our commitment to exceptional craftsmanship, elegant design, and timeless luxury.
            </motion.p>
            
          </div>
        </motion.div>
      </section>

      {/* 2. PORTFOLIO OVERVIEW */}
      <section id="portfolio-overview" className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" alt="Portfolio Overview" className="img-fluid rounded-4 shadow-lg w-100" style={{height: '500px', objectFit: 'cover'}} />
            </motion.div>
            <motion.div 
              className="col-lg-6 px-lg-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5 className="text-uppercase mb-2" style={{color: 'var(--royal-blue)', letterSpacing: '1px'}}>About Our Portfolio</h5>
              <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Creating Elegant Spaces That Inspire</h2>
              <p className="text-muted mb-5" style={{lineHeight: '1.7', fontSize: '1.1rem'}}>
                For over a decade, we have transformed empty rooms into luxurious living spaces. Our portfolio spans high-end residential villas, modern apartments, and premium commercial establishments.
              </p>
              
              <div className="row g-4 mb-5">
                <div className="col-6 col-md-3">
                  <h3 className="fw-bold m-0" style={{color: 'var(--royal-blue)'}}><AnimatedCounter from={0} to={250} duration={2} suffix="+" /></h3>
                  <span className="small text-muted fw-bold text-uppercase">Completed Projects</span>
                </div>
                <div className="col-6 col-md-3">
                  <h3 className="fw-bold m-0" style={{color: 'var(--royal-blue)'}}><AnimatedCounter from={0} to={100} duration={2} suffix="%" /></h3>
                  <span className="small text-muted fw-bold text-uppercase">Client Satisfaction</span>
                </div>
                <div className="col-6 col-md-3">
                  <h3 className="fw-bold m-0" style={{color: 'var(--royal-blue)'}}><AnimatedCounter from={0} to={12} duration={2} suffix="+" /></h3>
                  <span className="small text-muted fw-bold text-uppercase">Years Experience</span>
                </div>
                <div className="col-6 col-md-3">
                  <h3 className="fw-bold m-0" style={{color: 'var(--royal-blue)'}}>100%</h3>
                  <span className="small text-muted fw-bold text-uppercase">Premium Materials</span>
                </div>
              </div>

              <button className="btn btn-gold-outline rounded-pill px-5 py-3 fw-bold text-uppercase" onClick={() => document.getElementById('project-gallery').scrollIntoView({ behavior: 'smooth' })}>
                Explore Collections
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. PROJECT CATEGORIES */}
      <section className="py-5" style={{backgroundColor: '#EAEAEA'}}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{fontFamily: 'Playfair Display, serif'}}>Project Categories</h2>
            <div style={{width: '60px', height: '3px', backgroundColor: 'var(--royal-blue)', margin: '20px auto 0'}}></div>
          </div>
          
          <div className="row g-4">
            {categories.map((cat, idx) => (
              <motion.div 
                className="col-12 col-md-6 col-lg-4" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="portfolio-cat-card" onClick={() => handleFilterClick(cat.name)}>
                  <div className="portfolio-cat-bg" style={{backgroundImage: `url('${cat.img}')`}}></div>
                  <div className="portfolio-cat-overlay"></div>
                  <div className="portfolio-cat-content">
                    <div className="portfolio-cat-icon">
                      {React.createElement(cat.icon, { size: 24, color: '#fff' })}
                    </div>
                    <h4 className="fw-bold mb-1">{cat.name}</h4>
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="small text-light opacity-75">{cat.count} Projects</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PROJECT */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row g-0 rounded-4 overflow-hidden shadow-lg" style={{border: '1px solid #eee'}}>
            <div className="col-lg-7">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80" alt="Featured Project" className="w-100 h-100" style={{objectFit: 'cover', minHeight: '400px'}} />
            </div>
            <div className="col-lg-5 p-4 p-md-5 d-flex flex-column justify-content-center bg-white">
              <span className="text-uppercase mb-2 fw-bold" style={{color: 'var(--royal-blue)', letterSpacing: '1px'}}>Featured Project</span>
              <h2 className="fw-bold mb-2" style={{fontFamily: 'Playfair Display, serif'}}>Luxury Villa Interior</h2>
              <p className="text-muted mb-4"><FaHome className="me-2"/>Srikalahasti, Andhra Pradesh</p>
              
              <div className="mb-4">
                <h6 className="fw-bold text-uppercase small letter-spacing-1">Services Provided</h6>
                <p className="text-muted small">Interior Design, Custom Furniture, Modular Kitchen, Wardrobes</p>
              </div>
              
              <div className="row g-3 mb-5">
                <div className="col-6">
                  <h6 className="fw-bold text-uppercase small letter-spacing-1">Total Area</h6>
                  <p className="text-muted m-0">3,500 Sq.ft.</p>
                </div>
                <div className="col-6">
                  <h6 className="fw-bold text-uppercase small letter-spacing-1">Completion</h6>
                  <p className="text-muted m-0">90 Days</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </section>

      {/* 5. COMPLETED PROJECTS GALLERY */}
      <section id="project-gallery" className="py-5" style={{backgroundColor: '#EAEAEA'}}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>Completed Projects Gallery</h2>
            
            <div className="d-flex flex-wrap justify-content-center">
              {filterOptions.map((opt, idx) => (
                <button 
                  key={idx} 
                  className={`gallery-filter-btn ${activeFilter === opt ? 'active' : ''}`}
                  onClick={() => handleFilterClick(opt)}
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          <div className="row g-4">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                  key={project.id}
                >
                  {/* Reusing product-card styling from showcase but applying portfolio data */}
                  <div className="product-card">
                    <div className="product-img-wrapper" style={{height: '280px'}}>
                      <img src={project.img} alt={project.title} />
                    </div>
                    
                    <div className="p-4 flex-grow-1 d-flex flex-column">
                      <span className="small text-uppercase mb-1" style={{color: 'var(--royal-blue)', letterSpacing: '1px'}}>{project.category}</span>
                      <h5 className="fw-bold mb-1">{project.title}</h5>
                      <p className="text-muted small mb-0"><FaHome className="me-1 opacity-50"/> {project.location} • {project.status}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProjects.length === 0 && (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No projects found in this category.</h4>
                <button className="btn btn-gold mt-3 rounded-pill px-4" onClick={() => handleFilterClick('All')}>View All Projects</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 6. BEFORE & AFTER TRANSFORMATION */}
      <section className="py-5 bg-white">
        <div className="container py-5 text-center">
          <span className="text-uppercase mb-2 fw-bold d-block" style={{color: 'var(--royal-blue)', letterSpacing: '1px'}}>Transformation Stories</span>
          <h2 className="display-6 fw-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Before & After</h2>
          <p className="text-muted mb-5 mx-auto" style={{maxWidth: '600px'}}>
            See how ordinary spaces become extraordinary with our bespoke furniture and interior solutions. Drag the slider to compare.
          </p>

          {/* Interactive Slider */}
          <div className="ba-slider-container">
            {/* Base Image (After) */}
            <img src="https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1000&q=80" alt="After Transformation" className="ba-image ba-image-after" />
            
            {/* Overlay Image (Before) clipped via state */}
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80" 
              alt="Before Transformation" 
              className="ba-image ba-image-before" 
              style={{ clipPath: `polygon(0 0, ${sliderVal}% 0, ${sliderVal}% 100%, 0 100%)` }}
            />
            
            {/* Slider Line & Button */}
            <div className="ba-slider-line" style={{ left: `${sliderVal}%` }}>
              <div className="ba-slider-button"><FaArrowsAltH /></div>
            </div>
            
            {/* Invisible Range Input */}
            <input 
              type="range" 
              min="0" max="100" 
              value={sliderVal} 
              onChange={(e) => setSliderVal(e.target.value)} 
              className="ba-slider-input" 
            />

            <div className="ba-label ba-label-after">After</div>
            <div className="ba-label ba-label-before">Before</div>
          </div>
          
        </div>
      </section>

      {/* 7. OUR DESIGN PROCESS */}
      <section className="py-5" style={{backgroundColor: '#EAEAEA'}}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-5" style={{fontFamily: 'Playfair Display, serif'}}>Our Design Process</h2>
          </div>
          
          <div className="process-timeline">
            {[
              {icon: FaComments, title: "Consultation", desc: "Understanding your vision & requirements."},
              {icon: FaPencilRuler, title: "Design", desc: "3D layouts & conceptualization."},
              {icon: FaGem, title: "Material Selection", desc: "Choosing premium finishes."},
              {icon: FaHammer, title: "Manufacturing", desc: "In-house precision crafting."},
              {icon: FaTools, title: "Installation", desc: "Expert on-site assembly."},
              {icon: FaCheckSquare, title: "Completion", desc: "Final handover of your dream space."}
            ].map((step, idx) => (
              <motion.div 
                className="process-step" 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="process-icon-wrapper">
                  {React.createElement(step.icon)}
                </div>
                <div>
                  <h6 className="fw-bold text-dark">{step.title}</h6>
                  <p className="small text-muted mb-0">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS */}
      <section className="py-5 bg-white border-top">
        <div className="container py-5">
          <div className="text-center mb-5">
            <span className="text-uppercase mb-2 fw-bold d-block" style={{color: 'var(--royal-blue)', letterSpacing: '1px'}}>Testimonials</span>
            <h2 className="display-6 fw-bold" style={{fontFamily: 'Playfair Display, serif'}}>What Our Clients Say</h2>
          </div>
          
          <div className="row g-4">
            {[1, 2, 3].map((item, idx) => (
              <div className="col-12 col-md-4" key={idx}>
                <div className="testimonial-card text-center">
                  <div className="mb-3 text-warning">
                    {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                  </div>
                  <p className="text-muted mb-4 font-italic">"GYP Signatures completely transformed our home. The attention to detail in their custom furniture is simply unmatched. Highly recommended!"</p>
                  <div className="d-flex flex-column align-items-center">
                    <img src={`https://i.pravatar.cc/100?img=${idx+10}`} alt="Client" className="rounded-circle mb-2" style={{width: '60px', height: '60px'}} />
                    <h6 className="fw-bold mb-0">Client Name {item}</h6>
                    <span className="small text-muted">Srikalahasti</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA SECTION */}
      <section className="py-5 position-relative gradient-hero">
        <div className="container py-5 text-center text-white position-relative z-1">
          <h2 className="display-4 fw-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Let's Design Something Extraordinary</h2>
          <p className="lead mb-5 mx-auto" style={{maxWidth: '700px', color: '#ccc'}}>
            Whether you're building a new home or renovating your existing space, our luxury design experts are ready to bring your vision to life.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
            <button className="btn btn-gold rounded-pill px-5 py-3 fw-bold text-uppercase" onClick={() => navigate('/experience/center')}>Book Consultation</button>
            <button className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase" onClick={() => navigate('/contact')}>Contact Us</button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Portfolio;
