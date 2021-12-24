const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);

router.get('/', (req, res) => {
    console.log("[ALL TEAMS]")
    DB.collection("teams")
        .find({})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log("[SENDING ALL TEAMS OK]")
            res.status(200).json(result)
        });

})

module.exports = router;