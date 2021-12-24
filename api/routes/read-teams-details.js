const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);
let ObjectId = require('mongodb').ObjectId;

router.get('/:id', (req, res) => {
    console.log("[TEAMS DETAIL]")
    const team_id = req.params.id
    const o_id = ObjectId(team_id)

    DB.collection("teams")
    .find({ _id: o_id })
    .toArray(function(err, result) {
        if (err) throw err
        console.log(result)
        console.log("[SENDING TEAMS DETAIL OK]")
        res.status(200).json(result)
    });

})

module.exports = router;