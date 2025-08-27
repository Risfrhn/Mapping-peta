const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Trackers');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('DB connected'));

module.exports = db;
