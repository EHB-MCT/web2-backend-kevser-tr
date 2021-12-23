const express = require("express");
const router = express.Router();
const client = require("../db/db");
const DB = client.db(process.env.DATABASE_NAME);

router.get('/', (req, res) => {

    DB.collection("teams")
        .find({})
        .toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            client.close();
            res.status(200).json(result)
        });
        
})

module.exports = router;