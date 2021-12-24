const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);
let ObjectId = require('mongodb').ObjectId;

router.put('/:id', (req, res) => {
    console.log("[TEAMS DELETE]")
    const team_id = req.params.id
    const o_id = ObjectId(team_id)

    let membersArray = []
    let teamMembers = {}

    teamMembers.name = "Durum"
    teamMembers.photo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rolled_kebab.jpg/440px-Rolled_kebab.jpg",
    membersArray.push(teamMembers)

    teamMembers.name = "Köfte"
    teamMembers.photo = "https://leblogdistanbul.b-cdn.net/wp-content/uploads/2014/12/kofte.jpg",
    membersArray.push(teamMembers)

    teamMembers.name = "Sarma"
    teamMembers.photo = "https://www.grandturkishbazaar.com/wp-content/uploads/2020/03/yaprak-sarma-stuffed-grape-leaves-5-500x500.jpg",
    membersArray.push(teamMembers)

    var newValues = { $set: {
        name: "Tarinkulhululu TEAM",
        damage: 1,
        magic: 100,
        defense: 0,
        members: membersArray
    }};

    try {
        DB.collection("teams")
        .updateOne({ _id: o_id }, newValues, function(err, res) {
            if (err) throw err;
            console.log(`Team ${newValues.name} is updated`);
        }); 
        res.send("Project succesfully updated.")
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;