const express = require("express");
const router = express.Router();
const connection = require("../db/index");

router.get("/region/:region", (req, res) => {
  const region = req.params.region;
  const sql = `SELECT * FROM users WHERE region="${region}"`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(result);
    }
  });
});

router.get("/", (req, res) => {
  const sql = `SELECT * FROM users;`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(result);
    }
  });
});

router.get("/:email", (req, res) => {
  const email = req.params.email;
  const sql = `SELECT * FROM users WHERE email="${email}"`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(result);
    }
  });
});

router.post("/", (req, res) => {
  const {
    name,
    region,
    mobile_number,
    business,
    date_of_birth,
    blood_group,
    professional_details,
    business_details,
    business_website,
    email,
  } = req.body;
  function generatePassword(length) {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }

    return password;
  }

  const password = generatePassword(8);

  connection.query(
    `INSERT INTO users(name, region, mobile_number, business, date_of_birth, blood_group, professional_details,business_details, business_website, email, password) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      name,
      region,
      mobile_number,
      business,
      date_of_birth,
      blood_group,
      professional_details,
      business_details,
      business_website,
      email,
      password,
    ],
    (error, results, fields) => {
      if (error) throw error;
      res.send("Data added successfully");
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM users WHERE id = ${id}`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error deleting user" });
      throw err;
    }
    res.send({ message: "User deleted successfully" });
  });
});

router.put("/:email", (req, res) => {
  const e = req.params.email;
  const {
    name,
    region,
    mobile_number,
    business,
    date_of_birth,
    blood_group,
    email,
    professional_details,
    business_details,
    business_website,
    password,
  } = req.body;

  console.log(mobile_number);
  const sql = `UPDATE users SET name=?, region=?, mobile_number=?, business=?, date_of_birth=?, blood_group=?, email=?, professional_details=?, business_details=?, business_website=?, password=? WHERE email=?`;

  connection.query(
    sql,
    [
      name,
      region,
      mobile_number,
      business,
      date_of_birth,
      blood_group,
      email,
      professional_details,
      business_details,
      business_website,
      password,
      e,
    ],
    (error, results, fields) => {
      if (error) {
        res.status(500).json({ error: "Unable to update user data" });
      } else {
        res.json({ message: "User data updated successfully" });
      }
    }
  );
});

module.exports = router;
