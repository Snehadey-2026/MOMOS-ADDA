import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "sonner";

// ================================
// 🔗 BACKEND API BASE URL
// ================================
const API_URL = "http://localhost:3300/api/menu";

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  // ================================
  // 📌 Fetch Menu Items
  // ================================
  const fetchMenu = async () => {
    try {
      const response = await axios.get("https://momosaddaindia.com/api/menu",
 {
        headers: { "Content-Type": "application/json" },
      });
      setMenuItems(response.data || []);
    } catch (error) {
      toast.error("Failed to load menu items");
      console.error("Menu fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  // ================================
  // 📌 Category Filter
  // ================================
  const categories = [
    "All",
    "Veg Momos",
    "Non-Veg Momos",
    "Fried Momos",
    "Tandoori Momos",
    "Sides",
    "Beverages",
  ];

  const filteredMenu =
    filteredCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === filteredCategory);

  // ================================
  // 📌 Render
  // ================================
  return (
    <div style={{ marginTop: "80px", padding: "20px" }}>
      <h1
        style={{
          fontFamily: "Playfair Display, serif",
          fontSize: "48px",
          fontWeight: "700",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Our Menu
      </h1>

      {/* CATEGORY FILTER BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "30px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilteredCategory(cat)}
            style={{
              padding: "10px 20px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              background:
                filteredCategory === cat ? "#F97316" : "#E5E7EB",
              color: filteredCategory === cat ? "white" : "#374151",
              fontWeight: "600",
              transition: "0.3s",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* LOADING STATE */}
      {loading && (
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          Loading menu...
        </p>
      )}

      {/* EMPTY STATE */}
      {!loading && filteredMenu.length === 0 && (
        <p style={{ textAlign: "center", fontSize: "20px" }}>
          No menu items found.
        </p>
      )}

      {/* MENU ITEMS GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredMenu.map((item) => (
          <div
            key={item.id}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "16px",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
            }}
          >
            {/* IMAGE */}
            <img
              src={item.image || "/AssetsMomosAdda/default-food.png"}
              alt={item.name}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "12px",
              }}
            />

            {/* TITLE */}
            <h3
              style={{
                fontFamily: "Manrope, sans-serif",
                fontSize: "20px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              {item.name}
            </h3>

            {/* CATEGORY */}
            <p
              style={{
                fontSize: "14px",
                color: "#6B7280",
                marginBottom: "12px",
              }}
            >
              {item.category}
            </p>

            {/* VARIANTS */}
            {item.variants && item.variants.length > 0 && (
              <ul style={{ paddingLeft: "20px" }}>
                {item.variants.map((variant, idx) => (
                  <li key={idx} style={{ marginBottom: "4px" }}>
                    {variant.get("size")} — ₹{variant.get("price")}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
