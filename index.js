const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log('my root api');
  res.send('Hello World! kev')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})