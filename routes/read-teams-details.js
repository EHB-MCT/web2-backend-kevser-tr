const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);

router.get('/:id', (req, res) => {
    const team_id = req.params.id;

    if(team_id) {
        console.log(`Project ID: ${team_id}`)
        res.send(`Project ID: ${team_id}`)
    }

    const teams = DB.collection("teams").find()
    DB.collection("teams").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        client.close();
        res.status(200).json(result)
    });

})

module.exports = router;