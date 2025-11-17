import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'; // removed @ alias because your project does not use Vite aliases

// Correct page imports
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import FranchisePage from "./pages/FranchisePage.jsx";
import GalleryPage from "./pages/GalleryPage.jsx";
import FeedbackPage from "./pages/FeedbackPage.jsx";

// Correct component imports with folder path included
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Toaster import (correct path based on your folder structure)
import { Toaster } from "./components/ui/sonner";

function App() {
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