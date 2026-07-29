import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { FaTimes, FaSearch, FaCouch, FaGem, FaPaintBrush, FaShippingFast, FaCheckCircle, FaExpand, FaChevronLeft, FaChevronRight, FaSearchPlus } from 'react-icons/fa';
import '../CSS/Productshowcase.css';

const categories = [
  "All",
  "Living Room",
  "Bedroom",
  "Dining",
  "Wardrobes",
  "TV Unit",
  "Kitchen",
  "Office",
  "Luxury Collection"
];

// Placeholder high-resolution Unsplash images
const products = [
  { id: 1, title: 'Solid Wood Sofa', category: 'Living Room', collection: 'Modern Living', desc: 'Crafted with premium teak wood and luxurious upholstery.', materials: 'Teak Wood, Velvet', customization: 'Yes, fully customizable.', img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80' },
  { id: 2, title: 'King Size Bed', category: 'Bedroom', collection: 'Royal Comfort', desc: 'Experience majestic sleep with our handcrafted mahogany bed.', materials: 'Mahogany Wood', customization: 'Size and finish customizable.', img: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=800&q=80' },
  { id: 3, title: 'Marble Dining Table', category: 'Dining', collection: 'Elegance', desc: 'A stunning 6-seater dining table with Italian marble top.', materials: 'Italian Marble, Oak Wood', customization: 'Table top shape customizable.', img: 'https://images.unsplash.com/photo-1617806118233-18e1c0945594?auto=format&fit=crop&w=800&q=80' },
  { id: 4, title: 'Sliding Wardrobe', category: 'Wardrobes', collection: 'Smart Storage', desc: 'Space-saving sliding wardrobe with tinted glass finish.', materials: 'Engineered Wood, Glass', customization: 'Internal partitions customizable.', img: 'https://images.unsplash.com/photo-1595514535315-1819777f9f3c?auto=format&fit=crop&w=800&q=80' },
  { id: 5, title: 'Floating TV Console', category: 'TV Unit', collection: 'Minimalist', desc: 'Sleek wall-mounted TV console with hidden wire management.', materials: 'Teak Veneer', customization: 'Length and depth customizable.', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80' },
  { id: 6, title: 'Island Kitchen', category: 'Kitchen', collection: 'Chef Series', desc: 'Premium modular kitchen layout with central cooking island.', materials: 'Acrylic, Quartz', customization: 'Cabinet colors customizable.', img: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?auto=format&fit=crop&w=800&q=80' },
  { id: 7, title: 'Executive Desk', category: 'Office', collection: 'Workspace', desc: 'Commanding solid wood desk for your home office.', materials: 'Walnut Wood', customization: 'Drawers and polish customizable.', img: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=800&q=80' },
  { id: 8, title: 'Premium Sofa Set', category: 'Luxury Collection', collection: 'Signature', desc: 'Our most exclusive, handcrafted sofa set with gold accents.', materials: 'Premium Teak, Italian Leather, Gold Leaf', customization: 'Bespoke tailoring available.', img: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80' },
];

const Productshowcase = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  
  // Format the URL parameter to match our category strings (e.g., 'living-room' -> 'Living Room')
  const initialCategory = category 
    ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    : 'All';

  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Sync state with URL parameter on mount or when parameter changes
  useEffect(() => {
    const matchedCategory = categories.find(c => c.toLowerCase() === initialCategory.toLowerCase());
    if (matchedCategory) {
      setActiveCategory(matchedCategory);
    }
  }, [initialCategory]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    // Update URL without reloading
    const urlParam = cat === 'All' ? '' : cat.toLowerCase().replace(/\s+/g, '-');
    navigate(`/showcase/${urlParam}`, { replace: true });
  };

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const openLightbox = (idx) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  
  const nextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % filteredProducts.length);
  };
  
  const prevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + filteredProducts.length) % filteredProducts.length);
  };

  return (
    <div className="product-showcase-page bg-light" style={{paddingTop: '80px'}}>
      
      {/* 1. HERO BANNER */}
      <section className="showcase-hero" style={{backgroundImage: "url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80')"}}>
        <div className="sc-hero-overlay"></div>
        
        {/* Animated Background Orbs */}
        <div className="sc-orb orb-1"></div>
        <div className="sc-orb orb-2"></div>
        
        <div className="container d-flex justify-content-center position-relative z-1">
          <motion.div 
            className="sc-hero-content text-center text-white"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="sc-hero-badge">
              <span>THE SIGNATURE COLLECTION</span>
            </div>
            
            <h1 className="sc-hero-title">
              Discover handcrafted furniture designed <br className="d-none d-md-block"/>to elevate every living space.
            </h1>
            
            <p className="sc-hero-desc">
              Explore our curated gallery of premium designs, luxury materials, and timeless aesthetics.
            </p>
            
            <button 
              className="btn-sc-premium"
              onClick={() => document.getElementById('filters').scrollIntoView({ behavior: 'smooth' })}
            >
              <span>Explore Collection</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS */}
      <section id="filters" className="py-5 bg-white border-bottom shadow-sm sticky-top" style={{top: '76px', zIndex: 1000}}>
        <div className="container">
          <div className="category-tabs-container d-flex justify-content-lg-center">
            {categories.map((cat, idx) => (
              <button 
                key={idx}
                className={`category-tab ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => handleCategoryClick(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTION */}
      <section className="py-5" style={{backgroundColor: '#F8F5EE'}}>
        <div className="container py-4">
          <div className="row align-items-center g-5">
            <motion.div 
              className="col-lg-7"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img src="https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1000&q=80" alt="Featured Collection" className="img-fluid rounded-4 shadow-lg w-100" style={{height: '450px', objectFit: 'cover'}} />
            </motion.div>
            <motion.div 
              className="col-lg-5"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h5 className="text-uppercase mb-2" style={{color: 'var(--royal-blue)', letterSpacing: '1px'}}>Premium Living Collection</h5>
              <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}}>The Signature Series</h2>
              <p className="text-muted mb-4" style={{lineHeight: '1.7', fontSize: '1.1rem'}}>
                Our flagship collection featuring imported fabrics, master-carved teak wood, and uncompromising comfort. Designed for those who demand absolute luxury in their living spaces.
              </p>
              <ul className="list-unstyled mb-5">
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle className="me-2" color="var(--royal-blue)"/> Italian Leather Upholstery</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle className="me-2" color="var(--royal-blue)"/> 24k Gold Accent Detailing</li>
                <li className="mb-2 d-flex align-items-center"><FaCheckCircle className="me-2" color="var(--royal-blue)"/> Lifetime Warranty on Wood</li>
              </ul>
              <button className="btn btn-gold-outline rounded-pill px-4 py-2" onClick={() => handleCategoryClick('Luxury Collection')}>
                Explore Collection →
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT GRID */}
      <section id="product-grid" className="py-5 bg-white">
        <div className="container py-5">
          
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h3 className="fw-bold m-0" style={{fontFamily: 'Playfair Display, serif'}}>{activeCategory} Furniture</h3>
            <span className="text-muted">{filteredProducts.length} Products Found</span>
          </div>

          <div className="row g-4">
            <AnimatePresence mode='popLayout'>
              {filteredProducts.map((product, idx) => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="col-12 col-md-6 col-lg-4 col-xl-3"
                  key={product.id}
                >
                  <div className="showcase-card" onClick={() => openLightbox(idx)}>
                    <div className="showcase-img-bg" style={{backgroundImage: `url('${product.img}')`}}></div>
                    
                    <div className="showcase-gradient-overlay">
                      <div className="showcase-expand-icon" onClick={(e) => { e.stopPropagation(); openLightbox(idx); }}>
                        <FaExpand />
                      </div>
                      
                      <div className="showcase-overlay-content">
                        <span className="badge bg-gold text-dark mb-2 px-3 py-2 text-uppercase fw-bold" style={{backgroundColor: 'var(--royal-blue)'}}>{product.category}</span>
                        <h3 className="fw-bold mb-2" style={{fontFamily: 'Playfair Display, serif', fontSize: '2rem'}}>{product.title}</h3>
                        <p className="text-light opacity-75 small mb-3" style={{display: '-webkit-box', WebkitLineClamp: '2', WebkitBoxOrient: 'vertical', overflow: 'hidden'}}>{product.desc}</p>
                        
                        <div className="d-flex align-items-center gap-2 text-gold fw-bold text-uppercase" style={{color: 'var(--royal-blue)', fontSize: '0.85rem', letterSpacing: '1px'}}>
                          <FaSearchPlus size={14}/> View Full Image
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            
            {filteredProducts.length === 0 && (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No products found in this category.</h4>
                <button className="btn btn-gold mt-3 rounded-pill px-4" onClick={() => handleCategoryClick('All')}>View All Collections</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE OUR FURNITURE */}
      <section className="py-5" style={{backgroundColor: '#F8F5EE'}}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold" style={{fontFamily: 'Playfair Display, serif'}}>Why Choose Our Furniture</h2>
          </div>
          <div className="row g-4">
            {[
              {icon: FaGem, title: 'Premium Materials', desc: 'Only the highest grade woods and fabrics.'},
              {icon: FaPaintBrush, title: 'Expert Craftsmanship', desc: 'Handcrafted by master artisans.'},
              {icon: FaCouch, title: 'Fully Customized', desc: 'Tailored perfectly to your unique space.'},
              {icon: FaShippingFast, title: 'Timely Delivery', desc: 'Guaranteed delivery schedules.'}
            ].map((feature, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div className="feature-card h-100">
                  <div className="mb-3">
                    <feature.icon size={40} color="var(--royal-blue)" />
                  </div>
                  <h5 className="fw-bold mb-2">{feature.title}</h5>
                  <p className="text-muted small mb-0">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CONSULTATION CTA */}
      <section className="py-5 position-relative" style={{backgroundColor: '#111', color: '#fff'}}>
        <div className="container py-5 text-center position-relative z-1">
          <h2 className="display-4 fw-bold mb-3" style={{fontFamily: 'Playfair Display, serif'}}>Begin Your Journey</h2>
          <p className="lead mb-5 mx-auto" style={{maxWidth: '600px', color: '#aaa'}}>
            Looking for custom furniture designed exclusively for your home? Book a private consultation with our experts today.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
            <button className="btn btn-gold rounded-pill px-5 py-3 fw-bold text-uppercase">Book Consultation</button>
            <button className="btn btn-outline-light rounded-pill px-5 py-3 fw-bold text-uppercase">Call Now</button>
          </div>
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            className="lightbox-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button className="lightbox-close" onClick={closeLightbox}>
              <FaTimes />
            </button>
            
            <button className="lightbox-nav lightbox-prev" onClick={prevImage}>
              <FaChevronLeft />
            </button>
            
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <motion.img 
                key={lightboxIndex}
                src={filteredProducts[lightboxIndex].img} 
                alt={filteredProducts[lightboxIndex].title}
                className="lightbox-img"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <button className="lightbox-nav lightbox-next" onClick={nextImage}>
              <FaChevronRight />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default Productshowcase;
