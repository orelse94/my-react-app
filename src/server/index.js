const express = require('express');
const app = express();
const pgCall = require('./postgres/postgres.js').retPgData;


app.use(express.static(__dirname +'./../../')); //serves the index.html
app.listen(3000); //listens on port 3000 -> http://localhost:3000/

// get data from postgres
// add query pgParams
app.get('/postgres/query', async (req, res) => {
  let data = await pgCall(req.body);
  console.log('waiting for data pg');
  res.status(200).send(data);
})
