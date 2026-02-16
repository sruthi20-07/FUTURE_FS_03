import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleOrderClick = () => {
    navigate("/menu");
  };

  return (
    <div
      style={{
        height: "90vh",
        background:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1604908554027-3e9d5b75f1ef')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "50px", marginBottom: "20px" }}>
        Cloud Kitchen 🍱
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "30px" }}>
        Fresh. Homemade. Hygienic.
      </p>

      <button
        className="btn"
        onClick={handleOrderClick}
        style={{ fontSize: "16px", padding: "12px 25px" }}
      >
        Order Now
      </button>
    </div>
  );
}

export default Home;
