import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaChevronRight, FaChevronLeft, FaSearchPlus, FaMagic, FaClipboardCheck, FaRegLightbulb } from 'react-icons/fa';
import '../CSS/StyleDiscovery.css';

// Quiz Questions Data
const quizQuestions = [
  {
    id: 1,
    question: "Which space attracts you the most?",
    options: [
      { id: "modern", label: "Modern", icon: "🏙️", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=400&q=80" },
      { id: "luxury", label: "Luxury", icon: "💎", img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=400&q=80" },
      { id: "classic", label: "Classic", icon: "🏛️", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80" },
      { id: "minimal", label: "Minimal", icon: "◻️", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: "contemporary", label: "Contemporary", icon: "🎨", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&q=80" }
    ]
  },

  {
    id: 3,
    question: "Your preferred furniture style?",
    options: [
      { id: "minimal", label: "Clean & Simple", icon: "🪑", img: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: "luxury", label: "Elegant & Premium", icon: "🪑", img: "https://images.pexels.com/photos/37347/office-sitting-room-executive-sitting.jpg?auto=compress&cs=tinysrgb&w=400" },
      { id: "classic", label: "Traditional", icon: "🪑", img: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: "contemporary", label: "Curved & Modern", icon: "🪑", img: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400" },
      { id: "modern", label: "Bold & Sleek", icon: "🪑", img: "https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg?auto=compress&cs=tinysrgb&w=400" }
    ]
  },
  {
    id: 4,
    question: "What atmosphere do you want in your home?",
    options: [
      { id: "minimal", label: "Peaceful", icon: "🕊️" },
      { id: "luxury", label: "Luxurious", icon: "✨" },
      { id: "classic", label: "Warm", icon: "🔥" },
      { id: "modern", label: "Functional", icon: "⚙️" },
      { id: "contemporary", label: "Creative", icon: "💡" }
    ]
  },
  {
    id: 5,
    question: "Which material do you love?",
    options: [
      { id: "classic", label: "Wood", icon: "🪵" },
      { id: "luxury", label: "Marble", icon: "🏛️" },
      { id: "modern", label: "Leather", icon: "🛋️" },
      { id: "minimal", label: "Fabric", icon: "🧵" },
      { id: "contemporary", label: "Glass", icon: "🪟" }
    ]
  },
  {
    id: 6,
    question: "Preferred lighting?",
    options: [
      { id: "classic", label: "Warm", icon: "🕯️" },
      { id: "minimal", label: "Natural", icon: "☀️" },
      { id: "contemporary", label: "Decorative", icon: "🎊" },
      { id: "modern", label: "Sleek", icon: "💡" },
      { id: "luxury", label: "Statement Chandelier", icon: "✨" }
    ]
  },
  {
    id: 7,
    question: "Your ideal living room?",
    options: [
      { id: "modern", label: "Modern Open Plan", img: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=400&q=80" },
      { id: "luxury", label: "Luxurious Lounge", img: "https://images.unsplash.com/photo-1600607687644-b7171b6ba115?auto=format&fit=crop&w=400&q=80" },
      { id: "classic", label: "Classic Comfort", img: "https://images.unsplash.com/photo-1600585154526-990dced4ea0d?auto=format&fit=crop&w=400&q=80" },
      { id: "minimal", label: "Minimalist Haven", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=400&q=80" },
      { id: "contemporary", label: "Creative Space", img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=400&q=80" }
    ]
  },
  {
    id: 8,
    question: "Your dream home feels...",
    options: [
      { id: "classic", label: "Elegant", icon: "🌹" },
      { id: "modern", label: "Sleek & Modern", icon: "🏙️" },
      { id: "contemporary", label: "Cozy & Chic", icon: "☕" },
      { id: "minimal", label: "Calm & Empty", icon: "🧘" },
      { id: "luxury", label: "Premium & Grand", icon: "👑" }
    ]
  }
];

const StyleDiscovery = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [recommendedStyle, setRecommendedStyle] = useState(null);
  
  const quizRef = useRef(null);
  const resultsRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setTimeout(() => {
      quizRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSelectAnswer = (questionId, optionId) => {
    setAnswers({ ...answers, [questionId]: optionId });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    // Tally up the style IDs from answers
    const counts = {};
    Object.values(answers).forEach(style => {
      counts[style] = (counts[style] || 0) + 1;
    });
    
    // Find highest count
    let maxStyle = "luxury"; // Default fallback
    let maxCount = 0;
    Object.entries(counts).forEach(([style, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxStyle = style;
      }
    });

    setRecommendedStyle(maxStyle);
    setQuizCompleted(true);
    
    setTimeout(() => {
      resultsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  // Result Content Map
  const resultData = {
    luxury: {
      title: "LUXURY MODERN",
      desc: "Your style embodies elegance, premium materials, and grandeur. You appreciate fine craftsmanship and statement pieces.",
      materials: ["Marble", "Premium Wood", "Rich Fabrics", "Gold Accents"],
      img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    },
    modern: {
      title: "SLEEK MODERN",
      desc: "You prefer clean lines, open spaces, and functional design without unnecessary clutter. Less is more.",
      materials: ["Glass", "Steel", "Concrete", "Smooth Wood"],
      img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80"
    },
    classic: {
      title: "TIMELESS CLASSIC",
      desc: "You value tradition, symmetry, and rich details. Your ideal home is warm, inviting, and elegant.",
      materials: ["Rich Wood", "Velvet", "Brass", "Molding Details"],
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    minimal: {
      title: "CALM MINIMALIST",
      desc: "You seek tranquility. Your spaces are airy, highly functional, and rely on neutral tones and natural light.",
      materials: ["Light Oak", "Linen", "Matte Ceramic", "Natural Stone"],
      img: "https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=1200&q=80"
    },
    contemporary: {
      title: "CHIC CONTEMPORARY",
      desc: "You love current trends, bold statement pieces, curved furniture, and mixing different textures and materials.",
      materials: ["Bouclé Fabric", "Tinted Glass", "Travertine", "Matte Black Metals"],
      img: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=1200&q=80"
    }
  };

  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const slideIn = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, x: -50, transition: { duration: 0.3 } }
  };

  return (
    <div className="style-discovery-page" style={{backgroundColor: 'white'}}>
      {/* 1. HERO BANNER */}
      <section className="style-hero">
        <div className="style-hero-bg"></div>
        <div className="style-hero-overlay"></div>
        
        {/* Floating Background Shapes */}
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>

        <div className="container style-hero-content">
          <motion.h4 className="text-uppercase mb-3" style={{letterSpacing: '3px', fontWeight: 600}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1}}>
            ✨ STYLE DISCOVERY
          </motion.h4>
          <motion.h1 className="display-3 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif'}} initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.2}}>
            Find the <span className="style-gold-text">Interior Style</span><br/>That Reflects Your <span className="style-gold-text">Personality</span>
          </motion.h1>
          <motion.p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}} initial={{opacity:0}} animate={{opacity:1}} transition={{duration: 1, delay: 0.4}}>
            Take our quick quiz and discover the perfect design style for your dream home.
          </motion.p>
          <motion.button className="btn-style-primary" onClick={handleStartQuiz} initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration: 1, delay: 0.6}}>
            Start the Quiz
          </motion.button>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="py-5 bg-white">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <motion.img 
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80" 
                alt="Designer Mood Board" 
                className="style-welcome-img"
                initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}
              />
            </div>
            <div className="col-lg-6">
              <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
                <h2 className="display-5 fw-bold mb-4" style={{fontFamily: 'Playfair Display, serif', color: 'var(--style-text-dark)'}}>
                  Your Home Should Reflect Your Personality
                </h2>
                <p className="lead text-muted mb-4" style={{lineHeight: 1.8}}>
                  Every home is unique. We believe your living space should be a direct reflection of your taste, lifestyle, and preferences. Whether you prefer the grandeur of classic luxury or the serene calm of minimalist design, our Style Discovery quiz will help you pinpoint exactly what makes you feel at home.
                </p>
                <button className="btn-style-primary" onClick={handleStartQuiz} style={{background: 'var(--style-purple)', color: 'white'}}>
                  Start Style Quiz
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-5" style={{backgroundColor: '#FAFAFA'}}>
        <div className="container py-5 text-center">
          <motion.h2 className="display-5 fw-bold mb-5" style={{fontFamily: 'Playfair Display, serif'}} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            How It Works
          </motion.h2>
          
          <div className="row g-4 justify-content-center align-items-center">
            <div className="col-lg-3 col-md-4">
              <motion.div className="step-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.1}}>
                <div className="step-icon-wrapper"><FaRegLightbulb /></div>
                <h5 className="fw-bold mb-2">① Answer Questions</h5>
                <p className="text-muted small m-0">Tell us about your preferences.</p>
              </motion.div>
            </div>
            <div className="col-lg-1 col-md-1 text-center step-arrow"><FaChevronRight /></div>
            
            <div className="col-lg-3 col-md-4">
              <motion.div className="step-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.3}}>
                <div className="step-icon-wrapper"><FaMagic /></div>
                <h5 className="fw-bold mb-2">② We Analyze</h5>
                <p className="text-muted small m-0">We calculate your exact style match.</p>
              </motion.div>
            </div>
            <div className="col-lg-1 col-md-1 text-center step-arrow"><FaChevronRight /></div>

            <div className="col-lg-3 col-md-4">
              <motion.div className="step-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.5}}>
                <div className="step-icon-wrapper"><FaClipboardCheck /></div>
                <h5 className="fw-bold mb-2">③ Get Results</h5>
                <p className="text-muted small m-0">Discover your tailored design style.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE STYLE QUIZ */}
      {quizStarted && !quizCompleted && (
        <section className="quiz-section py-5" ref={quizRef}>
          <div className="container quiz-container py-4">
            


            <AnimatePresence mode="wait">
              <motion.div 
                key={currentQuestion}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h2 className="display-6 fw-bold text-center mb-5" style={{fontFamily: 'Playfair Display, serif'}}>
                  {quizQuestions[currentQuestion].question}
                </h2>

                <div className="row g-4 justify-content-center">
                  {quizQuestions[currentQuestion].options.map((option, idx) => {
                    const isSelected = answers[quizQuestions[currentQuestion].id] === option.id;
                    return (
                      <div className="col-6 col-md-4 col-lg" key={idx}>
                        <div 
                          className={`quiz-option-card ${isSelected ? 'selected' : ''}`}
                          onClick={() => handleSelectAnswer(quizQuestions[currentQuestion].id, option.id)}
                        >
                          <FaCheckCircle className="selected-check" />
                          
                          {option.img ? (
                            <img src={option.img} alt={option.label} className="quiz-option-img" />
                          ) : (
                            <div className="quiz-option-icon">{option.icon}</div>
                          )}
                          
                          <h6 className="fw-bold m-0" style={{color: isSelected ? 'var(--style-purple)' : 'var(--style-text-dark)'}}>
                            {option.label}
                          </h6>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="d-flex justify-content-between mt-5 pt-4 border-top quiz-navigation">
              <button 
                className="quiz-nav-btn quiz-nav-prev" 
                onClick={handlePrevQuestion}
                disabled={currentQuestion === 0}
              >
                <FaChevronLeft className="me-2 icon" /> Previous
              </button>
              
              <button 
                className="quiz-nav-btn quiz-nav-next"
                onClick={handleNextQuestion}
                disabled={!answers[quizQuestions[currentQuestion].id]}
                style={{
                  background: answers[quizQuestions[currentQuestion].id] ? 'linear-gradient(135deg, var(--style-purple), var(--style-blue))' : '#E5E7EB',
                  color: answers[quizQuestions[currentQuestion].id] ? 'white' : '#9CA3AF',
                  pointerEvents: answers[quizQuestions[currentQuestion].id] ? 'auto' : 'none',
                  boxShadow: answers[quizQuestions[currentQuestion].id] ? '0 10px 20px rgba(84, 7, 136, 0.2)' : 'none'
                }}
              >
                {currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next'} <FaChevronRight className="ms-2 icon" />
              </button>
            </div>

          </div>
        </section>
      )}

      {/* 5. RESULTS & GALLERY (Only visible if completed) */}
      {quizCompleted && recommendedStyle && (
        <div ref={resultsRef} className="position-relative">
          {/* Confetti Animation Elements */}
          <div className="confetti" style={{left: '10%', animation: 'fall 3s linear infinite'}}></div>
          <div className="confetti" style={{left: '30%', animation: 'fall 4s linear infinite 1s', background: 'var(--style-blue)'}}></div>
          <div className="confetti" style={{left: '50%', animation: 'fall 2.5s linear infinite 0.5s'}}></div>
          <div className="confetti" style={{left: '70%', animation: 'fall 3.5s linear infinite 2s', background: 'var(--style-blue)'}}></div>
          <div className="confetti" style={{left: '90%', animation: 'fall 3s linear infinite 1.5s'}}></div>

          <section className="py-5" style={{backgroundColor: 'white'}}>
            <div className="container py-5">
              <div className="text-center mb-5">
                <motion.h5 className="text-uppercase fw-bold text-muted mb-3" style={{letterSpacing: '2px'}} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                  🎉 Congratulations! Your Style Is
                </motion.h5>
                <motion.h1 className="display-2 fw-bold mb-5" style={{fontFamily: 'Playfair Display, serif', color: 'var(--style-purple)'}} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.1}}>
                  {resultData[recommendedStyle].title}
                </motion.h1>
                <motion.img 
                  src={resultData[recommendedStyle].img} 
                  alt={resultData[recommendedStyle].title} 
                  className="result-hero-img"
                  initial={{opacity: 0, scale: 0.95}} whileInView={{opacity: 1, scale: 1}} viewport={{once:true}} transition={{duration: 0.8}}
                />
              </div>

              {/* 7. WHY THIS STYLE FITS YOU */}
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <motion.div className="result-card" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
                    <h3 className="fw-bold mb-4 font-playfair">Why This Fits You</h3>
                    <p className="lead text-muted mb-5">{resultData[recommendedStyle].desc}</p>
                    
                    <h5 className="fw-bold mb-3">Recommended Elements:</h5>
                    <div className="d-flex flex-wrap">
                      {resultData[recommendedStyle].materials.map((mat, idx) => (
                        <span key={idx} className="feature-badge">{mat}</span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. STYLE INSPIRATION GALLERY */}
          <section className="py-5" style={{backgroundColor: 'var(--style-bg-light)'}}>
            <div className="container py-5 text-center">
              <h2 className="display-5 fw-bold mb-5 font-playfair">Inspiration Gallery</h2>
              
              <div className="row g-4">
                {[1, 2, 3, 4].map((item, idx) => (
                  <div className="col-md-6" key={idx}>
                    <motion.div className="style-gallery-item" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: idx * 0.1}}>
                      <img src={resultData[recommendedStyle].img} alt="Gallery Inspiration" />
                      <div className="style-gallery-overlay">
                        <FaSearchPlus size={40} color="white" className="mb-3" />
                        <h5 className="text-white fw-bold m-0 text-uppercase" style={{letterSpacing: '1px'}}>View Project</h5>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </section>

        </div>
      )}

      {/* 8. BOOK DESIGN CONSULTATION */}
      <section className="style-cta-section text-center">
        <div className="container">
          <motion.h2 className="display-4 fw-bold font-playfair mb-4" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp}>
            Ready to Bring Your Style to Life?
          </motion.h2>
          <motion.p className="lead mb-5 mx-auto" style={{maxWidth: '600px', opacity: 0.9}} initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.1}}>
            Our designers will create a personalized luxury interior based on your newly discovered style preferences.
          </motion.p>
          <motion.div className="d-flex flex-column flex-md-row justify-content-center gap-3" initial="hidden" whileInView="visible" viewport={{once:true}} variants={fadeUp} transition={{delay: 0.2}}>
            <button className="btn-style-primary" onClick={() => window.location.href = 'mailto:info.prasadtech@gmail.com'}>Book Consultation</button>
            <button className="btn-style-outline" onClick={() => window.location.href = 'mailto:info.prasadtech@gmail.com'}>Contact Designer</button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StyleDiscovery;
