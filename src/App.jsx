import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Component/Navbar';
import Home from './Pages/Home';
import Productshowcase from './Pages/Productshowcase';
import Portfolio from './Pages/Portfolio';
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
          </Routes>
        </main>
        <Footer />
        <Whatsappicon />
      </div>
    </Router>
  );
}

export default App;
