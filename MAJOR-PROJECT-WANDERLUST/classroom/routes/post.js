const express = require("express");
const router = express.Router();

// POSTS
// Index
router.get("/", (req, res) => {
    res.send("GET for posts");
});

// Show 
router.get("/:Id", (req, res) => {
    res.send("GET for show post Id");
});

// New 
router.post("/", (req, res) => {
    res.send("POST for posts");
});

// Delete 
router.delete("/:Id", (req, res) => {
    res.send("Delete for post id");
});

module.exports = router;