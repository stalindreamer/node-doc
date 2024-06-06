const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/mydb';

mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    // Your app logic here
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

app.listen(port, () => {
  console.log(`Node.js app listening at http://localhost:${port}`);
});
