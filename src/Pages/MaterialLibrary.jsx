import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaShieldAlt, FaTools, FaSprayCan, FaStar, FaArrowRight, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import '../CSS/MaterialLibrary.css';

const categories = [
  { id: 'wood', title: 'Wood', subtitle: 'Premium hardwood', image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&q=80&w=600' },
  { id: 'veneer', title: 'Veneer', subtitle: 'Natural & Engineered', image: 'https://images.unsplash.com/photo-1620646233562-f2a31ad24425?auto=format&fit=crop&q=80&w=600' },
  { id: 'laminate', title: 'Laminate', subtitle: 'Matte & High Gloss', image: 'https://images.unsplash.com/photo-1579547944212-c4f4961a8dd8?auto=format&fit=crop&q=80&w=600' },
  { id: 'fabric', title: 'Fabric', subtitle: 'Velvet, Linen, Cotton', image: 'https://images.unsplash.com/photo-1605646197089-8d23b9d62d08?auto=format&fit=crop&q=80&w=600' },
  { id: 'leather', title: 'Leather', subtitle: 'Italian & PU Leather', image: 'https://images.unsplash.com/photo-1613264421528-91c6e1db0df1?auto=format&fit=crop&q=80&w=600' },
  { id: 'marble', title: 'Marble', subtitle: 'Italian Marble & Quartz', image: 'https://images.unsplash.com/photo-1555529733-0e670560f4e1?auto=format&fit=crop&q=80&w=600' },
  { id: 'glass', title: 'Glass', subtitle: 'Tempered & Tinted', image: 'https://images.unsplash.com/photo-1581451006509-002d08151ed5?auto=format&fit=crop&q=80&w=600' },
  { id: 'metal', title: 'Metal', subtitle: 'Brass, Steel & Copper', image: 'https://images.unsplash.com/photo-1533558701576-353d2ee19d2b?auto=format&fit=crop&q=80&w=600' },
  { id: 'stone', title: 'Stone', subtitle: 'Natural Stone & Slate', image: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=600' },
  { id: 'hardware', title: 'Hardware', subtitle: 'Soft Close Systems', image: 'https://images.unsplash.com/photo-1584877777174-8c8230722df1?auto=format&fit=crop&q=80&w=600' },
  { id: 'handles', title: 'Handles', subtitle: 'Luxury Pulls & Hidden', image: 'https://images.unsplash.com/photo-1565181717315-13b6cb51b225?auto=format&fit=crop&q=80&w=600' },
  { id: 'paint', title: 'Paint Finish', subtitle: 'PU & Duco Finish', image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600' },
];

const galleryItems = [
  {
    id: 1,
    category: 'Wood',
    title: 'Premium Walnut Wood',
    finish: 'Natural Matte',
    texture: 'Smooth Wood Grain',
    applications: ['Living Room', 'Bedroom', 'Dining'],
    image: 'https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&q=80&w=800',
    description: 'Our premium walnut wood offers a rich, dark tone with elegant, tight grain patterns. It is highly durable and brings a touch of classic luxury to any space.',
    maintenance: 'Wipe with a soft, dry cloth. Use wood polish every 6 months to maintain the natural luster.'
  },
  {
    id: 2,
    category: 'Marble',
    title: 'Statuario Italian Marble',
    finish: 'High Gloss Polished',
    texture: 'Distinctive Grey Veining',
    applications: ['Table Tops', 'Flooring'],
    image: 'https://images.unsplash.com/photo-1587313632739-c894c259cb26?auto=format&fit=crop&q=80&w=800',
    description: 'Sourced directly from Italy, Statuario marble is renowned for its bright white background and bold, striking grey veining. A true statement piece.',
    maintenance: 'Clean spills immediately. Use pH-neutral cleaners and avoid acidic substances like lemon or vinegar.'
  },
  {
    id: 3,
    category: 'Fabric',
    title: 'Royal Blue Velvet',
    finish: 'Plush Velvet',
    texture: 'Soft, Dense Pile',
    applications: ['Sofas', 'Accent Chairs'],
    image: 'https://images.unsplash.com/photo-1584286595398-a59f21d313f5?auto=format&fit=crop&q=80&w=800',
    description: 'Luxuriously soft and highly durable, our premium velvet fabric catches the light beautifully, adding depth and opulence to upholstered furniture.',
    maintenance: 'Vacuum regularly with an upholstery attachment. Professionally dry clean for tough stains.'
  },
  {
    id: 4,
    category: 'Leather',
    title: 'Full Grain Aniline Leather',
    finish: 'Natural Matte',
    texture: 'Soft, Buttery Feel',
    applications: ['Sofas', 'Recliners', 'Beds'],
    image: 'https://images.unsplash.com/photo-1579738202511-2b6387a3250b?auto=format&fit=crop&q=80&w=800',
    description: 'The highest quality leather available. Aniline leather retains the hides natural surface, becoming softer and developing a beautiful patina over time.',
    maintenance: 'Dust regularly. Keep away from direct sunlight and heat sources. Apply leather conditioner bi-annually.'
  },
];

const MaterialLibrary = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedMaterial) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMaterial]);

  return (
    <div className="material-library-page">
      {/* 1. HERO BANNER */}
      <section className="mat-hero" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000")'}}>
        <div className="mat-hero-overlay"></div>
        {/* Animated Background Orbs */}
        <div className="hero-orb orb-1"></div>
        <div className="hero-orb orb-2"></div>
        
        <motion.div 
          className="mat-hero-content"
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="mat-hero-badge">The Signature Collection</span>
          </motion.div>
          
          <motion.h1 
            className="mat-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Discover <span className="gradient-text">Premium</span> Materials
          </motion.h1>
          
          <motion.p 
            className="mat-hero-desc"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Carefully selected woods, fabrics, natural stones, and luxurious finishes to craft your timeless interiors.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            <button className="btn-mat-premium" onClick={() => {
              document.getElementById('overview').scrollIntoView({ behavior: 'smooth' });
            }}>
              <span>Explore Collection</span>
              <FaArrowRight className="ms-3" />
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. MATERIAL OVERVIEW */}
      <section id="overview" className="mat-overview py-5">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800" alt="Premium Materials" className="mat-overview-img" />
            </motion.div>
            <motion.div 
              className="col-lg-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="display-5 fw-bold mb-4">Premium Materials That Define Luxury</h2>
              <p className="lead mb-4" style={{lineHeight: 1.8}}>
                Every piece of furniture begins with exceptional materials. At GYP Signatures, we carefully source premium woods, imported veneers, luxurious fabrics, natural stones, and high-quality finishes to create timeless masterpieces.
              </p>
              <button className="btn-mat-outline" onClick={() => {
                document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
              }}>
                Explore Collection
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MATERIAL CATEGORIES */}
      <section className="mat-categories py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Browse by Category</h2>
            <p className="lead mx-auto" style={{maxWidth: '600px'}}>Select a material category to discover the finishes and variations we offer.</p>
          </div>
          
          <div className="cat-grid">
            {categories.map((cat, idx) => (
              <motion.div 
                className="cat-card" 
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
              >
                <div className="cat-img-wrapper" onClick={() => setLightboxIndex(idx)} style={{cursor: 'pointer'}}>
                  <img src={cat.image} alt={cat.title} className="cat-img" />
                  <div className="cat-view-overlay">
                    <FaEye size={30} color="#fff" />
                  </div>
                </div>
                <div className="cat-content">
                  <h3 className="cat-title">{cat.title}</h3>
                  <p className="cat-subtitle">{cat.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. PREMIUM MATERIAL COLLECTION GALLERY */}
      <section id="gallery" className="mat-gallery py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Material Collection</h2>
            <p className="lead mx-auto" style={{maxWidth: '600px'}}>Explore our curated gallery of signature materials and finishes.</p>
          </div>

          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <motion.div 
                className="mat-item-card" 
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="mat-item-img-wrapper">
                  <img src={item.image} alt={item.title} className="mat-item-img" />
                </div>
                <div className="mat-item-content">
                  <h3 className="mat-item-title">{item.title}</h3>
                  <ul className="mat-specs">
                    <li><span>Finish</span> <span>{item.finish}</span></li>
                    <li><span>Texture</span> <span>{item.texture}</span></li>
                    <li><span>Applications</span> <span className="text-end" style={{maxWidth: '120px'}}>{item.applications.slice(0, 2).join(', ')}...</span></li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. MATERIAL COMPARISON */}
      <section className="mat-comparison py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Compare Materials</h2>
            <p className="lead mx-auto" style={{maxWidth: '600px'}}>Understand the characteristics of different materials to make the perfect choice for your space.</p>
          </div>

          <motion.div 
            className="comparison-table-wrapper"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>Solid Wood</th>
                  <th>Premium Laminate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Durability</strong></td>
                  <td><span className="star-rating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span></td>
                  <td><span className="star-rating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar style={{color: '#ddd'}}/></span></td>
                </tr>
                <tr>
                  <td><strong>Luxury Look</strong></td>
                  <td><span className="star-rating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span></td>
                  <td><span className="star-rating"><FaStar/><FaStar/><FaStar/><FaStar style={{color: '#ddd'}}/><FaStar style={{color: '#ddd'}}/></span></td>
                </tr>
                <tr>
                  <td><strong>Maintenance Ease</strong></td>
                  <td><span className="star-rating"><FaStar/><FaStar/><FaStar/><FaStar style={{color: '#ddd'}}/><FaStar style={{color: '#ddd'}}/></span></td>
                  <td><span className="star-rating"><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></span></td>
                </tr>
                <tr>
                  <td><strong>Lifespan</strong></td>
                  <td><strong>20+ Years</strong> (Can be refinished)</td>
                  <td><strong>10+ Years</strong> (Highly scratch resistant)</td>
                </tr>
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* 7. CARE & MAINTENANCE */}
      <section className="mat-care py-5">
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Care & Maintenance</h2>
            <p className="lead mx-auto" style={{maxWidth: '600px'}}>Preserve the beauty and longevity of your luxury furniture with these simple care guidelines.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-4">
              <div className="care-card">
                <FaSprayCan className="care-icon" />
                <h4 className="fw-bold mb-3">Daily Cleaning</h4>
                <p>Use a soft, dry microfiber cloth for daily dusting. For spills, blot immediately with a clean, damp cloth. Avoid harsh chemical cleaners on all surfaces.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="care-card">
                <FaTools className="care-icon" />
                <h4 className="fw-bold mb-3">Periodic Maintenance</h4>
                <p>Apply specialized wood polish or leather conditioner every 6 months to maintain natural oils, luster, and prevent cracking or drying over time.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="care-card">
                <FaShieldAlt className="care-icon" />
                <h4 className="fw-bold mb-3">Protection & Longevity</h4>
                <p>Keep furniture away from direct, prolonged sunlight to prevent fading. Use coasters on wood and marble surfaces to protect from heat and moisture rings.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOOK CONSULTATION CTA */}
      <section className="mat-cta py-5">
        <div className="container py-5 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="display-4 fw-bold mb-4">Need Help Choosing Materials?</h2>
            <p className="lead mb-5 mx-auto" style={{maxWidth: '700px', opacity: 0.9}}>
              Our design experts will guide you in selecting the perfect combination of materials, fabrics, and finishes to bring your dream home to life.
            </p>
            <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
              <button className="btn btn-light rounded-pill px-5 py-3 text-uppercase fw-bold" style={{color: 'var(--mat-primary-blue)', letterSpacing: '1px'}}>
                Book Consultation
              </button>
              <button className="btn btn-outline-light rounded-pill px-5 py-3 text-uppercase fw-bold" style={{letterSpacing: '1px'}}>
                Visit Experience Center
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 5. MATERIAL DETAILS MODAL */}
      <div className={`mat-modal-overlay ${selectedMaterial ? 'show' : ''}`} onClick={() => setSelectedMaterial(null)}>
        <div className="mat-modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="mat-modal-close" onClick={() => setSelectedMaterial(null)}>
            <FaTimes />
          </button>
          
          {selectedMaterial && (
            <div className="mat-modal-body">
              <img src={selectedMaterial.image} alt={selectedMaterial.title} className="mat-modal-img" />
              <div className="mat-modal-info d-flex flex-column justify-content-center">
                <span className="badge mb-3 align-self-start" style={{backgroundColor: 'var(--mat-primary-blue)'}}>{selectedMaterial.category}</span>
                <h2 className="mat-modal-title fw-bold">{selectedMaterial.title}</h2>
                <p className="mat-modal-desc">{selectedMaterial.description}</p>
                
                <div className="row g-3 mb-4">
                  <div className="col-6">
                    <p className="mb-1 text-muted small text-uppercase fw-bold">Finish</p>
                    <p className="fw-bold mb-0" style={{color: 'var(--mat-heading)'}}>{selectedMaterial.finish}</p>
                  </div>
                  <div className="col-6">
                    <p className="mb-1 text-muted small text-uppercase fw-bold">Texture</p>
                    <p className="fw-bold mb-0" style={{color: 'var(--mat-heading)'}}>{selectedMaterial.texture}</p>
                  </div>
                  <div className="col-12 mt-3">
                    <p className="mb-1 text-muted small text-uppercase fw-bold">Applications</p>
                    <p className="fw-bold mb-0" style={{color: 'var(--mat-heading)'}}>{selectedMaterial.applications.join(', ')}</p>
                  </div>
                </div>
                <button className="btn-mat-primary mt-auto">Book Consultation</button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* LIGHTBOX FOR CATEGORIES */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            className="cat-lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button className="lightbox-btn lightbox-close" onClick={() => setLightboxIndex(null)}>
              <FaTimes />
            </button>
            
            <button 
              className="lightbox-btn lightbox-prev" 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => prev === 0 ? categories.length - 1 : prev - 1);
              }}
            >
              <FaChevronLeft />
            </button>
            
            <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
              <img src={categories[lightboxIndex].image} alt={categories[lightboxIndex].title} className="lightbox-img" />
              <div className="lightbox-caption">
                <h4>{categories[lightboxIndex].title}</h4>
                <p>{categories[lightboxIndex].subtitle}</p>
              </div>
            </div>

            <button 
              className="lightbox-btn lightbox-next" 
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex(prev => prev === categories.length - 1 ? 0 : prev + 1);
              }}
            >
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default MaterialLibrary;
