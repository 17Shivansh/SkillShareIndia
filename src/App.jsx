import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Changed Routes to Router
import Home from "./pages/Home.jsx"
import Navbar from './components/Navbar.jsx'; 
import Gallery from './pages/Gallery.jsx';
import ContactInfo from './components/ContactInfo.jsx';
import Footer from './components/Footer.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Reviews from './pages/Reviews.jsx';
import Events from  './pages/Events.jsx';
import AboutUs from './pages/About-us.jsx';
import Services from './pages/Services.jsx';

function App() {
  return (
    <>
    <ContactInfo />
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<ContactUs/>} />
      <Route path="/reviews" element={<Reviews/>} />
      <Route path="/events" element={<Events />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
    <Footer />
  
  </>
  );
}

export default App;