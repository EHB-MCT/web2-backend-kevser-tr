const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);
let ObjectId = require('mongodb').ObjectId;

router.put('/:id', (req, res) => {
    console.log("[TEAMS DELETE]")
    const team_id = req.params.id
    const o_id = ObjectId(team_id)

    DB.collection("teams")
    .deleteOne({ _id: o_id }, function(err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        res.status(200).send("Project succesfully deleted.")
    });

})

module.exports = router;