const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);

router.post('/create', (req, res) => {
    const newTeam = req.body
    console.log(newTeam)

    let membersArray = []
    let teamMembers = {}

    teamMembers.name = "Durum"
    teamMembers.photo = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Rolled_kebab.jpg/440px-Rolled_kebab.jpg",
    membersArray.push(teamMembers)

    // teamMembers.name = "Köfte"
    // teamMembers.photo = "https://leblogdistanbul.b-cdn.net/wp-content/uploads/2014/12/kofte.jpg",
    // membersArray.push(teamMembers)

    // teamMembers.name = "Sarma"
    // teamMembers.photo = "https://www.grandturkishbazaar.com/wp-content/uploads/2020/03/yaprak-sarma-stuffed-grape-leaves-5-500x500.jpg",
    // membersArray.push(teamMembers)

    let query = { 
        name: "Cyril TEAM",
        damage: 0,
        magic: 0,
        defense: 0,
        members: membersArray
    };

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