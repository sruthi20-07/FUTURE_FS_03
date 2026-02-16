const db = require("../config/db");

exports.getMenu = (req, res) => {
  db.query("SELECT * FROM menu_items", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

exports.addMenuItem = (req, res) => {
  const { name, description, price, image_url } = req.body;

  db.query(
    "INSERT INTO menu_items (name, description, price, image_url) VALUES (?, ?, ?, ?)",
    [name, description, price, image_url],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Menu item added successfully" });
    }
  );
};

exports.deleteMenuItem = (req, res) => {
  const { id } = req.params;

  db.query(
    "DELETE FROM menu_items WHERE id = ?",
    [id],
    (err) => {
      if (err) return res.status(500).json(err);
      res.json({ message: "Menu item deleted" });
    }
  );
};
