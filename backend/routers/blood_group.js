const express = require("express");
const router = express.Router();
const connection = require("../db/index");

router.get("/:blood_group", (req, res) => {
  const blood_group = req.params.blood_group;
  const sql = `SELECT * FROM users WHERE blood_group="${blood_group}"`;
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
