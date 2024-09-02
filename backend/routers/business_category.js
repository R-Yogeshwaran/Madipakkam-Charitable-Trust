const express = require("express");
const router = express.Router();
const connection = require("../db/index");

router.get("/:region", (req, res) => {
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

module.exports = router;
