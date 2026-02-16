const db = require("../config/db");

exports.createOrder = async (req, res) => {
  const { customer_name, phone, address, item_id, quantity } = req.body;

  try {
    await db.query(
      "INSERT INTO orders (customer_name, phone, address, item_id, quantity) VALUES ($1, $2, $3, $4, $5)",
      [customer_name, phone, address, item_id, quantity]
    );

    res.json({ message: "Order placed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
