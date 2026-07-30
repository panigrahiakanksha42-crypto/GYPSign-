import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronDown, FaCalendarCheck, FaGift, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaCouch, FaImage, FaLayerGroup, FaInfoCircle, FaBookOpen, FaClipboardCheck, FaStar, FaLightbulb, FaCalculator, FaBuilding, FaHome, FaPlus, FaMinus } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [showBanner, setShowBanner] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll listener for sticky transparent-to-solid behavior
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => {
    setNavOpen(!navOpen);
    setExpandedMenu(null);
  };
  
  const closeNav = () => setNavOpen(false);

  const toggleMobileMenu = (menu) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  // Custom Navigation with Page Transition
  const handleNavigate = (e, path) => {
    e.preventDefault();
    closeNav();
    setDropdownOpen(null);
    if (location.pathname === path) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(path);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, 600);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* PAGE TRANSITION OVERLAY */}
      <div className={`page-transition-overlay ${isTransitioning ? 'active' : ''}`}>
        <div className="transition-content text-center">
          <h1 className="display-4 fw-bold mb-2 text-white" style={{fontFamily: 'Playfair Display, serif'}}>
            GYP <span style={{fontWeight: 300, color: 'var(--royal-blue)'}}>Signatures</span>
          </h1>
          <div className="transition-loader mt-4 mx-auto"></div>
        </div>
      </div>

      <header className={`main-header ${scrolled ? 'scrolled shadow' : 'transparent'}`}>
        {/* BANNER STAYS THE SAME, BUT HIDES ON SCROLL OR KEEPS TOP */}
        <div className={`top-banners-wrapper ${scrolled ? 'd-none' : 'd-block'}`}>
          {showBanner && (
            <div className="festive-banner bg-dark py-2 position-relative" style={{color: 'var(--light-blue)'}}>
              <div className="container d-flex justify-content-center align-items-center text-center px-4 position-relative">
                <p className="m-0 small fw-bold d-flex align-items-center">
                  <FaGift className="me-2" /> 
                  Festive Sale: Get up to 20% off on premium furniture collections! 
                  <span className="ms-2 badge text-dark text-uppercase rounded-1" style={{backgroundColor: 'var(--royal-blue)', color: 'white', fontSize: '0.65rem', padding: '0.35em 0.65em'}}>Limited Time Offer</span>
                </p>
                <button className="btn btn-link position-absolute end-0 p-0 text-decoration-none" onClick={() => setShowBanner(false)} style={{right: '15px', color: '#aaa', transition: 'color 0.2s'}} onMouseOver={(e) => e.currentTarget.style.color = '#fff'} onMouseOut={(e) => e.currentTarget.style.color = '#aaa'}>
                  <FaTimes size={16} />
                </button>
              </div>
            </div>
          )}

          <div className="contact-marquee-banner py-2" style={{backgroundColor: 'var(--primary-purple)', overflow: 'hidden', whiteSpace: 'nowrap'}}>
            <div className="marquee-content-scrolling d-inline-block fw-bold text-uppercase" style={{color: '#111', fontSize: '0.85rem', letterSpacing: '1px'}}>
              <span className="me-5 text-white">For website contact, reach us at: <a href="mailto:info.prasadtech@gmail.com" className="text-white text-decoration-underline" style={{textUnderlineOffset: '3px'}}>info.prasadtech@gmail.com</a></span>
              <span className="me-5 text-white">For website contact, reach us at: <a href="mailto:info.prasadtech@gmail.com" className="text-white text-decoration-underline" style={{textUnderlineOffset: '3px'}}>info.prasadtech@gmail.com</a></span>
              <span className="me-5 text-white">For website contact, reach us at: <a href="mailto:info.prasadtech@gmail.com" className="text-white text-decoration-underline" style={{textUnderlineOffset: '3px'}}>info.prasadtech@gmail.com</a></span>
              <span className="me-5 text-white">For website contact, reach us at: <a href="mailto:info.prasadtech@gmail.com" className="text-white text-decoration-underline" style={{textUnderlineOffset: '3px'}}>info.prasadtech@gmail.com</a></span>
            </div>
          </div>
        </div>

        <div className={`container header-main-row d-flex align-items-center justify-content-between ${scrolled ? 'py-2' : 'py-3'}`} style={{ transition: 'padding 0.3s ease' }}>
          <div className="logo">
            <a href="/" onClick={(e) => handleNavigate(e, '/')} className="text-decoration-none text-white">
              <h1 className="m-0 fw-bold logo-text" style={{fontFamily: 'Playfair Display, serif', transition: 'font-size 0.3s ease'}}>
                GYP <span style={{fontWeight: 300}}>Signatures</span>
              </h1>
            </a>
          </div>

          {/* DESKTOP NAVIGATION */}
          <nav className="nav-bar d-none d-lg-block">
            <ul className="d-flex align-items-center list-unstyled m-0 gap-4">
              <li>
                <a href="/" className={`nav-link-item ${isActive('/') ? 'active' : ''}`} onClick={(e) => handleNavigate(e, '/')}>Home</a>
              </li>
              
              {/* DESIGNS MEGA MENU */}
              <li className="nav-dropdown position-relative" onMouseEnter={() => setDropdownOpen('designs')} onMouseLeave={() => setDropdownOpen(null)}>
                <span className="cursor-pointer nav-link-item">Designs <FaChevronDown className="ms-1" size={10}/></span>
                <div className={`dropdown-menu mega-menu position-absolute border-0 shadow-lg rounded-3 p-4 ${dropdownOpen === 'designs' ? 'show' : ''}`} style={{top: '100%', left: '-100px', width: '350px'}}>
                  <div className="d-flex flex-column gap-3">
                    <a href="/showcase/all" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/showcase/all')}>
                      <div className="mega-icon me-3 mt-1"><FaCouch /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Product Showcase</h6>
                        <p className="mb-0 text-muted small text-capitalize">Browse premium furniture collections.</p>
                      </div>
                    </a>
                    <a href="/portfolio/all" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/portfolio/all')}>
                      <div className="mega-icon me-3 mt-1"><FaImage /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Project Portfolio</h6>
                        <p className="mb-0 text-muted small text-capitalize">Explore completed residential and commercial projects.</p>
                      </div>
                    </a>
                    <a href="/designs/materials" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/designs/materials')}>
                      <div className="mega-icon me-3 mt-1"><FaLayerGroup /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Material Library</h6>
                        <p className="mb-0 text-muted small text-capitalize">View premium woods, fabrics, veneers and finishes.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>

              {/* THE BRAND MEGA MENU */}
              <li className="nav-dropdown position-relative" onMouseEnter={() => setDropdownOpen('brand')} onMouseLeave={() => setDropdownOpen(null)}>
                <span className="cursor-pointer nav-link-item">The Brand <FaChevronDown className="ms-1" size={10}/></span>
                <div className={`dropdown-menu mega-menu position-absolute border-0 shadow-lg rounded-3 p-4 ${dropdownOpen === 'brand' ? 'show' : ''}`} style={{top: '100%', left: '-100px', width: '350px'}}>
                  <div className="d-flex flex-column gap-3">
                    <a href="/brand/about" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/brand/about')}>
                      <div className="mega-icon me-3 mt-1"><FaInfoCircle /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">About Us</h6>
                        <p className="mb-0 text-muted small text-capitalize">Company introduction.</p>
                      </div>
                    </a>
                    <a href="/brand/heritage" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/brand/heritage')}>
                      <div className="mega-icon me-3 mt-1"><FaBookOpen /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Our Heritage</h6>
                        <p className="mb-0 text-muted small text-capitalize">Story of GYP.</p>
                      </div>
                    </a>
                    <a href="/brand/process" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/brand/process')}>
                      <div className="mega-icon me-3 mt-1"><FaClipboardCheck /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Our Process</h6>
                        <p className="mb-0 text-muted small text-capitalize">How projects are completed.</p>
                      </div>
                    </a>
                    <a href="/brand/reviews" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/brand/reviews')}>
                      <div className="mega-icon me-3 mt-1"><FaStar /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Client Reviews</h6>
                        <p className="mb-0 text-muted small text-capitalize">Customer testimonials.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </li>

              {/* EXPERIENCE MEGA MENU */}
              <li className="nav-dropdown position-relative" onMouseEnter={() => setDropdownOpen('experience')} onMouseLeave={() => setDropdownOpen(null)}>
                <span className="cursor-pointer nav-link-item">Experience <FaChevronDown className="ms-1" size={10}/></span>
                <div className={`dropdown-menu mega-menu position-absolute border-0 shadow-lg rounded-3 p-4 ${dropdownOpen === 'experience' ? 'show' : ''}`} style={{top: '100%', left: '-100px', width: '350px'}}>
                  <div className="d-flex flex-column gap-3">
                    <a href="/experience/style" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/experience/style')}>
                      <div className="mega-icon me-3 mt-1"><FaLightbulb /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Style Discovery</h6>
                        <p className="mb-0 text-muted small text-capitalize">Luxury furniture style quiz.</p>
                      </div>
                    </a>
                    {/* <a href="/experience/budget" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/experience/budget')}>
                      <div className="mega-icon me-3 mt-1"><FaCalculator /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Budget Estimator</h6>
                        <p className="mb-0 text-muted small text-capitalize">Estimate project cost.</p>
                      </div>
                    </a> */}
                    {/* <a href="/experience/center" className="mega-menu-item text-decoration-none d-flex align-items-start" onClick={(e) => handleNavigate(e, '/experience/center')}>
                      <div className="mega-icon me-3 mt-1"><FaBuilding /></div>
                      <div>
                        <h6 className="mb-1 fw-bold text-dark">Experience Center</h6>
                        <p className="mb-0 text-muted small text-capitalize">Visit our luxury showroom.</p>
                      </div>
                    </a> */}
                  </div>
                </div>
              </li>

              <li>
                <a href="/contact" className={`nav-link-item ${isActive('/contact') ? 'active' : ''}`} onClick={(e) => handleNavigate(e, '/contact')}>Contact</a>
              </li>

              {/* BOOK NOW CTA */}
              <li className="nav-dropdown position-relative ms-lg-3" onMouseEnter={() => setDropdownOpen('cta')} onMouseLeave={() => setDropdownOpen(null)}>
                <span className="btn rounded-0 px-4 py-2 cta-btn d-flex align-items-center">
                  Book Now <FaCalendarCheck className="ms-2" />
                </span>
                <div className={`dropdown-menu mega-menu position-absolute border-0 shadow-lg rounded-3 p-3 ${dropdownOpen === 'cta' ? 'show' : ''}`} style={{top: '100%', left: '-50px', width: '250px'}}>
                  <div className="d-flex flex-column gap-2">
                    <a href="/experience/center" className="mega-menu-item text-decoration-none d-flex align-items-center p-2 rounded" onClick={(e) => handleNavigate(e, '/experience/center')}>
                      <FaBuilding className="me-3 text-warning" />
                      <span className="fw-bold text-dark">Experience Center</span>
                    </a>
                    <a href="/book/visit" className="mega-menu-item text-decoration-none d-flex align-items-center p-2 rounded" onClick={(e) => handleNavigate(e, '/book/visit')}>
                      <FaHome className="me-3 text-warning" />
                      <span className="fw-bold text-dark">Home Site Visit</span>
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
          
          <button className={`hamburger btn btn-link d-lg-none text-white`} onClick={toggleNav}>
            <FaBars size={28} />
          </button>

        </div>
      </header>

      {/* FULL-SCREEN MOBILE DRAWER */}
      <div className={`mobile-menu-drawer ${navOpen ? 'show' : ''} d-lg-none`}>
        <div className="mobile-menu-overlay-bg" onClick={closeNav}></div>
        <div className="mobile-menu-content d-flex flex-column">
          
          <div className="mobile-menu-header d-flex justify-content-between align-items-center p-4">
            <h2 className="m-0 fw-bold text-white" style={{fontFamily: 'Playfair Display, serif'}}>
              GYP <span style={{fontWeight: 300, color: 'var(--royal-blue)'}}>Signatures</span>
            </h2>
            <button className="btn btn-link p-0 close-btn" onClick={closeNav}>
              <FaTimes size={28}/>
            </button>
          </div>

          <div className="mobile-menu-body px-4 py-2 flex-grow-1 overflow-auto">
            <ul className="list-unstyled m-0 d-flex flex-column gap-1">
              
              <li className="mobile-nav-item">
                <a href="/" className={`d-block w-100 text-decoration-none py-3 ${isActive('/') ? 'active' : ''}`} onClick={(e) => handleNavigate(e, '/')}>HOME</a>
              </li>

              <li className="mobile-nav-item border-top border-secondary border-opacity-25">
                <div className="d-flex justify-content-between align-items-center w-100 py-3 cursor-pointer" onClick={() => toggleMobileMenu('designs')}>
                  <span className="text-uppercase letter-spacing-1">DESIGNS</span>
                  <span className="accordion-icon">{expandedMenu === 'designs' ? <FaMinus /> : <FaPlus />}</span>
                </div>
                <div className={`mobile-submenu ${expandedMenu === 'designs' ? 'expanded' : ''}`}>
                  <ul className="list-unstyled ps-4 pb-3 m-0 d-flex flex-column gap-3">
                    <li><a href="/showcase/all" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/showcase/all')}>Product Showcase</a></li>
                    <li><a href="/portfolio/all" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/portfolio/all')}>Project Portfolio</a></li>
                    <li><a href="/designs/materials" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/designs/materials')}>Material Library</a></li>
                  </ul>
                </div>
              </li>

              <li className="mobile-nav-item border-top border-secondary border-opacity-25">
                <div className="d-flex justify-content-between align-items-center w-100 py-3 cursor-pointer" onClick={() => toggleMobileMenu('brand')}>
                  <span className="text-uppercase letter-spacing-1">THE BRAND</span>
                  <span className="accordion-icon">{expandedMenu === 'brand' ? <FaMinus /> : <FaPlus />}</span>
                </div>
                <div className={`mobile-submenu ${expandedMenu === 'brand' ? 'expanded' : ''}`}>
                  <ul className="list-unstyled ps-4 pb-3 m-0 d-flex flex-column gap-3">
                    <li><a href="/brand/about" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/brand/about')}>About Us</a></li>
                    <li><a href="/brand/heritage" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/brand/heritage')}>Our Heritage</a></li>
                    <li><a href="/brand/process" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/brand/process')}>Our Process</a></li>
                    <li><a href="/brand/reviews" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/brand/reviews')}>Client Reviews</a></li>
                  </ul>
                </div>
              </li>

              <li className="mobile-nav-item border-top border-secondary border-opacity-25">
                <div className="d-flex justify-content-between align-items-center w-100 py-3 cursor-pointer" onClick={() => toggleMobileMenu('experience')}>
                  <span className="text-uppercase letter-spacing-1">EXPERIENCE</span>
                  <span className="accordion-icon">{expandedMenu === 'experience' ? <FaMinus /> : <FaPlus />}</span>
                </div>
                <div className={`mobile-submenu ${expandedMenu === 'experience' ? 'expanded' : ''}`}>
                  <ul className="list-unstyled ps-4 pb-3 m-0 d-flex flex-column gap-3">
                    <li><a href="/experience/style" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/experience/style')}>Style Discovery</a></li>
                    {/* <li><a href="/experience/budget" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/experience/budget')}>Budget Estimator</a></li>
                    <li><a href="/experience/center" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/experience/center')}>Experience Center</a></li> */}
                  </ul>
                </div>
              </li>

              <li className="mobile-nav-item border-top border-secondary border-opacity-25">
                <a href="/contact" className={`d-block w-100 text-decoration-none py-3 ${isActive('/contact') ? 'active' : ''}`} onClick={(e) => handleNavigate(e, '/contact')}>CONTACT</a>
              </li>

              <li className="mobile-nav-item border-top border-secondary border-opacity-25 pb-4">
                <div className="d-flex justify-content-between align-items-center w-100 py-3 cursor-pointer" onClick={() => toggleMobileMenu('cta')}>
                  <span className="text-uppercase letter-spacing-1 fw-bold" style={{color: 'var(--royal-blue)'}}>BOOK NOW</span>
                  <span className="accordion-icon" style={{color: 'var(--royal-blue)'}}>{expandedMenu === 'cta' ? <FaMinus /> : <FaPlus />}</span>
                </div>
                <div className={`mobile-submenu ${expandedMenu === 'cta' ? 'expanded' : ''}`}>
                  <ul className="list-unstyled ps-4 pb-3 m-0 d-flex flex-column gap-3">
                    <li><a href="/experience/center" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/experience/center')}>Experience Center</a></li>
                    <li><a href="/book/visit" className="text-decoration-none text-light opacity-75" onClick={(e) => handleNavigate(e, '/book/visit')}>Home Site Visit</a></li>
                  </ul>
                </div>
              </li>

            </ul>
          </div>

          <div className="mobile-menu-footer p-4 border-top border-secondary border-opacity-25">
            <div className="d-flex justify-content-between align-items-center w-75 mx-auto">
              <a href="https://instagram.com" className="text-white social-link" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
              <a href="https://facebook.com" className="text-white social-link" target="_blank" rel="noopener noreferrer"><FaFacebookF size={22} /></a>
              <a href="https://youtube.com" className="text-white social-link" target="_blank" rel="noopener noreferrer"><FaYoutube size={26} /></a>
              <a href="https://whatsapp.com" className="text-white social-link" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={24} /></a>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
