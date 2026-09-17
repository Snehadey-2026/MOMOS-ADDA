import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Star, MessageSquare } from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE;

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    rating: 0,
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingClick = (rating) => {
    setFormData({
      ...formData,
      rating,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.rating === 0) {
      toast.error("Please select a rating");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(`${API_BASE}/feedback`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      toast.success("Thank you for your valuable feedback!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        rating: 0,
        message: "",
      });
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div data-testid="feedback-page" style={{ marginTop: "80px" }}>
      {/* HERO SECTION */}
      <section
        data-testid="feedback-hero"
        className="feedback-hero-section"
        style={{
          backgroundImage: 'url("/AssetsMomosAdda/popupimage.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          padding: "100px 20px",
          color: "white",
          textAlign: "center",
          position: "relative",
          minHeight: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(220, 38, 38, 0.85) 0%, rgba(249, 115, 22, 0.85) 100%)",
            zIndex: 1,
          }}
        />
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <MessageSquare size={64} style={{ margin: "0 auto 24px", width: 'clamp(48px, 8vw, 64px)', height: 'clamp(48px, 8vw, 64px)' }} />
          <h1
            data-testid="feedback-title"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: "800",
              marginBottom: "24px",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Share Your Feedback
          </h1>
          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(16px, 2vw, 20px)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Your opinion matters to us! Help us serve you better by sharing your experience.
          </p>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="section-padding">
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            <form
              onSubmit={handleSubmit}
              data-testid="feedback-form"
              className="glass-card"
              style={{ padding: "clamp(24px, 5vw, 40px)" }}
            >
              {/* Rating Selection */}
              <div style={{ marginBottom: "32px", textAlign: "center" }}>
                <h3
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "20px",
                    fontWeight: "600",
                    color: "#374151",
                    marginBottom: "16px",
                  }}
                >
                  How would you rate your experience?
                </h3>

                <div
                  data-testid="rating-stars"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "12px",
                  }}
                >
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => handleRatingClick(star)}
                      onMouseEnter={() => setHoveredRating(star)}
                      onMouseLeave={() => setHoveredRating(0)}
                      data-testid={`rating-star-${star}`}
                      style={{
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        transition: "transform 0.2s ease",
                        transform:
                          hoveredRating >= star || formData.rating >= star
                            ? "scale(1.2)"
                            : "scale(1)",
                      }}
                    >
                      <Star
                        size={36}
                        fill={
                          hoveredRating >= star || formData.rating >= star
                            ? "#F97316"
                            : "none"
                        }
                        color={
                          hoveredRating >= star || formData.rating >= star
                            ? "#F97316"
                            : "#D1D5DB"
                        }
                        style={{ width: 'clamp(28px, 5vw, 36px)', height: 'clamp(28px, 5vw, 36px)' }}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* INPUT FIELDS */}
              <div style={{ display: "grid", gap: "24px" }}>
                {/* Name */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 16px)",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontSize: "clamp(14px, 2vw, 16px)",
                    }}
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 16px)",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontSize: "clamp(14px, 2vw, 16px)",
                    }}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 16px)",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontSize: "clamp(14px, 2vw, 16px)",
                    }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "14px",
                      fontWeight: "600",
                      marginBottom: "8px",
                    }}
                  >
                    Your Feedback *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your experience..."
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 16px)",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      resize: "vertical",
                      fontSize: "clamp(14px, 2vw, 16px)",
                    }}
                  ></textarea>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  marginTop: "32px",
                  padding: "clamp(14px, 2.5vw, 16px)",
                  background: "#F97316",
                  borderRadius: "12px",
                  color: "white",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontSize: "clamp(15px, 2.2vw, 18px)",
                  fontWeight: "600",
                  fontFamily: "Manrope, sans-serif",
                  border: "none",
                }}
              >
                {isSubmitting ? "Submitting..." : "Submit Feedback"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeedbackPage;
