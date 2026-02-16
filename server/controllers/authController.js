const db = require("../config/db");
const generateToken = require("../utils/generateToken");

exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM admins WHERE email = ?",
    [email],
    (err, results) => {
      if (err) return res.status(500).json(err);

      if (results.length === 0) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const admin = results[0];

      // SIMPLE PASSWORD CHECK (no bcrypt)
      if (password !== admin.password) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const token = generateToken(admin.id);

      res.json({
        id: admin.id,
        email: admin.email,
        token,
      });
    }
  );
};
