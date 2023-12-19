// server.js
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const app = express();
const port = 3001;

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "host",
  password: "@Haotorres123",
  database: "trac_nghiem",
});

db.connect();

app.post("/login", (req, res) => {
  const { ten_tai_khoan, mat_khau } = req.body;
  const query = `SELECT * FROM hoc_sinh WHERE ten_tai_khoan = ? AND mat_khau = ?`;

  db.query(query, [ten_tai_khoan, mat_khau], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      if (result.length > 0) {
        res.send("Login successful");
      } else {
        res.status(401).send("Invalid credentials");
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
