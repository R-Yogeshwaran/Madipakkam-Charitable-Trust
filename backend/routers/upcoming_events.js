const express = require("express");
const router = express.Router();
const connection = require("../db/index");

router.get("/:region", (req, res) => {
  const region = req.params.region;
  const sql = `SELECT * FROM upcoming_events WHERE region="${region}"`;
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
  const sql = `SELECT * FROM upcoming_events`;
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
  const { region, event_name, date, time, area } = req.body;
  connection.query(
    "INSERT INTO upcoming_events (region, event_name, date, time, area) VALUES (?, ?, ?, ?, ?)",
    [region, event_name, date, time, area],
    (error, results, fields) => {
      if (error) throw error;
      res.send("Data inserted successfully");
    }
  );
});

module.exports = router;
