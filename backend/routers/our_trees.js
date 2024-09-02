const express = require("express");
const router = express.Router();
const connection = require("../db/index");

router.get("/:region", (req, res) => {
  const region = req.params.region;
  const sql = `SELECT * FROM our_trees WHERE region="${region}"`;
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
  const { planted_on, area, region } = req.body;
  connection.query(
    "INSERT INTO our_trees (area, planted_on, region) VALUES (?, ?, ?)",
    [area, planted_on, region],
    (error, results, fields) => {
      if (error) throw error;
      res.send("Data inserted successfully");
    }
  );
});

module.exports = router;
