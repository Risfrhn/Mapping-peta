require('dotenv').config();
const express = require('express')
const app = express()
const port = 3000
const session = require('express-session');
const { isLoggedIn } = require('./middleware/Auth');
const authController = require('./controllers/AuthControllers');



app.set('view engine', 'ejs');
app.use(express.static("node_modules"));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 * 24 } 
}))




app.get('/Login', (req, res) => {
  res.render('Login', {
    tittle: 'Welcome XYZ',
  })
})
app.post("/Login", authController.login);

app.get('/DaftarXYZ', (req, res) => {
  res.render('Register', {
    tittle: 'Daftar akun XYZ',
  })
})

app.post("/DaftarXYZ", authController.register);


app.get('/Dashboard', isLoggedIn, (req, res) => {
  res.render('Dashboard', {
    tittle: 'Dashboard',
  })
})

app.get('/Tracker', isLoggedIn, (req, res) => {
  res.render('Tracker', {
    tittle: 'Tracker',
  })
})


app.get('/logout', authController.logout);

app.use('/', (req, res) => {
  res.status(404)
  res.send('404')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})


