const express = require("express");
const router = express.Router();

// USER
// Index
router.get("/", (req, res) => {
    res.send("GET for users");
});

// Show 
router.get("/:Id", (req, res) => {
    res.send("GET for show users");
});

// New
router.post("/", (req, res) => {
    res.send("POST for users");
});

// Delete
router.delete("/:Id", (req, res) => {
    res.send("Delete for user id");
});

module.exports = router;