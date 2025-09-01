// app.js
const express = require('express');
const cors = require('cors');
const authController = require('./controllers/AuthControllers');
const app = express();
const port = 3000;

// Middleware
app.use(express.static("node_modules"));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

// CORS
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// Routes
app.post("/Login", authController.login);
app.post("/API/DaftarXYZ", authController.register);

// 404 handler
app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
