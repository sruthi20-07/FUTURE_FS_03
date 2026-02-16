const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/menu", require("./routes/menuRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));

// 🔥 TEMPORARY DATABASE SETUP ROUTE
const db = require("./config/db");

app.get("/setup-db", async (req, res) => {
  try {
    await db.query(`
      CREATE TABLE IF NOT EXISTS menu_items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        description TEXT,
        price INTEGER,
        image_url TEXT,
        category VARCHAR(50)
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS admins (
        id SERIAL PRIMARY KEY,
        email VARCHAR(100) UNIQUE,
        password TEXT
      );
    `);

    await db.query(`
      CREATE TABLE IF NOT EXISTS orders (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(100),
        phone VARCHAR(20),
        address TEXT,
        item_id INTEGER REFERENCES menu_items(id),
        quantity INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    res.send("Database tables created successfully ✅");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating tables");
  }
});

// Health check
app.get("/", (req, res) => {
  res.send("Cloud Kitchen API Running...");
});

// IMPORTANT: Use Render dynamic port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
