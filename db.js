const mongoose = require('mongoose');  //connection with the database
mongoose.connect('mongodb://localhost/books');
const db = mongoose.connection;
db.on('error', (err) => console.log('MongoDB error occured:', err))
db.once('open', () => {
  console.log('Connected to MongoDB')
})