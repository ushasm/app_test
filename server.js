const express = require('express');
const bodyParser= require('body-parser')
const app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://mongo:27017/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

app.use(bodyParser.urlencoded({extended: true}))

app.listen(3000, function() {
  console.log('listening on 3000')
})

app.get('/', (req, res) => {
  res.send('Hello World')
})

