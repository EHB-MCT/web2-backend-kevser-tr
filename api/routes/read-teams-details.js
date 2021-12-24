const express = require("express");
const router = express.Router();
const client = require("../db/db");
let ObjectId = require('mongodb').ObjectId;
const DB = client.db(process.env.DATABASE_NAME);

router.get('/:id', (req, res) => {
    console.log("[TEAMS DETAIL]")
    const team_id = req.params.id
    const o_id = ObjectId(team_id)

    console.log(o_id)

    // const query = { _id: o_id };
    const query = { "damage": "5" }

    DB.collection("teams")
    .find({ _id: o_id })
    .toArray(function(err, result) {
        if (err) throw err
        console.log(result)
        console.log("[SENDING TEAMS DETAIL]")
        res.status(200).json(result)
    });


})

module.exports = router;