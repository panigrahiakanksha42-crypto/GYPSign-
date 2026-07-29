import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaStar, FaPlayCircle, FaCheckCircle, 
  FaGoogle, FaQuoteLeft, FaCheckDouble, FaTimes,
  FaSearchPlus, FaChevronLeft, FaChevronRight
} from 'react-icons/fa';
import '../CSS/ClientReviews.css';

const galleryImages = [
  "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1643384/pexels-photo-1643384.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800"
];

const ClientReviews = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(null);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
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
    <div className="reviews-page">
      
      {/* 1. HERO BANNER */}
      <section className="reviews-hero">
        <div className="reviews-hero-bg"></div>
        <div className="reviews-hero-overlay"></div>
        <div className="container reviews-hero-content text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <div className="mb-4 pb-2">
              <span className="badge rounded-pill px-4 py-2 text-uppercase fw-bold shadow-sm" style={{
                letterSpacing: '3px', 
                fontSize: '0.85rem',
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: 'var(--review-white)'
              }}>Client Reviews</span>
            </div>
            <motion.h1 
              className="display-2 fw-bold mb-4 pb-2 font-playfair"
              initial={{opacity: 0, scale: 0.95}} animate={{opacity: 1, scale: 1}}
              transition={{delay: 0.2, duration: 1}}
            >
              Trusted by Families,<br className="d-none d-md-block"/>Loved for Craftsmanship
            </motion.h1>
            <motion.p 
              className="lead fs-4 mb-5 mx-auto" 
              style={{maxWidth: '700px', fontWeight: '300', letterSpacing: '1px'}}
              initial={{opacity: 0}} animate={{opacity: 1}}
              transition={{delay: 0.4, duration: 1}}
            >
              Real Stories. Real Homes. Real Experiences.
            </motion.p>
            
            <motion.div className="mb-5" initial={{opacity: 0}} animate={{opacity: 1}} transition={{delay: 0.6}}>
              <div className="rating-badge">
                <span className="me-2" style={{color: '#FFD700'}}>★★★★★</span>
                4.9 Rating
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. WHY OUR CLIENTS TRUST US */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <motion.div className="col-lg-6" initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
              <div className="trust-img-wrapper">
                <img src="https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Happy Family" style={{height: '500px'}} />
              </div>
            </motion.div>
            <motion.div className="col-lg-6 pl-lg-5" initial="hidden" whileInView="visible" viewport={{once: true}} variants={slideLeft}>
              <h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--review-royal-blue)', letterSpacing: '2px'}}>Why Clients Trust GYP</h5>
              <h2 className="display-4 fw-bold font-playfair mb-4">Built on Trust. Delivered with Excellence.</h2>
              <p className="lead mb-5" style={{lineHeight: '1.8'}}>
                Every project is designed with care, crafted with precision, and delivered with complete transparency. Our greatest achievement is the happiness of our clients.
              </p>
              
              <div className="row g-4 mb-4">
                <div className="col-6">
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p className="text-muted m-0">Happy Families</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-item">
                    <h3>4.9<FaStar size={18} className="ms-1 pb-1" color="#FFD700"/></h3>
                    <p className="text-muted m-0">Average Rating</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-item">
                    <h3>98%</h3>
                    <p className="text-muted m-0">Repeat Clients</p>
                  </div>
                </div>
                <div className="col-6">
                  <div className="stat-item">
                    <h3>100%</h3>
                    <p className="text-muted m-0">Custom Design</p>
                  </div>
                </div>
              </div>

              <button className="btn-review-outline mt-2" onClick={() => document.getElementById('success-stories').scrollIntoView({behavior: 'smooth'})}>Read Success Stories</button>
            </motion.div>
          </div>
        </div>
      </section>



      {/* 4. GOOGLE REVIEWS */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <motion.h2 className="display-4 fw-bold font-playfair mb-3" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Google Reviews</motion.h2>
            <motion.p className="lead text-muted" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.1}}>Real reviews from our satisfied clients.</motion.p>
          </div>

          <div className="row g-4">
            {[
              {name: "Arjun Reddy", location: "Hyderabad", text: "GYP Signatures completely transformed our living space. The attention to detail and quality of the materials used are unmatched."},
              {name: "Priya Sharma", location: "Bangalore", text: "From consultation to installation, the team was professional and transparent. Highly recommend them for bespoke furniture."},
              {name: "Karan Mehta", location: "Mumbai", text: "The 3D design phase helped us visualize our wardrobe perfectly, and the final result was exactly what we were promised."}
            ].map((review, index) => (
              <motion.div className="col-md-6 col-lg-4" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.1}}>
                <div className="google-review-card">
                  <div className="d-flex justify-content-between align-items-start mb-3">
                    <div style={{color: '#FFD700', fontSize: '1.2rem'}}>★★★★★</div>
                    <FaGoogle className="google-icon" size={24} color="#4285F4" style={{transition: 'transform 0.3s ease'}}/>
                  </div>
                  <p className="flex-grow-1" style={{fontStyle: 'italic', lineHeight: '1.6'}}>"{review.text}"</p>
                  <div className="d-flex align-items-center mt-3">
                    <div className="rounded-circle bg-primary text-white d-flex justify-content-center align-items-center fw-bold" style={{width: '45px', height: '45px', marginRight: '15px'}}>
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h6 className="fw-bold m-0">{review.name}</h6>
                      <small className="text-muted"><FaCheckCircle color="#34A853" size={12} className="me-1"/>Google Verified</small>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CUSTOMER PHOTO GALLERY */}
      <section className="gallery-section">
        <div className="container text-center mb-5">
          <motion.h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--review-royal-blue)', letterSpacing: '2px'}} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Portfolio</motion.h5>
          <motion.h2 className="display-4 fw-bold font-playfair" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.1}}>Homes We've Transformed</motion.h2>
        </div>
        
        <div className="container-fluid px-4">
          <div className="masonry-grid">
            {galleryImages.map((img, index) => (
              <motion.div className="masonry-item" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: index * 0.1}}>
                <img src={img} alt="Gallery" />
                <div className="masonry-overlay" onClick={() => setLightboxIndex(index)} style={{cursor: 'pointer'}}>
                  <FaSearchPlus size={40} color="var(--review-white)" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CUSTOMER SUCCESS STORIES */}
      <section id="success-stories" className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <motion.h2 className="display-4 fw-bold font-playfair mb-3" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Customer Success Stories</motion.h2>
          </div>

          <div className="row">
            <div className="col-12">
              <motion.div className="success-story-card" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="story-img-container">
                      <img src="https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Success Story" />
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex align-items-center">
                    <div className="story-content">
                      <div style={{color: '#FFD700', fontSize: '1.2rem'}} className="mb-3">★★★★★</div>
                      <h3 className="font-playfair fw-bold mb-4">"A complete transformation of our 3BHK flat."</h3>
                      <p className="text-muted mb-4" style={{lineHeight: '1.8'}}>
                        "We approached GYP Signatures with a rough idea of what we wanted. Their design team brought it to life with 3D concepts, and the final installation was even better than the renders. The woodwork is simply exceptional."
                      </p>
                      
                      <div className="story-meta">
                        <div className="meta-item">
                          <span className="text-muted me-2 fw-normal">Client:</span> Ananya & Rahul
                        </div>
                        <div className="meta-item">
                          <span className="text-muted me-2 fw-normal">Project:</span> Full Interior
                        </div>
                        <div className="meta-item">
                          <span className="text-muted me-2 fw-normal">Duration:</span> 10 Weeks
                        </div>
                      </div>
                      
                      <button className="btn-review-outline mt-3" onClick={() => setIsModalOpen(true)}>View Full Story</button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERALL RATING & ACHIEVEMENTS */}
      <section className="py-5" style={{backgroundColor: 'var(--review-dark)'}}>
        <div className="container py-4">
          <div className="row g-4 text-center justify-content-center align-items-end">
            
            <motion.div className="col-md-3 col-6 d-flex flex-column align-items-center" initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
              <h2 className="display-4 fw-bold text-white mb-0 font-playfair">4.9</h2>
              <div style={{color: '#FFD700', fontSize: '1rem'}} className="mb-2 mt-1">★★★★★</div>
              <p className="text-white text-uppercase m-0" style={{letterSpacing: '1px', fontSize: '0.85rem'}}>Average Rating</p>
            </motion.div>

            <motion.div className="col-md-3 col-6 d-flex flex-column align-items-center" initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: 0.2}}>
              <h2 className="display-4 fw-bold text-white mb-0 font-playfair">500<span style={{color: 'var(--review-royal-blue)'}}>+</span></h2>
              <div style={{height: '24px'}} className="mb-2 mt-1"></div>
              <p className="text-white text-uppercase m-0" style={{letterSpacing: '1px', fontSize: '0.85rem'}}>Projects Completed</p>
            </motion.div>

            <motion.div className="col-md-3 col-6 d-flex flex-column align-items-center" initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: 0.4}}>
              <h2 className="display-4 fw-bold text-white mb-0 font-playfair">98<span style={{color: 'var(--review-royal-blue)'}}>%</span></h2>
              <div style={{height: '24px'}} className="mb-2 mt-1"></div>
              <p className="text-white text-uppercase m-0" style={{letterSpacing: '1px', fontSize: '0.85rem'}}>Satisfied Clients</p>
            </motion.div>

            <motion.div className="col-md-3 col-6 d-flex flex-column align-items-center" initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn} transition={{delay: 0.6}}>
              <h2 className="display-4 fw-bold text-white mb-0 font-playfair">100<span style={{color: 'var(--review-royal-blue)'}}>%</span></h2>
              <div style={{height: '24px'}} className="mb-2 mt-1"></div>
              <p className="text-white text-uppercase m-0" style={{letterSpacing: '1px', fontSize: '0.85rem'}}>Custom Designs</p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 8. FEATURED TESTIMONIALS */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="text-center mb-5">
            <motion.h2 className="display-4 fw-bold font-playfair" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>Client Testimonials</motion.h2>
          </div>
          
          <div className="row g-0 justify-content-center">
            {[
              {name: "Sarah Jenkins", text: "The craftsmanship is unparalleled. My modular kitchen looks stunning and functions perfectly."},
              {name: "David Smith", text: "Professional, punctual, and highly skilled. The wardrobe they built is the centerpiece of my bedroom."},
              {name: "Meera Patel", text: "I highly recommend GYP Signatures. They understood my vision and executed it flawlessly."}
            ].map((test, index) => (
              <motion.div className="col-md-4" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: index * 0.2}}>
                <div className="testimonial-card text-center">
                  <FaQuoteLeft size={30} color="var(--review-card-border)" className="quote-icon mb-4 transition-all" />
                  <div style={{color: '#FFD700', fontSize: '1.2rem'}} className="mb-3">★★★★★</div>
                  <p className="text-muted mb-4" style={{fontStyle: 'italic', minHeight: '80px'}}>"{test.text}"</p>
                  <div className="d-flex flex-column align-items-center">
                    <div className="rounded-circle bg-light d-flex justify-content-center align-items-center mb-2" style={{width: '60px', height: '60px'}}>
                      <span className="fw-bold fs-4 text-primary">{test.name.charAt(0)}</span>
                    </div>
                    <h6 className="fw-bold m-0">{test.name}</h6>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. REVIEW TIMELINE */}
      <section className="review-timeline-section">
        <div className="container">
          <div className="text-center mb-5 pb-4">
            <motion.h5 className="text-uppercase mb-2 fw-bold" style={{color: 'var(--review-royal-blue)', letterSpacing: '2px'}} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>The Journey</motion.h5>
            <motion.h2 className="display-4 fw-bold font-playfair" initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp} transition={{delay: 0.1}}>From Inquiry to Joy</motion.h2>
          </div>

          <div className="timeline-path">
            {[
              {stage: "Consultation", quote: "They listened to exactly what I wanted and respected my budget."},
              {stage: "Design Approval", quote: "The 3D renders blew me away. I couldn't wait to see it built."},
              {stage: "Delivery & Installation", quote: "The installation team was so clean, polite, and professional."},
              {stage: "Final Result", quote: "It's perfect. Better than I ever imagined."}
            ].map((item, index) => (
              <motion.div className="timeline-stage" key={index} initial="hidden" whileInView="visible" viewport={{once: true}} variants={fadeUp}>
                <div className="stage-dot"></div>
                <div className="stage-content">
                  <h5 className="fw-bold mb-3" style={{color: 'var(--review-royal-blue)'}}>{item.stage}</h5>
                  <p className="m-0 font-playfair text-muted" style={{fontSize: '1.1rem', fontStyle: 'italic'}}>"{item.quote}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. SHARE YOUR EXPERIENCE CTA */}
      <section className="cta-review">
        <div className="cta-review-overlay"></div>
        <div className="container cta-review-content text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{once: true}} variants={zoomIn}>
            <h2 className="display-3 fw-bold font-playfair mb-4">Your Dream Home Could Be<br className="d-none d-md-block"/>Our Next Success Story</h2>
            <p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}}>
              Share your experience or start your journey today.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-column flex-sm-row">
              <button className="btn-review-solid" style={{background: 'var(--review-white)', color: 'var(--review-dark)'}} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Book Consultation</button>
              <button className="btn-review-outline" style={{borderColor: 'var(--review-white)', color: 'var(--review-white)'}} onClick={() => window.scrollTo({top: document.body.scrollHeight, behavior: 'smooth'})}>Contact Us</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FULL STORY MODAL */}
      {isModalOpen && (
        <div className="story-modal-overlay" onClick={() => setIsModalOpen(false)}>
          <motion.div 
            className="story-modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{opacity: 0, y: 50, scale: 0.95}} 
            animate={{opacity: 1, y: 0, scale: 1}} 
            exit={{opacity: 0, y: 20, scale: 0.95}}
            transition={{duration: 0.4, ease: "easeOut"}}
          >
            <button className="story-modal-close" onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>
            <div className="story-modal-header">
              <img src="https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="Success Story Full" />
            </div>
            <div className="story-modal-body">
              <div className="d-flex align-items-center gap-3 mb-4">
                <h2 className="display-6 fw-bold font-playfair m-0">Ananya & Rahul's Journey</h2>
                <div style={{color: '#FFD700', fontSize: '1.5rem'}}>★★★★★</div>
              </div>
              <p className="story-modal-quote">
                "We approached GYP Signatures with a rough idea of what we wanted. Their design team brought it to life with 3D concepts, and the final installation was even better than the renders."
              </p>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <h5 className="fw-bold mb-3" style={{color: 'var(--review-dark)'}}>The Challenge</h5>
                  <p className="text-muted" style={{lineHeight: '1.8'}}>
                    Ananya and Rahul wanted to completely gut and remodel their 15-year-old 3BHK flat. The existing layout was cramped, poorly lit, and lacked modern storage solutions. They needed a design that felt expansive, luxurious, and highly functional for their growing family.
                  </p>
                </div>
                <div className="col-md-6 mb-4">
                  <h5 className="fw-bold mb-3" style={{color: 'var(--review-dark)'}}>Our Approach</h5>
                  <p className="text-muted" style={{lineHeight: '1.8'}}>
                    We started by knocking down a non-load-bearing wall to create a sweeping open-plan living and dining area. We introduced custom floor-to-ceiling veneer wardrobes, a bespoke modular kitchen with smart-touch cabinets, and integrated ambient LED lighting throughout the entire home.
                  </p>
                </div>
              </div>
              <div className="text-center mt-4 pt-4 border-top">
                <h5 className="fw-bold mb-3">Want a transformation like this?</h5>
                <button className="btn-review-solid" onClick={() => {
                  setIsModalOpen(false);
                  navigate('/contact');
                }}>Start Your Project</button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* GALLERY LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="lightbox-overlay" onClick={() => setLightboxIndex(null)}>
          <button className="lightbox-close" onClick={() => setLightboxIndex(null)}>
            <FaTimes />
          </button>
          
          <button className="lightbox-nav lightbox-prev" onClick={handlePrevImage}>
            <FaChevronLeft />
          </button>
          
          <motion.img 
            key={lightboxIndex}
            src={galleryImages[lightboxIndex].replace('w=800', 'w=1600')} 
            alt="Gallery Large" 
            className="lightbox-img"
            initial={{opacity: 0, scale: 0.9}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.3}}
            onClick={(e) => e.stopPropagation()}
          />

          <button className="lightbox-nav lightbox-next" onClick={handleNextImage}>
            <FaChevronRight />
          </button>
        </div>
      )}

    </div>
  );
};

export default ClientReviews;
