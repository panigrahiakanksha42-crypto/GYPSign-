import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaPaintBrush, FaCouch, FaGlassCheers, FaCheckCircle, FaSearchPlus, FaLongArrowAltRight, FaClipboardList, FaRulerCombined, FaTree, FaHammer, FaTruck } from 'react-icons/fa';
import '../CSS/Productshowcase.css';

// Import images
import handmadeBanner from '../assets/image/handmade_art_banner_1785395677663.png';
import interiorBanner from '../assets/image/luxury_interior_banner_1785395688253.png';
import eventBanner from '../assets/image/event_management_banner_1785395698139.png';
import proj1 from '../assets/FeaturedProjects/ArtCarvedWoodenPanel.jpg';
import proj2 from '../assets/FeaturedProjects/LuxuryLivingRoom.jpg';
import proj3 from '../assets/FeaturedProjects/ModernWorkspace.jpg';
import proj4 from '../assets/FeaturedProjects/ContemporaryApartment.jpg';
import proj5 from '../assets/FeaturedProjects/GrandWeddingMandap.jpg';
import proj6 from '../assets/FeaturedProjects/EventsAnnualGalaSetup.jpg';

const heroSlides = [
  { img: handmadeBanner, title: "Handmade Art" },
  { img: interiorBanner, title: "Premium Woodwork & Luxury Interiors" },
  { img: eventBanner, title: "Wedding & Corporate Events" }
];

const artworkCategories = ["All", "Wooden Wall Art", "Temple Design", "Wood Sculpture", "Wood Carving", "Customized Name Board", "Decorative Panels", "Traditional Artwork", "Modern Art Pieces"];
const interiorCategories = ["All", "Living Room", "Bedroom", "Kitchen", "Wardrobe", "Office", "Apartment", "Villa", "Commercial"];
const eventCategories = ["All", "Wedding", "Corporate", "Birthday", "Reception", "Stage Decoration", "Floral Decoration", "Lighting", "Entrance Decoration"];

const artworkItems = [
  // Wooden Wall Art
  { id: 1, title: 'Geometric Wood Canvas', category: 'Wooden Wall Art', desc: 'Modern geometric patterns carved in wood.', material: 'Pine Wood', img: proj1 },
  { id: 2, title: 'Abstract Flow Panel', category: 'Wooden Wall Art', desc: 'Flowing lines carved into solid wood.', material: 'Oak', img: proj2 },
  { id: 3, title: 'Nature Inspired Wall Art', category: 'Wooden Wall Art', desc: 'Leaves and vines carved wall decoration.', material: 'Teak', img: proj3 },
  // Temple Design
  { id: 4, title: 'Traditional Pooja Mandir', category: 'Temple Design', desc: 'Handcrafted wooden pooja mandir.', material: 'Rosewood', img: proj4 },
  { id: 5, title: 'Compact Wall Temple', category: 'Temple Design', desc: 'Space-saving wooden temple.', material: 'Teak', img: proj5 },
  { id: 6, title: 'Large South Indian Mandir', category: 'Temple Design', desc: 'Elaborately carved large temple.', material: 'Mahogany', img: proj6 },
  // Wood Sculpture
  { id: 7, title: 'Vintage Wood Sculpture', category: 'Wood Sculpture', desc: 'Detailed handcrafted wooden sculpture.', material: 'Sandalwood', img: proj1 },
  { id: 8, title: 'Abstract Human Figure', category: 'Wood Sculpture', desc: 'Modern abstract human sculpture.', material: 'Walnut', img: proj2 },
  { id: 9, title: 'Animal Carving', category: 'Wood Sculpture', desc: 'Intricately carved horse sculpture.', material: 'Rosewood', img: proj3 },
  // Wood Carving
  { id: 10, title: 'Carved Wooden Panel', category: 'Wood Carving', desc: 'Intricate handmade wooden panel.', material: 'Teak Wood', img: proj4 },
  { id: 11, title: 'Floral Carved Motif', category: 'Wood Carving', desc: 'Beautiful floral patterns.', material: 'Mango Wood', img: proj5 },
  { id: 12, title: 'Deep Relief Carving', category: 'Wood Carving', desc: '3D deep relief wood carving.', material: 'Oak', img: proj6 },
  // Customized Name Board
  { id: 13, title: 'Luxury Name Board', category: 'Customized Name Board', desc: 'Bespoke wooden name board with brass inlays.', material: 'Walnut Wood', img: proj1 },
  { id: 14, title: 'Rustic House Nameplate', category: 'Customized Name Board', desc: 'Rustic style wooden nameplate.', material: 'Pine', img: proj2 },
  { id: 15, title: 'Corporate Wood Sign', category: 'Customized Name Board', desc: 'Elegant corporate logo sign.', material: 'Teak', img: proj3 },
  // Decorative Panels
  { id: 16, title: 'Decorative Wall Panel', category: 'Decorative Panels', desc: 'Elegant carved wall panel for living rooms.', material: 'Teak Wood', img: proj4 },
  { id: 17, title: 'Room Divider Screen', category: 'Decorative Panels', desc: 'Folding wooden room divider.', material: 'Rosewood', img: proj5 },
  { id: 18, title: 'Acoustic Wood Panel', category: 'Decorative Panels', desc: 'Sound-absorbing decorative panel.', material: 'Oak', img: proj6 },
  // Traditional Artwork
  { id: 19, title: 'Classic Heritage Art', category: 'Traditional Artwork', desc: 'Traditional motif wooden art piece.', material: 'Mango Wood', img: proj1 },
  { id: 20, title: 'Mythological Wood Carving', category: 'Traditional Artwork', desc: 'Carving depicting ancient stories.', material: 'Sandalwood', img: proj2 },
  { id: 21, title: 'Antique Finish Panel', category: 'Traditional Artwork', desc: 'Traditional panel with antique polish.', material: 'Teak', img: proj3 },
  // Modern Art Pieces
  { id: 22, title: 'Modern Abstract Wall Art', category: 'Modern Art Pieces', desc: 'Contemporary geometric wood art.', material: 'Oak Wood', img: proj4 },
  { id: 23, title: 'Minimalist Wood Canvas', category: 'Modern Art Pieces', desc: 'Clean and simple modern design.', material: 'Ash Wood', img: proj5 },
  { id: 24, title: '3D Cubist Wood Art', category: 'Modern Art Pieces', desc: 'Cubism inspired 3D artwork.', material: 'Walnut', img: proj6 },
];

const interiorItems = [
  // Living Room
  { id: 1, title: 'Luxury Living Room', category: 'Living Room', area: '1200 sq ft', materials: 'Teak, Velvet, Brass', time: '6 Weeks', img: proj2 },
  { id: 2, title: 'Modern Living Space', category: 'Living Room', area: '900 sq ft', materials: 'Oak, Leather', time: '4 Weeks', img: proj3 },
  { id: 3, title: 'Classic Living Room', category: 'Living Room', area: '1500 sq ft', materials: 'Mahogany', time: '8 Weeks', img: proj4 },
  // Bedroom
  { id: 4, title: 'Master Bedroom Suite', category: 'Bedroom', area: '600 sq ft', materials: 'Mahogany, Leather', time: '5 Weeks', img: proj5 },
  { id: 5, title: 'Minimalist Bedroom', category: 'Bedroom', area: '400 sq ft', materials: 'Pine', time: '3 Weeks', img: proj6 },
  { id: 6, title: 'Royal Master Bedroom', category: 'Bedroom', area: '800 sq ft', materials: 'Teak, Silk', time: '7 Weeks', img: proj1 },
  // Kitchen
  { id: 7, title: 'Premium Modular Kitchen', category: 'Kitchen', area: '400 sq ft', materials: 'Acrylic, Quartz', time: '4 Weeks', img: proj1 },
  { id: 8, title: 'Island Kitchen Design', category: 'Kitchen', area: '500 sq ft', materials: 'Wood, Granite', time: '5 Weeks', img: proj2 },
  { id: 9, title: 'Contemporary Kitchen', category: 'Kitchen', area: '350 sq ft', materials: 'Steel, Wood', time: '4 Weeks', img: proj3 },
  // Wardrobe
  { id: 10, title: 'Custom Wardrobe Design', category: 'Wardrobe', area: '150 sq ft', materials: 'Plywood, Glass, Brass', time: '3 Weeks', img: proj1 },
  { id: 11, title: 'Walk-in Closet', category: 'Wardrobe', area: '300 sq ft', materials: 'Walnut, Mirrors', time: '4 Weeks', img: proj2 },
  { id: 12, title: 'Sliding Door Wardrobe', category: 'Wardrobe', area: '200 sq ft', materials: 'Oak, Frosted Glass', time: '2 Weeks', img: proj3 },
  // Office
  { id: 13, title: 'Modern Workspace', category: 'Office', area: '5000 sq ft', materials: 'Walnut, Glass', time: '8 Weeks', img: proj3 },
  { id: 14, title: 'Executive Cabin', category: 'Office', area: '400 sq ft', materials: 'Teak, Leather', time: '4 Weeks', img: proj4 },
  { id: 15, title: 'Co-working Setup', category: 'Office', area: '8000 sq ft', materials: 'Pine, Metal', time: '10 Weeks', img: proj5 },
  // Apartment
  { id: 16, title: 'Contemporary Apartment', category: 'Apartment', area: '2500 sq ft', materials: 'Oak, Marble', time: '10 Weeks', img: proj4 },
  { id: 17, title: 'Studio Apartment', category: 'Apartment', area: '800 sq ft', materials: 'Plywood', time: '4 Weeks', img: proj5 },
  { id: 18, title: 'Luxury Penthouse', category: 'Apartment', area: '4000 sq ft', materials: 'Teak, Italian Marble', time: '14 Weeks', img: proj6 },
  // Villa
  { id: 19, title: 'Luxury Villa Interior', category: 'Villa', area: '8000 sq ft', materials: 'Teak, Italian Marble', time: '16 Weeks', img: proj6 },
  { id: 20, title: 'Modern Estate', category: 'Villa', area: '12000 sq ft', materials: 'Oak, Glass', time: '20 Weeks', img: proj1 },
  { id: 21, title: 'Classic Heritage Villa', category: 'Villa', area: '9500 sq ft', materials: 'Rosewood, Stone', time: '18 Weeks', img: proj2 },
  // Commercial
  { id: 22, title: 'Commercial Retail Store', category: 'Commercial', area: '3000 sq ft', materials: 'Metal, Wood, Concrete', time: '12 Weeks', img: proj2 },
  { id: 23, title: 'Boutique Hotel', category: 'Commercial', area: '15000 sq ft', materials: 'Walnut, Brass', time: '24 Weeks', img: proj3 },
  { id: 24, title: 'Luxury Restaurant', category: 'Commercial', area: '4500 sq ft', materials: 'Teak, Leather', time: '14 Weeks', img: proj4 },
];

const eventItems = [
  // Wedding
  { id: 1, title: 'Grand Wedding Mandap', category: 'Wedding', theme: 'Royal Heritage', location: 'Taj Falaknuma Palace', style: 'Traditional Luxury', img: proj5 },
  { id: 2, title: 'Beachfront Wedding', category: 'Wedding', theme: 'Tropical Elegance', location: 'Goa', style: 'Breezy & Floral', img: proj6 },
  { id: 3, title: 'Palace Wedding Decor', category: 'Wedding', theme: 'Regal Theme', location: 'Udaipur', style: 'Grand & Opulent', img: proj1 },
  // Corporate
  { id: 4, title: 'Annual Gala Setup', category: 'Corporate', theme: 'Modern Elegance', location: 'ITC Kohinoor', style: 'Contemporary', img: proj6 },
  { id: 5, title: 'Corporate Product Launch', category: 'Corporate', theme: 'Tech Future', location: 'HICC', style: 'Minimalist Modern', img: proj1 },
  { id: 6, title: 'Award Ceremony', category: 'Corporate', theme: 'Starry Night', location: 'Novotel', style: 'Glamorous', img: proj2 },
  // Birthday
  { id: 7, title: 'Luxury Birthday Party', category: 'Birthday', theme: 'Enchanted Forest', location: 'Westin', style: 'Magical Theme', img: proj3 },
  { id: 8, title: 'Kids Carnival Theme', category: 'Birthday', theme: 'Carnival Fun', location: 'Taj Krishna', style: 'Colorful & Playful', img: proj4 },
  { id: 9, title: 'Milestone Celebration', category: 'Birthday', theme: 'Golden Era', location: 'Park Hyatt', style: 'Elegant Gold', img: proj5 },
  // Reception
  { id: 10, title: 'Reception Stage', category: 'Reception', theme: 'Crystal Lights', location: 'Park Hyatt', style: 'Glamorous', img: proj2 },
  { id: 11, title: 'Floral Reception Decor', category: 'Reception', theme: 'Rose Garden', location: 'Marriott', style: 'Romantic', img: proj3 },
  { id: 12, title: 'Minimalist Reception', category: 'Reception', theme: 'White & Gold', location: 'Novotel', style: 'Elegant Modern', img: proj4 },
  // Stage Decoration
  { id: 13, title: 'Sangeet Stage Decoration', category: 'Stage Decoration', theme: 'Bollywood Glamour', location: 'Marriott', style: 'Vibrant & Colorful', img: proj4 },
  { id: 14, title: 'Traditional Stage', category: 'Stage Decoration', theme: 'Temple Motif', location: 'HICC', style: 'Classic Indian', img: proj5 },
  { id: 15, title: 'Modern LED Stage', category: 'Stage Decoration', theme: 'Digital Future', location: 'Hitex', style: 'Tech Driven', img: proj6 },
  // Floral Decoration
  { id: 16, title: 'Floral Entrance Decoration', category: 'Floral Decoration', theme: 'Spring Bloom', location: 'Novotel', style: 'Floral Extravaganza', img: proj1 },
  { id: 17, title: 'Mandap Floral Setup', category: 'Floral Decoration', theme: 'Orchid Paradise', location: 'Taj Falaknuma', style: 'Exotic Flowers', img: proj2 },
  { id: 18, title: 'Table Centerpieces', category: 'Floral Decoration', theme: 'White Elegance', location: 'Park Hyatt', style: 'Subtle & Classy', img: proj3 },
  // Lighting
  { id: 19, title: 'Ambient Lighting Setup', category: 'Lighting', theme: 'Fairy Tale', location: 'Outdoor Lawn', style: 'Warm & Romantic', img: proj5 },
  { id: 20, title: 'Dynamic Stage Lighting', category: 'Lighting', theme: 'Concert Vibe', location: 'HICC', style: 'High Energy', img: proj6 },
  { id: 21, title: 'Chandelier Decor', category: 'Lighting', theme: 'Royal Palace', location: 'Taj Krishna', style: 'Luxurious', img: proj1 },
  // Entrance Decoration
  { id: 22, title: 'Grand Floral Arch', category: 'Entrance Decoration', theme: 'Welcome Bloom', location: 'Novotel', style: 'Grand Entrance', img: proj1 },
  { id: 23, title: 'Royal Walkway', category: 'Entrance Decoration', theme: 'Red Carpet', location: 'Taj Falaknuma', style: 'Regal Walk', img: proj2 },
  { id: 24, title: 'Fairy Light Tunnel', category: 'Entrance Decoration', theme: 'Starry Path', location: 'Westin', style: 'Magical', img: proj3 },
];

const Productshowcase = () => {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [artFilter, setArtFilter] = useState('All');
  const [interiorFilter, setInteriorFilter] = useState('All');
  const [eventFilter, setEventFilter] = useState('All');

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const filteredArt = artFilter === 'All' ? artworkItems : artworkItems.filter(i => i.category === artFilter);
  const filteredInterior = interiorFilter === 'All' ? interiorItems : interiorItems.filter(i => i.category === interiorFilter);
  const filteredEvents = eventFilter === 'All' ? eventItems : eventItems.filter(i => i.category === eventFilter);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="product-showcase-page">
      
      {/* 1. HERO BANNER */}
      <section className="showcase-hero">
        <AnimatePresence mode='wait'>
          <motion.img 
            key={currentSlide}
            src={heroSlides[currentSlide].img}
            className="sc-hero-bg"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
          />
        </AnimatePresence>
        <div className="sc-hero-overlay"></div>
        
        <div className="container position-relative z-1">
          <motion.div 
            className="sc-hero-content mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="sc-hero-badge">Product Showcase</div>
            <h1 className="sc-hero-title">Explore Our <br/> Craftsmanship Collection</h1>
            <div className="gyp-divider mx-auto mb-4"></div>
            <p className="sc-hero-desc">
              Handmade Art • Premium Woodwork • Luxury Interiors • Wedding & Corporate Events
            </p>
            <button className="btn-sc-premium" onClick={() => document.getElementById('categories').scrollIntoView({behavior: 'smooth'})}>
              Explore Collection
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. PRODUCT CATEGORIES */}
      <section id="categories" className="sc-categories">
        <div className="container">
          <motion.div 
            className="row g-4 justify-content-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { icon: FaPaintBrush, title: 'Handmade Artwork', link: '#artwork' },
              { icon: FaHammer, title: 'Woodwork', link: '#interior' },
              { icon: FaCouch, title: 'Home Interior', link: '#interior' },
              { icon: FaCouch, title: 'Office Interior', link: '#interior' },
              { icon: FaGlassCheers, title: 'Wedding Decoration', link: '#events' },
              { icon: FaGlassCheers, title: 'Corporate Events', link: '#events' }
            ].map((cat, idx) => (
              <motion.div className="col-6 col-md-4 col-lg-4" key={idx} variants={fadeUp}>
                <a href={cat.link} className="sc-category-card">
                  <cat.icon className="sc-category-icon" />
                  <h3 className="gyp-title">{cat.title}</h3>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. FEATURED COLLECTIONS */}
      <section className="sc-collections">
        <div className="container">
          <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-5">
            <h2 className="display-4 gyp-title">Featured Collections</h2>
          </motion.div>
          
          <div className="sc-collection-card">
            <div className="sc-collection-img-wrapper">
              <img src={proj1} alt="Handmade Artwork" className="sc-collection-img" />
            </div>
            <div className="sc-collection-content">
              <h3>Handmade Wooden Artwork</h3>
              <p>Custom handcrafted wooden decorative pieces, sculptures, wall panels, name boards, temple work, and artistic creations.</p>
              <button className="btn-outline-gold align-self-start" onClick={() => document.getElementById('artwork').scrollIntoView({behavior:'smooth'})}>View Collection</button>
            </div>
          </div>

          <div className="sc-collection-card reverse">
            <div className="sc-collection-img-wrapper">
              <img src={proj2} alt="Premium Interior" className="sc-collection-img" />
            </div>
            <div className="sc-collection-content">
              <h3>Premium Interior Solutions</h3>
              <p>Complete interior solutions for houses, apartments, villas, and offices using premium-quality wood and customized designs.</p>
              <button className="btn-outline-gold align-self-start" onClick={() => document.getElementById('interior').scrollIntoView({behavior:'smooth'})}>Explore Interior</button>
            </div>
          </div>

          <div className="sc-collection-card">
            <div className="sc-collection-img-wrapper">
              <img src={proj5} alt="Event Decoration" className="sc-collection-img" />
            </div>
            <div className="sc-collection-content">
              <h3>Event Decoration</h3>
              <p>Luxury wedding decoration, reception setups, engagement ceremonies, birthday celebrations, and corporate event arrangements.</p>
              <button className="btn-outline-gold align-self-start" onClick={() => document.getElementById('events').scrollIntoView({behavior:'smooth'})}>View Gallery</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HANDMADE ARTWORK COLLECTION */}
      <section id="artwork" className="sc-grid-section bg-ivory">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 gyp-title mb-4">Pure Handmade Artwork</h2>
            <div className="sc-filter-tabs">
              {artworkCategories.map(cat => (
                <button key={cat} className={`sc-tab-btn ${artFilter === cat ? 'active' : ''}`} onClick={() => setArtFilter(cat)}>{cat}</button>
              ))}
            </div>
          </div>
          <motion.div layout className="sc-horizontal-scroll">
            <AnimatePresence>
              {filteredArt.map(item => (
                <motion.div layout initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.9}} transition={{duration:0.3}} className="sc-scroll-item" key={item.id}>
                  <div className="sc-item-card">
                    <div className="sc-item-img-wrap">
                      <img src={item.img} alt={item.title} className="sc-item-img" />
                    </div>
                    <div className="sc-item-content">
                      <span className="sc-item-category">{item.category}</span>
                      <h4 className="sc-item-title">{item.title}</h4>
                      <p className="sc-item-desc">{item.desc}</p>
                      <div className="sc-item-meta">
                        <span><strong>Material:</strong> {item.material}</span>
                        <span className="text-success fw-bold">✓ Handmade</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 5. WOODWORK & INTERIOR COLLECTION */}
      <section id="interior" className="sc-grid-section bg-parchment">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 gyp-title mb-4">Woodwork & Interior Solutions</h2>
            <div className="sc-filter-tabs">
              {interiorCategories.map(cat => (
                <button key={cat} className={`sc-tab-btn ${interiorFilter === cat ? 'active' : ''}`} onClick={() => setInteriorFilter(cat)}>{cat}</button>
              ))}
            </div>
          </div>
          <motion.div layout className="sc-horizontal-scroll">
            <AnimatePresence>
              {filteredInterior.map(item => (
                <motion.div layout initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.9}} transition={{duration:0.3}} className="sc-scroll-item" key={item.id}>
                  <div className="sc-item-card">
                    <div className="sc-item-img-wrap">
                      <img src={item.img} alt={item.title} className="sc-item-img" />
                    </div>
                    <div className="sc-item-content">
                      <span className="sc-item-category">{item.category}</span>
                      <h4 className="sc-item-title">{item.title}</h4>
                      <div className="sc-item-meta d-flex flex-column gap-2 mt-auto border-0 pt-0">
                        <span><strong>Area:</strong> {item.area}</span>
                        <span><strong>Materials:</strong> {item.materials}</span>
                        <span><strong>Time:</strong> {item.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 6. EVENT MANAGEMENT COLLECTION */}
      <section id="events" className="sc-grid-section bg-ivory">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 gyp-title mb-4">Event Management Gallery</h2>
            <div className="sc-filter-tabs">
              {eventCategories.map(cat => (
                <button key={cat} className={`sc-tab-btn ${eventFilter === cat ? 'active' : ''}`} onClick={() => setEventFilter(cat)}>{cat}</button>
              ))}
            </div>
          </div>
          <motion.div layout className="sc-horizontal-scroll">
            <AnimatePresence>
              {filteredEvents.map(item => (
                <motion.div layout initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} exit={{opacity:0, scale:0.9}} transition={{duration:0.3}} className="sc-scroll-item" key={item.id}>
                  <div className="sc-item-card">
                    <div className="sc-item-img-wrap">
                      <img src={item.img} alt={item.title} className="sc-item-img" />
                    </div>
                    <div className="sc-item-content">
                      <span className="sc-item-category">{item.category}</span>
                      <h4 className="sc-item-title">{item.title}</h4>
                      <div className="sc-item-meta d-flex flex-column gap-2 mt-auto border-0 pt-0">
                        <span><strong>Theme:</strong> {item.theme}</span>
                        <span><strong>Location:</strong> {item.location}</span>
                        <span><strong>Style:</strong> {item.style}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* 7. PREMIUM CRAFTSMANSHIP (TIMELINE) */}
      <section className="sc-timeline-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 gyp-title">Premium Craftsmanship</h2>
            <p className="text-light opacity-75">The journey from concept to reality.</p>
          </div>
          
          <div className="sc-timeline">
            {[
              {icon: FaClipboardList, title: 'Consultation', desc: 'Understanding your vision.'},
              {icon: FaPaintBrush, title: 'Design', desc: 'Creating 3D models & blueprints.'},
              {icon: FaTree, title: 'Material Selection', desc: 'Sourcing premium wood & fabrics.'},
              {icon: FaHammer, title: 'Craftsmanship', desc: 'Handcrafting with precision.'},
              {icon: FaRulerCombined, title: 'Installation', desc: 'Perfect fitting on-site.'},
              {icon: FaTruck, title: 'Final Delivery', desc: 'Handover & styling.'}
            ].map((step, idx) => (
              <motion.div 
                className="sc-timeline-item" 
                key={idx}
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{delay: idx * 0.1}}
              >
                <div className="sc-timeline-icon"><step.icon /></div>
                <div className="sc-timeline-content">
                  <h4 className="sc-timeline-title">{step.title}</h4>
                  <p className="sc-timeline-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CUSTOM DESIGN SERVICES */}
      <section className="sc-custom-design">
        <div className="container">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" initial={{opacity:0, x:-50}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
              <div className="sc-custom-img-wrap">
                <img src={proj3} alt="Custom Designer" />
              </div>
            </motion.div>
            <motion.div className="col-lg-6" initial={{opacity:0, x:50}} whileInView={{opacity:1, x:0}} viewport={{once:true}}>
              <h2 className="display-4 gyp-title mb-4">Every Design Is Made Just for You</h2>
              <p className="lead text-muted mb-4">We believe your space should reflect your unique personality. Our team of expert designers and artisans work closely with you to bring your dream to life.</p>
              
              <ul className="sc-custom-services-list">
                <li><FaCheckCircle /> Custom Furniture</li>
                <li><FaCheckCircle /> Handmade Art</li>
                <li><FaCheckCircle /> Complete Interior</li>
                <li><FaCheckCircle /> Event Theme Design</li>
                <li><FaCheckCircle /> Space Planning</li>
                <li><FaCheckCircle /> Material Selection</li>
              </ul>
              
              <button className="btn-sc-premium mt-3" onClick={() => navigate('/experience/center')}>Book Consultation</button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 9. WHY CHOOSE GYP */}
      <section className="sc-why-choose">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-4 gyp-title">Why Choose GYP</h2>
          </div>
          <div className="row g-4">
            {[
              {title: '100% Handmade', desc: 'Every piece is crafted by skilled artisans.'},
              {title: 'Premium Wood', desc: 'We only use the finest quality materials.'},
              {title: 'Experienced Team', desc: 'Decades of experience in luxury design.'},
              {title: 'Luxury Finish', desc: 'Impeccable attention to detail and finishing.'},
              {title: 'Customized Design', desc: 'Tailored specifically to your requirements.'},
              {title: 'On-Time Delivery', desc: 'We respect your time and deadlines.'}
            ].map((feature, idx) => (
              <motion.div className="col-12 col-md-6 col-lg-4" key={idx} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay: idx * 0.1}}>
                <div className="sc-feature-card">
                  <div className="sc-feature-icon"><FaCheckCircle /></div>
                  <h4 className="gyp-title">{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA SECTION */}
      <section className="sc-cta-section">
        <div className="sc-cta-bg"></div>
        <div className="sc-cta-overlay"></div>
        <div className="container position-relative z-1 text-center">
          <motion.div className="sc-cta-content" initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}>
            <h2 className="gyp-title text-white">Ready to Create Something Unique?</h2>
            <p>Let's build your dream interiors, artwork, or event together.</p>
            <div className="sc-cta-buttons">
              <button className="btn-gold-solid" onClick={() => navigate('/experience/center')}>Book Consultation</button>
              <button className="btn-outline-gold" onClick={() => navigate('/contact')}>Call Now</button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default Productshowcase;
