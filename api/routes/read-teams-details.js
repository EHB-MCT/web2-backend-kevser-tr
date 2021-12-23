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

})

module.exports = router;