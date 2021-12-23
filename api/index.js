const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000

const {
  MongoClient
} = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

// The database to use
const dbName = "webcourseproject";

async function run() {
  try {
    await client.connect();
    console.log("Connected correctly to server");
    const db = client.db(dbName);

    // Use the collection "people"
    const col = db.collection("teams");

    // Construct a document                                                                                                                                                              
    let teamDocument = {
      "id": "61b3b3880e1dcb655d0298fe",
      "teamname": "booster",
      "damage": "5",
      "member": "Vi,Jinx,Ziggs,Amumu,kevser"
    }

    // Insert a single document, wait for promise so we can read it back
    const p = await col.insertOne(teamDocument);
    // Find one document
    const myDoc = await col.findOne();
    // Print to the console
    console.log(myDoc);

  } catch (err) {
    console.log(err.stack);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('my root api');
  res.send('Hello World! kev')
})

app.post('/addTeams', (req, res) => {
  console.log(req.body)
  res.send('data recieved')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})