const express = require("express");
const router = express.Router();
const DB = require("../db/db");

router.get('/teams', (req, res) => {
    console.log(req.body)
    res.send('Hello World !')
})

module.exports = router;