const db = require("../config/db");

exports.getMenu = async (req, res) => {
  try {
    const result = await db.query("SELECT * FROM menu_items");
    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
