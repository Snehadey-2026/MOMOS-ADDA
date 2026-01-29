import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Building2,
  TrendingUp,
  Users,
  IndianRupee
} from "lucide-react";

const API_BASE = import.meta.env.VITE_API_BASE;

const FranchisePage = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    investment_capacity: "",
    experience: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `${API_BASE}/franchise`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Franchise Submitted:", response.data);
      toast.success("Your franchise inquiry has been submitted!");

      // Reset form
      setFormData({
        full_name: "",
        email: "",
        phone: "",
        city: "",
        state: "",
        investment_capacity: "",
        experience: "",
        message: "",
      });
    } catch (error) {
      console.error("Franchise submit error:", error);
      toast.error("Submission failed. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{ marginTop: "80px" }}>

      {/* HERO SECTION */}
      <section
        style={{
          backgroundImage: 'url("/AssetsMomosAdda/BGFRANCHISE.png")',
          width: "100%",
          minHeight: "100vh",
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          color: "white",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
        className="franchise-hero-section"
      >
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <h1
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(36px, 6vw, 64px)",
              fontWeight: "800",
              marginBottom: "24px",
              color: "orange",
              textShadow: "2px 2px 8px rgba(0,0,0,0.7)",
            }}
          >
            Franchise Opportunity
          </h1>

          <p
            style={{
              fontFamily: "Manrope, sans-serif",
              fontSize: "clamp(16px, 2vw, 20px)",
              maxWidth: "800px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Join India's fastest-growing momo brand and be part of our success story.
          </p>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="section-padding" style={{ 
        background: "linear-gradient(180deg, #FAFAFA 0%, #FFFFFF 100%)",
        position: "relative",
      }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              textAlign: "center",
              marginBottom: "60px",
            }}
          >
            Why Partner With Us?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
              gap: "clamp(24px, 4vw, 32px)",
            }}
          >
            {[
              { icon: Building2, title: "Established Brand", text: "Join a trusted brand with a strong customer base." },
              { icon: IndianRupee, title: "High Profit Margins", text: "Earn with our proven business model." },
              { icon: Users, title: "Complete Support", text: "We provide training, operations & marketing support." },
              { icon: TrendingUp, title: "Growth Potential", text: "Be part of an expanding national franchise network." },
            ].map((item, i) => (
              <div
                key={i}
                className="glass-card"
                style={{
                  padding: "clamp(28px, 5vw, 40px)",
                  textAlign: "center",
                  transition: "0.3s",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    width: "clamp(60px, 12vw, 80px)",
                    height: "clamp(60px, 12vw, 80px)",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #DC2626, #F97316)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto clamp(20px, 3vw, 24px)",
                    flexShrink: 0,
                  }}
                >
                  <item.icon size={40} color="white" style={{ width: 'clamp(30px, 6vw, 40px)', height: 'clamp(30px, 6vw, 40px)' }} />
                </div>
                <h3
                  style={{
                    fontFamily: "Manrope, sans-serif",
                    fontSize: "clamp(20px, 3vw, 24px)",
                    fontWeight: "700",
                    marginBottom: "clamp(12px, 2vw, 16px)",
                    textAlign: "center",
                    wordBreak: "break-word",
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ 
                  color: "#6B7280", 
                  lineHeight: "1.6",
                  fontSize: "clamp(14px, 2vw, 16px)",
                  textAlign: "center",
                  margin: 0,
                  wordBreak: "break-word",
                }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              textAlign: "center",
            }}
          >
            Apply for Franchise
          </h2>

          <form
            onSubmit={handleSubmit}
          className="glass-card"
          style={{ padding: "clamp(24px, 5vw, 40px)", marginTop: "30px" }}
        >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                gap: "clamp(20px, 3vw, 24px)",
              }}
            >
              {[
                { label: "Full Name", name: "full_name" },
                { label: "Email", name: "email", type: "email" },
                { label: "Phone", name: "phone" },
                { label: "City", name: "city" },
                { label: "State", name: "state" },
                { label: "Investment Capacity", name: "investment_capacity" },
              ].map((field, i) => (
                <div key={i}>
                  <label style={{ fontWeight: "600", color: "#374151" }}>{field.label} *</label>
                  <input
                    type={field.type || "text"}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "clamp(10px, 2vw, 12px) clamp(14px, 2.5vw, 16px)",
                      border: "2px solid #E5E7EB",
                      borderRadius: "12px",
                      fontSize: "clamp(14px, 2vw, 16px)",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* EXPERIENCE */}
            <div style={{ marginTop: "24px" }}>
              <label style={{ fontWeight: "600", color: "#374151" }}>
                Business Experience *
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #E5E7EB",
                  borderRadius: "12px",
                }}
              />
            </div>

            {/* MESSAGE */}
            <div style={{ marginTop: "24px" }}>
              <label style={{ fontWeight: "600", color: "#374151" }}>
                Additional Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                style={{
                  width: "100%",
                  padding: "12px 16px",
                  border: "2px solid #E5E7EB",
                  borderRadius: "12px",
                }}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              style={{
                width: "100%",
                marginTop: "32px",
                padding: "16px",
                fontSize: "18px",
                background: "#F97316",
                borderRadius: "12px",
                color: "white",
                cursor: "pointer",
              }}
            >
              {isSubmitting ? "Submitting..." : "Submit Inquiry"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default FranchisePage;
