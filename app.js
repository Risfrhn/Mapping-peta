const express = require('express')
const app = express()
const port = 3000


// db
require('./utils/db');
const User = require('./models.User');  



const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const dbName = "Trackers";

const client = new MongoClient(uri); // nggak perlu lagi pakai useNewUrlParser & useUnifiedTopology





app.set('view engine', 'ejs');
app.use(express.static("node_modules"));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('Dashboard', {
    tittle: 'Dashboard',
  })
})
app.get('/Tracker', (req, res) => {
  res.render('Tracker', {
    tittle: 'Tracker',
  })
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('404')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


