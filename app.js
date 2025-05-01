// app.js
const express = require('express');
const app = express();

// Your app's routes and middleware
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

module.exports = app;


// For dev
app.listen(8080, () => {
    console.log("server is listning to port 8080");
});

// For prod
module.exports = app;