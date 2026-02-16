const db = require("../config/db");

exports.createOrder = (req, res) => {
  const { customer_name, phone, address, item_id, quantity } = req.body;

  db.query(
    "INSERT INTO orders (customer_name, phone, address, item_id, quantity) VALUES (?, ?, ?, ?, ?)",
    [customer_name, phone, address, item_id, quantity],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Order placed successfully" });
    }
  );
};

exports.getOrders = (req, res) => {
  db.query(
    "SELECT orders.*, menu_items.name AS item_name FROM orders JOIN menu_items ON orders.item_id = menu_items.id",
    (err, results) => {
      if (err) return res.status(500).json(err);
      res.json(results);
    }
  );
};
