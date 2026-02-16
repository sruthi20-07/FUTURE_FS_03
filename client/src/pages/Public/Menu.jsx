import { useEffect, useState } from "react";
import API from "../../services/api";

// 🔥 Import Local Images
import vegThali from "../../assets/images/veg-thali.jpg";
import paneerButterMasala from "../../assets/images/paneer-butter-masala.jpg";
import vegSpringRolls from "../../assets/images/veg-spring-rolls.jpg";
import gulabJamun from "../../assets/images/gulab-jamun.jpg";
import freshLimeSoda from "../../assets/images/fresh-lime-soda.jpg";

function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    API.get("/menu")
      .then((res) => setMenu(res.data))
      .catch((err) => console.error(err));
  }, []);

  // 🔥 Map food names to local images
  const imageMap = {
    "Veg Thali": vegThali,
    "Paneer Butter Masala": paneerButterMasala,
    "Veg Spring Rolls": vegSpringRolls,
    "Gulab Jamun": gulabJamun,
    "Fresh Lime Soda": freshLimeSoda,
  };

  // Get unique categories
  const categories = [...new Set(menu.map((item) => item.category))];

  return (
    <div className="container">
      <h2 style={{ marginBottom: "20px" }}>Our Menu</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <h3 style={{ marginTop: "30px", color: "#ff5722" }}>
            {cat}
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "20px",
              marginTop: "15px",
            }}
          >
            {menu
              .filter((item) => item.category === cat)
              .map((item) => (
                <div key={item.id} className="card">
                  <img
                    src={imageMap[item.name]}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />

                  <h3 style={{ marginTop: "10px" }}>
                    {item.name}
                  </h3>

                  <p>{item.description}</p>

                  <h4 style={{ color: "#333" }}>
                    ₹{item.price}
                  </h4>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;
