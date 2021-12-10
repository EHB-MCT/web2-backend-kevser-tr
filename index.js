const {
    MongoClient
} = require("mongodb");

// Replace the following with your Atlas connection string                                                                                                                                        
const url = "mongodb+srv://admin:admin@cluster0.liznr.mongodb.net/webcourseproject?retryWrites=true&w=majority";
const client = new MongoClient(url);

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
        let teamsDocument = {
            id: "61b3b3880e1dcb655d0298fe",
            teamname: "booster",
            damage: "5",
            member: "Vi,Jinx,Ziggs,Amumu,Lux"
        }

        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(teamsDocument);
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