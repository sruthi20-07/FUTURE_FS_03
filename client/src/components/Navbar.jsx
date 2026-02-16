import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{
      background: "#111",
      padding: "15px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }}>
      <h2 style={{ color: "white" }}>Cloud Kitchen 🍱</h2>

      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/menu" style={linkStyle}>Menu</Link>
        <Link to="/order" style={linkStyle}>Order</Link>
        <Link to="/admin/login" style={linkStyle}>Admin</Link>
      </div>
    </nav>
  );
}

const linkStyle = {
  color: "white",
  marginLeft: "20px",
  textDecoration: "none",
  fontWeight: "bold"
};

export default Navbar;
