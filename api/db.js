
  const { MongoClient, ObjectId } = require("mongodb");
  
  const url = "mongodb+srv://admin:admin@cluster0.liznr.mongodb.net/webcourseproject?retryWrites=true&w=majority";
  const client = new MongoClient(url);
  const dbName = "webcourseproject";
  
  async function run() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      const col = db.collection("teams");
                                                                                                                                                    
      let teamDocument = {
        "id": "61b3b3880e1dcb655d0298fe",
        "teamname": "booster",
        "damage": "5",
        "member": "Vi,Jinx,Ziggs,Amumu,kevser"
      }
  
      await col.insertOne(teamDocument);
      const myDoc = await col.findOne();
      console.log(myDoc);
  
    } catch (err) {
      console.log(err.stack);
    } finally {
      await client.close();
    }
  }