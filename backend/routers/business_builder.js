const express = require("express");
const router = express.Router();
const pool = require("../db/index");

router.get("/", (req, res) => {
  pool.query("SELECT * FROM business_builder", (error, results) => {
    if (error) {
      console.log(error);
      return res.status(500).send("An error occurred while fetching the data.");
    }
    res.json(results);
  });
});

router.get("/not-approved", (req, res) => {
  const approval = "false";
  pool.query(
    "SELECT * FROM business_builder WHERE approval = ?",
    approval,
    (error, results) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send("An error occurred while fetching the data.");
      }
      res.json(results);
    }
  );
});

router.get("/approved", (req, res) => {
  const approval = "true";
  pool.query(
    "SELECT * FROM business_builder WHERE approval = ?",
    approval,
    (error, results) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send("An error occurred while fetching the data.");
      }
      res.json(results);
    }
  );
});

router.get("/:region", (req, res) => {
  const region = req.params.region;
  pool.query(
    "SELECT * FROM business_builder WHERE region = ?",
    region,
    (error, results) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send("An error occurred while fetching the data.");
      }
      res.json(results);
    }
  );
});

router.post("/", (req, res) => {
  const { business_name, mobile_number, mail, region, business_details } =
    req.body;
  if (
    !business_name ||
    !mobile_number ||
    !mail ||
    !region ||
    !business_details
  ) {
    return res.status(400).send("Invalid data provided.");
  }
  pool.query(
    "INSERT INTO business_builder (business_name, mobile_number, mail, region, business_details) VALUES (?, ?, ?, ?, ?)",
    [business_name, mobile_number, mail, region, business_details],
    (error, results) => {
      if (error) {
        console.log(error);
        return res.status(500).send("An error occurred while saving the data.");
      }
      res.status(201).json({ id: results.insertId });
    }
  );
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const { approval } = req.body;
  if (!approval) {
    return res.status(400).send("Invalid data provided.");
  }
  pool.query(
    "UPDATE business_builder SET approval = ? WHERE id = ?",
    [approval, id],
    (error, results) => {
      if (error) {
        console.log(error);
        return res
          .status(500)
          .send("An error occurred while updating the data.");
      }
      res.status(200).json({ message: "Data updated successfully." });
    }
  );
});

module.exports = router;
