const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);
router.post('/create', (req, res) => {

    const {attack, magic, defense, members} = req.body

    let membersArray = []
    let teamMembers = {}

    for (const oneMember of members) {
        teamMembers.name = oneMember.name
        teamMembers.photo = oneMember.photo
        membersArray.push(teamMembers)
    }

    let query = { 
        // name: "Cyril TEAM",
        damage: attack,
        magic: magic,
        defense: defense,
        members: membersArray
    };

    console.log("QUEERY:", query)

    try {
        DB.collection("teams")
        .insertOne(query, function(err, res) {
            if (err) throw err;
            console.log("1 document inserted");
        });
        res.send("Project succesfully inserted.")
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;