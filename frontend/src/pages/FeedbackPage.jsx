import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Star, MessageSquare } from "lucide-react";

// FIXED: Direct backend URL 
const API = "http://localhost:3300/api";

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
     await axios.post("https://momosaddaindia.com/api/feedback", formData,
{
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
        style={{
          background: "linear-gradient(135deg, #DC2626 0%, #F97316 100%)",
          padding: "100px 20px",
          color: "white",
          textAlign: "center",
        }}
      >
        <div className="container">
          <MessageSquare size={64} style={{ margin: "0 auto 24px" }} />
          <h1
            data-testid="feedback-title"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: "800",
              marginBottom: "24px",
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
            Your opinion matters to us! Help us serve you better by sharing
            your experience.
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
              style={{ padding: "40px" }}
            >
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
                    htmlFor="name"
                    style={{
                      display: "block",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#F97316")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#E5E7EB")
                    }
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#F97316")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#E5E7EB")
                    }
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    style={{
                      display: "block",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#F97316")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#E5E7EB")
                    }
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontFamily: "Manrope, sans-serif",
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#374151",
                      marginBottom: "8px",
                    }}
                  >
                    Your Feedback *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us about your experience..."
                    style={{
                      width: "100%",
                      padding: "12px 16px",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "15px",
                      resize: "vertical",
                    }}
                    onFocus={(e) =>
                      (e.target.style.borderColor = "#F97316")
                    }
                    onBlur={(e) =>
                      (e.target.style.borderColor = "#E5E7EB")
                    }
                  ></textarea>
                </div>
              </div>

              {/* SUBMIT BUTTON */}
              <button
                type="submit"
                disabled={isSubmitting}
                data-testid="feedback-submit-button"
                className="btn-primary"
                style={{
                  width: "100%",
                  marginTop: "32px",
                  opacity: isSubmitting ? 0.7 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
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
