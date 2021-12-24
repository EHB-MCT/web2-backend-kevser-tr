const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config()
const DB = require("./db/db");

const getAllTeams = require("./routes/read-teams");
const getTeamsDetails = require("./routes/read-teams-details");
const createTeams = require("./routes/create-teams");

app.use(
  cors({
    origin: "*",
    methods: "GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH",
    credentials: true,
  })
);

app.use(bodyParser.json())
app.use(express.Router());

app.get('/', (req, res) => {
  res.send('Teambuilder API is running !')
})

app.use("/teams", getAllTeams);
app.use("/teams/id", getTeamsDetails);
app.use("/teams", createTeams);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});