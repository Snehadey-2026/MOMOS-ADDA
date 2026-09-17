import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import "./HomePage.css";

const HomePage = () => {
  const slides = [
    "/AssetsMomosAdda/FINALOPTIMISED1.webp",
    "/AssetsMomosAdda/NEWSLIDE1.jpg",
    "/AssetsMomosAdda/3RDSLIDE.png",
    "/AssetsMomosAdda/4THSLIDE.png",
    "/AssetsMomosAdda/5TH.png",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index, slides.length]);

  const reviews = [
    { name: "Priya S.", text: "Best momos ever!", rating: 5 },
    { name: "Rahul K.", text: "Affordable & hygienic.", rating: 5 },
    { name: "Sneha T.", text: "Fast delivery!", rating: 4 },
    { name: "Ankit M.", text: "Loved the chutney.", rating: 5 },
    { name: "Ritika P.", text: "Great ambience!", rating: 5 },
    { name: "Arjun D.", text: "Highly recommend!", rating: 5 },
    { name: "Neha R.", text: "Fresh & hot always.", rating: 5 },
    { name: "Karan V.", text: "Best franchise brand!", rating: 5 },
    { name: "Simran K.", text: "Super delicious!", rating: 5 },
    { name: "Aman T.", text: "Worth every rupee!", rating: 5 }
  ];

  return (
    <>
      {/* HERO */}
      <div className="hero-slide">
        <img
          key={slides[index]}
          src={slides[index]}
          alt="Slide"
          className="hero-image active"
        />

        <button
          className="nav-arrow left"
          onClick={() =>
            setIndex((index - 1 + slides.length) % slides.length)
          }
        >
          ❮
        </button>

        <button
          className="nav-arrow right"
          onClick={() =>
            setIndex((index + 1) % slides.length)
          }
        >
          ❯
        </button>
      </div>

      {/* REVIEWS */}
      <section className="reviews-section">
        <h2 className="premium-heading">What Our Customers Say</h2>

        <div className="reviews-carousel">
          <div className="reviews-track">
            {[...reviews, ...reviews].map((review, i) => (
              <div className="review-card" key={i}>
                <p>"{review.text}"</p>
                <div className="stars">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} size={13} color="#fff" fill="#fff" />
                  ))}
                </div>
                <span>- {review.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2 className="premium-heading light">Hungry Yet?</h2>

        <div className="cta-buttons">
          <Link to="/menu" className="cta-btn">
            View Menu 🍽
          </Link>

          <div className="google-badge-cta">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              alt="Google"
            />
            <span>4.8 ★★★★★ (1200+)</span>
          </div>

          <Link to="/franchise" className="cta-btn secondary">
            Book Franchise 📈
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2 className="premium-heading light">FAQs</h2>
        <div className="faq-container">
          <FAQItem
            question="Do you deliver in Raipur?"
            answer="Yes, we deliver across Raipur."
          />
          <FAQItem
            question="Are your kitchens hygienic?"
            answer="Strict hygiene standards."
          />
          <FAQItem
            question="Do you offer franchise?"
            answer="Yes, visit Franchise page."
          />
        </div>
      </section>
    </>
  );
};

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        {question}
        <span>{open ? "−" : "+"}</span>
      </button>
      <div className="faq-answer-wrapper">
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default HomePage;