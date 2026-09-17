import React, { useState, useEffect } from "react";

const WhatsAppChatWidget = () => {
  const phoneNumber = "918120104774"; // 🔁 change if needed

  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [step, setStep] = useState("home"); // home | order | track | human
  const [hasScrolled, setHasScrolled] = useState(false);

  // Order state
  const [selectedItems, setSelectedItems] = useState([]);
  const [customerName, setCustomerName] = useState("");
  const [deliveryType, setDeliveryType] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [extraNote, setExtraNote] = useState("");

  // Track state
  const [orderId, setOrderId] = useState("");

  // Simulated typing when popup opens or step changes
  useEffect(() => {
    if (!isOpen) return;
    setIsTyping(true);
    const t = setTimeout(() => setIsTyping(false), 1200);
    return () => clearTimeout(t);
  }, [isOpen, step]);

  // Detect first scroll – used for "GIF-like" attention pulse
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 80) {
        setHasScrolled(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  const toggleItem = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((x) => x !== item) : [...prev, item]
    );
  };

  const openWhatsAppWithText = (text) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  const handleConfirmOrder = () => {
    const itemsText =
      selectedItems.length > 0
        ? selectedItems.map((i) => `• ${i}`).join("\n")
        : "Not selected (customer will decide in chat).";

    const msg =
      `Hi! I'd like to place an order via your website.\n\n` +
      `Items:\n${itemsText}\n\n` +
      `Name: ${customerName || "Not provided"}\n` +
      `Order type: ${deliveryType || "Not specified"}\n` +
      `Preferred time: ${preferredTime || "ASAP"}\n` +
      `Extra notes: ${extraNote || "None"}`;

    openWhatsAppWithText(msg);
  };

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      alert("Please enter your Order ID.");
      return;
    }
    const msg = `Hi! I want to track my order.\nOrder ID: ${orderId}`;
    openWhatsAppWithText(msg);
  };

  const handleTalkToHuman = () => {
    const msg = "Hi! I want to talk to a support person about my order.";
    openWhatsAppWithText(msg);
  };

  // ----------------- UI SECTIONS -----------------

  const renderHome = () => (
    <>
      <div className="wa-bot-bubble">
        👋 Hi! I’m your Momo’s Adda assistant. What would you like to do?
      </div>

      {isTyping && <TypingDots />}

      <div className="wa-chip-row">
        <button className="wa-chip" onClick={() => setStep("order")}>
          🛒 Order food
        </button>
        <button className="wa-chip" onClick={() => setStep("track")}>
          📦 Track order
        </button>
        <button className="wa-chip" onClick={() => setStep("human")}>
          💬 Talk to human
        </button>
      </div>
    </>
  );

  const renderOrder = () => (
    <>
      <div className="wa-bot-bubble">
        🛒 Select what you’re interested in and I’ll prepare a WhatsApp message
        for you.
      </div>

      <div className="wa-chip-grid">
        {[
          "Veg Momos 🥦",
          "Chicken Momos 🍗",
          "Tandoori Momos 🔥",
          "Cheese Momos 🧀",
          "Combo Meals 🍱",
          "Beverages 🥤",
        ].map((item) => (
          <button
            key={item}
            className={
              selectedItems.includes(item)
                ? "wa-chip wa-chip-selected"
                : "wa-chip"
            }
            onClick={() => toggleItem(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="wa-field-group">
        <label>👤 Your name (optional)</label>
        <input
          className="wa-input"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="wa-field-group">
        <label>🚚 Order type</label>
        <div className="wa-chip-row">
          {["Delivery", "Takeaway", "Dine-in"].map((type) => (
            <button
              key={type}
              className={
                deliveryType === type ? "wa-chip wa-chip-selected" : "wa-chip"
              }
              onClick={() => setDeliveryType(type)}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <div className="wa-field-group">
        <label>⏰ Preferred time (optional)</label>
        <input
          className="wa-input"
          value={preferredTime}
          onChange={(e) => setPreferredTime(e.target.value)}
          placeholder="e.g. Today 7:30 PM"
        />
      </div>

      <div className="wa-field-group">
        <label>📝 Extra notes (optional)</label>
        <textarea
          className="wa-textarea"
          rows={2}
          value={extraNote}
          onChange={(e) => setExtraNote(e.target.value)}
          placeholder="Spice level, sauces, etc."
        />
      </div>

      <button className="wa-primary-btn" onClick={handleConfirmOrder}>
        Confirm & open WhatsApp 🚀
      </button>

      <button className="wa-link-btn" onClick={() => setStep("home")}>
        ⬅ Back
      </button>
    </>
  );

  const renderTrack = () => (
    <>
      <div className="wa-bot-bubble">
        📦 Enter your Order ID and I’ll open WhatsApp with a tracking message.
      </div>

      <div className="wa-field-group">
        <label>🔢 Order ID</label>
        <input
          className="wa-input"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          placeholder="e.g. MA-1023"
        />
      </div>

      <button className="wa-primary-btn" onClick={handleTrackOrder}>
        Track via WhatsApp 🔍
      </button>

      <button className="wa-link-btn" onClick={() => setStep("home")}>
        ⬅ Back
      </button>
    </>
  );

  const renderHuman = () => (
    <>
      <div className="wa-bot-bubble">
        💬 I’ll connect you directly with our team on WhatsApp.
      </div>

      <button className="wa-primary-btn" onClick={handleTalkToHuman}>
        Talk to support on WhatsApp 🙋‍♀️
      </button>

      <button className="wa-link-btn" onClick={() => setStep("home")}>
        ⬅ Back
      </button>
    </>
  );

  const renderBody = () => {
    if (step === "order") return renderOrder();
    if (step === "track") return renderTrack();
    if (step === "human") return renderHuman();
    return renderHome();
  };

  return (
    <>
      {/* Floating Button */}
      <button
        className={`wa-floating-btn ${
          !hasScrolled ? "wa-attention" : ""
        }`}
        onClick={() => {
          setIsOpen((prev) => !prev);
          setStep("home");
        }}
      >
        {/* WhatsApp icon embedded as base64 PNG */}
        <img
          className="wa-floating-icon"
          alt="WhatsApp"
          src="/AssetsMomosAdda/WHATSAPP.png"
        />
      </button>

      {/* Popup */}
      {isOpen && (
        <div className="wa-popup">
          <div className="wa-header">
            <div>
              <div className="wa-title">Momo&apos;s Adda on WhatsApp</div>
              <div className="wa-status-row">
                <span className="wa-status-dot" />
                <span className="wa-status-text">Online now</span>
              </div>
            </div>
            <button
              className="wa-close-btn"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
          </div>

          <div className="wa-body">{renderBody()}</div>
        </div>
      )}

      {/* Styles */}
      <style>
        {`
        /* Floating button */
        .wa-floating-btn {
          position: fixed;
          bottom: 1.8rem;
          right: 1.8rem;
          width: clamp(52px, 8vw, 68px);
          height: clamp(52px, 8vw, 68px);
          border-radius: 50%;
         
          padding: 0;
         
          cursor: pointer;
          z-index: 9999;
          box-shadow:
            0 0 0 3px rgba(255,255,255,0.85),
            0 10px 22px rgba(0,0,0,0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-floating-btn:hover {
          transform: scale(1.06);
          box-shadow:
            0 0 0 4px rgba(255,255,255,0.9),
            0 14px 28px rgba(0,0,0,0.55);
        }
        .wa-floating-icon {
          width: 80%;
          height: 80%;
          object-fit: contain;
        }

        /* Strong "GIF-like" pulse before scroll */
        .wa-attention {
          animation: wa-strong-pulse 1.4s ease-in-out infinite;
        }
        @keyframes wa-strong-pulse {
          0%   { transform: scale(1); box-shadow: 0 0 0 4px rgba(255,255,255,0.9), 0 10px 22px rgba(0,0,0,0.45); }
          40%  { transform: scale(1.12); box-shadow: 0 0 0 8px rgba(37,211,102,0.7), 0 16px 30px rgba(0,0,0,0.6); }
          100% { transform: scale(1); box-shadow: 0 0 0 4px rgba(255,255,255,0.9), 0 10px 22px rgba(0,0,0,0.45); }
        }

        /* Popup */
        .wa-popup {
          position: fixed;
          bottom: calc(clamp(52px, 8vw, 68px) + 1.3rem);
          right: 1.3rem;
          width: clamp(270px, 80vw, 340px);
          background: rgba(255,255,255,0.98);
          backdrop-filter: blur(6px);
          border-radius: 18px;
          box-shadow: 0 12px 32px rgba(0,0,0,0.35);
          z-index: 9999;
          overflow: hidden;
          animation: wa-popup-in 0.22s ease-out;
          font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
        }
        @keyframes wa-popup-in {
          from { transform: translateY(10px) scale(0.92); opacity: 0; }
          to   { transform: translateY(0)    scale(1);    opacity: 1; }
        }

        .wa-header {
          background: #25D366;
          color: #fff;
          padding: 0.85rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .wa-title {
          font-size: 0.95rem;
          font-weight: 600;
        }
        .wa-status-row {
          display: flex;
          align-items: center;
          margin-top: 0.15rem;
        }
        .wa-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #0f0;
          margin-right: 0.3rem;
        }
        .wa-status-text {
          font-size: 0.75rem;
          opacity: 0.92;
        }
        .wa-close-btn {
          border: none;
          background: transparent;
          color: #fff;
          font-size: 1.1rem;
          cursor: pointer;
        }

        .wa-body {
          padding: 0.85rem 0.9rem 1rem;
          max-height: 65vh;
          overflow-y: auto;
          font-size: 0.9rem;
          color: #222;
        }

        .wa-bot-bubble {
          background: #f1f0f0;
          border-radius: 14px;
          padding: 0.7rem 0.8rem;
          margin-bottom: 0.6rem;
        }

        .wa-chip-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.3rem;
        }
        .wa-chip-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin: 0.45rem 0 0.65rem;
        }
        .wa-chip {
          border-radius: 999px;
          border: 1px solid #ddd;
          padding: 0.33rem 0.6rem;
          font-size: 0.8rem;
          background: #fff;
          cursor: pointer;
          transition: all 0.15s ease;
          white-space: nowrap;
        }
        .wa-chip:hover {
          background: #f5f5f5;
        }
        .wa-chip-selected {
          background: #25D366;
          border-color: #25D366;
          color: #fff;
        }

        .wa-field-group {
          margin-bottom: 0.6rem;
        }
        .wa-field-group label {
          display: block;
          font-size: 0.8rem;
          margin-bottom: 0.2rem;
          color: #444;
        }
        .wa-input,
        .wa-textarea {
          width: 100%;
          border-radius: 8px;
          border: 1px solid #ddd;
          padding: 0.45rem 0.55rem;
          font-size: 0.85rem;
          outline: none;
        }
        .wa-input:focus,
        .wa-textarea:focus {
          border-color: #25D366;
          box-shadow: 0 0 0 1px rgba(37,211,102,0.2);
        }
        .wa-textarea {
          resize: vertical;
        }

        .wa-primary-btn {
          width: 100%;
          border-radius: 10px;
          border: none;
          padding: 0.55rem 0.7rem;
          background: #25D366;
          color: #fff;
          font-size: 0.9rem;
          cursor: pointer;
          margin-top: 0.2rem;
        }
        .wa-primary-btn:hover {
          background: #1ebe5a;
        }
        .wa-link-btn {
          margin-top: 0.35rem;
          background: transparent;
          border: none;
          color: #555;
          font-size: 0.8rem;
          cursor: pointer;
          text-decoration: underline;
        }

        .wa-typing {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          margin-bottom: 0.5rem;
          margin-top: 0.1rem;
        }
        .wa-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #777;
          animation: wa-blink 1.2s infinite both;
        }
        .wa-dot:nth-child(2) { animation-delay: 0.2s; }
        .wa-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes wa-blink {
          0% { opacity: 0.2; transform: translateY(0); }
          20% { opacity: 1; transform: translateY(-1px); }
          100% { opacity: 0.2; transform: translateY(0); }
        }

        @media (max-width: 600px) {
          .wa-floating-btn {
            bottom: 1.2rem;
            right: 1.2rem;
          }
          .wa-popup {
            right: 0.7rem;
            width: min(92vw, 340px);
          }
        }
        `}
      </style>
    </>
  );
};

const TypingDots = () => (
  <div className="wa-typing">
    <span className="wa-dot" />
    <span className="wa-dot" />
    <span className="wa-dot" />
  </div>
);

export default WhatsAppChatWidget;
