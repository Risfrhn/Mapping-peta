const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'ejs');
app.use(express.static("node_modules"));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('Dashboard', {
    tittle: 'Dashboard',
  })
})

app.use('/', (req, res) => {
  res.status(404)
  res.send('404')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
