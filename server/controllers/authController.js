const db = require("../config/db");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

exports.loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query(
      "SELECT * FROM admins WHERE email = $1",
      [email]
    );

    const admin = result.rows[0];

    if (!admin) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    res.json({
      id: admin.id,
      email: admin.email,
      token: generateToken(admin.id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};
