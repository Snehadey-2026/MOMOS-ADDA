import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";

// Page imports
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import FranchisePage from "./pages/FranchisePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import FeedbackPage from "./pages/FeedbackPage.jsx";

// Component imports
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Toaster
import { Toaster } from "./components/ui/sonner";

function App() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/franchise" element={<FranchisePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/feedback" element={<FeedbackPage />} />
        </Routes>

        <Footer />
        <WhatsAppButton />
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </div>
  );
}

export default App;
