const express = require("express");
const router = express.Router();
const connection = require("../db/index");

router.post("/", (req, res) => {
  const { title, date, body } = req.body;
  const insertQuery = `INSERT INTO news (title, date, body) VALUES (?, ?, ?)`;

  connection.query(insertQuery, [title, date, body], (err, result) => {
    if (err) {
      console.error("Error creating news article:", err);
      res.status(500).json({ error: "Failed to create news article" });
    } else {
      res.status(200).json({ message: "News article created successfully" });
    }
  });
});

router.get("/", (req, res) => {
  const selectQuery = `SELECT * FROM news`;

  connection.query(selectQuery, (err, rows) => {
    if (err) {
      console.error("Error fetching news articles:", err);
      res.status(500).json({ error: "Failed to fetch news articles" });
    } else {
      res.status(200).json(rows);
    }
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  const selectQuery = `SELECT * FROM news WHERE id = ?`;

  connection.query(selectQuery, [id], (err, rows) => {
    if (err) {
      console.error("Error fetching news article:", err);
      res.status(500).json({ error: "Failed to fetch news article" });
    } else if (rows.length === 0) {
      res.status(404).json({ error: "News article not found" });
    } else {
      res.status(200).json(rows[0]);
    }
  });
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { title, date, body } = req.body;
  const updateQuery = `UPDATE news SET title = ?, date = ?, body = ? WHERE id = ?`;

  connection.query(updateQuery, [title, date, body, id], (err, result) => {
    if (err) {
      console.error("Error updating news article:", err);
      res.status(500).json({ error: "Failed to update news article" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "News article not found" });
    } else {
      res.status(200).json({ message: "News article updated successfully" });
    }
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const deleteQuery = `DELETE FROM news WHERE id = ?`;

  connection.query(deleteQuery, [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: "Failed to delete news article" });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: "News article not found" });
    } else {
      res.status(200).json({ message: "News article deleted successfully" });
    }
  });
});

module.exports = router;
