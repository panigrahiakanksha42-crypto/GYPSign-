import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Productshowcase from './Pages/Productshowcase';
import Portfolio from './Pages/Portfolio';
import MaterialLibrary from './Pages/MaterialLibrary';
import Aboutus from './Pages/Aboutus';
import OurHeritage from './Pages/OurHeritage';
import OurProcess from './Pages/OurProcess';
import ClientReviews from './Pages/ClientReviews';
import StyleDiscovery from './Pages/StyleDiscovery';
import BudgetEstimator from './Pages/BudgetEstimator';
import ExperienceCenter from './Pages/ExperienceCenter';
import Contactus from './Pages/Contactus';
import HomeSiteVisit from './Pages/HomeSiteVisit';
import Footer from './Component/Footer';
import Whatsappicon from './Component/Whatsappicon';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/showcase/:category?" element={<Productshowcase />} />
            <Route path="/portfolio/:category?" element={<Portfolio />} />
            <Route path="/designs/materials" element={<MaterialLibrary />} />
            <Route path="/brand/about" element={<Aboutus />} />
            <Route path="/brand/heritage" element={<OurHeritage />} />
            <Route path="/brand/process" element={<OurProcess />} />
            <Route path="/brand/reviews" element={<ClientReviews />} />
            <Route path="/experience/style" element={<StyleDiscovery />} />
            <Route path="/experience/budget" element={<BudgetEstimator />} />
            <Route path="/experience/center" element={<ExperienceCenter />} />
            <Route path="/book/visit" element={<HomeSiteVisit />} />
            <Route path="/contact" element={<Contactus />} />
          </Routes>
        </main>
        <Footer />
        <Whatsappicon />
      </div>
    </Router>
  );
}

export default App;
