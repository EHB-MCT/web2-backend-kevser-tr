const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000

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