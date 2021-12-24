const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);

router.post('/create', (req, res) => {
    const newTeam = req.body
    console.log(newTeam)

    let teamMember = {
        name: "",
        photo: "",
    }

    let teamObj = {
        name: "",
        damage: 0,
        magic: 0,
        defense: 0,
        members: teamMember
    }

    DB.collection("teams")
    .insertOne(query, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");
    });
})

module.exports = router;