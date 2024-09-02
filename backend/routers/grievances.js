const express = require("express");
const router = express.Router();
const connection = require("../db/index");

router.get("/", (req, res) => {
  const sql = `SELECT * FROM grievances;`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(result);
    }
  });
});

router.get("/:region", (req, res) => {
  const region = req.params.region;
  const sql = `SELECT * FROM grievances WHERE region="${region}"`;
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
  const { name, mobile_number, region, grievances } = req.body;
  connection.query(
    `INSERT INTO grievances(name, mobile_number, region, grievances) VALUES(?, ?, ?, ?)`,
    [name, mobile_number, region, grievances],
    (error, results, fields) => {
      if (error) throw error;
      res.send("Data added successfully");
    }
  );
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM grievances WHERE id = ${id}`;

  connection.query(sql, (err, result) => {
    if (err) {
      res.status(500).send({ error: "Error deleting grievance" });
      throw err;
    }
    res.send({ message: "Grievance deleted successfully" });
  });
});

module.exports = router;
