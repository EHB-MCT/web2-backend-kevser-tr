const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGODB_URI);

async function run() {
  try {
    await client.connect();
    console.log("[DB]:", "Connected to the DB");
  } catch {
    console.log("[DB]:", "Impossible to connect to the DB")
  }
}
run().catch(console.dir);

module.exports = client;